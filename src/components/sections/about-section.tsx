import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 pt-16 md:pt-24">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
           <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
            About
          </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="max-w-3xl text-muted-foreground text-lg">
                I&apos;m a creative developer and digital strategist, blending design, technology, and marketing to build beautiful and effective digital experiences. With a foundation in Civil Engineering and a passion for entrepreneurship, I thrive on solving problems and building innovative solutions from the ground up.
            </p>
        </CardContent>
      </Card>
    </section>
  );
}
