interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <p
          className={`font-sans text-eyebrow font-medium uppercase tracking-widest mb-3 ${
            light ? "text-cream/50" : "text-brass"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-section font-normal ${
          light ? "text-cream" : "text-warm-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-lead mt-3 max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-cream/70" : "text-warm-dark/70"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
