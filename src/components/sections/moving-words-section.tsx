import { Star } from "lucide-react";

const words = [
  "Civil Engineer",
  "Tech Innovator",
  "Problem Solver",
  "SaaS Developer",
  "Project Manager",
  "Creative Thinker",
  "Builder",
  "AutoCAD Expert",
  "Web Developer",
  "Leader",
];

const MarqueeContent = () => (
    <>
        {words.map((word, index) => (
            <div key={index} className="flex items-center mx-6 shrink-0">
                <span className="font-headline text-2xl font-semibold text-foreground/80">{word}</span>
                <Star className="ml-4 h-5 w-5 text-accent fill-accent" />
            </div>
        ))}
    </>
);

export function MovingWordsSection() {
  return (
    <section className="w-full py-6 bg-muted/50 overflow-x-hidden">
      <div className="flex">
        <div className="flex shrink-0 animate-marquee items-center">
            <MarqueeContent />
        </div>
        <div className="flex shrink-0 animate-marquee items-center" aria-hidden="true">
            <MarqueeContent />
        </div>
      </div>
    </section>
  );
}
