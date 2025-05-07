"use client"

import { useTheme } from "next-themes"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isChanging, setIsChanging] = useState(false)

  // Use resolvedTheme instead of theme to get the actual applied theme
  const currentTheme = resolvedTheme || "light"

  // Debounced theme toggle to prevent rapid changes
  const toggleTheme = useCallback(() => {
    if (isChanging) return

    setIsChanging(true)
    setTheme(currentTheme === "dark" ? "light" : "dark")

    // Prevent multiple clicks for 300ms
    setTimeout(() => setIsChanging(false), 300)
  }, [currentTheme, setTheme, isChanging])

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    // Short delay to ensure theme is properly initialized
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  // If not mounted yet, render placeholder with same dimensions to prevent layout shift
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9 pointer-events-none" disabled>
        <div className="h-[1.2rem] w-[1.2rem] opacity-0" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      disabled={isChanging}
      className={`w-9 h-9 transition-all duration-200 hover:scale-110 ${isChanging ? "opacity-70" : ""}`}
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          currentTheme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0 absolute"
        }`}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          currentTheme === "dark" ? "opacity-0 rotate-90 scale-0 absolute" : "opacity-100 rotate-0 scale-100"
        }`}
      />
    </Button>
  )
}
