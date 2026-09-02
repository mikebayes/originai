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
 *   - darker charcoal / deep teal hero via .svc-dark (draft-only class)
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
 *   2. Connected adoption belief (no visible label)
 *   3. AI-capable organization model (circular framework + list)
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
      {/* svc-dark + svc-dark--approach carry the new dark hero
          treatment. Both classes exist only on draft pages, so the live
          /approach route is unaffected. */}
      <div className="bp-page bp-page--approach svc-dark svc-dark--approach">
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

        {/* ─── SECTION 2: CONNECTED ADOPTION BELIEF ──────────────
            Constructive framing. States what works rather than what
            companies are doing wrong. No cards, no eyebrow. */}
        <section className="bp-intro" data-screen-label="Connected adoption">
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
                  AI adoption works when the organization is{" "}
                  <span className="muted">connected around it.</span>
                </h2>
                <p className="section-lede lede">
                  AI adoption is strongest when leadership direction, team
                  capability, governance, and workflow opportunities reinforce
                  each other. These cannot sit in separate lanes if the goal is
                  meaningful adoption.
                </p>
                <p className="section-lede lede bp-pov-second">
                  Origin&rsquo;s approach connects those pieces, then helps turn
                  the strongest opportunities into training, workflows, tools,
                  and ongoing improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: AI-CAPABLE ORGANIZATION MODEL ──────────
            Centerpiece of the page. Ported from the live approach page's
            circular framework and toned down for the new dark system:
            softer halo, no bright cyan in the ring, restrained glow. */}
        <section className="bp-frame" data-screen-label="Capability model">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  What makes an organization AI-capable.
                </h2>
              </div>
              <p className="section-lede lede">
                Not a maturity ladder. A connected system of reinforcing
                capabilities. AI creates value when these six elements work
                together.
              </p>
            </div>

            <div className="bp-frame-grid">
              <div className="bp-frame-diagram" aria-hidden="true">
                <svg
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <radialGradient id="draftHalo" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#5DA89C" stopOpacity="0.13" />
                      <stop offset="60%" stopColor="#5DA89C" stopOpacity="0.03" />
                      <stop offset="100%" stopColor="#5DA89C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="draftRing" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#5DA89C" stopOpacity="0.38" />
                      <stop offset="50%" stopColor="#5DA89C" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#5DA89C" stopOpacity="0.38" />
                    </linearGradient>
                  </defs>

                  <circle cx="300" cy="300" r="290" fill="url(#draftHalo)" />
                  <circle
                    cx="300"
                    cy="300"
                    r="270"
                    fill="none"
                    stroke="rgba(255,255,255,0.055)"
                    strokeWidth="0.5"
                    strokeDasharray="2 7"
                  />

                  {/* Connective web between nodes, held well back */}
                  <g stroke="rgba(93,168,156,0.13)" strokeWidth="0.5" fill="none">
                    <line x1="300" y1="100" x2="473" y2="200" />
                    <line x1="473" y1="200" x2="473" y2="400" />
                    <line x1="473" y1="400" x2="300" y2="500" />
                    <line x1="300" y1="500" x2="127" y2="400" />
                    <line x1="127" y1="400" x2="127" y2="200" />
                    <line x1="127" y1="200" x2="300" y2="100" />
                    <line x1="300" y1="100" x2="473" y2="400" stroke="rgba(93,168,156,0.085)" />
                    <line x1="300" y1="100" x2="127" y2="400" stroke="rgba(93,168,156,0.085)" />
                    <line x1="473" y1="200" x2="300" y2="500" stroke="rgba(93,168,156,0.085)" />
                    <line x1="473" y1="200" x2="127" y2="400" stroke="rgba(93,168,156,0.085)" />
                    <line x1="127" y1="200" x2="300" y2="500" stroke="rgba(93,168,156,0.085)" />
                    <line x1="127" y1="200" x2="473" y2="400" stroke="rgba(93,168,156,0.085)" />
                    <line x1="300" y1="300" x2="300" y2="100" stroke="rgba(93,168,156,0.07)" />
                    <line x1="300" y1="300" x2="473" y2="200" stroke="rgba(93,168,156,0.07)" />
                    <line x1="300" y1="300" x2="473" y2="400" stroke="rgba(93,168,156,0.07)" />
                    <line x1="300" y1="300" x2="300" y2="500" stroke="rgba(93,168,156,0.07)" />
                    <line x1="300" y1="300" x2="127" y2="400" stroke="rgba(93,168,156,0.07)" />
                    <line x1="300" y1="300" x2="127" y2="200" stroke="rgba(93,168,156,0.07)" />
                  </g>

                  <circle
                    cx="300"
                    cy="300"
                    r="235"
                    fill="none"
                    stroke="url(#draftRing)"
                    strokeWidth="1"
                  />

                  {/* Center */}
                  <g>
                    <circle cx="300" cy="300" r="84" fill="#07100f" stroke="rgba(93,168,156,0.32)" strokeWidth="1" />
                    <circle cx="300" cy="300" r="84" fill="none" stroke="rgba(93,168,156,0.07)" strokeWidth="14" />
                    <text x="300" y="294" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontWeight="500" fontSize="18" fill="rgba(245,240,228,0.96)">AI-capable</text>
                    <text x="300" y="318" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontWeight="500" fontSize="18" fill="rgba(245,240,228,0.96)">organization</text>
                  </g>

                  {/* Six capability nodes around the ring */}
                  {[
                    { x: 195, y: 74,  num: "01", label: "Leadership Direction", dotX: 220, dotY: 102 },
                    { x: 368, y: 174, num: "02", label: "Executive Ownership",  dotX: 393, dotY: 202 },
                    { x: 368, y: 374, num: "03", label: "Working Systems",      dotX: 393, dotY: 402 },
                    { x: 195, y: 474, num: "04", label: "Buildable Use Cases",  dotX: 220, dotY: 502 },
                    { x: 22,  y: 374, num: "05", label: "Policy & Governance",  dotX: 47,  dotY: 402 },
                    { x: 22,  y: 174, num: "06", label: "AI Fluency",           dotX: 47,  dotY: 202 },
                  ].map((n) => (
                    <g key={n.num}>
                      <rect x={n.x} y={n.y} width="210" height="56" rx="28" fill="#080f10" stroke="rgba(93,168,156,0.38)" strokeWidth="1" />
                      <circle cx={n.dotX} cy={n.dotY} r="3.5" fill="#5DA89C" />
                      <text x={n.dotX + 14} y={n.dotY - 4} fontFamily="JetBrains Mono, monospace" fontSize="9.5" letterSpacing="2.4" fill="rgba(93,168,156,0.9)">{n.num}</text>
                      <text x={n.dotX + 14} y={n.dotY + 14} fontFamily="Inter Tight, sans-serif" fontWeight="500" fontSize="14" fill="rgba(245,240,228,0.95)">{n.label}</text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Supporting items: hairline numbered list, not a card grid,
                  since the model already carries the structure. */}
              <ol className="bp-frame-list">
                {[
                  [
                    "01",
                    "Leadership Direction",
                    "Leaders decide where AI belongs and what outcomes matter.",
                  ],
                  [
                    "02",
                    "Executive Ownership",
                    "Senior leaders stay close enough to remove barriers and keep momentum.",
                  ],
                  [
                    "03",
                    "Working Systems",
                    "AI creates value when it is embedded into workflows, software, and day-to-day operations.",
                  ],
                  [
                    "04",
                    "Buildable Use Cases",
                    "Ideas are filtered into focused opportunities that are worth acting on.",
                  ],
                  [
                    "05",
                    "Policy & Governance",
                    "Clear guardrails help people use AI safely without stalling progress.",
                  ],
                  [
                    "06",
                    "AI Fluency",
                    "Teams understand the concepts, risks, and possibilities, not just one tool.",
                  ],
                ].map(([num, title, body]) => (
                  <li className="bp-frame-item" key={num}>
                    <span className="num">{num}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Fluency note. Reads as a conclusion to the model, not a
                second card competing with it. */}
            <aside className="bp-fluency">
              <span className="bp-fluency-rule" aria-hidden="true" />
              <div>
                <h3>Build fluency, not dependency.</h3>
                <p>
                  The landscape will keep changing. Organizations need the
                  judgment to evaluate and adopt the right tools as they
                  evolve, instead of anchoring themselves to one vendor or
                  platform.
                </p>
              </div>
            </aside>
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
                  What we believe, and what we avoid.
                </h2>
              </div>
            </div>

            <div className="bp-contrast-grid">
              <div className="bp-col bp-col--believe">
                <h3 className="bp-col-title">What we believe</h3>
                <ul>
                  <li>AI adoption needs leadership clarity.</li>
                  <li>Fluency matters more than tool chasing.</li>
                  <li>The best use cases are tied to real work.</li>
                  <li>Systems should fit the business.</li>
                  <li>AI should improve outcomes.</li>
                </ul>
              </div>

              <div className="bp-col bp-col--avoid">
                <h3 className="bp-col-title">What we avoid</h3>
                <ul>
                  <li>Random experiments with no owner.</li>
                  <li>Training disconnected from the work.</li>
                  <li>
                    Software that adds complexity without changing outcomes.
                  </li>
                  <li>Governance that creates fear.</li>
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
                Our services move organizations from alignment, to
                capability, to systems, to ongoing improvement.
              </p>
            </div>

            <ol className="bp-handoff-rail">
              {[
                [
                  "01",
                  "Leadership AI Enablement",
                  "Clarify where AI belongs, what to act on first, and who owns what.",
                  "/services/strategy",
                  "Leadership enablement",
                ],
                [
                  "02",
                  "Team AI Training",
                  "Build team fluency around roles, tasks, examples, and responsible use.",
                  "/services/ai-training",
                  "Team training",
                ],
                [
                  "03",
                  "AI Workflow Development",
                  "Turn high-value opportunities into focused AI tools, automations, integrations, or internal systems.",
                  "/services/build",
                  "Workflow development",
                ],
                [
                  "04",
                  "Managed AI Improvement",
                  "Improve, support, and expand what is live.",
                  "/services/managed",
                  "Managed improvement",
                ],
              ].map(([num, title, body, href, cta]) => (
                <li className="bp-handoff-step" key={num}>
                  <a href={href}>
                    <span className="bp-handoff-num">{num}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <span className="bp-handoff-link">
                      {cta} <span className="arrow" aria-hidden="true">→</span>
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
