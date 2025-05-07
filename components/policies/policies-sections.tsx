"use client"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock, AlertTriangle, Database, Key, UserCheck } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { policyTranslations } from "@/lib/translations/policies"

export default function PoliciesSections() {
  const { currentLanguage } = useLanguage()
  // Ensure we have a valid language code and fallback to English if needed
  const langCode = currentLanguage?.code || "en"
  const translations = policyTranslations[langCode] || policyTranslations.en

  // Ensure translations exist before rendering
  if (!translations) {
    return <div>Loading...</div>
  }

  return (
    <Card className="p-6 md:p-8">
      <div className="space-y-12">
        <PolicySection
          id="terms"
          title={translations?.terms?.title || "Terms of Service"}
          icon={<Shield className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations?.terms?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          ))}
        </PolicySection>

        <PolicySection
          id="privacy"
          title={translations?.privacy?.title || "Privacy Policy"}
          icon={<Lock className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations?.privacy?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          ))}
        </PolicySection>

        <PolicySection
          id="acceptable-use"
          title={translations?.acceptableUse?.title || "Acceptable Use Policy"}
          icon={<AlertTriangle className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations?.acceptableUse?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          ))}
        </PolicySection>

        <PolicySection
          id="data-protection"
          title={translations?.dataProtection?.title || "Data Protection Policy"}
          icon={<Database className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations?.dataProtection?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          ))}
        </PolicySection>

        <PolicySection
          id="api-usage"
          title={translations?.apiUsage?.title || "API Usage Policy"}
          icon={<Key className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations?.apiUsage?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          ))}
        </PolicySection>

        <PolicySection
          id="user-responsibility"
          title={translations?.userResponsibility?.title || "User Responsibility Agreement"}
          icon={<UserCheck className="h-6 w-6 text-primary" />}
          lastUpdated="May 1, 2023"
          translations={translations}
        >
          {translations?.userResponsibility?.sections?.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{section?.title || ""}</h3>
              <p className="mb-4">{section?.content || ""}</p>
              {section?.list && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section?.additionalContent && <p className="mb-4">{section.additionalContent}</p>}
            </div>
          ))}
        </PolicySection>
      </div>
    </Card>
  )
}

function PolicySection({ id, title, icon, lastUpdated, children, translations }) {
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
