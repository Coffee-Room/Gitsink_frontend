import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"

// Import sections directly instead of using dynamic imports
import HowItWorks from "@/components/sections/how-it-works"
import Features from "@/components/sections/features"
import ApiExample from "@/components/sections/api-example"
import ProjectShowcase from "@/components/sections/project-showcase"
import StatsSection from "@/components/sections/stats-section"
import Faq from "@/components/sections/faq"
import Cta from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <ApiExample />
        <ProjectShowcase />
        <StatsSection />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
