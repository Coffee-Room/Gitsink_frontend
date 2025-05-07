export const faqItems = [
  {
    value: "item-1",
    question: "Do I need to manually select which projects to showcase?",
    answer:
      "No, Gitsink automatically detects your projects using the Portfolio.md file in each repository. This file lets you specify which projects to showcase and add custom descriptions or metadata. For any project without a Portfolio.md, we use GitHub's publicly available metadata to fill in basic details (name, description, stars, etc.).",
  },
  {
    value: "item-2",
    question: "How often is my portfolio updated?",
    answer:
      "Your portfolio is updated in real-time whenever you push changes to your repositories. We use GitHub webhooks to detect changes and update your portfolio immediately.",
  },
  {
    value: "item-3",
    question: "Can I customize the output?",
    answer:
      "Absolutely. With Gitsink, you can customize your project showcase in two ways:\n• GraphQL API: Define exactly what data you want to see in your API response by specifying fields in your query.\n• Portfolio.md File: Add custom descriptions, tags, and metadata directly within your GitHub repositories.\n\nAdvanced customization options (like custom field mappings and layouts) are also coming soon.",
  },
  {
    value: "item-4",
    question: "Is Gitsink free to use?",
    answer:
      "Gitsink offers both free and premium tiers. The free tier includes basic portfolio generation and API access with generous usage limits. Premium tiers add features like custom domains, advanced analytics, and higher API rate limits.",
  },
  {
    value: "item-5",
    question: "How do I get started?",
    answer:
      "Join our waitlist to get early access to Gitsink. Once you're in, simply connect your GitHub account, and we'll automatically generate your portfolio. You can then customize it using Portfolio.md files in your repositories.",
  },
]
