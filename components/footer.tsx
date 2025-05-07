"use client"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 p-6 text-center border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Gitsink. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
