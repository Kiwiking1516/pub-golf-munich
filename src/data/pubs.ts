import { PubLocation } from '@/types/game';

export const PUB_DATABASE: PubLocation[] = [
  // ──── MÜNCHEN ────────────────────────────────────────────
  { id: 'de-muc-001', city: 'München', name: 'Augustiner Stammhaus', address: 'Neuhauser Str. 27', lat: 48.1372, lng: 11.5664, type: 'brauhaus', drink: 'Weißbier 0,5l', suggestedPar: 3, tags: ['traditional', 'central'] },
  { id: 'de-muc-002', city: 'München', name: 'Weisses Bräuhaus', address: 'Tal 7', lat: 48.1366, lng: 11.5782, type: 'brauhaus', drink: 'Schneider Weisse 0,5l', suggestedPar: 3, tags: ['traditional'] },
  { id: 'de-muc-003', city: 'München', name: 'Hofbräuhaus', address: 'Platzl 9', lat: 48.1376, lng: 11.5800, type: 'brauhaus', drink: 'Hofbräu Maß 1,0l', suggestedPar: 5, tags: ['signature', 'tourist', 'central'] },
  { id: 'de-muc-004', city: 'München', name: 'Augustiner-Keller', address: 'Arnulfstr. 52', lat: 48.1452, lng: 11.5534, type: 'biergarten', drink: 'Augustiner Maß 1,0l', suggestedPar: 5, tags: ['biergarten', 'large'] },
  { id: 'de-muc-005', city: 'München', name: 'Chinesischer Turm', address: 'Englischer Garten 3', lat: 48.1591, lng: 11.5939, type: 'biergarten', drink: 'Maß nach Wahl 1,0l', suggestedPar: 5, tags: ['biergarten', 'park'] },
  { id: 'de-muc-006', city: 'München', name: 'Hirschgarten', address: 'Hirschgarten 1', lat: 48.1462, lng: 11.5027, type: 'biergarten', drink: 'Augustiner Maß 1,0l', suggestedPar: 5, tags: ['biergarten', 'large'] },
  { id: 'de-muc-007', city: 'München', name: 'Seehaus im Englischen Garten', address: 'Kleinhesselohe 3', lat: 48.1638, lng: 11.5870, type: 'biergarten', drink: 'Maß nach Wahl 1,0l', suggestedPar: 5, tags: ['biergarten', 'park', 'lake'] },
  { id: 'de-muc-008', city: 'München', name: 'Tegernseer Tal', address: 'Tal 2', lat: 48.1362, lng: 11.5774, type: 'bar', drink: 'Tegernseer Hell 0,5l', suggestedPar: 3, tags: ['craft', 'central'] },
  { id: 'de-muc-009', city: 'München', name: 'Paulaner am Nockherberg', address: 'Hochstr. 77', lat: 48.1207, lng: 11.5816, type: 'biergarten', drink: 'Paulaner Maß 1,0l', suggestedPar: 5, tags: ['biergarten', 'traditional'] },
  { id: 'de-muc-010', city: 'München', name: 'Taxisgarten', address: 'Taxisstr. 12', lat: 48.1652, lng: 11.5441, type: 'biergarten', drink: 'Maß nach Wahl 1,0l', suggestedPar: 5, tags: ['biergarten', 'local'] },

  // ──── FRANKFURT ──────────────────────────────────────────
  { id: 'de-fra-001', city: 'Frankfurt', name: 'Zum Gemalten Haus', address: 'Schweizer Str. 67', lat: 50.0999, lng: 8.6814, type: 'bar', drink: 'Apfelwein 0,3l', suggestedPar: 2, tags: ['apfelwein', 'traditional', 'sachsenhausen'] },
  { id: 'de-fra-002', city: 'Frankfurt', name: 'Dauth-Schneider', address: 'Neuer Wall 5-7', lat: 50.1002, lng: 8.6821, type: 'bar', drink: 'Apfelwein 0,3l', suggestedPar: 2, tags: ['apfelwein', 'traditional'] },
  { id: 'de-fra-003', city: 'Frankfurt', name: 'Wagner', address: 'Schweizer Str. 71', lat: 50.1003, lng: 8.6817, type: 'bar', drink: 'Apfelwein 0,3l', suggestedPar: 2, tags: ['apfelwein', 'traditional'] },
  { id: 'de-fra-004', city: 'Frankfurt', name: 'Klapper 33', address: 'Klappergasse 33', lat: 50.0985, lng: 8.6808, type: 'bar', drink: 'Bier vom Fass 0,5l', suggestedPar: 3, tags: ['classic', 'sachsenhausen'] },
  { id: 'de-fra-005', city: 'Frankfurt', name: 'Alte Liebe', address: 'Darmstädter Landstr. 23', lat: 50.0978, lng: 8.6835, type: 'bar', drink: 'Helles 0,5l', suggestedPar: 3, tags: ['local', 'cozy'] },
  { id: 'de-fra-006', city: 'Frankfurt', name: 'Birmingham Pub', address: 'Textorstr. 24', lat: 50.0993, lng: 8.6858, type: 'irish', drink: 'Guinness 0,5l', suggestedPar: 4, tags: ['irish', 'english'] },
  { id: 'de-fra-007', city: 'Frankfurt', name: 'Naïv Bar', address: 'Neue Kräme 24', lat: 50.1109, lng: 8.6832, type: 'craft', drink: 'Craft Bier 0,5l', suggestedPar: 3, tags: ['craft', 'innenstadt'] },

  // ──── HAMBURG ────────────────────────────────────────────
  { id: 'de-ham-001', city: 'Hamburg', name: 'Beatles-Platz Bar', address: 'Reeperbahn 174', lat: 53.5493, lng: 9.9628, type: 'bar', drink: 'Astra 0,5l', suggestedPar: 3, tags: ['reeperbahn', 'signature', 'stpauli'] },
  { id: 'de-ham-002', city: 'Hamburg', name: 'Zum Silbersack', address: 'Silbersackstr. 9', lat: 53.5487, lng: 9.9617, type: 'bar', drink: 'Astra 0,5l', suggestedPar: 3, tags: ['classic', 'reeperbahn', 'local'] },
  { id: 'de-ham-003', city: 'Hamburg', name: 'Überquell Brauerei', address: 'Nobistor 15', lat: 53.5497, lng: 9.9584, type: 'brauhaus', drink: 'Hausbrauerei 0,5l', suggestedPar: 3, tags: ['craft', 'brauerei'] },
  { id: 'de-ham-004', city: 'Hamburg', name: 'Strandperle', address: 'Ovelgönne 60', lat: 53.5440, lng: 9.8981, type: 'biergarten', drink: 'Bier 0,5l', suggestedPar: 3, tags: ['elbe', 'outdoor', 'beach'] },
  { id: 'de-ham-005', city: 'Hamburg', name: 'Prater (Hamburg)', address: 'Kastanienallee 7', lat: 53.5587, lng: 9.9692, type: 'biergarten', drink: 'Bier Maß 1,0l', suggestedPar: 5, tags: ['biergarten', 'altona'] },

  // ──── KÖLN ───────────────────────────────────────────────
  { id: 'de-cgn-001', city: 'Köln', name: 'Früh am Dom', address: 'Am Hof 12-14', lat: 50.9413, lng: 6.9572, type: 'brauhaus', drink: 'Früh Kölsch 0,2l', suggestedPar: 2, tags: ['traditional', 'altstadt', 'signature'] },
  { id: 'de-cgn-002', city: 'Köln', name: 'Gaffel am Dom', address: 'Bahnhofsvorplatz 1', lat: 50.9407, lng: 6.9585, type: 'brauhaus', drink: 'Gaffel Kölsch 0,2l', suggestedPar: 2, tags: ['traditional', 'altstadt'] },
  { id: 'de-cgn-003', city: 'Köln', name: 'Peters Brauhaus', address: 'Mühlengasse 1', lat: 50.9382, lng: 6.9571, type: 'brauhaus', drink: 'Peters Kölsch 0,2l', suggestedPar: 2, tags: ['traditional', 'altstadt'] },
  { id: 'de-cgn-004', city: 'Köln', name: 'Brauerei zur Malzmühle', address: 'Heumarkt 6', lat: 50.9375, lng: 6.9601, type: 'brauhaus', drink: 'Mühlen Kölsch 0,2l', suggestedPar: 3, tags: ['traditional', 'altstadt'] },
  { id: 'de-cgn-005', city: 'Köln', name: 'Päffgen Friesenstraße', address: 'Friesenstr. 64-66', lat: 50.9449, lng: 6.9507, type: 'brauhaus', drink: 'Päffgen Kölsch 0,2l', suggestedPar: 3, tags: ['traditional', 'friesenviertel'] },
  { id: 'de-cgn-006', city: 'Köln', name: 'Brauhaus Sion', address: 'Unter Taschenmacher 5', lat: 50.9395, lng: 6.9558, type: 'brauhaus', drink: 'Sion Kölsch 0,2l', suggestedPar: 2, tags: ['oldest', 'altstadt'] },
  { id: 'de-cgn-007', city: 'Köln', name: 'Lommerzheim', address: 'Siegesstr. 18 (Deutz)', lat: 50.9371, lng: 6.9718, type: 'bar', drink: 'Päffgen Kölsch 0,2l', suggestedPar: 3, tags: ['cult', 'deutz', 'local'] },

  // ──── BERLIN ─────────────────────────────────────────────
  { id: 'de-ber-001', city: 'Berlin', name: 'Prater Garten', address: 'Kastanienallee 7-9', lat: 52.5392, lng: 13.4138, type: 'biergarten', drink: 'Berliner Bier Maß 1,0l', suggestedPar: 5, tags: ['biergarten', 'prenzlauerberg', 'oldest'] },
  { id: 'de-ber-002', city: 'Berlin', name: 'Ankerklause', address: 'Kottbusser Damm 104', lat: 52.4934, lng: 13.4183, type: 'bar', drink: 'Bier 0,5l', suggestedPar: 3, tags: ['kreuzberg', 'canal', 'cult'] },
  { id: 'de-ber-003', city: 'Berlin', name: 'Luzia', address: 'Oranienstr. 34', lat: 52.4996, lng: 13.4219, type: 'bar', drink: 'Craft Bier 0,5l', suggestedPar: 3, tags: ['kreuzberg', 'hipster'] },
  { id: 'de-ber-004', city: 'Berlin', name: 'Hops & Barley', address: 'Wühlischstr. 22/23', lat: 52.5127, lng: 13.4591, type: 'brauhaus', drink: 'Hausbrauerei 0,5l', suggestedPar: 3, tags: ['craft', 'brauerei', 'friedrichshain'] },
  { id: 'de-ber-005', city: 'Berlin', name: 'Schleusenkrug', address: 'Müller-Breslau-Str.', lat: 52.5104, lng: 13.3342, type: 'biergarten', drink: 'Bier Maß 1,0l', suggestedPar: 5, tags: ['biergarten', 'tiergarten', 'canal'] },
  { id: 'de-ber-006', city: 'Berlin', name: 'Golgatha', address: 'Viktoriapark 5-6', lat: 52.4849, lng: 13.3812, type: 'biergarten', drink: 'Bier Maß 1,0l', suggestedPar: 5, tags: ['biergarten', 'kreuzberg', 'park'] },
  { id: 'de-ber-007', city: 'Berlin', name: 'Zenner', address: 'Alt-Treptow 14-17', lat: 52.4869, lng: 13.4629, type: 'biergarten', drink: 'Bier Maß 1,0l', suggestedPar: 5, tags: ['biergarten', 'treptow', 'spree'] },
  { id: 'de-ber-008', city: 'Berlin', name: 'Urban Spree', address: 'Revaler Str. 99', lat: 52.5088, lng: 13.4548, type: 'biergarten', drink: 'Craft Bier Maß 1,0l', suggestedPar: 5, tags: ['biergarten', 'friedrichshain', 'art'] },
  { id: 'de-ber-009', city: 'Berlin', name: 'Clärchens Ballhaus', address: 'Auguststr. 24', lat: 52.5272, lng: 13.3972, type: 'bar', drink: 'Berliner Weiße 0,5l', suggestedPar: 4, tags: ['historic', 'mitte', 'signature'] },
];

/** Haversine distance in km */
export function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Nearest-neighbor route optimization */
export function optimizeRoute(pubs: PubLocation[]): PubLocation[] {
  if (pubs.length <= 1) return pubs;
  const remaining = [...pubs];
  const route: PubLocation[] = [remaining.shift()!];
  while (remaining.length > 0) {
    const last = route[route.length - 1];
    let nearestIdx = 0;
    let nearestDist = Infinity;
    for (let i = 0; i < remaining.length; i++) {
      const d = distanceKm(last.lat, last.lng, remaining[i].lat, remaining[i].lng);
      if (d < nearestDist) { nearestDist = d; nearestIdx = i; }
    }
    route.push(remaining.splice(nearestIdx, 1)[0]);
  }
  return route;
}

export function generateGPSCourse(
  lat: number, lng: number, radiusKm: number, count: number
): { pubs: PubLocation[]; expandedRadius: boolean } {
  let filtered = PUB_DATABASE.filter(p => distanceKm(lat, lng, p.lat, p.lng) <= radiusKm);
  let expandedRadius = false;

  if (filtered.length < count) {
    // Expand radius until we have enough
    const allSorted = PUB_DATABASE
      .map(p => ({ ...p, dist: distanceKm(lat, lng, p.lat, p.lng) }))
      .sort((a, b) => a.dist - b.dist);
    filtered = allSorted.slice(0, Math.min(count, allSorted.length));
    expandedRadius = true;
  } else {
    filtered = filtered
      .map(p => ({ ...p, dist: distanceKm(lat, lng, p.lat, p.lng) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, count);
  }

  return { pubs: optimizeRoute(filtered), expandedRadius };
}
