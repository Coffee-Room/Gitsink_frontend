import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FaqHero from "@/components/faq/hero"
import FaqList from "@/components/faq/faq-list"
import FaqCta from "@/components/faq/cta"
import ScrollToTopButton from "@/components/ui/scroll-to-top-button"

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        <FaqHero />
        <FaqList />
        <FaqCta />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
