import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    title: "Founder of ContractOS & Smart Invoice Generator",
    description: "Designed and built two SaaS products from the ground up to solve real-world problems for civil engineers and contractors.",
    color: "bg-[hsl(var(--card-1))]",
    borderColor: "border-[hsl(var(--chart-1))]/50",
  },
  {
    title: "Community Builder at Hustler's Point",
    description: "Grew a newsletter and online community for aspiring entrepreneurs, fostering collaboration and knowledge sharing.",
    color: "bg-[hsl(var(--card-2))]",
    borderColor: "border-[hsl(var(--chart-2))]/50",
  },
  {
    title: "Top-Rated Freelancer",
    description: "Successfully delivered dozens of projects in design, web development, and content creation with high client satisfaction.",
    color: "bg-[hsl(var(--card-3))]",
    borderColor: "border-[hsl(var(--chart-3))]/50",
  },
  {
    title: "Scaler's Young Innovator",
    description: "Recognized for innovative project work and problem-solving skills during the YIIC 2.0 internship challenge.",
    color: "bg-[hsl(var(--card-4))]",
    borderColor: "border-[hsl(var(--chart-4))]/50",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold">
          Key Achievements
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto pt-2">
          A few milestones from my journey as a builder and innovator.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {achievements.map((achievement) => (
          <Card key={achievement.title} className={cn("transition-all duration-300 hover:shadow-lg hover:-translate-y-1", achievement.color, achievement.borderColor)}>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Award className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg font-semibold">{achievement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
