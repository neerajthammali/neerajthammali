import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, TrendingUp } from "lucide-react";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/10 via-background to-red-900/10 p-1 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20">
            <div className="rounded-xl bg-card p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-red-900/10 p-3">
                            <TrendingUp className="h-6 w-6 text-red-800" />
                        </div>
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                            Join Hustler's Point
                        </h2>
                        <p className="text-muted-foreground md:text-lg">
                            Get exclusive business research, strategies, and marketing tactics delivered to your inbox. Level up your hustle.
                        </p>
                    </div>
                    <div className="w-full">
                         <form className="flex flex-col sm:flex-row items-center gap-4">
                            <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow bg-background/50"
                            aria-label="Email for newsletter"
                            />
                            <Button type="submit" size="lg" className="w-full sm:w-auto bg-red-800 hover:bg-red-900 text-primary-foreground">
                            Subscribe <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                        <p className="text-xs text-muted-foreground mt-3">No spam. Unsubscribe anytime.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
