import { Award, Users, Briefcase } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    value: "63,700+",
    label: "Professionals Reached",
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    value: "Verified Portfolios",
    label: "Established a system for career advancement",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    value: "Hiring Solutions",
    label: "Implemented assignment-based hiring for companies",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Achievements</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Driving impact through community building and innovative systems.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {achievements.map((ach, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-card rounded-lg border border-border">
              {ach.icon}
              <div className="mt-4 font-headline text-4xl font-bold text-accent">{ach.value}</div>
              <p className="mt-2 text-muted-foreground max-w-[200px]">{ach.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-20">
            <h3 className="text-center font-headline text-2xl font-semibold mb-8">Trusted By & Featured On</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale">
                <Image src="https://placehold.co/120x60.png" alt="Fueler Logo" width={120} height={60} className="opacity-70 hover:opacity-100 transition-opacity hover:grayscale-0" data-ai-hint="logo brand"/>
            </div>
        </div>
      </div>
    </section>
  );
}
