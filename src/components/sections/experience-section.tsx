import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const experiences = [
  {
    role: "Founder",
    company: "Hustler's Point",
    period: "2022 - Present",
    description: "Led a digital platform to empower entrepreneurs, designing and implementing marketing strategies and building a vibrant community.",
    logo: "https://placehold.co/52x52.png",
    logoHint: "logo letter H"
  },
  {
    role: "Content Creator",
    company: "Self-employed",
    period: "2021 - Present",
    description: "Developed and published technical content on growth hacking and digital marketing frameworks, reaching over 63,700 professionals on platforms like Fueler.",
    logo: "https://placehold.co/52x52.png",
    logoHint: "logo letter N"
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex gap-6">
                  <Image 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    width={52} 
                    height={52} 
                    className="rounded-md"
                    data-ai-hint={exp.logoHint}
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-xl">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
                <p className="mt-4 ml-[76px] text-foreground/80">{exp.description}</p>
                {index < experiences.length - 1 && <Separator className="my-8" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
