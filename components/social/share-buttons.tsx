"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, Link, Share } from "lucide-react"
import { getAbsoluteUrl } from "@/lib/url-utils"
import { trackEvent, EventName, EventCategory } from "@/lib/analytics"

interface ShareButtonsProps {
  title?: string
  description?: string
  hashtags?: string[]
  className?: string
}

export default function ShareButtons({
  title = "Showcase Your GitHub Projects with Gitsink",
  description = "Check out Gitsink - a tool that transforms GitHub projects into a versatile API",
  hashtags = ["GitHub", "API", "DevTools"],
  className = "",
}: ShareButtonsProps) {
  const pathname = usePathname()
  const [copied, setCopied] = useState(false)

  // Safely construct the URL
  const url = getAbsoluteUrl(pathname || "")
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const encodedHashtags = hashtags.join(",")

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    }
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          trackEvent(EventName.LINK_CLICK, EventCategory.ENGAGEMENT, {
            action: "share",
            platform: "twitter",
            url: twitterUrl,
          })
          window.open(twitterUrl, "_blank")
        }}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4 mr-2" />
        Twitter
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          trackEvent(EventName.LINK_CLICK, EventCategory.ENGAGEMENT, {
            action: "share",
            platform: "facebook",
            url: facebookUrl,
          })
          window.open(facebookUrl, "_blank")
        }}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4 mr-2" />
        Facebook
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          trackEvent(EventName.LINK_CLICK, EventCategory.ENGAGEMENT, {
            action: "share",
            platform: "linkedin",
            url: linkedinUrl,
          })
          window.open(linkedinUrl, "_blank")
        }}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4 mr-2" />
        LinkedIn
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          trackEvent(EventName.LINK_CLICK, EventCategory.ENGAGEMENT, {
            action: "copy_link",
            url,
          })
          copyToClipboard()
        }}
        aria-label="Copy link"
      >
        <Link className="h-4 w-4 mr-2" />
        {copied ? "Copied!" : "Copy Link"}
      </Button>

      {navigator.share && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            trackEvent(EventName.LINK_CLICK, EventCategory.ENGAGEMENT, {
              action: "native_share",
              url,
            })
            nativeShare()
          }}
          aria-label="Native share"
        >
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
      )}
    </div>
  )
}
