import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
           <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
             My purpose is straightforward: I build things that create real value. Think of me as a bridge between two worlds. I use my civil engineering knowledge to design strong foundations, and my tech skills to build smart, helpful tools on top. Whether it's a physical structure or a digital product, I'm passionate about solving problems and creating tangible outcomes that make a difference.
            </p>
            <div>
              <Button asChild>
                  <Link href="/about">
                      Know more about me <ArrowRight className="ml-2" />
                  </Link>
              </Button>
            </div>
        </CardContent>
      </Card>
    </section>
  );
}
