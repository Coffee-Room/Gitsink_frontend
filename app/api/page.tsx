import type { Metadata } from "next"
import ApiHero from "@/components/api/api-hero"
import ApiQuickstart from "@/components/api/api-quickstart"
import ApiEndpoints from "@/components/api/api-endpoints"
import ApiAuthentication from "@/components/api/api-authentication"
import ApiSandbox from "@/components/api/api-sandbox"

export const metadata: Metadata = {
  title: "Gitsink API - Build with the Gitsink API",
  description: "Access synced GitHub data, enrich metadata, and integrate projects using our REST and GraphQL APIs.",
}

export default function ApiPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <ApiHero />
      <div className="mt-16 space-y-24">
        <ApiQuickstart />
        <ApiEndpoints />
        <ApiAuthentication />
        <ApiSandbox />
      </div>
    </div>
  )
}
