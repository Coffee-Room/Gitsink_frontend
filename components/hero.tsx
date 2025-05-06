"use client"

import Image from "next/image"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import ParallaxElement from "@/components/parallax-element"
import AnimatedSection from "@/components/animated-section"
import { useIsMobile } from "@/hooks/use-is-mobile"

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background via-primary/5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection delay={isMobile ? 0 : 200}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {isMobile ? (
                <>
                  Showcase Your GitHub Projects — <span className="text-primary">Instantly</span>.
                </>
              ) : (
                <>
                  <AnimatedText text="Showcase Your GitHub Projects —" speed={30} />{" "}
                  <span className="text-primary">
                    <AnimatedText text="Instantly" speed={50} delay={1500} />
                  </span>
                  .
                </>
              )}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={isMobile ? 100 : 800}>
            <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-muted-foreground">
              Gitsink helps developers turn their repos into a beautiful, structured API. Powered by your code, enriched
              with one file.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={isMobile ? 200 : 1200}>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-black hover:bg-black/90 text-white">
                Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection delay={isMobile ? 300 : 1600}>
        {isMobile ? (
          <div className="mt-10 md:mt-16 flex justify-center px-4 md:px-0">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-md">
              <Image
                src="/placeholder.svg?key=vp7f2"
                width={1200}
                height={600}
                alt="Gitsink API visualization"
                className="w-full object-cover"
              />
            </div>
          </div>
        ) : (
          <ParallaxElement speed={0.05} direction="up" className="mt-10 md:mt-16 flex justify-center px-4 md:px-0">
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
        )}
      </AnimatedSection>
    </section>
  )
}
