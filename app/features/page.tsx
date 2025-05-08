import Header from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        {/* Simplified Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
                Your Projects, <span className="text-primary">Everywhere</span> — Instantly
              </h1>
              <p className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Gitsink transforms your GitHub projects into a versatile API — ready for websites, bots, plugins, and
                beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Simplified Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful capabilities that make Gitsink essential for developers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="p-6 md:p-8 border rounded-lg shadow-sm">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                    <path d="M16 16h5v5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Real-Time Sync</h3>
                <p className="text-sm text-primary font-medium mb-3">No Manual Updates</p>
                <p className="text-muted-foreground">
                  Your GitHub projects are automatically updated — perfect for dynamic sites, bots, and plugins.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 md:p-8 border rounded-lg shadow-sm">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Custom Project Stories</h3>
                <p className="text-sm text-primary font-medium mb-3">Your Way</p>
                <p className="text-muted-foreground">
                  Define how your projects are presented using Portfolio.md — add descriptions, highlights, and more.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 md:p-8 border rounded-lg shadow-sm">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Multi-Platform Ready</h3>
                <p className="text-sm text-primary font-medium mb-3">Websites, Bots, Plugins</p>
                <p className="text-muted-foreground">
                  Showcase your projects anywhere — websites, Telegram bots, Twitter profiles, Twitch overlays, and
                  beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to transform your GitHub portfolio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our waitlist today and be the first to showcase your projects with Gitsink.
            </p>
            <Link href="/waitlist">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-white"
              >
                Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
