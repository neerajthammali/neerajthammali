import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Civil Engineer & Tech Innovator
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
              As an expert in portfolio and resume building, I bridge the gap
              between civil engineering principles and cutting-edge technology,
              creating innovative solutions and empowering professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <a href="#projects">Explore Projects</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Let&apos;s Connect</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
