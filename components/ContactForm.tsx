"use client";

import { useState } from "react";

/**
 * Contact form for the /contact page "write first" section.
 *
 * v1: form is fully interactive but submission is stubbed — on submit
 * we show a clean thank-you state instead of POSTing anywhere. Wire to
 * a real backend (Formspree, Resend, or a Next API route) as a next
 * step.
 *
 * Substantive fields per Mike's direction: instead of the generic
 * name/email/message triple, this form asks for the prospect's stage,
 * what they're trying to do, and any context that helps prep the
 * discovery call. Walks into the call already pre-qualified.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // v1: stub. Real submission to be wired up next pass.
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
      <fieldset className="bp-contact-stage">
        <legend>Where are you right now?</legend>
        <div className="bp-contact-stage-options">
          {[
            ["exploring", "Just exploring"],
            ["planning", "Actively planning"],
            ["ready", "Ready to build"],
            ["maintaining", "Maintaining something live"],
          ].map(([value, label]) => (
            <label key={value} className="bp-contact-stage-option">
              <input type="radio" name="stage" value={value} />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="bp-contact-field">
        <span className="bp-contact-label">What are you working through?</span>
        <textarea
          name="goal"
          rows={4}
          required
          placeholder="A few sentences is enough. Tell us about the problem, idea, workflow, system, or AI question on your mind."
        />
      </label>

      <label className="bp-contact-field">
        <span className="bp-contact-label">Anything else that would help?</span>
        <span className="bp-contact-label-hint">Optional</span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Timing, people involved, current tools, budget shape, or anything else we should know."
        />
      </label>

      <div className="bp-contact-form-grid">
        <label className="bp-contact-field">
          <span className="bp-contact-label">Name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="bp-contact-field">
          <span className="bp-contact-label">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
          />
        </label>
        <label className="bp-contact-field">
          <span className="bp-contact-label">Company</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
          />
        </label>
        <label className="bp-contact-field">
          <span className="bp-contact-label">Role</span>
          <input
            type="text"
            name="role"
            autoComplete="organization-title"
          />
        </label>
      </div>

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
