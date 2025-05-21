"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Import static components
import FeaturesHeroStatic from "@/components/features/static/features-hero-static"
import ProblemSolutionStatic from "@/components/features/static/problem-solution-static"
import CoreFeaturesStatic from "@/components/features/static/core-features-static"
import ApiExamplesStatic from "@/components/features/static/api-examples-static"
import TestimonialsStatic from "@/components/features/static/testimonials-static"
import FeaturesCta from "@/components/features/cta"

// Dynamically import interactive components with ssr: false
const ScrollToTopButton = dynamic(() => import("@/components/ui/scroll-to-top-button"), { ssr: false })

export default function FeaturesClientWrapper() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <FeaturesHeroStatic />
      <ProblemSolutionStatic />
      <CoreFeaturesStatic />
      <ApiExamplesStatic />
      <TestimonialsStatic />
      <FeaturesCta />
      {isClient && <ScrollToTopButton />}
    </>
  )
}
