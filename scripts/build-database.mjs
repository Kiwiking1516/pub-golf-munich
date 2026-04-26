#!/usr/bin/env node
/**
 * PUB GOLF — Database Builder
 * 
 * Combines all city files from scripts/cities/ into the final bar-database-raw.js
 * 
 * Usage:
 *   node scripts/build-database.mjs              — builds from ALL city files
 *   node scripts/build-database.mjs --list        — shows all available cities
 *   node scripts/build-database.mjs --only london dublin münchen  — builds with only these cities
 *   node scripts/build-database.mjs --exclude bristol edinburgh   — builds without these cities
 * 
 * Output:
 *   src/data/bar-database-raw.js (directly overwrites the app database)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CITIES_DIR = join(__dirname, 'cities');
const OUTPUT_PATH = join(__dirname, '..', 'src', 'data', 'bar-database-raw.js');

// ─── Parse arguments ────────────────────────────────────────
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
🍺 PubGolf Database Builder

Combines city files from scripts/cities/ into src/data/bar-database-raw.js

Commands:
  node scripts/build-database.mjs              Build from ALL city files
  node scripts/build-database.mjs --list       Show all available cities
  node scripts/build-database.mjs --only X Y   Build with only these cities
  node scripts/build-database.mjs --exclude X  Build without these cities
  node scripts/build-database.mjs --dry-run    Show what would be built without writing

City files are JSON files in scripts/cities/ created by scrape-city.mjs
`);
  process.exit(0);
}

// ─── Load all city files ────────────────────────────────────
function loadCities() {
  if (!existsSync(CITIES_DIR)) {
    console.error('❌ No scripts/cities/ folder found. Run scrape-city.mjs first.');
    process.exit(1);
  }

  const files = readdirSync(CITIES_DIR).filter(f => f.endsWith('.json')).sort();

  if (files.length === 0) {
    console.error('❌ No city files found in scripts/cities/. Run scrape-city.mjs first.');
    process.exit(1);
  }

  const cities = [];
  for (const file of files) {
    try {
      const data = JSON.parse(readFileSync(join(CITIES_DIR, file), 'utf-8'));
      cities.push(data);
    } catch (err) {
      console.warn(`⚠️ Skipping ${file}: ${err.message}`);
    }
  }

  return cities;
}

// ─── List mode ──────────────────────────────────────────────
if (args.includes('--list')) {
  const cities = loadCities();
  console.log('🍺 Available cities in scripts/cities/\n');
  console.log('  Key            Label               Bars    Scraped');
  console.log('  ─────────────  ──────────────────  ──────  ───────────────────');
  for (const city of cities) {
    const key = city.key.padEnd(13);
    const label = city.label.padEnd(18);
    const count = String(city.barCount).padStart(6);
    const date = city.scrapedAt ? city.scrapedAt.split('T')[0] : 'unknown';
    console.log(`  ${key}  ${label}  ${count}  ${date}`);
  }
  console.log(`\n  Total: ${cities.length} cities, ${cities.reduce((s, c) => s + c.barCount, 0)} bars`);
  process.exit(0);
}

// ─── Filter cities ──────────────────────────────────────────
let cities = loadCities();

const onlyIdx = args.indexOf('--only');
const excludeIdx = args.indexOf('--exclude');

if (onlyIdx !== -1) {
  const onlyCities = args.slice(onlyIdx + 1).filter(a => !a.startsWith('--'));
  cities = cities.filter(c => onlyCities.includes(c.key));
  if (cities.length === 0) {
    console.error('❌ None of the specified cities found. Available: ' + loadCities().map(c => c.key).join(', '));
    process.exit(1);
  }
} else if (excludeIdx !== -1) {
  const excludeCities = args.slice(excludeIdx + 1).filter(a => !a.startsWith('--'));
  cities = cities.filter(c => !excludeCities.includes(c.key));
}

const isDryRun = args.includes('--dry-run');

// ─── Build ──────────────────────────────────────────────────
console.log('🍺 PubGolf Database Builder');
console.log('══════════════════════════════════════\n');

let totalBars = 0;
const cityStats = [];

for (const city of cities) {
  console.log(`  📍 ${city.label}: ${city.barCount} bars`);
  totalBars += city.barCount;
  cityStats.push(`${city.label} (${city.barCount})`);
}

console.log(`\n  Total: ${totalBars} bars across ${cities.length} cities`);

if (isDryRun) {
  console.log('\n  🔍 Dry run — no files written');
  process.exit(0);
}

// ─── Generate JS file ───────────────────────────────────────
const emojiMap = {
  münchen: '🍺', berlin: '🐻', frankfurt: '🍏', hamburg: '🎵', köln: '🏛️',
  london: '🇬🇧', edinburgh: '🏴', manchester: '⚽', liverpool: '🎸',
  brighton: '🏖️', newcastle: '🍺', bristol: '🎭', dublin: '☘️',
  amsterdam: '🧡', prague: '🍺', barcelona: '🌞', paris: '🗼',
  lisbon: '🌊', rome: '🍷', vienna: '🎵', budapest: '♨️',
  warsaw: '🇵🇱', copenhagen: '🚲', oslo: '❄️', stockholm: '👑',
  zurich: '🏔️', brussels: '🍫', madrid: '☀️', athens: '🏛️',
};

const jsLines = [
  '/**',
  ` * PUB GOLF BAR DATABASE`,
  ` * ${totalBars} Bars & Pubs across ${cities.length} cities`,
  ` * Cities: ${cities.map(c => c.label).join(', ')}`,
  ` * Built: ${new Date().toISOString()}`,
  ' *',
  ' * Schema:',
  ' * id, city, name, address, district, lat, lng, drink, par, type, tags',
  ' */',
  '',
  'export const BAR_DATABASE = [',
];

for (const city of cities) {
  const emoji = emojiMap[city.key] || '📍';
  jsLines.push('');
  jsLines.push('  // ═══════════════════════════════════════════════════════════════');
  jsLines.push(`  // ${city.label.toUpperCase()}  ${emoji}  (${city.barCount} bars)`);
  jsLines.push('  // ═══════════════════════════════════════════════════════════════');
  jsLines.push('');

  for (const bar of city.bars) {
    const esc = s => (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const district = bar.district ? ` district: "${esc(bar.district)}",` : '';
    const tags = (bar.tags || []).map(t => `"${t}"`).join(', ');

    jsLines.push(`  { id: "${bar.id}", city: "${bar.city}", name: "${esc(bar.name)}", address: "${esc(bar.address)}",${district}`);
    jsLines.push(`    lat: ${bar.lat}, lng: ${bar.lng}, drink: "${esc(bar.drink)}", par: ${bar.par}, type: "${bar.type}",`);
    jsLines.push(`    tags: [${tags}] },`);
    jsLines.push('');
  }
}

jsLines.push('];');

writeFileSync(OUTPUT_PATH, jsLines.join('\n'), 'utf-8');

console.log(`\n══════════════════════════════════════`);
console.log(`✅ Database written: src/data/bar-database-raw.js`);
console.log(`   ${totalBars} bars across ${cities.length} cities`);
console.log(`\nNext: git add . && git commit -m "update bar database" && git push`);
