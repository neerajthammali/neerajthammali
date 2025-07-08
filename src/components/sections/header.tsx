"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HardHat, Menu, Info } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const navLinksData = [
  { href: "/about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
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
    // If we're not on the homepage, and the link is an anchor, prepend it with '/'
    if (pathname !== '/' && link.href.startsWith('#')) {
        return { ...link, href: `/${link.href}` };
    }
    return link;
  });

  const contactHref = pathname === '/' ? '#contact' : '/#contact';

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1.5"
            >
              {link.label === 'About' && <Info className="h-4 w-4" />}
              {link.label}
            </Link>
          ))}
           <Button asChild>
             <a href={contactHref}>Get In Touch</a>
           </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
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
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 flex items-center gap-2"
                      >
                         {link.label === "About" && <Info className="h-5 w-5" />}
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <Button asChild className="mt-8 w-full">
                    <a href={contactHref}>Get In Touch</a>
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
