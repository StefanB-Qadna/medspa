interface LogoProps {
  className?: string;
  title?: string;
}

export function Logo({ className, title = "Rejuvenate & Refine" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 140"
      role="img"
      aria-label={title}
      className={className}
    >
      <text
        x="500"
        y="102"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
        fontSize="96"
        fontWeight="400"
        letterSpacing="0.25rem"
      >
        <tspan fill="currentColor">Rejuvenate </tspan>
        <tspan fill="var(--color-brass)" fontStyle="italic">&amp;</tspan>
        <tspan fill="currentColor"> Refine</tspan>
      </text>
    </svg>
  );
}
