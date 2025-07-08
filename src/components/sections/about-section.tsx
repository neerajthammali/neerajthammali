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
              I'm a Civil Engineering student who loves to build things, both in the real world and with technology. My passion is fueled by the synergy between these two domains. While civil engineering offers the satisfaction of creating tangible, lasting structures, technology provides the power to scale those solutions and make them more efficient. I thrive on turning complex ideas into finished projects, whether a physical build or a digital product, and I excel at uniting teams around a common goal. Ultimately, I'm driven to solve tricky problems and build things that genuinely help people.
            </p>
        </CardContent>
      </Card>
    </section>
  );
}
