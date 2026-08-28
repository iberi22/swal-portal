import { writable, get } from "svelte/store";
import { TRANSLATIONS, type SupportedLanguage, LANGUAGE_OPTIONS } from "./translations";

export type ThemeMode = "dark" | "light" | "system";

export const currentLang = writable<SupportedLanguage>("en");
export const currentTheme = writable<ThemeMode>("system");

if (typeof window !== "undefined") {
  // --- Language Initialization & Auto-Detection ---
  const savedLang = localStorage.getItem("swal_lang") as SupportedLanguage;
  if (savedLang && TRANSLATIONS[savedLang]) {
    setLanguage(savedLang);
  } else {
    // Auto-detect browser/system language
    const browserLangs = navigator.languages || [navigator.language || "en"];
    let detected: SupportedLanguage = "en";
    for (const raw of browserLangs) {
      const code = raw.toLowerCase().split("-")[0] as SupportedLanguage;
      if (TRANSLATIONS[code]) {
        detected = code;
        break;
      }
    }
    setLanguage(detected);
  }

  // --- Theme Initialization & Auto-Detection ---
  const savedTheme = (localStorage.getItem("swal_theme") as ThemeMode) || "system";
  setTheme(savedTheme);

  // System theme preference change listener
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (get(currentTheme) === "system") {
      applyThemeToDOM("system");
    }
  });
}

export function setLanguage(lang: SupportedLanguage) {
  if (!TRANSLATIONS[lang]) lang = "en";
  currentLang.set(lang);
  if (typeof window !== "undefined") {
    localStorage.setItem("swal_lang", lang);
    const opt = LANGUAGE_OPTIONS.find(o => o.code === lang);
    document.documentElement.dir = opt?.dir || "ltr";
    document.documentElement.lang = lang;
  }
}

export function setTheme(mode: ThemeMode) {
  currentTheme.set(mode);
  if (typeof window !== "undefined") {
    localStorage.setItem("swal_theme", mode);
    applyThemeToDOM(mode);
  }
}

function applyThemeToDOM(mode: ThemeMode) {
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

export function t(key: string): string {
  let lang = "en";
  try {
    lang = get(currentLang) || "en";
  } catch (e) {
    lang = "en";
  }
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];
  return dict[key] || TRANSLATIONS["en"]?.[key] || key;
}

export { LANGUAGE_OPTIONS, type SupportedLanguage };
