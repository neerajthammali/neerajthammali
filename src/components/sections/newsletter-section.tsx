import { Button } from "@/components/ui/button";
import { Send, TrendingUp } from "lucide-react";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-background to-primary/10 p-1 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
            <div className="rounded-xl bg-card p-8 md:p-12 text-center">
                <div className="space-y-4 max-w-2xl mx-auto">
                    <div className="inline-block rounded-lg bg-primary/10 p-3">
                        <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        Join Hustler's Point
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        Get exclusive business research, strategies, and marketing tactics delivered to your inbox. Level up your hustle.
                    </p>
                </div>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <a href="https://www.linkedin.com/newsletters/hustlers-point-7233874067701841920" target="_blank" rel="noopener noreferrer">
                            Subscribe on LinkedIn <Send className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">No spam. Unsubscribe anytime.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
