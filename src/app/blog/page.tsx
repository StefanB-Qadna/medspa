"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Your Face Doesn\u2019t Age Evenly, and Most Treatments Miss the Point",
    category: "Aging",
    date: "April 2026",
    excerpt:
      "Most patients focus on wrinkles. But wrinkles are the last stage of facial aging. Here is what is actually happening beneath the surface, and why treating one layer without understanding the others leads to results that fade too fast.",
    image: "/images/blog 1.png",
    readTime: "10 min read",
    href: "/blog/your-face-doesnt-age-evenly",
  },
  {
    title: "Why Your Dark Spots Keep Coming Back (The Melasma Truth Most Patients Never Hear)",
    category: "Skin",
    date: "April 2026",
    excerpt:
      "Melasma is one of the most common and most mismanaged skin conditions in aesthetics. If your dark spots keep returning after treatment, this is likely why.",
    image: "/images/blog 2.png",
    readTime: "12 min read",
    href: "/blog/dark-spots-melasma-truth",
  },
  {
    title: "Why the Scale Is the Worst Way to Measure Your Body (And What Actually Matters)",
    category: "Body",
    date: "April 2026",
    excerpt:
      "Body weight tells you almost nothing about your health, your metabolic function, or how your body actually looks. Here is what body composition is and how to actually measure progress.",
    image: "/images/blog 3.png",
    readTime: "11 min read",
    href: "/blog/scale-worst-way-measure-body",
  },
  {
    title: "What Starts Declining in Your 30s That Nobody Warns You About",
    category: "Longevity",
    date: "April 2026",
    excerpt:
      "The biology of aging starts well before most people expect it. Here is what is actually changing in your body in your 30s and 40s, and what the difference between \u201cnormal\u201d and \u201coptimized\u201d actually looks like.",
    image: "/images/blog 4.png",
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
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 text-center">
          <p className="label text-brass mb-3">Blog</p>
          <h1 className="font-serif text-3xl md:text-[2.8rem] font-normal text-warm-dark mb-4">
            Honest answers from a surgeon.
          </h1>
          <p className="font-sans text-base text-warm-dark/70 max-w-2xl mx-auto">
            No hype, no hidden agendas. Just clear, expert-written guidance on
            aesthetic medicine from someone who spent years in an operating room
            before opening a med spa.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-cream border-b border-border-light/50">
        <div className="mx-auto max-w-[1200px] px-6 pb-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm font-medium px-5 py-2 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-warm-dark text-cream border-warm-dark"
                    : "text-warm-dark border-border-light hover:border-brass hover:text-brass"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.href} href={post.href} className="group">
                <div className="relative h-full min-h-[26rem] overflow-hidden rounded-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/90 via-warm-dark/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8 text-cream">
                    <span className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.15em] text-brass mb-2">
                      {post.category}
                    </span>
                    <h2 className="font-serif text-xl md:text-2xl font-medium mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="line-clamp-2 font-sans text-sm text-cream/70 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-sans text-xs text-cream/50">
                        {post.date} · {post.readTime}
                      </span>
                      <span className="flex items-center font-sans text-sm font-medium text-brass">
                        Read more
                        <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center font-sans text-sm text-warm-dark/50 py-16">
              No posts in this category yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-cream rounded-md p-6 md:p-10 border border-border-light/50">
            <div>
              <h3 className="font-serif text-xl text-warm-dark mb-1">
                New posts, honest answers, occasional offers.
              </h3>
              <p className="font-sans text-sm text-warm-dark/60">
                Join our newsletter — curated by Dr. Robledo, nothing spammy.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 md:w-64 bg-white border border-border-light rounded-sm px-4 py-3 font-sans text-sm text-warm-dark placeholder:text-placeholder focus:border-brass focus:ring-2 focus:ring-brass/20 outline-none"
              />
              <button className="shrink-0 rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-6 py-3 hover:bg-brass-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-warm-dark">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16 text-center">
          <h2 className="font-serif text-xl md:text-2xl font-light text-cream mb-6">
            The best answers come from a direct conversation.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://blvd.app/@rejuvenate-and-refine/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="tel:4693970434"
              className="inline-flex items-center justify-center rounded-sm border border-cream/30 text-cream font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-white/5 transition-colors"
            >
              Call Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
