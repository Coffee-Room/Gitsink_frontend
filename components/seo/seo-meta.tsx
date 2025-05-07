"use client"

import type React from "react"
import Head from "next/head"
import { usePathname } from "next/navigation"
import { getAbsoluteUrl } from "@/lib/url-utils"

interface SeoMetaProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noIndex?: boolean
  children?: React.ReactNode
}

export function SeoMeta({
  title = "Gitsink - Showcase Your GitHub Projects Instantly",
  description = "Gitsink transforms your GitHub projects into a versatile API for websites, bots, and social media.",
  keywords = "GitHub, API, Project Showcase, GraphQL, REST, Portfolio",
  ogImage = "/images/gitsink-social-card.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  children,
}: SeoMetaProps) {
  const pathname = usePathname()

  // Safely construct URLs
  const canonicalUrl = getAbsoluteUrl(pathname || "")
  const ogImageUrl = getAbsoluteUrl(ogImage)

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Tags */}
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content="Gitsink" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={canonicalUrl} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:site" content="@gitsink" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* No Index if specified */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      {children}
    </>
  )
}
