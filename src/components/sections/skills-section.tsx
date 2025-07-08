import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
    {
        title: "Core Branch Skills",
        skills: ["AutoCAD", "Site Engineer", "Project Management", "Revit", "Surveying", "GPS"]
    },
    {
        title: "Computer Skills",
        skills: ["Web Development", "SaaS Products Development", "HTML", "CSS", "React", "Python", "n8n", "Deployment", "Testing"]
    },
    {
        title: "Professional Skills",
        skills: ["Deep Research", "Fluent Communication", "Content Writing", "Video Editing", "Content Creation", "Blogging", "Leadership", "Logic Solving", "Aptitude"]
    }
]

export function SkillsSection() {
    return (
        <section id="skills" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <Card className="border-none shadow-none bg-transparent">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl md:text-4xl font-semibold text-center">
                        My Skills
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-12">
                    {skillCategories.map((category, index) => (
                       <div key={category.title}>
                            <h3 className="font-semibold text-xl mb-4 text-center md:text-left">{category.title}</h3>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                {category.skills.map(skill => (
                                    <Badge key={skill} variant="outline" className="text-base py-2 px-4 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent">{skill}</Badge>
                                ))}
                            </div>
                            {index < skillCategories.length - 1 && <Separator className="my-12" />}
                       </div>
                    ))}
                </CardContent>
            </Card>
        </section>
    )
}