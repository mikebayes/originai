import Logo from "./Logo";

export default function FinalCTA() {
  return (
    <>
      {/* Final CTA */}
      <section className="stage cta-stage" data-screen-label="Final CTA">
        <div className="stage-grain" aria-hidden="true" />
        <div className="stage-inner">
          <div className="cta-panel" data-reveal>
            <span className="cta-eyebrow"><span className="bar" />Get started<span className="bar" /></span>
            <h2 className="cta-h2 display">Ready to put leadership and execution behind your AI.</h2>
            <p className="cta-sub">Start with a 30-minute discovery session. We&rsquo;ll tell you where you are, where you should go, and what&rsquo;s in the way.</p>
            <div className="cta-actions">
              <a className="pill pill-primary" href="/contact">
                Book a discovery session
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="pill pill-secondary" href="/services">See our services</a>
            </div>
            <div className="cta-meta"><span className="dot" aria-hidden="true" />30 min · No prep required · Free</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-screen-label="Footer">
        <div className="footer-inner">
          <div className="footer-cols">
            <div className="f-col f-col-brand">
              <a className="f-logo" href="/" aria-label="Origin AI home">
                <Logo />
              </a>
              <p className="f-tagline">
                Strategy, development, and AI solutions for organizations ready to ship.
              </p>
              <a className="f-social" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v14H.22V8zm7.32 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v7.46h-4.56v-6.62c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.5V22H7.54V8z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <div className="f-col">
              <h4 className="f-col-title">Sitemap</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/approach">Approach</a></li>
                <li><a href="/insights">Insights</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="f-col">
              <h4 className="f-col-title">Get in touch</h4>
              <p className="f-contact">
                <span className="label">Office</span>
                Winnipeg, Manitoba<br />
                Canada<br />
                <span className="label">Email</span>
                <a href="mailto:info@originai.ca">info@originai.ca</a><br />
                <span className="label">Phone</span>
                <a href="tel:+12045151415">+1 (204) 515 1415</a>
              </p>
            </div>
          </div>

          <div className="f-bottom">
            <span>© 2025 Origin AI Inc. All rights reserved.</span>
            <span className="f-bottom-links">
              <a href="/privacy">Privacy policy</a>
              <a href="/terms">Terms</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
