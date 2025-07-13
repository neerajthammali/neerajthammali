import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import Link from "next/link";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-gradient-to-br from-primary/80 to-primary text-primary-foreground max-w-3xl mx-auto border-none">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">Join Hustler's Point</CardTitle>
            <CardDescription className="text-primary-foreground/80 text-lg">
              Get exclusive insights on tech, business, and entrepreneurship, delivered straight to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60 text-primary-foreground"
              />
              <Button type="submit" variant="secondary" size="lg" asChild>
                <Link href="https://www.linkedin.com/newsletters/hustlers-point-7233874067701841920" target="_blank" rel="noopener noreferrer">
                    Subscribe <Send className="ml-2" />
                </Link>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
