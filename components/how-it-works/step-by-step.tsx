"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Github, FileText, Database, Code } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export default function StepByStepProcess() {
  // Add this useEffect to ensure the section is visible when the page loads
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0)

    // Add a class to the body to indicate this section is loaded
    document.body.classList.add("step-by-step-loaded")

    // Ensure this section is visible
    document.documentElement.style.overflow = "visible"
    document.body.style.overflow = "visible"

    return () => {
      document.body.classList.remove("step-by-step-loaded")
      // Don't reset overflow on unmount to avoid layout shifts
    }
  }, [])

  // Add smooth scrolling for better navigation on mobile
  useEffect(() => {
    // Enable smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const element = document.getElementById(href.substring(1))
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100, // Offset for header
            behavior: "smooth",
          })
        }
      }
    }

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick)
    })

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick)
      })
    }
  }, [])

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-muted/30 relative z-20 transition-all duration-500 ease-in-out overflow-x-hidden max-w-full">
      <div className="container px-4 md:px-6 overflow-x-hidden max-w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle>Step-by-Step Process</SectionTitle>
          <p className="text-muted-foreground text-lg">
            Follow these simple steps to showcase your GitHub projects with Gitsink
          </p>
        </div>

        <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
          {/* Step 1 */}
          <StepSection
            stepNumber={1}
            icon={<Github className="h-8 w-8 text-primary" />}
            title="Login with GitHub"
            description="Authenticate securely with your GitHub account. We'll generate a unique API key that you can use to access your projects."
            features={[
              "One-click authentication with GitHub OAuth",
              "Secure API key generation",
              "No need to manually configure repositories",
            ]}
          >
            <Card className="overflow-hidden border-2 border-muted shadow-xl">
              <CardContent className="p-0">
                <div className="bg-zinc-900 p-3 border-b border-zinc-700">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-zinc-800 p-8 flex flex-col items-center justify-center">
                  <div className="bg-zinc-700 rounded-lg p-6 w-full max-w-sm mx-auto shadow-md">
                    <div className="flex items-center justify-center mb-6">
                      <Github className="h-8 w-8 text-white mr-3" />
                      <span className="text-white font-bold text-xl">Sign in with GitHub</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Authorize Gitsink</Button>
                    <div className="mt-4 text-center text-zinc-400 text-sm">
                      <p>We only request read access to your public repositories</p>
                    </div>
                  </div>
                  <div className="mt-8 bg-zinc-700 rounded-lg p-5 w-full max-w-sm mx-auto shadow-md">
                    <div className="text-green-400 mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Authentication successful!
                    </div>
                    <div className="bg-zinc-900 p-4 rounded border border-zinc-600 font-mono text-sm text-white overflow-x-auto">
                      <div>Your API Key:</div>
                      <div className="text-green-400 mt-1 typing-animation">gsk_1a2b3c4d5e6f7g8h9i0j</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StepSection>

          {/* Step 2 */}
          <StepSection
            stepNumber={2}
            icon={<FileText className="h-8 w-8 text-primary" />}
            title="Add a Portfolio.md File"
            description="Create a Portfolio.md file in your repository to provide context and additional details about your projects."
            features={[
              "Add custom metadata beyond what GitHub provides",
              "Control which repositories are visible, including private ones",
              "Add custom fields, screenshots, and external links",
              "Prioritize and categorize your projects",
            ]}
            reverse
          >
            <Card className="overflow-hidden border-2 border-muted shadow-xl">
              <CardContent className="p-0">
                <div className="bg-zinc-900 p-3 border-b border-zinc-700">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mt-1 text-xs text-zinc-400 font-mono">Portfolio.md</div>
                </div>
                <div className="bg-zinc-800 p-6 font-mono text-sm text-white overflow-x-auto">
                  <pre className="whitespace-pre max-w-full overflow-x-auto">
                    {`# My Portfolio Configuration

This file controls how your repositories are displayed through the Gitsink API.
Each repository can have its own section with custom metadata.

## awesome-project
- category: Developer Tools
- featured: true
- demo: https://demo.example.com
- technologies: React, Node.js, GraphQL
- description: A revolutionary dev tool that simplifies workflow
- screenshots: ["dashboard.png", "settings.png"]
- documentation: https://docs.example.com
- priority: 1

## another-cool-repo
- category: Utilities
- featured: false
- technologies: JavaScript, Express
- description: Simplify your workflow with this utility
- priority: 2

## private-project (Private Repository)
- category: Internal Tools
- featured: true
- technologies: TypeScript, Next.js, Prisma
- description: Our internal dashboard for analytics
- public: true  # Makes this visible in the API without exposing code
- contact: team@example.com
- customFields:
  - status: In Development
  - team: Backend Team
  - startDate: 2023-01-15

## legacy-code
- public: false  # Explicitly hide this repository from the API

## personal-website
- category: Portfolio
- featured: true
- technologies: React, Tailwind CSS
- description: My personal website and blog
- customFields:
  - lastRedesign: 2023-05-10
  - inspiration: "Minimalist design with a focus on typography"
`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </StepSection>

          {/* Step 3 */}
          <StepSection
            stepNumber={3}
            icon={<Code className="h-8 w-8 text-primary" />}
            title="Query Your Projects"
            description="Access your projects with either a GraphQL query or standard REST endpoints. Choose the API style that works best for your needs."
            features={[
              "Flexible query options with GraphQL",
              "Simple REST endpoints for standard use cases",
              "Comprehensive documentation for both API styles",
            ]}
          >
            <Card className="overflow-hidden border-2 border-muted shadow-xl">
              <CardContent className="p-0">
                <Tabs defaultValue="graphql" className="w-full">
                  <div className="bg-zinc-900 p-3 border-b border-zinc-700 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <TabsList className="bg-zinc-800">
                      <TabsTrigger value="graphql" className="text-xs">
                        GraphQL
                      </TabsTrigger>
                      <TabsTrigger value="rest" className="text-xs">
                        REST
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="graphql" className="m-0">
                    <GraphQLExample />
                  </TabsContent>
                  <TabsContent value="rest" className="m-0">
                    <RESTExample />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </StepSection>

          {/* Step 4 */}
          <StepSection
            stepNumber={4}
            icon={<Database className="h-8 w-8 text-primary" />}
            title="Get Your Data in JSON"
            description="Receive clean, structured data in JSON format, ready to be used in your portfolio, application, or website."
            features={[
              "Consistent JSON structure",
              "Enriched with your Portfolio.md metadata",
              "Ready to integrate with any frontend framework",
            ]}
            reverse
          >
            <Card className="overflow-hidden border-2 border-muted shadow-xl">
              <CardContent className="p-0">
                <div className="bg-zinc-900 p-3 border-b border-zinc-700">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mt-1 text-xs text-zinc-400 font-mono">JSON Response</div>
                </div>
                <JSONResponseExample />
              </CardContent>
            </Card>
          </StepSection>
        </div>
      </div>
    </section>
  )
}

// Section title with animation
function SectionTitle({ children }) {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: "100px 0px" })

  return (
    <h2
      ref={ref}
      className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-500 ${
        isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </h2>
  )
}

// Animated Step Section Component
function StepSection({ stepNumber, icon, title, description, features, children, reverse = false }) {
  const contentRef = useRef(null)
  const mockupRef = useRef(null)
  const [contentVisible, setContentVisible] = useState(false)
  const [mockupVisible, setMockupVisible] = useState(false)

  useEffect(() => {
    // Add touch event listeners for mobile interactions
    const handleTouchStart = () => {
      // Enhance touch interactions on mobile
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        // Immediately show content on touch for mobile
        setContentVisible(true)
        setMockupVisible(true)
      }
    }

    if (contentRef.current) {
      contentRef.current.addEventListener("touchstart", handleTouchStart, { passive: true })
    }
    if (mockupRef.current) {
      mockupRef.current.addEventListener("touchstart", handleTouchStart, { passive: true })
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("touchstart", handleTouchStart)
      }
      if (mockupRef.current) {
        mockupRef.current.removeEventListener("touchstart", handleTouchStart)
      }
    }
  }, [])

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setContentVisible(true)
          }, 100) // Reduced delay
          contentObserver.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px 0px" }, // Increased threshold and added rootMargin
    )

    const mockupObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setMockupVisible(true)
          }, 150) // Reduced delay
          mockupObserver.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px 0px" }, // Increased threshold and added rootMargin
    )

    if (contentRef.current) contentObserver.observe(contentRef.current)
    if (mockupRef.current) mockupObserver.observe(mockupRef.current)

    return () => {
      contentObserver.disconnect()
      mockupObserver.disconnect()
    }
  }, [])

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div
        ref={contentRef}
        className={`transition-all duration-700 ${
          contentVisible
            ? "opacity-100 transform-none"
            : reverse
              ? "opacity-0 translate-x-8"
              : "opacity-0 -translate-x-8"
        } ${reverse ? "md:order-2" : ""}`}
      >
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6 shadow-lg shadow-primary/5 relative">
          {icon}
          <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
            {stepNumber}
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 text-lg">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-start transition-all duration-700 ${
                contentVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <span className="mr-3 mt-1 text-primary text-lg">•</span>
              <span className="text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={mockupRef}
        className={`transition-all duration-1000 ${
          mockupVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-16"
        } ${reverse ? "md:order-1" : ""}`}
      >
        {children}
      </div>
    </div>
  )
}

// GraphQL Query Example Component
function GraphQLExample() {
  return (
    <div className="bg-zinc-800 p-4 sm:p-6 font-mono text-xs sm:text-sm text-white overflow-x-auto">
      <pre className="whitespace-pre max-w-full overflow-x-auto">
        {`query GetUserProjects($username: String!, $featured: Boolean, $limit: Int = 10) {
  userProjects(username: $username, featured: $featured, limit: $limit) {
    name
    description
    stars
    forks
    language
    lastUpdated
    url
    owner {
      username
      avatarUrl
    }
    portfolio {
      featured
      category
      demo
      technologies
      screenshots
      priority
      customFields {
        key
        value
      }
    }
    readme {
      content
      html
    }
    contributors(limit: 5) {
      username
      contributions
      avatarUrl
    }
  }
}`}
      </pre>
    </div>
  )
}

// REST API Example Component
function RESTExample() {
  return (
    <div className="bg-zinc-800 p-4 sm:p-6 font-mono text-xs sm:text-sm text-white overflow-x-auto">
      <pre className="whitespace-pre max-w-full overflow-x-auto">
        {`# Get all projects
GET /api/projects
Authorization: Bearer <your-api-key>

# Filter by featured status
GET /api/projects?featured=true

# Filter by category and limit results
GET /api/projects?category=Developer+Tools&limit=5

# Get a specific project with expanded details
GET /api/projects/awesome-project?include=readme,contributors

# Get project contributors
GET /api/projects/awesome-project/contributors`}
      </pre>
    </div>
  )
}

// JSON Response Example Component
function JSONResponseExample() {
  return (
    <div className="bg-zinc-800 p-4 sm:p-6 font-mono text-xs sm:text-sm text-blue-400 overflow-x-auto">
      <pre className="whitespace-pre max-w-full overflow-x-auto">
        {`{
  "projects": [
    {
      "name": "awesome-project",
      "description": "A revolutionary dev tool",
      "stars": 128,
      "language": "TypeScript",
      "lastUpdated": "2023-04-15T10:30:00Z",
      "portfolio": {
        "featured": true,
        "category": "Developer Tools",
        "demo": "https://demo.example.com",
        "technologies": ["React", "Node.js", "GraphQL"]
      }
    },
    {
      "name": "another-cool-repo",
      "description": "Simplify your workflow",
      "stars": 84,
      "language": "JavaScript",
      "lastUpdated": "2023-03-22T14:15:00Z",
      "portfolio": {
        "featured": false,
        "category": "Utilities",
        "technologies": ["JavaScript", "Express"]
      }
    }
  ]
}`}
      </pre>
    </div>
  )
}
