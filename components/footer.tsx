import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/gitsink-logo-wordmark.png"
                alt="Gitsink Logo"
                width={120}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">Made by developers for developers.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
