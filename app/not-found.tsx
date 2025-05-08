import Link from "next/link"

// Make this page dynamic
export const dynamic = "force-dynamic"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
