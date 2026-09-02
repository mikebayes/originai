import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/team — DRAFT Team page.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /team route is untouched.
 *
 * Visual alignment pass, not a rebuild. Carries over from the refined
 * draft pages:
 *   - darker charcoal / deep teal hero via .svc-dark (draft-only)
 *   - breadcrumb only, no hero eyebrow, no top-right decorative label
 *   - no all-caps text section eyebrows
 *   - one homepage streak above the first body heading, teal rule after
 *   - two-tone heading treatment used sparingly (hero + one section)
 *
 * Deliberately kept warmer than the service pages: this is the people
 * and credibility page. The three partner cards, photos, roles, bios,
 * and focus chips are preserved from the live page with light polish
 * only.
 *
 * Sections:
 *   1. Hero
 *   2. The people leading the work (3 partner cards)
 *   3. You work with the people responsible for the outcome
 *   4. CTA
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ────────────── */
const EVENTUAL_SEO_TITLE = "Our Team | Origin AI";
const EVENTUAL_SEO_DESCRIPTION =
  "Origin AI is led by business, technology, and marketing operators who work directly with clients across AI strategy, training, workflow development, and ongoing improvement.";

export const metadata: Metadata = {
  title: "DRAFT · Team | Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

/* Review route: never serve a cached copy. Scoped to this page only. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

const PARTNERS = [
  {
    name: "Mike Bayes",
    initials: "MB",
    photo: "/images/MB.avif",
    role: "President & Lead AI Strategist",
    bio:
      "Mike works with leadership teams to clarify where AI fits, identify the right opportunities, and move from interest to implementation. He brings executive experience across technology, operations, connectivity, cloud, and cybersecurity.",
    chips: [
      "AI strategy",
      "Leadership alignment",
      "Business systems",
      "Enablement",
    ],
  },
  {
    name: "Chad Beauchamp",
    initials: "CB",
    photo: "/images/CB.avif",
    role: "Co-Founder & CEO",
    bio:
      "Chad leads product thinking, delivery discipline, and the build capability behind Origin AI. He brings years of experience turning business needs into software, websites, and digital systems.",
    chips: [
      "Product direction",
      "Software delivery",
      "AI-assisted build",
      "Digital systems",
    ],
  },
  {
    name: "Taylor Crawford",
    initials: "TC",
    photo: "/images/TC.avif",
    role: "Co-Founder, Growth & Partnerships",
    bio:
      "Taylor brings commercial strategy, marketing, and partnership experience to Origin AI. He helps connect AI opportunities to market realities, client needs, and business growth.",
    chips: [
      "Partnerships",
      "Growth strategy",
      "Market positioning",
      "Client relationships",
    ],
  },
];

export default function DraftTeamPage() {
  return (
    <main>
      {/* svc-dark + svc-dark--team carry the new dark hero treatment
          and this page's overrides. Both classes exist only on draft
          pages, so the live /team route is unaffected. */}
      <div className="bp-page bp-page--team svc-dark svc-dark--team">
        <div className="bp-grain" aria-hidden="true" />

        {/* Internal draft banner. Delete when this page goes live. */}
        <div className="draft-banner" role="note">
          Internal draft. Not indexed, not linked, live /team unchanged.
        </div>

        <div className="bp-hero-shell">
          <HeroNav />

          {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
          <section className="wrap bp-hero" data-screen-label="Team hero">
            {/* Breadcrumb only. The "The people behind the work" label and
                the TEAM eyebrow are both removed. */}
            <div className="bp-hero-meta bp-hero-meta--crumb-only">
              <span>
                <a href="/">← Origin AI</a>
                <span className="crumb-sep">/</span>
                <span>Team</span>
              </span>
            </div>

            <h1 className="bp-hero-h1 bp-hero-h1--bare">
              Senior people,{" "}
              <span className="accent">close to the work.</span>
            </h1>

            <p className="bp-hero-sub">
              Origin AI is led by business, technology, and marketing
              operators who work directly with clients across AI strategy,
              training, workflow development, and ongoing improvement.
            </p>

            <div className="bp-hero-actions">
              <a href="/contact" className="pill pill-primary">
                Book a discovery session
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="/services" className="pill pill-secondary">
                Explore services
              </a>
            </div>

            <div className="bp-hero-footer">
              <div className="bp-hero-foot-col">
                <div className="k">Team</div>
                <div className="v">3 partners</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Model</div>
                <div className="v">Senior-led</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Delivery</div>
                <div className="v">End-to-end</div>
              </div>
            </div>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: PARTNER CARDS ──────────────────────────── */}
        {/* Cards, photos, roles, bios, and chips preserved from the live
            page. The FOUNDING TEAM eyebrow is replaced by the streak. */}
        <section className="bp-team" data-screen-label="The people leading the work">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                {/* Homepage brand streak. Used once, opening the body
                    content after the hero. */}
                <span className="hero-mark bp-streak" aria-hidden="true">
                  <span className="hero-mark-dot" />
                  <span className="hero-mark-line" />
                </span>
                <h2 className="section-h2 bp-h2--accented">
                  The people leading the work.
                </h2>
              </div>
              <p className="section-lede lede">
                Three partners with operator experience across AI strategy,
                software delivery, and growth. Senior on every engagement.
              </p>
            </div>

            <div className="bp-team-grid">
              {PARTNERS.map((p) => (
                <article className="bp-team-card" key={p.name}>
                  <div className="bp-team-photo">
                    {p.photo ? (
                      <img src={p.photo} alt={p.name} loading="lazy" />
                    ) : (
                      <span aria-hidden="true">{p.initials}</span>
                    )}
                  </div>
                  <h3 className="bp-team-name">{p.name}</h3>
                  <div className="bp-team-role">{p.role}</div>
                  <p className="bp-team-bio">{p.bio}</p>
                  <ul className="bp-team-chips" aria-label="Focus areas">
                    {p.chips.map((c) => (
                      <li className="bp-team-chip" key={c}>
                        {c}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: HOW WE WORK ────────────────────────────── */}
        {/* The HOW WE WORK eyebrow is replaced by a teal rule. The three
            proof points render as a plain inline row, no dot bullets. */}
        <section className="bp-statement" data-screen-label="How we work">
          <div className="wrap">
            <div className="bp-statement-inner">
              <span className="bp-rule" aria-hidden="true" />
              <h2 className="bp-statement-h2 bp-h2--accented">
                You work with the people{" "}
                <span className="muted">responsible for the outcome.</span>
              </h2>
              <p className="bp-statement-body">
                We are intentionally senior and hands-on. The people shaping
                the strategy stay close to the build, the delivery, and the
                client relationship. That keeps the work focused, accountable,
                and tied to business value.
              </p>
              <ul className="bp-statement-points" aria-label="How we work">
                <li>Senior on the work</li>
                <li>Close to the client</li>
                <li>Accountable for the outcome</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: CTA ────────────────────────────────────── */}
        {/* No eyebrow. The CTA panel carries the section. */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            <div className="bp-cta-inner bp-cta-inner--bare">
              <h2>Talk with the team.</h2>
              <p>
                Let&rsquo;s discuss where AI fits, what your team needs, and
                which opportunities are worth turning into training,
                workflows, or systems.
              </p>
              <div className="bp-cta-actions">
                <a href="/contact" className="pill pill-primary">
                  Book a discovery session
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a href="/services" className="pill pill-secondary">
                  See our services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
