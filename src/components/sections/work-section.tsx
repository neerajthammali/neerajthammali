import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, FileCheck } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


const projects = [
  {
    icon: <FileCheck className="w-8 h-8 text-primary" />,
    title: "Proof-of-Work Framework",
    description: "Developed systems for professionals to validate skills through demonstrable outcomes, shifting focus from credentials to capabilities.",
    image: "https://placehold.co/600x400.png",
    hint: "framework system"
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Talent Discovery Models",
    description: "Created methodologies for identifying skilled professionals in unorganized markets, bridging the gap between talent and opportunity.",
    image: "https://placehold.co/600x400.png",
    hint: "talent discovery"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Assignment-based Hiring",
    description: "Implemented practical, assignment-based hiring solutions for companies to assess real-world skills and reduce hiring bias.",
    image: "https://placehold.co/600x400.png",
    hint: "hiring solution"
  }
];

export function WorkSection() {
  return (
    <section id="work" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A selection of projects that showcase my passion for building systems.
          </p>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {projects.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden bg-card">
                    <div className="grid md:grid-cols-2 items-center">
                      <div className="h-64 md:h-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                          data-ai-hint={item.hint}
                        />
                      </div>
                      <CardContent className="p-6 md:p-8 space-y-4">
                        <div className="inline-block bg-muted p-3 rounded-lg">{item.icon}</div>
                        <CardTitle className="font-headline text-2xl mt-4">{item.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">{item.description}</CardDescription>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-[-50px]" />
          <CarouselNext className="hidden sm:flex right-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
}
