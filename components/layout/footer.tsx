import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
              <Image
                src="/images/gitsink-logo-icon.png"
                alt="Gitsink Logo"
                width={32}
                height={32}
                className="h-7 w-auto"
              />
              <span className="text-lg font-bold tracking-tight logo-text">Gitsink</span>
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">Made by developers for developers.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="/status"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
            >
              Status
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
            <Link
              href="/policies"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
            >
              Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
