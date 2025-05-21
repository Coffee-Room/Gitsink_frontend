export default function FeaturesHeroStatic() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      <div className="absolute inset-0 bg-[url('/abstract-dots-pattern.png')] bg-repeat opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="opacity-0 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Your Projects, <span className="text-primary">Everywhere</span> — Instantly
            </h1>
          </div>

          <div className="opacity-0 animate-fade-in animation-delay-300">
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Gitsink transforms your GitHub projects into a versatile API — ready for websites, bots, plugins, and
              beyond.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in animation-delay-600">
            <div className="mt-12 md:mt-16 flex justify-center">
              <div className="grid grid-cols-5 gap-4 md:gap-8">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className={`relative transition-all duration-500 ${
                      index === 0 ? "scale-125 z-10" : "scale-100 opacity-70"
                    }`}
                  >
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg">
                      <div className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                    </div>
                    {index === 0 && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
