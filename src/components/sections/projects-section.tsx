import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Crown, Eye } from "lucide-react";

const projects = [
  {
    title: "ContractOS",
    description: "A SaaS product designed for small-scale contractors and builders to manage their projects efficiently.",
    image: "https://placehold.co/600x400.png",
    hint: "saas dashboard project",
    tags: ["SaaS", "Web Development", "Project Management"],
    links: {
      github: "https://github.com/neerajthammali",
      demo: "#",
      subscription: "/pricing"
    }
  },
  {
    title: "Manual Traffic Calculator",
    description: "A traffic engineering project for simple traffic volume calculation by differentiating vehicle types.",
    image: "https://placehold.co/600x400.png",
    hint: "traffic engineering chart",
    tags: ["Civil Engineering", "Data Analysis"],
    links: {
      github: "https://github.com/neerajthammali",
      view: "#"
    }
  },
  {
    title: "Hustler's Point",
    description: "A community for entrepreneurs where I share business research, strategies, and marketing tactics.",
    image: "https://placehold.co/600x400.png",
    hint: "community branding",
    tags: ["Community", "Content Creation", "Business"],
    links: {
      subscription: "#",
      demo: "#"
    }
  },
  {
    title: "AI Chatbot Integration",
    description: "Integrated a custom AI chatbot into a web application to improve user engagement and provide instant support.",
    image: "https://placehold.co/600x400.png",
    hint: "ai chatbot code",
    tags: ["AI", "Web Development", "Python"],
    links: {
      github: "https://github.com/neerajthammali",
      demo: "#"
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-muted/50 rounded-lg">
       <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
           <CardTitle className="font-headline text-4xl md:text-5xl font-bold text-center">
            Some{' '}
            <span className="animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[200%_auto] bg-clip-text text-transparent">
              cool stuff
            </span>{' '}
            I've built
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
                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/20">
                                {project.links?.github && project.links.github !== "#" && (
                                    <Button asChild variant="outline" size="sm">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <Github /> GitHub
                                        </a>
                                    </Button>
                                )}
                                {project.links?.view && project.links.view !== "#" && (
                                    <Button asChild variant="outline" size="sm">
                                        <a href={project.links.view} target="_blank" rel="noopener noreferrer">
                                            <Eye /> View
                                        </a>
                                    </Button>
                                )}
                                {project.links?.demo && project.links.demo !== "#" && (
                                    <Button asChild variant="outline" size="sm">
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink /> Demo
                                        </a>
                                    </Button>
                                )}
                                {project.links.subscription && project.links.subscription !== "#" && project.title === 'ContractOS' ? (
                                    <Button asChild variant="outline" size="sm">
                                        <Link href={project.links.subscription}>
                                            <Crown /> View Plans
                                        </Link>
                                    </Button>
                                ) : project.links.subscription && project.links.subscription !== "#" && (
                                     <Button asChild variant="outline" size="sm">
                                        <a href={project.links.subscription} target="_blank" rel="noopener noreferrer">
                                            <Crown /> View / Subscribe
                                        </a>
                                    </Button>
                                )}
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
