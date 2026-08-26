import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/services/build — DRAFT AI Workflow Development page.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /services/build route is untouched.
 *
 * Update 3 (compression pass): reduced from eight sections to six and
 * cut copy volume roughly in half. Card bodies are one sentence. No
 * section carries more than a heading plus a one-line intro.
 *
 *   1. Hero
 *   2. When this fits (4 cards, 2x2)
 *   3. What we build (6 compact cards)
 *   4. How it works (4 steps + workflow visual)
 *   5. What you get (4 cards)
 *   6. CTA
 *
 * Removed in update 3: "Common patterns" (5 cards), "Where this fits"
 * with the three cross-service cards, the standalone hero visual band,
 * the six-card delivery list (now four), and the hero's second
 * explanatory paragraph.
 *
 * Positioning holds: workflow-first, not software-first. Custom AI
 * software is one of six possible outputs, not the identity.
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

void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

export default function DraftWorkflowDevelopmentPage() {
  return (
    <main>
      {/* bp-page--workflow carries the per-page grid overrides so the
          four-card sections render 2x2 instead of inheriting the default
          3-col grid and orphaning a card. */}
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
            <div className="bp-hero-meta">
              <span>
                <a href="/services">← Services</a>
                <span className="crumb-sep">/</span>
                <span>AI Workflow Development</span>
              </span>
              <span>03 / 04 — Workflows</span>
            </div>

            <div className="bp-hero-eyebrow">
              <span className="dot" />
              <span>AI Workflow Development</span>
              <span className="bar" />
            </div>

            <h1 className="bp-hero-h1">
              Build AI into the{" "}
              <span className="accent">workflows that matter.</span>
            </h1>

            {/* One subheadline only. Location language lives in SEO
                metadata and the footer, not in hero copy. */}
            <p className="bp-hero-sub">
              Origin turns defined workflow opportunities into AI-enabled
              tools, assistants, automations, integrations, and custom
              software when the work is worth keeping.
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
                <div className="v">Defined workflow opportunity</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Outputs</div>
                <div className="v">
                  Tools, assistants, automations, integrations, or custom
                  software
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: WHEN THIS FITS ─────────────────────────── */}
        <section className="bp-fit bp-fit--compact" data-screen-label="When this fits">
          <div className="wrap">
            <div className="bp-fit-head">
              <div className="eyebrow">
                <span className="bar" />
                When this fits
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                You know the workflow.{" "}
                <span className="muted">Now it needs to work better.</span>
              </h2>
              <p className="section-lede">
                AI Workflow Development is for work that is too manual, too
                inconsistent, too slow, or too dependent on a few people.
              </p>
            </div>

            <div className="bp-fit-grid">
              {[
                [
                  "Repetitive, but not simple",
                  "The work repeats often, but still needs context, judgment, or review.",
                ],
                [
                  "Information is scattered",
                  "The workflow depends on documents, spreadsheets, emails, systems, or policies that do not connect cleanly.",
                ],
                [
                  "Handoffs slow things down",
                  "Work moves across people, departments, or tools, creating delays and rework.",
                ],
                [
                  "A use case is ready to grow",
                  "A pilot, training example, or AI idea needs structure, ownership, and a usable interface.",
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

        {/* ─── SECTION 3: WHAT WE BUILD ──────────────────────────── */}
        <section className="bp-work" data-screen-label="What we build">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <div className="eyebrow">
                  <span className="bar" />
                  What we build
                </div>
                <h2 className="section-h2" style={{ marginTop: 24 }}>
                  AI-enabled workflows,{" "}
                  <span className="muted">not AI on the side.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                The build follows the work. Sometimes the right answer is an
                assistant. Sometimes it is an automation, integration,
                internal tool, or custom software.
              </p>
            </div>

            <div className="bp-build-grid">
              {[
                [
                  "01",
                  "Workflow assistants",
                  "AI support embedded inside a task, process, or decision point.",
                ],
                [
                  "02",
                  "Document tools",
                  "Summarize, compare, review, extract, or draft from business content.",
                ],
                [
                  "03",
                  "Automations",
                  "Move information, prepare outputs, route work, or reduce repetitive handoffs.",
                ],
                [
                  "04",
                  "Internal tools",
                  "Focused applications built around how a team actually works.",
                ],
                [
                  "05",
                  "Integrations",
                  "Connect existing tools, data, documents, and workflows.",
                ],
                [
                  "06",
                  "Custom AI software",
                  "Custom software when the workflow is valuable enough to own directly.",
                ],
              ].map(([num, title, body]) => (
                <div className="bp-build-cell" key={num}>
                  <span className="bp-build-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: HOW IT WORKS ───────────────────────────── */}
        <section className="bp-howitworks" data-screen-label="How it works">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <div className="eyebrow">
                  <span className="bar" />
                  How it works
                </div>
                <h2 className="section-h2" style={{ marginTop: 24 }}>
                  From workflow opportunity{" "}
                  <span className="muted">to working tool.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                We define the workflow first, then build only what the
                workflow needs.
              </p>
            </div>

            {/* Steps on the left, workflow visual on the right at desktop.
                Stacks on mobile.

                ART DIRECTION (internal, do not render as page text):
                A product-style visual showing workflow steps, documents,
                decisions, approvals, or handoffs with AI support embedded
                inside the process. */}
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
                    "Create a focused first version to prove the workflow can improve.",
                  ],
                  [
                    "03",
                    "Build",
                    "Develop the assistant, automation, integration, tool, or software around the validated workflow.",
                  ],
                  [
                    "04",
                    "Launch",
                    "Support rollout, user adoption, documentation, and early improvements.",
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

        {/* ─── SECTION 5: WHAT YOU GET ───────────────────────────── */}
        <section className="bp-fit bp-fit--compact" data-screen-label="What you get">
          <div className="wrap">
            <div className="bp-fit-head">
              <div className="eyebrow">
                <span className="bar" />
                What you get
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                A workflow{" "}
                <span className="muted">your team can use.</span>
              </h2>
              <p className="section-lede">
                The output should be something people can use, review,
                improve, and own.
              </p>
            </div>

            <div className="bp-fit-grid">
              {[
                [
                  "Working workflow",
                  "A deployed assistant, automation, integration, internal tool, or software workflow.",
                ],
                [
                  "Human review",
                  "Clear points for review, approval, override, and accountability.",
                ],
                [
                  "Launch support",
                  "Training, documentation, and support so the team knows how to use it.",
                ],
                [
                  "Improvement path",
                  "A clear view of what should be refined, expanded, or monitored after launch.",
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

        {/* ─── SECTION 6: CTA ────────────────────────────────────── */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            <div className="bp-cta-inner">
              <div className="bp-cta-eyebrow">
                <span className="dot" />
                Talk to us
              </div>
              <h2>Have a workflow worth improving?</h2>
              <p>
                Start with a 30-minute call. We&rsquo;ll talk through the
                work, the people involved, and whether AI Workflow Development
                is the right next step.
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
