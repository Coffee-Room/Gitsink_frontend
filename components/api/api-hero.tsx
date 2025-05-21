"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Key } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ApiHero() {
  const router = useRouter()

  return (
    <section id="hero" className="relative py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Build with the Gitsink API
        </h1>
        <p className="mt-6 text-balance text-xl text-muted-foreground">
          Access synced GitHub data, enrich metadata, and integrate projects using our REST and GraphQL APIs.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={() => router.push("/login")}
            className="group w-full sm:w-auto"
            leftIcon={<Key className="h-4 w-4" />}
          >
            Get API Key
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => router.push("/docs")}
            className="w-full sm:w-auto"
            leftIcon={<BookOpen className="h-4 w-4" />}
          >
            View Full Docs
          </Button>
        </div>
      </div>
    </section>
  )
}
