import Link from "next/link"
import { Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Gitsink</span>
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
          <Button className="hidden md:inline-flex">Join Waitlist</Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
