import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-sm"></div>
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-background p-2 ring-1 ring-border/50">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/images/gitsink-logo-icon.png"
            alt="Gitsink Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </Link>
      </div>
    </div>
  )
}
