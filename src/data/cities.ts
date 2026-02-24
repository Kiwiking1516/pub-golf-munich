import { CityConfig, CityId } from '@/types/game';

export interface SecondCourseInfo {
  emoji: string;
  name: string;
  tagline: string;
  drink: string;
  warning?: string;
  tip?: string;
  lore?: string;
}

const secondCourseMap: Record<CityId, SecondCourseInfo> = {
  münchen: {
    emoji: '☀️',
    name: 'Biergärten',
    tagline: '9 klassische Münchner Biergärten',
    drink: 'Maß 1,0l',
  },
  frankfurt: {
    emoji: '🍏',
    name: 'Äbbelwoi-Runde',
    tagline: '9 Sachsenhäuser Wirtschaften, ein Geripptes pro Stop',
    drink: 'Geripptes 0,3l',
    warning: '⚠️ Kein Bier! Nur Apfelwein aus dem Gerippten zählt.',
    lore: 'Das Gerippte – das charakteristische Rautenglas – ist das Wahrzeichen des Frankfurter Apfelweins. Wer in Sachsenhausen keinen Ebbelwoi trinkt, war nicht wirklich in Frankfurt.',
  },
  hamburg: {
    emoji: '⚓',
    name: 'Elbtour',
    tagline: '9 Stops entlang der Elbe – von Övelgönne bis HafenCity',
    drink: 'Astra 0,5l',
    tip: 'Empfohlen: HVV-Fähre Linie 62 ab Landungsbrücken',
    lore: 'Hamburg ohne Elbe ist wie Astra ohne Krone. Die Fähre 62 ab Landungsbrücken bringt euch direkt zum Start – kauft euch ein HVV-Ticket und lasst die Stadt vom Wasser aus kennenlernen.',
  },
  köln: {
    emoji: '🏛️',
    name: 'Köbesrunde',
    tagline: '9 Brauhäuser, 9 Kölsch-Sorten – der Köbes entscheidet',
    drink: 'Stange 0,2l',
    warning: '🏛️ Deckelregel aktiv: Bierdeckel auf leere Stange!',
    lore: 'Es gibt über 20 verschiedene Kölsch-Sorten – und sie alle schmecken anders. Der Köbes ist der Herr des Abends. Wer nicht aufpasst, hat plötzlich ein Kölsch zu viel vor sich. Prost – oder wie man hier sagt: \'Kölle Alaaf!\'',
  },
  berlin: {
    emoji: '🌊',
    name: 'Spreebar-Tour',
    tagline: '9 Outdoor-Bars zwischen Friedrichshain und Kreuzberg',
    drink: 'Bier nach Wahl 0,5l',
    warning: '⚠️ Nur bei gutem Wetter spielbar',
    lore: 'Berlin trinkt nicht in Gaststuben – Berlin trinkt draußen. Die Spreebar-Tour ist eine Ode an die Outdoor-Trinkkultur der Hauptstadt: Kies unter den Schuhen, Wasser im Blick, Bier in der Hand.',
  },
};

export function getSecondCourseInfo(city: CityId): SecondCourseInfo {
  return secondCourseMap[city];
}

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
