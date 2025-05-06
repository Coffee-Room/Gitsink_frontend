"use client"

import Image from "next/image"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import ParallaxElement from "@/components/parallax-element"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background via-primary/5"></div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <AnimatedText text="Showcase Your GitHub Projects —" speed={30} />{" "}
            <span className="text-primary">
              <AnimatedText text="Instantly" speed={50} delay={1500} />
            </span>
            .
          </h1>

          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Gitsink helps developers turn their repos into a beautiful, structured API. Powered by your code, enriched
            with one file.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Github className="mr-2 h-4 w-4" /> View on GitHub
            </Button>
          </div>
        </div>
      </div>

      <ParallaxElement speed={0.05} direction="up" className="mt-16 flex justify-center">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-md">
          <Image
            src="/placeholder.svg?key=vp7f2"
            width={1200}
            height={600}
            alt="Gitsink API visualization"
            className="w-full object-cover"
          />
        </div>
      </ParallaxElement>
    </section>
  )
}
