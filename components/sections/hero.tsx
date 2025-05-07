"use client"

import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ApiBrowser } from "@/components/mockups/api-browser"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"
import { useLoading } from "@/contexts/loading-context"
import Link from "next/link"

const styles = {
  textShadowBlue: {
    textShadow: "0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)",
  },
}

export default function Hero() {
  const isMobile = useIsMobile()
  const { isHydrated } = useLoading()

  const jsonData = `{
  "projects": [
    {
      "name": "awesome-project",
      "description": "A revolutionary dev tool",
      "stars": 128,
      "language": "TypeScript",
      "lastUpdated": "2023-04-15T10:30:00Z",
      "portfolio": {
        "featured": true,
        "category": "Developer Tools",
        "demo": "https://demo.example.com"
      }
    },
    {
      "name": "another-cool-repo",
      "description": "Simplify your workflow",
      "stars": 84,
      "language": "JavaScript",
      "lastUpdated": "2023-03-22T14:15:00Z",
      "portfolio": {
        "featured": false,
        "category": "Utilities",
        "demo": null
      }
    }
  ]
}`

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background via-primary/5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <CoordinatedAnimation delay={200} type="fade">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight"
              style={styles.textShadowBlue}
            >
              Showcase Your GitHub Projects — <span className="text-primary">Instantly</span>.
            </h1>
          </CoordinatedAnimation>

          <CoordinatedAnimation delay={800} type="fade">
            <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-muted-foreground">
              Gitsink helps developers turn their repos into a beautiful, structured API. Powered by your code, enriched
              with one file.
            </p>
          </CoordinatedAnimation>

          <CoordinatedAnimation delay={1200} type="fade">
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-black hover:bg-black/90 text-white">
                  Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto opacity-70" disabled title="Coming soon">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Button>
            </div>
          </CoordinatedAnimation>
        </div>
      </div>

      <CoordinatedAnimation delay={1600} type="fade">
        <div className="mt-10 md:mt-16 flex justify-center px-4 md:px-0">
          <ApiBrowser jsonData={jsonData} className="w-full max-w-4xl" />
        </div>
      </CoordinatedAnimation>
    </section>
  )
}
