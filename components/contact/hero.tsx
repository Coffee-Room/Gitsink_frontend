"use client"

import { Mail } from "lucide-react"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      <div className="absolute inset-0 bg-[url('/abstract-dots-pattern.png')] bg-repeat opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <CoordinatedAnimation type="fade">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg">
                <Mail className="h-10 w-10 text-primary" />
              </div>
            </div>
          </CoordinatedAnimation>

          <CoordinatedAnimation type="fade" delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Get in Touch
            </h1>
          </CoordinatedAnimation>

          <CoordinatedAnimation delay={400} type="fade">
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions, feedback, or interested in partnering with us? We'd love to hear from you.
            </p>
          </CoordinatedAnimation>
        </div>
      </div>
    </section>
  )
}
