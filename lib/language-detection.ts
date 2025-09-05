export type SupportedLanguage = "en" | "es" | "fr" | "de" | "nl" | "ja"

export const supportedLanguages: { code: SupportedLanguage; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
]

export const languageNames: Record<SupportedLanguage, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
  ja: "日本語",
}

// Region to language mapping
const regionToLanguage: Record<string, SupportedLanguage> = {
  US: "en",
  CA: "en",
  GB: "en",
  AU: "en",
  NZ: "en",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  PE: "es",
  FR: "fr",
  BE: "fr",
  CH: "fr",
  DE: "de",
  AT: "de",
  NL: "nl",
  JP: "ja",
}

export function getBrowserLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language.split("-")[0] as SupportedLanguage
  return supportedLanguages.find((lang) => lang.code === browserLang)?.code || "en"
}

export function getStoredLanguage(): SupportedLanguage | null {
  if (typeof window === "undefined") return null

  try {
    const stored = localStorage.getItem("language") as SupportedLanguage
    return supportedLanguages.find((lang) => lang.code === stored)?.code || null
  } catch {
    return null
  }
}

export function setStoredLanguage(language: SupportedLanguage): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem("language", language)
  } catch {
    // Ignore localStorage errors
  }
}

export async function detectUserRegion(): Promise<{ language: SupportedLanguage; country?: string }> {
  try {
    // Try to get user's region from IP
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()

    if (data.country_code && regionToLanguage[data.country_code]) {
      return {
        language: regionToLanguage[data.country_code],
        country: data.country_code,
      }
    }
  } catch {
    // Fallback to browser language if IP detection fails
  }

  return { language: getBrowserLanguage() }
}
