"use client"

import dynamic from "next/dynamic"

// Dynamically import client components to avoid serialization issues
const ApiHero = dynamic(() => import("@/components/api/api-hero"), { ssr: false })
const ApiQuickstart = dynamic(() => import("@/components/api/api-quickstart"), { ssr: false })
const ApiEndpoints = dynamic(() => import("@/components/api/api-endpoints"), { ssr: false })
const ApiAuthentication = dynamic(() => import("@/components/api/api-authentication"), { ssr: false })
const ApiSandbox = dynamic(() => import("@/components/api/api-sandbox"), { ssr: false })

function ApiSections() {
  return (
    <>
      <ApiHero />
      <div className="mt-16 space-y-24">
        <ApiQuickstart />
        <ApiEndpoints />
        <ApiAuthentication />
        <ApiSandbox />
      </div>
    </>
  )
}

export default function ApiPageClient() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Static Server Component content */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Gitsink API</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access synced GitHub data, enrich metadata, and integrate projects using our REST and GraphQL APIs.
        </p>
      </div>

      {/* Import client components separately */}
      <ApiSections />
    </div>
  )
}
