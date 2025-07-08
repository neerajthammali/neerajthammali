import Image from "next/image";

const logos = [
  { src: "https://placehold.co/150x75.png", alt: "Brand Logo 1", hint: "logo brand" },
  { src: "https://placehold.co/150x75.png", alt: "Brand Logo 2", hint: "logo brand" },
  { src: "https://placehold.co/150x75.png", alt: "Brand Logo 3", hint: "logo brand" },
  { src: "https://placehold.co/150x75.png", alt: "Brand Logo 4", hint: "logo brand" },
  { src: "https://placehold.co/150x75.png", alt: "Brand Logo 5", hint: "logo brand" },
  { src: "https://placehold.co/150x75.png", alt: "Brand Logo 6", hint: "logo brand" },
];

export function AssetsSection() {
  return (
    <section id="assets" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured In & Trusted By
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            I've had the privilege of being featured in various publications and trusted by innovative companies.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={75}
                className="object-contain"
                data-ai-hint={logo.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
