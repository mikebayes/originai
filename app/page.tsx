import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeIntro from "@/components/HomeIntro";
import HomeServices from "@/components/HomeServices";
import HomeBeliefs from "@/components/HomeBeliefs";
import Proof from "@/components/Proof";
import HomeAbout from "@/components/HomeAbout";
import FinalCTA from "@/components/FinalCTA";

/**
 * Homepage.
 *
 * PHASE 4a (body copy only). Promoted from /draft. The previous version
 * composed Hero, Problem, Beliefs, Services, About (all now unused).
 *
 * ───────────────────────────────────────────────────────────────────────
 * WHY THE METADATA BELOW IS UNCHANGED
 * ───────────────────────────────────────────────────────────────────────
 * The title, description, and canonical are byte-identical to what was
 * live before this promotion. That is deliberate and it is the whole
 * point of splitting Phase 4.
 *
 * This page carries 96% of the site's clicks (416 of 434) and 89% of its
 * impressions, and it is the ranking URL for:
 *
 *   custom AI software Winnipeg        position 3
 *   AI company Winnipeg                position 5
 *   AI consulting Winnipeg             position 6
 *   AI consulting Manitoba             position 7
 *   AI companies Winnipeg              position 10
 *   Origin AI / Origin AI Winnipeg     position 1
 *
 * Shipping new body copy AND a new title together would make it
 * impossible to attribute any movement to either one. So 4a changes copy
 * only. The title change (to "AI Consulting Winnipeg | AI Training &
 * Workflow Development | Origin AI") is Phase 4b, two to three weeks
 * later, once this has settled.
 *
 * Note that the current title still contains "Custom AI Software", which
 * is the strongest remaining signal protecting the position-3 ranking
 * while the body copy is re-evaluated. That protection goes away in 4b,
 * which is the other reason to separate them.
 *
 * ───────────────────────────────────────────────────────────────────────
 * PHRASES RESTORED BEFORE PROMOTION
 * ───────────────────────────────────────────────────────────────────────
 * The draft version of this page had dropped several terms the live page
 * ranked on. Restored in visible copy:
 *
 *   "custom AI software"  x2  (HomeIntro lede, HomeServices workflow card)
 *   "across Canada"       x1  (HomeAbout)
 *
 * Deliberately NOT restored: "AI strategy" and "roadmap". The
 * positioning moved away from roadmap-led language on purpose, and
 * /services/strategy now carries "AI strategy consulting" instead.
 *
 * H1 is unchanged: "We build the AI your business runs on."
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
    <main className="home-v2">
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <HomeBeliefs />
      <Proof />
      <HomeAbout />
      <FinalCTA />
    </main>
  );
}
