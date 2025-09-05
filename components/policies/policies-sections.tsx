"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock, AlertTriangle, Database, Key, UserCheck } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { policyTranslations } from "@/lib/translations/policies"

export default function PoliciesSections() {
  const { currentLanguage } = useLanguage()

  // Safely get language code with fallback
  const langCode = currentLanguage?.code || "en"
  const translations = policyTranslations[langCode] || policyTranslations.en

  // Early return with loading state if translations are not available
  if (!translations) {
    return (
      <Card className="p-6 md:p-8">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6 md:p-8">
      <div className="space-y-12">
        <PolicySection
          id="terms"
          title={translations.terms?.title || "Terms of Service"}
          icon={<Shield className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations.terms?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && Array.isArray(section.list) && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          )) || <div>No terms sections available</div>}
        </PolicySection>

        <PolicySection
          id="privacy"
          title={translations.privacy?.title || "Privacy Policy"}
          icon={<Lock className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations.privacy?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && Array.isArray(section.list) && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          )) || <div>No privacy sections available</div>}
        </PolicySection>

        <PolicySection
          id="acceptable-use"
          title={translations.acceptableUse?.title || "Acceptable Use Policy"}
          icon={<AlertTriangle className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations.acceptableUse?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && Array.isArray(section.list) && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          )) || <div>No acceptable use sections available</div>}
        </PolicySection>

        <PolicySection
          id="data-protection"
          title={translations.dataProtection?.title || "Data Protection Policy"}
          icon={<Database className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations.dataProtection?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && Array.isArray(section.list) && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          )) || <div>No data protection sections available</div>}
        </PolicySection>

        <PolicySection
          id="api-usage"
          title={translations.apiUsage?.title || "API Usage Policy"}
          icon={<Key className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations.apiUsage?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && Array.isArray(section.list) && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          )) || <div>No API usage sections available</div>}
        </PolicySection>

        <PolicySection
          id="user-responsibility"
          title={translations.userResponsibility?.title || "User Responsibility Agreement"}
          icon={<UserCheck className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations.userResponsibility?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && Array.isArray(section.list) && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          )) || <div>No user responsibility sections available</div>}
        </PolicySection>
      </div>
    </Card>
  )
}

interface PolicySectionProps {
  id: string
  title: string
  icon: React.ReactNode
  lastUpdated: string
  children: React.ReactNode
  translations: any
}

function PolicySection({ id, title, icon, lastUpdated, children, translations }: PolicySectionProps) {
  // Safely access lastUpdated text with fallback
  const lastUpdatedText = translations?.lastUpdated || "Last updated"

  return (
    <section id={id} data-policy-section className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        {lastUpdatedText}: {lastUpdated}
      </p>
      <div className="space-y-6">{children}</div>
      <Separator className="mt-12" />
    </section>
  )
}
