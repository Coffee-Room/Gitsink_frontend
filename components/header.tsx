import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <div className="flex justify-start">
          <Link href="/" className="inline-flex items-center">
            <div className="flex items-center">
              <Image
                src="/images/gitsink-icon.svg"
                alt="Gitsink Logo"
                width={40}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
              <span className="ml-2 text-xl md:text-2xl font-heading font-bold tracking-tight logo-text">Gitsink</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#api"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            API
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex justify-end">
          <Button className="hidden md:inline-flex bg-black hover:bg-black/90 text-white">Join Waitlist</Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
