import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  href: string;
  consultRequired?: boolean;
}

export function ServiceCard({
  title,
  description,
  price,
  href,
  consultRequired,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-md border border-border/60 overflow-hidden group">
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-linen" />

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-serif text-lg md:text-xl font-medium text-warm-dark mb-2">
          {title}
        </h3>
        <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          {price && (
            <span
              className={`font-sans text-sm font-medium ${
                consultRequired ? "text-error" : "text-brass"
              }`}
            >
              {price}
            </span>
          )}
          <Link
            href={href}
            className="font-sans text-sm font-medium text-brass hover:text-brass-dark transition-colors ml-auto"
          >
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
