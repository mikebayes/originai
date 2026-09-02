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
 * /insights — insights index.
 *
 * Promoted from /draft/insights. Replaces the previous live page, which
 * was rendered by components/InsightsIndex.tsx (now unused) and whose H1
 * read "Practical notes on AI work."
 *
 * SEO job: long-tail support and internal linking, not a primary service
 * landing page. The articles carry the long-tail work and link back into
 * the four service pages.
 *
 * The draft version carried a per-slug excerpt override map so it could
 * show corrected wording without touching the shared data file. That fix
 * has now landed in lib/insights.ts, so the map is gone and the cards
 * read a.excerpt directly.
 */

export const metadata: Metadata = {
  title:
    "AI Insights for Business Adoption | Origin AI",
  description:
    "Articles on AI adoption, training, workflow development, custom AI software, and how organizations can make AI useful in real work.",
  alternates: { canonical: "https://www.originai.ca/insights" },
};

export default function InsightsRoute() {
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
      {/* svc-dark + svc-dark--insights carry the new dark hero
          treatment. Both classes exist only on draft pages, so the live
          /insights route is unaffected. */}
      <div className="bp-page bp-page--insights bp-page--insights-simple svc-dark svc-dark--insights">
        <div className="bp-grain" aria-hidden="true" />

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

                      <p className="bp-ins-simple-excerpt">{a.excerpt}</p>

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
