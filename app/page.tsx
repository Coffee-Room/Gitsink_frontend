import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import HowItWorks from "@/components/sections/how-it-works"
import ApiExample from "@/components/sections/api-example"
import ProjectShowcase from "@/components/sections/project-showcase"
import StatsSection from "@/components/sections/stats-section"
import Faq from "@/components/sections/faq"
import Cta from "@/components/sections/cta"
import { StructuredData } from "@/components/seo/structured-data"
import { SeoMeta } from "@/components/seo/seo-meta"

export default function HomePage() {
  return (
    <>
      <SeoMeta
        title="Gitsink - Showcase Your GitHub Projects Instantly"
        description="Gitsink helps developers turn their repos into a beautiful, structured API. Powered by your code, enriched with one file."
      />
      <StructuredData />

      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <Hero />
          <Features />
          <HowItWorks />
          <ProjectShowcase />
          <StatsSection />
          <ApiExample />
          <Faq />
          <Cta />
        </main>
      </div>
    </>
  )
}
