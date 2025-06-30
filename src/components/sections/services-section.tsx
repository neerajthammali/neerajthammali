import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Code, UserSquare } from "lucide-react";

const services = [
  {
    icon: <Megaphone className="w-8 h-8 text-accent" />,
    title: "Digital Marketing & Strategy",
    description: "Crafting and executing data-driven marketing strategies to build brand presence, engage communities, and drive growth."
  },
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: "SaaS & Web Products",
    description: "Developing and conceptualizing SaaS products and web applications with a focus on user-centric design and scalable architecture."
  },
  {
    icon: <UserSquare className="w-8 h-8 text-accent" />,
    title: "Personal Branding",
    description: "Helping individuals and entrepreneurs build a strong, authentic personal brand to accelerate their career and business goals."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
       <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
           <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
            Services
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden group bg-card">
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                            <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </CardContent>
       </Card>
    </section>
  );
}
