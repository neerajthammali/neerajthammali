import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CollaborationSection() {
  return (
    <section id="collaboration" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-background to-primary/10 p-1 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
            <div className="rounded-xl bg-card p-8 md:p-12 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                    Interested in Collaborating?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Let's build something amazing together.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">
                            Get In Touch <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
