import type { Metadata } from "next"
import WaitlistHero from "@/components/waitlist/waitlist-hero"
import WaitlistForm from "@/components/waitlist/waitlist-form"
import Header from "@/components/layout/header"

export const metadata: Metadata = {
  title: "Join the Waitlist | Gitsink",
  description:
    "Sign up for early access to Gitsink, the next generation version control platform for modern development teams.",
}

export default function WaitlistPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        <WaitlistHero />
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
