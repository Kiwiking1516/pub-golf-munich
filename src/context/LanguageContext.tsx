import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'de' | 'en';

const LANG_KEY = 'pubgolf-lang';

function loadLang(): Language {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'de') return saved;
  } catch {}
  return 'de';
}

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    // CitySelect
    'city.title': '🗺️ Wähle deine Stadt',
    'city.subtitle': 'Pub Golf in ganz Deutschland',
    'city.footer': 'Prost! 🍻',
    // ModeSelect
    'mode.back': 'Städte',
    'mode.pubgolf': 'Pub-Golf',
    'mode.choose': 'Wähle deinen Kurs',
    'mode.holes': 'LÖCHER',
    'mode.bars': 'Bars & Wirtshäuser',
    'mode.mix': 'Mix aus Bieren & Drinks',
    'mode.footer': 'Prost! 🍻',
    // BottomNav
    'nav.players': 'Spieler',
    'nav.course': 'Kurs',
    'nav.game': 'Spiel',
    'nav.score': 'Score',
    // PlayerTab
    'player.placeholder': 'Spielername...',
    'player.exists': 'Name existiert bereits oder ist ungültig',
    'player.holes': 'Löcher',
    'player.empty': 'Füge Spieler hinzu um loszulegen',
    'player.start': '⛳ Spiel starten',
    'player.running': 'Spiel läuft – wechsle zum Tab „Spiel"',
    // CourseTab
    'course.editor': 'Kurs-Editor',
    'course.shuffle': 'Mischen',
    'course.shuffle_confirm': 'Kurs zufällig neu mischen? Scores werden zurückgesetzt.',
    'course.reset': 'Reset',
    'course.reset_confirm': 'Kurs auf Standardwerte zurücksetzen?',
    'course.totalPar': 'Gesamt-Par',
    'course.rules': 'Sonderregeln',
    'course.info': '📝 Info',
    'course.rulesTab': '🎲 Regeln',
    'course.activeRules': 'Aktive Regeln',
    'course.venue': 'Lokal',
    'course.drink': 'Getränk',
    'course.time': 'Uhrzeit',
    // GameTab
    'game.hole': 'Loch',
    'game.noPlayers': 'Keine Spieler vorhanden',
    'game.addPlayers': 'Spieler hinzufügen',
    'game.back': 'Zurück',
    'game.next': 'Weiter',
    'game.results': 'Ergebnisse ansehen',
    'game.standing': 'Zwischenstand',
    'game.specialRules': 'Sonderregel',
    'game.specialRulesPlural': 'Sonderregeln',
    'game.penaltySip': 'Strafschluck',
    'game.penaltySips': 'Strafschlucke',
    'game.remove': 'Entfernen',
    'game.signatureHole': '⭐ Signature-Loch',
    'game.turn': '🔄 TURN – HALBZEIT',
    'game.finale': '🏆 FINALE',
    // ScorecardTab
    'score.scorecard': 'Scorecard',
    'score.total': 'Gesamt',
    'score.holes': 'Löcher',
    'score.backToGame': '← Zurück zum Spiel',
    'score.changeMode': '⛳ Modus wechseln',
    'score.resetGame': '🗑 Reset',
    'score.resetConfirm': 'Spiel wirklich zurücksetzen? Alle Scores gehen verloren!',
    'score.venue': 'Lokal',
    // Kölsch Ranking
    'kolsch.title': '🏆 Kölsch-Ranking',
    'kolsch.subtitle': 'Welche Sorte war die beste?',
    'kolsch.vote': 'Abstimmen',
    'kolsch.revote': 'Neu abstimmen',
    'kolsch.vote1': 'Stimme',
    'kolsch.votes': 'Stimmen',
    // GameLayout
    'layout.switchCourse': 'Kurs wechseln',
    // Rules
    'rules.handicap': 'Handicap',
    'rules.bonus': 'Bonus',
    'rules.fun': 'Spaß',
    'rules.special': 'Sonder',
    // Flags
    'flag.signature': '⭐ Signature',
    'flag.turn': '🔄 Turn',
    'flag.finale': '🏆 Finale',
  },
  en: {
    // CitySelect
    'city.title': '🗺️ Choose your city',
    'city.subtitle': 'Pub Golf across Germany',
    'city.footer': 'Cheers! 🍻',
    // ModeSelect
    'mode.back': 'Cities',
    'mode.pubgolf': 'Pub Golf',
    'mode.choose': 'Choose your course',
    'mode.holes': 'HOLES',
    'mode.bars': 'Bars & pubs',
    'mode.mix': 'Mix of beers & drinks',
    'mode.footer': 'Cheers! 🍻',
    // BottomNav
    'nav.players': 'Players',
    'nav.course': 'Course',
    'nav.game': 'Game',
    'nav.score': 'Score',
    // PlayerTab
    'player.placeholder': 'Player name...',
    'player.exists': 'Name already exists or is invalid',
    'player.holes': 'Holes',
    'player.empty': 'Add players to get started',
    'player.start': '⛳ Start game',
    'player.running': 'Game in progress – switch to the "Game" tab',
    // CourseTab
    'course.editor': 'Course Editor',
    'course.shuffle': 'Shuffle',
    'course.shuffle_confirm': 'Randomly shuffle the course? Scores will be reset.',
    'course.reset': 'Reset',
    'course.reset_confirm': 'Reset course to defaults?',
    'course.totalPar': 'Total Par',
    'course.rules': 'Special rules',
    'course.info': '📝 Info',
    'course.rulesTab': '🎲 Rules',
    'course.activeRules': 'Active rules',
    'course.venue': 'Venue',
    'course.drink': 'Drink',
    'course.time': 'Time',
    // GameTab
    'game.hole': 'Hole',
    'game.noPlayers': 'No players yet',
    'game.addPlayers': 'Add players',
    'game.back': 'Back',
    'game.next': 'Next',
    'game.results': 'View results',
    'game.standing': 'Leaderboard',
    'game.specialRules': 'Special rule',
    'game.specialRulesPlural': 'Special rules',
    'game.penaltySip': 'Penalty sip',
    'game.penaltySips': 'Penalty sips',
    'game.remove': 'Remove',
    'game.signatureHole': '⭐ Signature hole',
    'game.turn': '🔄 TURN – HALFWAY',
    'game.finale': '🏆 FINALE',
    // ScorecardTab
    'score.scorecard': 'Scorecard',
    'score.total': 'Total',
    'score.holes': 'Holes',
    'score.backToGame': '← Back to game',
    'score.changeMode': '⛳ Change mode',
    'score.resetGame': '🗑 Reset',
    'score.resetConfirm': 'Really reset the game? All scores will be lost!',
    'score.venue': 'Venue',
    // Kölsch Ranking
    'kolsch.title': '🏆 Kölsch Ranking',
    'kolsch.subtitle': 'Which variety was the best?',
    'kolsch.vote': 'Vote',
    'kolsch.revote': 'Vote again',
    'kolsch.vote1': 'vote',
    'kolsch.votes': 'votes',
    // GameLayout
    'layout.switchCourse': 'Switch course',
    // Rules
    'rules.handicap': 'Handicap',
    'rules.bonus': 'Bonus',
    'rules.fun': 'Fun',
    'rules.special': 'Special',
    // Flags
    'flag.signature': '⭐ Signature',
    'flag.turn': '🔄 Turn',
    'flag.finale': '🏆 Finale',
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(loadLang);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem(LANG_KEY, l);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[lang][key] || translations['de'][key] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider');
  return ctx;
}
