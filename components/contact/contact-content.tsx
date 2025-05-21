"use client"

import { Suspense, useState, useEffect } from "react"
import ContactHero from "@/components/contact/hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

// Simple loading fallbacks
const HeroFallback = () => (
  <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
    <div className="container px-4 md:px-6 relative z-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions, feedback, or interested in partnering with us? We'd love to hear from you.
        </p>
      </div>
    </div>
  </section>
)

const FormFallback = () => (
  <div className="h-96 flex items-center justify-center">
    <p>Loading contact form...</p>
  </div>
)

const InfoFallback = () => (
  <div className="h-96 flex items-center justify-center">
    <p>Loading contact information...</p>
  </div>
)

export default function ContactContent() {
  // Use state to control rendering to avoid hydration issues
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render anything until after hydration
  if (!isClient) {
    return null
  }

  return (
    <main className="flex-1 relative">
      <Suspense fallback={<HeroFallback />}>
        <ContactHero />
      </Suspense>
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <Suspense fallback={<InfoFallback />}>
            <ContactInfo />
          </Suspense>
          <Suspense fallback={<FormFallback />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
