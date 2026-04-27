"use client";

import Image from "next/image";
import { Feature1 } from "@/components/ui/feature-1";

export default function BlogPost() {
  return (
    <>
      {/* Header */}
      <div className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 text-center">
          <p className="font-sans text-eyebrow font-medium uppercase tracking-widest text-brass-label mb-4">
            Skin · 12 min read
          </p>
          <h1 className="font-serif text-statement font-normal tracking-tight text-warm-dark text-balance">
            Why Your Dark Spots Keep Coming Back (The Melasma Truth Most Patients Never Hear)
          </h1>
        </div>
      </div>

      {/* Thumbnail */}
      <div className="bg-cream">
        <div className="mx-auto max-w-[48.75rem] px-6 pb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-md">
            <Image
              src="/images/blog 2.webp"
              alt="Why Your Dark Spots Keep Coming Back"
              fill
              priority
              sizes="(min-width: 768px) 48.75rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="bg-cream">
        <div className="mx-auto max-w-[42.5rem] px-6 pb-20">
          <div className="prose-medspa">
            <p>
              If you have been dealing with dark patches on your face for years,
              you have probably already tried a brightening serum or two. Maybe a
              peel. Possibly even a laser treatment. And if those spots came back
              within a few months, you are not doing anything wrong. You are most
              likely dealing with melasma, and melasma behaves in ways that most
              treatment approaches simply do not account for.
            </p>
            <p>
              This is not a simple pigmentation problem. It is one of the most
              complex, chronically mismanaged skin conditions in aesthetic
              medicine. Understanding what it actually is, and why it behaves the
              way it does, is the only path to results that last.
            </p>

            <h2>What Melasma Actually Is</h2>
            <p>
              Melasma is a chronic pigmentation disorder characterized by brown,
              gray-brown, or blue-gray patches on the face. It most commonly
              appears on the cheeks, forehead, upper lip, and chin. The patches
              tend to darken in summer and fade slightly in winter, but for most
              patients, they never fully disappear on their own.
            </p>
            <p>
              It is far more common in women than men. It disproportionately
              affects people with medium to deep skin tones. And it has a very
              strong hormonal component, which is why it is often triggered by
              pregnancy, often called the &ldquo;mask of pregnancy&rdquo;, by
              hormonal birth control, or by hormone replacement therapy.
            </p>
            <p>
              The key word in that last sentence is hormonal. This is not
              primarily a sun damage condition. Sun exposure makes it
              dramatically worse, but sun alone does not cause it. This
              distinction is critical, because it changes what treatment actually
              needs to address.
            </p>

            <h2>
              The Three Types, and Why They Require Different Approaches
            </h2>
            <p>
              Most patients and even many providers treat melasma as a single
              condition. It is not. There are three clinically distinct types,
              defined by where in the skin the pigment is deposited.
            </p>
            <p>
              <strong>Epidermal melasma</strong> sits in the upper layers of the
              skin. It tends to appear as lighter brown patches with well-defined
              edges. Under a Wood&apos;s lamp, it intensifies under the light.
              This type generally responds the best to topical treatments and
              carefully selected laser protocols.
            </p>
            <p>
              <strong>Dermal melasma</strong> sits deeper, in the dermis. The
              patches appear blue-gray or dark brown and do not intensify under a
              Wood&apos;s lamp. This type is significantly harder to treat, and
              aggressive laser therapy or chemical peels can actually worsen it
              by triggering post-inflammatory hyperpigmentation. The skin
              interprets the trauma as an insult and responds by producing more
              pigment. This is one of the most common ways well-intentioned
              treatment backfires.
            </p>
            <p>
              <strong>Mixed melasma</strong> is the most common type, showing
              characteristics of both epidermal and dermal involvement. Treatment
              for mixed melasma requires a layered approach that accounts for
              both depths.
            </p>
            <p>
              If a provider does not identify the type before treating, the risk
              of worsening is real.
            </p>

            <h2>
              Visible Light Is a Trigger Most People Never Hear About
            </h2>
            <p>
              Here is something most skincare routines do not account for:
              melasma is not just triggered by UV light. It is also triggered by
              visible light, particularly the high-energy visible light,
              sometimes called blue light, emitted by screens and by the
              sun&apos;s full spectrum.
            </p>
            <p>
              Standard mineral or chemical sunscreens protect against UVA and
              UVB. Many do not protect against visible light. For patients with
              melasma, this matters. Using a broad-spectrum sunscreen that also
              contains iron oxides is the clinical standard for melasma patients,
              because iron oxides are one of the only ingredients that filter
              visible light.
            </p>
            <p>
              This is why a patient can apply SPF 50 every morning, avoid direct
              sun, and still see their melasma worsen. If their sunscreen does
              not include iron oxides, a significant trigger is going completely
              unblocked.
            </p>

            <h2>Why Lasers Can Make It Worse</h2>
            <p>
              Laser treatments are powerful tools for pigmentation. For many skin
              concerns, they are the most effective option available. For
              melasma, the relationship is more complicated.
            </p>
            <p>
              Heat-based and ablative laser treatments can stimulate
              melanocytes, the pigment-producing cells in the skin. In a face
              with melasma, those cells are already in a heightened, reactive
              state. Adding thermal energy can push them further into overdrive.
              The result is post-inflammatory hyperpigmentation layered on top of
              existing melasma, leaving the patient darker and more frustrated
              than when they started.
            </p>
            <p>
              This does not mean laser treatment is off the table for melasma
              patients. Low-fluence, carefully calibrated protocols can be
              appropriate in specific cases, particularly for epidermal melasma
              in the right skin type. But the decision requires a detailed
              assessment of the melasma type, the patient&apos;s skin tone and
              history, and the specific device being used. It is not a decision
              that should be made on a package deal or a first appointment.
            </p>

            <h2>
              The Hormonal Component That Keeps It Coming Back
            </h2>
            <p>
              Even patients who achieve significant clearing often see their
              melasma return. The reason is usually hormonal, and it is not
              always within easy reach of a treatment plan.
            </p>
            <p>
              Melasma is strongly driven by estrogen. As long as hormonal
              fluctuations continue, whether from a monthly cycle, from
              continuing hormonal contraception, or from perimenopause, the
              underlying condition remains active. External treatment can
              suppress the visible pigment, but it cannot eliminate the hormonal
              signal telling the melanocytes to produce more.
            </p>
            <p>
              This is why maintenance is not optional for melasma patients. It is
              a chronic condition that requires long-term management, not a
              one-time fix. Patients who understand this upfront have realistic
              expectations and consistent results. Patients who expect a peel or
              a laser to eliminate the problem permanently are almost always
              disappointed.
            </p>

            <h2>What Effective Management Actually Looks Like</h2>
            <p>
              Successful melasma management typically involves several elements
              working together.
            </p>
            <p>
              Identifying the type comes first. Topical therapy, the clinical
              standard being a combination of hydroquinone, tretinoin, and a
              low-potency anti-inflammatory, is usually the foundation of the
              induction phase. Tranexamic acid, taken orally or applied
              topically, is increasingly well-supported by clinical research and
              is particularly useful for patients who do not respond fully to
              topical therapy alone. Tinted, iron oxide-containing sunscreen is
              non-negotiable. Hormonal contraception review is part of the
              conversation for many patients.
            </p>
            <p>
              Procedural treatments, including carefully selected laser protocols
              and chemical peels, can play a role in specific cases but are
              layered onto a stable foundation, not used as a standalone
              approach.
            </p>
            <p>
              The combination, the timing, and the level of clinical oversight
              are what determine whether a patient sees lasting improvement or
              continues cycling through treatments that temporarily help and then
              fail.
            </p>

            <h2>The Takeaway</h2>
            <p>
              If your dark spots keep coming back, you are not failing at your
              skincare routine. You are likely dealing with a condition that
              requires a clinical diagnosis, a type-specific treatment plan, and
              an understanding of the hormonal factors that drive it. Most of
              what is sold over the counter for pigmentation was not designed
              with melasma in mind.
            </p>
            <p>The right treatment exists. It starts with asking the right questions.</p>

            <hr />

            <p className="text-warm-dark/70">
              At Rejuvenate &amp; Refine in Prosper, TX, Dr. Robledo provides
              detailed skin assessments for patients dealing with persistent
              pigmentation. If you have been through treatments that have not
              held, a proper evaluation is the place to start.
            </p>
          </div>

        </div>
      </article>

      {/* Booking CTA */}
      <div className="bg-linen pt-16 md:pt-20">
        <Feature1
          title="The best version of you is closer than you think."
          description="Start with a complimentary consultation. Dr. Robledo will build a plan around your goals, your timeline, and nothing else."
          imageSrc="/images/space2.jpg"
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
