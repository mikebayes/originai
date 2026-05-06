"use client";

import { useState } from "react";

/**
 * Contact form for the /contact page secondary "write first" section.
 *
 * Simplified 2026-05-06 per Mike's direction: the page is now
 * book-dominant with this form as a small secondary fallback. Reduced
 * to four fields total — name, email, company, and a single textarea
 * for what they are working through. Stage radio, Role field, and
 * second optional textarea are all removed to reduce friction.
 *
 * v1: form is fully interactive but submission is stubbed — on submit
 * we show a clean thank-you state instead of POSTing anywhere. Wire to
 * a real backend (Formspree, Resend, or a Next API route) as a next
 * step.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bp-contact-form-thanks" role="status" aria-live="polite">
        <div className="bp-contact-form-thanks-mark" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
            <path d="M7 12l3.5 3.5L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Thanks. We&rsquo;ll be in touch.</h3>
        <p>
          Most replies go out within one business day. If your timing is
          tight, you can also book a discovery session above for the next
          available slot.
        </p>
      </div>
    );
  }

  return (
    <form className="bp-contact-form" onSubmit={handleSubmit} noValidate>
      <div className="bp-contact-form-grid">
        <label className="bp-contact-field">
          <span className="bp-contact-label">Name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="bp-contact-field">
          <span className="bp-contact-label">Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label className="bp-contact-field bp-contact-field--full">
          <span className="bp-contact-label">Company</span>
          <input type="text" name="company" autoComplete="organization" />
        </label>
      </div>

      <label className="bp-contact-field">
        <span className="bp-contact-label">What are you working through?</span>
        <textarea
          name="goal"
          rows={4}
          required
          placeholder="A few sentences is enough. Tell us about the problem, idea, workflow, system, or AI question on your mind."
        />
      </label>

      <div className="bp-contact-form-actions">
        <button type="submit" className="pill pill-primary">
          Send note
          <span className="arrow" aria-hidden="true">→</span>
        </button>
        <span className="bp-contact-form-actions-note">
          We read every message. Most replies in one business day.
        </span>
      </div>
    </form>
  );
}
