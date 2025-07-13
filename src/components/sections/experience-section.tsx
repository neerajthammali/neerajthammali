import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FreelanceIcon = () => (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
        <span className="font-bold text-xl text-primary">F</span>
    </div>
);

const ZunoIcon = () => (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
        <span className="font-bold text-xl text-primary">Z</span>
    </div>
);
const RkjIcon = () => (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
        <span className="font-bold text-xl text-primary">R</span>
    </div>
);
const ScalerIcon = () => (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
        <span className="font-bold text-xl text-primary">S</span>
    </div>
);


const experiences = [
  {
    role: "Freelancer",
    company: "Self-employed",
    period: "Ongoing",
    description: "Delivered freelance services in graphic design, home planning, Amazon KDP, and digital product creation, providing custom solutions to diverse clients.",
    icon: <FreelanceIcon />
  },
  {
    role: "Campus Ambassador",
    company: "ZUNO by foundit",
    period: "Present",
    description: "Representing ZUNO on campus, organizing events, and promoting the platform to students.",
    icon: <ZunoIcon />
  },
  {
    role: "Site Engineer / CAD Technician",
    company: "RKJ Technology Pvt Ltd",
    period: "6 Months",
    description: "Gained hands-on experience in site engineering, AutoCAD drafting, and Revit modeling.",
    icon: <RkjIcon />
  },
  {
    role: "Young Innnovator internship",
    company: "Scaler School of Technology - YIIC 2.0",
    period: "3 Months",
    description: "Participated in a 3-month intensive internship challenge, developing skills in technology and project work.",
    icon: <ScalerIcon />
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl font-semibold text-center">
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-border" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-6 group">
                   <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-background rounded-full ring-4 ring-background transition-all duration-300 group-hover:ring-primary/20 z-10">
                     {exp.icon}
                   </div>
                  <div className="pl-16">
                    <h3 className="font-semibold text-xl">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="mt-2 text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
