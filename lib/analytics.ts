// Analytics utility functions
import { track } from "@vercel/analytics"

// Define event categories
export const EventCategory = {
  NAVIGATION: "navigation",
  ENGAGEMENT: "engagement",
  CONVERSION: "conversion",
  FEATURE: "feature",
  ERROR: "error",
} as const

// Define event names
export const EventName = {
  // Navigation events
  PAGE_VIEW: "page_view",
  LINK_CLICK: "link_click",
  MENU_OPEN: "menu_open",

  // Engagement events
  SCROLL_DEPTH: "scroll_depth",
  TIME_ON_PAGE: "time_on_page",
  VIDEO_PLAY: "video_play",

  // Conversion events
  WAITLIST_SUBMIT: "waitlist_submit",
  CONTACT_SUBMIT: "contact_submit",
  GITHUB_CLICK: "github_click",
  CONVERSION_START: "conversion_start",
  CONVERSION_STEP: "conversion_step",
  CONVERSION_COMPLETE: "conversion_complete",
  CONVERSION_ABANDON: "conversion_abandon",

  // Feature events
  FEATURE_TOGGLE: "feature_toggle",
  THEME_SWITCH: "theme_switch",
  LANGUAGE_CHANGE: "language_change",

  // Error events
  FORM_ERROR: "form_error",
  API_ERROR: "api_error",
  JS_ERROR: "js_error",
} as const

// Define conversion goals
export const ConversionGoal = {
  WAITLIST_SIGNUP: "waitlist_signup",
  CONTACT_SUBMISSION: "contact_submission",
  GITHUB_VISIT: "github_visit",
  FEATURE_EXPLORATION: "feature_exploration",
  DOCUMENTATION_ENGAGEMENT: "documentation_engagement",
  DEMO_INTERACTION: "demo_interaction",
} as const

// Define conversion funnel steps
export const FunnelStep = {
  AWARENESS: "awareness",
  INTEREST: "interest",
  CONSIDERATION: "consideration",
  INTENT: "intent",
  EVALUATION: "evaluation",
  CONVERSION: "conversion",
} as const

// Track a custom event
export function trackEvent(
  eventName: (typeof EventName)[keyof typeof EventName],
  category: (typeof EventCategory)[keyof typeof EventCategory],
  properties?: Record<string, string | number | boolean>,
) {
  try {
    track(eventName, {
      category,
      ...properties,
    })

    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics] Tracked event: ${eventName}`, {
        category,
        ...properties,
      })
    }
  } catch (error) {
    console.error("[Analytics] Error tracking event:", error)
  }
}

// Add social sharing tracking
export const trackSocialShare = (platform: string, url: string) => {
  trackEvent("share", EventCategory.ENGAGEMENT, {
    platform,
    url,
    location: typeof window !== "undefined" ? window.location.pathname : "/",
  })
}

// Add page view tracking with enhanced metadata
export const trackPageView = (url: string, referrer?: string) => {
  trackEvent(EventName.PAGE_VIEW, EventCategory.NAVIGATION, {
    url,
    referrer: referrer || document.referrer,
    title: document.title,
  })
}

// Track outbound links
export const trackOutboundLink = (url: string, label?: string) => {
  trackEvent("outbound_link", EventCategory.ENGAGEMENT, {
    url,
    label: label || url,
  })
}

// Track conversion start
export function trackConversionStart(
  goal: (typeof ConversionGoal)[keyof typeof ConversionGoal],
  funnelStep: (typeof FunnelStep)[keyof typeof FunnelStep],
  properties?: Record<string, string | number | boolean>,
) {
  trackEvent(EventName.CONVERSION_START, EventCategory.CONVERSION, {
    goal,
    funnel_step: funnelStep,
    ...properties,
  })
}

// Track conversion step
export function trackConversionStep(
  goal: (typeof ConversionGoal)[keyof typeof ConversionGoal],
  funnelStep: (typeof FunnelStep)[keyof typeof FunnelStep],
  stepName: string,
  stepIndex: number,
  totalSteps: number,
  properties?: Record<string, string | number | boolean>,
) {
  trackEvent(EventName.CONVERSION_STEP, EventCategory.CONVERSION, {
    goal,
    funnel_step: funnelStep,
    step_name: stepName,
    step_index: stepIndex,
    total_steps: totalSteps,
    progress_percentage: Math.round((stepIndex / totalSteps) * 100),
    ...properties,
  })
}

// Track conversion complete
export function trackConversionComplete(
  goal: (typeof ConversionGoal)[keyof typeof ConversionGoal],
  properties?: Record<string, string | number | boolean>,
) {
  trackEvent(EventName.CONVERSION_COMPLETE, EventCategory.CONVERSION, {
    goal,
    funnel_step: FunnelStep.CONVERSION,
    ...properties,
  })
}

// Track conversion abandon
export function trackConversionAbandon(
  goal: (typeof ConversionGoal)[keyof typeof ConversionGoal],
  funnelStep: (typeof FunnelStep)[keyof typeof FunnelStep],
  reason?: string,
  properties?: Record<string, string | number | boolean>,
) {
  trackEvent(EventName.CONVERSION_ABANDON, EventCategory.CONVERSION, {
    goal,
    funnel_step: funnelStep,
    reason,
    ...properties,
  })
}

// Track scroll depth
export function initScrollDepthTracking() {
  if (typeof window === "undefined") return

  let maxScrollDepth = 0
  let lastTrackedDepth = 0

  const trackScrollDepth = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    if (scrollHeight <= 0) return

    const scrollTop = window.scrollY
    const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100)

    maxScrollDepth = Math.max(maxScrollDepth, scrollPercentage)

    // Track at 25%, 50%, 75%, and 100%
    const thresholds = [25, 50, 75, 100]

    for (const threshold of thresholds) {
      if (maxScrollDepth >= threshold && lastTrackedDepth < threshold) {
        trackEvent(EventName.SCROLL_DEPTH, EventCategory.ENGAGEMENT, {
          depth: threshold,
          path: window.location.pathname,
        })
        lastTrackedDepth = threshold
      }
    }
  }

  window.addEventListener("scroll", trackScrollDepth, { passive: true })

  // Track final scroll depth on page unload
  window.addEventListener("beforeunload", () => {
    if (maxScrollDepth > lastTrackedDepth) {
      trackEvent(EventName.SCROLL_DEPTH, EventCategory.ENGAGEMENT, {
        depth: maxScrollDepth,
        path: window.location.pathname,
        final: true,
      })
    }
  })
}

// Track time on page
export function initTimeOnPageTracking() {
  if (typeof window === "undefined") return

  const startTime = Date.now()
  let timeTracked = false

  const trackTimeOnPage = () => {
    if (timeTracked) return

    const timeOnPage = Math.round((Date.now() - startTime) / 1000)

    trackEvent(EventName.TIME_ON_PAGE, EventCategory.ENGAGEMENT, {
      seconds: timeOnPage,
      path: window.location.pathname,
    })

    timeTracked = true
  }

  // Track time on page when user leaves
  window.addEventListener("beforeunload", trackTimeOnPage)

  // Also track after 30 seconds if user stays longer
  setTimeout(() => {
    trackEvent(EventName.TIME_ON_PAGE, EventCategory.ENGAGEMENT, {
      seconds: 30,
      path: window.location.pathname,
      milestone: true,
    })
  }, 30000)
}

// Initialize all analytics tracking
export function initAnalytics() {
  if (typeof window === "undefined") return

  // Track initial page view
  trackPageView(window.location.href)

  // Initialize scroll depth tracking
  initScrollDepthTracking()

  // Initialize time on page tracking
  initTimeOnPageTracking()
}

// Track conversion goals based on page visits
export function initConversionPageTracking() {
  if (typeof window === "undefined") return

  const path = window.location.pathname

  // Map paths to conversion goals and funnel steps
  const pathMappings: Record<
    string,
    { goal: (typeof ConversionGoal)[keyof typeof ConversionGoal]; step: (typeof FunnelStep)[keyof typeof FunnelStep] }
  > = {
    "/": { goal: ConversionGoal.WAITLIST_SIGNUP, step: FunnelStep.AWARENESS },
    "/features": { goal: ConversionGoal.FEATURE_EXPLORATION, step: FunnelStep.INTEREST },
    "/how-it-works": { goal: ConversionGoal.FEATURE_EXPLORATION, step: FunnelStep.CONSIDERATION },
    "/faq": { goal: ConversionGoal.DOCUMENTATION_ENGAGEMENT, step: FunnelStep.EVALUATION },
    "/contact": { goal: ConversionGoal.CONTACT_SUBMISSION, step: FunnelStep.INTENT },
    "/waitlist": { goal: ConversionGoal.WAITLIST_SIGNUP, step: FunnelStep.INTENT },
  }

  // Track conversion start based on page visit
  if (path in pathMappings) {
    const { goal, step } = pathMappings[path]
    trackConversionStart(goal, step, { path })
  }
}
