import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import ClientLayout from "./client-layout"
import { createSafeUrl } from "@/lib/url-utils"

const inter = Inter({ subsets: ["latin"] })

// Get base URL for metadata
function getBaseUrl() {
  // Use the public environment variables
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }
  // Fallback to hardcoded domain
  return "https://www.gitsink.tech"
}

export const metadata: Metadata = {
  title: {
    default: "Gitsink - Showcase Your GitHub Projects",
    template: "%s | Gitsink",
  },
  description: "Gitsink helps developers turn their repos into a beautiful, structured API.",
  metadataBase: createSafeUrl(getBaseUrl()),
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientLayout>
            {children}
            <Toaster />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
