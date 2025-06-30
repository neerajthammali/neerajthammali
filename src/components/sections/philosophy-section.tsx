import { portfolioInsights } from "@/ai/flows/portfolio-insights";
import { Sparkles, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export async function PhilosophySection() {
  let summary;

  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_API_KEY_HERE') {
    try {
      const insight = await portfolioInsights({});
      summary = insight.summary;
    } catch (e) {
      console.error("Failed to get portfolio insights. Is the API key valid?", e);
      summary = "Failed to generate AI insight. Please check your Gemini API key.";
    }
  } else {
    summary = "AI-powered insight is unavailable. Please provide a valid Gemini API Key in the .env file.";
  }

  return (
    <section id="philosophy" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Philosophy</h2>
        </div>
        <div className="max-w-3xl mx-auto grid gap-8">
            <Card className="bg-background">
                <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-accent mb-4" />
                    <blockquote className="text-xl md:text-2xl font-light italic text-foreground">
                    People don&apos;t pay for products – they pay for outcomes. Validated proof-of-work is the ultimate career accelerator.
                    </blockquote>
                </CardContent>
            </Card>

            <Card className="border-accent border-2 bg-transparent">
                <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-6 h-6 text-accent" />
                        <h3 className="font-headline text-xl font-semibold">AI-Powered Insight</h3>
                    </div>
                    <p className="text-muted-foreground">{summary}</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
