"use client";

import { useState } from "react";

/**
 * Desktop hover dropdown for the Services nav item.
 *
 * Hovering the parent reveals a panel below it with the three deep
 * service pages (Build, Strategy, Managed), each with a one-line
 * description so visitors can decide where to go without first
 * landing on the /services overview. Clicking "Services" itself
 * still navigates to /services — the panel is purely additive.
 *
 * Used in both HeroNav and StickyNav. Mobile uses the sibling
 * NavServicesAccordion component instead (this one is hidden on
 * narrow viewports via CSS).
 */
export default function NavServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`nav-services ${isOpen ? "is-open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        // Close only when focus leaves the entire dropdown subtree
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
    >
      <a
        href="/services"
        className="nav-services-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Services
        <span className="nav-services-chevron" aria-hidden="true">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>

      <div
        className="nav-services-panel"
        role="menu"
        aria-hidden={!isOpen}
      >
        {/* Parent-page link at the top of the panel — explicitly signals
            that "Services" itself is a real page (the overview) and not
            just a category label for the three children below. */}
        <a href="/services" className="nav-services-overview" role="menuitem">
          <span>View all services</span>
          <span className="nav-services-overview-arrow" aria-hidden="true">→</span>
        </a>
        <div className="nav-services-divider" aria-hidden="true" />

        {/* Four services, ordered along the adoption arc: align, train,
            build, improve. Renamed from the previous three-item set when
            /services/ai-training shipped:
              AI Strategy & Training -> Leadership AI Enablement
              AI Software & Systems  -> AI Workflow Development
              Managed AI             -> Managed AI Improvement
              + Team AI Training (new route) */}
        <a href="/services/strategy" className="nav-services-item" role="menuitem">
          <span className="nav-services-item-title">
            Leadership AI Enablement
          </span>
          <span className="nav-services-item-desc">
            Align leaders on where AI fits and what moves first.
          </span>
        </a>
        <a
          href="/services/ai-training"
          className="nav-services-item"
          role="menuitem"
        >
          <span className="nav-services-item-title">Team AI Training</span>
          <span className="nav-services-item-desc">
            AI training for teams, built around real roles and work.
          </span>
        </a>
        <a href="/services/build" className="nav-services-item" role="menuitem">
          <span className="nav-services-item-title">
            AI Workflow Development
          </span>
          <span className="nav-services-item-desc">
            Custom AI software, assistants, automations, and internal tools.
          </span>
        </a>
        <a href="/services/managed" className="nav-services-item" role="menuitem">
          <span className="nav-services-item-title">
            Managed AI Improvement
          </span>
          <span className="nav-services-item-desc">
            Ongoing support and improvement after AI goes live.
          </span>
        </a>
      </div>
    </div>
  );
}
