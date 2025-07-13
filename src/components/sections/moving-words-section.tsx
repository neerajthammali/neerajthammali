import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const roles = [
  "Builder",
  "AutoCAD Expert",
  "Web Developer",
  "Leader",
  "Civil Engineer",
];

export function MovingWordsSection() {
  return (
    <section className="py-8 md:py-12 bg-muted/50 border-y">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex h-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex animate-scroll items-center gap-8">
            {[...roles, ...roles].map((role, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-8 whitespace-nowrap"
                )}
              >
                <p className="font-headline text-2xl font-medium tracking-wide text-foreground/80">{role}</p>
                <Star className="h-6 w-6 text-accent fill-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
