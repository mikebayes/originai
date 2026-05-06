import HeroNav from "./HeroNav";

/**
 * /services/strategy — AI Strategy & Training deep service page.
 *
 * Revised 2026-05-05 per Mike's direction to reposition this page as
 * Origin AI's flexible consulting and advisory entry point — not a
 * rigid set of strategy packages or a productized course catalogue.
 *
 * Hero unchanged. "AI adoption starts with clarity" tightened to two
 * paragraphs. The previous six-work-area "What's included" section,
 * the four-card SVG-illustrated training programs, the eight-row
 * Outputs list, the six-signal "When this makes sense", and the six-
 * item "Where this leads next" grid have all been reduced or replaced
 * with simpler, hedged sections that don't imply every client gets
 * every item.
 *
 * New structure:
 *   1. Hero (unchanged)
 *   2. AI adoption starts with clarity (2 paragraphs)
 *   3. What this work can include — 4 broad categories
 *   4. Training can be part of the engagement — short list, no cards
 *   5. What you leave with — 4 broader outcomes
 *   6. This is the right call when — 4 signals
 *   7. Where this can lead — single concise statement, no list
 *   8. FAQ (3 questions)
 *   9. CTA
 */
export default function ServicesStrategyPage() {
  return (
    <div className="bp-page bp-page--strategy">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell">
        <HeroNav />

        {/* HERO — unchanged per Mike's direction */}
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
              <div className="k">Shape</div>
              <div className="v">Tailored to the client&rsquo;s starting point</div>
            </div>
          </div>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* WHY THIS MATTERS — tightened from 3 paragraphs to 2 */}
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
                Leaders are trying to separate signal from noise while teams
                experiment in different directions. Before AI becomes useful,
                the organization needs shared language, better judgment, and a
                clear view of where AI can actually create value. That is where
                this work starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="chapter-rule">
          <span className="pill-marker">
            <span className="dot" />
            What this work can include
          </span>
        </div>
      </div>

      {/* WHAT THIS WORK CAN INCLUDE — replaces six-work-area grid with
          four broader categories. Hedged language so this doesn't read
          as a fixed package. */}
      <section className="bp-work" data-screen-label="What this work can include">
        <div className="wrap">
          <div className="bp-work-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                What it can include
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Shaped around the{" "}
                <span className="muted">client&rsquo;s starting point.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Engagements are flexible. Depending on what the organization
              needs, the work may include any of the following.
            </p>
          </div>

          <div className="bp-work-grid">
            {[
              [
                "01",
                "Leadership alignment",
                "Working sessions with executives and senior teams to create shared direction, clarify priorities, and decide where AI belongs in the business.",
              ],
              [
                "02",
                "Readiness and governance",
                "An honest read on where the organization stands across leadership, fluency, data, and process, plus pragmatic guidance on usage policy and decision guardrails where it is needed.",
              ],
              [
                "03",
                "Use-case discovery",
                "Workshops and advisory sessions to surface candidate AI opportunities, separate the useful ideas from the distractions, and rank what is actually worth doing.",
              ],
              [
                "04",
                "Build planning",
                "A clear view of the first opportunity worth acting on: problem, owner, success criteria, and what to build first.",
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

      {/* TRAINING — simplified from 4 illustrated cards to a brief
          mention + a clean program list. Reads as one possible
          component of the engagement, not a course catalogue. */}
      <section className="bp-training" data-screen-label="Training can be part of the engagement">
        <div className="wrap">
          <div className="bp-training-head">
            <div className="eyebrow">
              <span className="bar" />
              Training
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              Training can be part{" "}
              <span className="muted">of the engagement.</span>
            </h2>
            <p className="bp-training-body">
              When teams need fluency to put AI to work, training can be folded
              into the engagement. We use focused programs depending on the
              audience and what the work calls for.
            </p>
          </div>

          <ul className="bp-training-list" aria-label="Training programs">
            {[
              [
                "Strategic AI for Leaders",
                "Direction, judgment, and leadership responsibility for AI adoption.",
              ],
              [
                "AI Foundations for Teams",
                "A clear overview of the tools, terms, platforms, and concepts shaping modern AI.",
              ],
              [
                "Working Smarter with AI",
                "Hands-on fluency for everyday work, decision-making, and productivity.",
              ],
              [
                "Building with AI",
                "Designing workflows, tools, and assistants for real business use.",
              ],
            ].map(([name, desc]) => (
              <li key={name}>
                <span className="name">{name}</span>
                <span className="desc">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT YOU LEAVE WITH — reduced from 8 rows to 4 broader
          outcomes per Mike's spec. */}
      <section className="bp-outputs" data-screen-label="What you leave with">
        <div className="wrap">
          <div className="bp-outputs-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Outcomes
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                What you <span className="muted">leave with.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              The goal is not inspiration. The goal is a clearer organization
              and a sharper path toward implementation.
            </p>
          </div>

          <div className="bp-outputs-list">
            {[
              [
                "01",
                "Shared direction.",
                "The senior team aligned on where AI fits, what matters, and what comes first.",
              ],
              [
                "02",
                "A clearer readiness view.",
                "An honest read on where the organization is today across leadership, fluency, data, and process.",
              ],
              [
                "03",
                "Prioritized opportunities.",
                "A shortlist of AI opportunities ordered by value, effort, and fit, with the distractions clearly set aside.",
              ],
              [
                "04",
                "A defined next step.",
                "The first meaningful piece of work defined clearly enough to act on, whether internally or with us.",
              ],
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

      {/* WHEN THIS FITS — reduced from 6 to 4. Dropped Signal 0X
          labels (read as productized AI startup energy). */}
      <section className="bp-fit" data-screen-label="When this fits">
        <div className="wrap">
          <div className="bp-fit-head">
            <div className="eyebrow">
              <span className="bar" />
              When this fits
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              This is the right call{" "}
              <span className="muted">when&hellip;</span>
            </h2>
            <p className="section-lede">
              The work helps when the organization knows AI matters but needs
              clarity before investing in tools, software, or internal change.
            </p>
          </div>

          <div className="bp-fit-grid">
            {[
              [
                "Your leadership team has interest in AI but not alignment.",
                "Bring leaders to a shared view before scaling AI investment.",
              ],
              [
                "Teams are using AI unevenly and you would like a clearer position.",
                "Shape a position your people can actually work from.",
              ],
              [
                "You have more AI ideas than capacity, and need to prioritize.",
                "Filter the list to what is actually worth doing first.",
              ],
              [
                "You are considering a build but want to scope the right first opportunity.",
                "Define the first piece of work clearly enough to act on.",
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

      {/* WHERE THIS CAN LEAD — single concise statement (was a 6-cell
          grid that overlapped with What you leave with). */}
      <section className="bp-bridge" data-screen-label="Where this can lead">
        <div className="wrap">
          <div className="bp-bridge-head">
            <div className="eyebrow">
              <span className="bar" />
              Where this leads
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              Where this <span className="muted">can lead.</span>
            </h2>
          </div>

          <p className="bp-rail-statement">
            Some clients use this work to educate leaders and teams. Others use
            it to define the first system worth building. Often the value is
            both, the organization gets smarter about AI while the best
            opportunities become clear enough to act on.{" "}
            <strong>
              From here, the work either continues internally, moves into AI
              Software &amp; Systems for build, or into Managed AI for ongoing
              improvement.
            </strong>
          </p>
        </div>
      </section>

      {/* FAQ — trimmed from 4 to 3, tighter answers */}
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
              Practical questions clients ask before they engage.
            </p>
          </div>

          <div className="bp-faq-list">
            {[
              {
                open: true,
                q: "Is this only for executives?",
                a: "No. The audience depends on who needs clarity and who will own the work. We engage leaders, managers, operators, and teams as the engagement requires.",
              },
              {
                open: false,
                q: "Do we need to commit to a build project?",
                a: "No. Strategy and advisory work can stand on their own. When the right opportunity emerges, we can help define a scoped build, but we do not push toward one.",
              },
              {
                open: false,
                q: "Do you help with AI policy and governance?",
                a: "Yes. We can help shape usage guidelines, policy direction, and decision guardrails that fit the organization. Pragmatic, not theoretical.",
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
            <h2>Ready to get clear on AI?</h2>
            <p>
              Let&rsquo;s talk about your leadership, your teams, and where AI
              actually fits.
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
