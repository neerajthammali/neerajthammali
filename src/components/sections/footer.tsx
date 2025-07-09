import { Button } from "@/components/ui/button";
import { Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const socialLinks = [
    { href: "https://github.com/neerajthammali", label: "GitHub", icon: <Github className="h-5 w-5" /> },
    { href: "https://www.linkedin.com/in/neerajthammali/", label: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
    { href: "https://www.instagram.com/neerajthammali/", label: "Instagram", icon: <Instagram className="h-5 w-5" /> },
    { href: "https://contra.com/neerajthammali", label: "Contra", icon: <span className="font-bold text-sm">C</span> },
];

export function Footer() {
  return (
    <footer id="contact" className="w-full py-16 md:py-24 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-lg mx-auto text-center">
            <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                <p className="text-muted-foreground">
                    I'm currently available for freelance work and open to discussing new projects. Feel free to reach out.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <div className="flex items-center justify-center gap-4 pt-4">
                    {socialLinks.map(link => (
                        <Button key={link.label} variant="outline" size="icon" asChild>
                            <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} NEERAJ THAMMALI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
