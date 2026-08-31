import type { Metadata } from "next";
import DraftHero from "@/components/draft/DraftHero";
import DraftWhoWeAre from "@/components/draft/DraftWhoWeAre";
import DraftServices from "@/components/draft/DraftServices";
import DraftBeliefs from "@/components/draft/DraftBeliefs";
import DraftAbout from "@/components/draft/DraftAbout";
import Proof from "@/components/Proof";
import FinalCTA from "@/components/FinalCTA";

/**
 * /draft — DRAFT homepage.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live homepage (app/page.tsx) and every shared
 * component it renders are untouched. Draft-only variants live in
 * components/draft/ and CSS is gated on .draft-home.
 *
 * Section order compared to live:
 *
 *   live                     draft
 *   ────────────────────     ────────────────────────────────────────
 *   Hero                     DraftHero (same photo + H1, refined sub)
 *   Problem                  DraftWhoWeAre  <- replaced
 *   Beliefs (w/ photo)       DraftServices  <- moved up
 *   Services                 DraftBeliefs   <- condensed, text-led
 *   Proof                    Proof          (shared, unchanged)
 *   About                    DraftAbout     <- reframed
 *   FinalCTA                 FinalCTA       (shared, unchanged)
 *
 * Two ordering decisions:
 *   1. Services moves above Beliefs. A visitor who has just read what
 *      Origin does should hit the three service lanes next, not an
 *      opinion section.
 *   2. The human photograph moves from Beliefs up into DraftWhoWeAre,
 *      where it does credibility work above the fold instead of sitting
 *      halfway down the page.
 *
 * SEO note: the H1, the Winnipeg and Canada positioning, and the AI
 * consulting / custom AI software language are all preserved. Search
 * intent is unchanged.
 */

export const metadata: Metadata = {
  title: "DRAFT · Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

/* Review route: never serve a cached copy. Scoped to this page only. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function DraftHomePage() {
  return (
    <main className="draft-home">
      {/* Internal draft banner. Delete when this page goes live. */}
      <div className="draft-banner draft-banner--home" role="note">
        Internal draft homepage. Not indexed, not linked, live homepage
        unchanged.
      </div>

      <DraftHero />
      <DraftWhoWeAre />
      <DraftServices />
      <DraftBeliefs />
      <Proof />
      <DraftAbout />
      <FinalCTA />
    </main>
  );
}
