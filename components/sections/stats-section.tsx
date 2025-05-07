"use client"

import type React from "react"

import { Users, Star, Code } from "lucide-react"
import ScrollReveal from "@/components/animations/scroll-reveal"
import ScrollCounter from "@/components/ui/scroll-counter"

export default function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-primary/5">
      <div className="container px-4 md:px-6">
        <ScrollReveal animation="fade">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-8 md:mb-12">
            Trusted by Developers
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
          <ScrollReveal animation="slide-up" delay={100}>
            <StatCard
              icon={<Users className="h-8 w-8 text-primary" />}
              value={<ScrollCounter end={5000} suffix="+" className="text-4xl font-bold" />}
              label="Active Users"
            />
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={300}>
            <StatCard
              icon={<Star className="h-8 w-8 text-primary" />}
              value={<ScrollCounter end={10000} suffix="+" className="text-4xl font-bold" />}
              label="GitHub Stars"
            />
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={500} className="sm:col-span-2 md:col-span-1">
            <StatCard
              icon={<Code className="h-8 w-8 text-primary" />}
              value={<ScrollCounter end={25000} suffix="+" className="text-4xl font-bold" />}
              label="Projects Showcased"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  value: React.ReactNode
  label: string
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm h-full">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">{icon}</div>
      <div className="mt-2">{value}</div>
      <p className="mt-1 text-muted-foreground">{label}</p>
    </div>
  )
}
