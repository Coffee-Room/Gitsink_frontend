"use client"
import AnimatedCounter from "@/components/animated-counter"
import StaggeredItems from "@/components/staggered-items"
import ScrollReveal from "@/components/scroll-reveal"

export default function ProjectShowcase() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <ScrollReveal animation="fade">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-8 md:mb-16">
            Showcase Your Projects
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade" delay={400}>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-4 md:p-6 shadow-lg">
              <div className="grid gap-6 sm:grid-cols-2">
                <StaggeredItems baseDelay={600} delayIncrement={200}>
                  <ScrollReveal animation="slide-up">
                    <ProjectCard
                      name="awesome-project"
                      description="A revolutionary dev tool"
                      language="TypeScript"
                      stars={128}
                      updatedDate="Apr 15, 2023"
                    />
                  </ScrollReveal>

                  <ScrollReveal animation="slide-up">
                    <ProjectCard
                      name="another-cool-repo"
                      description="Simplify your workflow"
                      language="JavaScript"
                      stars={84}
                      updatedDate="Mar 22, 2023"
                    />
                  </ScrollReveal>
                </StaggeredItems>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  name: string
  description: string
  language: string
  stars: number
  updatedDate: string
}

function ProjectCard({ name, description, language, stars, updatedDate }: ProjectCardProps) {
  const getLanguageColor = (lang: string) => {
    const colors: Record<string, string> = {
      TypeScript: "text-primary bg-primary/10",
      JavaScript: "text-yellow-500 bg-yellow-500/10",
    }
    return colors[lang] || "text-primary bg-primary/10"
  }

  return (
    <div className="rounded-md border bg-background p-4 h-full">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{name}</h3>
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${getLanguageColor(language)}`}>{language}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-yellow-500"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <AnimatedCounter end={stars} duration={1500} className="text-xs" />
        </div>
        <span className="text-xs text-muted-foreground">Updated {updatedDate}</span>
      </div>
    </div>
  )
}
