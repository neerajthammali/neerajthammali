import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "ContractOS",
    description: "A SaaS product designed for small-scale contractors and builders to manage their projects efficiently.",
    image: "https://placehold.co/600x400.png",
    hint: "saas dashboard project",
    tags: ["SaaS", "Web Development", "Project Management"]
  },
  {
    title: "Manual Traffic Calculator",
    description: "A traffic engineering project for simple traffic volume calculation by differentiating vehicle types.",
    image: "https://placehold.co/600x400.png",
    hint: "traffic engineering chart",
    tags: ["Civil Engineering", "Data Analysis"]
  },
  {
    title: "Hustler's Point",
    description: "A community for entrepreneurs where I share business research, strategies, and marketing tactics.",
    image: "/hustlers-point.png",
    hint: "hustlers point",
    tags: ["Community", "Content Creation", "Business"]
  },
  {
    title: "AI Chatbot Integration",
    description: "Integrated a custom AI chatbot into a web application to improve user engagement and provide instant support.",
    image: "https://placehold.co/600x400.png",
    hint: "ai chatbot code",
    tags: ["AI", "Web Development", "Python"]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-muted/50 rounded-lg">
       <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
           <CardTitle className="font-headline text-3xl md:text-4xl font-semibold text-center">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-primary/20 hover:shadow-lg">
                        <div className="overflow-hidden">
                          <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={400}
                              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                              data-ai-hint={project.hint}
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow bg-card">
                            <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm flex-grow mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>

                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </CardContent>
       </Card>
    </section>
  );
}