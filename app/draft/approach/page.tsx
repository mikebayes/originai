import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/approach — DRAFT Origin AI approach / operating model page.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /approach route is untouched.
 *
 * Aligned to the refined draft services visual system:
 *   - darker charcoal / deep teal hero via .draft-hero (draft-only class)
 *   - breadcrumb only, no progress marker, no duplicate hero label
 *   - no all-caps text section eyebrows anywhere
 *   - one homepage streak above the first body heading, teal rules after
 *   - two-tone headline treatment used sparingly (hero + one section)
 *   - no card-level accent lines
 *
 * This is not a service subpage. It reads as Origin's point of view on
 * AI adoption and its operating model, then hands off to the four
 * services at the end.
 *
 * Sections:
 *   1. Hero
 *   2. Point of view (no visible label)
 *   3. The Origin AI capability model (6 cards + fluency callout)
 *   4. Principles that shape the work (6 items)
 *   5. What we believe / what we avoid (two columns)
 *   6. How the approach turns into services (4 linked steps)
 *   7. CTA
 *
 * Service names use the new labels throughout: Leadership AI Enablement,
 * Team AI Training, AI Workflow Development, Managed AI Improvement.
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ────────────── */
const EVENTUAL_SEO_TITLE =
  "Our Approach to AI Adoption | Origin AI";
const EVENTUAL_SEO_DESCRIPTION =
  "Origin AI helps organizations align leaders, build fluency, identify the right opportunities, and turn AI into systems people actually use.";

export const metadata: Metadata = {
  title: "DRAFT · Approach | Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

/* Review route: never serve a cached copy. Scoped to this page only. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

export default function DraftApproachPage() {
  return (
    <main>
      {/* draft-hero + draft-hero--approach carry the new dark hero
          treatment. Both classes exist only on draft pages, so the live
          /approach route is unaffected. */}
      <div className="bp-page bp-page--approach draft-hero draft-hero--approach">
        <div className="bp-grain" aria-hidden="true" />

        {/* Internal draft banner. Delete when this page goes live. */}
        <div className="draft-banner" role="note">
          Internal draft. Not indexed, not linked, live /approach unchanged.
        </div>

        <div className="bp-hero-shell">
          <HeroNav />

          {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
          <section className="wrap bp-hero" data-screen-label="Approach hero">
            {/* Breadcrumb only. No progress marker, no duplicate label,
                no decorative accent above the H1. */}
            <div className="bp-hero-meta bp-hero-meta--crumb-only">
              <span>
                <a href="/">← Origin AI</a>
                <span className="crumb-sep">/</span>
                <span>Approach</span>
              </span>
            </div>

            <h1 className="bp-hero-h1 bp-hero-h1--bare">
              AI adoption starts with{" "}
              <span className="accent">judgment, not tools.</span>
            </h1>

            <p className="bp-hero-sub">
              Origin helps organizations align leaders, build fluency,
              identify the right opportunities, and turn AI into systems
              people actually use.
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

            <div className="bp-hero-footer">
              <div className="bp-hero-foot-col">
                <div className="k">Belief</div>
                <div className="v">Clarity before tooling</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Aim</div>
                <div className="v">Fluency, not dependency</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Outcome</div>
                <div className="v">Systems that fit the business</div>
              </div>
            </div>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: POINT OF VIEW (no visible label) ────────── */}
        <section className="bp-intro" data-screen-label="Point of view">
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
                  Most AI efforts do not fail because{" "}
                  <span className="muted">the model is wrong.</span>
                </h2>
                <p className="section-lede lede">
                  They fail because the organization is unclear on where AI
                  belongs, what problem it should solve, who owns the work,
                  and how people will actually use it.
                </p>
                <p className="section-lede lede bp-pov-second">
                  We start with the decisions, the people, and the workflows,
                  then move toward systems that fit the business. The tools
                  matter, but they are downstream of clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: CAPABILITY MODEL ───────────────────────── */}
        <section className="bp-model" data-screen-label="Capability model">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  What makes an organization AI-capable.
                </h2>
              </div>
              <p className="section-lede lede">
                AI capability is not a maturity ladder. It is a connected
                system of reinforcing capabilities.
              </p>
            </div>

            <div className="bp-model-grid">
              {[
                [
                  "Leadership direction",
                  "Leaders decide where AI belongs and what outcomes matter.",
                ],
                [
                  "Executive ownership",
                  "Senior leaders stay close enough to remove barriers and keep momentum.",
                ],
                [
                  "Working systems",
                  "AI creates value when it is embedded into workflows, software, and day-to-day operations.",
                ],
                [
                  "Buildable use cases",
                  "Ideas are filtered into focused opportunities that are worth acting on.",
                ],
                [
                  "Policy and governance",
                  "Clear guardrails help people use AI safely without stalling progress.",
                ],
                [
                  "AI fluency",
                  "Teams understand the concepts, risks, and possibilities, not just one tool.",
                ],
              ].map(([h, p], i) => (
                <div className="bp-model-cell" key={i}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>

            {/* Compact callout closing the model */}
            <div className="bp-callout">
              <h3>Build fluency, not dependency.</h3>
              <p>
                The landscape will keep changing. Organizations need the
                judgment to evaluate and adopt the right tools as they evolve,
                instead of anchoring themselves to one vendor or platform.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: PRINCIPLES ─────────────────────────────── */}
        <section className="bp-principles" data-screen-label="Principles">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Principles that shape the work.
                </h2>
              </div>
              <p className="section-lede lede">
                These beliefs show up across leadership enablement, team
                training, workflow development, and managed improvement.
              </p>
            </div>

            <div className="bp-prin-grid">
              {[
                [
                  "01",
                  "AI serves business outcomes.",
                  "We start with the business result, not the tool.",
                ],
                [
                  "02",
                  "People decide. AI supports.",
                  "AI can accelerate work, but judgment stays with people.",
                ],
                [
                  "03",
                  "Build fluency, not tool dependency.",
                  "The advantage is the ability to adapt as tools change.",
                ],
                [
                  "04",
                  "Governance should enable progress.",
                  "Good guardrails help organizations move with confidence.",
                ],
                [
                  "05",
                  "Build only what should exist.",
                  "Not every idea deserves software.",
                ],
                [
                  "06",
                  "Systems matter more than demos.",
                  "The goal is adoption, not novelty.",
                ],
              ].map(([num, h, p]) => (
                <div className="bp-prin" key={num}>
                  <span className="bp-prin-num">{num}</span>
                  <div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: BELIEVE / AVOID ────────────────────────── */}
        <section className="bp-contrast" data-screen-label="Believe / Avoid">
          <div className="wrap">
            <div className="bp-work-head bp-work-head--stacked">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  What we believe. What we avoid.
                </h2>
              </div>
            </div>

            <div className="bp-contrast-grid">
              <div className="bp-col bp-col--believe">
                <h3 className="bp-col-title">What we believe</h3>
                <ul>
                  <li>AI adoption starts with leadership clarity.</li>
                  <li>Fluency matters more than tool chasing.</li>
                  <li>The best use cases are tied to real work.</li>
                  <li>
                    Systems should fit the business, not the other way around.
                  </li>
                  <li>AI should improve outcomes, not just activity.</li>
                </ul>
              </div>

              <div className="bp-col bp-col--avoid">
                <h3 className="bp-col-title">What we avoid</h3>
                <ul>
                  <li>Random experiments with no owner.</li>
                  <li>Training that never connects to the work.</li>
                  <li>
                    Software that adds complexity without changing the
                    outcome.
                  </li>
                  <li>Governance that creates fear instead of clarity.</li>
                  <li>Buying tools before the problem is clear.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: APPROACH → SERVICES ────────────────────── */}
        <section className="bp-handoff" data-screen-label="Approach into services">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  How the approach turns into services.
                </h2>
              </div>
              <p className="section-lede lede">
                Our services move organizations from clarity, to capability,
                to systems, to ongoing improvement.
              </p>
            </div>

            <ol className="bp-handoff-rail">
              {[
                [
                  "01",
                  "Leadership AI Enablement",
                  "Clarify where AI belongs, what to act on first, and who owns what.",
                  "/services/strategy",
                ],
                [
                  "02",
                  "Team AI Training",
                  "Build team fluency around roles, tasks, examples, and responsible use.",
                  "/services/ai-training",
                ],
                [
                  "03",
                  "AI Workflow Development",
                  "Turn high-value opportunities into focused AI tools, automations, integrations, or internal systems.",
                  "/services/build",
                ],
                [
                  "04",
                  "Managed AI Improvement",
                  "Improve, support, and expand what is live.",
                  "/services/managed",
                ],
              ].map(([num, title, body, href]) => (
                <li className="bp-handoff-step" key={num}>
                  <a href={href}>
                    <span className="bp-handoff-num">{num}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <span className="bp-handoff-link">
                      Learn more{" "}
                      <span className="arrow" aria-hidden="true">→</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── SECTION 7: CTA ────────────────────────────────────── */}
        {/* No eyebrow. The CTA panel carries the section. */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            <div className="bp-cta-inner bp-cta-inner--bare">
              <h2>Ready to decide where AI fits?</h2>
              <p>
                Start with a 30-minute call. We&rsquo;ll talk through your
                goals, your workflows, and the first opportunity worth acting
                on.
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
