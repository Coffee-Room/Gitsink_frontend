"use client"

import { Suspense, lazy } from "react"
import { useEffect, useState } from "react"

// Lazy load components that might use browser APIs
const FaqHero = lazy(() => import("@/components/faq/hero"))
const FaqList = lazy(() => import("@/components/faq/faq-list"))
const FaqCta = lazy(() => import("@/components/faq/cta"))
const ScrollToTopButton = lazy(() => import("@/components/ui/scroll-to-top-button"))

export default function FaqClientWrapper() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <>
        {/* Static fallback content */}
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Gitsink and how it can help you showcase your projects.
          </p>
        </div>
        <div className="container py-12">
          <div className="max-w-4xl mx-auto p-6 md:p-8 bg-muted/30 rounded-lg animate-pulse">
            <div className="space-y-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Loading...</p>
        </div>
      }
    >
      <FaqHero />
      <FaqList />
      <FaqCta />
      <ScrollToTopButton />
    </Suspense>
  )
}
