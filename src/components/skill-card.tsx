import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  quote: string;
  className?: string;
}

export function SkillCard({ icon, title, description, quote, className }: SkillCardProps) {
  return (
    <Card className={cn("flex flex-col overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-primary/20 hover:shadow-lg", className)}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary p-3 rounded-lg">{icon}</div>
          <CardTitle className="font-headline text-xl">{title}</CardTitle>
        </div>
        <blockquote className="mt-4 pl-4 border-l-2 border-accent italic text-muted-foreground/50">
          {quote}
        </blockquote>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="space-y-3">
          {description.map((skill, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="h-0.5 w-4 bg-accent"></span>
              <span className="text-foreground/90">{skill}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
