#!/usr/bin/env node
/**
 * PUB GOLF — Merge OSM bars into existing database
 * 
 * Reads the existing bar-database-raw.js and the scraped OSM data,
 * deduplicates by name similarity + proximity, and outputs a merged file.
 * 
 * Usage:
 *   node scripts/merge-bars.mjs
 * 
 * Output:
 *   scripts/output/bar-database-merged.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Haversine distance in meters ───────────────────────────
function distanceM(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ─── Normalize name for comparison ──────────────────────────
function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/[''`´]/g, '')
    .replace(/[^a-zäöüß0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// ─── Check if two bars are likely duplicates ────────────────
function isDuplicate(existing, candidate) {
  // Must be same city
  if (existing.city !== candidate.city) return false;

  // Check distance — if within 80m, likely same place
  const dist = distanceM(existing.lat, existing.lng, candidate.lat, candidate.lng);

  const nameA = normalizeName(existing.name);
  const nameB = normalizeName(candidate.name);

  // Exact name match (normalized)
  if (nameA === nameB) return true;

  // One contains the other + within 200m
  if (dist < 200 && (nameA.includes(nameB) || nameB.includes(nameA))) return true;

  // Very close proximity (50m) — likely same venue with different name
  if (dist < 50) return true;

  // Significant word overlap + within 150m
  if (dist < 150) {
    const wordsA = nameA.split(' ').filter(w => w.length > 2);
    const wordsB = nameB.split(' ').filter(w => w.length > 2);
    const overlap = wordsA.filter(w => wordsB.some(wb => wb.includes(w) || w.includes(wb)));
    if (overlap.length >= 2) return true;
  }

  return false;
}

async function main() {
  console.log('🍺 PubGolf Bar Database Merger');
  console.log('══════════════════════════════════════\n');

  // Load existing database
  const existingPath = join(__dirname, '..', 'src', 'data', 'bar-database-raw.js');
  const existingSource = readFileSync(existingPath, 'utf-8');
  // Dynamic import for .js with export
  const existingModule = await import(join('file://', existingPath));
  const existingBars = existingModule.BAR_DATABASE;
  console.log(`Existing database: ${existingBars.length} bars`);

  // Load OSM scraped data
  const osmPath = join(__dirname, 'output', 'osm-bars-raw.json');
  let osmBars;
  try {
    osmBars = JSON.parse(readFileSync(osmPath, 'utf-8'));
  } catch {
    console.error('❌ Run scrape-bars.mjs first to generate OSM data');
    process.exit(1);
  }
  console.log(`OSM scraped: ${osmBars.length} bars\n`);

  // Merge per city
  const merged = [...existingBars]; // keep all existing bars as-is
  let added = 0;
  let skipped = 0;

  const cities = ['münchen', 'berlin', 'frankfurt', 'hamburg', 'köln'];

  for (const city of cities) {
    const cityExisting = merged.filter(b => b.city === city);
    const cityOsm = osmBars.filter(b => b.city === city);
    let cityAdded = 0;
    let citySkipped = 0;

    // Re-number new bars starting after the highest existing index
    const existingIds = cityExisting.map(b => parseInt(b.id.split('-')[1]));
    let nextIdx = Math.max(...existingIds, 0);

    for (const candidate of cityOsm) {
      const isDupe = cityExisting.some(ex => isDuplicate(ex, candidate));

      if (isDupe) {
        citySkipped++;
        continue;
      }

      // Assign new ID
      nextIdx++;
      const prefix = candidate.id.split('-')[0];
      candidate.id = `${prefix}-${String(nextIdx).padStart(3, '0')}`;

      // Strip internal metadata
      delete candidate._osmId;
      delete candidate._osmAmenity;

      merged.push(candidate);
      cityExisting.push(candidate); // so subsequent dupes check against newly added too
      cityAdded++;
    }

    console.log(`${city}: +${cityAdded} new, ${citySkipped} duplicates skipped (total: ${cityExisting.length})`);
    added += cityAdded;
    skipped += citySkipped;
  }

  console.log(`\n══════════════════════════════════════`);
  console.log(`Total: ${merged.length} bars (${existingBars.length} existing + ${added} new, ${skipped} dupes skipped)`);

  // ─── Write merged JS ─────────────────────────────────────
  const jsLines = [
    '/**',
    ' * PUB GOLF BAR DATABASE',
    ` * ${merged.length} Bars & Kneipen`,
    ' * Städte: München, Berlin, Frankfurt, Hamburg, Köln',
    ' *',
    ' * Schema:',
    ' * id          – eindeutige ID (stadt-###)',
    ' * city        – stadtschlüssel',
    ' * name        – Name der Bar/Kneipe',
    ' * address     – Straße + Hausnummer',
    ' * district    – Stadtviertel (für Cluster-Routing)',
    ' * lat / lng   – Koordinaten (WGS84, auf ~20m genau)',
    ' * drink       – empfohlenes Getränk',
    ' * par         – Loch-Par (3–6)',
    ' * type        – brauhaus | kneipe | bar | biergarten | cocktailbar | irish | sportbar | szene | craft',
    ' * tags        – Array für Filterung & Storytelling',
    ' */',
    '',
    'export const BAR_DATABASE = [',
  ];

  for (const city of cities) {
    const cityBars = merged.filter(b => b.city === city);
    const emojiMap = { münchen: '🍺', berlin: '🐻', frankfurt: '🍏', hamburg: '🎵', köln: '🏛️' };
    const prefix = cityBars[0]?.id.split('-')[0] || city.substring(0, 3);
    jsLines.push('');
    jsLines.push(`  // ═══════════════════════════════════════════════════════════════`);
    jsLines.push(`  // ${city.toUpperCase()}  ${emojiMap[city] || ''}  (${prefix}-001 bis ${prefix}-${String(cityBars.length).padStart(3, '0')})`);
    jsLines.push(`  // ═══════════════════════════════════════════════════════════════`);
    jsLines.push('');

    for (const bar of cityBars) {
      const district = bar.district ? `district: "${bar.district}",` : '';
      const esc = s => (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const tags = (bar.tags || []).map(t => `"${t}"`).join(', ');
      const notes = bar.notes ? ` notes: "${esc(bar.notes)}",` : '';

      jsLines.push(`  { id: "${bar.id}", city: "${bar.city}", name: "${esc(bar.name)}", address: "${esc(bar.address)}", ${district}`);
      jsLines.push(`    lat: ${bar.lat}, lng: ${bar.lng}, drink: "${esc(bar.drink)}", par: ${bar.par}, type: "${bar.type}",`);
      jsLines.push(`    tags: [${tags}]${notes} },`);
      jsLines.push('');
    }
  }

  jsLines.push('];');

  const outputPath = join(__dirname, 'output', 'bar-database-merged.js');
  writeFileSync(outputPath, jsLines.join('\n'), 'utf-8');
  console.log(`\n📄 Merged database: scripts/output/bar-database-merged.js`);
  console.log(`\nTo use: copy bar-database-merged.js → src/data/bar-database-raw.js`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
