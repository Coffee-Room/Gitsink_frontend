"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function ApiExample() {
  return (
    <section id="api" className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <ScrollReveal animation="fade">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-8 md:mb-16">
            API Example
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <ScrollReveal animation="slide-right" delay={200}>
            <div className="rounded-lg bg-black p-4 md:p-6 shadow-lg overflow-x-auto">
              <pre className="text-xs sm:text-sm text-green-400">
                <code>{`curl https://api.gitsink.dev/user/projects \\
  -H "Authorization: Bearer <your-api-key>"`}</code>
              </pre>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left" delay={400}>
            <div className="rounded-lg bg-black p-4 md:p-6 shadow-lg overflow-x-auto">
              <pre className="text-xs sm:text-sm text-blue-400">
                <code>{`{
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
}`}</code>
              </pre>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade" delay={600}>
          <div className="mt-6 md:mt-8 text-center">
            <Button variant="outline">
              View API Docs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
