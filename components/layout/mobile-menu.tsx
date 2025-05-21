"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        aria-label="Toggle Menu"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background">
          <nav className="container flex flex-col space-y-4 px-4 py-8">
            <Link
              href="/"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              How It Works
            </Link>
            <Link
              href="/features"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Features
            </Link>
            <Link
              href="/developer"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Developers
            </Link>
            <Link
              href="/faq"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <Link
              href="/status"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Status
            </Link>
            <Link
              href="/waitlist"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
