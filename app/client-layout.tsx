"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/layout/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { Toaster } from "@/components/ui/toaster"
import { Space_Grotesk, DM_Sans } from "next/font/google"

// Define fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
        {children}
        <Footer />
        <CookieConsent />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
