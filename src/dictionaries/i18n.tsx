// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import am from "../../locales/am.json";
import en from "../../locales/en.json";

const resources = {
  en: { translation: en },
  am: { translation: am },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
