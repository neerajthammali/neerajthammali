import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, FileCheck } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


const innovations = [
  {
    icon: <FileCheck className="w-8 h-8 text-accent" />,
    title: "Proof-of-Work Framework",
    description: "Developed systems for professionals to validate skills through demonstrable outcomes, shifting focus from credentials to capabilities.",
    image: "https://placehold.co/600x400.png",
    hint: "framework system"
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Talent Discovery Models",
    description: "Created methodologies for identifying skilled professionals in unorganized markets, bridging the gap between talent and opportunity.",
    image: "https://placehold.co/600x400.png",
    hint: "talent discovery"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: "Assignment-based Hiring",
    description: "Implemented practical, assignment-based hiring solutions for companies to assess real-world skills and reduce hiring bias.",
    image: "https://placehold.co/600x400.png",
    hint: "hiring solution"
  }
];

export function InnovationsSection() {
  return (
    <section id="innovations" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Innovations & Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Creating systems that redefine professional growth and talent acquisition.
          </p>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {innovations.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden bg-background">
                    <div className="grid md:grid-cols-2 items-center">
                      <CardContent className="p-6 md:p-8 space-y-4">
                        <div className="inline-block bg-muted p-3 rounded-lg">{item.icon}</div>
                        <CardTitle className="font-headline text-2xl mt-4">{item.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">{item.description}</CardDescription>
                      </CardContent>
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
