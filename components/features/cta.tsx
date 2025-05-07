import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturesCta() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Ready to transform your GitHub portfolio?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Join our waitlist today and be the first to showcase your projects with Gitsink.
        </p>
        <Link href="/waitlist">
          <Button
            size="lg"
            className="bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-white"
          >
            Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
