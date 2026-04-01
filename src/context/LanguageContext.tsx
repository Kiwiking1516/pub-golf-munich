import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations } from '@/data/translations';

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

const fallbackContext: LanguageContextType = {
  lang: loadLang(),
  setLang: () => {},
  t: (key: string) => translations[loadLang()][key] || translations['de'][key] || key,
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  return ctx ?? fallbackContext;
}
