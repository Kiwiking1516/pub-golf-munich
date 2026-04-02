#!/usr/bin/env node
/**
 * PUB GOLF — OSM Bar Scraper v2 (bbox-based, no timeouts)
 * 
 * Usage:  node scripts/scrape-bars-v2.mjs
 * Output: scripts/output/osm-bars-raw.json + bar-database-new.js + scrape-stats.txt
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, 'output');

// ─── City configs with bounding boxes ───────────────────────
const CITIES = [
  {
    key: 'münchen', prefix: 'muc', label: 'München',
    bbox: '48.06,11.36,48.25,11.72',
    defaultDrinks: {
      brauhaus: 'Helles vom Fass 0,5l', biergarten: 'Maß Hell 1,0l',
      kneipe: 'Helles 0,5l', bar: 'Bier nach Wahl 0,5l', irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l', sportbar: 'Helles 0,5l',
      szene: 'Craft Bier 0,5l', craft: 'Craft Bier 0,5l',
    },
  },
  {
    key: 'berlin', prefix: 'ber', label: 'Berlin',
    bbox: '52.33,13.08,52.68,13.77',
    defaultDrinks: {
      brauhaus: 'Berliner Pilsner 0,5l', biergarten: 'Bier nach Wahl 0,5l',
      kneipe: 'Pilsner 0,5l', bar: 'Bier nach Wahl 0,5l', irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l', sportbar: 'Bier 0,5l',
      szene: 'Craft Bier 0,5l', craft: 'IPA 0,5l',
    },
  },
  {
    key: 'frankfurt', prefix: 'fra', label: 'Frankfurt am Main',
    bbox: '50.03,8.55,50.23,8.82',
    defaultDrinks: {
      brauhaus: 'Apfelwein 0,3l', biergarten: 'Apfelwein 0,3l',
      kneipe: 'Helles 0,5l', bar: 'Bier nach Wahl 0,5l', irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l', sportbar: 'Bier 0,5l',
      szene: 'Craft Bier 0,5l', craft: 'Craft Bier 0,5l',
    },
  },
  {
    key: 'hamburg', prefix: 'ham', label: 'Hamburg',
    bbox: '53.39,9.73,53.74,10.33',
    defaultDrinks: {
      brauhaus: 'Astra 0,5l', biergarten: 'Astra 0,5l',
      kneipe: 'Astra 0,5l', bar: 'Bier nach Wahl 0,5l', irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l', sportbar: 'Bier 0,5l',
      szene: 'Craft Bier 0,5l', craft: 'Craft Bier 0,5l',
    },
  },
  {
    key: 'köln', prefix: 'kol', label: 'Köln',
    bbox: '50.83,6.77,51.09,7.17',
    defaultDrinks: {
      brauhaus: 'Kölsch 0,2l', biergarten: 'Kölsch 0,2l',
      kneipe: 'Kölsch 0,2l', bar: 'Kölsch 0,2l', irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l', sportbar: 'Kölsch 0,2l',
      szene: 'Craft Bier 0,5l', craft: 'Craft Bier 0,5l',
    },
  },
];

// ─── Type classification ────────────────────────────────────
const TYPE_KEYWORDS = {
  brauhaus: ['brauhaus', 'bräuhaus', 'brauerei', 'brewery', 'bräu', 'bräustüberl'],
  biergarten: ['biergarten', 'beer garden', 'garten', 'terrasse', 'strandbar'],
  irish: ['irish', 'celtic', 'shamrock', 'dublin', 'kelly', 'murphy', 'paddy', "o'brien", 'guinness', 'kilkenny'],
  craft: ['craft', 'brew', 'tap', 'hopf', 'hops', 'ale house'],
  cocktailbar: ['cocktail', 'lounge', 'mixology', 'speakeasy'],
  sportbar: ['sport', 'kick', 'goal', 'stadium', 'arena', 'fußball'],
  szene: ['club', 'disco', 'elektro', 'techno', 'underground'],
};

function classifyType(name, tags) {
  const searchStr = [name, tags.cuisine || '', tags.description || '', tags.brewery || ''].join(' ').toLowerCase();
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
    .toLowerCase().replace(/[^a-zäöüß\s-]/g, '').trim() || undefined;
}

function extractAddress(tags) {
  const street = tags['addr:street'] || '';
  const number = tags['addr:housenumber'] || '';
  return street ? `${street} ${number}`.trim() : (tags['addr:full'] || '');
}

function generateTags(name, type, tags) {
  const result = [type];
  if (tags.outdoor_seating === 'yes') result.push('outdoor');
  if (tags.wheelchair === 'yes') result.push('barrierefrei');
  if (tags.cuisine) result.push(...tags.cuisine.split(';').map(c => c.trim().toLowerCase()));
  if (tags.brewery) result.push('hausbrauerei');
  return [...new Set(result)];
}

// ─── Overpass query using bbox (fast, no timeouts) ──────────
async function queryOverpass(cityConfig) {
  // Split into separate queries per amenity type to avoid overloading
  const amenities = ['bar', 'pub', 'biergarten', 'nightclub'];
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

    // Small delay between requests
    await new Promise(r => setTimeout(r, 1500));
  }

  return allElements;
}

// ─── Process OSM elements into bar records ──────────────────
function processElements(elements, cityConfig) {
  const seen = new Set();
  const bars = [];
  let idx = 50; // start after existing 50

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
    const drink = cityConfig.defaultDrinks[type] || 'Bier 0,5l';

    idx++;
    bars.push({
      id: `${cityConfig.prefix}-${String(idx).padStart(3, '0')}`,
      city: cityConfig.key,
      name,
      address: address || 'Adresse unbekannt',
      district,
      lat: Math.round(lat * 10000) / 10000,
      lng: Math.round(lng * 10000) / 10000,
      drink, par, type,
      tags: barTags,
    });
  }

  return bars;
}

// ─── Format bar for JS output ───────────────────────────────
function formatBar(bar) {
  const esc = s => (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const district = bar.district ? ` district: "${bar.district}",` : '';
  const tags = bar.tags.map(t => `"${t}"`).join(', ');
  return `  { id: "${bar.id}", city: "${bar.city}", name: "${esc(bar.name)}", address: "${esc(bar.address)}",${district}\n    lat: ${bar.lat}, lng: ${bar.lng}, drink: "${esc(bar.drink)}", par: ${bar.par}, type: "${bar.type}",\n    tags: [${tags}] },`;
}

// ─── Main ───────────────────────────────────────────────────
async function main() {
  console.log('🍺 PubGolf OSM Bar Scraper v2 (bbox)');
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
      console.log(`  → ${bars.length} unique bars after dedup`);

      const typeCounts = {};
      for (const bar of bars) typeCounts[bar.type] = (typeCounts[bar.type] || 0) + 1;
      console.log(`  → Types: ${Object.entries(typeCounts).map(([t, c]) => `${t}:${c}`).join(', ')}`);

      allBars.push(...bars);
      stats.push({ city: city.key, raw: elements.length, deduped: bars.length, types: typeCounts,
        withAddress: bars.filter(b => b.address !== 'Adresse unbekannt').length,
        withDistrict: bars.filter(b => b.district).length });

      console.log(`  ✅ done\n`);
      await new Promise(r => setTimeout(r, 3000)); // be nice between cities
    } catch (err) {
      console.error(`  ❌ ${err.message}\n`);
      stats.push({ city: city.key, error: err.message });
    }
  }

  // Write raw JSON
  writeFileSync(join(OUTPUT_DIR, 'osm-bars-raw.json'), JSON.stringify(allBars, null, 2));
  console.log(`📄 Raw JSON: scripts/output/osm-bars-raw.json`);

  // Write formatted JS
  const jsLines = [
    `/**\n * PUB GOLF BAR DATABASE — OSM IMPORT\n * ${allBars.length} bars scraped from OpenStreetMap\n * Generated: ${new Date().toISOString()}\n */\n`,
    'export const OSM_BAR_DATABASE = [',
  ];
  for (const city of CITIES) {
    const cityBars = allBars.filter(b => b.city === city.key);
    jsLines.push(`\n  // ═══ ${city.label.toUpperCase()} (${cityBars.length} bars) ═══\n`);
    for (const bar of cityBars) jsLines.push(formatBar(bar) + '\n');
  }
  jsLines.push('];');
  writeFileSync(join(OUTPUT_DIR, 'bar-database-new.js'), jsLines.join('\n'));
  console.log(`📄 Formatted JS: scripts/output/bar-database-new.js`);

  // Write stats
  const statsText = [`PUB GOLF OSM SCRAPE STATS — ${new Date().toISOString()}`, `Total: ${allBars.length} bars\n`,
    ...stats.map(s => s.error ? `${s.city}: ERROR — ${s.error}` :
      `${s.city}: ${s.deduped} bars (${s.withAddress} with address, ${s.withDistrict} with district)\n  Types: ${Object.entries(s.types).map(([t, c]) => `${t}:${c}`).join(', ')}`)
  ].join('\n');
  writeFileSync(join(OUTPUT_DIR, 'scrape-stats.txt'), statsText);
  console.log(`📄 Stats: scripts/output/scrape-stats.txt`);

  console.log(`\n══════════════════════════════════════`);
  console.log(`🎯 Total: ${allBars.length} bars across ${CITIES.length} cities`);
  console.log(`\nNext: node scripts/merge-bars.mjs`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
