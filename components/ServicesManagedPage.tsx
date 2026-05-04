import DeepServiceNav from "./DeepServiceNav";

/**
 * /services/managed — Managed AI deep service page.
 *
 * Built from Claude Design spec. Reuses .bp-page system from
 * services-deep.css with .bp-page--managed modifier carrying the
 * cooler teal-leaning hero gradient. Page-specific sections include
 * the monthly rhythm cycle visual, the coverage 9-cell grid, and the
 * Build → Managed rail.
 */
export default function ServicesManagedPage() {
  return (
    <div className="bp-page bp-page--managed">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell">
        <DeepServiceNav />

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

      {/* AFTER LAUNCH, THE WORK CHANGES */}
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
                  The first version gets the system into the business. The next
                  versions make it better.
                </strong>
              </p>
              <p>
                Once people start using AI software, the real opportunities
                become clearer. Workflows need adjustment. Users ask for new
                features. Integrations change. Prompts, agents, data flows, and
                interfaces need refinement.
              </p>
              <p>
                Managed AI gives you a defined monthly path to keep improving
                what is already live, without restarting a new project every
                time something needs to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="chapter-rule">
          <span className="pill-marker">
            <span className="dot" />
            What&rsquo;s included — six work areas
          </span>
        </div>
      </div>

      {/* WHAT'S INCLUDED */}
      <section className="bp-work" data-screen-label="What's included">
        <div className="wrap">
          <div className="bp-work-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                What&rsquo;s included
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                A defined monthly scope{" "}
                <span className="muted">for live AI systems.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Continuous development, support, and extension of the systems we
              build with you, handled by the team that already knows them.
            </p>
          </div>

          <div className="bp-work-grid">
            {[
              ["01", "Continuous development", "New features, workflow improvements, interface changes, and extensions to systems already in use."],
              ["02", "Fixes and support", "Issue resolution, adjustments, and support for the software, workflows, and AI components we have built."],
              ["03", "Workflow additions", "New workflows, automations, agents, or user paths added as the business finds more valuable ways to use the system."],
              ["04", "Optimization", "Refinement of prompts, agents, data flows, integrations, UX, and system performance based on real usage."],
              ["05", "Backlog management", "A shared improvement backlog that keeps priorities visible and helps decide what gets worked on next."],
              ["06", "Accountable team", "Continuity from the team that knows the system, the business context, and the decisions behind the build."],
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

      {/* THE MONTHLY RHYTHM */}
      <section className="bp-rhythm" data-screen-label="Monthly rhythm">
        <div className="wrap">
          <div className="bp-rhythm-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                The monthly rhythm
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                A monthly rhythm{" "}
                <span className="muted">for continuous improvement.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Managed AI gives the work structure without slowing it down. Not
              a process funnel, an operating cadence.
            </p>
          </div>

          <div className="bp-rhythm-grid">
            <div className="bp-rhythm-stages">
              {[
                ["01", "Review", "We look at usage, feedback, issues, and new opportunities surfacing in the live system.", "Listen"],
                ["02", "Prioritize", "We agree on the highest-value fixes, changes, or additions for the month — together.", "Decide"],
                ["03", "Improve", "Our team develops, tests, and releases updates within the defined monthly scope.", "Build"],
                ["04", "Extend", "As the system proves value, we add new workflows, capabilities, and integrations.", "Grow"],
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

      {/* WHAT WE CAN KEEP IMPROVING — coverage 9-cell grid */}
      <section className="bp-coverage" data-screen-label="What we can keep improving">
        <div className="wrap" style={{ paddingTop: 0 }}>
          <div className="bp-coverage-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Coverage
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                What we can <span className="muted">keep improving.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Managed AI applies to the systems, apps, workflows, and tools we
              build with you, not abstract advice.
            </p>
          </div>

          <div className="bp-coverage-grid">
            {[
              ["01", "Custom AI software", "Purpose-built AI products serving a specific business workflow."],
              ["02", "Internal apps", "Tools used by employees to do faster, sharper, more consistent work."],
              ["03", "AI-enabled websites", "Public-facing sites with AI features integrated into the experience."],
              ["04", "Workflow systems", "Multi-step automations that move work through the business."],
              ["05", "Agents and assistants", "AI agents that take action, retrieve, draft, and route on behalf of the team."],
              ["06", "Custom GPTs", "Internal AI assistants tuned to specific roles, contexts, or processes."],
              ["07", "Customer or employee portals", "Self-serve interfaces that surface the right information at the right time."],
              ["08", "Data and integration layers", "The connective tissue keeping AI accurate, current, and grounded."],
              ["09", "Dashboards and decision tools", "Interfaces that turn AI output into something a team can actually act on."],
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

      {/* WHEN MANAGED MAKES SENSE */}
      <section className="bp-fit" data-screen-label="When this makes sense">
        <div className="wrap">
          <div className="bp-fit-head">
            <div className="eyebrow">
              <span className="bar" />
              When this makes sense
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              This is the right call <span className="muted">when&hellip;</span>
            </h2>
            <p className="section-lede">
              Managed AI is useful when the system matters enough to keep
              improving, but you do not want to restart a project every time a
              new need appears.
            </p>
          </div>

          <div className="bp-fit-grid">
            {[
              ["Signal 01", "You've launched an AI system and want it to keep improving."],
              ["Signal 02", "Users are finding new workflows, gaps, and opportunities."],
              ["Signal 03", "The first build proved value, and now the business wants more."],
              ["Signal 04", "You need a team that already understands the system."],
              ["Signal 05", "You want a defined monthly scope, not one-off requests."],
              ["Signal 06", "You expect the system to evolve as the business changes."],
            ].map(([sig, h]) => (
              <div className="bp-fit-cell" key={sig}>
                <span className="signal">{sig}</span>
                <h3>{h}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET EACH MONTH */}
      <section className="bp-outputs" data-screen-label="What you get each month">
        <div className="wrap">
          <div className="bp-outputs-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Outputs
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                What you get <span className="muted">each month.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              A clearer way to improve live AI systems without turning every
              change into a new project.
            </p>
          </div>

          <div className="bp-outputs-list">
            {[
              ["01", "A defined monthly scope.", "What's in scope for the month is agreed up front, written down, and visible to both teams."],
              ["02", "A prioritized backlog.", "A shared list of fixes, improvements, and ideas — ordered by value and ready to draw from."],
              ["03", "Fixes and refinements.", "Issues resolved, edges sanded down, and small adjustments applied as soon as they're useful."],
              ["04", "New workflows or enhancements.", "Net-new capability added when the business finds a more valuable way to use the system."],
              ["05", "A usage and feedback review.", "What people are actually doing, where they're getting stuck, and where the system is paying off."],
              ["06", "System optimization.", "Prompts, agents, integrations, and UX tuned against real usage — not assumptions."],
              ["07", "Support for the systems we build.", "Real coverage when something needs attention, from the team that knows what's behind the curtain."],
              ["08", "A team that knows the context.", "The people, the architecture, the trade-offs, and the decisions stay in the same hands."],
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

      {/* BUILT TO CONTINUE — Build → Managed rail */}
      <section className="bp-rail" data-screen-label="Built to continue">
        <div className="wrap">
          <div className="bp-rail-head">
            <div className="eyebrow">
              <span className="bar" />
              Built to continue
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              Built to <span className="muted">continue.</span>
            </h2>
          </div>

          <p className="bp-rail-statement">
            Managed AI works best when it follows a system we helped design
            and build. The team already understands the architecture, the
            workflow, the users, and the decisions behind it.{" "}
            <strong>
              That continuity lets us move faster, make better trade-offs, and
              keep improving without starting from zero.
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
            This isn&rsquo;t a handoff. It&rsquo;s an ongoing relationship with
            the work.
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
              What buyers ask before they sign on. Honest takes on the parts of
              an ongoing engagement that usually go unwritten.
            </p>
          </div>

          <div className="bp-faq-list">
            {[
              { open: true, q: "Is Managed AI required after a build?", a: "No. Some clients prefer a handoff after launch. Managed AI is for teams that want us to stay close, keep improving the system, and support new needs as they appear." },
              { open: false, q: "What does the monthly scope include?", a: "The monthly scope is defined with the client. It can include fixes, improvements, new workflows, optimization, support, and small feature additions." },
              { open: false, q: "Can we change priorities month to month?", a: "Yes. Priorities can shift as usage, feedback, and business needs change. The point is to keep the work focused without making every change a new project." },
              { open: false, q: "What happens if we want to stop?", a: "We make ownership, access, and handoff clear. The goal is to avoid lock-in and make sure the client understands what they own and how the system can continue." },
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
              Get started
            </div>
            <h2>Ready to keep improving what you&rsquo;ve built?</h2>
            <p>
              Let&rsquo;s talk about the system, the backlog, and what an
              ongoing improvement model could look like.
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
