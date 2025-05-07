"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"
import { useLanguage } from "@/contexts/language-context"
import { policyTranslations } from "@/lib/translations/policies"

export default function PoliciesCta() {
  const { currentLanguage } = useLanguage()
  // Ensure we have a valid language code and fallback to English if needed
  const langCode = currentLanguage?.code || "en"
  const translations = policyTranslations[langCode] || policyTranslations.en

  // Safely access nested properties with fallbacks
  const title = translations?.cta?.title || "Ready to showcase your GitHub projects?"
  const subtitle =
    translations?.cta?.subtitle || "Secure your API key and start showcasing your projects with confidence."
  const buttonText = translations?.cta?.button || "Join the Waitlist"
  const disclaimer =
    translations?.cta?.disclaimer || "By joining, you agree to our Terms of Service and Privacy Policy."

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <CoordinatedAnimation type="fade">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-6 sm:p-8 md:p-12 text-center shadow-xl border border-primary/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
            <div className="mt-8 md:mt-10">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg h-auto shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">{disclaimer}</div>
          </div>
        </CoordinatedAnimation>
      </div>
    </section>
  )
}
