import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CollaborationSection() {
  return (
    <section id="collaboration" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            I'm always excited to hear about new ideas and opportunities. Whether you have a question, a proposal, or just want to say hello, feel free to reach out. Let's build something great together.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">
                    Let's Collaborate <ArrowRight className="ml-2" />
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
