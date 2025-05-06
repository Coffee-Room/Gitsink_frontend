import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between py-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/gitsink-logo-wordmark.png"
              alt="Gitsink Logo"
              width={220}
              height={55}
              className="h-12 sm:h-14 w-auto"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
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
        <div className="flex items-center gap-2">
          <Button className="hidden md:inline-flex bg-black hover:bg-black/90 text-white">Join Waitlist</Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
