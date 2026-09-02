"use client";

import { useState } from "react";

type Props = {
  /** Called when any link inside is tapped, so the parent drawer can close. */
  onLinkClick?: () => void;
};

/**
 * Mobile accordion submenu for the Services nav item.
 *
 * Sits inside the mobile drawer in HeroNav and StickyNav. Tapping
 * the chevron toggles a section that reveals the three deep service
 * pages indented beneath. Tapping the "Services" label itself still
 * navigates to /services overview. Other top-level nav items remain
 * flat — only Services has children.
 */
export default function NavServicesAccordion({ onLinkClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubLinkClick = () => {
    setIsOpen(false);
    onLinkClick?.();
  };

  return (
    <div className={`nav-services-mobile ${isOpen ? "is-open" : ""}`}>
      <div className="nav-services-mobile-row">
        <a
          href="/services"
          className="nav-services-mobile-main"
          onClick={onLinkClick}
        >
          Services
        </a>
        <button
          type="button"
          className="nav-services-mobile-toggle"
          aria-label={isOpen ? "Collapse services menu" : "Expand services menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="nav-services-chevron" aria-hidden="true">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="nav-services-mobile-sub" aria-hidden={!isOpen}>
        {/* Inner wrapper is required for the grid-template-rows: 0fr→1fr
            accordion technique. With multiple direct children, each gets
            its own auto-sized row and the collapse never reaches zero
            height. A single inner element collapses cleanly. */}
        <div className="nav-services-mobile-sub-inner">
          {/* Parent-page link at the top of the expanded section, mirroring
              the desktop dropdown's "View all services →" header so the
              services overview page is unmissable on mobile too. */}
          <a
            href="/services"
            className="nav-services-mobile-overview"
            onClick={handleSubLinkClick}
          >
            <span>View all services</span>
            <span className="nav-services-mobile-overview-arrow" aria-hidden="true">→</span>
          </a>
          {/* Same four services and same order as the desktop dropdown in
              NavServicesDropdown.tsx. Keep the two in sync. */}
          <a href="/services/strategy" onClick={handleSubLinkClick}>
            Leadership AI Enablement
          </a>
          <a href="/services/ai-training" onClick={handleSubLinkClick}>
            Team AI Training
          </a>
          <a href="/services/build" onClick={handleSubLinkClick}>
            AI Workflow Development
          </a>
          <a href="/services/managed" onClick={handleSubLinkClick}>
            Managed AI Improvement
          </a>
        </div>
      </div>
    </div>
  );
}
