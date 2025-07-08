import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const tools = [
  { name: "Canva", hint: "Canva logo" },
  { name: "Photoshop", hint: "Photoshop logo" },
  { name: "Meta Ads", hint: "Meta logo" },
  { name: "n8n", hint: "n8n logo" },
  { name: "Vercel", hint: "Vercel logo" },
  { name: "Netlify", hint: "Netlify logo" },
  { name: "Webflow", hint: "Webflow logo" },
  { name: "Firebase", hint: "Firebase logo" },
  { name: "ChatGPT", hint: "ChatGPT logo" },
  { name: "Claude", hint: "Claude AI logo" },
  { name: "Perplexity", hint: "Perplexity AI logo" },
  { name: "Midjourney", hint: "Midjourney logo" },
  { name: "Eleven Labs", hint: "ElevenLabs logo" },
  { name: "SketchUp", hint: "SketchUp logo" },
  { name: "DaVinci Resolve", hint: "DaVinci Resolve logo" },
  { name: "v0.dev", hint: "v0 logo" },
  { name: "GitHub", hint: "GitHub logo" },
  { name: "Lovable", hint: "Lovable AI logo" },
  { name: "Bubble", hint: "Bubble io logo" },
  { name: "Gumroad", hint: "Gumroad logo" }
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
                <Image
                  src={`https://placehold.co/64x64.png`}
                  alt={`${tool.name} logo`}
                  width={48}
                  height={48}
                  className="rounded-md object-contain"
                  data-ai-hint={tool.hint}
                />
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