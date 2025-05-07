import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { LoadingProvider } from "@/contexts/loading-context"
import ClientLayout from "./client-layout"
import "./globals.css"

// Define the fonts with proper subsets and weights
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gitsink - Version Control for Your Data",
  description:
    "Gitsink provides Git-like version control for your data, making it easy to track changes, collaborate, and roll back when needed.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <LoadingProvider>
          <ClientLayout>{children}</ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  )
}
