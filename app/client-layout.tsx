"use client"

import type React from "react"

import { useEffect } from "react"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { LoadingProvider } from "@/contexts/loading-context"
import { GlobalLoading } from "@/components/ui/global-loading"
import { GlobalErrorHandler } from "@/components/error-handling/global-error-handler"
import { preloadCriticalResources, deferNonCriticalResources, optimizeThemeSwitching } from "@/lib/performance"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Optimize resource loading and performance
    preloadCriticalResources()
    deferNonCriticalResources()
    optimizeThemeSwitching()

    // Add class to body when JS is loaded
    document.body.classList.add("js-loaded")
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="gitsink-theme"
          disableTransitionOnChange={false}
        >
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  const savedTheme = localStorage.getItem('gitsink-theme');
                  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              `,
            }}
          />
          <GlobalErrorHandler />
          <LoadingProvider>
            <GlobalLoading />
            {children}
          </LoadingProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
