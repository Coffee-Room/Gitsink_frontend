interface ApiTabsProps {
  activeTab?: string
  className?: string
}

export function ApiTabs({ activeTab = "Response", className = "" }: ApiTabsProps) {
  const tabs = ["Response", "Headers", "Curl"]

  return (
    <div className={`flex border-b border-gray-200 dark:border-gray-700 px-4 pt-3 text-sm ${className}`}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`pb-2 px-2 ${
            tab === activeTab
              ? "border-b-2 border-primary text-primary font-medium"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}
