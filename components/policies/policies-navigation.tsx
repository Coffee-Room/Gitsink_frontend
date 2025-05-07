"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { policyTranslations } from "@/lib/translations/policies"

export default function PoliciesNavigation() {
  const [activeSection, setActiveSection] = useState("terms")
  const { currentLanguage } = useLanguage()

  // Ensure we have a valid language code and fallback to English if needed
  const langCode = currentLanguage?.code || "en"
  const translations = policyTranslations[langCode] || policyTranslations.en

  // Safely access navigation translations with fallbacks
  const navTitle = translations?.navigation?.title || "Policy Sections"
  const navItems = {
    terms: translations?.navigation?.terms || "Terms of Service",
    privacy: translations?.navigation?.privacy || "Privacy Policy",
    acceptableUse: translations?.navigation?.acceptableUse || "Acceptable Use",
    dataProtection: translations?.navigation?.dataProtection || "Data Protection",
    apiUsage: translations?.navigation?.apiUsage || "API Usage",
    userResponsibility: translations?.navigation?.userResponsibility || "User Responsibility",
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) {
              setActiveSection(id)
            }
          }
        })
      },
      { rootMargin: "-20% 0px -80% 0px" },
    )

    const sections = document.querySelectorAll("[data-policy-section]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <nav className="space-y-1">
      <h3 className="text-lg font-semibold mb-4">{navTitle}</h3>
      <ul className="space-y-1">
        <NavItem id="terms" active={activeSection === "terms"}>
          {navItems.terms}
        </NavItem>
        <NavItem id="privacy" active={activeSection === "privacy"}>
          {navItems.privacy}
        </NavItem>
        <NavItem id="acceptable-use" active={activeSection === "acceptable-use"}>
          {navItems.acceptableUse}
        </NavItem>
        <NavItem id="data-protection" active={activeSection === "data-protection"}>
          {navItems.dataProtection}
        </NavItem>
        <NavItem id="api-usage" active={activeSection === "api-usage"}>
          {navItems.apiUsage}
        </NavItem>
        <NavItem id="user-responsibility" active={activeSection === "user-responsibility"}>
          {navItems.userResponsibility}
        </NavItem>
      </ul>
    </nav>
  )
}

function NavItem({ id, active, children }) {
  return (
    <li>
      <a
        href={`#${id}`}
        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
          active
            ? "bg-primary text-primary-foreground font-medium"
            : "hover:bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        {children}
      </a>
    </li>
  )
}
