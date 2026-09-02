import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Beliefs from "@/components/Beliefs";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";

/**
 * Homepage metadata.
 *
 * This route previously had NO metadata export at all. Title, description,
 * and canonical were all inherited from app/layout.tsx, which meant the
 * highest-traffic page on the site had no declaration of its own and would
 * silently follow any future edit to the root layout.
 *
 * The strings below are byte-identical to what the layout was already
 * emitting, so this changes nothing that Google can see. It only makes the
 * homepage explicit and independent.
 *
 * Deliberately NOT set here:
 *
 *   openGraph — Next.js replaces a parent `openGraph` object wholesale
 *   rather than deep-merging it. Declaring a partial one here would drop
 *   the layout's og:image (/og-image.jpg, 1200x630), which exists
 *   specifically because Google was otherwise pulling a client logo from
 *   the page as the SERP thumbnail. The layout's openGraph already carries
 *   the correct title, description, and URL for this route.
 *
 *   twitter — same inheritance reasoning.
 *
 * Title note: kept exactly as-is for this pass. A keyword-led rewrite is
 * queued for the homepage promotion, where it ships alongside the body
 * copy rather than ahead of it. This page currently ranks position 3 for
 * "custom AI software Winnipeg" and positions 5 to 7 for several Winnipeg
 * and Manitoba AI consulting terms, so the title is not changed in
 * isolation.
 *
 * Canonical is written as an absolute literal without a trailing slash to
 * match the layout's existing output exactly. Using "/" with metadataBase
 * would resolve to a trailing-slash variant and change the emitted tag.
 */
export const metadata: Metadata = {
  title: "AI Consulting & Custom AI Software in Winnipeg | Origin AI",
  description:
    "Origin AI is a Canadian AI consulting firm in Winnipeg. We build custom AI software, lead AI strategy, and run AI systems for businesses across Canada.",
  alternates: {
    canonical: "https://www.originai.ca",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Beliefs />
      <Services />
      <Proof />
      <About />
      <FinalCTA />
    </main>
  );
}
