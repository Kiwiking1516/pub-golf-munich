#!/usr/bin/env node
/**
 * PUB GOLF — OSM Bar Scraper UK Edition
 * 
 * Pulls bars/pubs from OpenStreetMap for UK cities.
 * Same format as the German scraper — output merges directly.
 * 
 * Usage:  node scripts/scrape-bars-uk.mjs
 * Output: scripts/output/osm-bars-uk-raw.json + bar-database-uk.js
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, 'output');

const CITIES = [
  {
    key: 'london', prefix: 'lon', label: 'London',
    bbox: '51.28,-0.51,51.69,0.33',
    defaultDrinks: {
      pub: 'Pint of Lager', bar: 'Pint of Lager', irish: 'Pint of Guinness',
      craft: 'Craft IPA Pint', cocktailbar: 'Craft Beer', sportbar: 'Pint of Lager',
      club: 'Pint of Lager', brauhaus: 'Pint of Ale', biergarten: 'Pint of Cider',
      kneipe: 'Pint of Lager', szene: 'Craft Beer',
    },
  },
  {
    key: 'edinburgh', prefix: 'edi', label: 'Edinburgh',
    bbox: '55.89,-3.35,55.99,-3.08',
    defaultDrinks: {
      pub: 'Pint of Tennent\'s', bar: 'Pint of Lager', irish: 'Pint of Guinness',
      craft: 'Craft IPA Pint', cocktailbar: 'Craft Beer', sportbar: 'Pint of Tennent\'s',
      club: 'Pint of Lager', brauhaus: 'Pint of Ale', biergarten: 'Pint of Cider',
      kneipe: 'Pint of Tennent\'s', szene: 'Craft Beer',
    },
  },
  {
    key: 'manchester', prefix: 'man', label: 'Manchester',
    bbox: '53.42,-2.32,53.52,-2.15',
    defaultDrinks: {
      pub: 'Pint of Lager', bar: 'Pint of Lager', irish: 'Pint of Guinness',
      craft: 'Craft IPA Pint', cocktailbar: 'Craft Beer', sportbar: 'Pint of Lager',
      club: 'Pint of Lager', brauhaus: 'Pint of Ale', biergarten: 'Pint of Cider',
      kneipe: 'Pint of Lager', szene: 'Craft Beer',
    },
  },
  {
    key: 'liverpool', prefix: 'liv', label: 'Liverpool',
    bbox: '53.37,-3.02,53.47,-2.85',
    defaultDrinks: {
      pub: 'Pint of Lager', bar: 'Pint of Lager', irish: 'Pint of Guinness',
      craft: 'Craft IPA Pint', cocktailbar: 'Craft Beer', sportbar: 'Pint of Lager',
      club: 'Pint of Lager', brauhaus: 'Pint of Ale', biergarten: 'Pint of Cider',
      kneipe: 'Pint of Lager', szene: 'Craft Beer',
    },
  },
  {
    key: 'brighton', prefix: 'bri', label: 'Brighton',
    bbox: '50.80,-0.20,50.87,-0.05',
    defaultDrinks: {
      pub: 'Pint of Lager', bar: 'Pint of Lager', irish: 'Pint of Guinness',
      craft: 'Craft IPA Pint', cocktailbar: 'Craft Beer', sportbar: 'Pint of Lager',
      club: 'Pint of Lager', brauhaus: 'Pint of Ale', biergarten: 'Pint of Cider',
      kneipe: 'Pint of Lager', szene: 'Craft Beer',
    },
  },
  {
    key: 'newcastle', prefix: 'new', label: 'Newcastle',
    bbox: '54.95,-1.70,55.02,-1.55',
    defaultDrinks: {
      pub: 'Pint of Newcastle Brown', bar: 'Pint of Lager', irish: 'Pint of Guinness',
      craft: 'Craft IPA Pint', cocktailbar: 'Craft Beer', sportbar: 'Pint of Lager',
      club: 'Pint of Lager', brauhaus: 'Pint of Ale', biergarten: 'Pint of Cider',
      kneipe: 'Pint of Newcastle Brown', szene: 'Craft Beer',
    },
  },
  {
    key: 'bristol', prefix: 'brs', label: 'Bristol',
    bbox: '51.40,-2.70,51.50,-2.50',
    defaultDrinks: {
      pub: 'Pint of Lager', bar: 'Pint of Lager', irish: 'Pint of Guinness',
      craft: 'Craft IPA Pint', cocktailbar: 'Craft Beer', sportbar: 'Pint of Lager',
      club: 'Pint of Lager', brauhaus: 'Pint of Ale', biergarten: 'Pint of Cider',
      kneipe: 'Pint of Lager', szene: 'Craft Beer',
    },
  },
  {
    key: 'dublin', prefix: 'dub', label: 'Dublin',
    bbox: '53.28,-6.39,53.41,-6.11',
    defaultDrinks: {
      pub: 'Pint of Guinness', bar: 'Pint of Guinness', irish: 'Pint of Guinness',
      craft: 'Craft IPA Pint', cocktailbar: 'Craft Beer', sportbar: 'Pint of Guinness',
      club: 'Pint of Lager', brauhaus: 'Pint of Smithwick\'s', biergarten: 'Pint of Cider',
      kneipe: 'Pint of Guinness', szene: 'Craft Beer',
    },
  },
];

// ─── Type classification (UK-tuned) ─────────────────────────
const TYPE_KEYWORDS = {
  brauhaus: ['brewery', 'brewhouse', 'brewing', 'brewpub', 'ale house', 'alehouse'],
  biergarten: ['beer garden', 'garden bar', 'rooftop', 'terrace'],
  irish: ['irish', 'celtic', 'shamrock', "o'", "mc", 'paddy', 'murphy', 'dublin', 'guinness'],
  craft: ['craft', 'tap', 'taproom', 'hop', 'brew dog', 'brewdog', 'ale'],
  cocktailbar: ['cocktail', 'lounge', 'mixology', 'speakeasy', 'gin'],
  sportbar: ['sport', 'match', 'goal', 'stadium', 'football', 'rugby'],
  szene: ['club', 'disco', 'nightclub', 'dance', 'techno'],
};

function classifyType(name, tags) {
  const searchStr = [name, tags.cuisine || '', tags.description || ''].join(' ').toLowerCase();
  for (const [type, keywords] of Object.entries(TYPE_KEYWORDS)) {
    if (keywords.some(kw => searchStr.includes(kw))) return type;
  }
  if (tags.amenity === 'pub') return 'kneipe';  // maps to "pub" in UK context
  if (tags.amenity === 'nightclub') return 'szene';
  return 'bar';
}

function assignPar(type) {
  const map = { biergarten: 4, brauhaus: 4, irish: 4, cocktailbar: 3, sportbar: 3, craft: 3, szene: 3, kneipe: 3, bar: 3 };
  return map[type] || 3;
}

function extractDistrict(tags) {
  return (tags['addr:suburb'] || tags['addr:city_district'] || tags['addr:neighbourhood'] || tags['addr:quarter'] || '')
    .toLowerCase().trim() || undefined;
}

function extractAddress(tags) {
  const street = tags['addr:street'] || '';
  const number = tags['addr:housenumber'] || '';
  return street ? `${number} ${street}`.trim() : (tags['addr:full'] || '');
}

function generateTags(name, type, tags) {
  const result = [type];
  if (tags.outdoor_seating === 'yes') result.push('outdoor');
  if (tags.real_ale === 'yes') result.push('real-ale');
  if (tags.cuisine) result.push(...tags.cuisine.split(';').map(c => c.trim().toLowerCase()));
  if (tags.microbrewery === 'yes') result.push('microbrewery');
  if (tags.food === 'yes') result.push('food');
  return [...new Set(result)];
}

// ─── Overpass query ─────────────────────────────────────────
async function queryOverpass(cityConfig) {
  const amenities = ['bar', 'pub', 'nightclub'];
  const allElements = [];

  for (const amenity of amenities) {
    const query = `[out:json][timeout:90];(node["amenity"="${amenity}"]["name"](${cityConfig.bbox});way["amenity"="${amenity}"]["name"](${cityConfig.bbox}););out center body;`;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    process.stdout.write(`  Fetching ${amenity}s...`);

    try {
      const response = await fetch(url);
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

function processElements(elements, cityConfig) {
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
    const drink = cityConfig.defaultDrinks[type] || 'Pint of Lager';

    idx++;
    bars.push({
      id: `${cityConfig.prefix}-${String(idx).padStart(3, '0')}`,
      city: cityConfig.key,
      name,
      address: address || 'Address unknown',
      district,
      lat: Math.round(lat * 10000) / 10000,
      lng: Math.round(lng * 10000) / 10000,
      drink, par, type,
      tags: barTags,
    });
  }

  return bars;
}

function formatBar(bar) {
  const esc = s => (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const district = bar.district ? ` district: "${bar.district}",` : '';
  const tags = bar.tags.map(t => `"${t}"`).join(', ');
  return `  { id: "${bar.id}", city: "${bar.city}", name: "${esc(bar.name)}", address: "${esc(bar.address)}",${district}\n    lat: ${bar.lat}, lng: ${bar.lng}, drink: "${esc(bar.drink)}", par: ${bar.par}, type: "${bar.type}",\n    tags: [${tags}] },`;
}

async function main() {
  console.log('🍺 PubGolf OSM Bar Scraper — UK Edition');
  console.log('══════════════════════════════════════\n');

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const allBars = [];
  const stats = [];

  for (const city of CITIES) {
    console.log(`📍 ${city.label} [${city.bbox}]`);
    try {
      const elements = await queryOverpass(city);
      console.log(`  → ${elements.length} raw OSM elements`);

      const bars = processElements(elements, city);
      console.log(`  → ${bars.length} unique bars`);

      const typeCounts = {};
      for (const bar of bars) typeCounts[bar.type] = (typeCounts[bar.type] || 0) + 1;
      console.log(`  → Types: ${Object.entries(typeCounts).map(([t, c]) => `${t}:${c}`).join(', ')}`);

      allBars.push(...bars);
      stats.push({ city: city.key, raw: elements.length, deduped: bars.length, types: typeCounts });

      console.log(`  ✅ done\n`);
      await new Promise(r => setTimeout(r, 3000));
    } catch (err) {
      console.error(`  ❌ ${err.message}\n`);
      stats.push({ city: city.key, error: err.message });
    }
  }

  // Write raw JSON
  writeFileSync(join(OUTPUT_DIR, 'osm-bars-uk-raw.json'), JSON.stringify(allBars, null, 2));

  // Write formatted JS (append-ready format)
  const jsLines = [
    `/**\n * PUB GOLF BAR DATABASE — UK + IRELAND\n * ${allBars.length} bars scraped from OpenStreetMap\n * Generated: ${new Date().toISOString()}\n */\n`,
    'export const UK_BAR_DATABASE = [',
  ];
  for (const city of CITIES) {
    const cityBars = allBars.filter(b => b.city === city.key);
    jsLines.push(`\n  // ═══ ${city.label.toUpperCase()} (${cityBars.length} bars) ═══\n`);
    for (const bar of cityBars) jsLines.push(formatBar(bar) + '\n');
  }
  jsLines.push('];');
  writeFileSync(join(OUTPUT_DIR, 'bar-database-uk.js'), jsLines.join('\n'));

  // Write stats
  const statsText = [`PUB GOLF UK SCRAPE — ${new Date().toISOString()}`, `Total: ${allBars.length} bars\n`,
    ...stats.map(s => s.error ? `${s.city}: ERROR — ${s.error}` :
      `${s.city}: ${s.deduped} bars\n  Types: ${Object.entries(s.types).map(([t, c]) => `${t}:${c}`).join(', ')}`)
  ].join('\n');
  writeFileSync(join(OUTPUT_DIR, 'scrape-stats-uk.txt'), statsText);

  console.log(`══════════════════════════════════════`);
  console.log(`🎯 Total: ${allBars.length} bars across ${CITIES.length} cities`);
  console.log(`\n📄 scripts/output/osm-bars-uk-raw.json`);
  console.log(`📄 scripts/output/bar-database-uk.js`);
  console.log(`📄 scripts/output/scrape-stats-uk.txt`);
  console.log(`\nNext: Merge UK bars into the main database and add UK cities to the app`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
