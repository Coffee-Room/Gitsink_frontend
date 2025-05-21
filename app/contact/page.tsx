import type { Metadata } from "next"
import Header from "@/components/layout/header"
import ContactClientWrapper from "@/components/contact/contact-client-wrapper"

export const metadata: Metadata = {
  title: "Contact Us | Gitsink",
  description: "Get in touch with the Gitsink team for support, partnerships, or general inquiries.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ContactClientWrapper />
    </div>
  )
}
