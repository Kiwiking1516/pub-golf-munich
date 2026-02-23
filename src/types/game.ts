export type GameMode = 'biergolf' | 'biergarten';
export type TabType = 'spieler' | 'kurs' | 'spiel' | 'karte';
export type HoleFlag = 'signature' | 'turn' | 'finale';
export type RuleType = 'handicap' | 'bonus' | 'fun' | 'special';

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

export interface GameState {
  mode: GameMode | null;
  players: string[];
  holes: Hole[];
  scores: Record<string, Record<number, number>>;
  penalties: Record<string, Record<number, number>>;
  currentHole: number;
  activeTab: TabType;
  gameStarted: boolean;
}
