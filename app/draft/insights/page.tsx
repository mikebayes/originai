import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";
import {
  getRecentArticles,
  getAuthor,
  formatDate,
  type Article,
} from "@/lib/insights";

/**
 * /draft/insights — DRAFT Insights hub.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /insights route and the shared
 * InsightsIndex component are both untouched.
 *
 * This is a standalone page rather than a modified InsightsIndex,
 * because that component is rendered by the live route. The article
 * grid markup is carried over verbatim so the cards keep their current
 * structure; only the hero and CTA change.
 *
 * Visual alignment with the refined draft pages:
 *   - darker charcoal / deep teal hero via .draft-hero (draft-only)
 *   - no INSIGNTS hero eyebrow, no decorative top-right label
 *   - streak accent above the hero H1, teal rule above the CTA
 *   - no all-caps text eyebrows anywhere
 *
 * Kept quieter than the service pages. This is the editorial hub, so
 * the hero has no CTAs and no metadata strip.
 *
 * Sections:
 *   1. Hero
 *   2. Article grid (unchanged card structure)
 *   3. CTA strip
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ────────────── */
const EVENTUAL_SEO_TITLE = "Insights | Origin AI";
const EVENTUAL_SEO_DESCRIPTION =
  "Short pieces from Origin's team on AI adoption, workflow development, and the decisions that shape useful systems. Written by the people doing the engagements.";

export const metadata: Metadata = {
  title: "DRAFT · Insights | Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

/* Review route: never serve a cached copy. Scoped to this page only. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

/**
 * Draft-only excerpt overrides.
 *
 * One article excerpt in lib/insights.ts ends with "the more practical
 * option", and that copy is visible on the card. The data file is shared
 * with the live /insights route, so editing it there would change the
 * live page too. Overriding here keeps the draft clean without touching
 * live.
 *
 * TODO (launch task): if this wording is approved, update the excerpt in
 * lib/insights.ts and delete this map.
 */
const DRAFT_EXCERPT_OVERRIDES: Record<string, string> = {
  "why-internal-business-apps-are-about-to-explode":
    "Custom internal applications used to fail the cost-benefit test for most SMBs. That equation is shifting. As AI-assisted development and modern deployment workflows reduce iteration friction, smaller targeted operational apps are becoming the more realistic option.",
};

export default function DraftInsightsPage() {
  const all: Article[] = getRecentArticles();

  const initials = (name: string) =>
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <main>
      {/* draft-hero + draft-hero--insights carry the new dark hero
          treatment. Both classes exist only on draft pages, so the live
          /insights route is unaffected. */}
      <div className="bp-page bp-page--insights bp-page--insights-simple draft-hero draft-hero--insights">
        <div className="bp-grain" aria-hidden="true" />

        {/* Internal draft banner. Delete when this page goes live. */}
        <div className="draft-banner" role="note">
          Internal draft. Not indexed, not linked, live /insights unchanged.
        </div>

        <div className="bp-hero-shell bp-hero-shell--compact">
          <HeroNav />

          {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
          {/* No INSIGHTS eyebrow, no top-right label, no CTAs, no
              metadata strip. Editorial rather than sales-heavy. */}
          <section
            className="wrap bp-hero bp-hero--compact bp-ins-hero"
            data-screen-label="Insights hero"
          >
            {/* Homepage brand streak, used once. */}
            <span className="hero-mark bp-streak" aria-hidden="true">
              <span className="hero-mark-dot" />
              <span className="hero-mark-line" />
            </span>

            <h1 className="bp-hero-h1 bp-ins-hero-h1 bp-hero-h1--bare">
              Notes from the work.
            </h1>

            <p className="bp-hero-sub bp-ins-hero-sub">
              Short pieces from Origin&rsquo;s team on AI adoption, workflow
              development, and the decisions that shape useful systems.
            </p>

            {/* Quiet descriptor row. Plain mono text with hairline
                separators, deliberately not pills and not a filter bar. */}
            <p className="bp-ins-topics" aria-hidden="true">
              <span>Adoption</span>
              <span>Build</span>
              <span>Workflow</span>
              <span>Leadership</span>
            </p>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: ARTICLE GRID ───────────────────────────── */}
        {/* Card structure carried over from the live page unchanged. */}
        <section className="bp-ins-simple-wrap" data-screen-label="Articles">
          <div className="wrap">
            <div className="bp-ins-simple-grid">
              {all.map((a) => {
                const author = getAuthor(a.authorId);
                const excerpt = DRAFT_EXCERPT_OVERRIDES[a.slug] ?? a.excerpt;
                return (
                  <a
                    key={a.slug}
                    href={`/insights/${a.slug}`}
                    className="bp-ins-simple-card"
                  >
                    <div className="bp-ins-simple-image">
                      {a.image ? (
                        <img src={a.image} alt="" loading="lazy" />
                      ) : (
                        <div
                          className="bp-ins-simple-image-placeholder"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div className="bp-ins-simple-body">
                      <div className="bp-ins-simple-meta">
                        <span className="bp-ins-tag">{a.category}</span>
                        <span className="bp-ins-sep" aria-hidden="true">
                          ·
                        </span>
                        <span>{formatDate(a.date)}</span>
                      </div>

                      <h2 className="bp-ins-simple-title">{a.title}</h2>

                      <p className="bp-ins-simple-excerpt">{excerpt}</p>

                      <div className="bp-ins-simple-foot">
                        <span className="bp-ins-author bp-ins-author--compact">
                          {author.photo ? (
                            <img
                              src={author.photo}
                              alt={author.name}
                              className="bp-ins-author-photo"
                              loading="lazy"
                            />
                          ) : (
                            <span
                              className="bp-ins-author-avatar"
                              aria-hidden="true"
                            >
                              {initials(author.name)}
                            </span>
                          )}
                          <span className="bp-ins-author-name">
                            {author.name}
                          </span>
                        </span>
                        <span className="bp-ins-read">{a.readingTime}</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: CTA STRIP ──────────────────────────────── */}
        {/* The "WANT TO TALK THROUGH ANY OF THIS?" eyebrow is replaced by
            a teal rule and a real lead line. */}
        <section className="bp-ins-cta" data-screen-label="Insights CTA">
          <div className="wrap">
            <div className="bp-ins-cta-row">
              <div className="bp-ins-cta-copy">
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="bp-ins-cta-h2">
                  Have a question sparked by one of these pieces?
                </h2>
                <p className="bp-ins-cta-line">
                  That is often the best starting point. We can talk through
                  where AI fits, what is worth improving, and what should
                  happen next.
                </p>
              </div>
              <a href="/contact" className="pill pill-primary">
                Start a conversation
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
