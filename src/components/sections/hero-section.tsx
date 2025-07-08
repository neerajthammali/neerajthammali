import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Civil Engineer & Tech Innovator
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-muted-foreground md:text-xl">
              As an expert in portfolio and resume building, I bridge the gap
              between civil engineering principles and cutting-edge technology,
              creating innovative solutions and empowering professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <a href="#projects">Explore Projects</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Let&apos;s Connect</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Neeraj Tammali"
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg aspect-square"
              data-ai-hint="profile portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}