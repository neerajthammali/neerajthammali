import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "JNGPT Sultanpur",
    degree: "B.Tech in Civil Engineering",
    period: "Started in August 2025",
  },
  {
    institution: "Jawaharlal Nehru Government Polytechnic, Ramanthapur",
    degree: "Diploma in Civil Engineering",
    period: "2022 - 2025",
  },
  {
    institution: "St. Mary's ELM High School, Shadnagar",
    degree: "SSC",
    period: "Completed 2022",
  }
];

export function EducationSection() {
  return (
    <section id="education" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl font-semibold text-center">
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-w-2xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex gap-4 items-center">
                  <div className="bg-muted rounded-full p-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-xl">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
                {index < education.length - 1 && <Separator className="my-8" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
