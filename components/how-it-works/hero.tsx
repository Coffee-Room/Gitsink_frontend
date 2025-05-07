"use client"

import { useEffect, useState, useRef } from "react"
import { Github, GitGraphIcon as GraphQl, Server } from "lucide-react"

export default function HowItWorksHero() {
  // State to control the flow animation
  const [animationStep, setAnimationStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Animate the flow from GitHub to Gitsink to API
  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationStep < 2) {
        setAnimationStep(animationStep + 1)
      } else {
        // Reset animation after a pause
        const resetTimer = setTimeout(() => {
          setAnimationStep(0)
        }, 2000)
        return () => clearTimeout(resetTimer)
      }
    }, 1800) // Slightly longer delay for better comprehension on mobile

    return () => clearTimeout(timer)
  }, [animationStep])

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      <div className="absolute inset-0 bg-[url('/abstract-dots-pattern.png')] bg-repeat opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            }`}
          >
            How Gitsink Works
          </h1>

          <p
            className={`mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            }`}
          >
            Easily showcase your GitHub projects through powerful GraphQL and REST APIs.
          </p>

          <div
            className={`mt-12 md:mt-16 flex justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative flex items-center justify-center">
              <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-20">
                {/* GitHub Icon */}
                <div className="flex flex-col items-center">
                  <div
                    className={`h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/10 transition-all duration-500 ${
                      animationStep === 0 ? "scale-110 bg-primary/20" : ""
                    }`}
                  >
                    <Github
                      className={`h-10 w-10 text-primary transition-all duration-500 ${
                        animationStep === 0 ? "scale-110" : ""
                      }`}
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium">GitHub</span>
                </div>

                {/* Arrow 1 and Gitsink Icon */}
                <div className="flex flex-col items-center relative">
                  {/* Animated connecting line */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 -left-12 md:-left-16 h-[3px] bg-gradient-to-r from-primary/10 to-primary/40 transition-all duration-500 ${
                      animationStep === 0 ? "w-12 md:w-16 opacity-100" : "w-0 opacity-40"
                    }`}
                  ></div>

                  {/* Animated arrowhead */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 -left-5 md:-left-7 transform rotate-45 w-3 h-[3px] bg-primary/40 transition-all duration-500 ${
                      animationStep === 0 ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 -left-5 md:-left-7 transform -rotate-45 w-3 h-[3px] bg-primary/40 transition-all duration-500 ${
                      animationStep === 0 ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>

                  <div
                    className={`h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/10 transition-all duration-500 ${
                      animationStep === 1 ? "scale-110 bg-primary/20" : ""
                    }`}
                  >
                    <Server
                      className={`h-10 w-10 text-primary transition-all duration-500 ${
                        animationStep === 1 ? "scale-110" : ""
                      }`}
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium">Gitsink</span>
                </div>

                {/* Arrow 2 and API Icon */}
                <div className="flex flex-col items-center relative">
                  {/* Animated connecting line */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 -left-12 md:-left-16 h-[3px] bg-gradient-to-r from-primary/10 to-primary/40 transition-all duration-500 ${
                      animationStep === 1 ? "w-12 md:w-16 opacity-100" : "w-0 opacity-40"
                    }`}
                  ></div>

                  {/* Animated arrowhead */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 -left-5 md:-left-7 transform rotate-45 w-3 h-[3px] bg-primary/40 transition-all duration-500 ${
                      animationStep === 1 ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 -left-5 md:-left-7 transform -rotate-45 w-3 h-[3px] bg-primary/40 transition-all duration-500 ${
                      animationStep === 1 ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>

                  <div
                    className={`h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/10 transition-all duration-500 ${
                      animationStep === 2 ? "scale-110 bg-primary/20" : ""
                    }`}
                  >
                    <GraphQl
                      className={`h-10 w-10 text-primary transition-all duration-500 ${
                        animationStep === 2 ? "scale-110" : ""
                      }`}
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium">APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
