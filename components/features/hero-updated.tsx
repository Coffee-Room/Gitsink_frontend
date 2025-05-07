"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, Code, Twitter, Twitch } from "lucide-react"
import { TelegramIcon, DiscordIcon, SlackIcon } from "@/components/icons/platform-icons"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"

export default function FeaturesHero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [activeIcon, setActiveIcon] = useState(0)
  const icons = [
    { Icon: Globe, label: "Websites" },
    { Icon: TelegramIcon, label: "Telegram" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Twitch, label: "Twitch" },
    { Icon: DiscordIcon, label: "Discord" },
    { Icon: SlackIcon, label: "Slack" },
    { Icon: Code, label: "API" },
  ]

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  // Rotate through icons
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isVisible, icons.length])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      <div className="absolute inset-0 bg-[url('/abstract-dots-pattern.png')] bg-repeat opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <CoordinatedAnimation type="fade">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Your Projects, <span className="text-primary">Everywhere</span> — Instantly
            </h1>
          </CoordinatedAnimation>

          <CoordinatedAnimation delay={300} type="fade">
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Gitsink transforms your GitHub projects into a versatile API — ready for websites, bots, plugins, and
              beyond.
            </p>
          </CoordinatedAnimation>

          <CoordinatedAnimation delay={600} type="fade">
            <div className="mt-12 md:mt-16 flex justify-center">
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {icons.map(({ Icon, label }, index) => (
                  <div
                    key={index}
                    className={`relative transition-all duration-500 ${
                      index === activeIcon ? "scale-125 z-10" : "scale-100 opacity-70"
                    }`}
                  >
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg">
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                    </div>
                    <div
                      className={`mt-3 text-sm font-medium ${
                        index === activeIcon ? "text-primary font-bold" : "text-foreground"
                      }`}
                    >
                      {label}
                    </div>
                    {index === activeIcon && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CoordinatedAnimation>
        </div>
      </div>
    </section>
  )
}
