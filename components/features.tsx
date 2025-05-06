"use client"

import type React from "react"
import { RefreshCw, Zap, Key } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import StaggeredItems from "@/components/staggered-items"
import { useIsMobile } from "@/hooks/use-is-mobile"

export default function Features() {
  const isMobile = useIsMobile()

  return (
    <section id="features" className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <ScrollReveal animation="fade">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-8 md:mb-16">
            Features
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <StaggeredItems baseDelay={isMobile ? 100 : 300} delayIncrement={isMobile ? 50 : 200}>
            <ScrollReveal animation={isMobile ? "fade" : "slide-up"}>
              <FeatureCard
                icon={<RefreshCw className="h-8 w-8 text-primary" />}
                title="Auto-sync"
                description="Auto-sync your GitHub content — stay up-to-date with zero effort"
              />
            </ScrollReveal>

            <ScrollReveal animation={isMobile ? "fade" : "slide-up"}>
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Fast API"
                description="Fast API, powered by Redis — optimized for speed"
              />
            </ScrollReveal>

            <ScrollReveal animation={isMobile ? "fade" : "slide-up"} className="sm:col-span-2 md:col-span-1">
              <FeatureCard
                icon={<Key className="h-8 w-8 text-primary" />}
                title="Simple Integration"
                description="Simple Integration — get started in seconds"
              />
            </ScrollReveal>
          </StaggeredItems>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  )
}
