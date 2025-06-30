import { Briefcase } from "lucide-react";

export function ExperienceSection() {
    const experiences = [
        {
          title: "Founder, Hustler's Point",
          description: "Founded an initiative to help entrepreneurs succeed online through digital marketing strategies and personal branding guidance.",
        },
        {
          title: "Content Creator",
          description: "Regularly publish actionable content on digital marketing frameworks and growth hacking techniques to empower professionals.",
        },
      ];

  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            My journey in digital marketing and entrepreneurship.
          </p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-border ml-3"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 mb-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-accent" />
              </div>
              <h3 className="font-headline text-xl font-semibold">{exp.title}</h3>
              <p className="mt-1 text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
