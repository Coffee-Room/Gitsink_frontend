import { Suspense } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/layout/header"

// Dynamically import client components with SSR disabled
const ContactHero = dynamic(() => import("@/components/contact/hero"), { ssr: false })
const ContactForm = dynamic(() => import("@/components/contact/contact-form"), { ssr: false })
const ContactInfo = dynamic(() => import("@/components/contact/contact-info"), { ssr: false })

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

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
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
    </div>
  )
}
