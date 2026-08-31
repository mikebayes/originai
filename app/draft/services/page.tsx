import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";
import {
  MarkAlign,
  MarkRoster,
  MarkFlow,
  MarkSteps,
} from "@/components/draft/ServiceMarks";

/**
 * /draft/services — DRAFT of the repositioned Services page.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /services route is untouched.
 *
 * Repositioning: away from build-first "custom AI software" toward
 * adoption: leadership enablement, team AI training, workflow
 * development, and managed improvement. Custom software remains one
 * possible output of workflow development, not the headline.
 *
 * Four-part service model:
 *   1. Leadership AI Enablement   -> /services/strategy
 *   2. Team AI Enablement         -> /services/ai-training (route TBD)
 *   3. AI Workflow Development    -> /services/build
 *   4. Managed AI Improvement     -> /services/managed
 *
 * No image panels anywhere on the page. The four service cards carry
 * small inline marks shared with the draft homepage, and the lower
 * starting-point section is a text-led chooser.
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ──────────────
   These become the live /services metadata when this page ships.     */
const EVENTUAL_SEO_TITLE =
  "AI Services Winnipeg | AI Training, Enablement & Workflow Development | Origin AI";
const EVENTUAL_SEO_DESCRIPTION =
  "Origin AI provides AI services for organizations in Winnipeg and across Canada, including leadership AI enablement, team AI training, workflow development, and managed AI improvement.";

/* Suggested future global footer blurb (do NOT change global footer yet):
   "Leadership AI enablement, team AI training, workflow development,
   and managed AI improvement for organizations in Winnipeg and across
   Canada." */

export const metadata: Metadata = {
  title: "DRAFT · Services | Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

// Referenced so the constants are "used" and survive lint while the
// draft is under review.
void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

export default function DraftServicesPage() {
  return (
    <main>
      <div className="svcs-v2 svcs-draft draft-hero draft-hero--pillar">
        {/* Internal draft banner. Delete when this page goes live. */}
        <div className="draft-banner" role="note">
          Internal draft. Not indexed, not linked, live /services unchanged.
        </div>

        <HeroNav />

        {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
        <section className="wrap s-hero" data-screen-label="Draft services hero">
          <div className="s-hero-grid">
            <div>
              {/* No eyebrow. The H1 states the page. */}
              <h1 className="s-hero-h1 bp-hero-h1--bare">
                AI services for companies{" "}
                <span className="muted">moving from interest to adoption.</span>
              </h1>
              {/* Location language is handled in SEO metadata and the
                  footer, not repeated in every service-page hero. */}
              <p className="s-hero-sub">
                Origin helps organizations adopt AI through leadership
                alignment, team training, workflow development, and ongoing
                improvement.
              </p>
            </div>

            {/* Right rail — four-part service model card.
                Placeholder for the eventual designed 4-part visual. */}
            <aside className="svc-diagram" aria-label="Four-part service model">
              <div className="svc-diagram-head">
                <span className="svc-diagram-title">
                  Origin · Service model
                </span>
                <span className="svc-diagram-status">
                  <span className="dot" />Placeholder
                </span>
              </div>
              <div className="svc-rows">
                <div className="svc-row">
                  <span className="svc-row-num">Leadership</span>
                  <span className="svc-row-name">Leadership AI Enablement</span>
                  <span className="svc-row-tag">Align</span>
                </div>
                <div className="svc-row">
                  <span className="svc-row-num">Team</span>
                  <span className="svc-row-name">Team AI Enablement</span>
                  <span className="svc-row-tag">Train</span>
                </div>
                <div className="svc-row center">
                  <span className="svc-row-num">Workflows</span>
                  <span className="svc-row-name">AI Workflow Development</span>
                  <span className="svc-row-tag">Develop</span>
                </div>
                <div className="svc-row">
                  <span className="svc-row-num">Improvement</span>
                  <span className="svc-row-name">Managed AI Improvement</span>
                  <span className="svc-row-tag">Improve</span>
                </div>
              </div>
              <div className="svc-diagram-foot">
                <span>Visual placeholder · four-part Origin service model</span>
              </div>
            </aside>
          </div>
        </section>


        {/* ─── SECTION 2: WHAT WE DO (four cards, 2x2) ─────────── */}
        <section className="wrap section" data-screen-label="What we do">
          <div className="s-head">
            <div>
              {/* Homepage brand streak. Used once, opening the body
                  content after the hero. */}
              <span className="hero-mark bp-streak" aria-hidden="true">
                <span className="hero-mark-dot" />
                <span className="hero-mark-line" />
              </span>
              <h2 className="s-h2 bp-h2--accented">
                AI services built around{" "}
                <span className="muted">how companies adopt AI.</span>
              </h2>
            </div>
            <p className="s-lede">
              Some organizations need leadership alignment. Some need team
              training. Some need help turning a workflow opportunity into
              something their team can use. Origin helps across that path.
            </p>
          </div>

          <div className="quad">
            {/* Card 1 — Leadership */}
            <article className="svc-card" id="leadership">
              {/* Small inline mark, shared with the draft homepage service
                  cards. Replaces the previous full-height framed image
                  band so the four cards stay scannable. */}
              <div className="svc-mark-row" aria-hidden="true">
                <MarkAlign />
              </div>
              <div className="svc-card-body">
                <span className="svc-card-num">Leadership</span>
                <h3 className="svc-card-title">Leadership AI Enablement</h3>
                <p className="svc-card-promise">
                  Align your leadership team around where AI fits, what
                  standards matter, and which opportunities should move
                  first.
                </p>
                <div className="svc-card-foot">
                  <a href="/services/strategy" className="tlink">
                    Learn more <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="svc-card-anchor">/services/strategy</span>
                </div>
              </div>
            </article>

            {/* Card 2 — Team */}
            <article className="svc-card" id="team">
              {/* Small inline mark, shared with the draft homepage service
                  cards. Replaces the previous full-height framed image
                  band so the four cards stay scannable. */}
              <div className="svc-mark-row" aria-hidden="true">
                <MarkRoster />
              </div>
              <div className="svc-card-body">
                <span className="svc-card-num">Team</span>
                <h3 className="svc-card-title">Team AI Enablement</h3>
                <p className="svc-card-promise">
                  AI training for teams, built around the work people already
                  do: writing, research, analysis, documents, decisions, and
                  client service.
                </p>
                <div className="svc-card-foot">
                  <a href="/services/ai-training" className="tlink">
                    Explore AI training{" "}
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="svc-card-anchor">/services/ai-training</span>
                </div>
              </div>
            </article>

            {/* Card 3 — Workflows */}
            <article className="svc-card" id="workflows">
              {/* Small inline mark, shared with the draft homepage service
                  cards. Replaces the previous full-height framed image
                  band so the four cards stay scannable. */}
              <div className="svc-mark-row" aria-hidden="true">
                <MarkFlow />
              </div>
              <div className="svc-card-body">
                <span className="svc-card-num">Workflows</span>
                <h3 className="svc-card-title">AI Workflow Development</h3>
                <p className="svc-card-promise">
                  Turn the right opportunities into assistants, automations,
                  integrations, workflow tools, or custom software when the
                  workflow is worth keeping.
                </p>
                <div className="svc-card-foot">
                  <a href="/services/build" className="tlink">
                    Explore workflow development{" "}
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="svc-card-anchor">/services/build</span>
                </div>
              </div>
            </article>

            {/* Card 4 — Improvement */}
            <article className="svc-card" id="improvement">
              {/* Small inline mark, shared with the draft homepage service
                  cards. Replaces the previous full-height framed image
                  band so the four cards stay scannable. */}
              <div className="svc-mark-row" aria-hidden="true">
                <MarkSteps />
              </div>
              <div className="svc-card-body">
                <span className="svc-card-num">Improvement</span>
                <h3 className="svc-card-title">Managed AI Improvement</h3>
                <p className="svc-card-promise">
                  Keep useful AI workflows supported, refined, and expanded
                  after launch.
                </p>
                <div className="svc-card-foot">
                  <a href="/services/managed" className="tlink">
                    Learn more <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="svc-card-anchor">/services/managed</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ─── SECTION 3: HOW WE ENGAGE (journey rail) ─────────── */}
        <section className="engage" id="engage" data-screen-label="How we engage">
          <div className="wrap engage-inner">
            <div className="s-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="s-h2 bp-h2--accented">
                  A simple path from interest to adoption.
                </h2>
              </div>
              <p className="s-lede">
                We help clients identify where AI fits, build capability where
                it matters, and develop tools only when the opportunity is
                clear.
              </p>
            </div>

            {/* Journey rail: connected 4-step line on desktop, stacked on
                mobile. Reuses the phase-rail visual language with shorter
                copy so it reads as an infographic, not paragraphs. */}
            <div className="phase-rail journey-rail">
              <div className="phase">
                <div className="phase-marker">
                  <span className="phase-dot" />
                  <span className="phase-num">Discover</span>
                </div>
                <h3 className="phase-name">Understand the opportunity.</h3>
                <p className="phase-body">
                  Identify where AI could improve work, decisions,
                  consistency, or speed.
                </p>
                <div className="phase-deliver">
                  <span className="label">Leave with</span>
                  <span className="item">Initial opportunity map</span>
                  <span className="item">Priority areas</span>
                  <span className="item">Shared direction</span>
                </div>
              </div>

              <div className="phase">
                <div className="phase-marker">
                  <span className="phase-dot" />
                  <span className="phase-num">Enable</span>
                </div>
                <h3 className="phase-name">
                  Build leadership and team capability.
                </h3>
                <p className="phase-body">
                  Align leaders, train teams, and give people examples tied to
                  their real work.
                </p>
                <div className="phase-deliver">
                  <span className="label">Leave with</span>
                  <span className="item">Leadership alignment</span>
                  <span className="item">Team capability</span>
                  <span className="item">Clear next steps</span>
                </div>
              </div>

              <div className="phase">
                <div className="phase-marker">
                  <span className="phase-dot" />
                  <span className="phase-num">Develop</span>
                </div>
                <h3 className="phase-name">
                  Operationalize the right workflow.
                </h3>
                <p className="phase-body">
                  When a workflow is worth keeping, we build the assistant,
                  automation, integration, or tool to support it.
                </p>
                <div className="phase-deliver">
                  <span className="label">Leave with</span>
                  <span className="item">Working solution</span>
                  <span className="item">Clear ownership</span>
                  <span className="item">Launch support</span>
                </div>
              </div>

              <div className="phase">
                <div className="phase-marker">
                  <span className="phase-dot" />
                  <span className="phase-num">Improve</span>
                </div>
                <h3 className="phase-name">Keep what works moving.</h3>
                <p className="phase-body">
                  Support, refine, and expand the AI workflows that get
                  adopted.
                </p>
                <div className="phase-deliver">
                  <span className="label">Leave with</span>
                  <span className="item">Ongoing improvement</span>
                  <span className="item">Support and optimization</span>
                  <span className="item">Next-phase opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: WHERE CLIENTS START ──────────────────── */}
        <section className="wrap section" data-screen-label="Where clients start">
          <div className="s-head">
            <div>
              <span className="bp-rule" aria-hidden="true" />
              <h2 className="s-h2 bp-h2--accented">
                You do not need to know exactly where to start.
              </h2>
            </div>
            <p className="s-lede">
              You do not need to arrive with a finished AI plan or a software
              idea. Most engagements start with a leadership question, a team
              capability gap, or a workflow that needs to work better.
            </p>
          </div>

          {/* Starting-point chooser. Deliberately lighter than the four
              service cards above: no framed visuals, no borders on three
              sides, no card fill. A hairline top rule with a small teal
              index number carries each option, so this reads as a set of
              routes rather than a second services grid. */}
          <div className="start-chooser">
            <a href="/services/strategy" className="start-opt">
              <span className="start-opt-num">01</span>
              <span className="start-opt-body">
                <span className="start-opt-title">
                  Start with leadership alignment
                </span>
                <span className="start-opt-desc">
                  For organizations that need clarity on AI priorities,
                  standards, risks, and next steps.
                </span>
                <span className="start-opt-cta">
                  Explore leadership enablement
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </span>
            </a>

            <a href="/services/ai-training" className="start-opt">
              <span className="start-opt-num">02</span>
              <span className="start-opt-body">
                <span className="start-opt-title">
                  Start with team training
                </span>
                <span className="start-opt-desc">
                  For teams that need hands-on AI training tied to their
                  actual work.
                </span>
                <span className="start-opt-cta">
                  Explore team training
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </span>
            </a>

            <a href="/services/build" className="start-opt">
              <span className="start-opt-num">03</span>
              <span className="start-opt-body">
                <span className="start-opt-title">
                  Start with a workflow opportunity
                </span>
                <span className="start-opt-desc">
                  For teams that already see a process that could be faster,
                  more consistent, or easier to manage.
                </span>
                <span className="start-opt-cta">
                  Explore workflow development
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </span>
            </a>
          </div>
        </section>

        {/* ─── SECTION 5: PROOF / TESTIMONIAL ──────────────────── */}
        <section className="wrap section" data-screen-label="Customer spotlight">
          <div className="s-head">
            <div>
              <span className="bp-rule" aria-hidden="true" />
              <h2 className="s-h2 bp-h2--accented">
                How leaders are putting AI to work.
              </h2>
            </div>
            <p className="s-lede">
              A sample of the work and the people behind it.
            </p>
          </div>

          <div className="proof-feature">
            <div className="proof-quote-col">
              <span className="proof-mark">&ldquo;</span>
              <p className="proof-quote">
                Origin{" "}
                <span className="accent">shifted the way our team thinks.</span>{" "}
                They taught us how to frame problems in a way that unlocks
                better solutions. That shift alone has changed how we operate.
              </p>
            </div>
            <div className="proof-attr-col">
              <div className="proof-engagement">
                <span className="label">Engagement</span>
                <span className="value">
                  Leadership AI Enablement + Team AI Training
                </span>
              </div>
              <div className="proof-attr">
                <div className="proof-avatar">
                  <img
                    src="/images/testimonial-doug-darling.png"
                    alt="Doug Darling"
                  />
                </div>
                <div className="meta">
                  <span className="name">Doug Darling</span>
                  <span className="role">CEO, Tripwire Media Group</span>
                  <a
                    href="https://www.tripwiremedia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site"
                  >
                    tripwiremedia.com ↗
                  </a>
                </div>
                <div className="proof-attr-logo">
                  <div className="client-logo-card spotlight-logo">
                    <img
                      src="/logos/clients/tripwire.png"
                      alt="Tripwire Media Group"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wordmark-strip">
            <span className="wordmark-strip-label">
              <span className="bar" />Selected clients
            </span>
            <div className="wordmark-row">
              <span className="wordmark">Tripwire Media Group</span>
              <span className="wordmark">Direct Focus</span>
              <span className="wordmark">Thor Plumbing &amp; Heating</span>
              <span className="wordmark">Equipco Ltd.</span>
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: CTA ──────────────────────────────────── */}
        <section className="wrap section draft-cta" data-screen-label="CTA">
          <div className="draft-cta-inner">
            <h2 className="s-h2">Ready to put AI to work?</h2>
            <p className="draft-cta-body">
              Start with a 30-minute call. We&rsquo;ll talk through your team,
              your workflows, and where AI may be worth pursuing first.
            </p>
            <div className="draft-cta-actions">
              <a href="/contact" className="pill pill-primary">
                Book a discovery session
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="/services/ai-training" className="pill pill-ghost">
                Explore AI training
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
