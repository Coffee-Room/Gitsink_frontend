"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Bell, RefreshCw } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface StatusHeaderProps {
  lastUpdated: string
}

export default function StatusHeader({ lastUpdated }: StatusHeaderProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshStatus = async () => {
    setIsRefreshing(true)
    // In a real app, this would fetch the latest status
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  return (
    <header className="bg-background border-b">
      <div className="container py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center">
              <Image src="/images/gitsink-icon.svg" alt="Gitsink Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="ml-2 text-xl font-heading font-bold tracking-tight logo-text">Gitsink</span>
            </Link>
            <h1 className="text-xl font-heading font-bold">Status</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Last updated: {formatDistanceToNow(new Date(lastUpdated), { addSuffix: true })}
            </p>
            <Button size="sm" variant="outline" onClick={refreshStatus} disabled={isRefreshing}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button size="sm" variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
