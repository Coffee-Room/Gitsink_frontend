"use client"

import type React from "react"
import { RefreshCw, Zap, Key } from "lucide-react"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"
import { useLoading } from "@/contexts/loading-context"
import { useEffect, useRef } from "react"

export default function Features() {
  const { setSectionLoaded } = useLoading()
  const hasMarkedLoaded = useRef(false)

  // Mark this section as loaded when it mounts, but only once
  useEffect(() => {
    // Use a timeout to ensure this runs after initial render
    const timer = setTimeout(() => {
      if (!hasMarkedLoaded.current) {
        setSectionLoaded("features", true)
        hasMarkedLoaded.current = true
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [setSectionLoaded])

  return (
    <section id="features" className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <CoordinatedAnimation type="fade">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-8 md:mb-16">
            Features
          </h2>
        </CoordinatedAnimation>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <CoordinatedAnimation delay={300} type="slide-up">
            <FeatureCard
              icon={<RefreshCw className="h-8 w-8 text-primary" />}
              title="Auto-sync"
              description="Auto-sync your GitHub content — stay up-to-date with zero effort"
            />
          </CoordinatedAnimation>

          <CoordinatedAnimation delay={500} type="slide-up">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="Fast API"
              description="Fast API, powered by Redis — optimized for speed"
            />
          </CoordinatedAnimation>

          <CoordinatedAnimation delay={700} type="slide-up" className="sm:col-span-2 md:col-span-1">
            <FeatureCard
              icon={<Key className="h-8 w-8 text-primary" />}
              title="Simple Integration"
              description="Simple Integration — get started in seconds"
            />
          </CoordinatedAnimation>
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
