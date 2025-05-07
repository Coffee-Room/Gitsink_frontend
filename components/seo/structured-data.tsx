"use client"

import { getAbsoluteUrl } from "@/lib/url-utils"

export interface StructuredDataProps {
  type: "website" | "article" | "faq" | "product"
  data: any
}

// Add named export for the StructuredData component
export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData = {}

  switch (type) {
    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: data.url || getAbsoluteUrl(""),
        name: data.name || "Gitsink - Showcase Your GitHub Projects",
        description: data.description || "Gitsink provides an API for showcasing GitHub projects.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${data.url || getAbsoluteUrl("")}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }
      break

    case "article":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.headline,
        image: data.image ? getAbsoluteUrl(data.image) : getAbsoluteUrl("images/gitsink-social-card.png"),
        author: {
          "@type": "Person",
          name: data.author,
        },
        publisher: {
          "@type": "Organization",
          name: data.publisher || "Gitsink",
          logo: {
            "@type": "ImageObject",
            url: data.publisherLogo
              ? getAbsoluteUrl(data.publisherLogo)
              : getAbsoluteUrl("images/gitsink-logo-icon.png"),
          },
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        description: data.description || "Gitsink transforms your GitHub projects into a versatile API.",
      }
      break

    case "faq":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.questions.map((q: any) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      }
      break

    case "product":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: data.name || "Gitsink API",
        image: data.image ? getAbsoluteUrl(data.image) : getAbsoluteUrl("images/gitsink-social-card.png"),
        description: data.description || "A powerful API for showcasing GitHub projects.",
        brand: {
          "@type": "Brand",
          name: data.brand || "Gitsink",
        },
        offers: {
          "@type": "Offer",
          price: data.price || "Free for early users",
          priceCurrency: data.currency || "USD",
          availability: data.availability || "https://schema.org/InStock",
          url: data.url || getAbsoluteUrl(""),
        },
      }
      break
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

// Keep default export for backward compatibility
export default StructuredData
