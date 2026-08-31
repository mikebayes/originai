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
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="wfNodeGlow">
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="wfDrop">
                      <stop offset="0%" stopColor="#000000" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="wfPanelFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0.022" />
                    </linearGradient>
                    {/* userSpaceOnUse: these paint zero-width vertical
                        lines, whose object bounding box is degenerate,
                        which silently drops an objectBoundingBox
                        gradient entirely. */}
                    <linearGradient
                      id="wfSpine"
                      gradientUnits="userSpaceOnUse"
                      x1="302"
                      y1="96"
                      x2="302"
                      y2="226"
                    >
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.06" />
                      <stop offset="20%" stopColor="#5da89c" stopOpacity="0.32" />
                      <stop offset="80%" stopColor="#5da89c" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0.06" />
                    </linearGradient>
                    <linearGradient
                      id="wfFade"
                      gradientUnits="userSpaceOnUse"
                      x1="302"
                      y1="96"
                      x2="302"
                      y2="72"
                    >
                      <stop offset="0%" stopColor="#5da89c" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#5da89c" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Soft light behind the workflow module */}
                  <ellipse
                    cx="214"
                    cy="160"
                    rx="106"
                    ry="90"
                    fill="url(#wfPanelGlow)"
                  />

                  {/* ── LEFT: inputs ─────────────────────────────────
                      Two of the three sit on a faint offset ghost card,
                      which reads as more of the same arriving behind it.
                      The middle one is dashed and carries no stack: the
                      incomplete input. */}
                  <g className="wf-frags">
                    <g transform="rotate(-2.2 65 79)">
                      <rect
                        x="28"
                        y="58"
                        width="82"
                        height="50"
                        rx="4"
                        className="wf-ghost"
                      />
                      <rect
                        x="24"
                        y="54"
                        width="82"
                        height="50"
                        rx="4"
                        className="wf-frag-box"
                      />
                      <path d="M32 66 V 92" className="wf-frag-edge" />
                      <path d="M37 70 H79" className="wf-frag-line" />
                      <path d="M37 81 H94" className="wf-frag-line" />
                      <path d="M37 92 H64" className="wf-frag-line wf-dim" />
                    </g>

                    <g transform="rotate(1.8 67 146)">
                      <rect
                        x="30"
                        y="122"
                        width="74"
                        height="48"
                        rx="4"
                        className="wf-frag-box wf-frag-box--dashed"
                      />
                      <path d="M41 136 H88" className="wf-frag-line" />
                      <path d="M41 147 H70" className="wf-frag-line wf-dim" />
                      <path d="M41 158 H82" className="wf-frag-line wf-dim" />
                    </g>

                    <g transform="rotate(-1.2 64 215)">
                      <rect
                        x="26"
                        y="194"
                        width="84"
                        height="50"
                        rx="4"
                        className="wf-ghost"
                      />
                      <rect
                        x="22"
                        y="190"
                        width="84"
                        height="50"
                        rx="4"
                        className="wf-frag-box"
                      />
                      <path d="M30 202 V 228" className="wf-frag-edge" />
                      <path d="M35 206 H72" className="wf-frag-line wf-dim" />
                      <path d="M35 217 H97" className="wf-frag-line" />
                      <path d="M35 228 H60" className="wf-frag-line wf-dim" />
                    </g>
                  </g>

                  {/* Convergence into the module's three entry ports */}
                  <g className="wf-converge">
                    <path d="M108 80 C 134 88, 150 122, 162 140" />
                    <path d="M105 147 C 128 152, 146 157, 162 161" />
                    <path d="M108 214 C 134 208, 150 194, 162 182" />
                  </g>

                  {/* ── CENTRE: the defined workflow ────────────────
                      Soft drop under the panel for depth, an inner
                      header band, a small module block, and explicit
                      entry / exit ports so the direction of travel is
                      legible without arrows. */}
                  <ellipse
                    cx="214"
                    cy="218"
                    rx="58"
                    ry="10"
                    fill="url(#wfDrop)"
                  />
                  <rect
                    x="165"
                    y="112"
                    width="98"
                    height="100"
                    rx="9"
                    fill="url(#wfPanelFill)"
                    className="wf-panel"
                  />
                  {/* Top-edge highlight: catches light, adds depth */}
                  <path d="M174 112.6 H254" className="wf-panel-hi" />
                  {/* Header band, then the defined steps */}
                  <path d="M165 133 H263" className="wf-panel-band" />
                  <path d="M179 149 H241" className="wf-panel-line" />
                  <path d="M179 162 H227" className="wf-panel-line" />
                  <path d="M179 175 H235" className="wf-panel-line wf-dim" />
                  {/* One resolved module inside the workflow */}
                  <rect
                    x="179"
                    y="190"
                    width="28"
                    height="12"
                    rx="3"
                    className="wf-module"
                  />
                  <path d="M213 196 H247" className="wf-panel-line wf-dim" />

                  {/* Ports */}
                  <circle cx="165" cy="140" r="2" className="wf-port" />
                  <circle cx="165" cy="161" r="2" className="wf-port" />
                  <circle cx="165" cy="182" r="2" className="wf-port" />
                  <circle cx="263" cy="161" r="2.6" className="wf-port-out" />

                  {/* ── RIGHT: the ordered system ───────────────────
                      Three aligned outputs on a spine, held by a faint
                      bracket so they read as one system rather than
                      three loose ends. */}
                  <path d="M266 161 H302" className="wf-route" />
                  <path
                    d="M302 96 V 226"
                    stroke="url(#wfSpine)"
                    strokeWidth="1"
                  />

                  <path d="M302 110 H340" className="wf-leg" />
                  <circle cx="302" cy="110" r="4" className="wf-node" />
                  <rect
                    x="340"
                    y="104"
                    width="20"
                    height="12"
                    rx="2.5"
                    className="wf-out"
                  />

                  <path d="M302 212 H340" className="wf-leg" />
                  <circle cx="302" cy="212" r="4" className="wf-node" />
                  <rect
                    x="340"
                    y="206"
                    width="20"
                    height="12"
                    rx="2.5"
                    className="wf-out"
                  />

                  {/* Validated route: the straight line out of the
                      module. Only highlighted element on the canvas. */}
                  <circle cx="302" cy="161" r="17" fill="url(#wfNodeGlow)" />
                  <path d="M302 161 H338" className="wf-leg wf-leg--live" />
                  <circle cx="302" cy="161" r="5.4" className="wf-node-live" />
                  <rect
                    x="338"
                    y="153"
                    width="26"
                    height="16"
                    rx="3"
                    className="wf-out wf-out--live"
                  />

                  {/* Scope considered, not built. Fades out. */}
                  <path
                    d="M302 96 V 72"
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
