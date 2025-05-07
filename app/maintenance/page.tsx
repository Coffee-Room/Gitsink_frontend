import { Suspense, lazy } from "react"
import { SectionSkeleton } from "@/components/ui/loading-skeleton"

const MaintenanceContent = lazy(() => import("@/components/maintenance/maintenance-content"))

export default function MaintenancePage() {
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <MaintenanceContent />
    </Suspense>
  )
}
