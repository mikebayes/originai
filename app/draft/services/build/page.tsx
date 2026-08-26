import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/services/build — DRAFT repositioning of the AI Software
 * Development page into AI Workflow Development.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /services/build route is untouched.
 *
 * Positioning shift: away from "tell us what app you want and we will
 * build it" toward "when a workflow is worth improving, Origin turns it
 * into a tool people can actually use." Custom AI software is one
 * possible output, not the identity. AI agents are one pattern, not the
 * lead. Workflow development is framed as a step that usually follows
 * leadership enablement, team training, or workflow discovery.
 *
 * Sections:
 *   1. Hero (+ product-style visual placeholder)
 *   2. When this fits
 *   3. What we build (six directions)
 *   4. How it works (four steps)
 *   5. What lands at delivery (six cards)
 *   6. Common patterns (five cards)
 *   7. Where this fits in the Origin model (three next-step cards)
 *   8. CTA
 *
 * Rides the existing bp-page design system, plus the bp-steps /
 * bp-next-grid / ph-visual patterns added for the other drafts.
 *
 * TODO (launch task, NOT draft-scoped): the Services dropdown labels
 * live in components/NavServicesDropdown.tsx and
 * components/NavServicesAccordion.tsx, shared by HeroNav and the global
 * StickyNav, so they cannot change for this draft without affecting
 * every live page. When the repositioning ships, update both:
 *   "AI Software & Systems"  -> "AI Workflow Development"
 *   "AI Strategy & Training" -> "Leadership AI Enablement"
 *   "Managed AI"             -> "Managed AI Improvement"
 *   + add 4th item: "Team AI Enablement / AI Training" -> /services/ai-training
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ──────────────
   Location language lives here and in the footer, not in hero copy.   */
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

/* Visual placeholder block. Same pattern used on the other drafts. */
function Placeholder({ label, note }: { label: string; note: string }) {
  return (
    <div className="ph-visual" aria-hidden="true">
      <span className="ph-tag">Visual placeholder</span>
      <span className="ph-label">{label}</span>
      <span className="ph-note">{note}</span>
    </div>
  );
}

export default function DraftWorkflowDevelopmentPage() {
  return (
    <main>
      <div className="bp-page">
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

            {/* Location language is handled in SEO metadata and the footer,
                not repeated in every service-page hero. */}
            <p className="bp-hero-sub">
              Origin turns defined workflow opportunities into AI-enabled
              tools, assistants, automations, integrations, and custom
              software where the work is worth keeping.
            </p>

            <p className="bp-hero-sub bp-hero-sub--secondary">
              This is not about adding AI for its own sake. It is about
              improving the way information moves, decisions get made, and
              work gets completed.
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
                <div className="v">4–16 weeks, depending on scope</div>
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

        {/* Hero visual placeholder. Sits between the hero band and the
            first body section so it reads as the page's product shot. */}
        <div className="bp-hero-visual" data-screen-label="Hero visual">
          <div className="wrap">
            <Placeholder
              label="AI workflow tool / assistant interface"
              note="Product-style interface showing documents, decisions, approvals, or workflow steps with AI support embedded inside the process. Not a generic chatbot, no AI sparkles."
            />
          </div>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: WHEN THIS FITS ─────────────────────────── */}
        <section className="bp-fit" data-screen-label="When this fits">
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
                AI Workflow Development is for organizations that have
                identified a workflow, process, or recurring decision that is
                too manual, too inconsistent, too slow, or too dependent on a
                few people.
              </p>
            </div>

            <div className="bp-fit-grid">
              {[
                [
                  "The work is repetitive, but not simple.",
                  "People repeat the same judgment, review, or synthesis work, but the task still needs context and human oversight.",
                ],
                [
                  "Information lives in too many places.",
                  "The workflow depends on documents, spreadsheets, emails, systems, or policies that do not connect cleanly.",
                ],
                [
                  "The handoffs create delays or rework.",
                  "Work moves across people, departments, or tools, and every handoff adds friction.",
                ],
                [
                  "A pilot or training use case is ready to become a workflow.",
                  "A useful AI idea has emerged, but it needs structure, ownership, and a usable interface.",
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
              What we build
            </span>
          </div>
        </div>

        {/* ─── SECTION 3: WHAT WE BUILD (six directions) ─────────── */}
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
                  <span className="muted">not AI bolted onto the side.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                The right solution depends on the workflow. Sometimes it is an
                assistant. Sometimes it is an automation. Sometimes it is an
                internal tool or custom software. The build follows the work.
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
                  "Document and knowledge tools",
                  "Tools that help teams summarize, compare, search, review, or draft from business content.",
                ],
                [
                  "03",
                  "Workflow automations",
                  "Automations that move information, prepare outputs, route work, or reduce repetitive handoffs.",
                ],
                [
                  "04",
                  "Internal tools",
                  "Focused applications built around how a team actually works.",
                ],
                [
                  "05",
                  "Integrations",
                  "Connections between existing tools, data, documents, and workflows.",
                ],
                [
                  "06",
                  "Custom AI software",
                  "Custom software when the workflow is valuable enough to own and operate directly.",
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

        {/* ─── SECTION 4: HOW IT WORKS (four steps) ──────────────── */}
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
                We do not start by assuming software is the answer. We start
                by defining the workflow, the users, the inputs, the risks,
                and the outcome the tool needs to support.
              </p>
            </div>

            <div className="bp-steps bp-steps--four">
              {[
                [
                  "01",
                  "Define",
                  "Clarify the workflow, users, inputs, outputs, decisions, and success criteria.",
                ],
                [
                  "02",
                  "Prototype",
                  "Create a focused first version that proves whether the workflow can be improved.",
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
                <div className="bp-step" key={num}>
                  <span className="bp-step-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: WHAT LANDS AT DELIVERY ─────────────────── */}
        <section className="bp-outputs" data-screen-label="What lands">
          <div className="wrap">
            <div className="bp-outputs-head">
              <div>
                <div className="eyebrow">
                  <span className="bar" />
                  What lands
                </div>
                <h2 className="section-h2" style={{ marginTop: 24 }}>
                  A workflow{" "}
                  <span className="muted">your team can use.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                The output is not a demo or a deck. It is something your team
                can use, review, improve, and own.
              </p>
            </div>

            <div className="bp-outputs-list">
              {[
                [
                  "01",
                  "A working tool or workflow",
                  "A deployed assistant, automation, integration, internal tool, or software workflow.",
                ],
                [
                  "02",
                  "Human review where it matters",
                  "Clear points for review, approval, override, and accountability.",
                ],
                [
                  "03",
                  "Integration with the work around it",
                  "Connection to the documents, systems, data, and processes the workflow depends on.",
                ],
                [
                  "04",
                  "Training and launch support",
                  "Support so the people using it understand what it does, where it helps, and where judgment remains.",
                ],
                [
                  "05",
                  "Documentation and ownership",
                  "Clear operating notes, assumptions, risks, and maintenance considerations.",
                ],
                [
                  "06",
                  "Improvement path",
                  "A clear view of what should be refined, expanded, or monitored after launch.",
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

        {/* ─── SECTION 6: COMMON PATTERNS ────────────────────────── */}
        <section className="bp-patterns" data-screen-label="Common patterns">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <div className="eyebrow">
                  <span className="bar" />
                  Common patterns
                </div>
                <h2 className="section-h2" style={{ marginTop: 24 }}>
                  Patterns{" "}
                  <span className="muted">we see often.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                Every build is different, but many useful AI workflow projects
                fall into recognizable patterns.
              </p>
            </div>

            <div className="bp-pattern-grid">
              {[
                [
                  "Replacing a duct-taped workflow",
                  "One workflow currently depends on multiple apps, spreadsheets, messages, and manual checks.",
                ],
                [
                  "Reviewing documents faster",
                  "Teams need to summarize, compare, assess, or extract information from recurring documents.",
                ],
                [
                  "Supporting internal decisions",
                  "People need better synthesis across data, documents, policies, or prior work before making a decision.",
                ],
                [
                  "Creating a knowledge assistant",
                  "Teams need faster access to trusted internal knowledge, policies, procedures, or client information.",
                ],
                [
                  "Turning a training use case into a tool",
                  "A team finds a repeatable AI use case during training and wants to make it easier to use consistently.",
                ],
              ].map(([h, p], i) => (
                <div className="bp-pattern-cell" key={i}>
                  <span className="bp-pattern-mark" aria-hidden="true" />
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: WHERE THIS FITS ────────────────────────── */}
        <section className="bp-bridge" data-screen-label="Where this fits">
          <div className="wrap">
            <div className="bp-bridge-head">
              <div className="eyebrow">
                <span className="bar" />
                Where this fits
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Workflow development is usually{" "}
                <span className="muted">not the first conversation.</span>
              </h2>
            </div>

            <p className="bp-rail-statement">
              Many clients reach this point after Leadership AI Enablement,
              Team AI Training, or a focused workflow discovery conversation.
              The goal is to build only when there is a workflow worth
              improving and a team ready to use it.
            </p>

            <div className="bp-next-grid">
              <a href="/services/strategy" className="bp-next-card">
                <span className="bp-next-label">Before this</span>
                <h3>Leadership AI Enablement</h3>
                <p>Define priorities, standards, and what should move first.</p>
                <span className="bp-next-link">
                  Learn more <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
              <a href="/services/ai-training" className="bp-next-card">
                <span className="bp-next-label">Before this</span>
                <h3>Team AI Training</h3>
                <p>Help staff use AI inside the work they already do.</p>
                <span className="bp-next-link">
                  Explore AI training{" "}
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
              <a href="/services/managed" className="bp-next-card">
                <span className="bp-next-label">After this</span>
                <h3>Managed AI Improvement</h3>
                <p>Support and improve what gets adopted after launch.</p>
                <span className="bp-next-link">
                  Learn more <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── SECTION 8: CTA ────────────────────────────────────── */}
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
                work, the people involved, and whether AI workflow development
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
