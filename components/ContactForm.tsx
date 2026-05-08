"use client";

import { useEffect, useState } from "react";

type Props = {
  /** Whether the modal is visible. Owned by the parent page so it can
   *  be opened from any "Connect with Mike" CTA. */
  isOpen: boolean;
  /** Callback fired when the user closes the modal (Escape, backdrop
   *  click, or the close button). */
  onClose: () => void;
};

/**
 * Contact form rendered as a centered lightbox modal.
 *
 * Triggered by the "Connect with Mike" button on the contact page
 * (and any future page that wants to surface the same path). Modal
 * pattern instead of an inline section since the contact page is
 * intentionally short and the form should feel like a focused
 * intake moment rather than a chunk of the page real estate.
 *
 * Submit is stubbed for v1 — clicking Send shows the thank-you
 * state, then auto-closes after a few seconds. Wire to a real
 * backend (Formspree, Resend, Next API route) as a next pass.
 */
export default function ContactForm({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  // Reset to the form view (not the thanks state) whenever the modal
  // is reopened so the next visitor doesn't see a stale thank-you.
  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  // Auto-close after thank-you so the modal doesn't linger.
  useEffect(() => {
    if (!submitted) return;
    const t = window.setTimeout(() => onClose(), 4000);
    return () => window.clearTimeout(t);
  }, [submitted, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // v1 stub. Real submission to be wired up next pass.
    setSubmitted(true);
  };

  return (
    <div
      className="bp-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Connect with Mike"
      onClick={onClose}
    >
      <div
        className="bp-modal"
        // Stop bubbling so clicking the modal card doesn't close it.
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="bp-modal-close"
          aria-label="Close form"
          onClick={onClose}
        >
          ✕
        </button>

        {submitted ? (
          <div className="bp-modal-thanks" role="status" aria-live="polite">
            <div className="bp-modal-thanks-mark" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
                <path d="M7 12l3.5 3.5L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Thanks. We&rsquo;ll be in touch.</h3>
            <p>
              Most replies go out within one business day. This window will
              close itself.
            </p>
          </div>
        ) : (
          <>
            <div className="bp-modal-head">
              <div className="bp-modal-eyebrow">
                <span className="bar" />
                Send a note
              </div>
              <h3>Connect with Mike</h3>
              <p>
                A few details so the conversation can start with context.
                Goes straight to Mike&rsquo;s inbox.
              </p>
            </div>

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
                  Most replies in one business day.
                </span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
