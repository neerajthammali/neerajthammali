import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
           <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
              I'm a Civil Engineering student with a simple passion: I love to build things that help people. Think of it like this: with engineering, I can design a bridge to connect two towns. With technology, I can create an app that helps thousands of people use that bridge in the best way possible. I enjoy solving tricky puzzles and turning a complicated idea into a real, finished project. Whether it's a structure you can touch or a program on a screen, my goal is always to create something valuable and useful.
            </p>
        </CardContent>
      </Card>
    </section>
  );
}
