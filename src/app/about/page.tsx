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
                            Ever since I was a kid, I dreamt of designing huge, amazing buildings. That’s why I dove into civil engineering—to learn the secrets of creating things that last a lifetime.
                        </p>
                        <p>
                            Then, the 2020 pandemic hit. The world went online, and I discovered a new kind of magic: coding. Being able to build something out of thin air with just a few lines of text felt like a superpower! This exciting new world led me to create content, write stories, and edit videos.
                        </p>
                        <p>
                           My curiosity quickly grew into side projects and freelance work. I started designing graphics and building websites. Recently, I've been fascinated by AI. Playing with all the new AI tools is like having a super-smart friend to help me invent things, and it's my favorite part of the day.
                        </p>
                         <p>
                           After five years, I’ve found my true path. I don’t have to choose between my childhood dream and my new hobbies. I get to do both! I use my engineering skills to lay a solid foundation, and then bring it to life with technology to create smart tools that help everyone.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                  <h2 className="font-headline text-3xl font-semibold border-b pb-4">Let's Connect</h2>
                  <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
                    <p>
                      I'm excited to connect with others via <a href="mailto:neerajtammali2021@gmail.com" className="text-primary hover:underline">email</a> and on <a href="https://www.linkedin.com/in/neerajthammali/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a> to chat about projects and ideas.
                    </p>
                    <p>
                      Currently, I'm open to discussing freelance projects and potential opportunities. If it's a good fit, I'd love to collaborate. I'm always looking to be part of something great.
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
