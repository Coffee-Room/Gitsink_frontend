import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import StaticFaqContent from "@/components/faq/static-faq-content"
import ClientSideEnhancements from "@/components/faq/client-side-enhancements"

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        <StaticFaqContent />
        <ClientSideEnhancements />
      </main>
      <Footer />
    </div>
  )
}
