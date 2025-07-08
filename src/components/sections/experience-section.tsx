import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const experiences = [
  {
    role: "Campus Ambassador",
    company: "ZUNO by foundit",
    period: "Present",
    description: "Representing ZUNO on campus, organizing events, and promoting the platform to students.",
    logo: "https://placehold.co/52x52.png",
    logoHint: "logo letter Z"
  },
  {
    role: "Site Engineer / CAD Technician",
    company: "RKJ Technology Pvt Ltd",
    period: "6 Months",
    description: "Gained hands-on experience in site engineering, AutoCAD drafting, and Revit modeling.",
    logo: "https://placehold.co/52x52.png",
    logoHint: "logo letter R"
  },
  {
    role: "Internship Challenge Participant",
    company: "Scaler School of Technology - YIIC 2.0",
    period: "3 Months",
    description: "Participated in a 3-month intensive internship challenge, developing skills in technology and project work.",
    logo: "https://placehold.co/52x52.png",
    logoHint: "logo letter S"
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl font-semibold text-center">
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-border -z-10" />
            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={exp.company} className="relative flex items-start gap-6">
                   <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-background">
                     <Image 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      width={40} 
                      height={40} 
                      className="rounded-full border"
                      data-ai-hint={exp.logoHint}
                    />
                   </div>
                  <div className="pl-16">
                    <h3 className="font-semibold text-xl">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="mt-2 text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
