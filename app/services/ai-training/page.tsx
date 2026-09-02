import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /services/ai-training — Team AI Training.
 *
 * Promoted from /draft/services/ai-training. This is the first page of the
 * repositioned four-part service model to go live:
 *
 *   Leadership AI Enablement   /services/strategy
 *   Team AI Training           /services/ai-training   <- this page
 *   AI Workflow Development    /services/build
 *   Managed AI Improvement     /services/managed
 *
 * SEO job: primary "AI training Winnipeg", secondary "AI training company
 * Winnipeg", "AI training for teams", "ChatGPT training", "AI workshops".
 * GSC recorded 348 impressions for "ai training company winnipeg" at
 * average position 35.87 with no dedicated page, which is what this page
 * is here to capture.
 *
 * Positioning: this is not a generic ChatGPT workshop. The differentiator
 * is customization, so the "Customized before anyone joins the session"
 * section carries the pre-session survey, role and workflow review,
 * example selection, and session design. Training also doubles as
 * discovery: "Where training can lead" connects surfaced use cases to AI
 * Workflow Development and Leadership AI Enablement.
 *
 * Sections:
 *   1. Hero
 *   2. Built around your team's work (3 cards)
 *   3. How we customize the training (4 steps + human visual)
 *   4. What teams learn (6 compact cards)
 *   5. What happens in the session (4 steps)
 *   6. Where training can lead (3 cards, 2 link out)
 *   7. Questions, answered (4)
 *   8. CTA
 *
 * Styling note: the dark hero treatment comes from the svc-dark /
 * svc-dark--training classes in styles/services-deep.css. Those were
 * originally named draft-hero and were renamed when this page shipped, so
 * no production markup carries a draft-prefixed class. The draft pages
 * still using that system were updated in the same pass.
 */

export const metadata: Metadata = {
  title: "AI Training Winnipeg | Team AI Training for Business | Origin AI",
  description:
    "AI training for teams in Winnipeg and across Canada. Origin AI helps staff use AI around real roles, tasks, documents, decisions, and workflows.",
  alternates: { canonical: "https://www.originai.ca/services/ai-training" },
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.originai.ca/services/ai-training#service",
  name: "Team AI Training",
  description:
    "Customized AI training for teams in Winnipeg and across Canada. Sessions are built around the roles, tasks, documents, decisions, and tools a team already works with, including ChatGPT, Microsoft Copilot, and Claude.",
  provider: { "@id": "https://www.originai.ca/#organization" },
  serviceType: "AI Training",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "AdministrativeArea", name: "Manitoba" },
    { "@type": "City", name: "Winnipeg" },
  ],
  url: "https://www.originai.ca/services/ai-training",
};

export default function TeamAITrainingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      {/* bp-page--training inherits the workflow page's hero scale and
          card spacing, with its own grid overrides. svc-dark carries the
          dark hero treatment. */}
      <div className="bp-page bp-page--workflow bp-page--training svc-dark svc-dark--training">
        <div className="bp-grain" aria-hidden="true" />

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
              AI training shaped around{" "}
              <span className="accent">your team&rsquo;s real work.</span>
            </h1>

            <p className="bp-hero-sub">
              Origin helps teams use AI with more confidence, consistency, and
              judgment by tailoring training around their roles, tools,
              documents, decisions, and real opportunities.
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
              {/* Carries the Winnipeg / Canada signal. This field already
                  described delivery, so geography belongs here rather than
                  in a fourth column: .bp-hero-footer is a 3-col grid, and
                  the values wrap to two lines by design (see the Outputs
                  cell on /services/build for the same pattern). */}
              <div className="bp-hero-foot-col">
                <div className="k">Format</div>
                <div className="v">
                  On-site or remote training for teams in Winnipeg and across
                  Canada
                </div>
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
                  Training, examples, use cases, and next steps
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
                  The session should feel like your team,{" "}
                  <span className="muted">not a generic demo.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                The most useful AI training is tied to the roles, tasks,
                documents, decisions, and examples people already recognize.
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
                  Training uses familiar patterns such as drafting,
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
            {/* Stacked head: the intro sits directly under the heading in
                the same column rather than in a right-hand rail, so it
                reads as one block before the image + process row. */}
            <div className="bp-work-head bp-work-head--stacked">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Customized before anyone joins the session.
                </h2>
                <p className="section-lede lede">
                  Before training, we gather enough context to make the session
                  relevant to the team, their roles, and the examples they are
                  likely to recognize. Sessions can include tools such as
                  ChatGPT, Microsoft Copilot, Claude, and other AI tools,
                  depending on what the team actually uses.
                </p>
              </div>
            </div>

            {/* Visual paired with a connected step rail, so the image reads
                as a planned part of the section rather than a standalone
                empty band.

                ART DIRECTION (internal, do not render as page text):
                Use a real human business training environment: facilitator
                with a small team, workshop setting, people reviewing
                examples or discussing workflows. Should feel professional,
                warm, and real. Avoid futuristic AI imagery, robots,
                abstract sparkles, or generic stock-photo cheese. */}
            <div className="bp-train-grid">
              {/* Supporting credibility image, not a hero. Same rounded frame,
                  hairline border, grain, and vignette treatment used on the other
                  service pages. Cropped 4/5 with the focal point held high so the
                  trainer, the participants, and the glass-window setting all
                  survive at every width. */}
              <figure className="bp-train-figure">
                <div className="bp-train-frame">
                  <img
                    src="/images/ai-training-session.jpg"
                    alt="An Origin AI facilitator leading a team training session in a boardroom"
                    loading="lazy"
                  />
                  <span className="bp-train-grain" aria-hidden="true" />
                  <span className="bp-train-vignette" aria-hidden="true" />
                </div>
              </figure>

              {/* Clean numbered list. No timeline line, no dots, no cards,
                  no panel. Hairline dividers only. */}
              <ol className="bp-proclist">
                {[
                  [
                    "01",
                    "Pre-session survey",
                    "Participants share current AI use, comfort level, concerns, tools, and examples of tasks that could be improved.",
                  ],
                  [
                    "02",
                    "Role and workflow review",
                    "We look for common tasks, bottlenecks, documents, decisions, and recurring patterns across the team.",
                  ],
                  [
                    "03",
                    "Example selection",
                    "We choose examples that reflect the team's actual context, not generic AI demos.",
                  ],
                  [
                    "04",
                    "Session design",
                    "The workshop is shaped around the group's needs, risks, opportunities, and adoption level.",
                  ],
                ].map(([num, title, body]) => (
                  <li className="bp-proc" key={num}>
                    <span className="bp-proc-num">{num}</span>
                    <div className="bp-proc-body">
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
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
                  What the team gets better at.
                </h2>
              </div>
              <p className="section-lede lede">
                The focus is on responsible AI habits that improve everyday
                tasks without removing judgment.
              </p>
            </div>

            {/* Compact hairline list rather than six bordered cards, so the
                section reads as capability rather than a course syllabus. */}
            <div className="bp-skills">
              {[
                [
                  "Prompt with context",
                  "Clearer instructions, source material, constraints, and intended outcomes.",
                ],
                [
                  "Review and improve outputs",
                  "Evaluate responses, refine drafts, catch gaps, apply judgment.",
                ],
                [
                  "Summarize and synthesize",
                  "Turn documents, notes, or feedback into clear summaries and next steps.",
                ],
                [
                  "Draft and adapt content",
                  "Stronger first drafts, rewritten for audience, channel, and tone.",
                ],
                [
                  "Research and compare",
                  "Explore options, compare information, prepare better questions.",
                ],
                [
                  "Work responsibly",
                  "Boundaries around privacy, accuracy, sensitive information, and review.",
                ],
              ].map(([h, p], i) => (
                <div className="bp-skill" key={i}>
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
                hands-on exercises, and discussion about where AI fits.
              </p>
            </div>

            {/* Horizontal rail. Reads as a session timeline and keeps this
                section visually distinct from the vertical rail above. */}
            <ol className="bp-hrail">
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
                  "Document useful patterns, concerns, and opportunities to explore further.",
                ],
              ].map(([num, title, body]) => (
                <li className="bp-hrail-step" key={num}>
                  <span className="bp-hrail-node" aria-hidden="true">
                    <span className="bp-hrail-dot" />
                  </span>
                  <span className="bp-hrail-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
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

        {/* ─── SECTION 7: QUESTIONS, ANSWERED ────────────────────── */}
        {/* Reuses the .bp-faq system already on the live service pages. Head
            uses this page's bp-rule pattern rather than the older all-caps
            eyebrow so it matches the sections above. */}
        <section className="bp-faq" data-screen-label="Common questions">
          <div className="wrap">
            <div className="bp-faq-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Questions, <span className="muted">answered.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                What teams tend to ask before booking a session.
              </p>
            </div>

            <div className="bp-faq-list">
              {[
                {
                  open: true,
                  q: "Who is AI training for?",
                  a: "Teams that already have access to AI tools but use them inconsistently. Most sessions are mixed groups: managers, coordinators, analysts, and the people handling day-to-day documents and decisions. AI training for teams works best when the room shares some of the same work.",
                },
                {
                  open: false,
                  q: "Do you train on specific tools?",
                  a: "Yes. Sessions are built around the tools your team already has, so in practice this usually looks like ChatGPT training, Microsoft Copilot training, or a mix of both alongside whatever else is in use.",
                },
                {
                  open: false,
                  q: "Can training be delivered on-site in Winnipeg?",
                  a: "Yes. Origin is a Winnipeg AI training company, so on-site sessions in the city are straightforward. For teams elsewhere in Canada we run the same session remotely, or travel when it makes sense.",
                },
                {
                  open: false,
                  q: "What do teams walk away with?",
                  a: "Shared habits for using AI on real tasks, examples drawn from their own work, and a short list of workflow opportunities worth looking at next.",
                },
              ].map((it, i) => (
                <details className="bp-faq-item" key={i} open={it.open}>
                  <summary>
                    <span className="qnum">
                      Q · {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="qtext">{it.q}</span>
                    <span className="plus" aria-hidden="true" />
                  </summary>
                  <div className="ans">{it.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 8: CTA ────────────────────────────────────── */}
        {/* No eyebrow, no accent. The CTA panel carries the section. */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            <div className="bp-cta-inner bp-cta-inner--bare">
              <h2>Want training built around your team?</h2>
              <p>
                Start with a 30-minute call. We&rsquo;ll talk about your
                people, the tasks they handle, and where AI training could
                create the most value.
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
