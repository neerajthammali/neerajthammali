import { Button } from "@/components/ui/button";
import { Download, MessageCircle } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Civil Engineer & Tech Innovator
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Blending civil engineering precision with digital creativity, I build impactful solutions and help professionals forge their own paths.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <a href="#projects">Explore Projects</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  <MessageCircle className="mr-2" />
                  Request CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
