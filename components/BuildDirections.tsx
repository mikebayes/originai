"use client";

import { useState } from "react";
import MockupBusinessApp from "./MockupBusinessApp";

/**
 * "What we build" section for /services/build.
 *
 * Interactive left-nav + right-panel pattern. Replaces the v2 4-card
 * grid 2026-05-06 per Mike's redesign brief: simpler, more
 * product-oriented, easier to scan, feels less like a service matrix
 * and more like a designed reference page.
 *
 * Desktop: left vertical nav (4 items, active state with teal bar
 * and brightened title), right detail panel showing the selected
 * item's meta + title + body + tags + a designed mockup placeholder.
 *
 * Mobile: layout collapses to a top tab strip with the detail panel
 * below it. Same interaction pattern, no accordion.
 *
 * The placeholder block in the right panel is intentional empty
 * surface for a future mockup. Treated as a designed frame with grid
 * texture + small "Build mockup" label so it reads as deliberate, not
 * broken.
 */
type Item = {
  id: string;
  num: string;
  meta: string;
  title: string;
  body: string;
  tags: string[];
  /** Optional mockup component. When present, replaces the designed
   *  placeholder frame inside .bp-directions-mockup. */
  mockup?: React.ReactNode;
};

const items: Item[] = [
  {
    id: "apps",
    num: "01",
    meta: "Internal · Operational · Process-shaped",
    title: "Custom business applications",
    body:
      "Internal tools and business applications built around how the organization actually works. Not someone else's workflow forced onto your team.",
    tags: ["Scheduling", "Approvals", "Operations"],
    mockup: <MockupBusinessApp />,
  },
  {
    id: "web",
    num: "02",
    meta: "External · Client-facing · Guided experience",
    title: "Websites and portals",
    body:
      "Customer-facing or internal web experiences that guide people through a process, deliver information clearly, or support self-serve access.",
    tags: ["Client portals", "Intake", "Self-serve tools"],
  },
  {
    id: "ai",
    num: "03",
    meta: "AI-enabled · Workflow support · Embedded",
    title: "AI assistants and agents",
    body:
      "AI embedded into real workflows to help people search, draft, troubleshoot, summarize, or complete tasks faster.",
    tags: ["Search", "Guidance", "Drafting"],
  },
  {
    id: "data",
    num: "04",
    meta: "Connected systems · Context · Infrastructure",
    title: "Data and integrations",
    body:
      "The connections and data layers that make software and AI actually useful. Systems need context, and this is often the layer that makes everything work.",
    tags: ["APIs", "Sync", "Integrations"],
  },
];

export default function BuildDirections() {
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find((i) => i.id === activeId) ?? items[0];

  return (
    <div className="bp-directions">
      {/* LEFT NAV — vertical list of 4 selectable items */}
      <div
        className="bp-directions-nav"
        role="tablist"
        aria-label="Build directions"
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`bp-directions-nav-item ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveId(item.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`bp-directions-panel-${item.id}`}
              id={`bp-directions-tab-${item.id}`}
            >
              <span className="bp-directions-nav-bar" aria-hidden="true" />
              <span className="num">{item.num}</span>
              <span className="title">{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* RIGHT DETAIL PANEL — content for the selected item */}
      <div
        className="bp-directions-panel"
        role="tabpanel"
        id={`bp-directions-panel-${active.id}`}
        aria-labelledby={`bp-directions-tab-${active.id}`}
      >
        <div className="bp-directions-meta">
          <span className="bar" aria-hidden="true" />
          {active.meta}
        </div>

        <h3 className="bp-directions-title">{active.title}</h3>

        <p className="bp-directions-body">{active.body}</p>

        <ul className="bp-directions-tags" aria-label="Examples">
          {active.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* MOCKUP — when an item supplies a mockup component, render
            that as the visible content. Otherwise fall back to the
            designed placeholder frame (corners + grid + label) so the
            empty surface still reads as deliberate. */}
        <div
          className={`bp-directions-mockup ${active.mockup ? "has-mockup" : ""}`}
          aria-hidden="true"
        >
          {active.mockup ?? (
            <>
              <div className="bp-directions-mockup-grid" />
              <div className="bp-directions-mockup-corner bp-directions-mockup-corner--tl" />
              <div className="bp-directions-mockup-corner bp-directions-mockup-corner--tr" />
              <div className="bp-directions-mockup-corner bp-directions-mockup-corner--bl" />
              <div className="bp-directions-mockup-corner bp-directions-mockup-corner--br" />
              <div className="bp-directions-mockup-label">
                <span className="dot" />
                <span>Build mockup</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
