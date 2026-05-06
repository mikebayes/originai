import HeroNav from "./HeroNav";
import ContactForm from "./ContactForm";

/**
 * /contact — Get started page.
 *
 * Revised again 2026-05-06. Mike: the v2 two-column layout gave the
 * book and write paths equal weight, which created decision friction
 * since the site-wide CTA is "Book a discovery session". This pass
 * makes booking the dominant primary action and demotes the form to
 * a smaller secondary fallback below it.
 *
 * Structure:
 *   1. Compact hero — points clearly toward booking.
 *   2. Primary book section — dominant centered card with Calendly
 *      placeholder.
 *   3. Secondary "Prefer to write first?" — simplified short form
 *      (4 fields only).
 *   4. Small supporting note for press/partnerships.
 */
export default function ContactPage() {
  return (
    <div className="bp-page bp-page--contact">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell bp-hero-shell--compact">
        <HeroNav />

        <section
          className="wrap bp-hero bp-hero--compact"
          data-screen-label="Get started hero"
        >
          <div className="bp-hero-eyebrow">
            <span className="dot" />
            <span>Get started</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1">
            Start with{" "}
            <span className="accent">a conversation.</span>
          </h1>

          <p className="bp-hero-sub">
            Book a 30-minute discovery session. We&rsquo;ll talk through
            where AI might fit, what you are trying to build or improve, and
            whether there is a useful next step.
          </p>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* PRIMARY — Book a discovery session. Dominant centered card with
          the Calendly placeholder/embed area as the page's main action. */}
      <section
        className="bp-book-primary"
        data-screen-label="Book a discovery session"
      >
        <div className="wrap">
          <header className="bp-book-primary-head">
            <div className="eyebrow">
              <span className="bar" />
              Book
            </div>
            <h2>Book a discovery session</h2>
            <p>
              A 30-minute call to understand what you are working through
              and whether there is a fit. No prep needed.
            </p>
          </header>

          <div className="bp-book-primary-stage">
            {/* Calendly inline embed goes here. Until Mike wires up the
                account, render a placeholder block. */}
            <div className="bp-book-placeholder" aria-hidden="true">
              <div className="bp-book-placeholder-mark">
                <span className="dot" />
                <span>Calendly inline embed</span>
              </div>
              <p>
                Available times appear here once the Calendly account is
                connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY — Prefer to write first? Simplified 4-field form
          rendered as a smaller secondary surface below the booking. */}
      <section
        className="bp-write-secondary"
        data-screen-label="Prefer to write first"
      >
        <div className="wrap">
          <header className="bp-write-secondary-head">
            <div className="eyebrow">
              <span className="bar" />
              Or write first
            </div>
            <h2>Prefer to write first?</h2>
            <p>Send a short note and we&rsquo;ll follow up.</p>
          </header>

          <ContactForm />

          <p className="bp-action-note">
            For press, partnerships, or anything that does not fit the form:{" "}
            <a href="mailto:info@originai.ca">info@originai.ca</a>. Based in
            Winnipeg, working with clients across Canada and the US.
          </p>
        </div>
      </section>
    </div>
  );
}
