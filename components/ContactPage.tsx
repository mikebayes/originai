import HeroNav from "./HeroNav";
import ContactForm from "./ContactForm";

/**
 * /contact — Get started page.
 *
 * Revised 2026-05-06 per Mike's direction. The previous v1 was too
 * long and read as another marketing landing page (hero + meta band +
 * separate book section + separate write section + separate direct
 * section). This pass simplifies to:
 *
 *   1. Compact hero — one headline, one subhead, no meta band, no
 *      hero CTAs (the action area sits immediately below).
 *   2. One combined action grid — two-column on desktop (book left,
 *      form right), stacked on mobile (calendar first, then form).
 *   3. A small supporting note for press / partnerships at the bottom.
 *
 * Goal: a calm, useful intake page. The visitor should understand
 * within one screen that they can either book time or send a short
 * note. No marketing band layering, no high-pressure CTAs.
 */
export default function ContactPage() {
  return (
    <div className="bp-page bp-page--contact">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell bp-hero-shell--compact">
        <HeroNav />

        {/* COMPACT HERO — eyebrow + headline + subhead only. No meta
            band, no hero action buttons (action grid is right below). */}
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
            Book a discovery session or send a few details. We&rsquo;ll help
            you sort out where AI fits, what might be worth building, and
            whether there&rsquo;s a useful next step.
          </p>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* ACTION GRID — book left, form right on desktop. Stacks on
          mobile with calendar first per Mike's direction. */}
      <section className="bp-action" data-screen-label="Book or write">
        <div className="wrap">
          <div className="bp-action-grid">
            {/* LEFT — Book a discovery session */}
            <article className="bp-action-card">
              <header className="bp-action-card-head">
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

              <div className="bp-book-stage">
                {/* Calendly inline embed goes here. Until Mike wires up
                    the account, render a placeholder block so the section
                    has presence. Drop in the embed snippet from Calendly
                    to replace this block. */}
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
            </article>

            {/* RIGHT — Send a few details first */}
            <article className="bp-action-card">
              <header className="bp-action-card-head">
                <div className="eyebrow">
                  <span className="bar" />
                  Write
                </div>
                <h2>Send a few details first</h2>
                <p>
                  Prefer to write it out? Share the problem, idea, workflow,
                  or system you are thinking about. We&rsquo;ll follow up
                  with a useful next step.
                </p>
              </header>

              <ContactForm />
            </article>
          </div>

          {/* Small supporting note below the action grid. Replaces the
              previous standalone .bp-direct section. */}
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
