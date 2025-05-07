"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/animations/scroll-reveal"
import Link from "next/link"

export default function Cta() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <ScrollReveal animation="fade">
          <div className="mx-auto max-w-3xl rounded-lg bg-primary/5 p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to showcase your GitHub projects?
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Join the waitlist today and be among the first to access Gitsink.
            </p>
            <div className="mt-6 md:mt-8">
              <Link href="/waitlist">
                <Button size="lg">
                  Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
