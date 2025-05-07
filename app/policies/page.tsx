import PoliciesHero from "@/components/policies/hero"
import PoliciesSections from "@/components/policies/policies-sections"
import PoliciesCta from "@/components/policies/cta"
import PoliciesNavigation from "@/components/policies/policies-navigation"
import { LanguageProvider } from "@/contexts/language-context"
import LanguageSelector from "@/components/policies/language-selector"
import Header from "@/components/layout/header"

export const metadata = {
  title: "Policies | Gitsink",
  description: "Learn about our terms of service, privacy policy, and other policies that govern the use of Gitsink.",
}

export default function PoliciesPage() {
  return (
    <>
      <LanguageProvider>
        <main className="min-h-screen">
          <PoliciesHero />
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="flex justify-end mb-6">
                <LanguageSelector />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
                <PoliciesNavigation />
                <PoliciesSections />
              </div>
            </div>
          </section>
          <PoliciesCta />
        </main>
      </LanguageProvider>
    </>
  )
}
