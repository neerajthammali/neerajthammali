import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full py-20 md:py-32 lg:py-40"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Civil Engineer & Tech Innovator
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            As an expert in portfolio and resume building, I bridge the gap between civil engineering principles and cutting-edge technology, creating innovative solutions and empowering professionals.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">
                View My Work
                <MoveRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
