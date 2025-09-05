export interface RegionInfo {
  country: string
  language: string
  timezone: string
}

export const supportedLanguages = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
  ja: "日本語",
} as const

export type SupportedLanguage = keyof typeof supportedLanguages

const countryToLanguage: Record<string, SupportedLanguage> = {
  US: "en",
  GB: "en",
  CA: "en",
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

export async function detectUserRegion(): Promise<RegionInfo> {
  try {
    // Try to get user's IP and location
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()

    return {
      country: data.country_code || "US",
      language: countryToLanguage[data.country_code] || "en",
      timezone: data.timezone || "UTC",
    }
  } catch (error) {
    // Fallback to browser language detection
    const browserLang = navigator.language.split("-")[0] as SupportedLanguage

    return {
      country: "US",
      language: Object.keys(supportedLanguages).includes(browserLang) ? browserLang : "en",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }
  }
}

export function getBrowserLanguage(): SupportedLanguage {
  const browserLang = navigator.language.split("-")[0] as SupportedLanguage
  return Object.keys(supportedLanguages).includes(browserLang) ? browserLang : "en"
}

export function getStoredLanguage(): SupportedLanguage | null {
  if (typeof window === "undefined") return null

  const stored = localStorage.getItem("gitsink-language")
  return stored && Object.keys(supportedLanguages).includes(stored) ? (stored as SupportedLanguage) : null
}

export function setStoredLanguage(language: SupportedLanguage): void {
  if (typeof window === "undefined") return
  localStorage.setItem("gitsink-language", language)
}
