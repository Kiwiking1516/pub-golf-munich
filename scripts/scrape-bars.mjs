#!/usr/bin/env node
/**
 * PUB GOLF — OSM Bar Scraper
 * 
 * Pulls all bars, pubs, biergärten, and nightclubs from OpenStreetMap
 * for the 5 PubGolf cities via the Overpass API.
 * 
 * Usage:
 *   node scripts/scrape-bars.mjs
 * 
 * Output:
 *   scripts/output/osm-bars-raw.json     — raw OSM data
 *   scripts/output/bar-database-new.js   — formatted for bar-database-raw.js
 *   scripts/output/scrape-stats.txt      — summary stats
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, 'output');

// ─── City configs ───────────────────────────────────────────
const CITIES = [
  {
    key: 'münchen',
    prefix: 'muc',
    osmArea: 'München',
    adminLevel: '6',
    center: { lat: 48.1351, lng: 11.5820 },
    defaultDrinks: {
      brauhaus: 'Helles vom Fass 0,5l',
      biergarten: 'Maß Hell 1,0l',
      kneipe: 'Helles 0,5l',
      bar: 'Bier nach Wahl 0,5l',
      irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l',
      sportbar: 'Helles 0,5l',
      szene: 'Craft Bier 0,5l',
      craft: 'Craft Bier 0,5l',
    },
  },
  {
    key: 'berlin',
    prefix: 'ber',
    osmArea: 'Berlin',
    adminLevel: '4',
    center: { lat: 52.5200, lng: 13.4050 },
    defaultDrinks: {
      brauhaus: 'Berliner Pilsner 0,5l',
      biergarten: 'Bier nach Wahl 0,5l',
      kneipe: 'Pilsner 0,5l',
      bar: 'Bier nach Wahl 0,5l',
      irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l',
      sportbar: 'Bier 0,5l',
      szene: 'Craft Bier 0,5l',
      craft: 'IPA 0,5l',
    },
  },
  {
    key: 'frankfurt',
    prefix: 'fra',
    osmArea: 'Frankfurt am Main',
    adminLevel: '6',
    center: { lat: 50.1109, lng: 8.6821 },
    defaultDrinks: {
      brauhaus: 'Apfelwein 0,3l',
      biergarten: 'Apfelwein 0,3l',
      kneipe: 'Helles 0,5l',
      bar: 'Bier nach Wahl 0,5l',
      irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l',
      sportbar: 'Bier 0,5l',
      szene: 'Craft Bier 0,5l',
      craft: 'Craft Bier 0,5l',
    },
  },
  {
    key: 'hamburg',
    prefix: 'ham',
    osmArea: 'Hamburg',
    adminLevel: '4',
    center: { lat: 53.5511, lng: 9.9937 },
    defaultDrinks: {
      brauhaus: 'Astra 0,5l',
      biergarten: 'Astra 0,5l',
      kneipe: 'Astra 0,5l',
      bar: 'Bier nach Wahl 0,5l',
      irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l',
      sportbar: 'Bier 0,5l',
      szene: 'Craft Bier 0,5l',
      craft: 'Craft Bier 0,5l',
    },
  },
  {
    key: 'köln',
    prefix: 'kol',
    osmArea: 'Köln',
    adminLevel: '6',
    center: { lat: 50.9375, lng: 6.9603 },
    defaultDrinks: {
      brauhaus: 'Kölsch 0,2l',
      biergarten: 'Kölsch 0,2l',
      kneipe: 'Kölsch 0,2l',
      bar: 'Kölsch 0,2l',
      irish: 'Guinness 0,5l',
      cocktailbar: 'Craft Bier 0,5l',
      sportbar: 'Kölsch 0,2l',
      szene: 'Craft Bier 0,5l',
      craft: 'Craft Bier 0,5l',
    },
  },
];

// ─── Type classification ────────────────────────────────────
const TYPE_KEYWORDS = {
  brauhaus: ['brauhaus', 'bräuhaus', 'brauerei', 'brewery', 'bräu', 'bräustüberl', 'braustüberl'],
  biergarten: ['biergarten', 'beer garden', 'garten', 'terrasse', 'outdoor', 'strandbar'],
  irish: ['irish', 'celtic', 'shamrock', 'dublin', "kelly", "murphy", "paddy", "o'brien", "o'reilly", 'guinness', 'kilkenny'],
  craft: ['craft', 'brew', 'tap', 'hopf', 'hops', 'ale', 'ipa'],
  cocktailbar: ['cocktail', 'lounge', 'mixology', 'speakeasy'],
  sportbar: ['sport', 'kick', 'goal', 'stadium', 'arena', 'fußball', 'football'],
  szene: ['club', 'disco', 'elektro', 'techno', 'underground'],
};

function classifyType(name, tags) {
  const searchStr = [
    name,
    tags.cuisine || '',
    tags.description || '',
    tags.brewery || '',
  ].join(' ').toLowerCase();

  // Check amenity tag first
  if (tags.amenity === 'biergarten') return 'biergarten';

  // Keyword matching
  for (const [type, keywords] of Object.entries(TYPE_KEYWORDS)) {
    if (keywords.some(kw => searchStr.includes(kw))) return type;
  }

  // Fallback based on OSM amenity
  if (tags.amenity === 'pub') return 'kneipe';
  if (tags.amenity === 'bar') return 'bar';
  if (tags.amenity === 'nightclub') return 'szene';

  return 'bar';
}

// ─── Par assignment based on type ───────────────────────────
function assignPar(type) {
  switch (type) {
    case 'biergarten': return 5;  // usually Maß
    case 'brauhaus': return 4;
    case 'irish': return 4;       // pints
    case 'cocktailbar': return 3;
    case 'sportbar': return 3;
    case 'craft': return 3;
    case 'szene': return 3;
    case 'kneipe': return 3;
    case 'bar': return 3;
    default: return 3;
  }
}

// ─── District extraction from address ───────────────────────
function extractDistrict(tags) {
  // Try suburb first, then city_district, then neighbourhood
  return (
    tags['addr:suburb'] ||
    tags['addr:city_district'] ||
    tags['addr:neighbourhood'] ||
    tags['addr:quarter'] ||
    ''
  ).toLowerCase().replace(/[^a-zäöüß\s-]/g, '').trim() || undefined;
}

// ─── Extract address ────────────────────────────────────────
function extractAddress(tags) {
  const street = tags['addr:street'] || '';
  const number = tags['addr:housenumber'] || '';
  if (street) return `${street} ${number}`.trim();
  return tags['addr:full'] || '';
}

// ─── Tag generation ─────────────────────────────────────────
function generateTags(name, type, tags) {
  const result = [type];
  if (tags.outdoor_seating === 'yes') result.push('outdoor');
  if (tags.wheelchair === 'yes') result.push('barrierefrei');
  if (tags.cuisine) result.push(...tags.cuisine.split(';').map(c => c.trim().toLowerCase()));
  if (tags.brewery) result.push('hausbrauerei');
  if (tags.beer_garden === 'yes' || tags.biergarten === 'yes') result.push('biergarten');
  return [...new Set(result)];
}

// ─── Overpass query ─────────────────────────────────────────
async function queryOverpass(cityConfig) {
  const query = `
    [out:json][timeout:60];
    area["name"="${cityConfig.osmArea}"]["admin_level"="${cityConfig.adminLevel}"]->.a;
    (
      node["amenity"="bar"]["name"](area.a);
      node["amenity"="pub"]["name"](area.a);
      node["amenity"="biergarten"]["name"](area.a);
      node["amenity"="nightclub"]["name"](area.a);
      way["amenity"="bar"]["name"](area.a);
      way["amenity"="pub"]["name"](area.a);
      way["amenity"="biergarten"]["name"](area.a);
    );
    out center body;
  `;

  const url = 'https://overpass-api.de/api/interpreter';

  console.log(`  Querying OSM for ${cityConfig.osmArea}...`);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${encodeURIComponent(query)}`,
  });

  if (!response.ok) {
    throw new Error(`Overpass API error for ${cityConfig.osmArea}: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.elements || [];
}

// ─── Process OSM elements into bar records ──────────────────
function processElements(elements, cityConfig, startIdx) {
  const seen = new Set(); // deduplicate by name+lat
  const bars = [];
  let idx = startIdx;

  for (const el of elements) {
    const tags = el.tags || {};
    const name = tags.name;
    if (!name) continue;

    // Get coordinates (nodes have lat/lng, ways have center)
    const lat = el.lat || el.center?.lat;
    const lng = el.lon || el.center?.lon;
    if (!lat || !lng) continue;

    // Deduplicate: same name within 50m
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
    const id = `${cityConfig.prefix}-${String(idx).padStart(3, '0')}`;

    bars.push({
      id,
      city: cityConfig.key,
      name,
      address: address || 'Adresse unbekannt',
      district,
      lat: Math.round(lat * 10000) / 10000,
      lng: Math.round(lng * 10000) / 10000,
      drink,
      par,
      type,
      tags: barTags,
      // Metadata (not in final schema, stripped later)
      _osmId: el.id,
      _osmAmenity: tags.amenity,
    });
  }

  return bars;
}

// ─── Format bar for JS output ───────────────────────────────
function formatBar(bar) {
  const district = bar.district ? `district: "${bar.district}",` : '';
  const escapedName = bar.name.replace(/"/g, '\\"');
  const escapedAddr = bar.address.replace(/"/g, '\\"');
  const escapedDrink = bar.drink.replace(/"/g, '\\"');
  const tagsStr = bar.tags.map(t => `"${t}"`).join(', ');

  return `  { id: "${bar.id}", city: "${bar.city}", name: "${escapedName}", address: "${escapedAddr}", ${district}
    lat: ${bar.lat}, lng: ${bar.lng}, drink: "${escapedDrink}", par: ${bar.par}, type: "${bar.type}",
    tags: [${tagsStr}] },`;
}

// ─── Main ───────────────────────────────────────────────────
async function main() {
  console.log('🍺 PubGolf OSM Bar Scraper');
  console.log('══════════════════════════════════════\n');

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const allBars = [];
  const stats = [];

  for (const city of CITIES) {
    try {
      const elements = await queryOverpass(city);
      console.log(`  → ${elements.length} raw OSM elements found`);

      const bars = processElements(elements, city, 50); // start at 051 to not conflict with existing
      console.log(`  → ${bars.length} unique bars after dedup`);

      // Count by type
      const typeCounts = {};
      for (const bar of bars) {
        typeCounts[bar.type] = (typeCounts[bar.type] || 0) + 1;
      }
      console.log(`  → Types: ${Object.entries(typeCounts).map(([t, c]) => `${t}:${c}`).join(', ')}`);

      allBars.push(...bars);
      stats.push({
        city: city.key,
        osmRaw: elements.length,
        afterDedup: bars.length,
        withAddress: bars.filter(b => b.address !== 'Adresse unbekannt').length,
        withDistrict: bars.filter(b => b.district).length,
        types: typeCounts,
      });

      console.log(`  ✅ ${city.osmArea} done\n`);

      // Be nice to the Overpass API
      await new Promise(r => setTimeout(r, 2000));
    } catch (err) {
      console.error(`  ❌ Error for ${city.osmArea}: ${err.message}\n`);
      stats.push({ city: city.key, error: err.message });
    }
  }

  // ─── Write raw JSON ─────────────────────────────────────
  writeFileSync(
    join(OUTPUT_DIR, 'osm-bars-raw.json'),
    JSON.stringify(allBars, null, 2),
    'utf-8'
  );
  console.log(`📄 Raw JSON: scripts/output/osm-bars-raw.json`);

  // ─── Write formatted JS ─────────────────────────────────
  const jsLines = [
    '/**',
    ' * PUB GOLF BAR DATABASE — OSM IMPORT',
    ` * ${allBars.length} Bars & Kneipen – scraped from OpenStreetMap`,
    ` * Generated: ${new Date().toISOString()}`,
    ' * Städte: München, Berlin, Frankfurt, Hamburg, Köln',
    ' *',
    ' * Schema:',
    ' * id, city, name, address, district, lat, lng, drink, par, type, tags',
    ' *',
    ' * NOTE: "drink" and "par" are auto-assigned defaults based on bar type.',
    ' * Review and customize these for bars you want on curated courses.',
    ' */',
    '',
    'export const OSM_BAR_DATABASE = [',
  ];

  for (const city of CITIES) {
    const cityBars = allBars.filter(b => b.city === city.key);
    jsLines.push('');
    jsLines.push(`  // ═══ ${city.osmArea.toUpperCase()} (${cityBars.length} bars) ═══`);
    jsLines.push('');
    for (const bar of cityBars) {
      jsLines.push(formatBar(bar));
      jsLines.push('');
    }
  }

  jsLines.push('];');

  writeFileSync(
    join(OUTPUT_DIR, 'bar-database-new.js'),
    jsLines.join('\n'),
    'utf-8'
  );
  console.log(`📄 Formatted JS: scripts/output/bar-database-new.js`);

  // ─── Write stats ────────────────────────────────────────
  const statsLines = [
    'PUB GOLF OSM SCRAPE — STATS',
    `Date: ${new Date().toISOString()}`,
    `Total bars: ${allBars.length}`,
    '',
    ...stats.map(s => {
      if (s.error) return `${s.city}: ERROR — ${s.error}`;
      return [
        `${s.city}:`,
        `  OSM elements: ${s.osmRaw}`,
        `  After dedup:  ${s.afterDedup}`,
        `  With address: ${s.withAddress} (${Math.round(s.withAddress / s.afterDedup * 100)}%)`,
        `  With district: ${s.withDistrict} (${Math.round(s.withDistrict / s.afterDedup * 100)}%)`,
        `  Types: ${Object.entries(s.types).map(([t, c]) => `${t}:${c}`).join(', ')}`,
      ].join('\n');
    }),
  ];

  writeFileSync(
    join(OUTPUT_DIR, 'scrape-stats.txt'),
    statsLines.join('\n'),
    'utf-8'
  );
  console.log(`📄 Stats: scripts/output/scrape-stats.txt`);

  console.log(`\n══════════════════════════════════════`);
  console.log(`🎯 Total: ${allBars.length} bars across ${CITIES.length} cities`);
  console.log(`\nNext steps:`);
  console.log(`  1. Review scripts/output/bar-database-new.js`);
  console.log(`  2. Merge into src/data/bar-database-raw.js`);
  console.log(`  3. Customize drinks & pars for notable bars`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
