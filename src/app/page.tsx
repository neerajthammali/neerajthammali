import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { InnovationsSection } from "@/components/sections/innovations-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { EducationSection } from "@/components/sections/education-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <InnovationsSection />
        <AchievementsSection />
        <PhilosophySection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
