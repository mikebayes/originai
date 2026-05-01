/**
 * Hero → Trio bridge.
 *
 * Sits between the V2 hero and the trio section as a deliberate
 * transition piece. Two thin teal hairlines flanking a small pulsing
 * pill that says "What we do" — quietly announces the section change
 * without breaking the page rhythm with a hard divider.
 *
 * Spec from claude_design_files (hero-bridge.md). Aria-hidden because
 * it's purely decorative; the next section's eyebrow/H2 carries the
 * actual heading semantics.
 */
export default function ServicesV2HeroBridge() {
  return (
    <div className="hero-bridge" aria-hidden="true">
      <div className="hero-bridge-inner wrap">
        <span className="hb-rule" />
        <span className="hb-marker">
          <span className="hb-dot" />
          <span className="hb-label">What we do</span>
        </span>
        <span className="hb-rule" />
      </div>
    </div>
  );
}
