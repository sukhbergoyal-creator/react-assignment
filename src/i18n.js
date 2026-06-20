import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
   en: {
  translation: {
    home: "Home",
    users: "Users",
    charts: "Charts",
    settings: "Settings",

    welcome: "Welcome",

    language: "Language",

    enableNotifications:
      "Enable Notifications",

    english: "English",

    hindi: "Hindi",
  },
},

hi: {
  translation: {
    home: "होम",

    users: "उपयोगकर्ता",

    charts: "चार्ट",

    settings: "सेटिंग्स",

    welcome: "स्वागत है",

    language: "भाषा",

    enableNotifications:
      "सूचनाएँ सक्षम करें",

    english: "अंग्रेज़ी",

    hindi: "हिंदी",
  },
},
  },

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;