// Enum for tracking conversion goals
export enum ConversionGoal {
  WAITLIST_SIGNUP = "waitlist_signup",
  CONTACT_SUBMISSION = "contact_submission",
  DOCUMENTATION_VIEW = "documentation_view",
  GITHUB_VISIT = "github_visit",
  FEATURE_EXPLORATION = "feature_exploration",
  DOCUMENTATION_ENGAGEMENT = "documentation_engagement",
  DEMO_INTERACTION = "demo_interaction",
}

// Enum for tracking funnel steps
export enum FunnelStep {
  AWARENESS = "awareness",
  INTEREST = "interest",
  CONSIDERATION = "consideration",
  INTENT = "intent",
  EVALUATION = "evaluation",
  CONVERSION = "conversion",
}

// Enum for event categories
export enum EventCategory {
  ENGAGEMENT = "engagement",
  CONVERSION = "conversion",
  ERROR = "error",
  NAVIGATION = "navigation",
  FEATURE = "feature",
}

// Enum for event names
export enum EventName {
  PAGE_VIEW = "page_view",
  BUTTON_CLICK = "button_click",
  FORM_SUBMIT = "form_submit",
  FORM_ERROR = "form_error",
  LINK_CLICK = "link_click",
  SCROLL_DEPTH = "scroll_depth",
  TIME_ON_PAGE = "time_on_page",
  VIDEO_PLAY = "video_play",
  MENU_OPEN = "menu_open",
  WAITLIST_SUBMIT = "waitlist_submit",
  CONTACT_SUBMIT = "contact_submit",
  GITHUB_CLICK = "github_click",
  CONVERSION_START = "conversion_start",
  CONVERSION_STEP = "conversion_step",
  CONVERSION_COMPLETE = "conversion_complete",
  CONVERSION_ABANDON = "conversion_abandon",
  FEATURE_TOGGLE = "feature_toggle",
  THEME_SWITCH = "theme_switch",
  LANGUAGE_CHANGE = "language_change",
  API_ERROR = "api_error",
  JS_ERROR = "js_error",
}

// Function to track a generic event
export function trackEvent(name: EventName, category: EventCategory, properties?: Record<string, any>) {
  // Safe check for browser environment
  if (typeof window === "undefined") {
    return
  }

  try {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics] Event: ${name}, Category: ${category}`, properties)
    }

    // Here you would typically send the event to your analytics provider
    // Example:
    // window.analytics?.track(name, { category, ...properties });
  } catch (error) {
    console.error("Error tracking event:", error)
  }
}

// Function to track page views
export function trackPageView(url: string) {
  // Safe check for browser environment
  if (typeof window === "undefined") {
    return
  }

  const referrer = typeof document !== "undefined" ? document.referrer || "direct" : "direct"

  trackEvent(EventName.PAGE_VIEW, EventCategory.NAVIGATION, {
    url,
    referrer,
  })
}

// Function to track the start of a conversion funnel
export function trackConversionStart(goal: ConversionGoal, step: FunnelStep, properties?: Record<string, any>) {
  // Safe check for browser environment
  if (typeof window === "undefined") {
    return
  }

  trackEvent(EventName.CONVERSION_START, EventCategory.CONVERSION, {
    conversion_goal: goal,
    funnel_step: step,
    ...properties,
  })
}

// Function to track a step in a conversion funnel
export function trackConversionStep(
  goal: ConversionGoal,
  step: FunnelStep,
  action: string,
  currentStep: number,
  totalSteps: number,
  properties?: Record<string, any>,
) {
  // Safe check for browser environment
  if (typeof window === "undefined") {
    return
  }

  trackEvent(EventName.CONVERSION_STEP, EventCategory.CONVERSION, {
    conversion_goal: goal,
    funnel_step: step,
    action,
    current_step: currentStep,
    total_steps: totalSteps,
    progress_percentage: Math.round((currentStep / totalSteps) * 100),
    ...properties,
  })
}

// Function to track a completed conversion
export function trackConversionComplete(goal: ConversionGoal, properties?: Record<string, any>) {
  // Safe check for browser environment
  if (typeof window === "undefined") {
    return
  }

  trackEvent(EventName.CONVERSION_COMPLETE, EventCategory.CONVERSION, {
    conversion_goal: goal,
    funnel_complete: true,
    funnel_step: FunnelStep.CONVERSION,
    ...properties,
  })
}

// Function to track an abandoned conversion
export function trackConversionAbandon(
  goal: ConversionGoal,
  step: FunnelStep,
  reason: string,
  properties?: Record<string, any>,
) {
  // Safe check for browser environment
  if (typeof window === "undefined") {
    return
  }

  trackEvent(EventName.CONVERSION_ABANDON, EventCategory.ERROR, {
    conversion_goal: goal,
    funnel_step: step,
    abandon_reason: reason,
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
  const pathMappings: Record<string, { goal: ConversionGoal; step: FunnelStep }> = {
    "/": { goal: ConversionGoal.WAITLIST_SIGNUP, step: FunnelStep.AWARENESS },
    "/features": { goal: ConversionGoal.FEATURE_EXPLORATION, step: FunnelStep.INTEREST },
    "/how-it-works": { goal: ConversionGoal.FEATURE_EXPLORATION, step: FunnelStep.CONSIDERATION },
    "/faq": { goal: ConversionGoal.DOCUMENTATION_ENGAGEMENT, step: FunnelStep.EVALUATION },
    "/contact": { goal: ConversionGoal.CONTACT_SUBMISSION, step: FunnelStep.INTENT },
    "/waitlist": { goal: ConversionGoal.WAITLIST_SIGNUP, step: FunnelStep.INTENT },
    "/api": { goal: ConversionGoal.DOCUMENTATION_ENGAGEMENT, step: FunnelStep.CONSIDERATION },
    "/login": { goal: ConversionGoal.GITHUB_VISIT, step: FunnelStep.INTENT },
  }

  // Track conversion start based on page visit
  if (path in pathMappings) {
    const { goal, step } = pathMappings[path]
    trackConversionStart(goal, step, { path })
  }
}
