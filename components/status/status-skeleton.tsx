import { LoadingSkeleton } from "@/components/ui/loading-skeleton"

export function StatusOverviewSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-3 border-b mb-4">
        <div>
          <LoadingSkeleton height="1.5rem" width="150px" className="mb-2" />
          <LoadingSkeleton height="1rem" width="250px" />
        </div>
        <LoadingSkeleton height="2rem" width="120px" />
      </div>
      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
            <div className="space-y-2">
              <LoadingSkeleton height="1.25rem" width="150px" />
              <LoadingSkeleton height="0.875rem" width="200px" />
            </div>
            <LoadingSkeleton height="1.5rem" width="100px" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function UptimeGraphSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <LoadingSkeleton height="1.5rem" width="200px" />
          <LoadingSkeleton height="1rem" width="300px" />
        </div>
        <div className="flex gap-2 mb-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <LoadingSkeleton key={i} height="2rem" width="80px" />
          ))}
        </div>
        <div className="space-y-6 pt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-center">
                <LoadingSkeleton height="1rem" width="150px" />
                <LoadingSkeleton height="1rem" width="50px" />
              </div>
              <LoadingSkeleton height="0.5rem" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function IncidentHistorySkeleton() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <LoadingSkeleton height="1.5rem" width="200px" />
          <LoadingSkeleton height="1rem" width="300px" />
        </div>
        <div className="space-y-8 pt-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div className="space-y-2">
                  <LoadingSkeleton height="1.25rem" width="250px" />
                  <LoadingSkeleton height="0.875rem" width="200px" />
                </div>
                <div className="flex gap-2">
                  <LoadingSkeleton height="1.5rem" width="80px" />
                  <LoadingSkeleton height="1.5rem" width="80px" />
                </div>
              </div>
              <div className="space-y-4 mt-4">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="border-l-2 border-muted pl-4 py-1">
                    <LoadingSkeleton height="1rem" width="150px" className="mb-2" />
                    <LoadingSkeleton height="0.875rem" width="100%" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MaintenanceScheduleSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <LoadingSkeleton height="1.5rem" width="200px" />
          <LoadingSkeleton height="1rem" width="300px" />
        </div>
        <div className="space-y-6 pt-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div className="space-y-2">
                  <LoadingSkeleton height="1.25rem" width="250px" />
                  <LoadingSkeleton height="0.875rem" width="200px" />
                </div>
                <LoadingSkeleton height="1.5rem" width="100px" />
              </div>
              <LoadingSkeleton height="0.875rem" width="100%" className="mt-2" />
              <LoadingSkeleton height="0.875rem" width="90%" className="mt-1" />
              <LoadingSkeleton height="0.875rem" width="95%" className="mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
