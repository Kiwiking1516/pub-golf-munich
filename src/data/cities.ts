import { CityConfig, CityId } from '@/types/game';

export const CITIES: CityConfig[] = [
  {
    id: 'münchen',
    name: 'München',
    emoji: '🍺',
    tagline: 'Bierhallen, Biergärten, Hofbräuhaus',
    accentHue: 46,
    accentSaturation: 65,
    accentLightness: 52,
  },
  {
    id: 'frankfurt',
    name: 'Frankfurt',
    emoji: '🍏',
    tagline: 'Apfelwein-Kneipen & Sachsenhausen',
    accentHue: 88,
    accentSaturation: 55,
    accentLightness: 53,
  },
  {
    id: 'hamburg',
    name: 'Hamburg',
    emoji: '🎵',
    tagline: 'Reeperbahn, St. Pauli & Kiez',
    accentHue: 216,
    accentSaturation: 100,
    accentLightness: 64,
  },
  {
    id: 'köln',
    name: 'Köln',
    emoji: '🏛️',
    tagline: '18 Löcher Kölsch durch die Altstadt',
    accentHue: 0,
    accentSaturation: 100,
    accentLightness: 64,
  },
  {
    id: 'berlin',
    name: 'Berlin',
    emoji: '🐻',
    tagline: 'Friedrichshain, Kreuzberg & Prenzlauer Berg',
    accentHue: 300,
    accentSaturation: 55,
    accentLightness: 53,
  },
];

export function getCityById(id: CityId): CityConfig | undefined {
  return CITIES.find(c => c.id === id);
}

export function getCityAccentCSS(city: CityConfig): string {
  return `${city.accentHue} ${city.accentSaturation}% ${city.accentLightness}%`;
}

export function getCityGlowCSS(city: CityConfig): string {
  return `${city.accentHue} ${Math.min(city.accentSaturation + 15, 100)}% ${Math.min(city.accentLightness + 10, 80)}%`;
}
