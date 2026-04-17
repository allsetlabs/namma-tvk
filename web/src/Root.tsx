import { useState, useCallback } from 'react';
import App from './App';
import { LanguageContext, type Language, translations, getDefaultLanguage } from './i18n';

export function Root() {
  const [language, setLanguageState] = useState<Language>(getDefaultLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tvk-lang', lang);
  }, []);

  const toggle = useCallback(() => {
    setLanguageState((prev) => {
      const next: Language = prev === 'ta' ? 'en' : 'ta';
      localStorage.setItem('tvk-lang', next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], setLanguage, toggle }}
    >
      <App />
    </LanguageContext.Provider>
  );
}
