"use client"

import type React from "react"
import { RefreshCw, Zap, Key } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <ScrollReveal animation="fade">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-16">Features</h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          <ScrollReveal animation="slide-up" delay={100}>
            <FeatureCard
              icon={<RefreshCw className="h-8 w-8 text-primary" />}
              title="Auto-sync"
              description="Auto-sync your GitHub content — stay up-to-date with zero effort"
            />
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={300}>
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="Fast API"
              description="Fast API, powered by Redis — optimized for speed"
            />
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={500}>
            <FeatureCard
              icon={<Key className="h-8 w-8 text-primary" />}
              title="Simple Integration"
              description="Simple Integration — get started in seconds"
            />
          </ScrollReveal>
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
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  )
}
