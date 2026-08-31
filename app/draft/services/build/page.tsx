import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/services/build — DRAFT AI Workflow Development page.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /services/build route is untouched.
 *
 * Update 4 (business-facing reframe): the page now leads with
 * recognizable business work instead of abstract workflow language. The
 * most concrete section is "The work we can help improve" (sales,
 * customer response, service delivery, content, dashboards, knowledge).
 * "What we build" sits underneath it as the secondary answer to form,
 * deliberately lighter so it does not outweigh the business framing.
 *
 *   1. Hero
 *   2. Where build starts (3 cards, connects to the other services)
 *   3. The work we can help improve (6 business-facing cards)
 *   4. What we build (5 compact cards, visually secondary)
 *   5. How it works (4 steps + workflow visual)
 *   6. CTA
 *
 * Removed in update 4: "What you get" (folded into How it works and the
 * hero outputs strip), and the last of the generic workflow-encyclopedia
 * copy. "AI-enabled workflow" as a phrase is retired.
 *
 * TODO (launch task, NOT draft-scoped): Services dropdown labels live in
 * components/NavServicesDropdown.tsx and NavServicesAccordion.tsx, shared
 * by HeroNav and the global StickyNav. When the repositioning ships:
 *   "AI Software & Systems"  -> "AI Workflow Development"
 *   "AI Strategy & Training" -> "Leadership AI Enablement"
 *   "Managed AI"             -> "Managed AI Improvement"
 *   + add 4th item: "Team AI Enablement / AI Training" -> /services/ai-training
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ─────────────── */
const EVENTUAL_SEO_TITLE =
  "Custom AI Software Winnipeg | AI Workflow Development | Origin AI";
const EVENTUAL_SEO_DESCRIPTION =
  "Origin AI develops AI workflow tools, assistants, automations, integrations, and custom AI software for organizations that need to turn defined workflow opportunities into working solutions.";

export const metadata: Metadata = {
  title: "DRAFT · AI Workflow Development | Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

/* Review route: never serve a cached copy. Scoped to this draft page
   only, so the live marketing pages keep their static generation. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

export default function DraftWorkflowDevelopmentPage() {
  return (
    <main>
      {/* bp-page--workflow carries the per-page grid and spacing overrides
          for this page's card sections. */}
      <div className="bp-page bp-page--workflow draft-hero draft-hero--build">
        <div className="bp-grain" aria-hidden="true" />

        {/* Internal draft banner. Delete when this page goes live. */}
        <div className="draft-banner" role="note">
          Internal draft. Not indexed, not linked, live /services/build
          unchanged.
        </div>

        <div className="bp-hero-shell">
          <HeroNav />

          {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
          <section
            className="wrap bp-hero"
            data-screen-label="Workflow development hero"
          >
            {/* Breadcrumb only. No progress marker, no duplicate service
                label, no decorative accent above the H1. */}
            <div className="bp-hero-meta bp-hero-meta--crumb-only">
              <span>
                <a href="/services">← Services</a>
                <span className="crumb-sep">/</span>
                <span>AI Workflow Development</span>
              </span>
            </div>

            <h1 className="bp-hero-h1 bp-hero-h1--bare">
              Build AI tools around the work{" "}
              <span className="accent">your team already does.</span>
            </h1>

            {/* One subheadline only. Location language lives in SEO
                metadata and the footer, not in hero copy. */}
            <p className="bp-hero-sub">
              Origin turns recurring business processes into focused AI tools,
              assistants, automations, integrations, and internal systems your
              team can actually use.
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
                <div className="v">4–16 weeks</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Best fit</div>
                <div className="v">Recurring process with clear value</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Outputs</div>
                <div className="v">
                  AI tools, assistants, automations, integrations, or custom
                  software
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: WHERE BUILD STARTS ─────────────────────── */}
        <section className="bp-origin" data-screen-label="Where build starts">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                {/* Homepage brand streak. Used once on this page, as the
                    accent that opens the body content after the hero. */}
                <span className="hero-mark bp-streak" aria-hidden="true">
                  <span className="hero-mark-dot" />
                  <span className="hero-mark-line" />
                </span>
                <h2 className="section-h2 bp-h2--accented">
                  Useful AI tools start{" "}
                  <span className="muted">with real business problems.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                The strongest build opportunities usually appear when a team is
                dealing with work that takes too much time, depends on too much
                coordination, or requires the same judgment over and over.
              </p>
            </div>

            <div className="bp-origin-grid">
              <a href="/services/strategy" className="bp-origin-cell is-link">
                <h3>Identified through leadership enablement</h3>
                <p>
                  Leadership aligns on priorities, risk, ownership, and the
                  opportunities worth exploring.
                </p>
                <span className="bp-origin-link">
                  Leadership AI Enablement{" "}
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>

              {/* TODO: link this card to /services/ai-training once that
                  route exists. Omitted for now so the draft has no dead
                  links. */}
              <div className="bp-origin-cell">
                <h3>Discovered through team training</h3>
                <p>
                  Staff uncover repeatable use cases while working with real
                  documents, tasks, and decisions.
                </p>
              </div>

              <div className="bp-origin-cell">
                <h3>Brought as a known workflow problem</h3>
                <p>
                  A team already knows a process is too manual, inconsistent,
                  slow, or difficult to scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: THE WORK WE CAN HELP IMPROVE ───────────── */}
        {/* Most concrete section on the page. Deliberately the visual
            anchor: larger cards, more presence than section 4. */}
        <section className="bp-domains" data-screen-label="Where this shows up">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                {/* Plain heading. The split-colour treatment is reserved
                    for the hero and the first body section so it does not
                    read as the same component five times. */}
                <h2 className="section-h2 bp-h2--accented">
                  Where AI can make the biggest difference.
                </h2>
              </div>
              <p className="section-lede lede">
                The best opportunities usually sit inside familiar business
                activities: sales follow-up, proposal preparation, customer
                response, content production, reporting, document review, and
                knowledge lookup.
              </p>
            </div>

            <div className="bp-domain-grid">
              {[
                [
                  "Sales and proposal operations",
                  "Qualify opportunities, prepare proposals, reuse approved language, summarize client needs, and support follow-up.",
                ],
                [
                  "Customer response",
                  "Triage requests, draft responses, find answers, and route issues with human review built in.",
                ],
                [
                  "Service delivery",
                  "Structure intake, handoffs, approvals, status updates, and recurring coordination.",
                ],
                [
                  "Content and marketing",
                  "Plan, draft, review, repurpose, and adapt content using brand, audience, and channel guidance.",
                ],
                [
                  "Dashboards and insights",
                  "Turn data, reports, feedback, and activity into clearer dashboards, summaries, trends, and next-step recommendations.",
                ],
                [
                  "Knowledge and documents",
                  "Help teams find answers, review documents, compare information, and use policies, procedures, training material, or past work.",
                ],
              ].map(([h, p], i) => (
                <div className="bp-domain-cell" key={i}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: WHAT WE BUILD (secondary) ──────────────── */}
        {/* Intentionally lighter than section 3: smaller type, single
            row at desktop, no numbering. Answers "what form" after the
            business framing has already landed. */}
        <section className="bp-forms" data-screen-label="What we build">
          <div className="wrap">
            <div className="bp-forms-head">
              <span className="bp-rule" aria-hidden="true" />
              <h2 className="section-h2 bp-forms-h2 bp-h2--accented">
                What the solution can become.
              </h2>
              <p className="bp-forms-lede">
                Once the opportunity is clear, we choose the right shape for
                the solution.
              </p>
            </div>

            <div className="bp-form-grid">
              {[
                [
                  "AI assistants",
                  "Guided support inside a task, review, draft, analysis, or decision.",
                ],
                [
                  "Automations",
                  "Move information, prepare outputs, route requests, or reduce repetitive handoffs.",
                ],
                [
                  "Integrations",
                  "Connect the documents, data, systems, and tools the process depends on.",
                ],
                [
                  "Internal tools",
                  "Focused applications built around how a team operates.",
                ],
                [
                  "Custom AI software",
                  "Owned software when the opportunity is valuable enough to build around directly.",
                ],
              ].map(([h, p], i) => (
                <div className="bp-form-cell" key={i}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: HOW IT WORKS ───────────────────────────── */}
        <section className="bp-howitworks" data-screen-label="How it works">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  From idea to launch.
                </h2>
              </div>
              <p className="section-lede lede">
                We define the workflow first, then build only what the solution
                needs.
              </p>
            </div>

            {/* Steps on the left, workflow artifact on the right at
                desktop. Stacks on mobile. */}
            <div className="bp-flow-grid">
              <ol className="bp-flow-steps">
                {[
                  [
                    "01",
                    "Define",
                    "Clarify the users, inputs, outputs, decisions, risks, and success criteria.",
                  ],
                  [
                    "02",
                    "Prototype",
                    "Create a focused first version to prove the approach can help.",
                  ],
                  [
                    "03",
                    "Build",
                    "Develop the assistant, automation, integration, internal tool, or software around the validated approach.",
                  ],
                  [
                    "04",
                    "Launch",
                    "Support rollout, adoption, documentation, and early improvements.",
                  ],
                ].map(([num, title, body]) => (
                  <li className="bp-flow-step" key={num}>
                    <span className="bp-flow-num">{num}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* ── Workflow artifact ─────────────────────────────────
                  Replaces the dashed "Workflow visual" placeholder slot.
                  Built with inline SVG rather than an image so it uses
                  the site's own accent value and needs no asset.

                  Reads left to right, supporting the section lede "We
                  define the workflow first, then build only what the
                  solution needs":

                    left    three tilted fragments with broken, uneven
                            interior lines. Work as it actually arrives:
                            unstructured, inconsistent, partly missing.
                            Dashed connectors converge from all three.
                    centre  one small defined panel, softly lit. The
                            definition step. Deliberately the smallest
                            element on the canvas, because defining is
                            not where the bulk sits.
                    right   an ordered spine with three aligned nodes and
                            equal-length outputs. Same content, now a
                            system.

                  The middle node on the spine is the validated route: it
                  sits on the straight line out of the panel and carries
                  a soft halo. It is the only highlighted element.

                  One dashed stub leaves the spine at the top and fades
                  out. That is scope considered and not built, which is
                  the "only what the solution needs" half of the lede.

                  No text, no arrows, no people, no dashboard, no network
                  graphic. Hairlines and one accent hue throughout. */}
              <div className="wf-art" aria-hidden="true">
                <div className="wf-art-glow" />
                <svg
                  className="wf-svg"
                  viewBox="0 0 420 296"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <radialGradient id="wfPanelGlow">
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="wfNodeGlow">
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.34" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="wfPanelFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.11" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0.02" />
                    </linearGradient>
                    {/* userSpaceOnUse: both of these paint zero-width
                        vertical lines, whose object bounding box is
                        degenerate, which silently drops an
                        objectBoundingBox gradient entirely. */}
                    <linearGradient
                      id="wfSpine"
                      gradientUnits="userSpaceOnUse"
                      x1="311"
                      y1="100"
                      x2="311"
                      y2="240"
                    >
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.06" />
                      <stop offset="20%" stopColor="#5da89c" stopOpacity="0.32" />
                      <stop offset="80%" stopColor="#5da89c" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0.06" />
                    </linearGradient>
                    <linearGradient
                      id="wfFade"
                      gradientUnits="userSpaceOnUse"
                      x1="311"
                      y1="100"
                      x2="311"
                      y2="74"
                    >
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Soft light behind the definition panel */}
                  <ellipse
                    cx="216"
                    cy="170"
                    rx="104"
                    ry="88"
                    fill="url(#wfPanelGlow)"
                  />

                  {/* ── LEFT: unstructured input fragments ──────────── */}
                  <g className="wf-frags">
                    <g transform="rotate(-3.2 66 78)">
                      <rect
                        x="26"
                        y="52"
                        width="80"
                        height="52"
                        rx="4"
                        className="wf-frag-box"
                      />
                      <path d="M37 68 H79" className="wf-frag-line" />
                      <path d="M37 79 H92" className="wf-frag-line" />
                      <path d="M37 90 H62" className="wf-frag-line wf-dim" />
                    </g>

                    <g transform="rotate(2.6 68 148)">
                      <rect
                        x="34"
                        y="126"
                        width="70"
                        height="45"
                        rx="4"
                        className="wf-frag-box wf-frag-box--dashed"
                      />
                      <path d="M45 139 H90" className="wf-frag-line" />
                      <path d="M45 150 H72" className="wf-frag-line wf-dim" />
                      <path d="M45 160 H84" className="wf-frag-line wf-dim" />
                    </g>

                    <g transform="rotate(-1.4 64 216)">
                      <rect
                        x="24"
                        y="192"
                        width="82"
                        height="49"
                        rx="4"
                        className="wf-frag-box"
                      />
                      <path d="M35 207 H70" className="wf-frag-line wf-dim" />
                      <path d="M35 218 H95" className="wf-frag-line" />
                      <path d="M35 229 H58" className="wf-frag-line wf-dim" />
                    </g>
                  </g>

                  {/* Convergence: unclear work funnelling into definition */}
                  <g className="wf-converge">
                    <path d="M108 79 C 136 86, 150 128, 166 152" />
                    <path d="M106 148 C 130 154, 144 162, 166 168" />
                    <path d="M108 216 C 134 210, 148 198, 166 186" />
                  </g>

                  {/* ── CENTRE: the defined workflow ────────────────── */}
                  <rect
                    x="167"
                    y="119"
                    width="94"
                    height="102"
                    rx="9"
                    fill="url(#wfPanelFill)"
                    className="wf-panel"
                  />
                  <path d="M181 142 H239" className="wf-panel-line" />
                  <path d="M181 156 H225" className="wf-panel-line" />
                  <path d="M181 170 H233" className="wf-panel-line" />
                  <circle cx="185" cy="197" r="3.4" className="wf-panel-node" />
                  <path d="M192 197 H247" className="wf-panel-line wf-dim" />

                  {/* ── RIGHT: the ordered system ───────────────────── */}
                  {/* Trunk out of the panel into the spine */}
                  <path d="M261 170 H311" className="wf-route" />

                  {/* Spine */}
                  <path
                    d="M311 100 V 240"
                    stroke="url(#wfSpine)"
                    strokeWidth="1"
                  />

                  {/* Spine legs + nodes. Equal-length outputs. */}
                  <path d="M311 114 H352" className="wf-leg" />
                  <circle cx="311" cy="114" r="4" className="wf-node" />
                  <circle cx="357" cy="114" r="3" className="wf-tip" />

                  <path d="M311 226 H352" className="wf-leg" />
                  <circle cx="311" cy="226" r="4" className="wf-node" />
                  <circle cx="357" cy="226" r="3" className="wf-tip" />

                  {/* Validated route: the straight line out of the panel.
                      Only highlighted element on the canvas. */}
                  <circle
                    cx="311"
                    cy="170"
                    r="17"
                    fill="url(#wfNodeGlow)"
                  />
                  <path d="M311 170 H354" className="wf-leg wf-leg--live" />
                  <circle cx="311" cy="170" r="5.4" className="wf-node-live" />
                  <circle cx="360" cy="170" r="3.2" className="wf-tip-live" />

                  {/* Scope considered, not built. The spine simply keeps
                      going and fades out, rather than turning a corner,
                      which read as a stray box edge. */}
                  <path
                    d="M311 100 V 76"
                    stroke="url(#wfFade)"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: CTA ────────────────────────────────────── */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            {/* Option A chosen: no eyebrow, no accent mark. The CTA panel
                background and the button pair already carry the section,
                and a third streak on the page would dilute the one that
                opens the body content. */}
            <div className="bp-cta-inner bp-cta-inner--bare">
              <h2>Have something worth building?</h2>
              <p>
                Start with a 30-minute call. We&rsquo;ll talk through the
                process, the people involved, and whether an AI tool or
                workflow system is the right next step.
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
