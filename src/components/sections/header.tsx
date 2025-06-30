"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#innovations", label: "Innovations" },
  { href: "#achievements", label: "Achievements" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <Code className="h-6 w-6 text-accent" />
          <span className="font-headline text-lg font-semibold">
            Neeraj Tammali
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild>
          <a href="#contact">Connect with Me</a>
        </Button>
      </div>
    </header>
  );
}
