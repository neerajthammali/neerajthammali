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
              I'm a Civil Engineering student who loves to build things, both in the real world and with technology. I enjoy taking an idea and turning it into a complete project, and I'm good at getting people excited to work together. My real passion is solving tricky problems and using technology to create things that help people.
            </p>
        </CardContent>
      </Card>
    </section>
  );
}
