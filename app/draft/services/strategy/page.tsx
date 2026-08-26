import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

/**
 * /draft/services/strategy — DRAFT repositioning of the AI Strategy &
 * Training page into Leadership AI Enablement.
 *
 * INTERNAL REVIEW ONLY. Not linked from nav, not in the sitemap,
 * noindex/nofollow. The live /services/strategy route is untouched.
 *
 * Positioning: leads with leadership alignment, responsible use, team
 * adoption, AI priorities, workflow opportunities, and next steps.
 * "AI consulting" appears as supporting language only. Training is
 * visible and framed as the natural next step.
 *
 * Reuses the entire bp-page--strategy design system (brass accent,
 * hero shell, leader card, work grid, outputs, fit grid, FAQ, CTA)
 * so this draft looks production-grade with zero new visual language.
 */

/* ─── EVENTUAL SEO (for review, NOT active while draft) ────────────── */
const EVENTUAL_SEO_TITLE =
  "AI Consulting Winnipeg | Leadership AI Enablement | Origin AI";
const EVENTUAL_SEO_DESCRIPTION =
  "Origin AI provides Leadership AI Enablement for organizations in Winnipeg and across Canada, helping leadership teams align around AI priorities, responsible use, team adoption, and workflow opportunities.";

export const metadata: Metadata = {
  title: "DRAFT · Leadership AI Enablement | Origin AI",
  description: "Internal draft. Not for publication.",
  robots: { index: false, follow: false },
};

void EVENTUAL_SEO_TITLE;
void EVENTUAL_SEO_DESCRIPTION;

export default function DraftLeadershipEnablementPage() {
  return (
    <main>
      <div className="bp-page bp-page--strategy">
        <div className="bp-grain" aria-hidden="true" />

        {/* Internal draft banner. Delete when this page goes live. */}
        <div className="draft-banner" role="note">
          Internal draft. Not indexed, not linked, live /services/strategy
          unchanged.
        </div>

        <div className="bp-hero-shell">
          {/* TODO (launch task, NOT draft-scoped): the Services dropdown
              labels live in components/NavServicesDropdown.tsx and
              components/NavServicesAccordion.tsx, which are shared by
              HeroNav and the global StickyNav (mounted in app/layout.tsx).
              They cannot be changed for this draft without affecting every
              live page. When the repositioning ships, update the shared
              components in one pass:
                "AI Software & Systems"  -> "AI Workflow Development"
                "AI Strategy & Training" -> "Leadership AI Enablement"
                "Managed AI"             -> "Managed AI Improvement"
                + add 4th item: "Team AI Enablement / AI Training"
                  linking to /services/ai-training */}
          <HeroNav />

          {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
          <section
            className="wrap bp-hero"
            data-screen-label="Leadership enablement hero"
          >
            <div className="bp-hero-meta">
              <span>
                <a href="/services">← Services</a>
                <span className="crumb-sep">/</span>
                <span>Leadership AI Enablement</span>
              </span>
              <span>01 / 04 — Leadership</span>
            </div>

            <div className="bp-hero-eyebrow">
              <span className="dot" />
              <span>Leadership AI Enablement</span>
              <span className="bar" />
            </div>

            <h1 className="bp-hero-h1">
              Help your leadership team decide{" "}
              <span className="accent">where AI fits.</span>
            </h1>

            <p className="bp-hero-sub">
              Origin helps leadership teams align around AI priorities,
              responsible use, team adoption, and workflow opportunities worth
              pursuing.
            </p>

            <p className="bp-hero-sub bp-hero-sub--secondary">
              Based in Winnipeg, we work with organizations across Canada
              through focused leadership sessions, AI consulting, and
              enablement programs.
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
                <div className="v">1–4 weeks, depending on scope</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Format</div>
                <div className="v">On-site, remote, or hybrid</div>
              </div>
              <div className="bp-hero-foot-col">
                <div className="k">Outcome</div>
                <div className="v">Clear priorities, standards, and next steps</div>
              </div>
            </div>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        {/* ─── SECTION 2: WHY THIS MATTERS ───────────────────────── */}
        <section className="bp-intro" data-screen-label="Why this matters">
          <div className="wrap">
            <div className="bp-intro-grid">
              <div>
                <div className="bp-intro-eyebrow">— Why this matters</div>
                <h2 className="bp-intro-h2">
                  AI adoption needs leadership before it needs more tools.
                </h2>
                <span className="bp-intro-tag">direction &gt; tools</span>
              </div>
              <div className="bp-intro-body">
                <p>
                  <strong>
                    Most organizations already have people experimenting with
                    AI.
                  </strong>
                </p>
                <p>
                  The harder part is deciding what is allowed, what is useful,
                  what is risky, and where AI should become part of the way
                  work gets done.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility / operator card */}
        <section className="bp-leader" data-screen-label="Led by Mike Bayes">
          <div className="wrap">
            <div className="bp-leader-card">
              <div className="bp-leader-photo">
                <img src="/images/MB.avif" alt="Mike Bayes" loading="lazy" />
              </div>
              <div className="bp-leader-body">
                <div className="bp-leader-titles">
                  <div className="bp-leader-eyebrow">
                    <span className="bar" />
                    Senior technology and business operator
                  </div>
                  <h3 className="bp-leader-name">Led by Mike Bayes</h3>
                </div>
                <div className="bp-leader-text">
                  <p>
                    Leadership AI Enablement engagements are led by Mike
                    Bayes, President of Origin AI. Mike brings 25+ years of
                    senior technology and business leadership experience
                    across strategy, operations, cybersecurity, and digital
                    transformation.
                  </p>
                  <p>
                    His role is to help leadership teams separate AI noise
                    from useful opportunity, align around what matters, and
                    define the next step clearly enough to act.
                  </p>
                  <ul className="bp-leader-tags" aria-label="Areas of focus">
                    <li>Technology Strategy</li>
                    <li>Leadership Alignment</li>
                    <li>AI Adoption</li>
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
              What it can include
            </span>
          </div>
        </div>

        {/* ─── SECTION 3: WHAT IT CAN INCLUDE ────────────────────── */}
        <section className="bp-work" data-screen-label="What it can include">
          <div className="wrap">
            <div className="bp-work-head">
              <div>
                <div className="eyebrow">
                  <span className="bar" />
                  What it can include
                </div>
                <h2 className="section-h2" style={{ marginTop: 24 }}>
                  What leadership enablement{" "}
                  <span className="muted">can include.</span>
                </h2>
              </div>
              <p className="section-lede lede">
                The work is shaped around where your organization is starting.
                Some clients need a leadership session. Some need clearer
                standards. Some need to identify the first workflow worth
                improving.
              </p>
            </div>

            <div className="bp-work-grid">
              {[
                [
                  "01",
                  "Leadership alignment",
                  "Create shared direction around where AI fits, what matters, and what should move first.",
                ],
                [
                  "02",
                  "Responsible-use guidance",
                  "Clarify tool use, data boundaries, review expectations, and decision guardrails.",
                ],
                [
                  "03",
                  "Opportunity prioritization",
                  "Separate useful AI opportunities from distractions and identify where to focus first.",
                ],
                [
                  "04",
                  "Adoption planning",
                  "Decide what teams need next: training, workflow support, a pilot, or a defined build.",
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

        {/* ─── SECTION 4: WHERE TRAINING FITS ────────────────────── */}
        <section className="bp-training" data-screen-label="Where training fits">
          <div className="wrap">
            <div className="bp-training-head">
              <div className="eyebrow">
                <span className="bar" />
                AI training
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Leadership alignment often leads{" "}
                <span className="muted">to team training.</span>
              </h2>
              <p className="bp-training-body">
                Once leaders know where AI fits, teams need examples,
                standards, and hands-on training tied to the work they
                actually do.
              </p>
            </div>

            <ul className="bp-training-list" aria-label="Training programs">
              {[
                [
                  "AI Foundations for Teams",
                  "Shared language, tool fluency, and responsible use.",
                ],
                [
                  "Role-Based AI Training",
                  "Hands-on examples for writing, research, analysis, documents, decisions, and client service.",
                ],
                [
                  "Workflow-Focused Sessions",
                  "Training built around a specific business process or team need.",
                ],
              ].map(([name, desc]) => (
                <li key={name}>
                  <span className="name">{name}</span>
                  <span className="desc">{desc}</span>
                </li>
              ))}
            </ul>

            <div className="bp-training-cta">
              <a href="/services/ai-training" className="pill pill-secondary">
                Explore AI training
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: WHAT YOU LEAVE WITH ────────────────────── */}
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
                The goal is not a long strategy document. The goal is a
                clearer organization and a sharper next step.
              </p>
            </div>

            <div className="bp-outputs-list">
              {[
                [
                  "01",
                  "Shared leadership direction.",
                  "A clearer view of where AI fits, what matters most, and what should move first.",
                ],
                [
                  "02",
                  "Responsible-use expectations.",
                  "A working view of tools, data boundaries, review standards, and risk areas.",
                ],
                [
                  "03",
                  "Prioritized opportunities.",
                  "A shortlist of AI opportunities ordered by value, effort, risk, and fit.",
                ],
                [
                  "04",
                  "A defined next step.",
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

        {/* ─── SECTION 6: WHEN THIS FITS ─────────────────────────── */}
        <section className="bp-fit" data-screen-label="When this fits">
          <div className="wrap">
            <div className="bp-fit-head">
              <div className="eyebrow">
                <span className="bar" />
                When this fits
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                When Leadership AI Enablement{" "}
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
                  "Your leadership team needs a shared view of AI.",
                  "Clarify where AI fits, what matters, and what decisions need to be made.",
                ],
                [
                  "Teams are using AI inconsistently.",
                  "Create shared expectations, examples, and responsible-use guidance.",
                ],
                [
                  "You have AI ideas but no way to prioritize them.",
                  "Separate useful opportunities from distractions and decide what should move first.",
                ],
                [
                  "You see workflow potential but need to define the first step.",
                  "Turn the strongest opportunity into a clearer path: training, pilot, workflow improvement, or build.",
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

        {/* ─── SECTION 7: WHERE THIS LEADS ───────────────────────── */}
        <section className="bp-bridge" data-screen-label="Where this leads">
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
              Some clients use this work to align leaders. Others use it to
              prepare teams for AI training. Some identify a workflow worth
              improving or a tool worth building. The goal is not a long
              strategy document. The goal is a clearer organization and a
              sharper next step.
            </p>

            <div className="bp-next-grid">
              <a href="/services/ai-training" className="bp-next-card">
                <span className="bp-next-label">Next step</span>
                <h3>Team AI Enablement</h3>
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

        {/* ─── SECTION 8: FAQ ────────────────────────────────────── */}
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
                Common questions clients ask before they engage.
              </p>
            </div>

            <div className="bp-faq-list">
              {[
                {
                  open: true,
                  q: "Is this only for executives?",
                  a: "No. We use leadership broadly: owners, senior teams, managers, department leads, and people responsible for how work gets done.",
                },
                {
                  open: false,
                  q: "Is this AI consulting?",
                  a: "Yes, but not in the abstract roadmap sense. The work is focused on decisions, standards, adoption, priorities, and next steps.",
                },
                {
                  open: false,
                  q: "Do you provide AI training?",
                  a: "Yes. Leadership enablement often leads into team AI training for the people who need to use AI in their day-to-day work.",
                },
                {
                  open: false,
                  q: "Do you help with AI policy and governance?",
                  a: "Yes. We help shape responsible-use guidelines, data boundaries, review expectations, and decision guardrails.",
                },
                {
                  open: false,
                  q: "Will this produce a roadmap or use-case list?",
                  a: "It can, but the goal is not a long list. The goal is a clear view of what should move first.",
                },
                {
                  open: false,
                  q: "Do we need to commit to a build project?",
                  a: "No. Some clients continue internally. Some move into team training. Some define a workflow development project with Origin.",
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

        {/* ─── SECTION 9: CTA ────────────────────────────────────── */}
        <section className="bp-cta" data-screen-label="Final CTA" id="contact">
          <div className="wrap">
            <div className="bp-cta-inner">
              <div className="bp-cta-eyebrow">
                <span className="dot" />
                Talk to us
              </div>
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
