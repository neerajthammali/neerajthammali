import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tools = [
  "Canva", "Photoshop", "Meta Ads", "n8n", "Vercel", "Netlify", "Webflow",
  "Firebase", "ChatGPT", "Claude", "Perplexity", "Midjourney", "Eleven Labs",
  "SketchUp", "DaVinci Resolve", "v0.dev", "GitHub", "Lovable", "Bubble", "Gumroad"
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
        <CardContent className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
                {tools.map(tool => (
                    <Badge key={tool} variant="outline" className="text-base py-2 px-4 rounded-md">{tool}</Badge>
                ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">...and more.</p>
        </CardContent>
       </Card>
    </section>
  );
}
