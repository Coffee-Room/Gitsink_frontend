import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join the Waitlist | Gitsink",
  description:
    "Sign up for early access to Gitsink, the next generation version control platform for modern development teams.",
  openGraph: {
    title: "Join the Gitsink Waitlist",
    description:
      "Be among the first to experience Gitsink when we launch. Sign up now to receive your exclusive early access code.",
    images: [
      {
        url: "/og-waitlist.jpg",
        width: 1200,
        height: 630,
        alt: "Gitsink Waitlist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Gitsink Waitlist",
    description:
      "Be among the first to experience Gitsink when we launch. Sign up now to receive your exclusive early access code.",
    images: ["/og-waitlist.jpg"],
  },
}
