import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Proof-of-Work Framework",
    description: "Developed systems for professionals to validate skills through demonstrable outcomes, shifting focus from credentials to capabilities.",
    image: "https://placehold.co/600x400.png",
    hint: "framework system"
  },
  {
    title: "Talent Discovery Models",
    description: "Created methodologies for identifying skilled professionals in unorganized markets, bridging the gap between talent and opportunity.",
    image: "https://placehold.co/600x400.png",
    hint: "talent discovery"
  },
  {
    title: "SaaS Product Development",
    description: "Involved in the conceptualization and development of SaaS products, focusing on creating intuitive user interfaces and solving real-world business problems.",
    image: "https://placehold.co/600x400.png",
    hint: "saas dashboard"
  },
  {
    title: "Assignment-based Hiring",
    description: "Implemented practical, assignment-based hiring solutions for companies to assess real-world skills and reduce hiring bias.",
    image: "https://placehold.co/600x400.png",
    hint: "hiring solution"
  }
];

export function WorkSection() {
  return (
    <section id="work" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
       <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
           <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden group">
                        <div className="overflow-hidden">
                          <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={400}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              data-ai-hint={project.hint}
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </CardContent>
       </Card>
    </section>
  );
}
