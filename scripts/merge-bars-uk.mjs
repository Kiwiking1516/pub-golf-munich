#!/usr/bin/env node
/**
 * PUB GOLF — Merge UK bars into existing database
 * 
 * Reads the existing bar-database-raw.js and the scraped UK data,
 * appends UK bars, and outputs a combined file.
 * 
 * Usage:  node scripts/merge-bars-uk.mjs
 * Output: scripts/output/bar-database-with-uk.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log('🍺 PubGolf UK Bar Merger');
  console.log('══════════════════════════════════════\n');

  // Load existing database
  const existingPath = join(__dirname, '..', 'src', 'data', 'bar-database-raw.js');
  const existingModule = await import(join('file://', existingPath));
  const existingBars = existingModule.BAR_DATABASE;
  console.log(`Existing database: ${existingBars.length} bars`);

  // Check existing cities
  const existingCities = [...new Set(existingBars.map(b => b.city))];
  console.log(`Existing cities: ${existingCities.join(', ')}`);

  // Load UK scraped data
  const ukPath = join(__dirname, 'output', 'osm-bars-uk-raw.json');
  let ukBars;
  try {
    ukBars = JSON.parse(readFileSync(ukPath, 'utf-8'));
  } catch {
    console.error('❌ Run scrape-bars-uk.mjs first to generate UK data');
    process.exit(1);
  }
  console.log(`UK scraped: ${ukBars.length} bars\n`);

  // Merge — just append, no dedup needed (different cities)
  const merged = [...existingBars, ...ukBars];

  const ukCities = [...new Set(ukBars.map(b => b.city))];
  for (const city of ukCities) {
    const count = ukBars.filter(b => b.city === city).length;
    console.log(`${city}: ${count} bars added`);
  }

  // Write merged JS
  const emojiMap = {
    münchen: '🍺', berlin: '🐻', frankfurt: '🍏', hamburg: '🎵', köln: '🏛️',
    london: '🇬🇧', edinburgh: '🏴', manchester: '⚽', liverpool: '🎸',
    brighton: '🏖️', newcastle: '🍺', bristol: '🎭', dublin: '☘️',
  };

  const allCities = [...new Set(merged.map(b => b.city))];

  const jsLines = [
    '/**',
    ` * PUB GOLF BAR DATABASE`,
    ` * ${merged.length} Bars & Pubs`,
    ` * Cities: ${allCities.join(', ')}`,
    ' *',
    ' * Schema:',
    ' * id, city, name, address, district, lat, lng, drink, par, type, tags',
    ' */',
    '',
    'export const BAR_DATABASE = [',
  ];

  for (const city of allCities) {
    const cityBars = merged.filter(b => b.city === city);
    const emoji = emojiMap[city] || '📍';

    jsLines.push('');
    jsLines.push(`  // ═══════════════════════════════════════════════════════════════`);
    jsLines.push(`  // ${city.toUpperCase()}  ${emoji}  (${cityBars.length} bars)`);
    jsLines.push(`  // ═══════════════════════════════════════════════════════════════`);
    jsLines.push('');

    for (const bar of cityBars) {
      const esc = s => (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const district = bar.district ? ` district: "${esc(bar.district)}",` : '';
      const tags = (bar.tags || []).map(t => `"${t}"`).join(', ');
      const notes = bar.notes ? ` notes: "${esc(bar.notes)}",` : '';

      jsLines.push(`  { id: "${bar.id}", city: "${bar.city}", name: "${esc(bar.name)}", address: "${esc(bar.address)}",${district}`);
      jsLines.push(`    lat: ${bar.lat}, lng: ${bar.lng}, drink: "${esc(bar.drink)}", par: ${bar.par}, type: "${bar.type}",`);
      jsLines.push(`    tags: [${tags}]${notes} },`);
      jsLines.push('');
    }
  }

  jsLines.push('];');

  const outputPath = join(__dirname, 'output', 'bar-database-with-uk.js');
  writeFileSync(outputPath, jsLines.join('\n'), 'utf-8');

  console.log(`\n══════════════════════════════════════`);
  console.log(`Total: ${merged.length} bars (${existingBars.length} existing + ${ukBars.length} UK)`);
  console.log(`📄 scripts/output/bar-database-with-uk.js`);
  console.log(`\nTo use: cp scripts/output/bar-database-with-uk.js src/data/bar-database-raw.js`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
