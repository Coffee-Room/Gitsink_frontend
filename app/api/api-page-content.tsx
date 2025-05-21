"use client"

import { Suspense } from "react"
import ApiHero from "@/components/api/api-hero"
import ApiQuickstart from "@/components/api/api-quickstart"
import ApiEndpoints from "@/components/api/api-endpoints"
import ApiAuthentication from "@/components/api/api-authentication"
import ApiSandbox from "@/components/api/api-sandbox"

// Loading fallbacks
const SectionSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
    <div className="h-64 bg-gray-200 rounded mb-8"></div>
  </div>
)

export default function ApiPageContent() {
  return (
    <>
      <Suspense fallback={<SectionSkeleton />}>
        <ApiHero />
      </Suspense>

      <div className="mt-16 space-y-24">
        <Suspense fallback={<SectionSkeleton />}>
          <ApiQuickstart />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ApiEndpoints />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ApiAuthentication />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ApiSandbox />
        </Suspense>
      </div>
    </>
  )
}
