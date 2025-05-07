import { NextResponse } from "next/server"
import { getMaintenanceDetails } from "@/lib/maintenance"
import { getSystemStatus } from "@/lib/status"

export async function GET() {
  const maintenance = getMaintenanceDetails()
  const status = await getSystemStatus()

  return NextResponse.json({
    status: maintenance.isActive ? "maintenance" : status.status,
    maintenance,
    services: status.services,
    lastUpdated: status.lastUpdated,
    timestamp: new Date().toISOString(),
  })
}
