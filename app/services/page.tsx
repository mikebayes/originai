import type { Metadata } from "next";
import {
  MarkAlign,
  MarkRoster,
  MarkFlow,
  MarkSteps,
} from "@/components/ServiceMarks";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /services — services hub.
 *
 * Promoted from /draft/services. Replaces the previous live page, which
 * composed ServicesV2Hero, ServicesV2HeroBridge, ServicesV2Trio,
 * ServicesV2Engage and ServicesV2Proof (all now unused).
 *
 * SEO job: primary "AI consulting services" and "AI services", secondary
 * "AI enablement", "AI adoption services". The previous live hub averaged
 * position 34 with 686 impressions and zero clicks, and "AI services
 * Winnipeg" sat at position 61, so there was little to protect and the
 * page needed the search language it did not have.
 *
 * Four-part service model, linked from the cards and the hero rail:
 *   1. Leadership AI Enablement   -> /services/strategy
 *   2. Team AI Training           -> /services/ai-training
 *   3. AI Workflow Development    -> /services/build
 *   4. Managed AI Improvement     -> /services/managed
 *
 * H1 note: the draft H1 read "AI services for companies moving from
 * interest to adoption." The H1 now carries "AI consulting services"
 * instead, since the hub had none of its target phrase anywhere and the
 * section-2 H2 already says "AI services built around how companies adopt
 * AI."
 *
 * Sections: hero (+ service model rail), what we do (four cards),
 * a simple path (journey rail + reassurance note), proof, CTA.
 */

export const metadata: Metadata = {
  title:
    "AI Consulting Services | Training, Workflow Development & AI Enablement | Origin AI",
  description:
    "Explore Origin AI services: leadership AI enablement, team AI training, AI workflow development, and managed improvement for organizations adopting AI.",
  alternates: { canonical: "https://www.originai.ca/services" },
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.originai.ca/services#service",
  name: "AI Consulting Services",
  description:
    "Origin AI provides AI consulting services for organizations in Winnipeg and across Canada: leadership AI enablement, team AI training, AI workflow development, and managed AI improvement.",
  provider: { "@id": "https://www.originai.ca/#organization" },
  serviceType: "AI Consulting",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "AdministrativeArea", name: "Manitoba" },
    { "@type": "City", name: "Winnipeg" },
  ],
  url: "https://www.originai.ca/services",
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <div className="svcs-v2 svcs-refined svc-dark svc-dark--pillar">
        <HeroNav />

        {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
        <section className="wrap s-hero" data-screen-label="Services hero">
          <div className="s-hero-grid">
            <div>
              {/* No eyebrow. The H1 states the page. */}
              <h1 className="s-hero-h1 bp-hero-h1--bare">
                AI consulting services,{" "}
                <span className="muted">
                  from leadership alignment to live systems.
                </span>
              </h1>
              {/* Location language is handled in SEO metadata and the
                  footer, not repeated in every service-page hero. */}
              <p className="s-hero-sub">
                Origin provides AI consulting services across four areas:
                leadership alignment, team AI training, workflow development,
                and managed improvement.
              </p>
            </div>

            {/* Right rail — the four-part service model, as a finished
                artifact rather than a placeholder mockup.

                Changes from the earlier version:
                  - "Placeholder" status chip and the "Visual placeholder"
                    footer are both gone. The card now reads as intended
                    design, not a stand-in.
                  - The highlighted Workflow row is removed. Emphasis on
                    one row implied Workflow was the primary service,
                    which is the exact positioning this page moves away
                    from. All four rows now share one treatment.
                  - What signals direction instead: the teal index and
                    hairline rail warm very slightly from 01 to 04, which
                    reads as sequence, not hierarchy. No row is dominant.
                  - The left column carries a numeric index rather than a
                    category word, since the category was already implied
                    by the service name beside it.
                  - The verb tags (Align, Train, Develop, Improve) carry
                    the caption content per row, so the footer is dropped
                    entirely. Shorter card, better at hero size.

                svc-model scopes every override so the base .svcs-v2
                rules stay generic. */}
            <aside
              className="svc-diagram svc-model"
              aria-label="Origin AI service model: four service areas"
            >
              <div className="svc-diagram-head">
                <span className="svc-diagram-title">
                  Origin · Service model
                </span>
              </div>

              <div className="svc-rows">
                {/* Continuous hairline rail behind the index column, so
                    the four rows read as one connected model rather than
                    a stacked list. */}
                <span className="svc-model-rail" aria-hidden="true" />

                <div className="svc-row" data-step="1">
                  <span className="svc-row-num">01</span>
                  <span className="svc-row-name">Leadership AI Enablement</span>
                  <span className="svc-row-tag">Align</span>
                </div>
                <div className="svc-row" data-step="2">
                  <span className="svc-row-num">02</span>
                  <span className="svc-row-name">Team AI Training</span>
                  <span className="svc-row-tag">Train</span>
                </div>
                <div className="svc-row" data-step="3">
                  <span className="svc-row-num">03</span>
                  <span className="svc-row-name">AI Workflow Development</span>
                  <span className="svc-row-tag">Develop</span>
                </div>
                <div className="svc-row" data-step="4">
                  <span className="svc-row-num">04</span>
                  <span className="svc-row-name">Managed AI Improvement</span>
                  <span className="svc-row-tag">Improve</span>
                </div>
              </div>
            </aside>
          </div>
        </section>


        {/* ─── SECTION 2: WHAT WE DO (four cards, 2x2) ─────────── */}
        <section className="wrap section" data-screen-label="What we do">
          <div className="s-head">
            <div>
              {/* Homepage brand streak. Used once, opening the body
                  content after the hero. */}
              <span className="hero-mark bp-streak" aria-hidden="true">
                <span className="hero-mark-dot" />
                <span className="hero-mark-line" />
              </span>
              <h2 className="s-h2 bp-h2--accented">
                AI services built around{" "}
                <span className="muted">how companies adopt AI.</span>
              </h2>
            </div>
            <p className="s-lede">
              Some organizations need leadership alignment. Some need team
              training. Some need help turning a workflow opportunity into
              something their team can use. Origin helps across that path.
            </p>
          </div>

          <div className="quad">
            {/* Card 1 — Leadership */}
            <article className="svc-card" id="leadership">
              {/* Small inline mark from components/ServiceMarks.tsx.
                  Kept compact so the four cards stay scannable. */}
              <div className="svc-mark-row" aria-hidden="true">
                <MarkAlign />
              </div>
              <div className="svc-card-body">
                <span className="svc-card-num">Leadership</span>
                <h3 className="svc-card-title">Leadership AI Enablement</h3>
                <p className="svc-card-promise">
                  Align your leadership team around where AI fits, what
                  standards matter, and which opportunities should move
                  first.
                </p>
                <div className="svc-card-foot">
                  <a href="/services/strategy" className="tlink">
                    Learn more <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="svc-card-anchor">/services/strategy</span>
                </div>
              </div>
            </article>

            {/* Card 2 — Team */}
            <article className="svc-card" id="team">
              {/* Small inline mark from components/ServiceMarks.tsx.
                  Kept compact so the four cards stay scannable. */}
              <div className="svc-mark-row" aria-hidden="true">
                <MarkRoster />
              </div>
              <div className="svc-card-body">
                <span className="svc-card-num">Team</span>
                <h3 className="svc-card-title">Team AI Training</h3>
                <p className="svc-card-promise">
                  AI training for teams, built around the work people already
                  do: writing, research, analysis, documents, decisions, and
                  client service.
                </p>
                <div className="svc-card-foot">
                  <a href="/services/ai-training" className="tlink">
                    Explore AI training{" "}
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="svc-card-anchor">/services/ai-training</span>
                </div>
              </div>
            </article>

            {/* Card 3 — Workflows */}
            <article className="svc-card" id="workflows">
              {/* Small inline mark from components/ServiceMarks.tsx.
                  Kept compact so the four cards stay scannable. */}
              <div className="svc-mark-row" aria-hidden="true">
                <MarkFlow />
              </div>
              <div className="svc-card-body">
                <span className="svc-card-num">Workflows</span>
                <h3 className="svc-card-title">AI Workflow Development</h3>
                <p className="svc-card-promise">
                  Turn the right opportunities into assistants, automations,
                  integrations, workflow tools, or custom software when the
                  workflow is worth keeping.
                </p>
                <div className="svc-card-foot">
                  <a href="/services/build" className="tlink">
                    Explore workflow development{" "}
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="svc-card-anchor">/services/build</span>
                </div>
              </div>
            </article>

            {/* Card 4 — Improvement */}
            <article className="svc-card" id="improvement">
              {/* Small inline mark from components/ServiceMarks.tsx.
                  Kept compact so the four cards stay scannable. */}
              <div className="svc-mark-row" aria-hidden="true">
                <MarkSteps />
              </div>
              <div className="svc-card-body">
                <span className="svc-card-num">Improvement</span>
                <h3 className="svc-card-title">Managed AI Improvement</h3>
                <p className="svc-card-promise">
                  Keep useful AI workflows supported, refined, and expanded
                  after launch.
                </p>
                <div className="svc-card-foot">
                  <a href="/services/managed" className="tlink">
                    Learn more <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <span className="svc-card-anchor">/services/managed</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ─── SECTION 3: HOW WE ENGAGE (journey rail) ─────────── */}
        <section className="engage" id="engage" data-screen-label="How we engage">
          <div className="wrap engage-inner">
            <div className="s-head">
              <div>
                <span className="bp-rule" aria-hidden="true" />
                <h2 className="s-h2 bp-h2--accented">
                  A simple path from alignment to adoption.
                </h2>
              </div>
              <p className="s-lede">
                We help clients identify where AI fits, build capability where
                it matters, and develop tools only when the opportunity is
                clear.
              </p>
            </div>

            {/* Journey rail: connected 4-step line on desktop, stacked on
                mobile. Reuses the phase-rail visual language with shorter
                copy so it reads as an infographic, not paragraphs. */}
            <div className="phase-rail journey-rail">
              <div className="phase">
                <div className="phase-marker">
                  <span className="phase-dot" />
                  <span className="phase-num">Discover</span>
                </div>
                <h3 className="phase-name">Understand the opportunity.</h3>
                <p className="phase-body">
                  Identify where AI could improve work, decisions,
                  consistency, or speed.
                </p>
                <div className="phase-deliver">
                  <span className="label">Leave with</span>
                  <span className="item">Initial opportunity map</span>
                  <span className="item">Priority areas</span>
                  <span className="item">Shared direction</span>
                </div>
              </div>

              <div className="phase">
                <div className="phase-marker">
                  <span className="phase-dot" />
                  <span className="phase-num">Enable</span>
                </div>
                <h3 className="phase-name">
                  Build leadership and team capability.
                </h3>
                <p className="phase-body">
                  Align leaders, train teams, and give people examples tied to
                  their real work.
                </p>
                <div className="phase-deliver">
                  <span className="label">Leave with</span>
                  <span className="item">Leadership alignment</span>
                  <span className="item">Team capability</span>
                  <span className="item">Clear next steps</span>
                </div>
              </div>

              <div className="phase">
                <div className="phase-marker">
                  <span className="phase-dot" />
                  <span className="phase-num">Develop</span>
                </div>
                <h3 className="phase-name">
                  Operationalize the right workflow.
                </h3>
                <p className="phase-body">
                  When a workflow is worth keeping, we build the assistant,
                  automation, integration, or tool to support it.
                </p>
                <div className="phase-deliver">
                  <span className="label">Leave with</span>
                  <span className="item">Working solution</span>
                  <span className="item">Clear ownership</span>
                  <span className="item">Launch support</span>
                </div>
              </div>

              <div className="phase">
                <div className="phase-marker">
                  <span className="phase-dot" />
                  <span className="phase-num">Improve</span>
                </div>
                <h3 className="phase-name">Keep what works moving.</h3>
                <p className="phase-body">
                  Support, refine, and expand the AI workflows that get
                  adopted.
                </p>
                <div className="phase-deliver">
                  <span className="label">Leave with</span>
                  <span className="item">Ongoing improvement</span>
                  <span className="item">Support and optimization</span>
                  <span className="item">Next-phase opportunities</span>
                </div>
              </div>
            </div>

            {/* Closing reassurance, inside this section by design.
                It previously sat between </section> and the next one,
                which put it past the engage section's background edge
                and made it read as an orphan between two sections. It
                now lives inside .engage-inner, below the four phases and
                above the section's own bottom boundary, so the section
                reads: heading + intro, four-step path, short note.

                Not a CTA: no heading, no rule, no grid, no button, no
                card, no link. */}
            <aside className="path-note" data-screen-label="Reassurance note">
              <p>
                <strong>Not sure which path fits?</strong> That is normal.
                Most conversations start with the situation in front of you,
                not a finished AI plan.
              </p>
            </aside>
          </div>
        </section>

        {/* ─── SECTION 4: PROOF / TESTIMONIAL ────────────────────
            Heading was "How leaders are putting AI to work." which sat
            directly above the final CTA's "Ready to put AI to work?" and
            repeated the phrase across two adjacent sections. The CTA
            keeps the phrase, since that is the conversion line; this
            section moves to adoption language, which also matches the
            page's positioning better than "putting AI to work."

            Heading history: "How leaders are putting AI to work." repeated
            the final CTA's phrase, and "What adoption looks like in
            practice." over-explained a section whose job is credibility.
            The plain version lets the quote and the client names carry it.

            The right-hand lede is removed. s-head--solo drops the grid to
            one column so the heading does not sit in a 1.3fr well with an
            empty column beside it.

            The quote, attribution, Tripwire card, engagement label, and
            selected-clients row below are unchanged. */}
        <section className="wrap section" data-screen-label="Customer spotlight">
          <div className="s-head s-head--solo">
            <div>
              <span className="bp-rule" aria-hidden="true" />
              <h2 className="s-h2 bp-h2--accented">
                Companies we&rsquo;ve helped.
              </h2>
            </div>
          </div>

          <div className="proof-feature">
            <div className="proof-quote-col">
              <span className="proof-mark">&ldquo;</span>
              <p className="proof-quote">
                Origin{" "}
                <span className="accent">shifted the way our team thinks.</span>{" "}
                They taught us how to frame problems in a way that unlocks
                better solutions. That shift alone has changed how we operate.
              </p>
            </div>
            <div className="proof-attr-col">
              <div className="proof-engagement">
                <span className="label">Engagement</span>
                <span className="value">
                  Leadership AI Enablement + Team AI Training
                </span>
              </div>
              <div className="proof-attr">
                <div className="proof-avatar">
                  <img
                    src="/images/testimonial-doug-darling.png"
                    alt="Doug Darling"
                  />
                </div>
                <div className="meta">
                  <span className="name">Doug Darling</span>
                  <span className="role">CEO, Tripwire Media Group</span>
                  <a
                    href="https://www.tripwiremedia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site"
                  >
                    tripwiremedia.com ↗
                  </a>
                </div>
                <div className="proof-attr-logo">
                  <div className="client-logo-card spotlight-logo">
                    <img
                      src="/logos/clients/tripwire.png"
                      alt="Tripwire Media Group"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wordmark-strip">
            <span className="wordmark-strip-label">
              <span className="bar" />Selected clients
            </span>
            <div className="wordmark-row">
              <span className="wordmark">Tripwire Media Group</span>
              <span className="wordmark">Direct Focus</span>
              <span className="wordmark">Thor Plumbing &amp; Heating</span>
              <span className="wordmark">Equipco Ltd.</span>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: CTA ──────────────────────────────────── */}
        <section className="wrap section svcs-cta" data-screen-label="CTA">
          <div className="svcs-cta-inner">
            <h2 className="s-h2">Ready to put AI to work?</h2>
            <p className="svcs-cta-body">
              Start with a 30-minute call. We&rsquo;ll talk through your team,
              your workflows, and where AI may be worth pursuing first.
            </p>
            <div className="svcs-cta-actions">
              <a href="/contact" className="pill pill-primary">
                Book a discovery session
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="/services/ai-training" className="pill pill-ghost">
                Explore AI training
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
