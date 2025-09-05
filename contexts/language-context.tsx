"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import {
  type SupportedLanguage,
  detectUserRegion,
  getBrowserLanguage,
  getStoredLanguage,
  setStoredLanguage,
} from "@/lib/language-detection"

interface LanguageContextType {
  currentLanguage: SupportedLanguage
  setLanguage: (language: SupportedLanguage) => void
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>("en")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function initializeLanguage() {
      try {
        // Check for stored preference first
        const storedLanguage = getStoredLanguage()
        if (storedLanguage) {
          setCurrentLanguage(storedLanguage)
          setIsLoading(false)
          return
        }

        // Try to detect region
        const regionInfo = await detectUserRegion()
        setCurrentLanguage(regionInfo.language)
      } catch (error) {
        // Fallback to browser language
        const browserLang = getBrowserLanguage()
        setCurrentLanguage(browserLang)
      } finally {
        setIsLoading(false)
      }
    }

    initializeLanguage()
  }, [])

  const setLanguage = (language: SupportedLanguage) => {
    setCurrentLanguage(language)
    setStoredLanguage(language)
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, isLoading }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
