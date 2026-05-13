import type { Metadata } from "next";
import HeroNav from "@/components/HeroNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Origin AI",
  description:
    "How Origin AI collects, uses, and protects personal information on originai.ca. Plain-language privacy practices for our contact form, analytics, and visitor data.",
  alternates: { canonical: "https://www.originai.ca/privacy" },
};

/**
 * /privacy — Privacy policy page.
 *
 * Plain-language PIPEDA-aware privacy disclosure. Covers what we
 * collect through the contact form and analytics, how we use and
 * store it, retention, visitor rights, and how to contact us about
 * personal data. Not legalese — written to be read.
 *
 * If the form back-end or analytics stack changes, update the
 * relevant sections below. The dated "Last updated" line at the
 * bottom is the canonical version stamp.
 */
export default function PrivacyRoute() {
  return (
    <main>
      <div className="bp-page bp-page--insights bp-page--insights-article">
        <div className="bp-grain" aria-hidden="true" />

        <div className="bp-hero-shell bp-hero-shell--compact">
          <HeroNav />

          <section
            className="wrap bp-hero bp-hero--compact bp-ins-art-hero"
            data-screen-label="Privacy hero"
          >
            <div className="bp-ins-art-meta">
              <span className="bp-ins-tag">Legal</span>
              <span className="bp-ins-sep" aria-hidden="true">·</span>
              <span className="bp-ins-date">Last updated May 13, 2026</span>
            </div>

            <h1 className="bp-ins-art-title">Privacy Policy</h1>

            <p className="bp-ins-art-excerpt">
              How Origin AI collects, uses, and protects personal
              information on originai.ca. Written in plain language so
              you can actually read it.
            </p>
          </section>
        </div>

        <div className="bp-fade-down" aria-hidden="true" />

        <section
          className="bp-ins-art-body-wrap"
          data-screen-label="Privacy body"
        >
          <article className="bp-ins-art-body">
            <p className="bp-ins-art-p">
              Origin AI Inc. (&ldquo;Origin AI&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) respects your privacy. This page describes
              what personal information we collect on originai.ca, how we
              use it, and your rights regarding that information.
            </p>

            <h2 className="bp-ins-art-h2">Information we collect</h2>
            <p className="bp-ins-art-p">
              When you submit our contact form, we collect:
            </p>
            <ul className="bp-ins-art-list">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your company name (if provided)</li>
              <li>The content of your message</li>
            </ul>
            <p className="bp-ins-art-p">
              We use Google Analytics 4 and Vercel Analytics to understand
              how visitors use our site. These tools collect anonymized
              usage data including pages visited, time on site, approximate
              location, device type, and referrer. They do not collect
              personally identifying information.
            </p>
            <p className="bp-ins-art-p">
              Our hosting provider (Vercel) maintains standard server logs
              for operational and security purposes.
            </p>

            <h2 className="bp-ins-art-h2">How we use it</h2>
            <p className="bp-ins-art-p">
              We use contact form submissions only to respond to your
              inquiry and follow up on any work we begin together. We use
              analytics data to understand which parts of the site are
              useful and to improve content over time.
            </p>
            <p className="bp-ins-art-p">
              We do not sell, rent, or trade your personal information. We
              do not use your information to send marketing emails unless
              you specifically opt in.
            </p>

            <h2 className="bp-ins-art-h2">How we store and share it</h2>
            <p className="bp-ins-art-p">
              Contact form submissions are stored in our internal systems
              and shared only with Origin AI team members directly involved
              in responding to you. Analytics data is processed by Google
              and Vercel under their respective privacy policies.
            </p>
            <p className="bp-ins-art-p">
              Information may also be disclosed if required by Canadian
              law.
            </p>

            <h2 className="bp-ins-art-h2">Retention</h2>
            <p className="bp-ins-art-p">
              We retain contact form submissions for as long as is
              reasonably necessary to respond to your inquiry and maintain
              a record of our interactions, typically up to two years.
              After that, we delete or anonymize the information unless an
              active engagement requires longer retention.
            </p>

            <h2 className="bp-ins-art-h2">Your rights</h2>
            <p className="bp-ins-art-p">
              Under Canada&rsquo;s Personal Information Protection and
              Electronic Documents Act (PIPEDA), you have the right to:
            </p>
            <ul className="bp-ins-art-list">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for future use</li>
            </ul>
            <p className="bp-ins-art-p">
              To exercise any of these rights, email info@originai.ca.
            </p>

            <h2 className="bp-ins-art-h2">Cookies</h2>
            <p className="bp-ins-art-p">
              The site uses cookies to power analytics. You can disable
              cookies in your browser; the site will continue to function.
            </p>

            <h2 className="bp-ins-art-h2">Contact</h2>
            <p className="bp-ins-art-p">
              Questions about this policy can be sent to{" "}
              <a href="mailto:info@originai.ca">info@originai.ca</a> or by
              mail to:
            </p>
            <p className="bp-ins-art-p">
              Origin AI Inc.
              <br />
              315 Pacific Avenue
              <br />
              Winnipeg, MB R3A 0M2
              <br />
              Canada
            </p>

            <h2 className="bp-ins-art-h2">Updates</h2>
            <p className="bp-ins-art-p">
              This policy may be updated as our practices change. The
              current version is dated at the top of this page.
            </p>
          </article>
        </section>
      </div>

      <Footer />
    </main>
  );
}
