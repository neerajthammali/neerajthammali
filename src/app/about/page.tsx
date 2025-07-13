import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

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
                    <span className="inline-block ml-4 origin-[70%_70%]">🤘</span>
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
                        data-ai-hint="person portrait"
                        />
                </div>

                <div className="space-y-6">
                  <h3 className="font-headline text-3xl font-semibold border-b pb-4">Short Bio</h3>
                  <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
                    <p>
                      I'm a product maker and civil engineer from Hyderabad, India, passionate about building products that create real value. I bridge civil engineering principles with technology to build smart, helpful tools.
                    </p>
                    <p>
                      As a believer in open source and building in public, I also enjoy educating others about technology and business on my blog, Hustler's Point.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                    <h3 className="font-headline text-3xl font-semibold border-b pb-4">My Journey</h3>
                    <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
                        <p>
                            My childhood dream was designing massive structures, which led me to civil engineering. The 2020 pandemic introduced me to coding, which felt like a superpower.
                        </p>
                        <p>
                           This newfound passion grew into side projects, freelance work in web development and design, and a deep fascination with AI. Now, I combine both worlds: using engineering for solid foundations and technology to bring ideas to life.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-headline text-3xl font-semibold border-b pb-4">Let's Connect</h3>
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
      </main>
      <Footer />
    </div>
  );
}
