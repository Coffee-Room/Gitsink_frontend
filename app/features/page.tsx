import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FeaturesHero from "@/components/features/hero-updated"
import ProblemSolution from "@/components/features/problem-solution"
import CoreFeatures from "@/components/features/core-features"
import ApiExamples from "@/components/features/api-examples"
import Testimonials from "@/components/features/testimonials"
import FeaturesCta from "@/components/features/cta"
import ScrollToTopButton from "@/components/ui/scroll-to-top-button"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        <FeaturesHero />
        <ProblemSolution />
        <CoreFeatures />
        <ApiExamples />
        <Testimonials />
        <FeaturesCta />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
