import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Project Manager, RKJ Technology",
    avatar: "https://placehold.co/100x100.png",
    fallback: "JD",
    quote: "Neeraj's ability to bridge the gap between complex engineering problems and elegant tech solutions is remarkable. His work on ContractOS was a game-changer for our project tracking.",
    rating: 5,
  },
  {
    name: "John Smith",
    title: "Founder, Mini-SaaS Weekly",
    avatar: "https://placehold.co/100x100.png",
    fallback: "JS",
    quote: "I was impressed by Neeraj's speed and ingenuity in launching his SaaS products. He has a sharp eye for user needs and a relentless drive to build valuable tools.",
    rating: 5,
  },
  {
    name: "Emily White",
    title: "Freelance Client",
    avatar: "https://placehold.co/100x100.png",
    fallback: "EW",
    quote: "Working with Neeraj was a breeze. He delivered a high-quality home plan ahead of schedule and was incredibly responsive to feedback. I couldn't be happier with the result.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
    ))}
  </div>
);

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Others Are Saying
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            I'm proud to have collaborated with some amazing people. Here's what they have to say.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col text-left bg-card p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-0 flex-grow">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 text-foreground/90 italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardHeader className="p-0 pt-6 flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
