import Logo from "./Logo";

/**
 * Site footer — three-column layout with brand, sitemap, and contact info.
 *
 * Reused by FinalCTA on the homepage (where it renders below the
 * cta-stage panel) and directly by the deep service page routes
 * (/services/build, /services/strategy, /services/managed) which
 * have their own .bp-cta section above and don't need FinalCTA's
 * extra cta-stage.
 */
export default function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="f-col f-col-brand">
            <a className="f-logo" href="/" aria-label="Origin AI home">
              <Logo />
            </a>
            <p className="f-tagline">
              Custom AI software and AI consulting for organizations ready to ship. Based in Winnipeg, Canada.
            </p>
            <a className="f-social" href="https://www.linkedin.com/company/origin-ai-tech" target="_blank" rel="noreferrer noopener">
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
              315 Pacific Avenue<br />
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
  );
}
