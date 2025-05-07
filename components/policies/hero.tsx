"use client"

import { Shield } from "lucide-react"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"
import { useLanguage } from "@/contexts/language-context"
import { policyTranslations } from "@/lib/translations/policies"

export default function PoliciesHero() {
  const { currentLanguage } = useLanguage()
  // Ensure we have a valid language code and fallback to English if needed
  const langCode = currentLanguage?.code || "en"
  const translations = policyTranslations[langCode] || policyTranslations.en

  // Safely access nested properties with optional chaining
  const title = translations?.hero?.title || "Our Policies — Your Security, Our Priority"
  const subtitle =
    translations?.hero?.subtitle || "Understand our terms, your rights, and how we keep your data secure."

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      <div className="absolute inset-0 bg-[url('/abstract-dots-pattern.png')] bg-repeat opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <CoordinatedAnimation type="fade">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg">
                <Shield className="h-10 w-10 text-primary" />
              </div>
            </div>
          </CoordinatedAnimation>

          <CoordinatedAnimation type="fade" delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              {title}
            </h1>
          </CoordinatedAnimation>

          <CoordinatedAnimation delay={400} type="fade">
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </CoordinatedAnimation>
        </div>
      </div>
    </section>
  )
}
