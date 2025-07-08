import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { Footer } from "@/components/sections/footer";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { CollaborationSection } from "@/components/sections/collaboration-section";
import { MovingWordsSection } from "@/components/sections/moving-words-section";
import { AssetsSection } from "@/components/sections/assets-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { InnovationsSection } from "@/components/sections/innovations-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PhilosophySection />
        <AboutSection />
        <MovingWordsSection />
        <ServicesSection />
        <SkillsSection />
        <ToolsSection />
        <ExperienceSection />
        <ProjectsSection />
        <InnovationsSection />
        <AchievementsSection />
        <AssetsSection />
        <EducationSection />
      </main>
      <NewsletterSection />
      <CollaborationSection />
      <Footer />
    </div>
  );
}
