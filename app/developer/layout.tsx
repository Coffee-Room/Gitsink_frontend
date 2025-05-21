import type { ReactNode } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function DeveloperLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
