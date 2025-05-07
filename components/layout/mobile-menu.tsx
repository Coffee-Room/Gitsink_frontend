"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <Link href="/" className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
              <Image
                src="/images/gitsink-logo-icon.png"
                alt="Gitsink Logo"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
              <span className="text-xl font-bold tracking-tight">Gitsink</span>
            </Link>
            <div className="flex items-center space-x-1">
              <ThemeToggle />
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          <nav className="flex flex-col gap-6 mt-8">
            <Link
              href="#how-it-works"
              className="text-lg font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:translate-x-1"
              onClick={handleLinkClick}
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-lg font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:translate-x-1"
              onClick={handleLinkClick}
            >
              Features
            </Link>
            <Link
              href="#api"
              className="text-lg font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:translate-x-1"
              onClick={handleLinkClick}
            >
              API
            </Link>
            <Link
              href="#faq"
              className="text-lg font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:translate-x-1"
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
            <Link
              href="/status"
              className="text-lg font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:translate-x-1"
              onClick={handleLinkClick}
            >
              Status
            </Link>
          </nav>
          <div className="mt-auto pt-6 border-t">
            <Button
              className="w-full bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-white transition-all duration-200 hover:scale-105"
              onClick={() => setOpen(false)}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
