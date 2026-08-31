import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/services/managed — DRAFT Managed AI Improvement page.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /services/managed route is untouched.
 *
 * Repositioning: from narrow build-maintenance ("we support what we
 * built") to Managed AI Improvement, sitting between advisory and
 * delivery. Covers ongoing improvement, user support, backlog
 * management, guidance, new opportunities, and light governance or
 * training adjustments. Deliberately NOT an outsourced CAIO retainer
 * and NOT generic app maintenance, so section 3 carries an explicit
 * clarifying line on both counts.
 *
 * It can follow Leadership AI Enablement, Team AI Training, AI Workflow
 * Development, or an effort already underway (see FAQ Q4).
 *
 * Sections:
 *   1. Hero
 *   2. Launch is not the finish line
 *   3. What Managed AI Improvement is
 *   4. What the monthly scope covers (6 cards)
 *   5. A simple monthly rhythm (4 steps, horizontal rail)
 *   6. What it can apply to (6 compact items)
 *   7. What you get each month (6 numbered items)
 *   8. Common questions (4)
 *   9. CTA
 *
 * Visual system matches the other refined drafts: draft-only dark hero
 * via .draft-hero, breadcrumb only, no text eyebrows, one streak plus
 * teal rules, two-tone heading used twice.
 *
 * Note on the cadence visual: the live page's circular cadence graphic
 * was dropped in favour of the horizontal rail used on the training
 * page. The circle read as over-designed next to the calmer draft
 * system and the rhythm is linear anyway.
 *
 * TODO (launch task, NOT draft-scoped): Services dropdown labels live
 * in components/NavServicesDropdown.tsx and NavServicesAccordion.tsx,
 * shared by HeroNav and the global StickyNav. When the repositioning
 * ships, rename "Managed AI" to "Managed AI Improvement" there.
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
      {/* draft-hero + draft-hero--managed carry the dark hero treatment
          and this page's layout overrides. Both classes exist only on
          draft pages, so the live /services/managed route is unaffected. */}
      <div className="bp-page bp-page--managed draft-hero draft-hero--managed">
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
                  The first version gets AI into the business. Once people
                  start using it, the real opportunities, gaps, risks, and
                  improvements become easier to see.
                </p>
                <p className="section-lede lede bp-second-para">
                  Managed AI Improvement gives clients a defined way to keep
                  improving what is live, support adoption, and decide what
                  should change next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: WHAT MANAGED AI IMPROVEMENT IS ─────────── */}
        <section className="bp-define" data-screen-label="What it is">
          <div className="wrap">
            <div className="bp-work-head bp-work-head--stacked">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  A monthly rhythm for AI systems, adoption, and improvement.
                </h2>
                <p className="section-lede lede">
                  Managed AI Improvement is a defined monthly agreement for
                  organizations that want a senior team staying close to their
                  AI work after launch or after initial enablement.
                </p>
                <p className="section-lede lede bp-second-para">
                  It can include development, support, backlog management,
                  adoption feedback, workflow improvements, guidance, and new
                  opportunities as the business learns what is useful.
                </p>
              </div>
            </div>

            {/* Boundary statement. Keeps the service from reading as either
                a loose retainer or generic app maintenance. */}
            <aside className="bp-boundary">
              <span className="bp-boundary-rule" aria-hidden="true" />
              <p>
                It is not a loose advisory retainer. It is an ongoing
                improvement model with a defined monthly scope.
              </p>
            </aside>
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
                  "Fix issues, refine interfaces, tune AI behavior, and make systems easier to use based on feedback.",
                ],
                [
                  "Support the users",
                  "Help teams use what has been built, answer questions, resolve friction, and keep adoption moving.",
                ],
                [
                  "Manage the backlog",
                  "Maintain a shared list of improvements, prioritize what matters, and agree on what gets done each month.",
                ],
                [
                  "Extend workflows",
                  "Add new workflows, automations, integrations, screens, or features as new opportunities emerge.",
                ],
                [
                  "Adjust guidance and standards",
                  "Refine prompts, usage patterns, documentation, or governance guidance as teams learn what works.",
                ],
                [
                  "Identify next opportunities",
                  "Spot patterns in usage, feedback, and business needs that may lead to new training, workflow, or build opportunities.",
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

        {/* ─── SECTION 5: MONTHLY RHYTHM ─────────────────────────── */}
        {/* Horizontal rail rather than the live page's circular cadence
            graphic. The rhythm is linear and the circle read as
            over-designed next to the calmer draft system. */}
        <section className="bp-howitworks" data-screen-label="Monthly rhythm">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  A simple monthly rhythm.
                </h2>
              </div>
              <p className="section-lede lede">
                Less process, more clarity on what is getting worked on and
                why.
              </p>
            </div>

            <ol className="bp-hrail">
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
                <li className="bp-hrail-step" key={num}>
                  <span className="bp-hrail-node" aria-hidden="true">
                    <span className="bp-hrail-dot" />
                  </span>
                  <span className="bp-hrail-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── SECTION 6: WHAT IT CAN APPLY TO ───────────────────── */}
        <section className="bp-applies" data-screen-label="What it applies to">
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
                  "Automations, data flows, system connections, and recurring business processes.",
                ],
                [
                  "Dashboards and insights",
                  "Reporting, summaries, trends, recommendations, and decision-support tools.",
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

        {/* ─── SECTION 7: WHAT YOU GET EACH MONTH ────────────────── */}
        <section className="bp-outputs" data-screen-label="What you get">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  What you get each month.
                </h2>
              </div>
              <p className="section-lede lede">
                A clear way to improve live AI work without turning every
                change into a new project.
              </p>
            </div>

            <ol className="bp-flow-steps bp-flow-steps--two-col">
              {[
                [
                  "01",
                  "Defined monthly scope",
                  "The work for the month is agreed up front and visible to both teams.",
                ],
                [
                  "02",
                  "Prioritized backlog",
                  "A shared list of fixes, improvements, and ideas, ordered by value.",
                ],
                [
                  "03",
                  "Development and support",
                  "Updates, fixes, refinements, and support for systems or workflows in use.",
                ],
                [
                  "04",
                  "Adoption feedback",
                  "A clearer view of how people are using AI and where friction remains.",
                ],
                [
                  "05",
                  "Guidance and documentation",
                  "Updated prompts, instructions, standards, or documentation as needed.",
                ],
                [
                  "06",
                  "Next-step recommendations",
                  "Clear recommendations on what to improve, extend, pause, or build next.",
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
          </div>
        </section>

        {/* ─── SECTION 8: COMMON QUESTIONS ───────────────────────── */}
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
                  a: "No. Some clients prefer a clean handoff at launch. Managed AI Improvement is for clients who want the same team to stay close to the system, adoption, and improvement backlog as things evolve.",
                },
                {
                  open: false,
                  q: "What does the monthly scope include?",
                  a: "The scope is agreed each month. It can include improvements, fixes, support, documentation, workflow changes, guidance, or new opportunities that fit within the agreed monthly capacity.",
                },
                {
                  open: false,
                  q: "What happens if we want to stop?",
                  a: "The model should be easy to understand and easy to exit. If managed improvement is no longer needed, we help close out the current scope and hand off what is required.",
                },
                {
                  open: false,
                  q: "Can this apply if Origin did not build the first system?",
                  a: "Sometimes. If the system, workflow, or adoption effort is stable enough for us to understand and support responsibly, Managed AI Improvement may still fit. If not, we may recommend a review or rebuild first.",
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

        {/* ─── SECTION 9: CTA ────────────────────────────────────── */}
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
