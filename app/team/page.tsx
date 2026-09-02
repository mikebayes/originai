import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /team — the Origin AI team.
 *
 * Promoted from /draft/team. Replaces the previous live page, which was
 * rendered by components/TeamPage.tsx (now unused).
 *
 * SEO job: trust plus local consultant searches. Supports "AI consultants
 * Winnipeg", "AI consultant Winnipeg", and named-partner queries.
 *
 * Worth knowing before editing: SE Ranking has /team ranking position 6
 * for "AI consultant Winnipeg", and GSC shows 1,645 impressions and 13
 * clicks on this route. The previous live page held that ranking on its
 * meta description alone, with zero "Winnipeg" or "consultant" mentions
 * in body copy. The hero subheadline now says "Winnipeg-based", so the
 * signal is in visible copy for the first time. Do not remove it without
 * checking GSC.
 */

export const metadata: Metadata = {
  title:
    "AI Consultants Winnipeg | Origin AI Team",
  description:
    "Meet the Origin AI team: Winnipeg-based business, technology, and marketing operators helping organizations apply AI to real work.",
  alternates: { canonical: "https://www.originai.ca/team" },
};

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

export default function TeamRoute() {
  return (
    <main>
      {/* svc-dark + svc-dark--team carry the new dark hero treatment
          and this page's overrides. Both classes exist only on draft
          pages, so the live /team route is unaffected. */}
      <div className="bp-page bp-page--team svc-dark svc-dark--team">
        <div className="bp-grain" aria-hidden="true" />

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

            {/* Was "Senior people, close to the work." Both halves were
                retired: "close to the work" is the abstract construction
                dropped from the homepage team card, and leading on
                seniority put a claim in the H1 that the page evidences
                below anyway. This states the actual promise instead, and
                deliberately avoids the "The people ... work" construction
                used by the section 2 heading. */}
            <h1 className="bp-hero-h1 bp-hero-h1--bare">
              The team you meet{" "}
              <span className="accent">is the team you get.</span>
            </h1>

            {/* "Winnipeg-based" is the only local signal in this page's
                visible copy, and /team is the ranking URL for "AI consultant
                Winnipeg" (position 6). Keep it. */}
            <p className="bp-hero-sub">
              Origin AI is led by Winnipeg-based business, technology, and
              marketing operators who work directly with clients across AI
              strategy, training, workflow development, and ongoing
              improvement.
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

            {/* "3 partners" retired here along with "Three partners" in the
                section 2 lede: the count was never the point. The strip now
                names the disciplines instead, which is the actual claim. */}
            <div className="bp-hero-footer">
              <div className="bp-hero-foot-col">
                <div className="k">Team</div>
                <div className="v">Business, technology, marketing</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Model</div>
                <div className="v">Senior-led and hands-on</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Focus</div>
                <div className="v">Strategy, training, workflows</div>
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
                Operators with experience across AI strategy, software
                delivery, and growth. Senior on every engagement.
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
