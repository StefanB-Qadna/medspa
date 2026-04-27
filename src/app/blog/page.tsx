"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FeatureImageSplit } from "@/components/ui/feature-image-split";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Your Face Doesn\u2019t Age Evenly, and Most Treatments Miss the Point",
    category: "Aging",
    date: "April 2026",
    excerpt:
      "Most patients focus on wrinkles. But wrinkles are the last stage of facial aging. Here is what is actually happening beneath the surface, and why treating one layer without understanding the others leads to results that fade too fast.",
    image: "/images/blog 1.webp",
    readTime: "10 min read",
    href: "/blog/your-face-doesnt-age-evenly",
  },
  {
    title: "Why Your Dark Spots Keep Coming Back (The Melasma Truth Most Patients Never Hear)",
    category: "Skin",
    date: "April 2026",
    excerpt:
      "Melasma is one of the most common and most mismanaged skin conditions in aesthetics. If your dark spots keep returning after treatment, this is likely why.",
    image: "/images/blog 2.webp",
    readTime: "12 min read",
    href: "/blog/dark-spots-melasma-truth",
  },
  {
    title: "Why the Scale Is the Worst Way to Measure Your Body (And What Actually Matters)",
    category: "Body",
    date: "April 2026",
    excerpt:
      "Body weight tells you almost nothing about your health, your metabolic function, or how your body actually looks. Here is what body composition is and how to actually measure progress.",
    image: "/images/blog 3.webp",
    readTime: "11 min read",
    href: "/blog/scale-worst-way-measure-body",
  },
  {
    title: "What Starts Declining in Your 30s That Nobody Warns You About",
    category: "Longevity",
    date: "April 2026",
    excerpt:
      "The biology of aging starts well before most people expect it. Here is what is actually changing in your body in your 30s and 40s, and what the difference between \u201cnormal\u201d and \u201coptimized\u201d actually looks like.",
    image: "/images/blog 4.webp",
    readTime: "13 min read",
    href: "/blog/what-starts-declining-in-your-30s",
  },
];

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <PageHero
        label="Blog"
        title="Honest answers from a surgeon."
        subtitle="No hype. No hidden agendas. Just medicine."
        imageUrl="/images/spaceDR.webp"
        size="compact"
        overlayOpacity={55}
      />

      {/* Category Filters */}
      <section className="bg-cream border-b border-border/50">
        <div className="mx-auto max-w-[75rem] px-6 py-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <Button
                  key={cat}
                  size="xl"
                  variant={isActive ? "default" : "outline"}
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={
                    isActive
                      ? "border-warm-dark bg-warm-dark text-cream hover:bg-warm-dark/90 active:bg-warm-dark/90"
                      : "bg-transparent text-warm-dark hover:border-brass hover:bg-transparent hover:text-brass active:bg-transparent"
                  }
                >
                  {cat}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posts — lead story + 3-up grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-20">
          {filteredPosts.length === 0 && (
            <p className="text-center font-sans text-sm text-warm-dark/70 py-16">
              No posts in this category yet. Check back soon.
            </p>
          )}

          {filteredPosts.length > 0 && (() => {
            const [lead, ...rest] = filteredPosts;
            return (
              <>
                {/* Lead story — editorial split */}
                <Link href={lead.href} className="group block mb-16 md:mb-24">
                  <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src={lead.image}
                        alt={lead.title}
                        fill
                        priority
                        sizes="(min-width: 768px) 42rem, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <p className="label mb-3">Featured · {lead.category}</p>
                      <h2 className="font-serif text-section font-normal text-warm-dark leading-tight mb-4 group-hover:text-brass transition-colors">
                        {lead.title}
                      </h2>
                      <p className="font-sans text-base text-warm-dark/75 leading-relaxed mb-6">
                        {lead.excerpt}
                      </p>
                      <div className="flex items-center gap-4 font-sans text-xs text-warm-dark/60">
                        <span>{lead.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{lead.readTime}</span>
                      </div>
                      <span className="mt-6 inline-flex items-center font-sans text-sm font-medium text-brass group-hover:text-brass-dark">
                        Read article
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>

                {/* Remaining posts — 3-up */}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map((post) => (
                      <Link key={post.href} href={post.href} className="group flex flex-col">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-md mb-5">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                        <p className="label mb-2">{post.category}</p>
                        <h3 className="font-serif text-xl md:text-2xl font-normal text-warm-dark leading-snug mb-3 group-hover:text-brass transition-colors">
                          {post.title}
                        </h3>
                        <p className="line-clamp-3 font-sans text-sm text-warm-dark/70 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center gap-3 font-sans text-xs text-warm-dark/60">
                          <span>{post.date}</span>
                          <span aria-hidden="true">·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </section>

      {/* Booking CTA */}
      <div className="bg-linen pt-16 md:pt-20">
        <FeatureImageSplit
          title="The best version of you is closer than you think."
          description="Start with a complimentary consultation. Dr. Robledo will build a plan around your goals, your timeline, and nothing else."
          imageSrc="/images/space2.webp"
          imageAlt="Rejuvenate and Refine clinic interior"
          buttonPrimary={{
            label: "Start here",
            href: "#book-now",
          }}
          buttonSecondary={{
            label: "Call us",
            href: "tel:+14693970434",
          }}
        />
      </div>
    </>
  );
}
