import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { GameMode, TabType, Hole, GameState } from '@/types/game';
import { biergolfHoles, biergartenHoles } from '@/data/courses';

const STORAGE_KEY = 'pub-golf-munich';

function getDefaultHoles(mode: GameMode): Hole[] {
  const src = mode === 'biergolf' ? biergolfHoles : biergartenHoles;
  return src.map(h => ({ ...h, flags: [...h.flags], activeRules: [...h.activeRules] }));
}

function loadState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    mode: null,
    players: [],
    holes: [],
    scores: {},
    penalties: {},
    currentHole: 0,
    activeTab: 'spieler',
    gameStarted: false,
  };
}

interface GameContextType extends GameState {
  setMode: (mode: GameMode) => void;
  clearMode: () => void;
  addPlayer: (name: string) => boolean;
  removePlayer: (name: string) => void;
  updateHole: (index: number, hole: Hole) => void;
  resetCourse: () => void;
  setScore: (player: string, holeIndex: number, score: number) => void;
  setPenalty: (player: string, holeIndex: number, count: number) => void;
  setCurrentHole: (h: number) => void;
  setActiveTab: (tab: TabType) => void;
  startGame: () => void;
  resetGame: () => void;
  getPlayerTotal: (player: string) => number;
  getPlayerTotalPar: (player: string) => number;
  getPlayerHolesPlayed: (player: string) => number;
  isGreenMode: boolean;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GameState>(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const update = useCallback((partial: Partial<GameState>) => {
    setState(prev => ({ ...prev, ...partial }));
  }, []);

  const setMode = useCallback((mode: GameMode) => {
    setState(prev => ({
      ...prev,
      mode,
      holes: getDefaultHoles(mode),
      scores: {},
      penalties: {},
      currentHole: 0,
      activeTab: 'spieler',
      gameStarted: false,
    }));
  }, []);

  const clearMode = useCallback(() => {
    setState({
      mode: null, players: [], holes: [], scores: {}, penalties: {},
      currentHole: 0, activeTab: 'spieler', gameStarted: false,
    });
  }, []);

  const addPlayer = useCallback((name: string): boolean => {
    const trimmed = name.trim().substring(0, 20);
    if (!trimmed) return false;
    if (state.players.some(p => p.toLowerCase() === trimmed.toLowerCase())) return false;
    update({ players: [...state.players, trimmed] });
    return true;
  }, [state.players, update]);

  const removePlayer = useCallback((name: string) => {
    const newPlayers = state.players.filter(p => p !== name);
    const newScores = { ...state.scores };
    const newPenalties = { ...state.penalties };
    delete newScores[name];
    delete newPenalties[name];
    update({ players: newPlayers, scores: newScores, penalties: newPenalties });
  }, [state.players, state.scores, state.penalties, update]);

  const updateHole = useCallback((index: number, hole: Hole) => {
    const newHoles = [...state.holes];
    newHoles[index] = hole;
    update({ holes: newHoles });
  }, [state.holes, update]);

  const resetCourse = useCallback(() => {
    if (state.mode) update({ holes: getDefaultHoles(state.mode) });
  }, [state.mode, update]);

  const setScore = useCallback((player: string, holeIndex: number, score: number) => {
    const newScores = { ...state.scores };
    if (!newScores[player]) newScores[player] = {};
    newScores[player] = { ...newScores[player], [holeIndex]: Math.max(1, score) };
    update({ scores: newScores });
  }, [state.scores, update]);

  const setPenalty = useCallback((player: string, holeIndex: number, count: number) => {
    const newPen = { ...state.penalties };
    if (!newPen[player]) newPen[player] = {};
    newPen[player] = { ...newPen[player], [holeIndex]: Math.max(0, count) };
    update({ penalties: newPen });
  }, [state.penalties, update]);

  const setCurrentHole = useCallback((h: number) => update({ currentHole: h }), [update]);
  const setActiveTab = useCallback((tab: TabType) => update({ activeTab: tab }), [update]);
  const startGame = useCallback(() => update({ gameStarted: true, activeTab: 'spiel', currentHole: 0 }), [update]);

  const resetGame = useCallback(() => {
    if (state.mode) {
      update({
        scores: {}, penalties: {}, currentHole: 0,
        gameStarted: false, activeTab: 'spieler',
        holes: getDefaultHoles(state.mode),
      });
    }
  }, [state.mode, update]);

  const getPlayerTotal = useCallback((player: string): number => {
    const ps = state.scores[player] || {};
    const pp = state.penalties[player] || {};
    let total = 0;
    for (const hi of Object.keys(ps)) {
      const idx = Number(hi);
      const hasDouble = state.holes[idx]?.activeRules.includes('doppeltes-loch');
      const diff = ps[idx] - state.holes[idx]?.par;
      total += hasDouble ? diff * 2 : diff;
      total += (pp[idx] || 0);
    }
    return total;
  }, [state.scores, state.penalties, state.holes]);

  const getPlayerTotalPar = useCallback((player: string): number => {
    const ps = state.scores[player] || {};
    let total = 0;
    for (const hi of Object.keys(ps)) {
      total += state.holes[Number(hi)]?.par || 0;
    }
    return total;
  }, [state.scores, state.holes]);

  const getPlayerHolesPlayed = useCallback((player: string): number => {
    return Object.keys(state.scores[player] || {}).length;
  }, [state.scores]);

  const isGreenMode = state.mode === 'biergarten';

  return (
    <GameContext.Provider value={{
      ...state, setMode, clearMode, addPlayer, removePlayer, updateHole,
      resetCourse, setScore, setPenalty, setCurrentHole, setActiveTab,
      startGame, resetGame, getPlayerTotal, getPlayerTotalPar,
      getPlayerHolesPlayed, isGreenMode,
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be inside GameProvider');
  return ctx;
}
