"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HardHat, Menu, Info, Star, Lightbulb, Mail } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinksData = [
  { href: "/about", label: "About", icon: Info },
  { href: "#skills", label: "Skills", icon: Star },
  { href: "#projects", label: "Projects", icon: Lightbulb },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = navLinksData.map(link => {
    if (pathname !== '/' && link.href.startsWith('#')) {
        return { ...link, href: `/${link.href}` };
    }
    return link;
  });

  const contactHref = '/contact';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <HardHat className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">
            NEERAJ THAMMALI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
           <Button asChild>
             <Link href={contactHref}>Get In Touch</Link>
           </Button>
           <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  A list of links to navigate the site.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col pt-6">
                <SheetClose asChild>
                  <Link href="/" className="flex items-center gap-2 mb-8 self-start">
                    <HardHat className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-semibold">
                      NEERAJ THAMMALI
                    </span>
                  </Link>
                </SheetClose>
                <nav className="flex flex-col gap-4">
                  {navLinks.map(({ href, label, icon: Icon }) => (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 flex items-center gap-2"
                      >
                        <Icon className="h-5 w-5" />
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                   <SheetClose asChild>
                      <Link
                        href={contactHref}
                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 flex items-center gap-2"
                      >
                        <Mail className="h-5 w-5" />
                        Contact
                      </Link>
                    </SheetClose>
                </nav>
                <SheetClose asChild>
                  <Button asChild className="mt-8 w-full">
                    <Link href={contactHref}>Get In Touch</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
