import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Crown, Eye } from "lucide-react";

const projects = [
  {
    title: "ProjectWise",
    description: "A SaaS product designed for small-scale contractors and builders to manage their projects efficiently.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgL9zNDnGZhRy3fXRO6-W3Ep3OMxSVQQ90FG78MjnYhqKBMk8gdaYOKFMn6cX2zVIQTA38BIiVDQOhafC2plxeTMquQN-mKVtOdkAep0vxUX_bfbrz2ElwV7QbR7J3e4mydNgxehd8C3oBNq_vBKUrHjUs3Cm-cjEzHlnTUyCvSgq_QslqUR-OQOr5Q7E1Z/s600/1000805365.png",
    hint: "saas dashboard project",
    tags: ["SaaS", "Web Development", "Project Management"],
    links: {
      github: "https://github.com/neerajthammali/projectwise",
      demo: "projectwise.vercel.app",
      subscription: "/pricing"
    }
  },
  {
    title: "Manual Traffic Calculator",
    description: "A traffic engineering project for simple traffic volume calculation by differentiating vehicle types.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4M1K5N-3JxHPtDkYYhWX9_X6qDvuac9_2Ub_pTUlL9EqX1_komg0dJ2sKI9f2TcMTCHuKSggaB2x51kGxS8t0uP9AcBDmNce-fPIYZQ0MjyTfY1BYSIaQSPQWp4wjsmOscCxM52-8vD9Q25UDFDXwM8MxaAjCNCW1To5awiBlou-9FHgy4iRrTTXIwVvX/s600/1000805364.png",
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
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCoc8jQN73279mFPvYjo3IrG5FIJL-TPwc-6pw7uN9WNUugPEw9srUTjTMDbk8u3n_po8TaiHCE5SF6Eg82snZfFEQmYDgBdxLGo2wKeLpZahfcBdUj6CW63Bwrt0QtLVTstP2X5O7ME9QufxdMdFIXulN5t_pPra7y2yxnhWbJTLZu4m9d8ubnLQM4sDb/s500/1000805041.jpg",
    hint: "community branding",
    tags: ["Community", "Content Creation", "Business"],
    links: {
      subscription: "https://www.linkedin.com/newsletters/hustlers-point-7233874067701841920",
      demo: "https://www.linkedin.com/newsletters/hustlers-point-7233874067701841920"
    }
  },
  {
    title: "AI Chatbot Integration",
    description: "Integrated a custom AI chatbot into a web application to improve user engagement and provide instant support.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgND71BXZc12k6O9iZOmGj2tFpKXaND6BR9Xvf4WOxHLc9e5A8VP8jLiKTSsvaXfk2i4a2bXlghyphenhyphentdoOG6PZyhJJ2aJB6vut9uHA6mk-LRePMHL-uwzIb_jufPA2N7yBx9On5MZ1Hoj1Nzvdf-w6KoC4vaRyH99UT_20NCYWL6xER1Fj867_nEndEPfCJC5/s600/1000805366.png",
    hint: "ai chatbot code",
    tags: ["AI", "Web Development", "Python"],
    links: {
      github: "https://github.com/neerajthammali",
      demo: "https://buildersbunker.vercel.app/"
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
