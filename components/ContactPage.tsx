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
                  href="https://www.linkedin.com/in/mikebayes"
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

      {/* OFFICE STRIP — quiet horizontal credibility note */}
      <section className="bp-office" data-screen-label="Office">
        <div className="wrap">
          <div className="bp-office-grid">
            <div className="bp-office-map" aria-hidden="true">
              {/* Stylized dark-themed abstract map. Marks the office
                  location with a teal pin. Lightweight, on-brand, no
                  third-party tracking. Swap for a real Google Maps
                  embed later if needed. */}
              <svg
                viewBox="0 0 360 200"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <rect width="360" height="200" fill="#02100a" />
                <g stroke="rgba(93,168,156,0.10)" strokeWidth="0.6" fill="none">
                  <path d="M0 50 L360 30" />
                  <path d="M0 100 L360 90" />
                  <path d="M0 150 L360 160" />
                  <path d="M0 190 L360 195" />
                  <path d="M60 0 L80 200" />
                  <path d="M150 0 L130 200" />
                  <path d="M240 0 L260 200" />
                  <path d="M320 0 L300 200" />
                </g>
                {/* Building blocks */}
                <rect x="120" y="68" width="80" height="38" fill="rgba(93,168,156,0.06)" stroke="rgba(93,168,156,0.18)" strokeWidth="0.5" />
                <rect x="220" y="108" width="60" height="50" fill="rgba(93,168,156,0.06)" stroke="rgba(93,168,156,0.18)" strokeWidth="0.5" />
                <rect x="80" y="140" width="50" height="30" fill="rgba(93,168,156,0.06)" stroke="rgba(93,168,156,0.18)" strokeWidth="0.5" />
                {/* Pin */}
                <g transform="translate(180 110)">
                  <circle r="14" fill="rgba(93,168,156,0.18)" />
                  <circle r="8" fill="#5DA89C" />
                  <circle r="3" fill="#fff" />
                  <line x1="0" y1="8" x2="0" y2="22" stroke="#5DA89C" strokeWidth="1.5" />
                </g>
              </svg>
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
