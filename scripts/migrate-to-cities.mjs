#!/usr/bin/env node
/**
 * PUB GOLF — Migrate existing bar data into per-city files
 * 
 * Reads your existing bar-database-raw.js and splits it into
 * individual city JSON files in scripts/cities/
 * 
 * Run this ONCE to set up, then use scrape-city.mjs + build-database.mjs going forward.
 * 
 * Usage:  node scripts/migrate-to-cities.mjs
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CITIES_DIR = join(__dirname, 'cities');
const DB_PATH = join(__dirname, '..', 'src', 'data', 'bar-database-raw.js');

async function main() {
  console.log('🍺 Migrating existing database to per-city files');
  console.log('══════════════════════════════════════\n');

  mkdirSync(CITIES_DIR, { recursive: true });

  // Load existing database
  const module = await import(join('file://', DB_PATH));
  const bars = module.BAR_DATABASE;
  console.log(`Loaded ${bars.length} bars from existing database\n`);

  // Group by city
  const cityGroups = {};
  for (const bar of bars) {
    if (!cityGroups[bar.city]) cityGroups[bar.city] = [];
    cityGroups[bar.city].push(bar);
  }

  // Prefix map (guess from existing IDs)
  for (const [cityKey, cityBars] of Object.entries(cityGroups)) {
    const prefix = cityBars[0]?.id?.split('-')[0] || cityKey.substring(0, 3);

    const cityFile = {
      key: cityKey,
      prefix,
      label: cityKey.charAt(0).toUpperCase() + cityKey.slice(1),
      bbox: 'migrated',
      defaultDrink: cityBars[0]?.drink || 'Beer 0.5l',
      scrapedAt: new Date().toISOString(),
      barCount: cityBars.length,
      bars: cityBars,
    };

    const outputPath = join(CITIES_DIR, `${cityKey}.json`);
    writeFileSync(outputPath, JSON.stringify(cityFile, null, 2));
    console.log(`  ✅ ${cityKey}: ${cityBars.length} bars → scripts/cities/${cityKey}.json`);
  }

  console.log(`\n══════════════════════════════════════`);
  console.log(`✅ ${Object.keys(cityGroups).length} city files created in scripts/cities/`);
  console.log(`\nYou can now use:`);
  console.log(`  node scripts/build-database.mjs --list     — see all cities`);
  console.log(`  node scripts/build-database.mjs            — rebuild database from all cities`);
  console.log(`  node scripts/scrape-city.mjs ...            — add a new city`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
