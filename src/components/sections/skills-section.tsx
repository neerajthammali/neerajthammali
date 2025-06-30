import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, HardHat, TerminalSquare } from "lucide-react";

const expertise = ["Digital Marketing", "Personal Branding", "Content Strategy", "Community Building", "Growth Hacking", "Entrepreneurship"];
const civilSkills = ["AutoCAD", "Structural Analysis", "Construction Planning", "Surveying Principles"];
const softwareSkills = ["SEO/SEM Tools", "Social Media Management", "Web Analytics", "Next.js", "React"];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A unique combination of digital marketing savvy and foundational engineering knowledge.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <BrainCircuit className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline text-2xl">Key Expertise</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 flex-grow">
              {expertise.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{skill}</Badge>)}
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <HardHat className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline text-2xl">Civil Engineering</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 flex-grow">
              {civilSkills.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{skill}</Badge>)}
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
                <TerminalSquare className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline text-2xl">Software & Tools</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 flex-grow">
              {softwareSkills.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{skill}</Badge>)}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
