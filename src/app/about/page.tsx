import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CollaborationSection } from "@/components/sections/collaboration-section";

export const metadata: Metadata = {
  title: "About | Neeraj Thammali",
  description: "Learn more about Neeraj Thammali, a Civil Engineer and Tech Innovator from Hyderabad.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-12 md:pb-16">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
              </div>

              <div className="space-y-12">
                <div className="flex flex-col gap-2">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Hi. I'm Neeraj Thammali
                    <span className="inline-block ml-4 origin-[70%_70%] animate-wave">🤘</span>
                  </h1>
                  <Link href="https://www.linkedin.com/in/neerajthammali/" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl font-headline hover:underline underline-offset-4 w-fit">
                      @neerajthammali
                    </Link>
                </div>
                
                <div className="rounded-2xl overflow-hidden border-4 border-card shadow-lg">
                    <Image
                        src="https://placehold.co/1200x800.png"
                        alt="Neeraj Thammali"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                        data-ai-hint="portrait man"
                        />
                </div>

                <div className="space-y-6">
                  <h2 className="font-headline text-3xl font-semibold border-b pb-4">Short Bio</h2>
                  <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
                    <p>
                      I'm a product maker and civil engineer currently based in Hyderabad, India. I'm passionate about building products that help people and make a difference in the world.
                    </p>
                    <p>
                      I'm also a big fan of open source and building in public. My purpose is straightforward: I build things that create real value. Think of me as a bridge between two worlds. I use my civil engineering knowledge to design strong foundations, and my tech skills to build smart, helpful tools on top.
                    </p>
                    <p>
                      I also love educating others about technology and business strategies, which is why I'm a content creator and write on my blog, Hustler's Point, in my free time.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-semibold border-b pb-4">My Journey</h2>
                    <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
                        <p>
                            My journey began with a strong foundation in civil engineering, where I gained hands-on experience as a Site Engineer with RKJ Technology. This practical background fueled my desire to solve real-world problems.
                        </p>
                        <p>
                            Driven by a passion for technology, I ventured into the digital world. I've worked as a freelancer, creating custom solutions for clients, and dived deep into tech innovation during my internship at Scaler. This led me to build projects like ContractOS, a SaaS platform for contractors, and Hustler's Point, a community for entrepreneurs.
                        </p>
                        <p>
                            Today, I blend my engineering mindset with my tech skills, working to build products that are both robust and impactful. As a Campus Ambassador for ZUNO, I also enjoy sharing my passion and helping other students find their path.
                        </p>
                    </div>
                </div>

              </div>
            </div>
        </section>
        
        <ExperienceSection />
        <CollaborationSection />
      </main>
      <Footer />
    </div>
  );
}
