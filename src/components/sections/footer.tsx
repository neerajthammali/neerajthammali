import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { href: "#", label: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
    { href: "#", label: "Fueler", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 17.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM5.5 17.5l13-13"></path><path d="M18.5 4.5l-5 5"></path><path d="M13.5 9.5l-5 5"></path></svg> },
    { href: "mailto:neeraj@example.com", label: "Email", icon: <Mail className="h-5 w-5" /> },
];

export function Footer() {
  return (
    <footer id="contact" className="w-full py-16 md:py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Let's Connect</h2>
                <p className="text-muted-foreground max-w-md">
                    Have a project in mind or want to discuss digital marketing? Feel free to reach out. I&apos;m always open to new opportunities and collaborations.
                </p>
                <div className="flex items-center gap-4">
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
