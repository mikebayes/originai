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
            An AI roadmap. Get clear on{" "}
            <span className="accent">where AI fits.</span>
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

      {/* LED BY MIKE BAYES — compact credibility callout. Sits between
          "Why this matters" and "What this work can include" so the
          page feels led by a senior operator without becoming a bio
          page. Image left / body right on desktop, stacked on mobile. */}
      <section className="bp-leader" data-screen-label="Led by Mike Bayes">
        <div className="wrap">
          <div className="bp-leader-card">
            <div className="bp-leader-photo">
              <img src="/images/MB.avif" alt="Mike Bayes" loading="lazy" />
            </div>
            <div className="bp-leader-body">
              {/* Header block: eyebrow + h3. Pulled into its own div so
                  on mobile we can pair it with the photo as a byline
                  (photo + title side by side at the top of the card). */}
              <div className="bp-leader-titles">
                <div className="bp-leader-eyebrow">
                  <span className="bar" />
                  Senior operator
                </div>
                <h3 className="bp-leader-name">Led by Mike Bayes</h3>
              </div>
              <div className="bp-leader-text">
                <p>
                  Strategy and training engagements are led by Mike Bayes,
                  President and Lead AI Enablement Coach at Origin AI. Mike
                  brings 25+ years of senior technology and business
                  leadership experience across strategy, operations,
                  cybersecurity, and digital transformation.
                </p>
                <p>
                  His role is to help leadership teams separate AI noise from
                  useful opportunity, align around what matters, and define
                  the next step with enough clarity to act.
                </p>
                <ul className="bp-leader-tags" aria-label="Areas of focus">
                  <li>Technology strategy</li>
                  <li>Executive alignment</li>
                  <li>AI adoption</li>
                  <li>Cybersecurity</li>
                </ul>
              </div>
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
              Engagements are flexible. Depending on where the organization is
              starting from, the work may focus on leadership alignment,
              readiness, training, governance, or turning AI opportunities
              into scoped build projects.
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
                "A clear read on where the organization stands across leadership, team fluency, data, process, risk, and usage policy, with guardrails where they are needed.",
              ],
              [
                "03",
                "Use-case discovery and project shaping",
                "Workshops and advisory sessions to surface candidate AI opportunities, separate useful ideas from distractions, and turn the strongest ones into scoped projects.",
              ],
              [
                "04",
                "Training and enablement",
                "Focused sessions that build AI fluency across leaders, managers, and teams so people understand the tools, the risks, and where AI can improve real work.",
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
              Training builds{" "}
              <span className="muted">the capability to act.</span>
            </h2>
            <p className="bp-training-body">
              AI strategy only works if people understand enough to use it. We
              use focused training programs to build fluency, create shared
              language, and help teams apply AI to real work, not just
              experiment with tools.
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
              When this work{" "}
              <span className="muted">makes sense.</span>
            </h2>
            <p className="section-lede">
              This work is for organizations that know AI matters, but need
              clearer direction before investing heavily in tools, software,
              or internal change.
            </p>
          </div>

          <div className="bp-fit-grid">
            {[
              [
                "You need an AI strategy your leadership team can align around.",
                "Clarify where AI fits, what matters most, and what decisions leaders need to make before the organization moves further.",
              ],
              [
                "Your teams are using AI, but not consistently or confidently.",
                "Create shared language, usage expectations, and training so people understand how to use AI responsibly in their work.",
              ],
              [
                "You have AI ideas, but no clear way to prioritize them.",
                "Separate useful opportunities from distractions and identify which ideas are worth acting on first.",
              ],
              [
                "You see build potential, but need to define the first project.",
                "Turn the strongest opportunity into a clearer project shape, including the problem, owner, outcome, and first build path.",
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
                a: "No. We work with leaders, managers, operators, and teams depending on where clarity is needed. Some engagements start with the senior team. Others include broader training or working sessions with the people closest to the work.",
              },
              {
                open: false,
                q: "What happens in a strategy engagement?",
                a: "We align leaders, assess readiness, surface use cases, discuss governance, and help define what should happen next. The shape depends on the client, but the goal is always the same: clearer decisions and a sharper path toward implementation.",
              },
              {
                open: false,
                q: "Do you provide AI training?",
                a: "Yes. Training can be included when teams need shared language, better fluency, or hands-on support using AI in their work. Programs can be tailored for leaders, general teams, or more applied workflow-building sessions.",
              },
              {
                open: false,
                q: "Do you help with AI policy and governance?",
                a: "Yes. We help shape usage guidelines, policy direction, and decision guardrails that fit the organization. The goal is to create enough structure for people to use AI responsibly without slowing progress.",
              },
              {
                open: false,
                q: "Will this produce a roadmap or use-case list?",
                a: "Yes, when that is part of the engagement. We can help identify, rank, and filter AI opportunities based on value, effort, fit, and readiness. The outcome should be a clearer view of what is worth doing first, not a long list of ideas.",
              },
              {
                open: false,
                q: "Do we need to commit to a build project?",
                a: "No. Strategy and training work can stand on their own. If the right opportunity emerges, we can help define a scoped build, but the purpose of this engagement is clarity first, not forcing a project.",
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
