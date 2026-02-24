import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { GameMode, TabType, Hole, GameState, CityId } from '@/types/game';
import { getDefaultHoles } from '@/data/courses';
import { generateRandomCourse, calculateTotalPar } from '@/data/pubs';

const STORAGE_KEY = 'pubgolf-state';

function loadState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    city: null,
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
  setCity: (city: CityId) => void;
  clearCity: () => void;
  setMode: (mode: GameMode) => void;
  clearMode: () => void;
  setCustomHoles: (holes: Hole[]) => void;
  shuffleCourse: () => void;
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

  const setCity = useCallback((city: CityId) => {
    update({ city, mode: null, holes: [], scores: {}, penalties: {}, currentHole: 0, activeTab: 'spieler', gameStarted: false, players: [] });
  }, [update]);

  const clearCity = useCallback(() => {
    setState({
      city: null, mode: null, players: [], holes: [], scores: {}, penalties: {},
      currentHole: 0, activeTab: 'spieler', gameStarted: false,
    });
  }, []);

  const setMode = useCallback((mode: GameMode) => {
    if (!state.city) return;
    setState(prev => ({
      ...prev,
      mode,
      holes: getDefaultHoles(prev.city!, mode),
      scores: {},
      penalties: {},
      currentHole: 0,
      activeTab: 'spieler',
      gameStarted: false,
    }));
  }, [state.city]);

  const clearMode = useCallback(() => {
    setState(prev => ({
      ...prev,
      mode: null, players: [], holes: [], scores: {}, penalties: {},
      currentHole: 0, activeTab: 'spieler', gameStarted: false,
    }));
  }, []);

  const setCustomHoles = useCallback((holes: Hole[]) => {
    update({ holes, scores: {}, penalties: {}, currentHole: 0, gameStarted: false, activeTab: 'spieler' });
  }, [update]);

  const shuffleCourse = useCallback(() => {
    if (!state.city || !state.mode) return;
    const holeCount = state.mode === 'biergolf' ? 18 : 9;
    const randomPubs = generateRandomCourse(state.city, holeCount);
    const newHoles: Hole[] = randomPubs.map((pub, i) => ({
      name: pub.name,
      drink: pub.drink,
      par: pub.suggestedPar,
      time: `${11 + Math.floor(i * 0.75)}:${(i % 2 === 0) ? '00' : '30'}`,
      flags: i === 0 ? ['signature' as const] : i === randomPubs.length - 1 ? ['finale' as const] : [],
      activeRules: [],
    }));
    update({ holes: newHoles, scores: {}, penalties: {}, currentHole: 0, gameStarted: false });
  }, [state.city, state.mode, update]);

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
    if (state.city && state.mode) update({ holes: getDefaultHoles(state.city, state.mode) });
  }, [state.city, state.mode, update]);

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
    if (state.city && state.mode) {
      update({
        scores: {}, penalties: {}, currentHole: 0,
        gameStarted: false, activeTab: 'spieler',
        holes: getDefaultHoles(state.city, state.mode),
      });
    }
  }, [state.city, state.mode, update]);

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
      ...state, setCity, clearCity, setMode, clearMode, setCustomHoles, shuffleCourse,
      addPlayer, removePlayer, updateHole, resetCourse, setScore, setPenalty,
      setCurrentHole, setActiveTab, startGame, resetGame, getPlayerTotal,
      getPlayerTotalPar, getPlayerHolesPlayed, isGreenMode,
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
