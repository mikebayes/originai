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
 * Canadian (PIPEDA-aware) privacy disclosure covering the contact
 * form, GA4/Vercel Analytics, retention, visitor rights, and third
 * parties. Update the "Effective Date" at the top whenever this
 * content changes. Content authored by Mike.
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
              <span className="bp-ins-date">Effective March 2026</span>
            </div>

            <h1 className="bp-ins-art-title">Privacy Policy</h1>

            <p className="bp-ins-art-excerpt">
              Origin AI Inc. (&ldquo;Origin&rdquo;, &ldquo;we&rdquo;,
              &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy
              and is committed to protecting the personal information you
              share with us through this website and our services.
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
              This Privacy Policy explains what information we collect, how
              we use it, and the choices available to you regarding your
              information.
            </p>
            <p className="bp-ins-art-p">
              By using this website, you agree to the terms outlined below.
            </p>

            <h2 className="bp-ins-art-h2">Information We Collect</h2>
            <p className="bp-ins-art-p">
              We may collect personal information when you:
            </p>
            <ul className="bp-ins-art-list">
              <li>submit a contact or discovery form</li>
              <li>communicate with us by email</li>
              <li>request information about our services</li>
              <li>interact with our website</li>
            </ul>
            <p className="bp-ins-art-p">
              The information collected may include:
            </p>
            <ul className="bp-ins-art-list">
              <li>name</li>
              <li>company name</li>
              <li>email address</li>
              <li>phone number</li>
              <li>project or inquiry details</li>
              <li>website usage and analytics information</li>
            </ul>
            <p className="bp-ins-art-p">
              We do not intentionally collect sensitive personal
              information through this website.
            </p>

            <h2 className="bp-ins-art-h2">Website Analytics and Usage Data</h2>
            <p className="bp-ins-art-p">
              We use analytics and hosting tools to better understand how
              visitors interact with our website and to improve site
              performance and user experience.
            </p>
            <p className="bp-ins-art-p">
              This may include information such as:
            </p>
            <ul className="bp-ins-art-list">
              <li>pages visited</li>
              <li>browser type</li>
              <li>device type</li>
              <li>approximate geographic location</li>
              <li>referral source</li>
              <li>session duration</li>
              <li>general interaction data</li>
            </ul>
            <p className="bp-ins-art-p">
              Our website currently uses:
            </p>
            <ul className="bp-ins-art-list">
              <li>Google Analytics 4 (GA4)</li>
              <li>Vercel Analytics</li>
            </ul>
            <p className="bp-ins-art-p">
              These platforms may use cookies or similar technologies to
              collect usage information.
            </p>
            <p className="bp-ins-art-p">
              You can control or disable cookies through your browser
              settings.
            </p>

            <h2 className="bp-ins-art-h2">How We Use Information</h2>
            <p className="bp-ins-art-p">
              We use collected information to:
            </p>
            <ul className="bp-ins-art-list">
              <li>respond to inquiries and requests</li>
              <li>communicate about our services</li>
              <li>improve website functionality and performance</li>
              <li>understand site usage trends</li>
              <li>maintain website security</li>
              <li>support business operations and client communications</li>
            </ul>
            <p className="bp-ins-art-p">We do not sell personal information.</p>
            <p className="bp-ins-art-p">
              We do not use submitted information to train public AI models.
            </p>

            <h2 className="bp-ins-art-h2">Contact Forms and Communications</h2>
            <p className="bp-ins-art-p">
              If you submit a form through the website, the information you
              provide may be stored in email systems, CRM tools, or internal
              business systems used to manage communications and client
              inquiries.
            </p>
            <p className="bp-ins-art-p">
              We may contact you in response to your inquiry or regarding
              services that may be relevant to your request.
            </p>
            <p className="bp-ins-art-p">
              You may request removal from future communications at any time.
            </p>

            <h2 className="bp-ins-art-h2">Third-Party Services</h2>
            <p className="bp-ins-art-p">
              We may use third-party providers to support website hosting,
              analytics, communication, and business operations.
            </p>
            <p className="bp-ins-art-p">
              These providers may process limited information as part of
              delivering their services.
            </p>
            <p className="bp-ins-art-p">Examples may include:</p>
            <ul className="bp-ins-art-list">
              <li>website hosting providers</li>
              <li>analytics providers</li>
              <li>email and communication platforms</li>
              <li>cloud infrastructure providers</li>
            </ul>
            <p className="bp-ins-art-p">
              While we work with reputable providers, third-party services
              operate under their own privacy policies and practices.
            </p>

            <h2 className="bp-ins-art-h2">Data Security</h2>
            <p className="bp-ins-art-p">
              We take reasonable administrative and technical measures to
              protect personal information from unauthorized access, misuse,
              loss, or disclosure.
            </p>
            <p className="bp-ins-art-p">
              No method of electronic transmission or storage is completely
              secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="bp-ins-art-h2">Data Retention</h2>
            <p className="bp-ins-art-p">
              We retain personal information only as long as reasonably
              necessary for business, operational, legal, or communication
              purposes.
            </p>
            <p className="bp-ins-art-p">
              Information that is no longer required is deleted or securely
              discarded when appropriate.
            </p>

            <h2 className="bp-ins-art-h2">Your Rights</h2>
            <p className="bp-ins-art-p">
              Depending on applicable privacy laws, you may have the right to:
            </p>
            <ul className="bp-ins-art-list">
              <li>request access to your personal information</li>
              <li>request corrections to inaccurate information</li>
              <li>request deletion of your information where appropriate</li>
              <li>withdraw consent for certain communications</li>
            </ul>
            <p className="bp-ins-art-p">
              To make a privacy-related request, contact us using the
              information below.
            </p>

            <h2 className="bp-ins-art-h2">Canadian Privacy Compliance</h2>
            <p className="bp-ins-art-p">
              Origin AI Inc. operates in Canada and aims to comply with
              applicable Canadian privacy legislation, including the
              Personal Information Protection and Electronic Documents Act
              (PIPEDA).
            </p>

            <h2 className="bp-ins-art-h2">External Links</h2>
            <p className="bp-ins-art-p">
              Our website may contain links to third-party websites or
              services. We are not responsible for the content, security,
              or privacy practices of external sites.
            </p>

            <h2 className="bp-ins-art-h2">Changes to This Policy</h2>
            <p className="bp-ins-art-p">
              We may update this Privacy Policy periodically to reflect
              operational, legal, or technical changes.
            </p>
            <p className="bp-ins-art-p">
              Updated versions will be posted on this page with a revised
              effective date.
            </p>

            <h2 className="bp-ins-art-h2">Contact</h2>
            <p className="bp-ins-art-p">
              If you have questions about this Privacy Policy or how your
              information is handled, please contact:
            </p>
            <p className="bp-ins-art-p">
              Origin AI Inc.
              <br />
              <a href="mailto:info@originai.ca">info@originai.ca</a>
              <br />
              Winnipeg, Manitoba, Canada
            </p>
          </article>
        </section>
      </div>

      <Footer />
    </main>
  );
}
