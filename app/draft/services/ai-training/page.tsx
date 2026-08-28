import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/services/ai-training — DRAFT Team AI Training page.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. No live route is touched.
 *
 * Built on the refined /draft/services/build design system:
 *   - breadcrumb only in the hero, no progress marker, no duplicate
 *     service label, no decorative accent above the H1
 *   - no all-caps text eyebrows on body sections
 *   - one homepage streak above the first body heading, simple teal
 *     rules above the rest
 *   - two-tone headline treatment used sparingly (hero + one body
 *     section only)
 *   - no card-level accent lines
 *
 * Positioning: this is not a generic ChatGPT workshop. The
 * differentiator is customization, so section 3 ("Customized before
 * anyone joins the session") carries the pre-session survey, role and
 * workflow review, example selection, and session design. Training also
 * doubles as discovery: section 6 connects surfaced use cases to AI
 * Workflow Development and Leadership AI Enablement.
 *
 * Sections:
 *   1. Hero
 *   2. Built around your team's work (3 cards)
 *   3. How we customize the training (4 steps + human visual)
 *   4. What teams learn (6 compact cards)
 *   5. What happens in the session (4 steps)
 *   6. Where training can lead (3 cards, 2 link out)
 *   7. CTA
 *
 * TODO (launch task, NOT draft-scoped): when the repositioning ships,
 * this page becomes /services/ai-training and the shared Services
 * dropdown in components/NavServicesDropdown.tsx and
 * NavServicesAccordion.tsx needs a fourth item pointing at it, plus the
 * renames noted on the other draft pages.
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ──────────────
   Location language lives here and in the footer, not in hero copy.   */
const EVENTUAL_SEO_TITLE =
  "AI Training Winnipeg | Team AI Training & Enablement | Origin AI";
const EVENTUAL_SEO_DESCRIPTION =
  "Origin AI provides customized AI training for teams in Winnipeg and across Canada, helping staff use AI in real work, improve adoption, and identify workflow opportunities.";

export const metadata: Metadata = {
  title: "DRAFT · Team AI Training | Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

/* Review route: never serve a cached copy. Scoped to this draft page
   only, so the live marketing pages keep their static generation. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

export default function DraftTeamAITrainingPage() {
  return (
    <main>
      {/* bp-page--training inherits the workflow page's refined hero
          scale and card spacing, with its own grid overrides. */}
      <div className="bp-page bp-page--workflow bp-page--training">
        <div className="bp-grain" aria-hidden="true" />

        {/* Internal draft banner. Delete when this page goes live. */}
        <div className="draft-banner" role="note">
          Internal draft. Not indexed, not linked, no live route affected.
        </div>

        <div className="bp-hero-shell">
          <HeroNav />

          {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
          <section
            className="wrap bp-hero"
            data-screen-label="Team AI training hero"
          >
            {/* Breadcrumb only. */}
            <div className="bp-hero-meta bp-hero-meta--crumb-only">
              <span>
                <a href="/services">← Services</a>
                <span className="crumb-sep">/</span>
                <span>Team AI Training</span>
              </span>
            </div>

            <h1 className="bp-hero-h1 bp-hero-h1--bare">
              AI training built around the work{" "}
              <span className="accent">your team actually does.</span>
            </h1>

            {/* One subheadline only. */}
            <p className="bp-hero-sub">
              Origin helps teams use AI with more confidence, consistency, and
              judgment by tailoring training around their roles, tools,
              documents, decisions, and real workflow opportunities.
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
                <div className="k">Format</div>
                <div className="v">On-site, remote, or hybrid</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Best fit</div>
                <div className="v">
                  Teams ready to use AI more consistently
                </div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Outputs</div>
                <div className="v">
                  Training, examples, use cases, and next-step opportunities
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: BUILT AROUND YOUR TEAM'S WORK ──────────── */}
        <section className="bp-origin" data-screen-label="Built around your team's work">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                {/* Homepage brand streak. Used once on this page, opening
                    the body content after the hero. */}
                <span className="hero-mark bp-streak" aria-hidden="true">
                  <span className="hero-mark-dot" />
                  <span className="hero-mark-line" />
                </span>
                <h2 className="section-h2 bp-h2--accented">
                  Training should start with the work,{" "}
                  <span className="muted">not the tool.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                The most useful AI training is tied to the tasks people already
                handle: writing, research, analysis, reporting, customer
                response, content, documents, decisions, and coordination.
              </p>
            </div>

            <div className="bp-origin-grid">
              <div className="bp-origin-cell">
                <h3>Real roles</h3>
                <p>
                  We shape examples around the people in the room and the
                  decisions they make.
                </p>
              </div>
              <div className="bp-origin-cell">
                <h3>Real tasks</h3>
                <p>
                  Training uses familiar work patterns such as drafting,
                  summarizing, comparing, reviewing, researching, and
                  reporting.
                </p>
              </div>
              <div className="bp-origin-cell">
                <h3>Real opportunities</h3>
                <p>
                  The session helps surface repeatable use cases that may be
                  worth improving beyond training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: HOW WE CUSTOMIZE THE TRAINING ──────────── */}
        {/* Key differentiator section. Sequence is numbered because the
            four items happen in order before the session. */}
        <section className="bp-custom" data-screen-label="How we customize the training">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Customized before anyone joins the session.
                </h2>
              </div>
              <p className="section-lede lede">
                Before training, we gather enough context to make the session
                relevant to the team instead of generic.
              </p>
            </div>

            <div className="bp-steps bp-steps--four">
              {[
                [
                  "01",
                  "Pre-session survey",
                  "Participants share their current AI use, comfort level, concerns, tools, and examples of work that could be improved.",
                ],
                [
                  "02",
                  "Role and workflow review",
                  "We look for common tasks, bottlenecks, documents, decisions, and recurring patterns across the team.",
                ],
                [
                  "03",
                  "Example selection",
                  "We choose examples that reflect the team's real work, not generic AI demos.",
                ],
                [
                  "04",
                  "Session design",
                  "The workshop is shaped around the group's needs, risks, opportunities, and adoption level.",
                ],
              ].map(([num, title, body]) => (
                <div className="bp-step" key={num}>
                  <span className="bp-step-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>

            {/* Human training environment visual.

                ART DIRECTION (internal, do not render as page text):
                Use a real human business training environment: facilitator
                with a small team, workshop setting, people reviewing
                examples or discussing workflows. Should feel professional,
                warm, and real. Avoid futuristic AI imagery, robots,
                abstract sparkles, or generic stock-photo cheese. */}
            <div className="ph-slot ph-slot--flow ph-slot--wide" aria-hidden="true">
              <span className="ph-slot-label">Training environment visual</span>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: WHAT TEAMS LEARN ───────────────────────── */}
        <section className="bp-domains" data-screen-label="What teams learn">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  What teams learn to do better.
                </h2>
              </div>
              <p className="section-lede lede">
                The focus is on useful, responsible AI habits that improve
                everyday work without removing judgment.
              </p>
            </div>

            <div className="bp-domain-grid">
              {[
                [
                  "Prompt with context",
                  "Give AI clearer instructions, source material, constraints, and intended outcomes.",
                ],
                [
                  "Review and improve outputs",
                  "Evaluate AI responses, refine drafts, catch gaps, and apply human judgment.",
                ],
                [
                  "Summarize and synthesize",
                  "Turn documents, notes, reports, or feedback into clearer summaries and next steps.",
                ],
                [
                  "Draft and adapt content",
                  "Create stronger first drafts, rewrite for audience and channel, and apply brand or tone guidance.",
                ],
                [
                  "Research and compare",
                  "Use AI to explore options, compare information, and prepare better questions.",
                ],
                [
                  "Work responsibly",
                  "Understand boundaries around privacy, accuracy, sensitive information, and review.",
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

        {/* ─── SECTION 5: WHAT HAPPENS IN THE SESSION ────────────── */}
        {/* Uses the hairline list treatment rather than numbered cards so
            it reads differently from section 3. */}
        <section className="bp-howitworks" data-screen-label="What happens in the session">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Designed for participation, not passive watching.
                </h2>
              </div>
              <p className="section-lede lede">
                The best sessions combine short instruction, live examples,
                hands-on exercises, and discussion about where AI fits in the
                team&rsquo;s actual work.
              </p>
            </div>

            <ol className="bp-flow-steps bp-flow-steps--two-col">
              {[
                [
                  "01",
                  "Align",
                  "Set expectations, responsible-use boundaries, and the role AI should play.",
                ],
                [
                  "02",
                  "Demonstrate",
                  "Show examples tied to the team's tasks, tools, documents, and decisions.",
                ],
                [
                  "03",
                  "Practice",
                  "Participants work through exercises using realistic scenarios and prompts.",
                ],
                [
                  "04",
                  "Capture",
                  "Document useful patterns, concerns, and opportunities that should be explored further.",
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

        {/* ─── SECTION 6: WHERE TRAINING CAN LEAD ────────────────── */}
        <section className="bp-origin" data-screen-label="Where training can lead">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Training often reveals what should be built next.
                </h2>
              </div>
              <p className="section-lede lede">
                When teams use AI with real examples, repeatable opportunities
                become easier to see. Some remain individual habits. Others may
                become shared prompts, team standards, automations,
                assistants, or custom workflow tools.
              </p>
            </div>

            <div className="bp-origin-grid">
              <div className="bp-origin-cell">
                <h3>Shared AI habits</h3>
                <p>
                  Teams leave with clearer expectations, better examples, and
                  more consistent ways to use AI.
                </p>
              </div>

              <a href="/services/strategy" className="bp-origin-cell is-link">
                <h3>Workflow opportunities</h3>
                <p>
                  The session can surface recurring tasks or decisions that are
                  worth improving beyond training.
                </p>
                <span className="bp-origin-link">
                  Leadership AI Enablement{" "}
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>

              <a href="/services/build" className="bp-origin-cell is-link">
                <h3>AI Workflow Development</h3>
                <p>
                  High-value opportunities can become focused AI tools,
                  assistants, automations, integrations, or internal systems.
                </p>
                <span className="bp-origin-link">
                  Explore workflow development{" "}
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: CTA ────────────────────────────────────── */}
        {/* No eyebrow, no accent. The CTA panel carries the section. */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            <div className="bp-cta-inner bp-cta-inner--bare">
              <h2>Want AI training built around your team?</h2>
              <p>
                Start with a 30-minute call. We&rsquo;ll talk about your
                people, the work they do, and where AI training could create
                the most value.
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
