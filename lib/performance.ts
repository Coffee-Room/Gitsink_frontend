/**
 * Utility functions for performance monitoring and optimization
 */

// Report web vitals metrics
export function reportWebVitals(metric: any) {
  // In a real app, you would send these metrics to your analytics service
  if (process.env.NODE_ENV !== "production") {
    console.log(metric)
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === "undefined") return

  // Preload important images
  const imagesToPreload = ["/images/gitsink-logo-icon.png"]

  imagesToPreload.forEach((src) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = src
    document.head.appendChild(link)
  })

  // Preload theme to avoid flash
  const themeLink = document.createElement("link")
  themeLink.rel = "preload"
  themeLink.as = "style"
  themeLink.href = "/theme.css"
  document.head.appendChild(themeLink)
}

// Defer non-critical resources
export function deferNonCriticalResources() {
  if (typeof window === "undefined") return

  // This function would be called after the page has loaded
  window.addEventListener("load", () => {
    // Wait a bit to ensure critical resources are loaded first
    setTimeout(() => {
      // Load non-critical resources here
      // For example, analytics, chat widgets, etc.
    }, 2000)
  })
}

// Optimize theme switching
export function optimizeThemeSwitching() {
  if (typeof window === "undefined") return

  // Add a class to the html element to enable CSS transitions for theme changes
  document.documentElement.classList.add("theme-transition")

  // Prevent transition on page load
  window.addEventListener("load", () => {
    // Short delay to ensure theme is applied
    setTimeout(() => {
      document.documentElement.classList.add("theme-transition-enabled")
    }, 300)
  })
}
