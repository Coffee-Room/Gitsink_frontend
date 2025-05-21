import type { Metadata } from "next"
import ApiPageContent from "./api-page-content"

export const metadata: Metadata = {
  title: "Gitsink API - Build with the Gitsink API",
  description: "Access synced GitHub data, enrich metadata, and integrate projects using our REST and GraphQL APIs.",
}

export default function ApiPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <ApiPageContent />
    </div>
  )
}
