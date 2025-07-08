import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Send, Github, Instagram, Mail, Phone } from "lucide-react";

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
        <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                <p className="text-muted-foreground max-w-md">
                    I'm currently available for freelance work and open to discussing new projects. Feel free to reach out to me.
                </p>
                <div className="space-y-4">
                  <a href="mailto:neerajtammali2021@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>neerajtammali2021@gmail.com</span>
                  </a>
                   <a href="tel:9948075736" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <Phone className="h-5 w-5" />
                    <span>+91 99480 75736</span>
                  </a>
                </div>
                <div className="flex items-center gap-4 pt-4">
                    {socialLinks.map(link => (
                        <Button key={link.label} variant="outline" size="icon" asChild>
                            <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
            <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" type="text" className="bg-background"/>
                    <Input placeholder="Your Email" type="email" className="bg-background"/>
                </div>
                <Textarea placeholder="Your Message" rows={4} className="bg-background"/>
                <Button type="submit" className="w-full gap-2">
                    Send Message <Send className="h-4 w-4" />
                </Button>
            </form>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Neeraj Tammali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
