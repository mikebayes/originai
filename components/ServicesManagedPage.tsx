import HeroNav from "./HeroNav";

/**
 * /services/managed — Managed AI deep service page.
 *
 * Revised 2026-05-05 per Mike's direction to reduce overclaiming and
 * remove AI-sounding filler. Managed AI is positioned as an emerging
 * follow-on service for clients whose AI system or workflow we helped
 * build — not a mature productized service with years of operating
 * history. Language uses "may include" / "depending on" so clients
 * don't read this as a fixed catalogue of monthly deliverables.
 *
 * Hero unchanged. "Launch is not the finish line" tightened to two
 * paragraphs. "What's included" + "What we can keep improving" + "What
 * you get each month" merged into a single "What Managed AI covers"
 * section with four categories (Improve / Support / Extend / Optimize).
 * Rhythm and rail kept; FAQ trimmed; CTA softened.
 */
export default function ServicesManagedPage() {
  return (
    <div className="bp-page bp-page--managed">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell">
        <HeroNav />

        {/* HERO — unchanged per Mike's direction */}
        <section className="wrap bp-hero" data-screen-label="Managed hero">
          <div className="bp-hero-meta">
            <span>
              <a href="/services">← Services</a>
              <span className="crumb-sep">/</span>
              <span>Managed AI</span>
            </span>
            <span>03 / 03 — Managed</span>
          </div>

          <div className="bp-hero-eyebrow">
            <span className="dot" />
            <span>Managed AI</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1">
            Keep improving <span className="accent">what you&rsquo;ve built.</span>
          </h1>

          <p className="bp-hero-sub">
            Ongoing development, support, and optimization for the AI systems,
            apps, workflows, and tools we build with you.
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
              <div className="k">Format</div>
              <div className="v">Ongoing development</div>
            </div>
            <div className="bp-hero-foot-col">
              <div className="k">Outputs</div>
              <div className="v">Improvements, support, new workflows</div>
            </div>
          </div>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* AFTER LAUNCH — tightened to two short paragraphs */}
      <section className="bp-intro" data-screen-label="Launch is not the finish line">
        <div className="wrap">
          <div className="bp-intro-grid">
            <div>
              <div className="bp-intro-eyebrow">— After launch</div>
              <h2 className="bp-intro-h2">Launch is not the finish line.</h2>
              <span className="bp-intro-tag">v1 ships · v2 begins</span>
            </div>
            <div className="bp-intro-body">
              <p>
                <strong>
                  The first version gets a working AI system into the business.
                  Once people start using it, the real opportunities and gaps
                  show up in ways no plan could predict.
                </strong>
              </p>
              <p>
                Managed AI gives clients a defined way to keep improving the
                system after launch, without restarting a project every time
                something needs to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="chapter-rule">
          <span className="pill-marker">
            <span className="dot" />
            What Managed AI covers
          </span>
        </div>
      </div>

      {/* WHAT MANAGED AI COVERS — replaces "What's included" + coverage 9-cell
          + "What you get each month". Four simple categories with hedged
          language so this doesn't read as a fixed monthly catalogue. */}
      <section className="bp-work" data-screen-label="What Managed AI covers">
        <div className="wrap">
          <div className="bp-work-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                What it covers
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Four ways Managed AI{" "}
                <span className="muted">keeps the system improving.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Each month&rsquo;s work is defined with the client. Depending on
              the system and the agreed scope, it may include any of the
              following.
            </p>
          </div>

          <div className="bp-work-grid">
            {[
              [
                "01",
                "Improve",
                "Refinements, workflow changes, feature adjustments, and usability improvements based on real use.",
              ],
              [
                "02",
                "Support",
                "Issue resolution, small fixes, and adjustments that keep the system useful day to day.",
              ],
              [
                "03",
                "Extend",
                "New workflows, integrations, automations, or capabilities, where there is a clear business case.",
              ],
              [
                "04",
                "Optimize",
                "Improvements to prompts, agents, data flows, UX, integrations, and system performance over time.",
              ],
            ].map(([num, title, body]) => (
              <div className="bp-work-cell" key={num}>
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE MONTHLY RHYTHM WORKS — kept, with tightened copy */}
      <section className="bp-rhythm" data-screen-label="How the monthly rhythm works">
        <div className="wrap">
          <div className="bp-rhythm-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Monthly rhythm
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                How the rhythm{" "}
                <span className="muted">works each month.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Less process, more clarity on what is getting worked on and why.
            </p>
          </div>

          <div className="bp-rhythm-grid">
            <div className="bp-rhythm-stages">
              {[
                [
                  "01",
                  "Review",
                  "We look at usage, feedback, and what surfaced over the past month.",
                  "Listen",
                ],
                [
                  "02",
                  "Prioritize",
                  "We agree together on what is worth working on next, within the agreed scope.",
                  "Decide",
                ],
                [
                  "03",
                  "Improve",
                  "Our team develops, tests, and releases updates as the work moves.",
                  "Build",
                ],
                [
                  "04",
                  "Extend",
                  "When a clear case appears, we add new workflows, capabilities, or integrations.",
                  "Grow",
                ],
              ].map(([num, h, p, label]) => (
                <div className="bp-rhythm-stage" key={num}>
                  <div className="num">{num}</div>
                  <div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                  <div className="stagelabel">{label}</div>
                </div>
              ))}
            </div>

            <div className="bp-rhythm-cycle" aria-hidden="true">
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="ringGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#6FB4AC" stopOpacity="0.18" />
                    <stop offset="70%" stopColor="#6FB4AC" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6FB4AC" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#3FDDC9" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#6FB4AC" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="url(#ringGlow)" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" strokeDasharray="2 6" />
                <circle cx="200" cy="200" r="130" fill="none" stroke="url(#ringStroke)" strokeWidth="1" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(111,180,172,0.18)" strokeWidth="0.5" />
                <g transform="translate(200 70)">
                  <circle r="6" fill="#04140e" stroke="#6FB4AC" strokeWidth="1" />
                  <circle r="2" fill="#6FB4AC" />
                  <text y="-16" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#6FB4AC">REVIEW</text>
                </g>
                <g transform="translate(330 200)">
                  <circle r="6" fill="#04140e" stroke="#6FB4AC" strokeWidth="1" />
                  <circle r="2" fill="#6FB4AC" />
                  <text x="14" y="4" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#6FB4AC">PRIORITIZE</text>
                </g>
                <g transform="translate(200 330)">
                  <circle r="6" fill="#04140e" stroke="#6FB4AC" strokeWidth="1" />
                  <circle r="2" fill="#6FB4AC" />
                  <text y="22" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#6FB4AC">IMPROVE</text>
                </g>
                <g transform="translate(70 200)">
                  <circle r="6" fill="#04140e" stroke="#6FB4AC" strokeWidth="1" />
                  <circle r="2" fill="#6FB4AC" />
                  <text x="-14" y="4" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#6FB4AC">EXTEND</text>
                </g>
                <path d="M 200 70 A 130 130 0 0 1 330 200" fill="none" stroke="#3FDDC9" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                <path d="M 326 196 L 332 200 L 326 204" fill="none" stroke="#3FDDC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
              </svg>
              <div className="center-label">
                <span className="k">Monthly</span>
                <span className="v">cadence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN THIS FITS — reduced from 6 signals to 4, qualification-focused.
          Dropped "Signal 0X" labels (read as productized AI catalogue). */}
      <section className="bp-fit" data-screen-label="When this fits">
        <div className="wrap">
          <div className="bp-fit-head">
            <div className="eyebrow">
              <span className="bar" />
              When this fits
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              Managed AI usually fits{" "}
              <span className="muted">when&hellip;</span>
            </h2>
            <p className="section-lede">
              For clients who want a defined way to keep improving a live AI
              system, not a new project every time something changes.
            </p>
          </div>

          <div className="bp-fit-grid">
            {[
              [
                "A system, workflow, or tool we built with you is now live and being used.",
                "Stay close to it as the business finds new ways to use it.",
              ],
              [
                "New needs, gaps, or edge cases are showing up in real use.",
                "Address them within a defined monthly scope, not as one-off projects.",
              ],
              [
                "You would rather have a defined monthly scope than ad-hoc requests.",
                "Predictable cadence, predictable budget, ongoing improvement.",
              ],
              [
                "You want continuity with the team that already knows the system.",
                "Keep architecture, decisions, and context in the same hands.",
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

      {/* BUILT TO CONTINUE — Build → Managed rail, kept */}
      <section className="bp-rail" data-screen-label="Built to continue">
        <div className="wrap">
          <div className="bp-rail-head">
            <div className="eyebrow">
              <span className="bar" />
              Continuity
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              Built to <span className="muted">continue.</span>
            </h2>
          </div>

          <p className="bp-rail-statement">
            Managed AI works best when it follows a system the same team helped
            design and build. The architecture, the workflows, the users, and
            the decisions behind the build are already understood.{" "}
            <strong>
              That continuity reduces friction and helps the system keep
              evolving with the business.
            </strong>
          </p>

          <div className="bp-rail-track">
            <div className="bp-rail-node">
              <span className="label">Phase 01</span>
              <h4>Build</h4>
              <p>The system is designed, built, and put into use.</p>
            </div>
            <div className="bp-rail-arrow" aria-hidden="true">
              <span className="line" />
              <span className="head">continues into →</span>
            </div>
            <div className="bp-rail-node bp-rail-node--active">
              <span className="label">Phase 02 — current</span>
              <h4>Managed AI</h4>
              <p>The same team keeps improving it, month over month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — trimmed from 4 to 3 */}
      <section className="bp-faq" data-screen-label="Common questions">
        <div className="wrap">
          <div className="bp-faq-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Common questions
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Questions, <span className="muted">answered.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Practical questions clients tend to ask before they engage.
            </p>
          </div>

          <div className="bp-faq-list">
            {[
              {
                open: true,
                q: "Is Managed AI required after a build?",
                a: "No. Some clients prefer a clean handoff at launch. Managed AI is for clients who want the same team to stay close to the system as it evolves.",
              },
              {
                open: false,
                q: "What does the monthly scope include?",
                a: "The scope is defined together each month. Depending on the system, it may include fixes, refinements, new workflows, support, or optimization.",
              },
              {
                open: false,
                q: "What happens if we want to stop?",
                a: "Engagements can end. Ownership, access, and handoff are clear from the start, so clients understand what they own and how the system can continue.",
              },
            ].map((it, i) => (
              <details className="bp-faq-item" key={i} open={it.open}>
                <summary>
                  <span className="qnum">Q · {String(i + 1).padStart(2, "0")}</span>
                  <span className="qtext">{it.q}</span>
                  <span className="plus" aria-hidden="true" />
                </summary>
                <div className="ans">{it.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — softened */}
      <section className="bp-cta" data-screen-label="Final CTA" id="contact">
        <div className="wrap">
          <div className="bp-cta-inner">
            <div className="bp-cta-eyebrow">
              <span className="dot" />
              Talk to us
            </div>
            <h2>Want to keep improving what you&rsquo;ve built?</h2>
            <p>
              Let&rsquo;s talk through the system, the backlog, and whether an
              ongoing improvement model fits.
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
  );
}
