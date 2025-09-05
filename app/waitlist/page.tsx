import { Suspense } from "react"
import { GetWaitlistForm } from "@/components/waitlist/getwaitlist-form"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
          <Suspense fallback={<div>Loading...</div>}>
            <GetWaitlistForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
