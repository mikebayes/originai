# Origin AI — Brand Guide (Refresh)

This is a working brand reference for the website rebuild. The goal is continuity, not redesign. The current brand is dark, cinematic, and built around a single confident teal accent. We keep that and tighten the execution.

Hex values are extracted from the live homepage screenshots. They're close approximations. If you have a brand kit somewhere with exact tokens, swap them in.

---

## Brand at a glance

**What Origin is:** an AI services firm that strategizes, builds, and operates AI systems for mid-market and enterprise organizations. Strategy plus development plus managed operations, under one team. Not a tool reseller, not a generic consultancy, not a workshop shop. A small senior team that owns the outcome end to end.

**What the brand should feel like:** confident, calm, executive. Built for people who hold the budget and the risk. Not loud, not cute, not hype-driven. Photo-led, restrained, and serious without being stiff. Substantive: we plan it, we build it, we run it.

**What it shouldn't feel like:** a tech startup, a SaaS landing page, a workshop business, an AI hype site, a stock-photo McKinsey clone, or a freelance dev shop. Origin earns trust through tone, structure, and proof, not through density of features or jargon.

---

## Voice and tone

**Voice.** Direct, plain-language, one step ahead of the reader. Origin sounds like a senior partner who has seen this play out before, has shipped the work themselves, and is telling you the truth without selling you. No buzzwords, no "unlock potential," no AI hype.

**Tone moves.** Confident not boastful. Practical not theoretical. Specific not abstract. Calm not urgent. We deliver, not we explore.

**Sentence rhythm.** Short opening lines. Longer middle lines that explain. Short close. Avoid lists when prose works.

**Words to use:** strategy, roadmap, build, deploy, operate, deliver, working systems, ownership, governance, outcomes, results, discipline, structure.

**Words to avoid:** unlock, leverage, transform, journey, seamless, cutting-edge, revolutionary, AI-powered, supercharge, paradigm, ideate, empower (when followed by anything).

**One-liner that works:** "Turning AI ambition into working systems." This is the V1 hero promise. Sub-line: "Strategy, development, and AI solutions that deliver measurable business outcomes."

---

## Color tokens

Dark mode is the home base. The site lives on black with a single bright teal accent and a single deep forest green panel for emphasis.

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#000000` | Page background, default surface |
| `--bg-elevated` | `#0F0F0F` | Cards, principle blocks, slightly elevated panels |
| `--bg-feature` | `#134836` | The Align/Govern/Activate panel and similar feature blocks |
| `--accent` | `#3FDDC9` | Eyebrow labels, button text and outlines, link hover, small icon highlights |
| `--accent-hover` | `#5DEAD8` | Button hover state |
| `--ink` | `#FFFFFF` | Headings, primary body |
| `--ink-muted` | `#A8A8A8` | Sub copy, the second half of two-tone H2s, body inside cards |
| `--ink-subtle` | `#6B6B6B` | Captions, meta (reading time, dates), form helper text |
| `--border` | `#1E1E1E` | Hairlines, card borders, divider lines |

Adjust the teal up or down a notch if the live site reads differently to you. The forest green can also lean a touch darker (say `#0F3D2D`) if it looks too saturated next to the photography. Keep these to one decision and stay consistent everywhere.

**Light mode.** The site has no light-mode requirement today. If we ever need a light variant (for printable docs, OG images on light backgrounds, the contact page if we want it to feel different), the inversion is: `#FFFFFF` bg, `#000000` ink, same teal accent, `#F2F2F2` elevated, `#E6E8EC` borders. Don't use forest green on light, the contrast collapses.

**Accessibility.** White on `#000000` and white on `#0F0F0F` clear AAA. Teal `#3FDDC9` on black clears AAA for large text and AA for body. Muted ink `#A8A8A8` on black clears AA for body. Subtle ink `#6B6B6B` on black is for non-essential meta only, do not use it for primary copy.

---

## Typography

The current site uses a clean geometric sans throughout. The fonts aren't precious to anyone, but the rhythm works. We keep the hierarchy and pick a typographic system that ships well in code.

**Recommended pairing for the rebuild:**

- **Display + headings:** `Inter Tight` weights 500 and 700. Tight tracking, slightly narrower than Inter, reads modern without being trendy.
- **Body:** `Inter` weights 400 and 500. Same family, easy to load together, neutral and professional.
- **Mono (rare, for stat callouts or code):** `JetBrains Mono` 400.

If you want a stronger character on the H1s, `Sora` 600 is also a clean option. Pick one display family and don't mix.

**Type scale (desktop baseline):**

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 | 56-64px | 500 | 1.05 | -0.01em |
| H2 | 36-44px | 500 | 1.15 | -0.005em |
| H3 | 22-26px | 500 | 1.25 | 0 |
| Eyebrow | 13px | 500 | 1.4 | 0.02em |
| Body | 17px | 400 | 1.55 | 0 |
| Body small | 15px | 400 | 1.5 | 0 |
| Meta / caption | 13px | 400 | 1.4 | 0 |

**Two-tone heading pattern.** The current site uses a strong visual move: an H2 that's bold-white in the first half and lighter-grey in the second half. Example: `Experienced leaders` (white, 500) ` guiding practical AI adoption.` (muted, 500). Keep this. It's distinctive and sets a clear rhythm.

**Mobile.** Reduce H1 to 36-40px, H2 to 28-32px. Body stays at 16-17px.

---

## Logo

The wordmark is `ORIGIN` in a bold condensed sans, set wide across the page. It's strong as is. Do not redraw it.

**Variants needed for the new site:**

1. **White on dark** (current). Used in the top nav and footer. Source: vector SVG, not the PNG that's on the site today.
2. **Black on light**. Used for invoices, email signatures, OG images on light backgrounds, light-mode docs. Same wordmark, swap white for `#000000`.
3. **Teal on dark** (optional). For special accent placements (loading states, business cards). Use `#3FDDC9`.

**Sizing rule.** Wordmark height in the desktop nav: 24-28px. In the footer: 32-40px. In hero cards or covers: 64-96px. Keep clear space equal to the cap height of the `O` on all sides.

**Don't:**
- Stretch or compress the wordmark
- Add a tagline below it as part of the lockup (the tagline lives in the footer paragraph, not glued to the logo)
- Recolor it outside the three variants above
- Place it on busy photography without a dark scrim or high-contrast crop

If you don't have the source vector, we'll vectorize it cleanly from the existing PNG and produce all three variants as part of the build.

---

## Imagery

The strongest part of the existing brand. Keep it.

**What works (keep):**
- Cinematic photography. Cool, desaturated, slightly grainy. Misty mountain ranges, dim boardrooms, lone figure on a ridge, two-person negotiation scenes. Cool teal-grey shadows, no warm highlights, no saturated color in the source.
- Mood-lit team portraits. Three-quarter framing, dark background, single key light, neutral expressions. Continue this style for any new headshots and any new contributors.
- One image per service block, large and uncropped, sitting above the headline.

**What doesn't work (retire):**
- The cartoon AI-cloud icons in the Align / Govern / Activate panel (rocket, target, shield-checkmark sitting on cartoon clouds). They're obvious AI-generated assets and they break the cinematic tone of everything around them. Replace with simple line icons (1.5px stroke, single color) or with photographic vignettes that match the rest of the imagery.
- The decorative striped texture behind testimonial cards. Looks like filler. Drop it or replace with a real client logo if we have one.

**Image direction for new shots (if we commission any):**
- Color: cool, desaturated, single dominant teal-grey hue per frame
- Light: low-key, directional, often backlit or window-lit
- Subject: real environments (office, boardroom, landscape) over conceptual or stock-feel scenes
- Crop: wide and atmospheric, room around the subject
- Avoid: bright daylight, saturated color, smiling staged poses, fluorescent office tropes, "diverse team around a laptop" stock cliches

**Iconography (where we need icons):**
- Single-stroke line icons, 1.5px, in white or in `--accent` teal
- Source: Lucide or a custom set drawn to match
- Consistent size across a section, no mixed weights
- No color-fill icons, no emoji

---

## UI components

These are the building blocks Claude Design should use when mocking the rebuild. Same components we'll later code in the Next.js project.

### Buttons

**Primary CTA (pill, accent outline + accent text):**
- Shape: fully rounded pill, height 44px on desktop, 40px on mobile
- Fill: `--bg-elevated` (`#0F0F0F`)
- Border: `0.5px solid #3FDDC9`
- Text: `#3FDDC9`, 14px, weight 500
- Padding: 12px 22px
- Hover: text and border move to `--accent-hover` (`#5DEAD8`)

**Secondary CTA (pill, muted outline + white text):**
- Same shape and padding as primary
- Border: `0.5px solid #6B6B6B`
- Text: `#FFFFFF`
- Hover: border to `#FFFFFF`

**Inline link:** `#3FDDC9`, no underline, hover underline.

The pill shape is the brand's signature button move. Don't use squared rectangles or rounded-corner buttons (`8px radius`) anywhere. Pills only.

### Eyebrow label

Small caps-feeling label that sits above every section H2.
- 6px solid teal dot + 8px gap + 13px text in `--accent`
- Sentence case ("Our services," not "OUR SERVICES")
- Tracks slightly looser than body (`letter-spacing: 0.02em`)

### Cards

Three card variants. Same border, same radius, different fills and contents.

**Service card** (image-led):
- Fill: `--bg-elevated`
- Border: `0.5px solid var(--border)`
- Radius: 12px
- Image on top (full-bleed within the card), small label inside the image (pill-shaped, dark fill, white text), then heading + body below
- Padding inside: 24px

**Principle / problem / pillar card** (icon-led):
- Same fill, border, radius
- Icon top-left in a 32px box, then heading + body below
- Padding: 24px

**Article card** (insights):
- Same fill, border, radius
- Image on top, then title (white), reading time + date (muted) at the bottom
- Whole card is a link, hover lifts text from `--ink` to `--accent`

### Feature panel (Align/Govern/Activate)

The deep forest green panel. Use sparingly, this is a high-emphasis surface.
- Fill: `--bg-feature` (`#134836`)
- Radius: 16-20px
- Padding: 48px on desktop, 32px on mobile
- Inner content: three columns with icon + word + body, divider line below, single-line summary at the bottom

### Form inputs

The current contact form has no labels. Fix that.
- Label visible above input, 13px, `--ink-muted`
- Input height: 44px
- Background: transparent
- Border: `0.5px solid var(--border)`, `0.5px solid #6B6B6B` on focus
- Radius: 8px
- Padding: 12px 14px
- Text: 15px, `--ink`
- Error state: border `#FF5C5C`, helper text in same red below input

### Section rhythm

- Section vertical padding desktop: 120px top, 120px bottom
- Section vertical padding mobile: 64px top, 64px bottom
- Max content width: 1200px
- Side gutters desktop: 64px
- Side gutters mobile: 20px
- Three-column grids: 24px gap on desktop, stack on mobile
- Vertical gap between heading and content: 32px desktop, 24px mobile

### Navigation

- Sticky top bar, 80px tall on desktop, 64px on mobile
- Background: `#000000` with very subtle `0.5px` bottom border in `--border`
- Logo left, nav links centered or right-aligned, primary CTA pill on the far right
- Nav link text: 14px, weight 500, `--ink-muted` default, `--ink` on hover, `--accent` for the CTA
- Mobile: hamburger reveals a full-screen drawer with the same items, larger tap targets

---

## Motion (light touch)

The current site has Framer-default motion that often feels overdone. The rebuild should use motion sparingly and confidently.

- Section reveals: 200-300ms fade + 8-12px upward translate as elements enter the viewport. No staggered cascades on every section.
- Hover states: 150ms ease-out on color, no scale transforms.
- Page transitions: instant. No loading screens, no progress bars.
- The hero can carry one slow ambient motion (a very slow pan or a gentle parallax on the photo). One. Not three.

---

## What we're keeping vs evolving

**Keeping:**
- Dark mode, true black background
- Teal accent and the eyebrow + dot pattern
- Forest green feature panel
- Cinematic photography style
- Mood-lit team portraits
- Pill-shaped buttons
- Two-tone H2 pattern (white + muted grey on the same line)
- Wordmark logo

**Evolving:**
- Replacing the AI-cartoon icons in the Align/Govern/Activate block with real iconography
- Replacing the testimonial background texture with either real client logos or nothing
- Logo from PNG to SVG with three official variants
- Adding visible form labels and proper accessibility
- Tightening type scale and spacing rhythm so the site reads less like a Framer template

**Adding:**
- A consistent line-icon set
- A black-on-light logo variant
- A favicon and OG image system
- A rule for one ambient hero motion only

---

## Notes for Claude Design

When you paste this into Claude Design, lead with these three things and Claude Design will use them as anchors:

1. The site is dark mode (`#000000` base) with a single teal accent (`#3FDDC9`) and a single forest green feature panel (`#134836`).
2. The aesthetic is cinematic, photo-led, calm, and executive. Not techy, not hype, not startup.
3. Pill buttons, two-tone H2s, and eyebrow labels with a teal dot are the brand's signature visual moves. Use them everywhere they fit.

Then drop in the homepage plan and ask for mockups section by section.
