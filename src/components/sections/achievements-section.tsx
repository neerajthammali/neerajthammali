import { Award, Users, Briefcase, Calculator } from "lucide-react";

const achievements = [
  {
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    value: "Launched ContractOS",
    label: "A SaaS solution for small-scale contractors.",
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    value: "Founded Hustler's Point",
    label: "A community for entrepreneurs to share insights.",
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    value: "Diverse Freelancing",
    label: "Delivered solutions in web dev & graphic design.",
  },
  {
    icon: <Calculator className="w-8 h-8 text-accent" />,
    value: "Traffic Calculator",
    label: "Developed a tool for simple traffic volume analysis.",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Achievements</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A few highlights from my journey of building and creating.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {achievements.map((ach, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-card rounded-lg border border-border">
              {ach.icon}
              <div className="mt-4 font-headline text-3xl font-bold text-accent">{ach.value}</div>
              <p className="mt-2 text-muted-foreground max-w-[200px]">{ach.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
