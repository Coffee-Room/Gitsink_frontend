import type { ReactNode } from "react"

interface BrowserMockupProps {
  url: string
  title: string
  secondaryTab?: string
  children: ReactNode
  className?: string
}

export function BrowserMockup({ url, title, secondaryTab, children, className = "" }: BrowserMockupProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-lg border shadow-lg ${className}`}>
      {/* Browser Chrome */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2">
        {/* Browser Tabs */}
        <div className="flex items-center">
          <div className="flex items-center bg-white dark:bg-gray-900 rounded-t-lg border-b-0 border border-gray-200 dark:border-gray-700 px-4 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            {title}
          </div>
          {secondaryTab && (
            <div className="ml-2 flex items-center bg-gray-200 dark:bg-gray-700 rounded-t-lg px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 opacity-80">
              {secondaryTab}
            </div>
          )}
        </div>

        {/* URL Bar */}
        <div className="mt-2 flex items-center bg-white dark:bg-gray-900 rounded-md px-3 py-1.5 text-sm text-gray-800 dark:text-gray-200">
          <div className="flex items-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-green-500 mr-1"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
          <span className="text-xs sm:text-sm font-mono truncate">{url}</span>
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-white dark:bg-gray-900">{children}</div>
    </div>
  )
}
