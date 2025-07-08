import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CanvaIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="url(#canva-grad)" />
    <path d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <radialGradient id="canva-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 4) rotate(90) scale(20)">
        <stop stopColor="#9D38FD"/>
        <stop offset="1" stopColor="#00C4CC"/>
      </radialGradient>
    </defs>
  </svg>
);

const PhotoshopIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#001E36"/>
    <text x="5.5" y="17.5" fontFamily="sans-serif" fontSize="12" fill="#31C5F4" fontWeight="bold">Ps</text>
  </svg>
);

const MetaIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12,2.5c-4.97,0-9,4.03-9,9s4.03,9,9,9c2.3,0,4.4-0.87,6-2.3c-1.12-1.3-1.88-2.99-1.88-4.82c0-3.31,2.69-6,6-6 c0.3,0,0.59,0.04,0.88,0.12C21.96,4.2,17.46,2.5,12,2.5z" fill="url(#meta-grad)" />
    <path d="M21.88,11.12c-0.29-0.08-0.58-0.12-0.88-0.12c-3.31,0-6,2.69-6,6c0,1.83,0.76,3.52,1.88,4.82c1.6-1.43,2.6-3.4,2.6-5.54 C19.48,14.47,20.45,12.63,21.88,11.12z" fill="url(#meta-grad2)" />
    <defs>
        <linearGradient id="meta-grad" x1="3" y1="11.5" x2="21" y2="11.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF5252" />
            <stop offset="1" stopColor="#5522FF" />
        </linearGradient>
        <linearGradient id="meta-grad2" x1="15" y1="11" x2="22" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5522FF" />
            <stop offset="1" stopColor="#00D4FF" />
        </linearGradient>
    </defs>
  </svg>
);

const N8nIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#1A8275"/>
    <path d="M12 2L22 7V17L12 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12L22 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VercelIcon = () => (
  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22H22L12 2Z"/>
  </svg>
);

const NetlifyIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 13.737L12 20L22 13.737V4.263L12 10L2 4.263V13.737Z" fill="#00C7B7"/>
    <path d="M12 10V20" stroke="white" strokeWidth="1.5"/>
    <path d="M2 4.263L12 10L22 4.263" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const WebflowIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" fill="#4353FF"/>
    <path d="M12 8V16L8 12L12 8Z" fill="white"/>
    <path d="M16 8L12 12L16 16V8Z" fill="white"/>
  </svg>
);

const BloggerIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#F57C00"/>
    <text x="7" y="18" fontFamily="sans-serif" fontSize="14" fill="white" fontWeight="bold">B</text>
  </svg>
);

const WordPressIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#21759B"/>
    <text x="6" y="18" fontFamily="sans-serif" fontSize="14" fill="white" fontWeight="bold">W</text>
  </svg>
);

const WixIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="black"/>
    <text x="5" y="17" fontFamily="sans-serif" fontSize="10" fill="white" fontWeight="bold">Wix</text>
  </svg>
);

const SemrushIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#FF622D"/>
    <text x="5" y="17" fontFamily="sans-serif" fontSize="8" fill="white" fontWeight="bold">SR</text>
  </svg>
);

const FirebaseIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.835 50.3164L4.25 46.121L26.75 9.0625L32.25 13.2569L10.835 50.3164Z" fill="#FFC24A"/>
    <path d="M32.25 46.8125L26.75 60.9375L47.5 32.25L32.25 46.8125Z" fill="#F4BD4F"/>
    <path d="M34.5088 27.6534L12.5 9.875L6.08887 14.1875L34.5088 27.6534Z" fill="#F6820C"/>
    <path d="M52.9111 46.1211L49.5 40.1875L32.25 46.8125L35.6611 52.7461L52.9111 46.1211Z" fill="#F57C00"/>
  </svg>
);

const ChatGPTIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.32,8.68a2.68,2.68,0,0,0-2-3.83,2.71,2.71,0,0,0-2.61,1.13,2.66,2.66,0,0,0-4.32,0,2.71,2.71,0,0,0-2.61-1.13,2.68,2.68,0,0,0-2,3.83,2.71,2.71,0,0,0,1.13,2.61,2.66,2.66,0,0,0,0,4.32,2.71,2.71,0,0,0-1.13,2.61,2.68,2.68,0,0,0,2,3.83,2.71,2.71,0,0,0,2.61-1.13,2.66,2.66,0,0,0,4.32,0,2.71,2.71,0,0,0,2.61,1.13,2.68,2.68,0,0,0,2-3.83,2.71,2.71,0,0,0-1.13-2.61,2.66,2.66,0,0,0,0-4.32A2.71,2.71,0,0,0,20.32,8.68Z" fill="#74AA9C"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 22H21L12 2ZM12 7.61L17.07 19H6.93L12 7.61Z" fill="#D9B38B"/>
  </svg>
);

const PerplexityIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="currentColor" className="text-white"/>
    <rect x="4" y="4" width="16" height="16" rx="8" fill="black"/>
    <path d="M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8" stroke="white" strokeWidth="2"/>
  </svg>
);

const MidjourneyIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15.5V17.5H22V15.5L12 6.5L2 15.5Z" stroke="white" strokeWidth="1.5" />
    <path d="M10 17.5L8 20.5" stroke="white" strokeWidth="1.5" />
    <path d="M14 17.5L16 20.5" stroke="white" strokeWidth="1.5" />
  </svg>
);

const ElevenLabsIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="4" y="18" fontFamily="sans-serif" fontSize="14" fill="white" fontWeight="bold">11</text>
  </svg>
);

const SketchUpIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="#DE362A"/>
    <path d="M12 12L20 7" stroke="white" strokeWidth="1.5"/>
    <path d="M12 12V22" stroke="white" strokeWidth="1.5"/>
    <path d="M12 12L4 7" stroke="white" strokeWidth="1.5"/>
    <path d="M16 4.5L8 9.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
  </svg>
);

const DaVinciResolveIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="black"/>
    <path d="M10 8H14V10L12 12L14 14V16H10V14L12 12L10 10V8Z" fill="url(#dr-grad)" />
    <defs>
      <linearGradient id="dr-grad" x1="10" y1="8" x2="14" y2="16">
        <stop stopColor="#F9D423"/>
        <stop offset="1" stopColor="#FF4E50"/>
      </linearGradient>
    </defs>
  </svg>
);

const V0Icon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 7L4 12L8 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7C14.8954 7 14 7.89543 14 9V15C14 16.1046 14.8954 17 16 17H18C19.1046 17 20 16.1046 20 15V9C20 7.89543 19.1046 7 18 7H16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.15 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C6.725 19.725 5.9125 17.85 5.9125 17.85C5.4625 16.7 4.9 16.4375 4.9 16.4375C3.9875 15.775 4.975 15.7875 4.975 15.7875C6.05 15.8625 6.575 16.9 6.575 16.9C7.525 18.525 9.175 18.0625 9.7625 17.7875C9.8625 17.1125 10.125 16.6375 10.425 16.375C7.9625 16.1 5.4 15.15 5.4 11.2375C5.4 10.0375 5.825 9.05 6.4875 8.2875C6.375 8.025 6.0375 6.9625 6.5875 5.5C6.5875 5.5 7.475 5.225 9.525 6.6375C10.375 6.4125 11.275 6.3 12.175 6.3C13.075 6.3 13.975 6.4125 14.825 6.6375C16.875 5.225 17.7625 5.5 17.7625 5.5C18.3125 6.9625 17.975 8.025 17.8625 8.2875C18.525 9.05 18.95 10.0375 18.95 11.2375C18.95 15.1625 16.3875 16.1 13.9125 16.375C14.275 16.6875 14.6 17.3125 14.6 18.2625C14.6 19.6 14.5875 20.6875 14.5875 21.0125C14.5875 21.275 14.775 21.5875 15.2875 21.4875C19.1375 20.15 22 16.425 22 12C22 6.475 17.525 2 12 2Z" />
  </svg>
);

const LovableIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="url(#love-grad)"/>
      <text x="7" y="15" fontFamily="sans-serif" fontSize="8" fill="white" fontWeight="bold">L</text>
      <defs>
          <linearGradient id="love-grad" x1="2" y1="3" x2="22" y2="21">
              <stop stopColor="#FF8A8A"/>
              <stop offset="1" stopColor="#FF5252"/>
          </linearGradient>
      </defs>
  </svg>
);

const BubbleIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#333"/>
    <circle cx="12" cy="12" r="7" fill="white"/>
    <circle cx="12" cy="12" r="4" fill="#333"/>
  </svg>
);

const GumroadIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FF90E8"/>
    <path d="M12 12C12 14.2091 10.2091 16 8 16C5.79086 16 4 14.2091 4 12C4 9.79086 5.79086 8 8 8C10.2091 8 12 9.79086 12 12ZM12 12H20" stroke="black" strokeWidth="3"/>
  </svg>
);

const tools = [
  { name: "Canva", icon: <CanvaIcon /> },
  { name: "Photoshop", icon: <PhotoshopIcon /> },
  { name: "Meta Ads", icon: <MetaIcon /> },
  { name: "n8n", icon: <N8nIcon /> },
  { name: "Vercel", icon: <VercelIcon /> },
  { name: "Netlify", icon: <NetlifyIcon /> },
  { name: "Webflow", icon: <WebflowIcon /> },
  { name: "Blogger", icon: <BloggerIcon /> },
  { name: "WordPress", icon: <WordPressIcon /> },
  { name: "Wix", icon: <WixIcon /> },
  { name: "Semrush", icon: <SemrushIcon /> },
  { name: "Firebase", icon: <FirebaseIcon /> },
  { name: "ChatGPT", icon: <ChatGPTIcon /> },
  { name: "Claude", icon: <ClaudeIcon /> },
  { name: "Perplexity", icon: <PerplexityIcon /> },
  { name: "Midjourney", icon: <MidjourneyIcon /> },
  { name: "Eleven Labs", icon: <ElevenLabsIcon /> },
  { name: "SketchUp", icon: <SketchUpIcon /> },
  { name: "DaVinci Resolve", icon: <DaVinciResolveIcon /> },
  { name: "v0.dev", icon: <V0Icon /> },
  { name: "GitHub", icon: <GitHubIcon /> },
  { name: "Lovable", icon: <LovableIcon /> },
  { name: "Bubble", icon: <BubbleIcon /> },
  { name: "Gumroad", icon: <GumroadIcon /> }
];

export function ToolsSection() {
  return (
    <section id="tools" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl font-semibold text-center">
            My Toolkit
          </CardTitle>
        </CardHeader>
        <CardContent className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-center">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 transition-transform hover:scale-105 hover:shadow-lg hover:bg-card">
                {tool.icon}
                <span className="text-sm font-medium text-center text-muted-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">...and more.</p>
        </CardContent>
      </Card>
    </section>
  );
}
