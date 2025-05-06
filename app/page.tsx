import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import ApiExample from "@/components/api-example"
import ProjectShowcase from "@/components/project-showcase"
import StatsSection from "@/components/stats-section"
import Faq from "@/components/faq"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import ScrollProgressBar from "@/components/scroll-progress-bar"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import ScrollAnimatedBackground from "@/components/scroll-animated-background"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollAnimatedBackground />
      <ScrollProgressBar />
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
      <ScrollToTopButton />
    </div>
  )
}
