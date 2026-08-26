import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/services/strategy — DRAFT Leadership AI Enablement page.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /services/strategy route is untouched.
 *
 * Update 3 (simplify + reorder): the page now runs seven sections and
 * leads with buyer symptoms instead of a thesis statement.
 *
 *   1. Hero
 *   2. You are probably here because one of these is true
 *   3. What we help leadership decide
 *   4. How the engagement works (+ compact Mike Bayes trust card)
 *   5. Clarity your team can act on
 *   6. The next step should become obvious
 *   7. CTA
 *
 * Removed as standalone sections in update 3: "Decisions before tools",
 * Team Readiness / AI training, the full-width Mike Bayes bio section
 * (folded into a compact trust card in section 4), and the FAQ. Team
 * training now surfaces through the "Team AI Training" next-step card
 * in section 6 rather than its own section.
 *
 * Rides the existing bp-page--strategy design system (brass accent,
 * hero shell, work grid, fit grid, outputs list, CTA) so no new visual
 * language is introduced.
 *
 * TODO (launch task, NOT draft-scoped): the Services dropdown labels
 * live in components/NavServicesDropdown.tsx and
 * components/NavServicesAccordion.tsx, shared by HeroNav and the global
 * StickyNav. They cannot change for this draft without affecting every
 * live page. When the repositioning ships, update both in one pass:
 *   "AI Software & Systems"  -> "AI Workflow Development"
 *   "AI Strategy & Training" -> "Leadership AI Enablement"
 *   "Managed AI"             -> "Managed AI Improvement"
 *   + add 4th item: "Team AI Enablement / AI Training" -> /services/ai-training
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ──────────────
   Location language lives here and in the footer, not in hero copy.   */
const EVENTUAL_SEO_TITLE =
  "AI Consulting Winnipeg | Leadership AI Enablement | Origin AI";
const EVENTUAL_SEO_DESCRIPTION =
  "Origin AI provides Leadership AI Enablement for organizations in Winnipeg and across Canada, helping leadership teams align around AI priorities, responsible use, team adoption, and workflow opportunities.";

export const metadata: Metadata = {
  title: "DRAFT · Leadership AI Enablement | Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

export default function DraftLeadershipEnablementPage() {
  return (
    <main>
      <div className="bp-page bp-page--strategy">
        <div className="bp-grain" aria-hidden="true" />

        {/* Internal draft banner. Delete when this page goes live. */}
        <div className="draft-banner" role="note">
          Internal draft. Not indexed, not linked, live /services/strategy
          unchanged.
        </div>

        <div className="bp-hero-shell">
          <HeroNav />

          {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
          <section
            className="wrap bp-hero"
            data-screen-label="Leadership enablement hero"
          >
            <div className="bp-hero-meta">
              <span>
                <a href="/services">← Services</a>
                <span className="crumb-sep">/</span>
                <span>Leadership AI Enablement</span>
              </span>
              <span>01 / 04 — Leadership</span>
            </div>

            <div className="bp-hero-eyebrow">
              <span className="dot" />
              <span>Leadership AI Enablement</span>
              <span className="bar" />
            </div>

            <h1 className="bp-hero-h1">
              Help your leadership team decide{" "}
              <span className="accent">where AI fits.</span>
            </h1>

            {/* Location language is handled in SEO metadata and the footer,
                not repeated in every service-page hero. */}
            <p className="bp-hero-sub">
              Origin helps leadership teams align around AI priorities,
              responsible use, team adoption, and workflow opportunities worth
              pursuing.
            </p>

            <div className="bp-hero-actions">
              <a href="/contact" className="pill pill-primary">
                Book a discovery session
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="/services" className="pill pill-secondary">
                ← Back to services
              </a>
            </div>

            <div className="bp-hero-footer">
              <div className="bp-hero-foot-col">
                <div className="k">Engagement</div>
                <div className="v">1–4 weeks</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Format</div>
                <div className="v">On-site, remote, or hybrid</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Outcome</div>
                <div className="v">Priorities, standards, next steps</div>
              </div>
            </div>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: IF THIS SOUNDS FAMILIAR ────────────────── */}
        <section className="bp-fit" data-screen-label="If this sounds familiar">
          <div className="wrap">
            <div className="bp-fit-head">
              <div className="eyebrow">
                <span className="bar" />
                If this sounds familiar
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                You are probably here because{" "}
                <span className="muted">one of these is true.</span>
              </h2>
              <p className="section-lede">
                This work is for organizations that know AI matters, but need
                clearer direction before investing heavily in tools, software,
                or internal change.
              </p>
            </div>

            <div className="bp-fit-grid">
              {[
                [
                  "Your leadership team does not yet share the same view of AI.",
                  "Clarify where AI fits, what matters, and what decisions need to be made.",
                ],
                [
                  "People are using AI, but inconsistently.",
                  "Create shared expectations, examples, and responsible-use guidance.",
                ],
                [
                  "You have too many AI ideas and no clear filter.",
                  "Separate useful opportunities from distractions and decide what should move first.",
                ],
                [
                  "You see workflow potential, but the first move is unclear.",
                  "Turn the strongest opportunity into a clearer path: training, pilot, workflow improvement, or build.",
                ],
              ].map(([h, sub], i) => (
                <div className="bp-fit-cell" key={i}>
                  <span className="bp-fit-mark" aria-hidden="true">
                    <span className="dot" />
                    <span className="bar" />
                  </span>
                  <h3>{h}</h3>
                  <p>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="wrap">
          <div className="chapter-rule">
            <span className="pill-marker">
              <span className="dot" />
              What leaders need to decide
            </span>
          </div>
        </div>

        {/* ─── SECTION 3: WHAT LEADERS NEED TO DECIDE ────────────── */}
        <section
          className="bp-work"
          data-screen-label="What leaders need to decide"
        >
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <div className="eyebrow">
                  <span className="bar" />
                  What leaders need to decide
                </div>
                <h2 className="section-h2" style={{ marginTop: 24 }}>
                  What we help{" "}
                  <span className="muted">leadership decide.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                The work depends on where your organization is starting. Some
                teams need shared direction. Some need clearer standards. Some
                need to identify the first workflow worth improving.
              </p>
            </div>

            <div className="bp-work-grid">
              {[
                [
                  "01",
                  "Where AI belongs",
                  "Which teams, workflows, and business problems are worth attention first.",
                ],
                [
                  "02",
                  "What rules matter",
                  "Tool use, data boundaries, review expectations, and risk guardrails.",
                ],
                [
                  "03",
                  "What is worth pursuing",
                  "The AI opportunities that have enough value, fit, and ownership to move forward.",
                ],
                [
                  "04",
                  "What happens next",
                  "Whether the next step is training, workflow support, a pilot, or a defined build.",
                ],
              ].map(([num, title, body]) => (
                <div className="bp-work-cell" key={num}>
                  <div className="num">{num}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: HOW THE ENGAGEMENT WORKS ───────────────── */}
        <section className="bp-howitworks" data-screen-label="How it works">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <div className="eyebrow">
                  <span className="bar" />
                  How it works
                </div>
                <h2 className="section-h2" style={{ marginTop: 24 }}>
                  How the{" "}
                  <span className="muted">engagement works.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                Most Leadership AI Enablement engagements combine focused
                leadership sessions, light discovery, and a clear set of
                recommendations.
              </p>
            </div>

            <div className="bp-steps">
              {[
                [
                  "01",
                  "Prepare",
                  "Understand your team, current AI use, priorities, and concerns.",
                ],
                [
                  "02",
                  "Align",
                  "Facilitate leadership discussion around AI use, risk, opportunities, adoption, and ownership.",
                ],
                [
                  "03",
                  "Decide",
                  "Define what should move first: team training, workflow support, a pilot, or a build.",
                ],
              ].map(([num, title, body]) => (
                <div className="bp-step" key={num}>
                  <span className="bp-step-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>

            {/* Compact trust card. Replaces the previous full-width bio
                section so credibility lands without stopping the page. */}
            <div className="bp-trust-card">
              <div className="bp-trust-photo">
                <img src="/images/MB.avif" alt="Mike Bayes" loading="lazy" />
              </div>
              <div className="bp-trust-body">
                <span className="bp-trust-label">Led by Mike Bayes</span>
                <p>
                  Leadership AI Enablement engagements are led by Mike Bayes,
                  President of Origin AI, with 25+ years of senior technology
                  and business leadership experience across strategy,
                  operations, cybersecurity, and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: CLARITY TO ACT ─────────────────────────── */}
        <section className="bp-outputs" data-screen-label="Clarity to act">
          <div className="wrap">
            <div className="bp-outputs-head">
              <div>
                <div className="eyebrow">
                  <span className="bar" />
                  Clarity to act
                </div>
                <h2 className="section-h2" style={{ marginTop: 24 }}>
                  Clarity your team{" "}
                  <span className="muted">can act on.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                The goal is not a long strategy document. The goal is a
                clearer organization and a sharper next step.
              </p>
            </div>

            <div className="bp-outputs-list">
              {[
                [
                  "01",
                  "Shared direction",
                  "A clearer view of where AI fits, what matters most, and what should move first.",
                ],
                [
                  "02",
                  "Responsible-use expectations",
                  "A working view of tools, data boundaries, review standards, and risk areas.",
                ],
                [
                  "03",
                  "Prioritized opportunities",
                  "A shortlist of AI opportunities ordered by value, effort, risk, and fit.",
                ],
                [
                  "04",
                  "A defined next step",
                  "A clear decision on whether to train, test, improve a workflow, or define a build.",
                ],
              ].map(([num, h, p]) => (
                <div className="bp-output-row" key={num}>
                  <div className="num">{num}</div>
                  <div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: THE NEXT MOVE ──────────────────────────── */}
        <section className="bp-bridge" data-screen-label="The next move">
          <div className="wrap">
            <div className="bp-bridge-head">
              <div className="eyebrow">
                <span className="bar" />
                The next move
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                The next step{" "}
                <span className="muted">should become obvious.</span>
              </h2>
            </div>

            <p className="bp-rail-statement">
              Sometimes the next step is team training. Sometimes it is a
              workflow worth improving. Sometimes it is a tool, assistant,
              automation, or integration. The point is to stop guessing and
              choose the next move with intent.
            </p>

            <div className="bp-next-grid">
              <a href="/services/ai-training" className="bp-next-card">
                <span className="bp-next-label">Next step</span>
                <h3>Team AI Training</h3>
                <p>Train staff with examples tied to their work.</p>
                <span className="bp-next-link">
                  Explore AI training{" "}
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
              <a href="/services/build" className="bp-next-card">
                <span className="bp-next-label">Next step</span>
                <h3>AI Workflow Development</h3>
                <p>
                  Turn a defined opportunity into a tool, assistant,
                  automation, integration, or workflow solution.
                </p>
                <span className="bp-next-link">
                  Explore workflow development{" "}
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
              <a href="/services/managed" className="bp-next-card">
                <span className="bp-next-label">Next step</span>
                <h3>Managed AI Improvement</h3>
                <p>Support and improve what gets adopted.</p>
                <span className="bp-next-link">
                  Learn more <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: CTA ────────────────────────────────────── */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            <div className="bp-cta-inner">
              <div className="bp-cta-eyebrow">
                <span className="dot" />
                Talk to us
              </div>
              <h2>Ready to align your team around AI?</h2>
              <p>
                Let&rsquo;s talk about your leadership team, your people, and
                where AI should fit.
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
