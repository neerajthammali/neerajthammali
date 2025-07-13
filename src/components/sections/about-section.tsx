import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="text-center">
           <CardTitle className="font-headline text-3xl md:text-4xl font-semibold">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I love to build things that matter. You could say I have a foot in two different worlds: one in the solid ground of civil engineering, where I design strong foundations, and the other in the fast-paced world of technology, where I build smart, helpful tools. Whether I'm working with concrete or code, my goal is always the same: to solve real problems and create things that make a tangible difference.
              </p>
              <div>
                <Button asChild>
                    <Link href="/about">
                        Know more about me <ArrowRight className="ml-2" />
                    </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
