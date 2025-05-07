"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/layout/mobile-menu"
import { ThemeToggleWithErrorBoundary } from "@/components/ui/theme-toggle-with-error-boundary"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/gitsink-logo-icon.png" alt="Gitsink Logo" width={32} height={32} className="w-8 h-8" />
            <Image
              src="/images/gitsink-logo-wordmark.png"
              alt="Gitsink"
              width={100}
              height={24}
              className="hidden sm:block h-6 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/features"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/features") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/how-it-works") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              How It Works
            </Link>
            <Link
              href="/faq"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/faq") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/policies"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/policies") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Policies
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggleWithErrorBoundary />
            <Link href="/waitlist">
              <Button
                className="bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-white"
                size="sm"
              >
                Join Waitlist
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggleWithErrorBoundary />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
