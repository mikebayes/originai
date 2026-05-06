import HeroNav from "./HeroNav";

/**
 * /services/managed — Managed AI deep service page.
 *
 * Revised again 2026-05-05 per Mike's direction. The previous rewrite
 * removed overclaiming but the copy still didn't land what Managed AI
 * actually is. This pass adds a clear definition section right after
 * "Launch is not the finish line", reframes the four-card section as
 * "What the monthly scope covers" (with new categories: Improve /
 * Extend / Support / Manage backlog), reintroduces a compact "What it
 * can apply to" section (4 system types), keeps the rhythm with
 * tightened copy, and brings back a 5-item "What you get each month"
 * list so the buyer has a clear deliverable picture.
 *
 * Structure:
 *   1. Hero (unchanged)
 *   2. Launch is not the finish line (unchanged)
 *   3. What Managed AI is (NEW — clear definition)
 *   4. What the monthly scope covers — 4 cards
 *   5. What it can apply to — 4 compact cards (system types)
 *   6. Monthly rhythm (cycle SVG kept; copy tightened)
 *   7. What you get each month — 5 items
 *   8. Built to continue — restored "not a handoff" line
 *   9. FAQ
 *   10. CTA
 */
export default function ServicesManagedPage() {
  return (
    <div className="bp-page bp-page--managed">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell">
        <HeroNav />

        {/* HERO — unchanged */}
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

      {/* AFTER LAUNCH — kept */}
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

      {/* WHAT MANAGED AI IS — NEW: clear definition right after Launch
          so the buyer knows what this service actually is before they
          read the breakdown of what it covers. */}
      <section className="bp-define" data-screen-label="What Managed AI is">
        <div className="wrap">
          <div className="bp-define-inner">
            <div className="bp-define-eyebrow">
              <span className="bar" />
              What Managed AI is
            </div>
            <h2 className="bp-define-h2">
              A monthly team{" "}
              <span className="muted">for the systems we build.</span>
            </h2>
            <div className="bp-define-body">
              <p>
                Managed AI is a defined monthly development and support
                agreement for the AI systems, apps, websites, workflows,
                agents, and tools we build with you.
              </p>
              <p>
                Instead of starting a new project every time something needs
                to change, we keep a monthly scope open for improvements,
                fixes, new workflows, user feedback, and ongoing development.
              </p>
              <p className="bp-define-emphasis">
                <strong>This is not outsourced AI leadership.</strong> It is
                not a loose advisory retainer. It is a way to keep useful
                systems improving after they are live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE MONTHLY SCOPE COVERS — 4 cards, replaces previous
          bp-work content. Categories now: Improve / Extend / Support /
          Manage the backlog. Each tied to monthly development scope. */}
      <section className="bp-work" data-screen-label="What the monthly scope covers">
        <div className="wrap">
          <div className="bp-work-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                What the monthly scope covers
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Improve, extend, support,{" "}
                <span className="muted">and manage the backlog.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Each month, we agree on the highest-value work inside a defined
              scope. The work changes as the system, users, and business needs
              evolve.
            </p>
          </div>

          <div className="bp-work-grid">
            {[
              [
                "01",
                "Improve what is live",
                "Fix issues, refine the interface, tune AI behavior, and make the system easier to use based on real feedback.",
              ],
              [
                "02",
                "Extend the system",
                "Add new workflows, automations, agents, pages, screens, integrations, or features as new opportunities emerge.",
              ],
              [
                "03",
                "Support the users",
                "Help teams use what has been built, answer questions, resolve friction, and keep the system moving.",
              ],
              [
                "04",
                "Manage the backlog",
                "Maintain a shared list of improvements, prioritize what matters, and agree on what gets done within the monthly scope.",
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

      {/* WHAT IT CAN APPLY TO — NEW: 4 compact cards covering the
          system types Managed AI applies to. Reuses bp-coverage cells
          but overridden to 4-col on managed (see services-deep.css). */}
      <section className="bp-coverage" data-screen-label="What it can apply to">
        <div className="wrap">
          <div className="bp-coverage-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                What it can apply to
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                The systems we build{" "}
                <span className="muted">do not stand still.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Managed AI applies to the things we build with you: software,
              websites, workflows, agents, automations, GPTs, integrations,
              and internal tools.
            </p>
          </div>

          <div className="bp-coverage-grid">
            {[
              [
                "01",
                "Software and internal apps",
                "Custom systems, dashboards, portals, and internal tools that need ongoing improvement.",
              ],
              [
                "02",
                "Websites and digital experiences",
                "AI-enabled websites, conversion flows, content tools, and customer-facing experiences.",
              ],
              [
                "03",
                "Agents, GPTs, and assistants",
                "AI tools that retrieve, draft, route, answer, summarize, or support work inside the business.",
              ],
              [
                "04",
                "Workflows and integrations",
                "Automations, data flows, system connections, and business processes that need to evolve over time.",
              ],
            ].map(([num, h, p]) => (
              <div className="bp-coverage-cell" key={num}>
                <span className="marker">{num}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONTHLY RHYTHM — kept, copy refined to feel specific to
          monthly development scope rather than generic process. */}
      <section className="bp-rhythm" data-screen-label="Monthly rhythm">
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
                  "We look at usage, feedback, issues, and new opportunities from the live system.",
                  "Listen",
                ],
                [
                  "02",
                  "Prioritize",
                  "We agree on the most valuable fixes, changes, or additions for the month.",
                  "Decide",
                ],
                [
                  "03",
                  "Improve",
                  "Our team builds, tests, and releases updates within the defined scope.",
                  "Build",
                ],
                [
                  "04",
                  "Extend",
                  "As the system proves value, we add new workflows, features, and integrations.",
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

      {/* WHAT YOU GET EACH MONTH — restored as a tighter 5-item list. */}
      <section className="bp-outputs" data-screen-label="What you get each month">
        <div className="wrap">
          <div className="bp-outputs-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Outputs
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                What you get{" "}
                <span className="muted">each month.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              A clear way to improve live AI systems without turning every
              change into a new project.
            </p>
          </div>

          <div className="bp-outputs-list">
            {[
              {
                key: "scope",
                /* Calendar with checkmark — "defined monthly scope". */
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <path d="M8.5 15.5l2 2 4-4" />
                  </svg>
                ),
                title: "Defined monthly scope.",
                body: "The work for the month is agreed up front and visible to both teams.",
              },
              {
                key: "backlog",
                /* Stacked rows with priority dots — "prioritized backlog". */
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="5" cy="6" r="1.6" fill="currentColor" />
                    <circle cx="5" cy="12" r="1.6" fill="currentColor" />
                    <circle cx="5" cy="18" r="1.6" fill="currentColor" />
                    <line x1="10" y1="6" x2="20" y2="6" />
                    <line x1="10" y1="12" x2="18" y2="12" />
                    <line x1="10" y1="18" x2="16" y2="18" />
                  </svg>
                ),
                title: "Prioritized backlog.",
                body: "A shared list of fixes, improvements, and ideas, ordered by value.",
              },
              {
                key: "develop",
                /* Code brackets — "development and support". */
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 7 4 12 9 17" />
                    <polyline points="15 7 20 12 15 17" />
                  </svg>
                ),
                title: "Development and support.",
                body: "Updates, fixes, refinements, and support for the systems we built.",
              },
              {
                key: "workflow",
                /* Branching nodes — "new workflows and enhancements". */
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="6" cy="6" r="2" />
                    <circle cx="18" cy="6" r="2" />
                    <circle cx="12" cy="18" r="2" />
                    <path d="M7.5 7.5L11 16" />
                    <path d="M16.5 7.5L13 16" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                  </svg>
                ),
                title: "New workflows and enhancements.",
                body: "Additional capability added as users find better ways to use the system.",
              },
              {
                key: "team",
                /* Two figures — "team that knows the context". */
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="9" cy="8" r="3" />
                    <path d="M3 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
                    <circle cx="17" cy="9" r="2.2" />
                    <path d="M14 16a3.2 3.2 0 0 1 2-1h1a4 4 0 0 1 4 4v1" />
                  </svg>
                ),
                title: "A team that knows the context.",
                body: "The people, architecture, trade-offs, and decisions stay connected.",
              },
            ].map(({ key, icon, title, body }) => (
              <div className="bp-output-row" key={key}>
                <div className="bp-output-icon" aria-hidden="true">
                  {icon}
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT TO CONTINUE — Build → Managed rail. "This is not a
          handoff" line restored per Mike's spec. */}
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
            Managed AI works best when it follows a system we helped design
            and build. The same team understands the architecture, workflow,
            users, and decisions behind it.{" "}
            <strong>
              That continuity lets us move faster and improve without starting
              from zero.
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

          <p
            style={{
              textAlign: "center",
              margin: "56px auto 0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14.5px",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "50ch",
            }}
          >
            This is not a handoff. It is an ongoing relationship with the work.
          </p>
        </div>
      </section>

      {/* FAQ */}
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

      {/* FINAL CTA */}
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
