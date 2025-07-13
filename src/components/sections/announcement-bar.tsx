import Link from 'next/link';
import { ArrowRight, Megaphone } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground z-50 relative">
      <div className="container mx-auto px-4 md:px-6 py-2.5 text-center text-sm">
        <Link href="/contact" className="inline-flex items-center gap-2 group hover:underline decoration-wavy underline-offset-4">
          <Megaphone className="h-5 w-5 animate-pulse" />
          <span className="font-medium">Now accepting new projects!</span>
          <span className="hidden sm:inline">Have an idea? Let's collaborate.</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
