import type React from "react"
import type { Metadata } from "next"
import { LoadingProvider } from "@/contexts/loading-context"
import ClientLayout from "./client-layout"
import "./globals.css"

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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <LoadingProvider>
          <ClientLayout>{children}</ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  )
}
