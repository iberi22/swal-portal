import { TRANSLATIONS, type SupportedLanguage, LANGUAGE_OPTIONS } from "./translations";

export type ThemeMode = "dark" | "light" | "system";

class I18nManager {
  currentLang = $state<SupportedLanguage>("en");
  currentTheme = $state<ThemeMode>("system");

  constructor() {
    if (typeof window !== "undefined") {
      this.initFromBrowser();
    }
  }

  initFromBrowser() {
    // Language detection
    const savedLang = localStorage.getItem("swal_lang") as SupportedLanguage;
    if (savedLang && TRANSLATIONS[savedLang]) {
      this.setLanguage(savedLang);
    } else {
      const browserLangs = navigator.languages || [navigator.language || "en"];
      let detected: SupportedLanguage = "en";
      for (const raw of browserLangs) {
        const code = raw.toLowerCase().split("-")[0] as SupportedLanguage;
        if (TRANSLATIONS[code]) {
          detected = code;
          break;
        }
      }
      this.setLanguage(detected);
    }

    // Theme detection
    const savedTheme = (localStorage.getItem("swal_theme") as ThemeMode) || "system";
    this.setTheme(savedTheme);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (this.currentTheme === "system") {
        this.applyThemeToDOM("system");
      }
    });
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

  setTheme(mode: ThemeMode) {
    this.currentTheme = mode;
    if (typeof window !== "undefined") {
      localStorage.setItem("swal_theme", mode);
      this.applyThemeToDOM(mode);
    }
  }

  private applyThemeToDOM(mode: ThemeMode) {
    const isDark =
      mode === "dark" ||
      (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
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
