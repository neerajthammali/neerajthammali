import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | ContractOS",
  description: "Choose the best plan for your construction business.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section id="pricing" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Pricing Plans
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
              Choose the best plan for your construction business. Simple, transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Demo Plan */}
            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="font-headline text-2xl">7-Day Demo</CardTitle>
                <CardDescription>A free trial to explore all features.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="text-4xl font-bold">Free</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Up to 3 projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Full feature access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Community support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Start Free Trial</Button>
              </CardFooter>
            </Card>

            {/* Quarterly Plan */}
            <Card className="flex flex-col border-primary shadow-lg relative">
               <Badge variant="default" className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
              <CardHeader className="pb-4">
                <CardTitle className="font-headline text-2xl">Quarterly</CardTitle>
                <CardDescription>Ideal for short-term projects and getting started.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="text-4xl font-bold">
                  ₹499
                  <span className="text-lg font-normal text-muted-foreground">/ 3 months</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Full feature access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Priority email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>

            {/* Yearly Plan */}
            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                 <CardTitle className="font-headline text-2xl">Yearly</CardTitle>
                <CardDescription>Best value for long-term commitment and growth.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="text-4xl font-bold">
                  ₹1599
                  <span className="text-lg font-normal text-muted-foreground">/ year</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                   <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Full feature access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                     <Check className="h-5 w-5 text-primary" />
                    <span>Early access to new features</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Choose Plan</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
