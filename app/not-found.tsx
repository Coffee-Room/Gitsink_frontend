import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md px-4 py-16 sm:py-24 md:py-32 text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Search className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold tracking-tight sm:text-3xl mb-6">Page Not Found</h2>
          <p className="mb-8 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/#how-it-works">Learn How It Works</Link>
            </Button>
          </div>
          <div className="mt-12">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/gitsink-logo-icon.png"
                alt="Gitsink Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-heading font-bold tracking-tight logo-text">Gitsink</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
