import { PubLocation } from '@/types/game';
// @ts-expect-error – raw JS database has no type declarations
import { BAR_DATABASE as RAW_BARS } from './bar-database-raw.js';

/**
 * Convert raw bar entries to PubLocation format.
 * The raw DB uses `par` instead of `suggestedPar`.
 */
function convertBar(raw: Record<string, unknown>): PubLocation {
  return {
    id: raw.id,
    city: raw.city.charAt(0).toUpperCase() + raw.city.slice(1), // capitalize
    name: raw.name,
    address: raw.address,
    district: raw.district,
    lat: raw.lat,
    lng: raw.lng,
    type: raw.type as PubLocation['type'],
    drink: raw.drink,
    suggestedPar: raw.par ?? raw.suggestedPar ?? 3,
    tags: raw.tags ?? [],
  };
}

/** Full pub database – 250 bars across 5 cities */
export const PUB_DATABASE: PubLocation[] = (RAW_BARS as Record<string, unknown>[]).map(convertBar);

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

/** Get all bars for a specific city */
export function getBarsForCity(city: string): PubLocation[] {
  return PUB_DATABASE.filter(b => b.city.toLowerCase() === city.toLowerCase());
}

/** Fisher-Yates shuffle */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Generate a random course from the database for a given city */
export function generateRandomCourse(city: string, holeCount: number = 18): PubLocation[] {
  const cityBars = getBarsForCity(city);
  const shuffled = shuffle(cityBars);
  const selected = shuffled.slice(0, Math.min(holeCount, shuffled.length));
  return optimizeRoute(selected);
}

/** Calculate total par for a course */
export function calculateTotalPar(course: PubLocation[]): number {
  return course.reduce((sum, bar) => sum + bar.suggestedPar, 0);
}

/** Generate GPS-based course from user location */
export function generateGPSCourse(
  lat: number, lng: number, radiusKm: number, count: number
): { pubs: PubLocation[]; expandedRadius: boolean } {
  let filtered = PUB_DATABASE.filter(p => distanceKm(lat, lng, p.lat, p.lng) <= radiusKm);
  let expandedRadius = false;

  if (filtered.length < count) {
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
