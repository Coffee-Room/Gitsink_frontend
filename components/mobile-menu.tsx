"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="font-bold text-lg">Menu</div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-6 mt-8">
            <Link
              href="#how-it-works"
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={handleLinkClick}
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={handleLinkClick}
            >
              Features
            </Link>
            <Link
              href="#api"
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={handleLinkClick}
            >
              API
            </Link>
            <Link
              href="#faq"
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
          </nav>
          <div className="mt-auto pt-6 border-t">
            <Button className="w-full" onClick={() => setOpen(false)}>
              Join Waitlist
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
