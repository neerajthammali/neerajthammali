import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
    {
        title: "Digital Marketing & Strategy",
        skills: ["Content Strategy", "Community Building", "Growth Hacking", "Personal Branding", "SEO/SEM", "Social Media Management"]
    },
    {
        title: "Development & Tools",
        skills: ["Next.js", "React", "Genkit", "Tailwind CSS", "Web Analytics", "Firebase"]
    },
    {
        title: "Civil Engineering",
        skills: ["AutoCAD", "Structural Analysis", "Construction Planning", "Surveying Principles"]
    }
]

export function SkillsSection() {
    return (
        <section id="skills" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <Card className="border-none shadow-none bg-transparent">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
                        Skills
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {skillCategories.map((category, index) => (
                           <div key={category.title}>
                                <h3 className="font-semibold text-xl mb-4">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => (
                                        <Badge key={skill} variant="secondary" className="text-base py-1 px-3">{skill}</Badge>
                                    ))}
                                </div>
                                {index < skillCategories.length - 1 && <Separator className="my-8" />}
                           </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
