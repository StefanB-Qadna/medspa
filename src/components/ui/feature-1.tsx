import Image from "next/image";
import Link from "next/link";

interface Feature1Props {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonPrimary: {
    label: string;
    href: string;
  };
  buttonSecondary: {
    label: string;
    href: string;
  };
}

export const Feature1 = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonPrimary,
  buttonSecondary,
}: Feature1Props) => {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.15em] text-brass mb-6">
              Reserve Your Visit
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-normal text-warm-dark mb-4 text-balance">
              {title}
            </h2>
            <p className="mb-10 max-w-xl font-sans text-sm text-warm-dark/70 leading-relaxed lg:text-base">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              {buttonPrimary.href.startsWith("#") ? (
                <a
                  href={buttonPrimary.href}
                  className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
                >
                  {buttonPrimary.label}
                </a>
              ) : (
                <Link
                  href={buttonPrimary.href}
                  className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
                >
                  {buttonPrimary.label}
                </Link>
              )}
              {buttonSecondary.href.startsWith("#") || buttonSecondary.href.startsWith("tel:") || buttonSecondary.href.startsWith("mailto:") ? (
                <a
                  href={buttonSecondary.href}
                  className="inline-flex items-center justify-center rounded-sm border border-warm-dark/30 text-warm-dark font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-warm-dark/5 transition-colors"
                >
                  {buttonSecondary.label}
                </a>
              ) : (
                <Link
                  href={buttonSecondary.href}
                  className="inline-flex items-center justify-center rounded-sm border border-warm-dark/30 text-warm-dark font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-warm-dark/5 transition-colors"
                >
                  {buttonSecondary.label}
                </Link>
              )}
            </div>
          </div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};
