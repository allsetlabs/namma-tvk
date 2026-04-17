import { createContext, useContext } from 'react';
import { ta, type Translations } from './ta';
import { en } from './en';

export type Language = 'ta' | 'en';

export interface LanguageContextValue {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggle: () => void;
}

export const translations: Record<Language, Translations> = { ta, en };

export function getDefaultLanguage(): Language {
  const saved = localStorage.getItem('tvk-lang') as Language | null;
  if (saved === 'ta' || saved === 'en') return saved;
  // Default Tamil on mobile, English on desktop
  return window.innerWidth < 768 ? 'ta' : 'en';
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'ta',
  t: ta,
  setLanguage: () => undefined,
  toggle: () => undefined,
});

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

export { ta, en };
export type { Translations };
