"use client";

import Link from "next/link";
import { HeroSection } from "@/components/ui/hero-section-4";

export default function BlogPost() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="What Starts Declining in Your 30s That Nobody Warns You About"
        label="Longevity · 13 min read"
        imageUrl="/images/blog 4.png"
        size="compact"
        overlayOpacity={55}
      />

      {/* Thumbnail */}
      <div className="bg-cream">
        <div className="mx-auto max-w-[780px] px-6 py-10">
          <div className="aspect-[16/9] overflow-hidden rounded-md">
            <img
              src="/images/blog 4.png"
              alt="What Starts Declining in Your 30s"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="bg-cream">
        <div className="mx-auto max-w-[680px] px-6 pb-20">
          <div className="prose-medspa">
            <p>
              Most people do not think seriously about aging until their 50s. By
              then, the biological processes that drive it have been underway for
              two decades.
            </p>
            <p>
              This is not a scare tactic. It is physiology. And understanding
              what is actually happening in your body in your 30s and 40s is one
              of the most practical things you can do, because the window for
              proactive intervention is significantly wider earlier in the
              process than most people realize.
            </p>
            <p>
              What follows is a clinical overview of what actually begins
              declining in the third and fourth decade of life, what symptoms
              those declines create, and why a standard primary care checkup is
              not designed to catch any of it.
            </p>

            <h2>
              Growth Hormone: The Decline That Starts Earlier Than You Think
            </h2>
            <p>
              Growth hormone is not just for adolescents. In adults, it plays a
              critical role in maintaining muscle mass, managing body fat
              distribution, supporting bone density, and regulating sleep
              quality.
            </p>
            <p>
              Peak growth hormone secretion occurs in the late teens and early
              20s. By the mid-30s, output has already dropped measurably. By age
              40, many adults are producing a fraction of what they produced at
              25. The decline is gradual enough that it rarely produces a single
              dramatic symptom. Instead, it looks like: more difficulty building
              or maintaining muscle even with consistent training, increased body
              fat particularly around the midsection, slower recovery after
              exercise, poorer sleep quality, and a general sense of slowing down
              that most people attribute to &ldquo;just getting older.&rdquo;
            </p>
            <p>
              That last phrase, &ldquo;just getting older,&rdquo; is worth
              examining. It is accurate in the sense that these changes are
              common. It is not accurate in the sense that they are inevitable or
              unaddressable. The distinction matters a great deal for how you
              approach the next decade of your health.
            </p>

            <h2>Testosterone: Not Just a Male Issue</h2>
            <p>
              Testosterone is commonly discussed in the context of men&apos;s
              health. It is equally relevant for women, though at very different
              levels and with different clinical implications.
            </p>
            <p>
              In men, testosterone begins declining at approximately 1 to 2
              percent per year starting around age 30. The cumulative effect by
              45 or 50 is significant. Symptoms include reduced energy, decreased
              libido, increased body fat, difficulty maintaining muscle mass,
              mood changes including increased irritability or low-grade
              depression, and declining cognitive sharpness.
            </p>
            <p>
              In women, testosterone is produced in smaller amounts but plays an
              important role in energy, libido, mood, and body composition. It
              also begins declining in the 30s, often accelerating during
              perimenopause. Women with lower testosterone frequently report
              fatigue and low motivation that does not fully respond to lifestyle
              changes, and it is rarely tested or discussed in a standard
              gynecological appointment.
            </p>
            <p>
              Estrogen and progesterone in women begin their own significant
              shift during perimenopause, which can start as early as the
              mid-30s and frequently begins in the early-to-mid 40s. Irregular
              cycles, sleep disruption, mood volatility, brain fog, weight
              shifts, and changes in skin quality are all potential early signs.
              Most women are not told to expect perimenopause symptoms until they
              are well into them.
            </p>

            <h2>Collagen: The 1 Percent Rule</h2>
            <p>
              Starting around age 25, the body reduces collagen production by
              roughly 1 percent per year. Collagen is the primary structural
              protein in the skin. It is what gives skin its firmness, bounce,
              and ability to recover its shape after movement or pressure.
            </p>
            <p>
              The effects of this gradual decline compound over time. By the
              mid-30s, fine lines that were once temporary, visible only during
              expression, begin to persist at rest. Skin texture becomes
              slightly less smooth. The face begins losing the density it had in
              the 20s. By the 40s, these changes are more pronounced.
            </p>
            <p>
              Sun exposure dramatically accelerates this process. UV radiation
              degrades collagen directly and disrupts the fibroblasts responsible
              for producing new collagen. For patients living in high-UV
              climates, this is one of the most significant accelerants of
              visible aging, and one of the most modifiable.
            </p>
            <p>
              Treatments that stimulate collagen production, including
              radiofrequency microneedling, certain laser protocols, and
              biostimulatory injectables, work by triggering the skin&apos;s
              repair response. They do not reverse the underlying age-related
              slowdown, but they can partially compensate for it by creating a
              stimulus for new collagen synthesis on a regular basis.
            </p>

            <h2>
              Muscle Mass: The Decline Most Active People Do Not See Coming
            </h2>
            <p>
              Sarcopenia, the age-related loss of muscle mass, begins in the 30s
              and accelerates after 50. In sedentary individuals, the decline is
              faster. In active individuals, it is slower but still present.
            </p>
            <p>
              The clinical significance of muscle loss is not just aesthetic.
              Muscle mass is the primary driver of metabolic rate. It is strongly
              associated with insulin sensitivity. It is the most important
              determinant of functional capacity and physical independence in
              older age. Preserving it is one of the highest-leverage investments
              in long-term health that exists.
            </p>
            <p>
              Adequate dietary protein is the single most important nutritional
              variable in preserving muscle mass. Resistance training is the
              single most important behavioral variable. Neither of these is
              complicated. Both are systematically under-prioritized in most
              general wellness guidance, which continues to focus on
              cardiovascular exercise and caloric restriction without adequate
              attention to the muscle loss that caloric restriction, particularly
              in combination with GLP-1 medications, can accelerate.
            </p>

            <h2>
              The Gap Between &ldquo;Normal&rdquo; and
              &ldquo;Optimal&rdquo;
            </h2>
            <p>
              Here is the piece that most routine medical care does not address.
            </p>
            <p>
              Standard lab reference ranges are built from population averages.
              When a lab result comes back flagged as &ldquo;normal,&rdquo; it
              means the value falls within the range seen across a large, diverse
              population. That population includes people who feel terrible,
              people who are sedentary, people with undiagnosed conditions.
              &ldquo;Normal&rdquo; is statistical. It does not mean optimal.
            </p>
            <p>
              A testosterone level at the low end of the normal range for a
              40-year-old man is technically normal. It is also associated with
              the full symptom profile described above. A vitamin D level of 32
              ng/mL is within the normal range. Optimal for most patients is
              closer to 50 to 70 ng/mL. The difference between those two numbers
              produces real, clinically meaningful effects in immune function,
              mood, and musculoskeletal health.
            </p>
            <p>
              The conversation most people never have with their primary care
              provider is the one about the gap between &ldquo;your labs are
              fine&rdquo; and &ldquo;here is what your labs tell us about how
              your body is actually functioning.&rdquo;
            </p>
            <p>
              Longevity medicine closes that gap. It starts with a more
              comprehensive look at biomarkers, hormones, inflammatory markers,
              and metabolic function than a standard annual physical provides,
              and it builds a clinical response to what that picture actually
              shows.
            </p>

            <h2>The Takeaway</h2>
            <p>
              The biology of aging does not wait for your 50s. By the time most
              people begin thinking about hormone health, collagen, muscle
              preservation, and metabolic optimization, the underlying processes
              have been underway for 15 to 20 years.
            </p>
            <p>
              None of this is catastrophic. It is manageable. But managing it
              well requires knowing what to look for, knowing what your personal
              numbers actually mean, and understanding that &ldquo;normal&rdquo;
              is not the same as optimal. The difference between those two
              definitions is where quality of life lives.
            </p>

            <hr />

            <p className="italic">
              At Rejuvenate &amp; Refine in Prosper, TX, Dr. Robledo offers a
              clinical approach to hormone management, IV therapy, and metabolic
              wellness that goes beyond standard screening. If you want a clearer
              picture of where you actually are and what is possible, we are glad
              to start that conversation.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-linen rounded-md p-8 md:p-10 text-center">
            <h3 className="font-serif text-xl font-normal text-warm-dark mb-2">
              Want to know where you actually stand?
            </h3>
            <p className="font-sans text-sm text-warm-dark/70 mb-6">
              Book a complimentary longevity consultation with Dr. Robledo.
            </p>
            <Link
              href="https://blvd.app/@rejuvenate-and-refine/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
