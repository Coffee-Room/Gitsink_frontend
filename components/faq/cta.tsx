"use client"

export default function FaqCta() {
  return (
    <section className="py-16 bg-muted">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Still have questions?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          We're here to help. Reach out to our team for personalized assistance with your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact Support
          </a>
          <a
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}
