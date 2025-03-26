import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./translations/en.json";
import translationPT from "./translations/pt.json";
import translationES from "./translations/es.json";

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
  es: { translation: translationES },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",             
  fallbackLng: "pt",     
  interpolation: {
    escapeValue: false,
  },
});
