import { GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education & Learning</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A foundation in engineering complemented by a passion for self-directed learning.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <GraduationCap className="w-8 h-8 text-accent" />
                    <CardTitle className="font-headline text-2xl">Formal Education</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">Pursuing a Diploma in Civil Engineering (Current).</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <BookOpen className="w-8 h-8 text-accent" />
                    <CardTitle className="font-headline text-2xl">Self-Education</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">Deeply invested in learning Digital Marketing, Personal Branding, and Content Strategy through online courses and practical application.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
