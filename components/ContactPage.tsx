import HeroNav from "./HeroNav";
import ContactForm from "./ContactForm";

/**
 * /contact — Get started page.
 *
 * Mike's direction: not a generic "Contact us" page with a single
 * 1995-style form. Three layers, each addressing a different visitor
 * intent:
 *
 *   1. Hero — direct headline, one-paragraph intent, two CTAs that
 *      scroll to the appropriate section.
 *   2. Discovery session (#book) — Calendly inline embed (placeholder
 *      until wiring lands) for people who'd rather just pick a time.
 *      This is the primary path; ~80% of CTAs around the site point
 *      at booking.
 *   3. Write first (#write) — substantive form (stage, goal, context,
 *      contact details) for people who want to think before they
 *      talk. Pre-qualifies the call so it walks in with context.
 *   4. Direct channels — quiet fallback at the bottom for press,
 *      partnerships, and anything that doesn't fit the form.
 *
 * Reuses .bp-page system with .bp-page--contact modifier so the page
 * inherits the dark hero atmospheric treatment used on /approach and
 * /team. No menu link in the top nav — Contact lives in the footer
 * sitemap; the various site-wide CTAs all point here.
 */
export default function ContactPage() {
  return (
    <div className="bp-page bp-page--contact">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell">
        <HeroNav />

        <section className="wrap bp-hero" data-screen-label="Get started hero">
          <div className="bp-hero-meta">
            <span>
              <a href="/">← Origin AI</a>
              <span className="crumb-sep">/</span>
              <span>Get started</span>
            </span>
            <span>The fastest way in</span>
          </div>

          <div className="bp-hero-eyebrow">
            <span className="dot" />
            <span>Get started</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1">
            Tell us about your{" "}
            <span className="accent">AI work.</span>
          </h1>

          <p className="bp-hero-sub">
            Most people who land here are figuring out where AI fits, what to
            build first, or how to keep something live and improving. A
            30-minute discovery session is the fastest way in. Or write to
            us first if you would rather think before you talk.
          </p>

          <div className="bp-hero-actions">
            <a href="#book" className="pill pill-primary">
              Book a discovery session
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#write" className="pill pill-secondary">
              Or write first
            </a>
          </div>

          <div className="bp-hero-footer">
            <div className="bp-hero-foot-col">
              <div className="k">Format</div>
              <div className="v">30-minute call, no prep required</div>
            </div>
            <div className="bp-hero-foot-col">
              <div className="k">What we cover</div>
              <div className="v">Where AI fits, what to do first, how we would help</div>
            </div>
            <div className="bp-hero-foot-col">
              <div className="k">Then</div>
              <div className="v">A focused conversation, not a sales call</div>
            </div>
          </div>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* DISCOVERY SESSION — Calendly placeholder. Once Mike wires up
          the Calendly account, replace .bp-book-placeholder with the
          actual inline embed iframe (Calendly provides a snippet). */}
      <section
        id="book"
        className="bp-book"
        data-screen-label="Book a discovery session"
      >
        <div className="wrap">
          <div className="bp-work-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Discovery session
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Pick a time{" "}
                <span className="muted">that works.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              A 30-minute call to understand what you are working on, where
              AI might fit, and whether we should talk further. No agenda,
              no slide deck, no prep on your side.
            </p>
          </div>

          <div className="bp-book-stage">
            {/* Calendly inline embed goes here. Until Mike wires up the
                account, render a placeholder block so the section has
                presence and the page renders cleanly. */}
            <div className="bp-book-placeholder" aria-hidden="true">
              <div className="bp-book-placeholder-mark">
                <span className="dot" />
                <span>Calendly inline embed</span>
              </div>
              <p>
                Available times appear here once the Calendly account is
                connected. Drop in the embed snippet from Calendly to
                replace this block.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WRITE FIRST — substantive form. Lives in its own client
          component so submit interaction can show a thank-you state. */}
      <section
        id="write"
        className="bp-write"
        data-screen-label="Write to us first"
      >
        <div className="wrap">
          <div className="bp-work-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Or write first
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                Tell us what you are{" "}
                <span className="muted">working on.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              A few questions that give us context before the call. Skip
              anything that does not apply.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* DIRECT CHANNELS — quiet fallback for press / partnerships /
          anything that doesn't fit the form. */}
      <section className="bp-direct" data-screen-label="Direct channels">
        <div className="wrap">
          <div className="bp-direct-inner">
            <div className="bp-direct-eyebrow">
              <span className="bar" />
              Direct
            </div>
            <p className="bp-direct-body">
              Press, partnerships, or anything that does not fit the form:{" "}
              <a href="mailto:info@originai.ca">info@originai.ca</a>. We are
              based in Winnipeg and work with Canadian and US clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
