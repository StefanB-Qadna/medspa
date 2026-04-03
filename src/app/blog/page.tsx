"use client";

import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Injectables", "Skin", "Botox", "Patient Education"];

const featuredPost = {
  title: "How long does Botox actually last? A surgeon's honest answer.",
  excerpt:
    "The textbook says 3 to 4 months. I want you to actually observe how long your results last, your anatomy, your bone, your metabolism, your lifestyle, technique, and what you can do about it.",
  author: "Dr. Rosemarie Robledo",
  category: "Neurotoxins",
  date: "March 2026",
};

const blogPosts = [
  {
    title: "Botox vs. Dysport vs. Daxxify: What's the difference, and which is right for you?",
    category: "Injectables",
    date: "March 2026",
    excerpt: "Three different Neuromodulators, three different formulations. Which one fits your goals?",
  },
  {
    title: "Do I really need a doctor for lip filler? The honest (and medical) oversight.",
    category: "Injectables",
    date: "March 2026",
    excerpt: "Let's have a real conversation about medical standards, lip filler practices, injector credentials, and how to find a provider you trust.",
  },
  {
    title: "What to expect from your first Hydrafacial, and how to get the most from it.",
    category: "Skin",
    date: "March 2026",
    excerpt: "The Hydrafacial is one of the most popular treatments we offer and let's walk through it step by step.",
  },
  {
    title: "5 signs a med spa isn't taking your safety seriously.",
    category: "Patient Education",
    date: "February 2026",
    excerpt: "We want you to be an informed consumer. Here are the red flags to watch for.",
  },
  {
    title: "The truth about preventative Botox. Is it real, and should you start?",
    category: "Botox",
    date: "February 2026",
    excerpt: "Preventative Botox is not marketing hype. But it's also not for everyone. Here's the science, who it helps, and when to consider it.",
  },
  {
    title: "Microneedling is here: everything you need to choose for your skin type.",
    category: "Skin",
    date: "February 2026",
    excerpt: "From classic microneedling to RF microneedling, here's how to choose the right modality for your skin.",
  },
  {
    title: "The complete guide to dermal filler types, areas, and how long they last.",
    category: "Injectables",
    date: "January 2026",
    excerpt: "From hyaluronic acid to calcium hydroxylapatite — which filler product goes where, how it works, and what to expect.",
  },
  {
    title: "Is laser hair removal worth it? An honest cost-benefit breakdown from a physician.",
    category: "Skin",
    date: "January 2026",
    excerpt: "The upfront cost vs. a lifetime of shaving, waxing, and razor bumps. Let's do the honest math.",
  },
  {
    title: "IV therapy: what it actually does, what the benefits are, and what to ask before booking.",
    category: "Patient Education",
    date: "January 2026",
    excerpt: "IV therapy is medically sound and medically supervised. But it's not a miracle cure. Here's a physician's take.",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
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
            No hype, no hidden agendas. Just clear, expert-written guidance on aesthetic medicine from someone
            who spent years in an operating room before opening a med spa.
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

      {/* Featured + Sidebar */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <div className="bg-cream rounded-md overflow-hidden">
                <div className="aspect-video bg-linen border-b border-border-light" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="font-sans text-xs text-warm-dark/70">
                      {featuredPost.author}
                    </span>
                    <span className="text-border-light">·</span>
                    <span className="font-sans text-xs font-medium text-brass uppercase tracking-[0.1em]">
                      {featuredPost.category}
                    </span>
                    <span className="text-border-light">·</span>
                    <span className="font-sans text-xs text-warm-dark/50">
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl font-normal text-warm-dark mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mb-5">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-6 py-2.5 hover:bg-brass-dark transition-colors"
                  >
                    Read the Full Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Consultation CTA */}
              <div className="bg-warm-dark rounded-md p-6">
                <h3 className="font-serif text-lg text-cream mb-2">
                  Book a complimentary consultation
                </h3>
                <p className="font-sans text-xs text-cream/60 mb-4 leading-relaxed">
                  Dr. Robledo will help you decide what&apos;s right — no pressure, no pushy sales.
                </p>
                <Link
                  href="#book"
                  className="inline-flex items-center justify-center w-full rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-6 py-3 hover:bg-brass-dark transition-colors"
                >
                  Book Now
                </Link>
              </div>

              {/* Recent Topics */}
              <div className="bg-cream rounded-md p-6">
                <h3 className="font-serif text-lg text-warm-dark mb-4">
                  Popular topics
                </h3>
                <ul className="space-y-2.5">
                  {["Botox vs. Dysport vs. Daxxify", "Lip filler consultation guide", "5 signs of an unsafe med spa", "Preventative Botox explained"].map(
                    (topic) => (
                      <li key={topic}>
                        <Link
                          href="#"
                          className="font-sans text-sm text-warm-dark/70 hover:text-brass transition-colors"
                        >
                          {topic} &rarr;
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.title} className="group">
                <div className="aspect-[4/3] bg-linen rounded-md mb-4" />
                <span className="font-sans text-xs font-medium text-brass uppercase tracking-[0.1em]">
                  {post.category}
                </span>
                <h3 className="font-serif text-base md:text-lg font-medium text-warm-dark mt-1 mb-2 group-hover:text-brass transition-colors leading-snug">
                  <Link href="#">{post.title}</Link>
                </h3>
                <p className="font-sans text-sm text-warm-dark/60 leading-relaxed mb-2 line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="font-sans text-xs text-warm-dark/40">
                  {post.date}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center rounded-sm border-[1.5px] border-brass text-warm-dark font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass/[0.08] transition-colors">
              Load More
            </button>
          </div>
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
              href="#book"
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
