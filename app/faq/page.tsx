import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FaqClientWrapper from "@/components/faq/faq-client-wrapper"

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        <FaqClientWrapper />
      </main>
      <Footer />
    </div>
  )
}
