import { Hole, CityId, GameMode } from '@/types/game';

export function encodeCourse(holes: Hole[], city: CityId, mode: GameMode): string {
  const payload = {
    v: 1,
    c: city,
    m: mode,
    h: holes.map(h => ({
      n: h.name,
      d: h.drink,
      p: h.par,
      t: h.time,
      f: h.flags,
      la: h.lat,
      ln: h.lng,
      b: h.barId,
    })),
  };
  const json = JSON.stringify(payload);
  const compressed = btoa(encodeURIComponent(json));
  return compressed;
}

export function decodeCourse(encoded: string): { city: CityId; mode: GameMode; holes: Hole[] } | null {
  try {
    const json = decodeURIComponent(atob(encoded));
    const payload = JSON.parse(json);
    if (payload.v !== 1) return null;
    const holes: Hole[] = payload.h.map((h: any) => ({
      name: h.n,
      drink: h.d,
      par: h.p,
      time: h.t,
      flags: h.f || [],
      activeRules: [],
      lat: h.la,
      lng: h.ln,
      barId: h.b,
    }));
    return { city: payload.c, mode: payload.m, holes };
  } catch {
    return null;
  }
}
