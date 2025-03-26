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

i18n.use(initReactI18next) // Esse é o ponto chave
  .init({
    resources,
    lng: "pt", // idioma padrão
    fallbackLng: "pt", // caso o idioma não esteja disponível
    interpolation: { escapeValue: false },
  });

export default i18n;