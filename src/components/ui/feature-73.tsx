import { ArrowRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Feature73Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

export const Feature73 = ({
  heading = "Powerful Features",
  description = "Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.",
  linkUrl = "#",
  linkText = "Book a demo",
  features = [],
}: Feature73Props) => {
  return (
    <section>
      <div className="flex flex-col gap-16">
        <div className="lg:max-w-sm">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-brass mb-3">
            Our Clinic
          </p>
          <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark mb-4">
            {heading}
          </h2>
          <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mb-6">
            {description}
          </p>
          <a
            href={linkUrl}
            className="group inline-flex items-center font-sans text-sm font-medium text-brass hover:text-brass-dark transition-colors"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features[0] && (
            <div className="flex flex-col overflow-clip rounded-md md:col-span-2 md:grid md:grid-cols-2 border border-border">
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 bg-cream">
                <h3 className="font-serif text-lg font-medium text-warm-dark mb-3 md:mb-4 md:text-xl">
                  {features[0].title}
                </h3>
                <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            </div>
          )}
          {features.slice(1).map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-md border border-border"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 bg-cream">
                <h3 className="font-serif text-lg font-medium text-warm-dark mb-3 md:mb-4 md:text-xl">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
