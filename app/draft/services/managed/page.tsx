import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/services/managed — DRAFT Managed AI Improvement page.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /services/managed route is untouched.
 *
 * Update 3 (simplification pass): nine sections down to seven.
 *   - "What you get each month" removed entirely. It repeated the
 *     monthly scope and rhythm sections.
 *   - The standalone "A simple monthly rhythm" section is gone; its
 *     four steps now sit inside the monthly rhythm section as a compact
 *     row rather than a full-width timeline.
 *   - Card and FAQ copy tightened to one short sentence where possible.
 *
 * Positioning unchanged: Managed AI Improvement sits between advisory
 * and delivery. Not an outsourced CAIO retainer, not generic app
 * maintenance. Section 3 keeps the explicit boundary line, and the FAQ
 * keeps the "did not build the first system" question.
 *
 * Sections:
 *   1. Hero
 *   2. Launch is not the finish line
 *   3. A monthly rhythm for improvement (+ boundary note + step row)
 *   4. What the monthly scope covers (6 cards)
 *   5. What managed improvement can support (6 light items)
 *   6. Questions, answered (4)
 *   7. CTA
 *
 * Nav note: the global Services dropdown was renamed to the four-part
 * model (Leadership AI Enablement, Team AI Training, AI Workflow
 * Development, Managed AI Improvement) when /services/ai-training
 * shipped. components/NavServicesDropdown.tsx and
 * NavServicesAccordion.tsx are already up to date.
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ────────────── */
const EVENTUAL_SEO_TITLE =
  "Managed AI Improvement | Ongoing AI Support & Development | Origin AI";
const EVENTUAL_SEO_DESCRIPTION =
  "Origin AI provides Managed AI Improvement for organizations in Winnipeg and across Canada: ongoing improvement, user support, backlog management, and guidance for AI systems and adoption efforts already underway.";

export const metadata: Metadata = {
  title: "DRAFT · Managed AI Improvement | Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

/* Review route: never serve a cached copy. Scoped to this page only. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

export default function DraftManagedImprovementPage() {
  return (
    <main>
      {/* svc-dark + svc-dark--managed carry the dark hero treatment
          and this page's layout overrides. Both classes exist only on
          draft pages, so the live /services/managed route is unaffected. */}
      <div className="bp-page bp-page--managed svc-dark svc-dark--managed">
        <div className="bp-grain" aria-hidden="true" />

        {/* Internal draft banner. Delete when this page goes live. */}
        <div className="draft-banner" role="note">
          Internal draft. Not indexed, not linked, live /services/managed
          unchanged.
        </div>

        <div className="bp-hero-shell">
          <HeroNav />

          {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
          <section
            className="wrap bp-hero"
            data-screen-label="Managed improvement hero"
          >
            {/* Breadcrumb only. No progress marker, no duplicate service
                label, no decorative accent above the H1. */}
            <div className="bp-hero-meta bp-hero-meta--crumb-only">
              <span>
                <a href="/services">← Services</a>
                <span className="crumb-sep">/</span>
                <span>Managed AI Improvement</span>
              </span>
            </div>

            <h1 className="bp-hero-h1 bp-hero-h1--bare">
              Keep AI useful{" "}
              <span className="accent">after it goes live.</span>
            </h1>

            <p className="bp-hero-sub">
              Origin provides ongoing improvement, support, and guidance for
              AI systems, workflows, and adoption efforts as your business
              learns what works.
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
                <div className="v">Monthly scope</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Best fit</div>
                <div className="v">
                  AI systems or adoption efforts already underway
                </div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Outputs</div>
                <div className="v">
                  Improvements, support, backlog, guidance
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: LAUNCH IS NOT THE FINISH LINE ──────────── */}
        {/* Spacious, no panel edge, reads as a continuation of the hero. */}
        <section className="bp-intro" data-screen-label="Launch is not the finish line">
          <div className="wrap">
            <div className="bp-work-head bp-work-head--stacked">
              <div>
                {/* Homepage brand streak. Used once, opening the body
                    content after the hero. */}
                <span className="hero-mark bp-streak" aria-hidden="true">
                  <span className="hero-mark-dot" />
                  <span className="hero-mark-line" />
                </span>
                <h2 className="section-h2 bp-h2--accented">
                  Launch is not{" "}
                  <span className="muted">the finish line.</span>
                </h2>
                <p className="section-lede lede">
                  Once people start using an AI system, workflow, or adoption
                  standard, the real opportunities and gaps become easier to
                  see. Managed AI Improvement gives clients a defined way to
                  keep improving what is live, support adoption, and decide
                  what should change next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: A MONTHLY RHYTHM ───────────────────────── */}
        {/* The four rhythm steps now live here as a compact row instead
            of a separate full-width timeline section. */}
        <section className="bp-define" data-screen-label="Monthly rhythm">
          <div className="wrap">
            <div className="bp-work-head bp-work-head--stacked">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  A monthly rhythm for improvement.
                </h2>
                <p className="section-lede lede">
                  Managed AI Improvement is a defined monthly agreement for
                  organizations that want a senior team staying close to their
                  AI systems, workflows, and adoption efforts after launch,
                  training, or initial enablement.
                </p>
                <p className="section-lede lede bp-second-para">
                  It can include development, support, backlog management,
                  adoption feedback, workflow improvements, guidance, and new
                  opportunities as the business learns what is useful.
                </p>
              </div>
            </div>

            {/* Boundary line, kept visually subtle. */}
            <p className="bp-boundary-note">
              It is not a loose advisory retainer. It is an ongoing
              improvement model with a defined monthly scope.
            </p>

            {/* Compact four-step row. */}
            <ol className="bp-cadence">
              {[
                [
                  "01",
                  "Review",
                  "Look at usage, feedback, issues, risks, and new opportunities.",
                ],
                [
                  "02",
                  "Prioritize",
                  "Agree on the most valuable fixes, changes, or additions for the month.",
                ],
                [
                  "03",
                  "Improve",
                  "Build, test, release, document, or support the agreed changes.",
                ],
                [
                  "04",
                  "Extend",
                  "Add new capability when the system or adoption effort is ready for it.",
                ],
              ].map(([num, title, body]) => (
                <li className="bp-cadence-step" key={num}>
                  <span className="bp-cadence-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── SECTION 4: WHAT THE MONTHLY SCOPE COVERS ──────────── */}
        <section className="bp-domains" data-screen-label="Monthly scope">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Improve, support, extend, and prioritize.
                </h2>
              </div>
              <p className="section-lede lede">
                Each month, we agree on the highest-value work inside a
                defined scope. The focus changes as systems, users, and
                business needs evolve.
              </p>
            </div>

            <div className="bp-domain-grid">
              {[
                [
                  "Improve what is live",
                  "Fix issues, refine interfaces, and tune AI behavior based on feedback.",
                ],
                [
                  "Support the users",
                  "Answer questions, resolve friction, and keep adoption moving.",
                ],
                [
                  "Manage the backlog",
                  "Keep a shared, prioritized list and agree on what gets done.",
                ],
                [
                  "Extend workflows",
                  "Add workflows, automations, integrations, or features as needs emerge.",
                ],
                [
                  "Adjust guidance and standards",
                  "Refine prompts, documentation, and governance guidance as teams learn.",
                ],
                [
                  "Identify next opportunities",
                  "Spot usage patterns that point to new training, workflow, or build work.",
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

        {/* ─── SECTION 5: WHAT IT CAN SUPPORT ────────────────────── */}
        {/* Lighter than the scope cards above: hairline list, no borders. */}
        <section className="bp-applies" data-screen-label="What it supports">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Managed improvement can support more than software.
                </h2>
              </div>
              <p className="section-lede lede">
                Managed AI Improvement can apply to the systems, workflows,
                standards, and adoption efforts we help put in place.
              </p>
            </div>

            <div className="bp-skills">
              {[
                [
                  "AI tools and assistants",
                  "Internal tools, copilots, GPTs, agents, and assistants that support real work.",
                ],
                [
                  "Workflows and integrations",
                  "Automations, data flows, system connections, and recurring processes.",
                ],
                [
                  "Dashboards and insights",
                  "Reporting, summaries, trends, and decision-support tools.",
                ],
                [
                  "Team prompts and standards",
                  "Reusable prompts, examples, review patterns, and responsible-use guidance.",
                ],
                [
                  "Training follow-up",
                  "Reinforcement, examples, and support after team AI training.",
                ],
                [
                  "Governance and adoption",
                  "Usage guidance, policy adjustments, feedback loops, and adoption support.",
                ],
              ].map(([h, p], i) => (
                <div className="bp-skill" key={i}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: QUESTIONS, ANSWERED ────────────────────── */}
        <section className="bp-faq" data-screen-label="Common questions">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Questions, answered.
                </h2>
              </div>
              <p className="section-lede lede">
                Common questions clients ask before they engage.
              </p>
            </div>

            <div className="bp-faq-list">
              {[
                {
                  open: true,
                  q: "Is Managed AI Improvement required after a build?",
                  a: "No. Some clients prefer a clean handoff at launch. This is for clients who want the same team staying close to the system, adoption, and improvement backlog as things evolve.",
                },
                {
                  open: false,
                  q: "What does the monthly scope include?",
                  a: "The scope is agreed each month. It can include improvements, fixes, support, documentation, workflow changes, guidance, or new opportunities that fit the agreed capacity.",
                },
                {
                  open: false,
                  q: "What happens if we want to stop?",
                  a: "The model should be easy to understand and easy to exit. We help close out the current scope and hand off what is required.",
                },
                {
                  open: false,
                  q: "Can this apply if Origin did not build the first system?",
                  a: "Sometimes. If the system, workflow, or adoption effort is stable enough for us to understand and support responsibly, it may still fit. If not, we may recommend a review or rebuild first.",
                },
              ].map((it, i) => (
                <details className="bp-faq-item" key={i} open={it.open}>
                  <summary>
                    <span className="qnum">
                      Q · {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="qtext">{it.q}</span>
                    <span className="plus" aria-hidden="true" />
                  </summary>
                  <div className="ans">{it.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: CTA ────────────────────────────────────── */}
        {/* No eyebrow. The CTA panel carries the section. */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            <div className="bp-cta-inner bp-cta-inner--bare">
              <h2>Want to keep AI improving after launch?</h2>
              <p>
                Start with a 30-minute call. We&rsquo;ll talk through what is
                live, what is changing, and whether a managed improvement
                model fits.
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
