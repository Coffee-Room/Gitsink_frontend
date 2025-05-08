"use client"

import { useState, useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HowItWorksHero from "@/components/how-it-works/hero"
import StepByStepProcess from "@/components/how-it-works/step-by-step"
import HowItWorksCta from "@/components/how-it-works/cta"
import ScrollToTopButton from "@/components/ui/scroll-to-top-button"
import { Loader2 } from "lucide-react"

export default function HowItWorksPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    // Scroll to top when page loads
    window.scrollTo(0, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <HowItWorksHero />
            <StepByStepProcess />
            <HowItWorksCta />
          </>
        )}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
