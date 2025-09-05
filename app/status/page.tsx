import type { Metadata } from "next"
import StatusPageClient from "./status-page-client"

export const metadata: Metadata = {
  title: "System Status - Gitsink",
  description: "Current operational status and uptime information for Gitsink services",
}

export default async function StatusPage() {
  return <StatusPageClient />
}
