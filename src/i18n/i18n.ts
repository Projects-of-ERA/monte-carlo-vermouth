import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

export type Language = 'en' | 'fr' | 'es';

export const getLanguageFromUrl = (): Language => {
  const language = window.location.pathname.split('/')[1];

  if (language === 'fr' || language === 'es') {
    return language;
  }

  return 'en';
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    es: { translation: es },
  },

  lng: getLanguageFromUrl(),
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr', 'es'],

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
