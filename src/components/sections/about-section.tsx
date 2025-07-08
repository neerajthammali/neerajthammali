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
                I am a Civil Engineering student with a deep-seated passion for technology and innovation, driven to merge foundational principles with modern digital solutions. I excel at developing comprehensive SaaS products, managing projects from concept to deployment, and building vibrant communities around shared goals. My primary interest lies in tackling complex challenges through deep research, exploring new business strategies, and leveraging technology to create lasting impact.
            </p>
        </CardContent>
      </Card>
    </section>
  );
}
