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
 *   3. Tools we commonly train teams on (4 logo cards)
 *   4. How we customize the training (4 steps + human visual)
 *   5. What good AI use looks like (4 cards + trust turn + 3 cards)
 *   6. Generation is not completion (centred statement + 3 checks)
 *   7. What teams leave with (label strip, no heading)
 *   8. What happens in the session (4-word flow)
 *   9. Where training can lead (stacked head + 2 links)
 *  10. Questions, answered (4)
 *  11. CTA
 *
 * Density pass 2026-10-09 (second pass) rebuilt sections 6 through 9.
 * They had become four consecutive h2-left / lede-right heads each
 * followed by a grid: six tenets, six skills, four rail steps, three
 * cards. Individually fine, in sequence a wall. Nothing above section 6
 * was touched. The ideas were kept and the repetition was not; section 7
 * lost its grid entirely because all six of its items were already said
 * somewhere else on the page. Each of the four now has a different shape:
 * centred block, bare strip, two-column head, stacked head.
 *
 * Specificity pass 2026-10-09 added sections 3, 5, and 6. The page was
 * credible but generic: it described customization well and said almost
 * nothing about what is actually taught. The new sections carry the
 * message that training is not only tool instruction, it is learning what
 * good AI-supported work looks like. Section 3 also puts the four tool
 * names in visible copy for the first time, which the metadata and schema
 * had been carrying alone.
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
    "Customized AI training for teams in Winnipeg and across Canada. Sessions are built around the roles, tasks, documents, decisions, and tools a team already works with, including ChatGPT, Microsoft Copilot, Claude, and Gemini.",
  provider: { "@id": "https://www.originai.ca/#organization" },
  serviceType: "AI Training",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "AdministrativeArea", name: "Manitoba" },
    { "@type": "City", name: "Winnipeg" },
  ],
  url: "https://www.originai.ca/services/ai-training",
};

/**
 * Tools covered in section 3.
 *
 * Logos live in /public/logos/tools/ and were trimmed to their artwork
 * bounding box, then scaled to a uniform 96px cap height so the four read
 * at the same optical weight in a row. Intrinsic width varies (414-448px)
 * and is passed through to the width/height attributes so the browser
 * reserves the right box before the image loads.
 *
 * All four marks are dark artwork, so each sits on a cream chip rather
 * than directly on the dark section. The logos themselves are unmodified
 * beyond that uniform scaling.
 *
 * The copy carries "<tool> training" in visible text because those are
 * four separate search phrases and the page previously had none of them
 * outside one FAQ answer.
 */
const TOOLS = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    w: 416,
    body:
      "ChatGPT training for drafting, summarizing, comparing information, working with files, preparing ideas, and improving everyday business communication.",
  },
  {
    slug: "microsoft-copilot",
    name: "Microsoft Copilot",
    w: 414,
    body:
      "Microsoft Copilot training for teams working inside Microsoft 365, covering where it helps, where it falls short, and how to use it responsibly.",
  },
  {
    slug: "claude",
    name: "Claude",
    w: 448,
    body:
      "Claude training for longer documents, writing, analysis, structured thinking, policy review, planning, and detailed content work.",
  },
  {
    slug: "gemini",
    name: "Gemini",
    w: 425,
    body:
      "Gemini training for teams in Google Workspace who want AI support connected to email, documents, research, and team workflows.",
  },
];

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

            {/* Sharpened 2026-10-09. The previous subhead described the
                method (tailoring) without naming anything concrete. This
                version names the four tools and the four things training
                actually improves, which is also where the tool-name search
                phrases first appear on the page. */}
            <p className="bp-hero-sub">
              Origin helps business teams use tools like ChatGPT, Microsoft
              Copilot, Claude, and Gemini with better judgment, stronger source
              material, clearer review habits, and examples drawn from the work
              they actually do.
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
              {/* Second sentence added 2026-10-09. The page never said who
                  the training is for at an organizational level, which left
                  "corporate AI training" and "AI training for teams" intent
                  unaddressed. Naming the departments also makes it obvious
                  this is not a generic public course. */}
              <p className="section-lede lede">
                The most useful AI training is tied to the roles, tasks,
                documents, decisions, and examples people already recognize.
                Some organizations need a leadership session, some need
                department-level training for marketing, sales, operations,
                service, finance, HR, or project teams, and some need both.
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

        {/* ─── SECTION 3: TOOLS WE TRAIN TEAMS ON ────────────────── */}
        {/* Added 2026-10-09. Deliberately placed early: it is the most
            concrete thing on the page and the only section with colour in
            it, so it breaks up a long run of text-only cards.

            The logos are the heading. No h3 above each one, because the
            wordmark already says the name and a text repeat of it next to
            the mark reads as a template rather than a designed card. */}
        <section className="bp-tools" data-screen-label="Tools we train teams on">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Tools we commonly train{" "}
                  <span className="muted">teams on.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                Start with the job you are trying to do, not the tool you are
                trying to use. The session covers the environments your team
                already works in, and how to tell which one suits the task.
              </p>
            </div>

            <div className="bp-tool-grid">
              {TOOLS.map((t) => (
                <div className="bp-tool-card" key={t.slug}>
                  <span className="bp-tool-mark">
                    <img
                      src={`/logos/tools/${t.slug}.png`}
                      alt={t.name}
                      width={t.w}
                      height={96}
                      loading="lazy"
                    />
                  </span>
                  <p>{t.body}</p>
                </div>
              ))}
            </div>

            <p className="bp-tool-note">
              Tool names and logos are trademarks of their respective owners.
              Origin AI is not affiliated with or endorsed by these providers.
            </p>
          </div>
        </section>

        {/* ─── SECTION 4: HOW WE CUSTOMIZE THE TRAINING ──────────── */}
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
                {/* The tool list that used to close this paragraph moved to
                    section 3, where it has logos and room to say something
                    about each one. Repeating the four names here would have
                    read as keyword padding. */}
                <p className="section-lede lede">
                  Before training, we gather enough context to make the session
                  relevant to the team, their roles, and the examples they are
                  likely to recognize. That includes which AI tools they
                  already have access to, and which of those the session
                  should cover.
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

        {/* ─── SECTION 5: WHAT GOOD AI USE LOOKS LIKE ────────────── */}
        {/* Added 2026-10-09. Two beats in one section rather than two
            sections: the upside, then what is at stake if the work is
            poor. Splitting them would have put three card grids in a row
            and flattened the page's rhythm. */}
        <section className="bp-quality" data-screen-label="What good AI use looks like">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  What good AI use{" "}
                  <span className="muted">looks like.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                Training is not only learning tools. It is learning what good
                AI-supported work looks like, and what it should actually
                improve.
              </p>
            </div>

            <div className="bp-origin-grid bp-origin-grid--four">
              {[
                [
                  "Better work",
                  "Higher-quality documents, presentations, analysis, communication, and decisions.",
                ],
                [
                  "Faster work",
                  "Less time searching, summarizing, drafting, reformatting, and repeating.",
                ],
                [
                  "Better insight",
                  "More information brought together, compared, questioned, and turned into useful direction.",
                ],
                [
                  "Greater capability",
                  "Teams take on work that previously needed more time, more tools, or specialist support.",
                ],
              ].map(([h, p]) => (
                <div className="bp-origin-cell" key={h}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>

            {/* The turn. This is the argument the section exists to make,
                so it gets its own line rather than becoming a fourth card. */}
            <div className="bp-quality-turn">
              <h3>AI quality matters because trust is at stake.</h3>
              <p>
                Poor AI use does not just create weak outputs. It can damage
                brand trust, customer trust, and internal confidence in AI.
              </p>
            </div>

            <div className="bp-origin-grid">
              {[
                [
                  "Brand trust",
                  "Teams learn to avoid generic or obviously automated work that weakens the brand.",
                ],
                [
                  "Customer trust",
                  "Teams learn to check claims, specs, assumptions, and customer-facing messages before they leave the business.",
                ],
                [
                  "Trust in AI",
                  "Teams learn to use AI well enough that colleagues build confidence in it instead of dismissing it after mediocre results.",
                ],
              ].map(([h, p]) => (
                <div className="bp-origin-cell" key={h}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: GENERATION IS NOT COMPLETION ───────────── */}
        {/* Compressed 2026-10-09 (second pass). This shipped as a six-item
            hairline grid, which made it the third list in a row and turned
            a position the firm holds into another feature set.

            Now a single centred statement with three checks. The centred
            head is the only one on the page and is doing deliberate work:
            sections 5, 8 and 9 all use the standard h2-left / lede-right
            head, so breaking the pattern here is what stops the lower half
            reading as one long column of identical blocks.

            Four of the six original lines survive folded into the checks
            and the closing maxim. "Give AI the real source material" and
            "Ask what it used" both became Source. "Check in proportion to
            the stakes" became Stakes. "Bring in human expertise" became
            Ownership, which also absorbs the old standalone close line. */}
        <section className="bp-review" data-screen-label="Reviewing AI output">
          <div className="wrap">
            <div className="bp-review-head">
              <span className="bp-rule" aria-hidden="true" />
              <h2 className="section-h2 bp-h2--accented">
                Generation is not <span className="muted">completion.</span>
              </h2>
              <p>
                A first AI output is not finished business work. Teams learn
                to check the source, challenge the answer, improve the draft,
                and decide what still needs human judgment.
              </p>
            </div>

            <ul className="bp-checks">
              {[
                ["Source", "What did it use?"],
                ["Stakes", "How carefully does this need checking?"],
                ["Ownership", "AI helped. You own it."],
              ].map(([k, v]) => (
                <li className="bp-check" key={k}>
                  <span className="bp-check-k">{k}</span>
                  <span className="bp-check-v">{v}</span>
                </li>
              ))}
            </ul>

            <p className="bp-review-maxim">Confidence is not evidence.</p>
          </div>
        </section>

        {/* ─── SECTION 7: WHAT TEAMS LEAVE WITH ──────────────────── */}
        {/* Was "What the team gets better at": a full section with its own
            head and a six-item hairline grid. Removed 2026-10-09 (second
            pass) because every one of its six items was already carried
            elsewhere. Context and source material are section 6. Tool
            choice is section 3. Spotting weak output and staying on-brand
            are the trust cards in section 5. Repeatable work is section 9.
            It was restating the page back to itself.

            What survives is a single-line label strip with no heading and
            no paragraph. It is the lightest band on the page by a wide
            margin, which is the point: it gives the lower half somewhere
            to breathe between two heavier sections. */}
        <section className="bp-outcome" data-screen-label="What teams leave with">
          <div className="wrap">
            <div className="bp-outcome-row">
              <span className="bp-outcome-label">Teams leave with</span>
              <ul className="bp-outcome-tags">
                <li>Better context</li>
                <li>Real source material</li>
                <li>Review habits</li>
                <li>Tool choice</li>
                <li>Repeatable work</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── SECTION 8: WHAT HAPPENS IN THE SESSION ────────────── */}
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
                Short instruction, live examples, hands-on exercises, and
                discussion about where AI fits.
              </p>
            </div>

            {/* Compressed 2026-10-09 (second pass) from the .bp-hrail
                timeline, which carried a number, a heading and a sentence
                per step. The four step names already say the shape of the
                session, and the lede above says what happens in them, so
                the bodies were restating the lede four times.

                The arrow is a ::after on each step except the last, so the
                sequence has no separator markup to keep in sync. */}
            <ol className="bp-flow">
              {["Align", "Demonstrate", "Try", "Capture"].map((s) => (
                <li className="bp-flow-step" key={s}>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── SECTION 9: WHERE TRAINING CAN LEAD ────────────────── */}
        <section className="bp-origin" data-screen-label="Where training can lead">
          <div className="wrap">
            {/* Compressed 2026-10-09 (second pass). Was three bordered
                cards, the fourth card grid in the lower half. The first
                card ("Shared AI habits") is now the outcome strip in
                section 7, and the other two were card-shaped wrappers
                around what are really just two links.

                Stacked head so this reads differently again from the
                two-column head in section 8 directly above it.

                Both existing links are kept. The /services/strategy one
                predates this pass and is the training-to-leadership route;
                no links were added or removed. */}
            <div className="bp-work-head bp-work-head--stacked">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Training often reveals what should be built next.
                </h2>
                <p className="section-lede lede">
                  Some opportunities stay as better team habits. Others become
                  shared prompts, standards, assistants, automations, or
                  custom AI workflow software.
                </p>
              </div>
            </div>

            <div className="bp-bridge-links">
              <a href="/services/strategy" className="bp-bridge-link">
                Leadership AI Enablement
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="/services/build" className="bp-bridge-link">
                AI Workflow Development
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── SECTION 10: QUESTIONS, ANSWERED ────────────────────── */}
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
                  a: "Yes. Sessions are built around the tools your team already has, so in practice this usually looks like ChatGPT training, Microsoft Copilot training, Claude training, or Gemini training, often in combination, alongside any specialized tools already in use.",
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

        {/* ─── SECTION 11: CTA ────────────────────────────────────── */}
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
