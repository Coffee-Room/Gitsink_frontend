"use client"
import dynamic from "next/dynamic"

// Import the client-side contact content with SSR disabled
const ContactContent = dynamic(() => import("@/components/contact/contact-content"), {
  ssr: false,
  loading: () => <ContactFallback />,
})

// Static fallback that doesn't use any browser APIs
function ContactFallback() {
  return (
    <div className="flex-1 relative">
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions, feedback, or interested in partnering with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="h-96 flex items-center justify-center">
            <p>Loading contact information...</p>
          </div>
          <div className="h-96 flex items-center justify-center">
            <p>Loading contact form...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactClientWrapper() {
  return <ContactContent />
}
