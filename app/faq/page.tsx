import FaqHero from "@/components/faq/hero"
import FaqList from "@/components/faq/faq-list"
import FaqCta from "@/components/faq/cta"
import ScrollToTopButton from "@/components/ui/scroll-to-top-button"
import ShareButtons from "@/components/social/share-buttons"
import StructuredData from "@/components/seo/structured-data"
import { faqItems } from "@/data/faq-data"

export const metadata = {
  title: "Frequently Asked Questions | Gitsink",
  description: "Find answers to common questions about Gitsink, the version control platform for your data.",
  openGraph: {
    title: "Frequently Asked Questions | Gitsink",
    description: "Find answers to common questions about Gitsink, the version control platform for your data.",
    images: [
      {
        url: "/images/gitsink-social-card.png",
        width: 1200,
        height: 630,
        alt: "Gitsink FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Gitsink",
    description: "Find answers to common questions about Gitsink, the version control platform for your data.",
    images: ["/images/gitsink-social-card.png"],
  },
}

export default function FaqPage() {
  // Prepare FAQ data for structured data
  const faqStructuredData = {
    questions: faqItems.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 relative">
        <FaqHero />
        <div className="container px-4 md:px-6 py-4">
          <ShareButtons className="mb-8 justify-end" />
        </div>
        <FaqList />
        <FaqCta />
      </main>
      <ScrollToTopButton />
      <StructuredData type="faq" data={faqStructuredData} />
    </div>
  )
}
