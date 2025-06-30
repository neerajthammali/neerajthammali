import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, HardHat, TerminalSquare, GraduationCap, Quote } from "lucide-react";

const expertise = ["Digital Marketing", "Personal Branding", "Content Strategy", "Community Building", "Growth Hacking", "Entrepreneurship"];
const softwareSkills = ["SEO/SEM Tools", "Social Media Management", "Web Analytics", "Next.js", "React", "Genkit", "Tailwind CSS"];
const civilSkills = ["AutoCAD", "Structural Analysis", "Construction Planning", "Surveying Principles"];

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A blend of digital marketing savvy, engineering principles, and a passion for building things.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-5 max-w-6xl mx-auto">
          <div className="lg:col-span-3 space-y-8">
            <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <BrainCircuit className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-2xl">Core Expertise</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {expertise.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3">{skill}</Badge>)}
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <TerminalSquare className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-2xl">Software & Tools</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {softwareSkills.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3">{skill}</Badge>)}
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <HardHat className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-2xl">Civil Engineering Skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {civilSkills.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3">{skill}</Badge>)}
                </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2 space-y-8">
              <Card className="h-full flex flex-col">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline text-2xl">Education</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Pursuing a Diploma in Civil Engineering, complemented by continuous self-education in digital marketing and software development.</p>
                </CardContent>
              </Card>
               <Card className="h-full flex flex-col">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Quote className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline text-2xl">Philosophy</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <blockquote className="italic text-muted-foreground">
                    "People don't pay for products – they pay for outcomes. Validated proof-of-work is the ultimate career accelerator."
                    </blockquote>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
