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
  london: {
    emoji: '🍺',
    name: 'Craft Crawl',
    tagline: '9 craft beer spots across East London',
    drink: 'Craft Pint',
  },
  manchester: {
    emoji: '🐝',
    name: 'NQ Crawl',
    tagline: '9 stops through the Northern Quarter',
    drink: 'Pint of Lager',
  },
  liverpool: {
    emoji: '🎵',
    name: 'Beatles Trail',
    tagline: '9 pubs the Fab Four would approve',
    drink: 'Pint of Lager',
  },
  brighton: {
    emoji: '🌊',
    name: 'Seaside Sesh',
    tagline: '9 bars from the Lanes to the pier',
    drink: 'Pint of Lager',
  },
  newcastle: {
    emoji: '🌉',
    name: 'Toon Tour',
    tagline: '9 stops from Bigg Market to Quayside',
    drink: 'Pint of Newcastle Brown',
  },
  edinburgh: {
    emoji: '🏰',
    name: 'Old Town Crawl',
    tagline: '9 historic pubs along the Royal Mile',
    drink: "Pint of Tennent's",
  },
  bristol: {
    emoji: '🌉',
    name: 'Harbourside Hop',
    tagline: '9 stops from Stokes Croft to the Harbourside',
    drink: 'Pint of Bristol Beer Factory',
  },
  dublin: {
    emoji: '☘️',
    name: 'Temple Bar Trail',
    tagline: '9 traditional Dublin pubs',
    drink: 'Pint of Guinness',
  },
};

export function getSecondCourseInfo(city: CityId): SecondCourseInfo {
  return secondCourseMap[city];
}

export const CITIES: CityConfig[] = [
  // Germany
  {
    id: 'münchen',
    name: 'München',
    emoji: '🍺',
    tagline: 'Wirtshäuser und Biergärten',
    accentHue: 46,
    accentSaturation: 65,
    accentLightness: 52,
    region: 'de',
  },
  {
    id: 'frankfurt',
    name: 'Frankfurt',
    emoji: '🍏',
    tagline: 'Äbbelwoi-Kneipen & Sachsenhausen',
    accentHue: 88,
    accentSaturation: 55,
    accentLightness: 53,
    region: 'de',
  },
  {
    id: 'hamburg',
    name: 'Hamburg',
    emoji: '🎵',
    tagline: 'Reeperbahn, St. Pauli & Kiez',
    accentHue: 216,
    accentSaturation: 100,
    accentLightness: 64,
    region: 'de',
  },
  {
    id: 'köln',
    name: 'Köln',
    emoji: '🏛️',
    tagline: '18 Löcher Kölsch durch die Altstadt',
    accentHue: 0,
    accentSaturation: 100,
    accentLightness: 64,
    region: 'de',
  },
  {
    id: 'berlin',
    name: 'Berlin',
    emoji: '🐻',
    tagline: 'Friedrichshain, Kreuzberg & Prenzlauer Berg',
    accentHue: 300,
    accentSaturation: 55,
    accentLightness: 53,
    region: 'de',
  },
  // UK & Ireland
  {
    id: 'london',
    name: 'London',
    emoji: '🇬🇧',
    tagline: 'Pubs, craft bars & rooftops',
    accentHue: 0,
    accentSaturation: 70,
    accentLightness: 50,
    region: 'uk',
  },
  {
    id: 'manchester',
    name: 'Manchester',
    emoji: '⚽',
    tagline: 'Northern Quarter & Deansgate',
    accentHue: 30,
    accentSaturation: 80,
    accentLightness: 50,
    region: 'uk',
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    emoji: '🎸',
    tagline: 'Mathew Street & the waterfront',
    accentHue: 0,
    accentSaturation: 80,
    accentLightness: 45,
    region: 'uk',
  },
  {
    id: 'brighton',
    name: 'Brighton',
    emoji: '🏖️',
    tagline: 'The Lanes & seaside bars',
    accentHue: 180,
    accentSaturation: 60,
    accentLightness: 50,
    region: 'uk',
  },
  {
    id: 'newcastle',
    name: 'Newcastle',
    emoji: '🍺',
    tagline: 'Bigg Market & the Quayside',
    accentHue: 45,
    accentSaturation: 70,
    accentLightness: 50,
    region: 'uk',
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh',
    emoji: '🏰',
    tagline: 'Royal Mile, Old Town & Grassmarket',
    accentHue: 280,
    accentSaturation: 55,
    accentLightness: 45,
    region: 'uk',
  },
  {
    id: 'bristol',
    name: 'Bristol',
    emoji: '🌉',
    tagline: 'Harbourside, Stokes Croft & Clifton',
    accentHue: 200,
    accentSaturation: 60,
    accentLightness: 50,
    region: 'uk',
  },
  {
    id: 'dublin',
    name: 'Dublin',
    emoji: '☘️',
    tagline: 'Temple Bar & traditional pubs',
    accentHue: 145,
    accentSaturation: 65,
    accentLightness: 45,
    region: 'uk',
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
