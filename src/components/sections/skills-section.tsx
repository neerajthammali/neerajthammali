import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const coreCompetencies = ["Digital Marketing", "Personal Branding", "Entrepreneur Mentorship", "Content Creation"];
const technicalSkills = ["SEO/SEM Strategies", "Content Writing", "Portfolio Optimization", "Social Media Marketing"];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A blend of strategic marketing knowledge and technical expertise.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Core Competencies</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {coreCompetencies.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{skill}</Badge>)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {technicalSkills.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{skill}</Badge>)}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
