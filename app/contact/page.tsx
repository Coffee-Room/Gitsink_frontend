import { Suspense } from "react"
import ContactHero from "@/components/contact/hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 relative">
        <ContactHero />
        <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <ContactInfo />
            <Suspense fallback={<div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg"></div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  )
}
