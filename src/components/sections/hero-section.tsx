import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full py-20 md:py-32 lg:py-40"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Neeraj Tammali
          </h1>
          <p className="text-xl md:text-2xl text-accent font-headline">
            Empowering Entrepreneurs | Digital Marketing Innovator
          </p>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            17-year-old Civil Engineering student, founder of Hustler’s Point,
            specializing in digital marketing, personal branding, and content
            strategy for entrepreneurs.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#innovations">View My Work</a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#contact">Connect with Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
