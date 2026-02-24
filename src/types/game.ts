export type CityId = 'münchen' | 'frankfurt' | 'hamburg' | 'köln' | 'berlin';
export type GameMode = 'biergolf' | 'biergarten';
export type TabType = 'spieler' | 'kurs' | 'spiel' | 'karte';
export type HoleFlag = 'signature' | 'turn' | 'finale';
export type RuleType = 'handicap' | 'bonus' | 'fun' | 'special';

export interface CityConfig {
  id: CityId;
  name: string;
  emoji: string;
  tagline: string;
  accentHue: number;
  accentSaturation: number;
  accentLightness: number;
}

export interface Hole {
  name: string;
  drink: string;
  par: number;
  time: string;
  flags: HoleFlag[];
  activeRules: string[];
}

export interface Rule {
  id: string;
  emoji: string;
  name: string;
  type: RuleType;
  shortEffect: string;
  description: string;
}

export interface PubLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  district?: string;
  lat: number;
  lng: number;
  type: 'bar' | 'brauhaus' | 'biergarten' | 'irish' | 'craft' | 'kneipe' | 'cocktailbar' | 'sportbar' | 'szene';
  drink: string;
  suggestedPar: number;
  tags: string[];
  notes?: string;
}

export interface GameState {
  city: CityId | null;
  mode: GameMode | null;
  players: string[];
  holes: Hole[];
  scores: Record<string, Record<number, number>>;
  penalties: Record<string, Record<number, number>>;
  currentHole: number;
  activeTab: TabType;
  gameStarted: boolean;
}
