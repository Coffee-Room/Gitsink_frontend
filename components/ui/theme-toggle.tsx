"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Use resolvedTheme instead of theme to get the actual applied theme
  const currentTheme = resolvedTheme || "light"

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
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
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="w-9 h-9"
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] ${currentTheme === "dark" ? "block" : "hidden"}`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] ${currentTheme === "dark" ? "hidden" : "block"}`} />
    </Button>
  )
}
