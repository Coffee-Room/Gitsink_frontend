"use client"

import { Github, Code, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ScrollReveal from "@/components/scroll-reveal"
import StaggeredItems from "@/components/staggered-items"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <ScrollReveal animation="fade">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-8 md:mb-16">
            How It Works
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
          <StaggeredItems baseDelay={300} delayIncrement={200}>
            <ScrollReveal animation="zoom">
              <Card className="border-none shadow-lg bg-background h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">1. Login with GitHub</h3>
                  <p className="mt-2 text-muted-foreground">Get instant access and your unique API key.</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal animation="zoom">
              <Card className="border-none shadow-lg bg-background h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">2. Add a Portfolio.md File</h3>
                  <p className="mt-2 text-muted-foreground">
                    We use this file to understand your project's goals and metadata.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal animation="zoom" className="sm:col-span-2 md:col-span-1">
              <Card className="border-none shadow-lg bg-background h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">3. Get Your Project API</h3>
                  <p className="mt-2 text-muted-foreground">Sync is automatic and lightning fast with Redis.</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </StaggeredItems>
        </div>
      </div>
    </section>
  )
}
