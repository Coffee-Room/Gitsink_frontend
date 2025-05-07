import { cn } from "@/lib/utils"

interface LoadingSkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  rounded?: string
  animate?: boolean
}

export function LoadingSkeleton({
  className,
  height = "1rem",
  width = "100%",
  rounded = "md",
  animate = true,
}: LoadingSkeletonProps) {
  return (
    <div
      className={cn("bg-muted/60", animate && "animate-pulse", `rounded-${rounded}`, className)}
      style={{
        height: typeof height === "number" ? `${height}px` : height,
        width: typeof width === "number" ? `${width}px` : width,
      }}
      aria-hidden="true"
    />
  )
}

export function TextSkeleton({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <LoadingSkeleton key={i} height="1rem" width={i === lines - 1 && lines > 1 ? "75%" : "100%"} />
      ))}
    </div>
  )
}

export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn("rounded-lg border bg-card p-4", className)}>
      <div className="space-y-4">
        <LoadingSkeleton height="2rem" width="60%" />
        <TextSkeleton lines={3} />
      </div>
    </div>
  )
}

export function SectionSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn("py-12 md:py-20", className)}>
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex justify-center">
            <LoadingSkeleton height="2.5rem" width="50%" className="mx-auto" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton className="sm:col-span-2 md:col-span-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function HowItWorksSkeleton() {
  return (
    <div className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex justify-center">
            <LoadingSkeleton height="2.5rem" width="50%" className="mx-auto" />
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="border-none shadow-lg bg-background h-full rounded-lg p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LoadingSkeleton height="24px" width="24px" rounded="full" />
              </div>
              <LoadingSkeleton height="1.5rem" width="80%" className="mb-2" />
              <LoadingSkeleton height="1rem" width="100%" />
              <LoadingSkeleton height="1rem" width="90%" className="mt-1" />
            </div>
            <div className="border-none shadow-lg bg-background h-full rounded-lg p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LoadingSkeleton height="24px" width="24px" rounded="full" />
              </div>
              <LoadingSkeleton height="1.5rem" width="80%" className="mb-2" />
              <LoadingSkeleton height="1rem" width="100%" />
              <LoadingSkeleton height="1rem" width="90%" className="mt-1" />
            </div>
            <div className="border-none shadow-lg bg-background h-full rounded-lg p-6 sm:col-span-2 md:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LoadingSkeleton height="24px" width="24px" rounded="full" />
              </div>
              <LoadingSkeleton height="1.5rem" width="80%" className="mb-2" />
              <LoadingSkeleton height="1rem" width="100%" />
              <LoadingSkeleton height="1rem" width="90%" className="mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturesSkeleton() {
  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex justify-center">
            <LoadingSkeleton height="2.5rem" width="30%" className="mx-auto" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <LoadingSkeleton height="32px" width="32px" rounded="full" />
              </div>
              <LoadingSkeleton height="1.5rem" width="60%" className="mb-2" />
              <LoadingSkeleton height="1rem" width="100%" />
              <LoadingSkeleton height="1rem" width="90%" className="mt-1" />
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <LoadingSkeleton height="32px" width="32px" rounded="full" />
              </div>
              <LoadingSkeleton height="1.5rem" width="60%" className="mb-2" />
              <LoadingSkeleton height="1rem" width="100%" />
              <LoadingSkeleton height="1rem" width="90%" className="mt-1" />
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:col-span-2 md:col-span-1">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <LoadingSkeleton height="32px" width="32px" rounded="full" />
              </div>
              <LoadingSkeleton height="1.5rem" width="60%" className="mb-2" />
              <LoadingSkeleton height="1rem" width="100%" />
              <LoadingSkeleton height="1rem" width="90%" className="mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ApiExampleSkeleton() {
  return (
    <div className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex justify-center">
            <LoadingSkeleton height="2.5rem" width="40%" className="mx-auto" />
          </div>
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-zinc-900 p-4 md:p-6 shadow-lg overflow-x-auto min-h-[200px]">
              <LoadingSkeleton height="1rem" width="100%" className="bg-gray-700" />
              <LoadingSkeleton height="1rem" width="90%" className="bg-gray-700 mt-2" />
              <LoadingSkeleton height="1rem" width="95%" className="bg-gray-700 mt-2" />
            </div>
            <div className="rounded-lg bg-zinc-900 p-4 md:p-6 shadow-lg overflow-x-auto min-h-[200px]">
              <LoadingSkeleton height="1rem" width="100%" className="bg-gray-700" />
              <LoadingSkeleton height="1rem" width="90%" className="bg-gray-700 mt-2" />
              <LoadingSkeleton height="1rem" width="95%" className="bg-gray-700 mt-2" />
              <LoadingSkeleton height="1rem" width="85%" className="bg-gray-700 mt-2" />
              <LoadingSkeleton height="1rem" width="92%" className="bg-gray-700 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
