"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { supportedLanguages, type SupportedLanguage } from "@/lib/language-detection"

const languageFlags: Record<SupportedLanguage, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  nl: "🇳🇱",
  ja: "🇯🇵",
}

export function LanguageSelector() {
  const { currentLanguage, setLanguage, isLoading } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <Globe className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <span className="text-base">{languageFlags[currentLanguage]}</span>
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {Object.entries(supportedLanguages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => {
              setLanguage(code as SupportedLanguage)
              setIsOpen(false)
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-base">{languageFlags[code as SupportedLanguage]}</span>
            <span className={currentLanguage === code ? "font-semibold" : ""}>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
