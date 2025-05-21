import type { Metadata } from "next"
import Header from "@/components/layout/header"
import FeaturesClientWrapper from "@/components/features/features-client-wrapper"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Features - Gitsink",
  description:
    "Discover how Gitsink transforms your GitHub projects into a versatile API for websites, bots, plugins, and beyond.",
}

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        <FeaturesClientWrapper />
      </main>
      <Footer />
    </div>
  )
}
