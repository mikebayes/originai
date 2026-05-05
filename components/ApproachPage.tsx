import HeroNav from "./HeroNav";

/**
 * /approach — Our Approach page.
 *
 * Built from the Claude Design spec at uploads/Approach _standalone_.html.
 * Reuses the .bp-page system from services-deep.css with a new
 * .bp-page--approach modifier (brand-neutral teal, no service signal).
 *
 * Sections:
 *   1. Hero — eyebrow meta line, H1 with italic accent, sub, CTAs,
 *      3-col footer rail (Belief / Aim / Outcome).
 *   2. Point of view — bp-intro grid with statement + body.
 *   3. Framework — 6-node circular SVG diagram + capability list +
 *      fluency aside.
 *   4. Principles — 6-cell grid of principles.
 *   5. Contrast — believe / avoid two-column.
 *   6. Service bridge — 4-stop progression rail (Clarity → Capability
 *      → Systems → Improvement) connecting back to the three services.
 *   7. Final CTA.
 *
 * Nav is the site-wide HeroNav (not the spec's nav) and the footer
 * comes from the shared Footer component (rendered by the page route)
 * to keep the chrome consistent with the rest of the site.
 */
export default function ApproachPage() {
  return (
    <div className="bp-page bp-page--approach">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell">
        <HeroNav />

        <section className="wrap bp-hero" data-screen-label="Approach hero">
          <div className="bp-hero-meta">
            <span>
              <a href="/services">← Services</a>
              <span className="crumb-sep">/</span>
              <span>Approach</span>
            </span>
            <span>How we think about AI adoption</span>
          </div>

          <div className="bp-hero-eyebrow">
            <span className="dot" />
            <span>Our Approach</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1">
            AI adoption starts with{" "}
            <span className="accent">judgment, not tools.</span>
          </h1>

          <p className="bp-hero-sub">
            We help organizations align leaders, build fluency, identify the
            right opportunities, and turn AI into systems people actually use.
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

      {/* POINT OF VIEW */}
      <section className="bp-intro" data-screen-label="Point of view">
        <div className="wrap">
          <div className="bp-intro-grid">
            <div>
              <div className="bp-intro-eyebrow">— Point of view</div>
              <h2 className="bp-intro-h2">
                Most AI efforts do not fail because the model is wrong.
              </h2>
              <span className="bp-intro-tag">Where AI work breaks down</span>
            </div>
            <div className="bp-intro-body">
              <p>
                <strong>
                  They fail because the organization is unclear on where AI
                  belongs, what problem it should solve, who owns the work,
                  and how people will actually use it.
                </strong>
              </p>
              <p>
                We start there, with the decisions, the people, and the
                workflows, and then move toward systems that fit the business.
                The tools matter, but they are downstream of clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="chapter-rule">
          <span className="pill-marker">
            <span className="dot" />
            The model — six reinforcing capabilities
          </span>
        </div>
      </div>

      {/* FRAMEWORK */}
      <section className="bp-frame" data-screen-label="The framework">
        <div className="wrap">
          <div className="bp-frame-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                The framework
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                What makes an organization{" "}
                <span className="muted">AI-capable.</span>
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
                  <radialGradient id="frameHalo" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#5DA89C" stopOpacity="0.22" />
                    <stop offset="60%" stopColor="#5DA89C" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#5DA89C" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="frameRing" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#5DA89C" stopOpacity="0.55" />
                    <stop offset="50%" stopColor="#3FDDC9" stopOpacity="0.40" />
                    <stop offset="100%" stopColor="#5DA89C" stopOpacity="0.55" />
                  </linearGradient>
                </defs>

                <circle cx="300" cy="300" r="290" fill="url(#frameHalo)" />
                <circle cx="300" cy="300" r="270" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2 6" />

                <g stroke="rgba(93,168,156,0.18)" strokeWidth="0.5" fill="none">
                  <line x1="300" y1="100" x2="473" y2="200" />
                  <line x1="473" y1="200" x2="473" y2="400" />
                  <line x1="473" y1="400" x2="300" y2="500" />
                  <line x1="300" y1="500" x2="127" y2="400" />
                  <line x1="127" y1="400" x2="127" y2="200" />
                  <line x1="127" y1="200" x2="300" y2="100" />
                  <line x1="300" y1="100" x2="473" y2="400" stroke="rgba(93,168,156,0.13)" />
                  <line x1="300" y1="100" x2="127" y2="400" stroke="rgba(93,168,156,0.13)" />
                  <line x1="473" y1="200" x2="300" y2="500" stroke="rgba(93,168,156,0.13)" />
                  <line x1="473" y1="200" x2="127" y2="400" stroke="rgba(93,168,156,0.13)" />
                  <line x1="127" y1="200" x2="300" y2="500" stroke="rgba(93,168,156,0.13)" />
                  <line x1="127" y1="200" x2="473" y2="400" stroke="rgba(93,168,156,0.13)" />
                  <line x1="300" y1="300" x2="300" y2="100" stroke="rgba(93,168,156,0.10)" />
                  <line x1="300" y1="300" x2="473" y2="200" stroke="rgba(93,168,156,0.10)" />
                  <line x1="300" y1="300" x2="473" y2="400" stroke="rgba(93,168,156,0.10)" />
                  <line x1="300" y1="300" x2="300" y2="500" stroke="rgba(93,168,156,0.10)" />
                  <line x1="300" y1="300" x2="127" y2="400" stroke="rgba(93,168,156,0.10)" />
                  <line x1="300" y1="300" x2="127" y2="200" stroke="rgba(93,168,156,0.10)" />
                </g>

                <circle cx="300" cy="300" r="235" fill="none" stroke="url(#frameRing)" strokeWidth="1" />

                <g>
                  <circle cx="300" cy="300" r="84" fill="#04140e" stroke="rgba(93,168,156,0.45)" strokeWidth="1" />
                  <circle cx="300" cy="300" r="84" fill="none" stroke="rgba(93,168,156,0.12)" strokeWidth="14" />
                  <text x="300" y="288" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2.6" fill="#5DA89C">OUTCOME</text>
                  <text x="300" y="312" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontWeight="500" fontSize="18" fill="#fff">AI-capable</text>
                  <text x="300" y="332" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontWeight="500" fontSize="18" fill="#fff">organization</text>
                </g>

                {/* 6 capability nodes around the ring */}
                {[
                  { x: 195, y: 74,  num: "01", label: "Leadership Direction",   dotX: 220, dotY: 102 },
                  { x: 368, y: 174, num: "02", label: "Executive Ownership",    dotX: 393, dotY: 202 },
                  { x: 368, y: 374, num: "03", label: "Working Systems",        dotX: 393, dotY: 402 },
                  { x: 195, y: 474, num: "04", label: "Buildable Use Cases",    dotX: 220, dotY: 502 },
                  { x: 22,  y: 374, num: "05", label: "Policy & Governance",    dotX: 47,  dotY: 402 },
                  { x: 22,  y: 174, num: "06", label: "AI Fluency",             dotX: 47,  dotY: 202 },
                ].map((n) => (
                  <g key={n.num}>
                    <rect x={n.x} y={n.y} width="210" height="56" rx="28" fill="#04140e" stroke="rgba(93,168,156,0.55)" strokeWidth="1" />
                    <circle cx={n.dotX} cy={n.dotY} r="3.5" fill="#5DA89C" />
                    <text x={n.dotX + 14} y={n.dotY - 4} fontFamily="JetBrains Mono, monospace" fontSize="9.5" letterSpacing="2.4" fill="#5DA89C">{n.num}</text>
                    <text x={n.dotX + 14} y={n.dotY + 14} fontFamily="Inter Tight, sans-serif" fontWeight="500" fontSize="14" fill="#fff">{n.label}</text>
                  </g>
                ))}
              </svg>
            </div>

            <ol className="bp-frame-list">
              {[
                ["01", "Leadership Direction", "Leaders decide where AI belongs and what outcomes matter."],
                ["02", "Executive Ownership", "Senior leaders stay close enough to remove barriers and keep momentum."],
                ["03", "Working Systems", "AI creates value when it's embedded into workflows, software, and day-to-day operations."],
                ["04", "Buildable Use Cases", "Ideas are filtered into focused opportunities that are worth acting on."],
                ["05", "Policy & Governance", "Clear guardrails help people use AI safely without stalling progress."],
                ["06", "AI Fluency", "Teams understand the concepts, risks, and possibilities, not just one tool."],
              ].map(([num, title, body]) => (
                <li className="bp-frame-item" key={num}>
                  <span className="num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="bp-frame-aside">
            <div className="bp-frame-aside-mark">— Important note on fluency</div>
            <p>
              We build{" "}
              <strong>fluency, not dependency on one tool.</strong> The
              landscape will keep changing, so organizations need the judgment
              to evaluate and adopt the right tools as they evolve, instead of
              anchoring themselves to a single vendor or platform.
            </p>
          </aside>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bp-principles" data-screen-label="Principles">
        <div className="wrap">
          <div className="bp-principles-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Principles
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Principles that{" "}
                <span className="muted">shape the work.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Beliefs that show up in every engagement, across strategy, build,
              and managed work.
            </p>
          </div>

          <div className="bp-principles-grid">
            {[
              ["AI serves business outcomes.", "We don't start with tools. We start with the work that needs to improve."],
              ["People decide. AI executes.", "AI is powerful, but judgment stays with people."],
              ["Build fluency, not tool dependency.", "The advantage isn't locking into one platform, it's the capability to adapt as tools change."],
              ["Governance should enable progress.", "Good guardrails help organizations move with confidence."],
              ["Build only what should exist.", "Not every idea deserves software."],
              ["Systems matter more than demos.", "The goal is adoption, not novelty."],
            ].map(([h, p]) => (
              <article className="bp-principle" key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRAST — believe / avoid */}
      <section className="bp-contrast" data-screen-label="Believe / Avoid">
        <div className="wrap">
          <div className="bp-contrast-head">
            <div className="eyebrow">
              <span className="bar" />
              Position
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              What we believe.{" "}
              <span className="muted">What we avoid.</span>
            </h2>
          </div>

          <div className="bp-contrast-grid">
            <div className="bp-contrast-col bp-contrast-col--believe">
              <div className="bp-contrast-label">
                <span className="dot" />
                <span>What we believe</span>
              </div>
              <ul>
                <li>AI adoption starts with leadership clarity.</li>
                <li>Fluency matters more than tool chasing.</li>
                <li>The best use cases are tied to real work.</li>
                <li>Systems should fit the business, not the other way around.</li>
                <li>AI should improve outcomes, not just activity.</li>
              </ul>
            </div>
            <div className="bp-contrast-col bp-contrast-col--avoid">
              <div className="bp-contrast-label bp-contrast-label--neg">
                <span className="x">×</span>
                <span>What we avoid</span>
              </div>
              <ul>
                <li>Random experiments with no owner.</li>
                <li>Training that never connects to the work.</li>
                <li>Software that adds complexity without changing the outcome.</li>
                <li>Governance that creates fear instead of clarity.</li>
                <li>Buying tools before the problem is clear.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE BRIDGE */}
      <section className="bp-bridge" data-screen-label="From philosophy to practice">
        <div className="wrap">
          <div className="bp-bridge-head">
            <div className="eyebrow">
              <span className="bar" />
              From philosophy to practice
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              How our approach{" "}
              <span className="muted">turns into work.</span>
            </h2>
            <p className="section-lede">
              Our services are designed to move organizations from clarity, to
              capability, to systems, to ongoing improvement.
            </p>
          </div>

          <div className="bp-progression" aria-label="Service progression: Clarity, Capability, Systems, Improvement">
            <div className="bp-prog-track" aria-hidden="true">
              <span className="line" />
            </div>
            <div className="bp-prog-stops">
              {[
                { phase: "Phase 01", title: "Clarity",     desc: "Where AI belongs, what to act on first, who owns what.", svc: "Strategy & Training", href: "/services/strategy" },
                { phase: "Phase 02", title: "Capability",  desc: "Leaders and teams build the fluency to choose, govern, and use AI.", svc: "Strategy & Training", href: "/services/strategy" },
                { phase: "Phase 03", title: "Systems",     desc: "Custom AI software, agents, and workflows that fit the business.", svc: "AI Software & Systems", href: "/services/build" },
                { phase: "Phase 04", title: "Improvement", desc: "Ongoing development, support, and optimization of what's live.", svc: "Managed AI", href: "/services/managed" },
              ].map((s) => (
                <div className="bp-prog-stop" key={s.phase}>
                  <div className="bp-prog-marker"><span /></div>
                  <span className="phase">{s.phase}</span>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <a className="bp-prog-svc" href={s.href}>{s.svc} →</a>
                </div>
              ))}
            </div>
          </div>

          <p className="bp-bridge-note">
            One model, three services. Each engagement enters where it makes
            sense, and connects back to the rest.
          </p>
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
            <h2>Ready to decide where AI fits?</h2>
            <p>
              Let&rsquo;s talk through your goals, your workflows, and the
              first opportunity worth acting on.
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
