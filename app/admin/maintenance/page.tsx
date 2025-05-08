"use client"
import { Suspense } from "react"
import MaintenanceAdminContent from "./maintenance-admin-content"

export default function MaintenanceAdminPage() {
  return (
    <Suspense fallback={<div className="container py-10">Loading maintenance settings...</div>}>
      <MaintenanceAdminContent />
    </Suspense>
  )
}
