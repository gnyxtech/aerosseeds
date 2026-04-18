import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './index';
import type { Lang } from './index';

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => any;
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: any) => {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang;
    if (saved) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    localStorage.setItem('lang', l);
    setLangState(l);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('Wrap app with I18nProvider');
  return ctx;
};
