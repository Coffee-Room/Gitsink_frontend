import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap | Gitsink",
  description: "A complete map of all pages on the Gitsink website.",
}

export default function SitemapPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
          <ul className="grid gap-2">
            <li>
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
              <p className="text-sm text-muted-foreground mt-1">The main landing page with an overview of Gitsink.</p>
            </li>
            <li>
              <Link href="/features" className="text-primary hover:underline">
                Features
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Detailed information about Gitsink's features and capabilities.
              </p>
            </li>
            <li>
              <Link href="/how-it-works" className="text-primary hover:underline">
                How It Works
              </Link>
              <p className="text-sm text-muted-foreground mt-1">Step-by-step explanation of how Gitsink works.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Support & Information</h2>
          <ul className="grid gap-2">
            <li>
              <Link href="/faq" className="text-primary hover:underline">
                FAQ
              </Link>
              <p className="text-sm text-muted-foreground mt-1">Frequently asked questions about Gitsink.</p>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">
                Contact
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Contact information and form to get in touch with the Gitsink team.
              </p>
            </li>
            <li>
              <Link href="/policies" className="text-primary hover:underline">
                Policies
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Privacy policy, terms of service, and other legal information.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Other Pages</h2>
          <ul className="grid gap-2">
            <li>
              <Link href="/waitlist" className="text-primary hover:underline">
                Waitlist
              </Link>
              <p className="text-sm text-muted-foreground mt-1">Join the waitlist for early access to Gitsink.</p>
            </li>
            <li>
              <Link href="/status" className="text-primary hover:underline">
                Status
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Current status of Gitsink services and past incidents.
              </p>
            </li>
            <li>
              <Link href="/sitemap" className="text-primary hover:underline">
                Sitemap
              </Link>
              <p className="text-sm text-muted-foreground mt-1">This page - a complete map of the Gitsink website.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
