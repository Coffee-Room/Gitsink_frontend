import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
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
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
