"use client";

import { useEffect, useState } from "react";

/**
 * "Scroll to explore" indicator anchored to the bottom-center of the hero.
 * Fades out once the viewer starts scrolling. Pure CSS animation drives
 * the bouncing dot; the fade is controlled by scroll position.
 */
export default function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`scroll-indicator ${hidden ? "is-hidden" : ""}`}
      aria-hidden="true"
    >
      <span className="scroll-mouse">
        <span className="scroll-dot" />
      </span>
      <span className="scroll-label">Scroll to explore</span>
    </div>
  );
}
