import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Github, ExternalLink, FileText, BarChart, Users, Send } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "ContractOS – Construction Project Management Tool",
    quote: "Managing construction shouldn’t feel like managing chaos.",
    description: "A custom-built platform for small builders and contractors to track daily work progress, team assignments, expenses, and site scheduling.",
    tools: ["React", "Supabase", "n8n", "Firebase"],
    impact: "Used by 2+ real builders for internal project tracking.",
    links: {
      demo: "#"
    },
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Smart Invoice Generator",
    quote: "Engineers waste hours making invoices. I automated it.",
    description: "A tool that lets engineers auto-generate clean, professional invoices for site work, vendors, and contractors by simply uploading data.",
    tools: ["Python", "Streamlit", "Webflow", "HTML"],
    impact: "Saved 3+ hours/week in invoice prep for local civil works.",
    links: {
      demo: "#",
      github: "#"
    },
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Manual Traffic Data Analysis",
    quote: "Numbers can guide roads. I learned that first-hand.",
    description: "A hands-on traffic count and analysis project, calculating peak hour flows, PCU, and demand vs. capacity to optimize signal timings.",
    tools: ["Excel", "Manual Survey", "Visual Charts"],
    impact: "Helped in optimizing signal timings for a local junction.",
    links: {
      report: "#"
    },
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Hustler's Point – Entrepreneur Community",
    quote: "Connecting and empowering the next generation of builders.",
    description: "Founded and grew a community for entrepreneurs to share ideas, collaborate on projects, and access exclusive content on business and technology.",
    tools: ["Community Building", "Content Creation", "Blogging"],
    impact: "Grew a newsletter and community for fellow entrepreneurs.",
    links: {
      discord: "#",
      newsletter: "https://www.linkedin.com/newsletters/hustlers-point-7233874067701841920"
    },
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
       <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="text-center">
           <CardTitle className="font-headline text-4xl md:text-5xl font-bold">
            Some Cool Stuff I've Made
          </CardTitle>
          <p className="text-muted-foreground max-w-2xl mx-auto pt-2">
            Here's a look at some of the problems I've enjoyed solving.
          </p>
        </CardHeader>
        <CardContent>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col overflow-hidden group transition-all duration-300 border-border/20 hover:border-accent bg-gradient-to-br from-muted/50 to-card/50 hover:shadow-2xl hover:shadow-accent/10">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    {project.icon}
                                </div>
                                <h3 className="font-headline text-xl font-semibold">{project.title}</h3>
                            </div>
                            <blockquote className="mt-4 pl-4 border-l-2 border-accent italic text-muted-foreground">
                              {project.quote}
                            </blockquote>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow p-6 pt-0">
                            <p className="text-sm text-foreground/80 flex-grow mb-4">{project.description}</p>
                            
                            <div className="mb-4">
                                <h4 className="font-semibold text-sm mb-2">Tools Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map(tag => (
                                        <div key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">{tag}</div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-sm mb-2">Impact:</h4>
                                <p className="text-sm text-foreground/80">{project.impact}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/20">
                                {project.links?.demo && (
                                    <Button asChild size="sm" className="w-full sm:w-auto">
                                        <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink /> View Demo
                                        </Link>
                                    </Button>
                                )}
                                {project.links?.github && (
                                    <Button asChild size="sm" variant="secondary" className="w-full sm:w-auto">
                                        <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <Github /> GitHub
                                        </Link>
                                    </Button>
                                )}
                                {project.links?.report && (
                                    <Button asChild size="sm" className="w-full sm:w-auto">
                                        <Link href={project.links.report} target="_blank" rel="noopener noreferrer">
                                            <FileText /> Read Report
                                        </Link>
                                    </Button>
                                )}
                                {project.links?.discord && (
                                    <Button asChild size="sm" className="w-full sm:w-auto">
                                        <Link href={project.links.discord} target="_blank" rel="noopener noreferrer">
                                            <Users /> Join Discord
                                        </Link>
                                    </Button>
                                )}
                                {project.links?.newsletter && (
                                    <Button asChild size="sm" variant="outline" className="w-full sm:w-auto">
                                        <Link href={project.links.newsletter} target="_blank" rel="noopener noreferrer">
                                            <Send /> Newsletter
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </CardContent>
       </Card>
    </section>
  );
}
