import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { MovingWordsSection } from "@/components/sections/moving-words-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsFrameworkSection } from "@/components/sections/skills-framework-section";
import { Footer } from "@/components/sections/footer";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CollaborationSection } from "@/components/sections/collaboration-section";
import { AchievementsSection } from "@/components/sections/achievements-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MovingWordsSection />
        <AboutSection />
        <SkillsFrameworkSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <TestimonialsSection />
        <EducationSection />
        <NewsletterSection />
        <CollaborationSection />
      </main>
      <Footer />
    </div>
  );
}
