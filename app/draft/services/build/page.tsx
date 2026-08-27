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
      <div className="bp-page bp-page--workflow">
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
                <h2 className="section-h2 bp-h2--accented">
                  Where AI can make{" "}
                  <span className="muted">the biggest difference.</span>
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
                What the solution{" "}
                <span className="muted">can become.</span>
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
                  From idea{" "}
                  <span className="muted">to launch.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                We define the workflow first, then build only what the solution
                needs.
              </p>
            </div>

            {/* Steps on the left, workflow visual on the right at desktop.
                Stacks on mobile.

                ART DIRECTION (internal, do not render as page text):
                A product-style visual showing workflow steps, documents,
                decisions, approvals, dashboards, or handoffs with AI support
                embedded inside the process. */}
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

              <div className="ph-slot ph-slot--flow" aria-hidden="true">
                <span className="ph-slot-label">Workflow visual</span>
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
