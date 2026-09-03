import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /services/strategy — Leadership AI Enablement.
 *
 * Promoted from /draft/services/strategy. Replaces the previous live page,
 * which was rendered by components/ServicesStrategyPage.tsx (now unused).
 *
 * SEO job: primary "AI strategy consulting" and "leadership AI
 * enablement", secondary "AI adoption consulting", "AI roadmap",
 * "AI consulting for leadership teams".
 *
 * The page leads with Leadership AI Enablement because that is the
 * positioning, but section 2 opens with an explicit "AI strategy
 * consulting" bridge sentence so the search language is visibly present
 * near the top. The previous live page carried "AI strategy" six times and
 * "roadmap" five; the draft carried neither, which would have removed the
 * signal entirely. One "AI roadmap" reference is retained in the outputs
 * section rather than reinstating roadmap-led positioning.
 *
 * Sections: hero, if this sounds familiar, what we help leadership decide,
 * how the engagement works, clarity your team can act on, the next step,
 * CTA.
 */

export const metadata: Metadata = {
  title:
    "AI Strategy Consulting | Leadership AI Enablement | Origin AI",
  description:
    "Leadership AI enablement and AI strategy consulting for organizations deciding where AI fits, how it should be used, and what should move first.",
  alternates: { canonical: "https://www.originai.ca/services/strategy" },
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.originai.ca/services/strategy#service",
  name: "Leadership AI Enablement",
  description:
    "AI strategy consulting and leadership AI enablement for organizations in Winnipeg and across Canada, helping leadership teams align on AI priorities, responsible use, team adoption, and the workflow opportunities worth pursuing.",
  provider: { "@id": "https://www.originai.ca/#organization" },
  serviceType: "AI Strategy Consulting",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "AdministrativeArea", name: "Manitoba" },
    { "@type": "City", name: "Winnipeg" },
  ],
  url: "https://www.originai.ca/services/strategy",
};

export default function LeadershipAIEnablementPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <div className="bp-page bp-page--strategy svc-dark svc-dark--strategy">
        <div className="bp-grain" aria-hidden="true" />

        <div className="bp-hero-shell">
          <HeroNav />

          {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
          <section
            className="wrap bp-hero"
            data-screen-label="Leadership enablement hero"
          >
            {/* Breadcrumb only. No progress marker, no duplicate service
                label, no decorative accent above the H1. */}
            <div className="bp-hero-meta bp-hero-meta--crumb-only">
              <span>
                <a href="/services">← Services</a>
                <span className="crumb-sep">/</span>
                <span>Leadership AI Enablement</span>
              </span>
            </div>

            <h1 className="bp-hero-h1 bp-hero-h1--bare">
              Help your leadership team{" "}
              <span className="accent">make clear AI decisions.</span>
            </h1>

            {/* Location language is handled in SEO metadata and the footer,
                not repeated in every service-page hero. */}
            <p className="bp-hero-sub">
              Origin helps leadership teams align around AI priorities,
              responsible use, team adoption, and workflow opportunities worth
              pursuing.
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
                <div className="v">1–4 weeks</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Format</div>
                <div className="v">On-site, remote, or hybrid</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Outcome</div>
                <div className="v">Priorities, standards, next steps</div>
              </div>
            </div>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: IF THIS SOUNDS FAMILIAR ────────────────── */}
        <section className="bp-fit" data-screen-label="If this sounds familiar">
          <div className="wrap">
            <div className="bp-fit-head">
              {/* Homepage brand streak. Used once, opening the body
                  content after the hero. */}
              <span className="hero-mark bp-streak" aria-hidden="true">
                <span className="hero-mark-dot" />
                <span className="hero-mark-line" />
              </span>
              <h2 className="section-h2 bp-h2--accented">
                You are probably here because{" "}
                <span className="muted">one of these is true.</span>
              </h2>
            </div>

            <div className="bp-fit-grid">
              {[
                [
                  "Your leadership team does not yet share the same view of AI.",
                  "Clarify where AI fits, what matters, and what decisions need to be made.",
                ],
                [
                  "People are using AI, but inconsistently.",
                  "Create shared expectations, examples, and responsible-use guidance.",
                ],
                [
                  "You have too many AI ideas and no clear filter.",
                  "Separate useful opportunities from distractions and decide what should move first.",
                ],
                [
                  "You see workflow potential, but the first move is unclear.",
                  "Turn the strongest opportunity into a clearer path: training, pilot, workflow improvement, or build.",
                ],
              ].map(([h, sub], i) => (
                <div className="bp-fit-cell" key={i}>
                  <h3>{h}</h3>
                  <p>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ─── SECTION 3: WHAT LEADERS NEED TO DECIDE ────────────── */}
        <section
          className="bp-work"
          data-screen-label="What leaders need to decide"
        >
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  What we help your leadership team decide.
                </h2>
              </div>
              <p className="section-lede lede">
                The work depends on what is unclear. Sometimes the issue is
                direction. Sometimes it is safe use. Sometimes it is choosing
                the first opportunity worth acting on.
              </p>
            </div>

            <div className="bp-work-grid">
              {[
                [
                  "01",
                  "Where AI belongs",
                  "Which teams, workflows, and business problems are worth attention first.",
                ],
                [
                  "02",
                  "How AI should be used",
                  "Clear expectations for tool use, data handling, review, and accountability.",
                ],
                [
                  "03",
                  "What is worth pursuing",
                  "The AI opportunities that have enough value, fit, and ownership to move forward.",
                ],
                [
                  "04",
                  "What happens next",
                  "Whether the next step is training, workflow support, a pilot, or a defined build.",
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

        {/* ─── SECTION 4: HOW THE ENGAGEMENT WORKS ───────────────── */}
        <section className="bp-howitworks" data-screen-label="How it works">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  How the engagement works.
                </h2>
              </div>
              <p className="section-lede lede">
                Most Leadership AI Enablement engagements combine focused
                leadership sessions, light discovery, and a clear set of
                recommendations on where AI adoption should start. It is AI
                strategy consulting, scoped tightly and run by the people who
                do the follow-on work.
              </p>
            </div>

            <div className="bp-steps">
              {[
                [
                  "01",
                  "Prepare",
                  "Understand your team, current AI use, priorities, and concerns.",
                ],
                [
                  "02",
                  "Align",
                  "Facilitate leadership discussion around AI use, risk, opportunities, adoption, and ownership.",
                ],
                [
                  "03",
                  "Decide",
                  "Define what should move first: team training, workflow support, a pilot, or a build.",
                ],
              ].map(([num, title, body]) => (
                <div className="bp-step" key={num}>
                  <span className="bp-step-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>

            {/* Compact trust card. Replaces the previous full-width bio
                section so credibility lands without stopping the page. */}
            <div className="bp-trust-card">
              <div className="bp-trust-photo">
                <img src="/images/MB.avif" alt="Mike Bayes" loading="lazy" />
              </div>
              <div className="bp-trust-body">
                <span className="bp-trust-label">Led by Mike Bayes</span>
                <p>
                  Leadership AI Enablement engagements are led by Mike Bayes,
                  President of Origin AI, with 25+ years of senior technology
                  and business leadership experience across strategy,
                  operations, cybersecurity, and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: CLARITY TO ACT ─────────────────────────── */}
        <section className="bp-outputs" data-screen-label="Clarity to act">
          <div className="wrap">
            <div className="bp-outputs-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="section-h2 bp-h2--accented">
                  Clarity your team can act on.
                </h2>
              </div>
              <p className="section-lede lede">
                The goal is not a long strategy document or a rigid AI
                roadmap. The goal is a clearer organization and a sharper
                next step.
              </p>
            </div>

            <div className="bp-outputs-list">
              {[
                [
                  "01",
                  "Shared direction",
                  "A clearer view of where AI fits, what matters most, and what should move first.",
                ],
                [
                  "02",
                  "Responsible-use expectations",
                  "A working view of tools, data boundaries, review standards, and risk areas.",
                ],
                [
                  "03",
                  "Prioritized opportunities",
                  "A shortlist of AI opportunities ordered by value, effort, risk, and fit.",
                ],
                [
                  "04",
                  "A defined next step",
                  "A clear decision on whether to train, test, improve a workflow, or define a build.",
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

        {/* ─── SECTION 6: THE NEXT MOVE ──────────────────────────── */}
        <section className="bp-bridge" data-screen-label="The next move">
          <div className="wrap">
            <div className="bp-bridge-head">
              <span className="bp-rule" aria-hidden="true" />
              <h2 className="section-h2 bp-h2--accented">
                The next step becomes clearer.
              </h2>
            </div>

            <p className="bp-rail-statement">
              Sometimes the next step is team training. Sometimes it is a
              workflow worth improving. Sometimes it is a tool, assistant,
              automation, or integration. The point is to stop guessing and
              choose the next move with intent.
            </p>

            <div className="bp-next-grid">
              <a href="/services/ai-training" className="bp-next-card">
                <span className="bp-next-label">Next step</span>
                <h3>Team AI Training</h3>
                <p>Train staff with examples tied to their work.</p>
                <span className="bp-next-link">
                  Explore AI training{" "}
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
              <a href="/services/build" className="bp-next-card">
                <span className="bp-next-label">Next step</span>
                <h3>AI Workflow Development</h3>
                <p>
                  Turn a defined opportunity into a tool, assistant,
                  automation, integration, or workflow solution.
                </p>
                <span className="bp-next-link">
                  Explore workflow development{" "}
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
              <a href="/services/managed" className="bp-next-card">
                <span className="bp-next-label">Next step</span>
                <h3>Managed AI Improvement</h3>
                <p>Support and improve what gets adopted.</p>
                <span className="bp-next-link">
                  Learn more <span className="arrow" aria-hidden="true">→</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: CTA ────────────────────────────────────── */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            {/* No eyebrow. The CTA panel carries the section. */}
            <div className="bp-cta-inner bp-cta-inner--bare">
              <h2>Ready to align your team around AI?</h2>
              <p>
                Let&rsquo;s talk about your leadership team, your people, and
                where AI should fit.
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
