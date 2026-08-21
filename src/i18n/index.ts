import { writable, get } from "svelte/store";
import { TRANSLATIONS, type SupportedLanguage, LANGUAGE_OPTIONS } from "./translations";

export const currentLang = writable<SupportedLanguage>("en");

if (typeof window !== "undefined") {
  const saved = localStorage.getItem("swal_lang") as SupportedLanguage;
  if (saved && TRANSLATIONS[saved]) {
    setLanguage(saved);
  } else {
    // Auto-detect from browser
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
