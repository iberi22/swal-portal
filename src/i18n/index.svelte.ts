import { TRANSLATIONS, type SupportedLanguage, LANGUAGE_OPTIONS } from "./translations";

class I18nManager {
  currentLang = $state<SupportedLanguage>("en");

  constructor() {
    if (typeof window !== "undefined") {
      this.initFromBrowser();
    }
  }

  initFromBrowser() {
    const saved = localStorage.getItem("swal_lang") as SupportedLanguage;
    if (saved && TRANSLATIONS[saved]) {
      this.setLanguage(saved);
      return;
    }

    // Auto-detect from browser / OS
    const browserLangs = navigator.languages || [navigator.language || "en"];
    for (const raw of browserLangs) {
      const code = raw.toLowerCase().split("-")[0] as SupportedLanguage;
      if (TRANSLATIONS[code]) {
        this.setLanguage(code);
        return;
      }
    }

    this.setLanguage("en");
  }

  setLanguage(lang: SupportedLanguage) {
    if (!TRANSLATIONS[lang]) lang = "en";
    this.currentLang = lang;
    if (typeof window !== "undefined") {
      localStorage.setItem("swal_lang", lang);
      const opt = LANGUAGE_OPTIONS.find(o => o.code === lang);
      document.documentElement.dir = opt?.dir || "ltr";
      document.documentElement.lang = lang;
    }
  }

  t(key: string): string {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS["en"];
    return dict[key] || TRANSLATIONS["en"]?.[key] || key;
  }
}

export const i18n = new I18nManager();
export const t = (key: string) => i18n.t(key);
export { LANGUAGE_OPTIONS, type SupportedLanguage };
