"use client";

import { useState } from "react";
import HeroNav from "./HeroNav";
import ContactForm from "./ContactForm";

/**
 * /contact — Get started page.
 *
 * v4 (2026-05-06): collapses three repetitive Mike-sections from v3
 * into a single unified advisor card. Layout: hero + Mike card (photo
 * left, name/role/buttons right, quote spanning bottom) + quiet
 * office strip. The "Connect with Mike" button opens a focused form
 * modal in place; "Connect on LinkedIn" opens his profile externally.
 *
 * Page replaces the previous v3 (book-dominant + secondary form)
 * design entirely. Calendly is intentionally absent — this is an
 * advisory engagement, not a transactional booking page.
 */
export default function ContactPage() {
  const [formOpen, setFormOpen] = useState(false);

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
            <span>Get in touch</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1">
            Let&rsquo;s{" "}
            <span className="accent">connect.</span>
          </h1>

          <p className="bp-hero-sub">
            If you&rsquo;re thinking about where AI might fit, what to build
            first, or how to keep something live and improving, this is the
            right place to start. No pitch deck, no scripted intake. Just a
            conversation.
          </p>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* MEET YOUR ADVISOR — single unified card */}
      <section className="bp-advisor" data-screen-label="Meet your advisor">
        <div className="wrap">
          <article className="bp-advisor-card">
            <div className="bp-advisor-photo">
              <img src="/images/MB.avif" alt="Mike Bayes" loading="lazy" />
            </div>

            <div className="bp-advisor-meta">
              <div className="bp-advisor-eyebrow">
                <span className="bar" aria-hidden="true" />
                Meet your advisor
              </div>
              <h2 className="bp-advisor-name">Mike Bayes</h2>
              <p className="bp-advisor-role">
                Lead AI Advisor &middot; Origin AI
              </p>

              <div className="bp-advisor-actions">
                <button
                  type="button"
                  className="pill pill-primary"
                  onClick={() => setFormOpen(true)}
                >
                  Connect with Mike
                  <span className="arrow" aria-hidden="true">→</span>
                </button>
                <a
                  href="https://www.linkedin.com/in/mbayes"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bp-advisor-linkedin"
                >
                  <span className="bp-advisor-linkedin-glyph" aria-hidden="true">
                    in
                  </span>
                  Connect on LinkedIn
                </a>
              </div>

              <p className="bp-advisor-actions-note">
                Form opens in place &middot; LinkedIn opens profile
              </p>
            </div>

            <p className="bp-advisor-quote">
              &ldquo;Most conversations I have start with someone trying to
              figure out what&rsquo;s actually worth doing with AI. I&rsquo;d
              rather start there than start with a sales pitch.&rdquo;
            </p>
          </article>
        </div>
      </section>

      {/* MEMBERSHIP — quiet Chamber of Commerce credibility marker.
          Sits between the advisor card and the office strip so the
          local-credibility theme runs together: real advisor, real
          Chamber member, real office. */}
      <section className="bp-membership" data-screen-label="Chamber member">
        <div className="wrap">
          <div className="bp-membership-card">
            <span className="bp-membership-label">Proud member</span>
            <img
              src="/images/winnipeg-chamber-logo.png"
              alt="The Winnipeg Chamber of Commerce"
              className="bp-membership-logo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* OFFICE STRIP — quiet horizontal credibility note */}
      <section className="bp-office" data-screen-label="Office">
        <div className="wrap">
          <div className="bp-office-grid">
            <div className="bp-office-map">
              {/* Real Google Maps embed pinning 315 Pacific Avenue.
                  CSS filter on the wrapper inverts colors so the
                  default light Google Maps theme reads as a dark
                  surface that fits the Origin AI palette. To upgrade
                  to a true dark Google Maps theme later, swap to a
                  Cloud-based map ID and remove the filter. */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.8038430688653!2d-97.1405357!3d49.902485899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea7167834a34cd%3A0x2f4c94aa88f3f21b!2s315%20Pacific%20Ave%2C%20Winnipeg%2C%20MB%20R3A%200M2!5e0!3m2!1sen!2sca!4v1778266370228!5m2!1sen!2sca"
                title="Origin AI office location, 315 Pacific Avenue, Winnipeg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="bp-office-info">
              <div className="bp-office-eyebrow">
                <span className="bar" aria-hidden="true" />
                Winnipeg office
              </div>
              <p className="bp-office-line">
                <span className="addr">315 Pacific Avenue, Winnipeg, MB</span>
                <span className="sep" aria-hidden="true">·</span>
                <a href="mailto:info@originai.ca">info@originai.ca</a>
                <span className="sep" aria-hidden="true">·</span>
                <a href="tel:+12045151415">+1 (204) 515 1415</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL — opens when "Connect with Mike" is clicked */}
      <ContactForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
