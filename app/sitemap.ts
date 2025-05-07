import type { MetadataRoute } from "next"
import { getAbsoluteUrl } from "@/lib/url-utils"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/features",
    "/how-it-works",
    "/faq",
    "/contact",
    "/waitlist",
    "/policies",
    "/status",
    "/sitemap",
  ].map((route) => ({
    url: getAbsoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}
