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
 *   5. Tools we commonly train teams on (4 logo cards)
 *   6. Questions, answered (4)
 *   7. CTA
 *
 * Reorder pass 2026-10-09 (fourth) set the narrative. The page had the
 * right length but the beats were in the wrong order: it opened with
 * two sections about customization, then logos, then risk. A buyer was
 * three sections deep before learning why any of it mattered.
 *
 * The order now follows the sale. Stakes, then what makes this training
 * different, then how it is delivered, then which tools it covers. The
 * logos moved from second to fifth for the same reason: they confirm a
 * decision rather than start one.
 *
 * Retired here: "Built around your team's work" (folded into sections 2
 * and 3) and "How we train your team", whose Align / Demonstrate / Try /
 * Apply row was generic process language. Section 4 replaces it with the
 * question buyers actually ask, which is remote or in person.
 *
 * Section 4 ships with placeholder frames. See the comment there before
 * dropping real photography in.
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

        {/* ─── SECTION 2: AI HAS RAISED THE STAKES ───────────────── */}
        {/* Reorder pass 2026-10-09 (fourth). This is now the lead, and it
            is the risk argument rather than a restatement of the hero.

            It absorbs the old "Built around your team's work" section,
            which opened the page with three cards (Real roles / Real
            tasks / Real opportunities) that said the same thing as
            "Customized before anyone joins the session" two sections
            later. The department sentence from that section moved into
            the customization lede below, where it belongs, and brought
            the /services/strategy link with it.

            The framing is cost of untrained use, not fear: the cards
            describe what teams learn to do, not what will go wrong.

            The origin label and its arrow are a ::after so the glyph can
            flip from -> to a downward arrow when the layout stacks. */}
        <section className="bp-risk-section" data-screen-label="AI has raised the stakes">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                {/* Homepage brand streak. Used once, opening the body
                    content after the hero. */}
                <span className="hero-mark bp-streak" aria-hidden="true">
                  <span className="hero-mark-dot" />
                  <span className="hero-mark-line" />
                </span>
                <h2 className="section-h2 bp-h2--accented">
                  AI tools have raised the stakes{" "}
                  <span className="muted">for everyday work.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                AI tools can help employees create, summarize, analyze, and
                publish work faster than ever. Used without enough judgment,
                review, or brand context, the risks show up quickly: generic
                content, inconsistent messaging, unsupported claims,
                inaccurate details, and work that feels less credible than it
                should.
              </p>
            </div>

            <div className="bp-risk">
              <p className="bp-risk-origin">Untrained use</p>

              <div className="bp-origin-grid">
                {[
                  [
                    "Brand trust",
                    "Avoid generic or obviously automated work that weakens the brand.",
                  ],
                  [
                    "Customer trust",
                    "Check claims, specs, assumptions, and customer-facing messages before they leave the business.",
                  ],
                  [
                    "Trust in AI",
                    "Build confidence by helping people use AI with judgment, source material, and review.",
                  ],
                ].map(([h, p]) => (
                  <div className="bp-origin-cell" key={h}>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="bp-risk-close">
              Training helps teams understand what good AI-supported work
              looks like, what weak AI use looks like, and how to use these
              tools without costing the business trust it has already earned.
            </p>
          </div>
        </section>

        {/* ─── SECTION 3: HOW WE CUSTOMIZE THE TRAINING ──────────── */}
        {/* Moved up 2026-10-09 (fourth pass) to sit directly after the
            risk lead: the buyer has just been told what is at stake, so
            the next question is what makes this training different. Image
            and four-step rail unchanged.

            The lede gained the department sentence from the retired
            "Built around your team's work" section, which is what carries
            corporate and team intent, and the /services/strategy link. */}
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
                    the tools section, where it has logos and room to say
                    something about each one. Repeating the four names here
                    would have read as keyword padding. */}
                <p className="section-lede lede">
                  Before training, we gather enough context to make the session
                  relevant to the team, their roles, and the examples they are
                  likely to recognize. Some organizations need a{" "}
                  <a href="/services/strategy" className="bp-body-link">
                    leadership session
                  </a>
                  , some need department-level training for marketing, sales,
                  operations, service, finance, HR, or project teams, and some
                  need both.
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

        {/* ─── SECTION 4: DELIVERY FORMAT ────────────────────────── */}
        {/* Replaces "How we train your team", whose Align / Demonstrate /
            Try / Apply row was generic process language that said nothing
            a buyer could act on. This answers the question that actually
            comes up on a sales call: can you come to us, or is this
            remote.

            Rebuilt 2026-10-10 as text only. This shipped with two 3:2
            image frames holding placeholders for photography that is not
            coming; the decision was made not to add more images to this
            page. The frames, the placeholder fills, and the reserved space
            are all gone rather than left empty.

            In person leads because it is the stronger differentiator and
            the harder thing to offer. Source order puts it first, so it is
            also first when the columns stack. Deliberately unboxed: two
            bordered cards here would have competed with the three bordered
            cards in section 2 a screen earlier. */}
        <section className="bp-formats" data-screen-label="How training is delivered">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Live training, delivered the way{" "}
                  <span className="muted">your team works best.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                Sessions are live and hands-on either way. The format follows
                the team rather than the other way around.
              </p>
            </div>

            <div className="bp-fmt-split">
              {[
                [
                  "In person",
                  "Facilitated workshops with your team together in the same room.",
                ],
                [
                  "Live online",
                  "Live workshops over Microsoft Teams for teams joining from different locations.",
                ],
              ].map(([title, body]) => (
                <div className="bp-fmt-col" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>

            <p className="bp-fmt-shared">
              Both formats include live demonstrations, questions, and
              hands-on exercises tailored to your team.
            </p>

            <p className="bp-fmt-note">
              Typical formats include half-day sessions, full-day sessions, or
              multi-session workshops. Each engagement is scoped based on
              audience, goals, customization, and team size.
            </p>
          </div>
        </section>

        {/* ─── SECTION 5: TOOLS WE TRAIN TEAMS ON ────────────────── */}
        {/* Moved down 2026-10-09 (fourth pass). It used to run second,
            which put product logos ahead of the reason to care. It now
            sits where a buyer who is already interested goes looking for
            confirmation that the session covers their stack.

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

        {/* ─── SECTION 6: QUESTIONS, ANSWERED ────────────────────── */}
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
                  /* JSX rather than a string so "workflow opportunities"
                     can carry the /services/build link. That link lost its
                     home when "How we train your team" was retired, and
                     this is the one sentence left on the page that already
                     describes what training surfaces. `a` is typed by
                     inference, so a mixed string/JSX array is fine. */
                  a: (
                    <>
                      Shared habits for using AI on real tasks, examples drawn
                      from their own work, and a short list of{" "}
                      <a href="/services/build" className="bp-body-link">
                        workflow opportunities
                      </a>{" "}
                      worth looking at next.
                    </>
                  ),
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

        {/* ─── SECTION 7: CTA ────────────────────────────────────── */}
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
