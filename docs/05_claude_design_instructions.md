# Origin AI — Claude Design Instructions

Paste this into Claude Design alongside the brand guide and homepage plan. This is the rule set that prevents Claude Design from producing a flat, templated layout.

---

## Critical rule: this site must not be flat

Flat means a clean 2D composition with no depth, no shadows, no texture, no layered light. Most templated AI-startup landing pages look flat. Stripe, Linear, Vercel, every Webflow template. Origin's stakeholders have explicitly rejected that look.

The site must feel cinematic, dimensional, and photo-led. Closer to a magazine cover or film poster than a SaaS marketing page.

If a section ends up being a clean 2-column layout with text on one side and a contained image or shape on the other, it is flat and wrong. Redesign it.

---

## What "not flat" looks like in practice

- Real photography that bleeds across the full canvas, not contained in a panel.
- Layered depth where elements sit at different distances and respond to scroll or cursor.
- Color grading, gradient washes, vignettes, and film grain on photographs.
- Dimensional UI surfaces (frosted glass, backdrop blur, semi-transparent fills, soft real shadows) instead of solid-color rectangles.
- Atmospheric overlays (fog, light leaks, soft glows) where they reinforce the mood.
- Asymmetric, sculptural compositions instead of rigid grids.

---

## Hero — locked direction

**Treatment: cinematic full-bleed.** Do not produce a 2-column hero. The photograph is the entire hero canvas, edge to edge.

**The photograph (use this exactly):** A misty mountain landscape with two small human figures standing on a rock outcropping in the lower right, looking out toward distant fog-covered peaks. Cool teal-grey palette, very desaturated, atmospheric. The figures are intentionally small. The figures' eye line goes up and to the left.

**Composition:**
- Photo bleeds the entire viewport, edge to edge.
- Headline and CTAs sit in the upper-left third, ON TOP of the photo, not beside it.
- The figures in the lower-right of the photo are looking up and toward the headline, creating an intentional eye-line composition.

**Treatments layered on the photo:**
- Teal-tinted color grade overlay (rgba(63, 221, 201, 0.10) at top-left, fading to transparent diagonally).
- Darkening gradient on the left third for headline legibility (rgba(0, 0, 0, 0.7) fading to transparent at 60% across).
- Subtle radial vignette pulling focus to the center.
- Film grain overlay (SVG noise filter, ~18% opacity, mix-blend-mode: overlay).
- One ambient motion: very slow ken-burns push on the photo.

**Headline (locked):**
> Turning AI ambition into working systems.

Two-tone treatment. White bold for "Turning AI ambition" and "working systems." Muted grey (rgba(255,255,255,0.55)) for "into."

**Sub copy (locked):**
> Strategy, development, and AI solutions that deliver measurable business outcomes.

White at 78% opacity. Single line if possible.

**CTAs (frosted glass pills, stacked vertically):**
- Primary: "Book a discovery session". Background rgba(15,15,15,0.55) with backdrop-filter: blur(8px). Border 0.5px solid #3FDDC9. Text #3FDDC9.
- Secondary: "See our services". Same fill and blur. Border 0.5px solid rgba(255,255,255,0.45). Text white.

**Top nav over the photo:**
- ORIGIN logo top-left in white.
- Links across top center or right: Services, Approach, Team, Insights.
- "Book a discovery session" pill in top-right with the same frosted-glass treatment.
- All sits over the photo with no nav background bar. Just the items floating.

**What the hero must NOT be:**
- A 2-column layout with text left and a photo or shape on the right.
- A clean rectangle of photo with text below or beside it.
- A symmetrical centered headline with the photo as a faint background.
- Any composition where the photo is contained in a labeled image area.

---

## Apply the same rules across every section

Every section below the hero should obey the same dimensional rules. Photos bleed. Cards have real shadows and depth. Sections use atmospheric color, not flat solid fills. The page should feel like a sequence of cinematic scenes, not a stack of bento boxes.

Specific moves to keep the page dimensional:

- **The framework panel** (Align / Govern / Activate) sits on the deep forest green (#134836) with a subtle inner gradient and a soft outer glow, not a flat rectangle.
- **Service cards** have real photography on top that breathes outside the card edge slightly, with text below sitting on dark glass.
- **The Proof section** uses client wordmarks set in white, but the surface around them should have atmospheric depth (subtle radial light, faint grain, not pure flat black).
- **The team teaser** uses portrait thumbnails with vignetted edges that fade into the page background, not hard-edged rectangles.
- **The final CTA** sits over a second cinematic image (different from the hero) with the same color grade and grain treatment.

---

## What a flat result looks like (so we can call it out)

If the mockup that comes back has any of these, ask Claude Design to redo it:

- A 2-column hero with a contained image on the right
- Solid-color section backgrounds with no atmospheric texture
- Cards with hard rectangular edges and flat fill colors
- Clean geometric shapes (circles, squares) used as visual elements
- Pure white or pure black backgrounds with nothing sitting on them
- Symmetrical centered layouts repeated section after section

---

## Order of work in Claude Design

1. Paste this doc.
2. Paste the brand guide.
3. Paste the homepage plan v2.
4. Upload the hero photo (`assets/images/main_hero_2048_11118.png`).
5. Ask Claude Design to mock the hero only first, full-bleed cinematic per the locked direction above.
6. Iterate the hero until it lands.
7. Move to section 2 (the problem section), then section 3 (framework), and so on.
8. Each section gets its own mockup. Don't ask for the whole page at once.

If Claude Design's first hero is flat, paste back: "This is flat. The photo needs to bleed the entire canvas, no 2-column layout, no contained image panel. The headline sits on top of the photo, not beside it. Re-read the not-flat rules."
