#!/usr/bin/env node
/**
 * PUB GOLF — Universal City Scraper
 * 
 * Scrapes bars from ONE city and saves it as a standalone JSON file.
 * Each city gets its own file in scripts/cities/ — your bar database collection.
 * 
 * Usage:
 *   node scripts/scrape-city.mjs <key> <prefix> <label> <bbox> [drink]
 * 
 * Examples:
 *   node scripts/scrape-city.mjs amsterdam ams Amsterdam "52.33,4.73,52.43,5.02" "Heineken 0.5l"
 *   node scripts/scrape-city.mjs prague prg Prague "50.00,14.30,50.13,14.55" "Pilsner Urquell 0.5l"
 *   node scripts/scrape-city.mjs barcelona bcn Barcelona "41.32,2.07,41.47,2.23" "Estrella Damm 0.5l"
 * 
 * Output:
 *   scripts/cities/<key>.json  (standalone city bar file)
 * 
 * Then run: node scripts/build-database.mjs
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CITIES_DIR = join(__dirname, 'cities');

// ─── Parse arguments ────────────────────────────────────────
const args = process.argv.slice(2);

if (args.length < 4) {
  console.log(`
🍺 PubGolf City Scraper

Usage:
  node scripts/scrape-city.mjs <key> <prefix> <label> <bbox> [default-drink]

Arguments:
  key           Lowercase city ID, no spaces (e.g., amsterdam, prague)
  prefix        3-letter ID prefix for bars (e.g., ams, prg)
  label         Display name (e.g., "Amsterdam", "Prague")
  bbox          Bounding box: "south,west,north,east"
                Get it from bboxfinder.com — draw a rectangle, copy the numbers
  default-drink Optional default drink (e.g., "Pilsner 0.5l"), defaults to "Beer 0.5l"

Examples:
  node scripts/scrape-city.mjs amsterdam ams Amsterdam "52.33,4.73,52.43,5.02"
  node scripts/scrape-city.mjs prague prg Prague "50.00,14.30,50.13,14.55" "Pilsner Urquell 0.5l"
  node scripts/scrape-city.mjs dublin dub Dublin "53.28,-6.39,53.41,-6.11" "Pint of Guinness"

Get bbox coordinates:
  1. Go to bboxfinder.com
  2. Draw a rectangle around your city
  3. Copy the coordinates shown at the bottom
`);
  process.exit(0);
}

const [key, prefix, label, bbox, defaultDrink = 'Beer 0.5l'] = args;

// Validate bbox
const bboxParts = bbox.split(',').map(Number);
if (bboxParts.length !== 4 || bboxParts.some(isNaN)) {
  console.error('❌ Invalid bbox. Format: "south,west,north,east" (e.g., "52.33,4.73,52.43,5.02")');
  process.exit(1);
}

console.log(`🍺 Scraping: ${label}`);
console.log(`   Key: ${key} | Prefix: ${prefix} | Bbox: ${bbox}`);
console.log(`   Default drink: ${defaultDrink}`);
console.log('══════════════════════════════════════\n');

// ─── Type classification ────────────────────────────────────
const TYPE_KEYWORDS = {
  brauhaus: ['brauhaus', 'bräuhaus', 'brauerei', 'brewery', 'brewhouse', 'brewing', 'brewpub', 'bräu'],
  biergarten: ['biergarten', 'beer garden', 'garden bar', 'rooftop', 'terrasse', 'strandbar'],
  irish: ['irish', 'celtic', 'shamrock', 'dublin', 'kelly', 'murphy', 'paddy', "o'brien", 'guinness'],
  craft: ['craft', 'tap', 'taproom', 'hop', 'brewdog', 'ale house'],
  cocktailbar: ['cocktail', 'lounge', 'mixology', 'speakeasy', 'gin'],
  sportbar: ['sport', 'match', 'goal', 'stadium', 'football', 'rugby', 'fußball'],
  szene: ['club', 'disco', 'nightclub', 'dance', 'techno', 'underground'],
};

function classifyType(name, tags) {
  const searchStr = [name, tags.cuisine || '', tags.description || ''].join(' ').toLowerCase();
  if (tags.amenity === 'biergarten') return 'biergarten';
  for (const [type, keywords] of Object.entries(TYPE_KEYWORDS)) {
    if (keywords.some(kw => searchStr.includes(kw))) return type;
  }
  if (tags.amenity === 'pub') return 'kneipe';
  if (tags.amenity === 'nightclub') return 'szene';
  return 'bar';
}

function assignPar(type) {
  const map = { biergarten: 5, brauhaus: 4, irish: 4, cocktailbar: 3, sportbar: 3, craft: 3, szene: 3, kneipe: 3, bar: 3 };
  return map[type] || 3;
}

function extractDistrict(tags) {
  return (tags['addr:suburb'] || tags['addr:city_district'] || tags['addr:neighbourhood'] || tags['addr:quarter'] || '')
    .toLowerCase().trim() || undefined;
}

function extractAddress(tags) {
  const street = tags['addr:street'] || '';
  const number = tags['addr:housenumber'] || '';
  if (street) return `${number} ${street}`.trim();
  return tags['addr:full'] || '';
}

function generateTags(name, type, tags) {
  const result = [type];
  if (tags.outdoor_seating === 'yes') result.push('outdoor');
  if (tags.wheelchair === 'yes') result.push('accessible');
  if (tags.cuisine) result.push(...tags.cuisine.split(';').map(c => c.trim().toLowerCase()));
  if (tags.brewery || tags.microbrewery === 'yes') result.push('brewery');
  if (tags.food === 'yes') result.push('food');
  if (tags.real_ale === 'yes') result.push('real-ale');
  return [...new Set(result)];
}

// ─── Overpass query ─────────────────────────────────────────
async function queryOverpass() {
  const amenities = ['bar', 'pub', 'biergarten', 'nightclub'];
  const allElements = [];

  for (const amenity of amenities) {
    const query = `[out:json][timeout:90];(node["amenity"="${amenity}"]["name"](${bbox});way["amenity"="${amenity}"]["name"](${bbox}););out center body;`;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    process.stdout.write(`  Fetching ${amenity}s...`);

    try {
      const response = await fetch(url, { headers: { 'User-Agent': 'PubGolf/1.0', 'Accept': 'application/json' } });
      if (!response.ok) {
        console.log(` ⚠️ ${response.status}`);
        continue;
      }
      const data = await response.json();
      const count = data.elements?.length || 0;
      console.log(` ${count}`);
      allElements.push(...(data.elements || []));
    } catch (err) {
      console.log(` ⚠️ ${err.message}`);
    }

    await new Promise(r => setTimeout(r, 2000));
  }

  return allElements;
}

// ─── Process ────────────────────────────────────────────────
function processElements(elements) {
  const seen = new Set();
  const bars = [];
  let idx = 0;

  for (const el of elements) {
    const tags = el.tags || {};
    const name = tags.name;
    if (!name) continue;

    const lat = el.lat || el.center?.lat;
    const lng = el.lon || el.center?.lon;
    if (!lat || !lng) continue;

    const dedupeKey = `${name.toLowerCase()}-${lat.toFixed(3)}-${lng.toFixed(3)}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    const type = classifyType(name, tags);
    const par = assignPar(type);
    const district = extractDistrict(tags);
    const address = extractAddress(tags);
    const barTags = generateTags(name, type, tags);

    idx++;
    bars.push({
      id: `${prefix}-${String(idx).padStart(3, '0')}`,
      city: key,
      name,
      address: address || 'Address unknown',
      district,
      lat: Math.round(lat * 10000) / 10000,
      lng: Math.round(lng * 10000) / 10000,
      drink: defaultDrink,
      par,
      type,
      tags: barTags,
    });
  }

  return bars;
}

// ─── Main ───────────────────────────────────────────────────
async function main() {
  const elements = await queryOverpass();
  console.log(`\n  → ${elements.length} raw OSM elements`);

  const bars = processElements(elements);
  console.log(`  → ${bars.length} unique bars after dedup`);

  if (bars.length === 0) {
    console.log('\n⚠️ No bars found. The API may be rate-limiting. Try again in a few minutes.');
    process.exit(0);
  }

  // Count by type
  const typeCounts = {};
  for (const bar of bars) typeCounts[bar.type] = (typeCounts[bar.type] || 0) + 1;
  console.log(`  → Types: ${Object.entries(typeCounts).map(([t, c]) => `${t}:${c}`).join(', ')}`);

  // Save to cities folder
  mkdirSync(CITIES_DIR, { recursive: true });

  const cityFile = {
    key,
    prefix,
    label,
    bbox,
    defaultDrink,
    scrapedAt: new Date().toISOString(),
    barCount: bars.length,
    bars,
  };

  const outputPath = join(CITIES_DIR, `${key}.json`);
  writeFileSync(outputPath, JSON.stringify(cityFile, null, 2));

  console.log(`\n══════════════════════════════════════`);
  console.log(`✅ ${bars.length} bars saved to scripts/cities/${key}.json`);
  console.log(`\nNext: node scripts/build-database.mjs`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
