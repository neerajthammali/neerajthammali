import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Join Hustler's Point
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Get exclusive business research, strategies, and marketing tactics delivered to your inbox.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-background"
              aria-label="Email for newsletter"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
