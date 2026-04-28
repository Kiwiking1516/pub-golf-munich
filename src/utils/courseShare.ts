import { Hole, CityId, GameMode } from '@/types/game';

export function buildShareUrl(encoded: string): string {
  return `${window.location.origin}/#/?course=${encoded}`;
}

export function encodeCourse(holes: Hole[], city: CityId, mode: GameMode): string {
  const payload = {
    v: 1,
    c: city,
    m: mode,
    h: holes.map(h => [
      h.name,
      h.drink,
      h.par,
      h.lat || 0,
      h.lng || 0,
      h.barId || ''
    ]),
  };
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
}

export function decodeCourse(encoded: string): { city: CityId; mode: GameMode; holes: Hole[] } | null {
  try {
    const json = decodeURIComponent(escape(atob(encoded)));
    const p = JSON.parse(json);
    if (p.v !== 1) return null;
    const holes: Hole[] = p.h.map((h: Record<string, unknown>, i: number) => ({
      name: Array.isArray(h) ? h[0] : h.n,
      drink: Array.isArray(h) ? h[1] : h.d,
      par: Array.isArray(h) ? h[2] : h.p,
      time: Array.isArray(h) ? `${10 + Math.floor(i * 0.75)}:${i % 2 === 0 ? '00' : '30'}` : (h.t || '10:00'),
      flags: Array.isArray(h)
        ? (i === 0 ? ['signature'] : i === p.h.length - 1 ? ['finale'] : [])
        : (h.f || []),
      activeRules: [],
      lat: (Array.isArray(h) ? h[3] : h.la) || undefined,
      lng: (Array.isArray(h) ? h[4] : h.ln) || undefined,
      barId: (Array.isArray(h) ? h[5] : h.b) || undefined,
    }));
    return { city: p.c, mode: p.m, holes };
  } catch {
    return null;
  }
}
