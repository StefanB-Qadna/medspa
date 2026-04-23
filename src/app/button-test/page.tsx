"use client";

import { Button, type ButtonProps } from "@/components/ui/button";

const sizes: NonNullable<ButtonProps["size"]>[] = ["xs", "sm", "default", "lg", "xl"];

export default function ButtonTestPage() {
  return (
    <main className="min-h-screen bg-warm-dark px-8 py-16 text-cream">
      <div className="mx-auto max-w-5xl space-y-16">
        <header className="space-y-2">
          <h1 className="font-serif text-4xl">Hero CTA sizing test</h1>
          <p className="text-sm text-cream/70">
            Primary: “Book Now” · Secondary: “Explore Treatments”. Same dark background
            as the homepage hero. Pick the size that reads best.
          </p>
        </header>

        <section className="space-y-10">
          <h2 className="font-serif text-2xl">New component defaults</h2>
          <p className="text-xs uppercase tracking-wider text-cream/60">
            variant=&quot;default&quot; + variant=&quot;outline&quot; — bare, no className overrides
          </p>
          {sizes.map((size) => (
            <div key={size} className="space-y-3 border-t border-cream/15 pt-6">
              <div className="text-xs uppercase tracking-wider text-cream/60">
                size=&quot;{size}&quot;
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button size={size}>Book Now</Button>
                <Button size={size} variant="outline">
                  Explore Treatments
                </Button>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-10">
          <h2 className="font-serif text-2xl">Keeping the current hero overrides</h2>
          <p className="text-xs uppercase tracking-wider text-cream/60">
            rounded-full, cream fill / cream outline, uppercase tracking-wider — only the
            size prop changes
          </p>
          {sizes.map((size) => (
            <div key={size} className="space-y-3 border-t border-cream/15 pt-6">
              <div className="text-xs uppercase tracking-wider text-cream/60">
                size=&quot;{size}&quot;
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  size={size}
                  className="rounded-full bg-cream text-warm-dark hover:bg-cream/90 font-sans font-medium uppercase tracking-wider px-9"
                >
                  Book Now
                </Button>
                <Button
                  size={size}
                  variant="outline"
                  className="rounded-full border-cream/60 bg-transparent text-cream hover:bg-cream/10 hover:text-cream font-sans font-medium uppercase tracking-wider px-9"
                >
                  Explore Treatments
                </Button>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-4 border-t border-cream/15 pt-8">
          <h2 className="font-serif text-2xl">Reference grid (all sizes, all variants)</h2>
          <p className="text-xs uppercase tracking-wider text-cream/60">
            Stock component, no overrides — for quickly scanning the size ladder
          </p>
          <div className="rounded-lg bg-cream p-6 text-warm-dark">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
