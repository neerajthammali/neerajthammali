import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const education = [
  {
    institution: "Government Polytechnic College",
    degree: "Diploma in Civil Engineering",
    period: "2021 - 2024",
    description: "Focused on structural analysis, construction planning, and sustainable engineering practices, while concurrently developing a strong foundation in digital marketing and web technologies through self-study.",
    logo: "https://placehold.co/52x52.png",
    logoHint: "logo building"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex gap-6">
                  <Image 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`} 
                    width={52} 
                    height={52} 
                    className="rounded-md"
                    data-ai-hint={edu.logoHint}
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-xl">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
                <p className="mt-4 ml-[76px] text-foreground/80">{edu.description}</p>
                {index < education.length - 1 && <Separator className="my-8" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
