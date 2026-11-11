import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { content } from './content';

const STORAGE_KEY = 'site-language';
const LanguageContext = createContext(null);

function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'tr' || saved === 'en') return saved;
  } catch {
    // depolama kapalıysa tarayıcı diline göre devam et
  }
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // yok say
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      t: content[language],
      toggleLanguage: () => setLanguage((l) => (l === 'tr' ? 'en' : 'tr')),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage, LanguageProvider içinde kullanılmalı');
  return ctx;
}
