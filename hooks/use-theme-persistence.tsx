"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function useThemePersistence() {
  const { setTheme, theme, resolvedTheme } = useTheme()

  // Sync with localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme && savedTheme !== "system") {
      setTheme(savedTheme)
    }
  }, [setTheme])

  // Save theme changes to localStorage
  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  // Log theme changes for debugging
  useEffect(() => {
    console.log(`Theme changed to: ${theme} (resolved: ${resolvedTheme})`)
  }, [theme, resolvedTheme])

  return { theme, resolvedTheme }
}
