import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FaqCta() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-lg bg-primary/5 p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl">Still have questions?</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Contact our support team for more information or join our waitlist to stay updated.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/waitlist">
              <Button size="lg">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
