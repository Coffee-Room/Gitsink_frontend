import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/layout/mobile-menu"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <div className="flex justify-start">
          <Link href="/" className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
            <Image
              src="/images/gitsink-logo-icon.png"
              alt="Gitsink Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold tracking-tight hidden sm:block">Gitsink</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
          >
            How It Works
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
          >
            Features
          </Link>
          <Link
            href="/developer"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
          >
            Developers
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
          >
            FAQ
          </Link>
          <Link
            href="/status"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
          >
            Status
          </Link>
        </nav>

        <div className="flex items-center justify-end space-x-2">
          <ThemeToggle />
          <Link href="/waitlist" className="hidden md:inline-flex">
            <Button className="bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-white transition-all duration-200 hover:scale-105">
              Join Waitlist
            </Button>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
