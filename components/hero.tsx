"use client"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import ParallaxElement from "@/components/parallax-element"
import AnimatedSection from "@/components/animated-section"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { useState, useEffect } from "react"

export default function Hero() {
  const isMobile = useIsMobile()
  const [isLoading, setIsLoading] = useState(true)
  const [responseText, setResponseText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  const fullResponse = `{
  "projects": [
    {
      "name": "awesome-project",
      "description": "A revolutionary dev tool",
      "stars": 128,
      "language": "TypeScript",
      "lastUpdated": "2023-04-15T10:30:00Z",
      "portfolio": {
        "featured": true,
        "category": "Developer Tools",
        "demo": "https://demo.example.com"
      }
    },
    {
      "name": "another-cool-repo",
      "description": "Simplify your workflow",
      "stars": 84,
      "language": "JavaScript",
      "lastUpdated": "2023-03-22T14:15:00Z",
      "portfolio": {
        "featured": false,
        "category": "Utilities",
        "demo": null
      }
    }
  ]
}`

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Simulate loading and then typing the response
  useEffect(() => {
    // Initial loading delay
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)

      // Start typing effect after loading
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullResponse.length) {
          setResponseText(fullResponse.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, 15) // Adjust speed as needed

      return () => clearInterval(typingInterval)
    }, 2000) // Loading time

    return () => clearTimeout(loadingTimer)
  }, [])

  // Loading animation component
  const LoadingAnimation = () => (
    <div className="flex flex-col space-y-3">
      <div className="h-4 bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-1/2 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-5/6 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-2/3 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-1/2 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-2/3 animate-pulse"></div>
    </div>
  )

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background via-primary/5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection delay={isMobile ? 0 : 200}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
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
              <Link href="/waitlist">
                <Button size="lg" className="w-full sm:w-auto bg-black hover:bg-black/90 text-white">
                  Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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
            <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-lg">
              {/* Browser Chrome */}
              <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2">
                {/* Browser Tabs */}
                <div className="flex items-center">
                  <div className="flex items-center bg-white dark:bg-gray-900 rounded-t-lg border-b-0 border border-gray-200 dark:border-gray-700 px-4 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    api.gitsink.dev
                  </div>
                  <div className="ml-2 flex items-center bg-gray-200 dark:bg-gray-700 rounded-t-lg px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 opacity-80">
                    Documentation
                  </div>
                </div>

                {/* URL Bar */}
                <div className="mt-2 flex items-center bg-white dark:bg-gray-900 rounded-md px-3 py-1.5 text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex items-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-green-500 mr-1"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-mono truncate">https://api.gitsink.dev/user/projects</span>
                </div>
              </div>

              {/* Browser Content */}
              <div className="bg-white dark:bg-gray-900">
                {/* API Response Tab UI */}
                <div className="flex border-b border-gray-200 dark:border-gray-700 px-4 pt-3 text-sm">
                  <div className="border-b-2 border-primary pb-2 px-2 text-primary font-medium">Response</div>
                  <div className="pb-2 px-2 text-gray-500 dark:text-gray-400">Headers</div>
                  <div className="pb-2 px-2 text-gray-500 dark:text-gray-400">Curl</div>
                </div>

                {/* JSON Response with Loading Animation */}
                <div className="bg-zinc-900 p-4 font-mono text-sm overflow-x-auto min-h-[200px]">
                  {isLoading ? (
                    <LoadingAnimation />
                  ) : (
                    <pre className="text-blue-400">
                      {responseText}
                      {cursorVisible && <span className="inline-block w-2 h-4 bg-blue-400 ml-0.5 animate-pulse"></span>}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ParallaxElement speed={0.05} direction="up" className="mt-10 md:mt-16 flex justify-center px-4 md:px-0">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-lg">
              {/* Browser Chrome */}
              <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2">
                {/* Browser Tabs */}
                <div className="flex items-center">
                  <div className="flex items-center bg-white dark:bg-gray-900 rounded-t-lg border-b-0 border border-gray-200 dark:border-gray-700 px-4 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    api.gitsink.dev
                  </div>
                  <div className="ml-2 flex items-center bg-gray-200 dark:bg-gray-700 rounded-t-lg px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 opacity-80">
                    Documentation
                  </div>
                </div>

                {/* URL Bar */}
                <div className="mt-2 flex items-center bg-white dark:bg-gray-900 rounded-md px-3 py-1.5 text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex items-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-green-500 mr-1"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-mono truncate">https://api.gitsink.dev/user/projects</span>
                </div>
              </div>

              {/* Browser Content */}
              <div className="bg-white dark:bg-gray-900">
                {/* API Response Tab UI */}
                <div className="flex border-b border-gray-200 dark:border-gray-700 px-4 pt-3 text-sm">
                  <div className="border-b-2 border-primary pb-2 px-2 text-primary font-medium">Response</div>
                  <div className="pb-2 px-2 text-gray-500 dark:text-gray-400">Headers</div>
                  <div className="pb-2 px-2 text-gray-500 dark:text-gray-400">Curl</div>
                </div>

                {/* JSON Response with Loading Animation */}
                <div className="bg-zinc-900 p-4 font-mono text-sm overflow-x-auto min-h-[200px]">
                  {isLoading ? (
                    <LoadingAnimation />
                  ) : (
                    <pre className="text-blue-400">
                      {responseText}
                      {cursorVisible && <span className="inline-block w-2 h-4 bg-blue-400 ml-0.5 animate-pulse"></span>}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </ParallaxElement>
        )}
      </AnimatedSection>
    </section>
  )
}
