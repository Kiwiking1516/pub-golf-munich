import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { GameMode, TabType, Hole, GameState, CityId, RegionId } from '@/types/game';
import { getDefaultHoles, assignDefaultRules } from '@/data/courses';
import { generateRandomCourse, calculateTotalPar } from '@/data/pubs';
import { allRules } from '@/data/rules';
import { HoleFlag } from '@/types/game';

const STORAGE_KEY = 'pubgolf-state';

function loadState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    region: null,
    city: null,
    mode: null,
    players: [],
    holes: [],
    scores: {},
    penalties: {},
    currentHole: 0,
    activeTab: 'spieler',
    gameStarted: false,
    surpriseMode: false,
  };
}

interface GameContextType extends GameState {
  setRegion: (region: RegionId) => void;
  clearRegion: () => void;
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
  randomizeRules: () => void;
  clearAllRules: () => void;
  rollRuleForHole: (holeIndex: number) => string | null;
  removeRuleFromHole: (holeIndex: number, ruleId: string) => void;
  setSurpriseMode: (on: boolean) => void;
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
      currentHole: 0, activeTab: 'spieler', gameStarted: false, surpriseMode: false,
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

    // Pick random rules: ~40% of holes get 1 rule
    const eligibleRules = allRules.filter(r => r.id !== 'doppeltes-loch');
    const shuffledRules = [...eligibleRules].sort(() => Math.random() - 0.5);
    let ruleIdx = 0;

    const newHoles: Hole[] = randomPubs.map((pub, i) => {
      // Assign flags: first = signature, last = finale, one random middle = turn
      let flags: HoleFlag[] = [];
      if (i === 0) flags = ['signature'];
      else if (i === randomPubs.length - 1) flags = ['finale'];

      // ~40% chance for a rule on non-first/last holes
      const activeRules: string[] = [];
      if (i > 0 && i < randomPubs.length - 1 && Math.random() < 0.4 && ruleIdx < shuffledRules.length) {
        activeRules.push(shuffledRules[ruleIdx].id);
        ruleIdx++;
      }

      return {
        name: pub.name,
        drink: pub.drink,
        par: pub.suggestedPar,
        time: `${11 + Math.floor(i * 0.75)}:${(i % 2 === 0) ? '00' : '30'}`,
        flags,
        activeRules,
        lat: pub.lat,
        lng: pub.lng,
        barId: pub.id,
      };
    });

    // Add 'turn' flag to a random middle hole
    const middleIndices = newHoles
      .map((_, i) => i)
      .filter(i => i > 0 && i < newHoles.length - 1 && newHoles[i].flags.length === 0);
    if (middleIndices.length > 0) {
      const turnIdx = middleIndices[Math.floor(Math.random() * middleIndices.length)];
      newHoles[turnIdx].flags = ['turn'];
    }

    // Randomly make one hole 'doppeltes-loch' (special double-score)
    const doubleCandidate = middleIndices.filter(i => newHoles[i].activeRules.length === 0);
    if (doubleCandidate.length > 0 && Math.random() < 0.5) {
      const dIdx = doubleCandidate[Math.floor(Math.random() * doubleCandidate.length)];
      newHoles[dIdx].activeRules.push('doppeltes-loch');
    }

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

  const randomizeRules = useCallback(() => {
    setState(prev => ({ ...prev, holes: assignDefaultRules(prev.holes.map(h => ({ ...h, activeRules: [] }))) }));
  }, []);

  const clearAllRules = useCallback(() => {
    setState(prev => ({ ...prev, holes: prev.holes.map(h => ({ ...h, activeRules: [] })) }));
  }, []);

  const rollRuleForHole = useCallback((holeIndex: number): string | null => {
    // ~30% chance no rule applies
    if (Math.random() < 0.3) return null;
    let pickedId: string | null = null;
    setState(prev => {
      const hole = prev.holes[holeIndex];
      if (!hole) return prev;
      const usedRules = new Set(hole.activeRules);
      const available = allRules.filter(r => r.id !== 'doppeltes-loch' && !usedRules.has(r.id));
      if (available.length === 0) return prev;
      const picked = available[Math.floor(Math.random() * available.length)];
      pickedId = picked.id;
      const newHoles = [...prev.holes];
      newHoles[holeIndex] = { ...hole, activeRules: [...hole.activeRules, picked.id] };
      return { ...prev, holes: newHoles };
    });
    return pickedId;
  }, []);

  const removeRuleFromHole = useCallback((holeIndex: number, ruleId: string) => {
    setState(prev => {
      const hole = prev.holes[holeIndex];
      if (!hole) return prev;
      const newHoles = [...prev.holes];
      newHoles[holeIndex] = { ...hole, activeRules: hole.activeRules.filter(r => r !== ruleId) };
      return { ...prev, holes: newHoles };
    });
  }, []);

  const setSurpriseMode = useCallback((on: boolean) => {
    setState(prev => {
      const holes = on ? prev.holes.map(h => ({ ...h, activeRules: [] as string[] })) : prev.holes;
      return { ...prev, surpriseMode: on, holes };
    });
  }, []);

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
      addPlayer, removePlayer, updateHole, resetCourse, randomizeRules, clearAllRules, rollRuleForHole, removeRuleFromHole, setSurpriseMode,
      setScore, setPenalty, setCurrentHole, setActiveTab, startGame, resetGame,
      getPlayerTotal, getPlayerTotalPar, getPlayerHolesPlayed, isGreenMode,
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
