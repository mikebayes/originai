import HeroNav from "./HeroNav";

/**
 * /services/build — full page from Claude Design spec.
 *
 * Layout: forest-green hero shell (nav + hero), fade-down transition,
 * intro/manifesto, the work (8 categories grid), selected work (3
 * placeholder cards), when this fits (6 signals), outputs (numbered
 * list), patterns (forest-green chapter), FAQ accordion, final CTA.
 *
 * All styling is in styles/services-deep.css under .bp-page selectors.
 */
export default function ServicesBuildPage() {
  return (
    <div className="bp-page">
      <div className="bp-grain" aria-hidden="true" />

      {/* HERO SHELL (full-bleed forest gradient: nav + hero) */}
      <div className="bp-hero-shell">
        <HeroNav />

        <section className="wrap bp-hero" data-screen-label="Build hero">
          <div className="bp-hero-meta">
            <span>
              <a href="/services">← Services</a>
              <span className="crumb-sep">/</span>
              <span>AI Software &amp; Systems</span>
            </span>
            <span>02 / 03 — Build</span>
          </div>

          <div className="bp-hero-eyebrow">
            <span className="dot" />
            <span>AI Software &amp; Systems</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1">
            Consider it <span className="accent">shipped.</span>
          </h1>

          <p className="bp-hero-sub">
            We design and build custom AI software, websites, and internal
            systems, taken from idea to production quickly and cleanly.
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
              <div className="v">4–16 weeks, depending on scope</div>
            </div>
            <div className="bp-hero-foot-col">
              <div className="k">Team</div>
              <div className="v">Senior, in-house, Winnipeg</div>
            </div>
            <div className="bp-hero-foot-col">
              <div className="k">Outputs</div>
              <div className="v">Production software, owned by you</div>
            </div>
          </div>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* INTRO — Custom software economics */}
      <section className="bp-intro" data-screen-label="Intro — economics of custom">
        <div className="wrap">
          <div className="bp-intro-grid">
            <div>
              <div className="bp-intro-eyebrow">— The shift</div>
              <h2 className="bp-intro-h2">
                Custom software used to take months. Now it doesn&rsquo;t have
                to.
              </h2>
              <span className="bp-intro-tag">six months → six weeks</span>
            </div>
            <div className="bp-intro-body">
              <p>
                For most of the last twenty years, building custom software has
                been the privilege of teams with deep budgets and patience.
                Everyone else got SaaS. Some of it fit. Most of it almost fit.
                So companies bent around the tool, exported to spreadsheets,
                paid for half-features they didn&rsquo;t use, and shipped the
                gap as more process.
              </p>
              <p>
                <strong>AI-assisted development changes the math.</strong> The
                same systems that used to take six months now take six weeks.
                Smaller teams can launch serious software. Mid-market companies
                can have tools that fit how they actually work, not tools they
                had to twist into shape. The economics of custom finally favor
                the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter rule */}
      <div className="wrap">
        <div className="chapter-rule">
          <span className="pill-marker">
            <span className="dot" />
            The work — eight directions
          </span>
        </div>
      </div>

      {/* THE WORK — 8 categories */}
      <section className="bp-work" data-screen-label="The work — 8 categories">
        <div className="wrap">
          <div className="bp-work-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                The work
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Eight directions, <span className="muted">all custom.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Most of what we build is software shaped to a specific business
              problem. The categories below are the directions that work usually
              takes.
            </p>
          </div>

          <div className="bp-work-grid">
            {[
              ["01", "AI-enabled websites", "Customer-facing experiences with AI woven into the surface. Search, copilots, dynamic content, conversation. Not a chatbot bolted on at the corner."],
              ["02", "Custom business applications", "End-to-end software built around your operation. Not configurations of someone else's app, not low-code patchwork. Real software shaped to the actual work."],
              ["03", "Internal workflow systems", "The unsexy backbone of most companies. Order intake, scheduling, approvals, dispatch. The daily friction nobody markets. We make it faster."],
              ["04", "SaaS extensions and replacements", "Some tools you can build on top of. Some you should retire. We help you decide which, then deliver whatever the answer is."],
              ["05", "AI assistants, copilots, and agents", "Sitting next to people doing real work, taking the cognitive overhead off the routine parts. Where AI actually moves the needle."],
              ["06", "Data and integration layers", "Connecting the systems you've already paid for so they actually talk. Where most AI projects quietly die without this layer in place."],
              ["07", "Customer and employee portals", "Login-gated experiences for clients, partners, or staff. Tailored to their workflow, not the same dashboard everyone else has."],
              ["08", "Operational dashboards and decision tools", "When the business runs on judgment but the data lives in seven places. We pull it together, with AI doing the boring synthesis."],
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

      {/* EXAMPLE BUILDS */}
      <section className="bp-selected" data-screen-label="Example builds">
        <div className="wrap">
          <div className="bp-selected-head">
            <span className="label">— Example builds</span>
            <span className="nav-arrows">
              <span>←</span>
              <span>→</span>
            </span>
          </div>
          <div className="bp-selected-grid">
            {/* First card — Pulse internal platform with screenshot. The
                image is positioned to bleed off the bottom-right corner
                so the dashboard reads as a tilted screenshot extending
                past the card edge. Subtle teal radial glow at top-center
                adds atmospheric depth without becoming a heavy effect. */}
            <article className="bp-selected-card has-image">
              <div className="top">
                <span>
                  <span className="dot" /> Live
                </span>
                <span>2025</span>
              </div>
              <a
                className="bp-selected-thumb"
                href="/images/pulse-no-tilt.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the dashboard screenshot in a new tab"
              >
                <span className="bp-selected-glow" aria-hidden="true" />
                <img
                  src="/images/pulse-no-tilt.png"
                  alt="Client management platform — dashboard and left navigation."
                />
                {/* Subtle bottom-fade overlay so the screenshot blends into
                    the card body rather than reading as a hard rectangle
                    pasted onto the card. */}
                <span className="bp-selected-thumb-fade" aria-hidden="true" />
                <span className="bp-selected-thumb-cue" aria-hidden="true">
                  View full image →
                </span>
              </a>
              <div className="bp-selected-text">
                <h4>Client management platform</h4>
                <p className="bp-selected-lede">
                  Replaced four SaaS tools with one custom internal system.
                </p>
                <div className="meta-row" style={{ marginTop: 14 }}>
                  <span>Custom software</span>
                  <span>·</span>
                  <span>8 weeks</span>
                </div>
              </div>
            </article>

            {/* Placeholders — left as-is until we apply the same image
                treatment after Mike approves the first tile. */}
            {[
              { tinted: true, year: "2025", title: "Customer portal", meta: ["Professional services", "·", "8 weeks"] },
              { tinted: false, year: "2024", title: "Internal scheduling tool", meta: ["Logistics", "·", "6 weeks"] },
            ].map((c, i) => (
              <article
                className={`bp-selected-card${c.tinted ? " tinted" : ""}`}
                key={i}
              >
                <div className="top">
                  <span>
                    <span className="dot" /> Live
                  </span>
                  <span>{c.year}</span>
                </div>
                <div>
                  <h4>{c.title}</h4>
                  <div className="meta-row" style={{ marginTop: 14 }}>
                    {c.meta.map((m, j) => (
                      <span key={j}>{m}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN THIS FITS */}
      <section className="bp-fit" data-screen-label="When this fits">
        <div className="wrap">
          <div className="bp-fit-head">
            <div className="eyebrow">
              <span className="bar" />
              When this fits
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              Custom is the right call <span className="muted">when&hellip;</span>
            </h2>
            <p className="section-lede">
              Six signals we hear from buyers who end up working with us. If a
              few of these sound familiar, we&rsquo;re probably a fit.
            </p>
          </div>

          <div className="bp-fit-grid">
            {[
              ["Signal 01", "Your team has bent around the tool.", "Your process is shaped by what your software allows, not the other way around. People work around it, not with it."],
              ["Signal 02", "You're stitching systems to do one job.", "Three SaaS products, two spreadsheets, and a Slack channel for what should be one workflow. Every handoff is a place things go wrong."],
              ["Signal 03", "Off-the-shelf creates more friction than it removes.", "You bought a category leader. You only use 30% of it. The 30% you don't use is in the way of the 30% you do."],
              ["Signal 04", "You want AI inside the work, not next to it.", "Not a chatbot in the sidebar. AI built into the place where the actual decision happens."],
              ["Signal 05", "You need speed traditional dev shops can't deliver.", "What used to be a nine-month project is now a nine-week project. The market shifted. Some teams haven't caught up."],
              ["Signal 06", "You want to own more of your workflow, data, or IP.", "When the system you run on is something you bought, you're a tenant. When you built it, you're an owner."],
            ].map(([sig, h, p]) => (
              <div className="bp-fit-cell" key={sig}>
                <span className="signal">{sig}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTPUTS */}
      <section className="bp-outputs" data-screen-label="Outputs">
        <div className="wrap">
          <div className="bp-outputs-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Outputs
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                What lands <span className="muted">at delivery.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Tangible deliverables at the end of every engagement, not
              deliverable theater.
            </p>
          </div>

          <div className="bp-outputs-list">
            {[
              ["01", "Production-ready software.", "Live, deployed, in your stack, used by real people on day one."],
              ["02", "Clean UX and working interfaces.", "Designed for the people using it, not for a screenshot in a deck."],
              ["03", "Integrations with what you already run.", "The new system talks to your CRM, your data warehouse, your auth layer, whatever's already there. We don't build islands."],
              ["04", "AI features where they earn their place.", "Used where they actually move the work forward. Not pasted on."],
              ["05", "Launch support.", "The first weeks after go-live are when most software falls over. We're there for them."],
              ["06", "Trained users and ownership transfer.", "Your team knows how it works, how to maintain it, and where the seams are."],
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

      {/* PATTERNS — full-bleed forest-green chapter */}
      <section className="bp-patterns" data-screen-label="Patterns of the work">
        <div className="wrap">
          <div className="bp-patterns-head">
            <div className="eyebrow" style={{ color: "#fff" }}>
              <span
                className="bar"
                style={{ background: "#fff", opacity: 0.5 }}
              />
              Patterns of the work
            </div>
            <h2 className="section-h2" style={{ marginTop: 24 }}>
              Systems we{" "}
              <span style={{ color: "rgba(255,255,255,0.55)" }}>build.</span>
            </h2>
            <p className="section-lede lede">
              Real shapes of engagements we see often. Not case studies, not yet,
              but the patterns are real.
            </p>
          </div>

          <div className="bp-patterns-list">
            {[
              ["01", "Replacing a duct-taped workflow.", "A team uses three apps and two spreadsheets to do one job. We replace it with one system that does the actual job, in one place, with AI taking over the parts that don't need a human."],
              ["02", "Building an AI-powered customer experience.", "A website or portal where customers can ask, search, decide, and act in their own words. Conversation, not forms."],
              ["03", "Creating an internal decision system.", "When the business runs on judgment from people scattered across teams but the data lives in seven systems. We bring it together with AI doing the synthesis, leaving the decision to the human."],
              ["04", "Launching a tailored internal app faster than expected.", "Sometimes the right answer is a small, focused tool you'd never find on the SaaS shelf. Six weeks, not six months. Still production-grade."],
              ["05", "Extending or replacing software that no longer fits.", "You've outgrown a tool, or it never quite fit, but ripping it out feels expensive. We assess the build-vs-extend tradeoff honestly, then deliver whatever's right."],
            ].map(([num, h, p]) => (
              <div className="bp-pattern" key={num}>
                <div className="pnum">{num}</div>
                <div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
                <div className="arrow" aria-hidden="true">→</div>
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
                Real questions, <span className="muted">answered.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              What buyers ask before they sign. Honest takes on the parts of a
              build engagement that usually go unwritten.
            </p>
          </div>

          <div className="bp-faq-list">
            {[
              { open: true, q: "Who owns the code?", a: "You do. Source code, IP, and ongoing rights to the system live with you. We don't gate access or hold leverage." },
              { open: false, q: "Do we have to replace our current software?", a: "Usually not. Most engagements extend or sit alongside what you already run. We help you make that call, we don't pre-decide it." },
              { open: false, q: "Can you build on top of tools we already use?", a: "Yes. Salesforce, HubSpot, NetSuite, internal databases. The system we build integrates with what's there." },
              { open: false, q: "What happens after launch?", a: "You can take it from there, or we keep going on a defined monthly scope under our Managed AI service. Either way, the team you worked with is the team that supports it." },
              { open: false, q: "How quickly can something be built?", a: "Smaller scoped builds: four to eight weeks. Mid-size systems: eight to fourteen. Larger or more integrated platforms: longer, but rarely the nine-plus months traditional dev shops quote." },
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
            <h2>Ready to put AI to work.</h2>
            <p>
              Start with a 30-minute call. Bring the problem you&rsquo;re working
              on. Leave with a sense of what to build, what to skip, and what
              we&rsquo;d launch first.
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
