import { HardHat, Code, Palette, Bot, BrainCircuit } from 'lucide-react';
import { SkillCard } from '@/components/skill-card';
import Image from 'next/image';

const skills = [
  {
    icon: <HardHat className="w-8 h-8" />,
    title: 'My Core Civil Engineering Skills',
    description: [
      'Site Execution',
      'Project Planning',
      'AutoCAD',
      'Revit',
      'Surveying',
      'Project Management',
    ],
    quote: 'I build on solid foundations, both in the field and in my projects.'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'My Coding & Development Toolkit',
    description: [
      'Python',
      'React',
      'SaaS Development',
      'n8n Automation',
      'Firebase',
      'Vercel',
    ],
    quote: 'From lagging Excel sheets to live dashboards — I build better systems.'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'My Design & Content Stack',
    description: [
      'Canva',
      'Photoshop',
      'DaVinci Resolve',
      'Video Editing',
      'Blogging',
      'Content Creation',
    ],
    quote: 'An idea is only as powerful as its clarity.'
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'My Automation & Growth Tools',
    description: [
      'n8n',
      'ChatGPT',
      'Meta Ads',
      'SEMrush',
      'Gumroad',
      'Webflow',
    ],
    quote: 'What takes others 3 tools, I automate in 1.'
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: 'My Leadership & Soft Skills',
    description: [
      'Team Management',
      'Problem Solving',
      'Fluent Communication',
      'Negotiation',
      'Deep Research',
    ],
    quote: 'Tools matter. But mindset moves mountains.'
  },
];

export function SkillsFrameworkSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Expertise
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            My skills are a toolkit for turning ideas into reality. I combine engineering precision with technical creativity to build things that last.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
            ))}
        </div>
      </div>
    </section>
  );
}
