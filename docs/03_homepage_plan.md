# Origin AI — Homepage Plan (v2)

This is the brief for rebuilding the homepage. It pairs with the brand guide and the sitemap, and is meant to be pasted into Claude Design (or referenced when prompting it section by section).

**v2 changes:** Origin's positioning has shifted from "AI leadership advisor" to "AI services firm that strategizes, builds, and operates." New headline, new sub, new service line, new sitemap. The brand visual system (dark mode, teal accent, cinematic photography) stays. The voice tightens to match.

---

## Goals for the homepage

1. Make a clear promise in under three seconds: Origin turns AI ambition into working systems.
2. Earn trust quickly with one sharp framework (Align / Govern / Activate) and real proof (named clients).
3. Funnel the right person to the right next step: a discovery session, the services page, or insights.
4. Get out of the way. The current page is a 12-section scroll. The new one is 8 sections, tighter, faster, more confident.

---

## Audience and intent

**Primary reader:** a senior decision-maker at a mid-market or enterprise organization (CEO, COO, CIO, VP-level). They've been told to "do something with AI." They have ambition but no working systems. They have three minutes and a healthy skepticism.

**What they need from the page in priority order:**
1. Confidence that Origin builds, not just talks.
2. A simple framework for thinking about AI in their organization.
3. Proof that other people like them have worked with Origin successfully.
4. A clear, low-friction next step: a discovery session.

**Secondary reader:** an HR or learning leader scoping team enablement, or an operations leader scoping a managed AI engagement. They want to see services depth and process signals.

**What they don't need:** a tour of every Origin capability, an explainer of what AI is, generic "AI is changing everything" preamble.

---

## New page structure

```
1. Hero                       (new headline + sub, asymmetric layout)
2. The problem                (keep, tighten)
3. The framework: A/G/A       (keep, replace cartoon icons, tie to new services)
4. Services overview          (NEW services line, condense, link to /services)
5. Proof                      (NEW: client wordmarks + 2 testimonials)
6. About teaser               (NEW: 3 cards linking to /team, /approach, /principles)
7. Insights                   (keep, link to /insights)
8. Final CTA + Footer         (CTA: "Book a discovery session", fix duplications)
```

---

## Section by section

### 1. Hero

**The headline (locked):**
> Turning AI ambition into working systems.

**The sub (locked):**
> Strategy, development, and AI solutions that deliver measurable business outcomes.

**Layout:**
- Left third holds eyebrow (optional), H1, sub, two pill CTAs.
- Right two-thirds holds a single cinematic photograph in the brand's cool teal-grey palette.
- Asymmetric. The current Framer layout is dead-center symmetrical. Move off it.

**CTAs:**
- Primary: `Book a discovery session` → /contact
- Secondary: `See our services` → /services

**Imagery direction (v1 = still photo):**
- Subject should connect to the new positioning: building, deploying, working systems. Not just "executive at window."
- Three good directions:
  - A small group around a screen mid-build, low light, focused. Reads as "we ship."
  - A single operator at a workstation, dim office, multiple monitors. Reads as "we operate."
  - A leadership team in a strategy session with whiteboards or notes visible, dim. Reads as "we plan, then ship."
- Color treatment stays cool teal-grey, desaturated, slightly grainy. No bright daylight, no smiling staged shots, no stock-photo "diverse team around a laptop."
- Avoid the misty-mountain photo we have now. It's atmospheric without being specific to the work.

**Motion:**
- One ambient layer only. Slow ken-burns push on the photo, or none. Drop "Scroll to explore" microcopy.

**Visual notes for Claude Design:**
> Hero, dark mode, true black canvas. Left third holds an H1 ("Turning AI ambition into working systems."), one-line sub-copy in muted grey ("Strategy, development, and AI solutions that deliver measurable business outcomes."), and two pill buttons (primary: teal outline + teal text on dark fill, "Book a discovery session"; secondary: muted outline + white text, "See our services"). Right two-thirds is a single cinematic photograph of people building or deploying, dim office or workspace, desaturated cool teal-grey palette, no smiling, no stock-feel. Composition is asymmetric. Use brand guide tokens. Suggest one ambient motion (very slow ken-burns push on the photo).

---

### 2. The problem

**What's there now:** "AI Adoption Is Moving. Leadership Structure Isn't." Three problem cards: Shadow AI, Unclear Policy, No Ownership.

**What changes:**
- New H2 to match the new positioning: **"AI ambition is everywhere. Working systems aren't."** (Or keep the old line, both work. The new line ties directly to the hero.)
- Replace cartoon-cloud icons with line icons (1.5px stroke, single color).
- Tighten card body to one sentence each.

**Proposed card copy:**
- **Shadow AI across departments.** Tools are in use everywhere with no shared standards or oversight.
- **Pilots that never become systems.** Teams experiment, momentum stalls, value never lands.
- **No defined ownership.** Initiatives drift because no one owns the outcome.

(Note the middle card is reframed from "Unclear Policy & Guardrails" to "Pilots that never become systems," which lands more directly on the new positioning. The old version still works if you want continuity, your call.)

---

### 3. The framework: Align / Govern / Activate

**What's there now:** Forest green panel with three columns (Align, Govern, Activate), each with a cartoon-cloud icon, a one-liner, and a closing line.

**What changes:** Keep the framework, it's strong ownable IP. Tie each pillar to the new services line so the framework and the offering reinforce each other.

**Proposed copy refinement:**

| Pillar | Old blurb | New blurb (ties to services) |
|---|---|---|
| Align | Define AI direction, leadership intent, and measurable business outcomes. | We build the roadmap. Where AI fits, what it should solve, and how to sequence the work. |
| Govern | Establish practical guardrails, policy, and clear decision ownership. | We hold the line. Policy, oversight, and decision ownership so adoption stays disciplined. |
| Activate | Prioritize initiatives and drive disciplined, results-focused execution. | We ship the systems. AI solutions developed, deployed, and operated to deliver real outcomes. |

Closing line stays: "This structure underpins every engagement we lead."

**Icon replacements:** drop the cartoon-cloud trio. Use simple 1.5px line icons (e.g., compass for Align, shield for Govern, arrow-target or bolt for Activate).

---

### 4. Services overview (NEW services line)

**What's there now:** Three image-led blocks with three-paragraph descriptions of the old services.

**What changes:** New service line, condensed to one image plus one-line promise per card. Centerpiece (AI Solutions & Development) gets visual weight.

**Proposed structure (three cards across):**

| Service | One-line promise | Link |
|---|---|---|
| AI Opportunity & Roadmap | We map where AI fits, what to build first, and how to sequence the work. | /services#opportunity |
| **AI Solutions & Development** *(centerpiece)* | We design, build, and deploy custom AI solutions that solve real business problems. | /services#solutions |
| Managed AI | We operate, monitor, and improve AI systems so they keep delivering value. | /services#managed |

**Visual treatment:**
- Three cards in a row on desktop, stacked on mobile.
- Centerpiece card slightly larger or visually weighted (badge: "Centerpiece" or "Most popular," or just a 2px teal border instead of 0.5px).
- Each card has a cinematic photo on top, small badge label inside the photo (e.g., "Strategy," "Build," "Operate"), then title and one-liner below.
- "Learn more →" link in `--accent` teal at the bottom of each card.

**Section eyebrow:** Our services
**Section H2:** From AI ambition to AI in production. We cover the full path.

---

### 5. Proof (NEW)

**What's there now:** Four generic checkmark items ("Leadership aligned on how AI supports the business," etc.).

**What changes:** Replace with actual proof. Two pieces:

**5a. Client wordmark row.** Four company names set in clean white type, evenly spaced across the row. v1 recommendation is wordmarks (not logos with glyphs) because the four available logos use colors that fight our brand teal and would create visual noise on a dark site. Wordmark approach is faster to ship, permission-safe, and reads more confident.

If you want logo glyphs later, we'd need either single-color white versions from the clients or written permission to recolor.

**Proposed wordmark row:**
> Tripwire Media Group · Direct Focus · Thor Plumbing & Heating · Equipco Ltd.

(Set in white at consistent height, or in `--ink-muted` with a light underline on hover if any link to case studies.)

**5b. Two testimonials inline.** Drop the carousel. Two strongest existing quotes displayed at full size, side-by-side or stacked.

**Proposed testimonials to feature:**
- **Doug Darling, CEO, Tripwire Media Group** — "Origin shifted the way our team thinks. They taught us how to frame problems in a way that unlocks better solutions. That shift alone has changed how we operate."
- **Keith Nyman, VP Operations, Direct Focus** — "After two workshops with Origin, our team felt noticeably more confident using AI. The mindset shift paid off immediately, with staff identifying and building valuable use cases on their own."

**Section eyebrow:** Proof
**Section H2:** Leadership teams trust us with their AI direction.

---

### 6. About teaser (NEW)

**What's there now:** Three separate sections (Approach, Team, Principles) consuming half the homepage scroll.

**What changes:** Combine into a single teaser block with three small cards, each linking to its dedicated page.

**Proposed structure:**

> Eyebrow: Who we are
> H2: A small senior team that strategizes, builds, and operates AI systems with you.
> Sub: We're not a tool reseller, we're not a generic consultancy, and we don't hand off the build. We're the team that owns the outcome end to end.

Three small cards in a row:
- **The Team.** Three portrait thumbnails + a "Meet the team →" link to /team
- **Our Approach.** Brief paragraph + "How we work →" link to /approach
- **Our Principles.** Brief paragraph + "What we believe →" link to /principles (or fold into /approach if you keep it that way)

Each card uses the standard card pattern from the brand guide.

---

### 7. Insights

**What's there now:** Three article cards. Currently a duplicate fourth card sneaks in (Framer artifact). Otherwise clean.

**What changes:**
- Drop the duplicate fourth card.
- Add a "View all insights →" link below the row.
- Show author byline on each card (Mike Bayes / Chad Beauchamp).

**Proposed structure:**
> Eyebrow: Insights
> H2: The latest from Origin.
> [3 cards, each: image, title, author, reading time, date]
> View all insights →

---

### 8. Final CTA + Footer

**Final CTA:**
> H2: Ready to put leadership and execution behind your AI.
> Sub: Start with a 30-minute discovery session. We'll tell you where you are, where you should go, and what's in the way.
> Button: `Book a discovery session` → /contact

**Footer (sitewide):**
- Logo (white-on-dark variant, SVG)
- Tagline: "Take your AI evolution to the next level with Origin Artificial Intelligence." (Or update to: "Strategy, development, and AI solutions for organizations ready to ship.")
- Three columns desktop:
  - Column 1: Logo + tagline + LinkedIn link
  - Column 2: Sitemap (Home, Services, Team, Approach, Insights, Contact)
  - Column 3: Office address, email (info@originai.ca, fix the typo on /contact), phone +1 (204) 515 1415
- Bottom strip: Copyright Origin AI Inc. + Privacy Policy link + Terms link
- Render once, not three times. The current site has a Framer rendering bug with the footer.

---

## What's moving off the homepage

| Old section | New home |
|---|---|
| Approach (Mindset/Capability/Application) | /approach |
| Team grid (full version) | /team |
| Principles (4 cards) | /principles (or /approach if folded) |
| FAQ accordion | /services (bottom of page) |
| Long service descriptions | /services with three anchored sections |
| Testimonial carousel | Folded into Proof section, full version on /team or future /testimonials page |

---

## Hero rework, in detail

This was the section you flagged as feeling wrong. Here's the revised brief now that headline and positioning have changed.

**Why the current hero doesn't work:**
1. Mountain photo is atmospheric but not specific. It says nothing about Origin or AI.
2. Centered layout reads as a Framer template default.
3. Old headline ("AI Leadership that Turns Strategy into Business Results") was advisor-only positioning. New one is broader.
4. "Scroll to explore" microcopy is filler.

**Direction for the new hero:**
- **Photography:** specific to the new positioning. People building, deploying, or operating AI systems. Boardroom strategy session, small team at a screen, single operator at multiple monitors. Cool teal-grey desaturation, low light, slightly grainy.
- **Layout:** asymmetric. Left third holds H1 + sub + CTAs. Right two-thirds holds the photo, full bleed.
- **Motion:** one ambient layer max. Slow ken-burns or nothing.
- **Copy:**
  - H1: Turning AI ambition into working systems.
  - Sub: Strategy, development, and AI solutions that deliver measurable business outcomes.
  - Primary CTA: Book a discovery session.
  - Secondary CTA: See our services.

**Prompt for Claude Design:**
> Design a homepage hero for Origin AI. Dark mode, true black background. Left third holds an H1 ("Turning AI ambition into working systems."), a one-line sub-copy in muted grey ("Strategy, development, and AI solutions that deliver measurable business outcomes."), and two pill buttons stacked vertically: primary is teal outline + teal text on dark fill, label "Book a discovery session"; secondary is muted outline + white text, label "See our services". Right two-thirds is a single large cinematic photograph showing people building or deploying AI systems in a dim office or workspace, desaturated cool teal-grey palette, no smiling staged shots, no stock-photo feel. Composition is asymmetric. Use the brand guide tokens for color and type. One ambient motion suggestion (very slow ken-burns push on the photo).

---

## Locked decisions (from your answers)

1. ✅ **Hero v1: still photo, not video.** Speed to launch. Video can be a v2 enhancement.
2. ✅ **Client logos uploaded.** v1 will use wordmarks (white type, no logo glyphs) in the Proof row. Logos can be revisited in v2 with single-color treatments or client-supplied versions.
3. ✅ **About splits into separate pages.** /team, /approach, and /principles each get their own URL. Principles can fold into /approach if it ends up sparse.
4. ✅ **Services structure.** One /services page with three anchored sections. New service names: AI Opportunity & Roadmap, AI Solutions & Development (centerpiece), Managed AI.
5. ✅ **FAQ.** Lives on /services, anchored at the bottom.
6. ✅ **No CMS for /insights.** Manual MDX or HTML pages, you publish via Claude Code. Sitemap doc covers the publish flow.
7. ✅ **CTA.** "Book a discovery session" everywhere a primary action lives.

---

## How to use this with Claude Design

1. Open the brand guide. Paste it. Confirm Claude Design will use those tokens.
2. Paste this homepage plan.
3. Mock section 1 (the hero) first. Iterate until you love it.
4. Move section by section through 2 through 8.
5. Once each section reads right in isolation, ask for the assembled homepage view.

Don't ask Claude Design to mock the entire homepage in one shot. Section by section keeps the quality high.

When the mockups are approved, send them back here and I'll scaffold the Next.js project, wire up GitHub and Vercel, vectorize the logos to SVG, and start building.
