import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ShareButtons from "@/components/social/share-buttons"

export default function Cta() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Showcase Your Projects?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Join the waitlist today and be among the first to experience Gitsink.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link href="/waitlist">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-border w-full max-w-md">
            <p className="text-sm text-muted-foreground mb-4">Spread the word about Gitsink</p>
            <ShareButtons />
          </div>
        </div>
      </div>
    </section>
  )
}
