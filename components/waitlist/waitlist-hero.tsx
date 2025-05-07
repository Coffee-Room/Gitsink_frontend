import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"

export default function WaitlistHero() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <CoordinatedAnimation type="fade">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
              Join the Gitsink Waitlist
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Be among the first to experience Gitsink when we launch. Sign up now to receive your exclusive early
              access code.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950 px-4 py-2 rounded-full">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-700 dark:text-green-300 text-sm font-medium">Limited Early Access</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950 px-4 py-2 rounded-full">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">Priority Support</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              We're working hard to bring you the best version control experience. Early access members will receive
              exclusive benefits and priority support.
            </p>
          </div>
        </CoordinatedAnimation>
      </div>
    </section>
  )
}
