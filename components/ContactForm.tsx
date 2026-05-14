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
 * Submits to /api/contact, which forwards the message via Resend to
 * mike@originai.ca. Sender domain send.originai.ca must be verified
 * in Resend for production sends to work.
 *
 * Includes a honeypot ("website") field that real users do not see.
 * Bots typically fill every field; if "website" comes back populated
 * the server silently drops the submission.
 */
export default function ContactForm({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  // Reset form view whenever the modal is reopened.
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setSending(false);
      setErrorMessage(null);
    }
  }, [isOpen]);

  // Auto-close after thank-you so the modal doesn't linger.
  useEffect(() => {
    if (!submitted) return;
    const t = window.setTimeout(() => onClose(), 4000);
    return () => window.clearTimeout(t);
  }, [submitted, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
    };

    setErrorMessage(null);
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(
          data?.error || "Could not send your message. Please try again."
        );
        setSending(false);
        return;
      }

      setSubmitted(true);
      setSending(false);
    } catch (err) {
      console.error("Contact form submit error:", err);
      setErrorMessage(
        "Network error. Check your connection and try again."
      );
      setSending(false);
    }
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

            <form
              className="bp-contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Honeypot: hidden from real users, bots typically fill
                  it. tabIndex + aria-hidden + visually hidden via CSS
                  inline so we do not need a stylesheet update. */}
              <label
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>

              <div className="bp-contact-form-grid">
                <label className="bp-contact-field">
                  <span className="bp-contact-label">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    disabled={sending}
                  />
                </label>
                <label className="bp-contact-field">
                  <span className="bp-contact-label">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    disabled={sending}
                  />
                </label>
                <label className="bp-contact-field bp-contact-field--full">
                  <span className="bp-contact-label">Company</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    disabled={sending}
                  />
                </label>
              </div>

              <label className="bp-contact-field">
                <span className="bp-contact-label">
                  What are you working through?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  disabled={sending}
                  placeholder="A few sentences is enough. Tell us about the problem, idea, workflow, system, or AI question on your mind."
                />
              </label>

              {errorMessage && (
                <div className="bp-contact-form-error" role="alert">
                  {errorMessage}
                </div>
              )}

              <div className="bp-contact-form-actions">
                <button
                  type="submit"
                  className="pill pill-primary"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send note"}
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
