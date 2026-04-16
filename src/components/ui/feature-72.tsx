import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  services: string[];
  image: string;
}

interface Feature72Props {
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  linkUrl?: string;
  linkText?: string;
  categories?: ServiceCategory[];
}

export const Feature72 = ({
  heading,
  description,
  imageSrc,
  imageAlt = "Our services",
  linkUrl,
  linkText,
  categories = [],
}: Feature72Props) => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 overflow-hidden">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-brass">
            What we offer
          </p>
          <h2 className="font-serif text-2xl md:text-[2.2rem] font-normal text-warm-dark max-w-lg text-balance">
            {heading}
          </h2>
          <p className="font-sans text-sm text-warm-dark/70 leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {/* Hero image */}
        {imageSrc && (
          <div className="relative mx-auto max-w-4xl">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="aspect-video max-h-[480px] w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
          </div>
        )}

        {/* Feature columns */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col md:flex-row">
          {categories.map((cat, index) => (
            <div key={cat.id} className="contents">
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-px bg-gradient-to-b from-border-light via-transparent to-border-light md:block"
                />
              )}
              {index > 0 && (
                <Separator className="my-4 md:hidden" />
              )}
              <div className="flex grow basis-0 flex-col p-4">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-linen text-brass">
                  {cat.icon}
                </div>
                <h3 className="font-serif text-lg font-medium text-warm-dark mb-2">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {linkUrl && (
          <div className="mt-10 text-center">
            <a
              href={linkUrl}
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
            >
              {linkText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
