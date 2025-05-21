"use client"

import { useState, useEffect } from "react"

export default function FaqHero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about Gitsink and how it can help you showcase your projects.
        </p>

        {isMounted && (
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#faq-list"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#faq-list")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Browse Questions
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
