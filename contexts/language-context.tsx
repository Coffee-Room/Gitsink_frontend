"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Language = {
  code: string
  name: string
  nativeName: string
}

type LanguageContextType = {
  currentLanguage: Language
  setLanguage: (code: string) => void
  languages: Language[]
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
]

// Default to English
const defaultLanguage = languages[0]

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  setLanguage: () => {},
  languages: languages,
})

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language")
      if (savedLanguage) {
        const languageObj = languages.find((lang) => lang.code === savedLanguage)
        if (languageObj) {
          setCurrentLanguage(languageObj)
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    } finally {
      setIsInitialized(true)
    }
  }, [])

  const setLanguage = (code: string) => {
    try {
      const languageObj = languages.find((lang) => lang.code === code)
      if (languageObj) {
        setCurrentLanguage(languageObj)
        localStorage.setItem("language", code)
      }
    } catch (error) {
      console.error("Error setting language:", error)
    }
  }

  if (!isInitialized) {
    return null // Don't render children until language is initialized
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages }}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
