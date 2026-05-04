import Footer from "./Footer";

/**
 * Final CTA + Footer block used on the homepage.
 *
 * The CTA stage is the homepage's closing pitch ("Ready to put AI to
 * work."). Footer is extracted into its own component so the deep
 * service pages (/services/build, /services/strategy, /services/managed)
 * can render their own .bp-cta and then drop in the Footer directly,
 * without rendering FinalCTA's cta-stage too (which would stack two CTAs).
 */
export default function FinalCTA() {
  return (
    <>
      <section className="stage cta-stage" data-screen-label="Final CTA">
        <div className="stage-grain" aria-hidden="true" />
        <div className="stage-inner">
          <div className="cta-panel" data-reveal>
            <h2 className="cta-h2 display">Ready to put AI to work.</h2>
            <p className="cta-sub">Start with a 30-minute call. Bring the problem you&rsquo;re working on. Leave with a sense of what to build, what to skip, and what we&rsquo;d ship first.</p>
            <div className="cta-actions">
              <a className="pill pill-primary" href="/contact">
                Book a discovery session
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="pill pill-secondary" href="/services">See our services</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
