"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Twitter, Github, RefreshCw } from "lucide-react"

export default function MaintenanceContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-2xl px-4 py-16 sm:py-24 md:py-32 text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Clock className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="mb-8">
            <Link href="/" className="inline-flex items-center">
              <Image src="/images/gitsink-icon.svg" alt="Gitsink Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="ml-2 text-2xl font-heading font-bold tracking-tight logo-text">Gitsink</span>
            </Link>
          </div>

          <h1 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            We're Currently Under Maintenance
          </h1>

          <p className="mb-4 text-lg text-muted-foreground">
            We're making some improvements to Gitsink to serve you better. We'll be back online shortly.
          </p>

          <p className="mb-8 text-muted-foreground">
            Our team is working hard to complete the maintenance as quickly as possible. Thank you for your patience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={() => window.location.reload()}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Check Again
            </Button>
            <Button variant="outline" asChild>
              <a href="https://twitter.com/gitsink" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                Follow for Updates
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/gitsink/gitsink" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-xl font-heading font-semibold mb-4">What's Happening?</h2>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">System Upgrades</h3>
                <p className="text-sm text-muted-foreground">
                  We're upgrading our infrastructure to improve performance and reliability.
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">New Features</h3>
                <p className="text-sm text-muted-foreground">We're deploying exciting new features that you'll love.</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Security Updates</h3>
                <p className="text-sm text-muted-foreground">
                  We're enhancing our security measures to keep your data safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gitsink. All rights reserved.</p>
          <p className="mt-2">
            Expected completion: <span className="font-medium text-foreground">Today at 6:00 PM UTC</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
