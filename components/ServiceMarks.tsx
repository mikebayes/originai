/**
 * Draft services hub: shared service card marks.
 *
 * Extracted from components/draft/DraftServices.tsx (the draft homepage
 * services section) so the hub page and the homepage use identical
 * geometry for the same four services. Previously the hub had a large
 * framed image band per card, which pushed each title roughly 400px down
 * and meant only two cards were visible on a desktop screen. A services
 * hub needs to be scannable, so the art is now a small inline mark.
 *
 * Hairline geometry only. No icons, no photography, no dashboards.
 */

/* Leadership: four points converging on one. Alignment. */
function MarkAlign() {
  return (
    <svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <circle cx="6" cy="8" r="2" className="dh-mk-dot" />
      <circle cx="6" cy="20" r="2" className="dh-mk-dot" />
      <circle cx="6" cy="32" r="2" className="dh-mk-dot" />
      <path d="M8 8 L32 20" className="dh-mk-line" />
      <path d="M8 20 L32 20" className="dh-mk-line" />
      <path d="M8 32 L32 20" className="dh-mk-line" />
      <circle cx="35" cy="20" r="3" className="dh-mk-node" />
      <path d="M38 20 L58 20" className="dh-mk-line-strong" />
    </svg>
  );
}

/* Team: a roster of rows gaining definition left to right. */
function MarkRoster() {
  return (
    <svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <path d="M4 8 L26 8" className="dh-mk-line" />
      <path d="M30 8 L48 8" className="dh-mk-line-strong" />
      <path d="M4 20 L20 20" className="dh-mk-line" />
      <path d="M24 20 L54 20" className="dh-mk-line-strong" />
      <path d="M4 32 L32 32" className="dh-mk-line" />
      <path d="M36 32 L44 32" className="dh-mk-line-strong" />
      <circle cx="58" cy="8" r="2" className="dh-mk-dot" />
      <circle cx="58" cy="20" r="2" className="dh-mk-dot" />
      <circle cx="48" cy="32" r="2" className="dh-mk-dot" />
    </svg>
  );
}

/* Workflow: nodes and connectors. The reduced trace of the old mock. */
function MarkFlow() {
  return (
    <svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <rect x="4" y="14" width="12" height="12" rx="2" className="dh-mk-box" />
      <path d="M16 20 L26 20" className="dh-mk-line-strong" />
      <rect x="26" y="6" width="12" height="10" rx="2" className="dh-mk-box" />
      <rect x="26" y="24" width="12" height="10" rx="2" className="dh-mk-box" />
      <path d="M38 11 L48 20" className="dh-mk-line" />
      <path d="M38 29 L48 20" className="dh-mk-line" />
      <circle cx="52" cy="20" r="3.5" className="dh-mk-node" />
    </svg>
  );
}

/* Managed: a stepped line continuing past the frame. Ongoing. */
function MarkSteps() {
  return (
    <svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <path
        d="M4 32 L16 32 L16 24 L28 24 L28 16 L40 16 L40 10 L52 10"
        className="dh-mk-line-strong"
      />
      <circle cx="16" cy="32" r="1.8" className="dh-mk-dot" />
      <circle cx="28" cy="24" r="1.8" className="dh-mk-dot" />
      <circle cx="40" cy="16" r="1.8" className="dh-mk-dot" />
      <circle cx="52" cy="10" r="3" className="dh-mk-node" />
      <path d="M56 10 L62 10" className="dh-mk-line" strokeDasharray="2 3" />
    </svg>
  );
}

export { MarkAlign, MarkRoster, MarkFlow, MarkSteps };
