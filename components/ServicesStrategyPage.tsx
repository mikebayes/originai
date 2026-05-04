import HeroNav from "./HeroNav";

/**
 * /services/strategy — AI Strategy & Training deep service page.
 *
 * Built from Claude Design spec. Reuses the .bp-page system from
 * services-deep.css, with .bp-page--strategy modifier carrying the
 * brass-tinted hero accent and the strategy-specific sections
 * (.bp-programs training cards, .bp-bridge-grid for the
 * implementation rail).
 */
export default function ServicesStrategyPage() {
  return (
    <div className="bp-page bp-page--strategy">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell">
        <HeroNav />

        <section className="wrap bp-hero" data-screen-label="Strategy hero">
          <div className="bp-hero-meta">
            <span>
              <a href="/services">← Services</a>
              <span className="crumb-sep">/</span>
              <span>AI Strategy &amp; Training</span>
            </span>
            <span>01 / 03 — Strategy</span>
          </div>

          <div className="bp-hero-eyebrow">
            <span className="dot" />
            <span>AI Strategy &amp; Training</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1">
            Get clear on where AI <span className="accent">fits.</span>
          </h1>

          <p className="bp-hero-sub">
            Leadership sessions, training, and advisory work that help your team
            understand AI, identify the right opportunities, and move toward real
            implementation.
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
              <div className="v">2–8 weeks, depending on scope</div>
            </div>
            <div className="bp-hero-foot-col">
              <div className="k">Format</div>
              <div className="v">On-site, remote, or hybrid</div>
            </div>
            <div className="bp-hero-foot-col">
              <div className="k">Outputs</div>
              <div className="v">Leadership alignment, ranked use cases, build brief</div>
            </div>
          </div>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* WHY THIS MATTERS */}
      <section className="bp-intro" data-screen-label="Why this matters">
        <div className="wrap">
          <div className="bp-intro-grid">
            <div>
              <div className="bp-intro-eyebrow">— Why this matters</div>
              <h2 className="bp-intro-h2">AI adoption starts with clarity.</h2>
              <span className="bp-intro-tag">signal &gt; noise</span>
            </div>
            <div className="bp-intro-body">
              <p>
                <strong>
                  Most companies are not short on AI interest. They are short on
                  clarity.
                </strong>
              </p>
              <p>
                Leaders are trying to separate signal from noise. Teams are
                experimenting in different directions. New tools arrive every
                week. The hard part isn&rsquo;t curiosity, it&rsquo;s deciding
                where AI belongs, what matters, what should be governed, and
                what should be built first.
              </p>
              <p>
                Before AI becomes useful, the organization needs shared
                language, better judgment, and a clear view of where AI can
                actually create value. That&rsquo;s where this work starts.
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

      {/* WHAT'S INCLUDED — 6 work areas */}
      <section className="bp-work" data-screen-label="What's included">
        <div className="wrap">
          <div className="bp-work-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                What&rsquo;s included
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Leadership, readiness,{" "}
                <span className="muted">and the first build brief.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              A focused mix of leadership alignment, team training, readiness
              work, governance guidance, and use case discovery.
            </p>
          </div>

          <div className="bp-work-grid">
            {[
              ["01", "Leadership alignment", "Sessions with executives and senior teams to create shared understanding, clarify priorities, and define where AI belongs in the business."],
              ["02", "AI readiness assessment", "A structured look at where the organization stands today: leadership readiness, team fluency, data maturity, process fit, and implementation opportunity."],
              ["03", "Team survey", "A lightweight survey to understand how employees are already using AI, where they see opportunity, what concerns they have, and where enablement is needed."],
              ["04", "Use case discovery", "Workshops and advisory sessions to identify candidate AI opportunities, rank them, and separate useful ideas from distractions."],
              ["05", "AI policy and governance", "Guidance for creating responsible AI usage guidelines, internal policies, risk considerations, and decision guardrails that fit the organization."],
              ["06", "Build brief and prioritization", "A clear view of what to build first, why it matters, who owns it, and what success should look like."],
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

      <div className="wrap">
        <div className="chapter-rule">
          <span className="pill-marker">
            <span className="dot" />
            Training programs
          </span>
        </div>
      </div>

      {/* TRAINING PROGRAMS — 4 cards with abstract SVG visuals */}
      <section className="bp-programs" data-screen-label="Training programs">
        <div className="wrap" style={{ paddingTop: 120 }}>
          <div className="bp-programs-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Training programs
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Focused programs{" "}
                <span className="muted">for leaders, teams, and builders.</span>
              </h2>
            </div>
            <p>
              Training is not the whole engagement, but it is often how adoption
              starts. We use focused programs to build fluency, align leaders,
              and prepare teams to put AI to work.
            </p>
          </div>

          <div className="bp-programs-row">
            <article className="bp-program-card">
              <div className="bp-program-vis">
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="spg1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#C9A86A" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#C9A86A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="150" fill="url(#spg1)" />
                  <path d="M20 50 L180 50" stroke="#C9A86A" strokeWidth="0.6" strokeOpacity="0.65" />
                  <path d="M20 75 L180 75" stroke="#C9A86A" strokeWidth="0.8" strokeOpacity="0.85" />
                  <path d="M20 100 L180 100" stroke="#C9A86A" strokeWidth="0.6" strokeOpacity="0.65" />
                  <circle cx="100" cy="75" r="3" fill="#D9BD86" />
                </svg>
              </div>
              <div className="bp-program-body">
                <span className="label">Executive Program</span>
                <h3>Strategic AI for Leaders</h3>
                <p>Clarity, direction, and leadership responsibility for AI adoption.</p>
              </div>
            </article>

            <article className="bp-program-card">
              <div className="bp-program-vis">
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <radialGradient id="spg2" cx="0.5" cy="0.4" r="0.6">
                      <stop offset="0%" stopColor="#C9A86A" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#C9A86A" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="200" height="150" fill="url(#spg2)" />
                  <g stroke="#C9A86A" strokeOpacity="0.55" strokeWidth="0.5" fill="none">
                    <rect x="40" y="55" width="30" height="30" />
                    <rect x="75" y="55" width="30" height="30" />
                    <rect x="110" y="55" width="30" height="30" />
                    <rect x="145" y="55" width="30" height="30" />
                    <rect x="40" y="90" width="30" height="30" />
                    <rect x="75" y="90" width="30" height="30" />
                    <rect x="110" y="90" width="30" height="30" />
                    <rect x="145" y="90" width="30" height="30" />
                  </g>
                  <rect x="75" y="55" width="30" height="30" fill="#C9A86A" fillOpacity="0.18" />
                </svg>
              </div>
              <div className="bp-program-body">
                <span className="label">Foundation Program</span>
                <h3>AI Foundations for Teams</h3>
                <p>A clear overview of the tools, terms, platforms, and concepts shaping modern AI.</p>
              </div>
            </article>

            <article className="bp-program-card">
              <div className="bp-program-vis">
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="spg3" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3B3320" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#C9A86A" stopOpacity="0.30" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="150" fill="url(#spg3)" />
                  <g stroke="#C9A86A" strokeOpacity="0.7" strokeWidth="0.6" fill="none">
                    <path d="M30 110 L75 75 L120 95 L170 50" />
                    <circle cx="30" cy="110" r="2.5" fill="#C9A86A" />
                    <circle cx="75" cy="75" r="2.5" fill="#C9A86A" />
                    <circle cx="120" cy="95" r="2.5" fill="#C9A86A" />
                    <circle cx="170" cy="50" r="3.5" fill="#D9BD86" />
                  </g>
                </svg>
              </div>
              <div className="bp-program-body">
                <span className="label">Team Program</span>
                <h3>Working Smarter with AI</h3>
                <p>Hands-on AI fluency for everyday work, decision-making, and productivity.</p>
              </div>
            </article>

            <article className="bp-program-card">
              <div className="bp-program-vis">
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="spg4" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C9A86A" stopOpacity="0.40" />
                      <stop offset="100%" stopColor="#3B3320" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="150" fill="url(#spg4)" />
                  <g stroke="#C9A86A" strokeOpacity="0.7" strokeWidth="0.6" fill="none">
                    <rect x="55" y="40" width="90" height="20" />
                    <rect x="55" y="65" width="90" height="20" />
                    <rect x="55" y="90" width="90" height="20" />
                    <line x1="55" y1="50" x2="145" y2="50" />
                    <line x1="55" y1="75" x2="145" y2="75" />
                    <line x1="55" y1="100" x2="145" y2="100" />
                  </g>
                  <rect x="55" y="65" width="90" height="20" fill="#C9A86A" fillOpacity="0.14" />
                </svg>
              </div>
              <div className="bp-program-body">
                <span className="label">Applied Program</span>
                <h3>Building with AI</h3>
                <p>Designing workflows, tools, and assistants for real business use.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* OUTPUTS — 8 rows */}
      <section className="bp-outputs" data-screen-label="What you leave with">
        <div className="wrap">
          <div className="bp-outputs-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Outputs
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                What you <span className="muted">leave with.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              The goal isn&rsquo;t inspiration. The goal is a clearer
              organization and a sharper path toward implementation.
            </p>
          </div>

          <div className="bp-outputs-list">
            {[
              ["01", "Shared leadership language.", "The senior team talking about AI in the same terms, with the same priorities and the same definition of done."],
              ["02", "A readiness view.", "An honest read on where the organization sits across leadership, fluency, data, and process — and what to address first."],
              ["03", "Team survey insights.", "What your people are actually doing with AI today, where they see opportunity, and where enablement is needed most."],
              ["04", "Ranked AI use cases.", "A shortlist of opportunities ordered by value, effort, and fit — with the distractions clearly set aside."],
              ["05", "Governance and policy direction.", "Working usage guidelines, decision guardrails, and a position the organization can stand behind."],
              ["06", "Training delivered to the right audience.", "Leaders, managers, operators, and teams equipped with the fluency they actually need for their role."],
              ["07", "A prioritized roadmap.", "The next six to twelve months of AI work, sequenced — not a wishlist."],
              ["08", "A build brief, ready to scope.", "The first meaningful implementation defined clearly enough to act on: problem, owner, success criteria, and what to build first."],
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

      {/* WHEN THIS MAKES SENSE — 6 signals */}
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
              This work is useful when the organization knows AI matters, but
              needs better clarity before investing heavily in tools, software,
              or internal change.
            </p>
          </div>

          <div className="bp-fit-grid">
            {[
              ["Signal 01", "Your leadership team has interest, but not alignment."],
              ["Signal 02", "Teams are already using AI unevenly."],
              ["Signal 03", "You need policy or governance before usage spreads further."],
              ["Signal 04", "You want training that connects to real business work."],
              ["Signal 05", "You have too many AI ideas and need to prioritize."],
              ["Signal 06", "You're considering a build, but need to define the right first opportunity."],
            ].map(([sig, h]) => (
              <div className="bp-fit-cell" key={sig}>
                <span className="signal">{sig}</span>
                <h3>{h}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FROM CLARITY TO IMPLEMENTATION — bridge grid */}
      <section className="bp-patterns" data-screen-label="From clarity to implementation">
        <div className="wrap">
          <div className="bp-patterns-head">
            <div className="eyebrow" style={{ color: "#fff" }}>
              <span
                className="bar"
                style={{ background: "#fff", opacity: 0.5 }}
              />
              From clarity to implementation
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              Where this{" "}
              <span style={{ color: "rgba(255,255,255,0.55)" }}>
                leads next.
              </span>
            </h2>
            <p className="bp-bridge-lede" style={{ marginTop: 24 }}>
              Some clients use this work to educate leaders and teams. Others
              use it to define the first system worth building. Often, the
              value is in both: the organization gets smarter about AI while
              the best opportunities become clear enough to act on.
            </p>
          </div>

          <div className="bp-bridge-grid">
            {[
              ["01", "A leadership team aligned on direction."],
              ["02", "A workforce more confident using AI day-to-day."],
              ["03", "A shortlist of high-value use cases."],
              ["04", "A first build ready to scope."],
              ["05", "A clearer path into AI Software & Systems."],
              ["06", "A foundation for ongoing Managed AI."],
            ].map(([num, p]) => (
              <div className="bp-bridge-item" key={num}>
                <div className="pnum">{num}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
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
              What buyers ask before they engage. Honest takes on the parts of
              a strategy and training engagement that usually go unwritten.
            </p>
          </div>

          <div className="bp-faq-list">
            {[
              { open: true, q: "Is this only for executives?", a: "No. We work with leaders, managers, operators, and teams. The format depends on who needs clarity, who needs training, and who will be responsible for using or implementing AI." },
              { open: false, q: "Do we need to commit to a build project?", a: "No. Strategy and training can stand on their own. But when the right opportunity emerges, we can help turn it into a scoped build." },
              { open: false, q: "Can this be delivered on-site?", a: "Yes. Sessions can be delivered on-site, remote, or in a hybrid format depending on the audience and the engagement." },
              { open: false, q: "Do you help with AI policy and governance?", a: "Yes. We can help create usage guidelines, policy direction, and decision guardrails that fit the organization — pragmatic, not theoretical." },
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
            <h2>Ready to get clear on AI?</h2>
            <p>
              Let&rsquo;s align your leadership team, identify the right
              opportunities, and define what should happen next.
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
