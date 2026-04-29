# Origin AI — Site Audit & Rebuild Brief

Source: https://www.originai.ca/ (current Framer build)
Captured: 2026-04-28
Purpose: foundation for rebuilding the site in code (Next.js → GitHub → Vercel), with a clean inventory of what exists, what works, and what should change.

---

## 1. Information Architecture

### Live URL map

| URL | Page | Type | Notes |
|---|---|---|---|
| `/` | Home | Long single page | Most of the marketing lives here, anchored by hash links |
| `/contact` | Contact | Standalone | Hero + office + form |
| `/insights` | Insights index | Listing | 3 cards today, no categories or tags |
| `/insights/human-centric-ai-why-adoption-matters-more-than-automation` | Article | Blog post | Author Mike Bayes, Dec 12, 2025 |
| `/insights/from-curiosity-to-capability-how-teams-actually-learn-to-use-ai` | Article | Blog post | Author Chad Beauchamp, Nov 28, 2025 |
| `/insights/business-first-technology-second.-a-smarter-way-to-adopt-ai` | Article | Blog post | Author Mike Bayes, Nov 17, 2025. URL has a stray period. |

### Primary nav (desktop)

`Our Team` (#our-team) · `Services` (#services-2) · `Testimonials` (#testimonials) · `Insights` (/insights) · `Get Started` (/contact, button)

### Secondary nav (mobile)

`About` (#our-team) · `Testimonials` (#testimonials) · `FAQ` (#services-2) · `Insights` · `Get Started`

Inconsistencies worth flagging:
- Mobile nav uses `About` and `FAQ`, desktop uses `Our Team` and `Services`. Same anchors, different labels.
- The `#services-2` anchor is labeled `Services` on desktop and `FAQ` on mobile but actually scrolls to a section that contains both services and FAQ in a stacked block. The naming is muddled.
- Logo links to `#hero` on most pages and to `/` from the footer. Both should normalize to `/` for the rebuild.
- Article "Previous" links sometimes point at `/insights/:tG9AbZrun`, which looks like an unresolved Framer template token. Broken link.

### Page hierarchy (recommended for rebuild, see section 5)

```
/
├── /services            (break out of long home page)
├── /about               (team + principles + approach)
├── /insights
│   └── /insights/[slug]
└── /contact
```

---

## 2. Page-by-page Content Inventory

### 2.1 Home (`/`)

**Hero**
- H1: `AI Leadership that Turns Strategy into Business Results`
- Sub: `We serve as your AI leadership partner, defining direction, aligning executives, and ensuring disciplined execution across your most important initiatives.`
- Primary CTA: `Request an AI Leadership Briefing` → `/contact`
- Secondary CTA: `Explore our Services` → `/contact` (mismatched, should anchor to services)
- Microcopy: `Scroll to explore`
- Hero image: `bE0qdqHMowbeEaJTR8py2NY8M8.png` (large hero illustration)

**Section: AI Adoption Is Moving. Leadership Structure Isn't.**
- Lead: `AI tools are spreading across teams. Without executive direction and governance, adoption becomes fragmented, inconsistent, and risky.`
- Three problem cards, each with icon + heading + body:
  1. `Shadow AI Across Departments` — AI tools are being used across teams without clear oversight or shared standards.
  2. `Unclear Policy & Guardrails` — AI use is expanding without defined standards, risk controls, or decision ownership.
  3. `No Defined AI Ownership` — AI initiatives lack clear executive accountability, slowing progress and increasing risk.

**Section: AI Needs Structure to Deliver Results**
- Lead: `AI is not an IT project or a collection of tools. It is a leadership responsibility. We work with executives to define direction, establish governance, and ensure disciplined execution across the organization.`
- Three pillar cards (Align / Govern / Activate):
  1. `Align` — Define AI direction, leadership intent, and measurable business outcomes.
  2. `Govern` — Establish practical guardrails, policy, and clear decision ownership.
  3. `Activate` — Prioritize initiatives and drive disciplined, results-focused execution.
- Footer line: `This structure underpins every engagement we lead.`

**Section: Our Services**
- H2: `We move teams from AI curiosity to confident use through leadership alignment, team enablement, and hands-on execution.`
- Three service blocks, each with image + heading + 3-line body:
  1. `AI Strategy and Readiness` — Alignment, priorities, and direction for leadership teams. We help executives and senior leaders understand what AI can and cannot do, assess organizational readiness, and make informed decisions about where AI fits into the business. This work focuses on strategy, priorities, risk, governance, and sequencing, so organizations move forward with confidence instead of reacting to hype.
  2. `AI Training and Enablement` — Hands-on training that helps teams use AI in real work. We work directly with managers and teams to build real, day-to-day capability with AI. Sessions are hands-on, team-based, and focused on real work, real workflows, and immediate productivity gains. The goal is not awareness. It is adoption. Teams leave with practical skills they can apply immediately.
  3. `AI Advisory, Delivery & Implementation` — Ongoing support to turn strategy into working solutions. Once priorities are clear, we provide advisory and delivery support to help organizations turn plans into working solutions. This may include AI roadmapping, governance and policy development, workflow design, solution selection, and implementation support. We stay involved to ensure AI is adopted responsibly, effectively, and in a way that delivers real business value.

**Section: The Results**
- H2: `After working with Origin, organizations typically see:`
- Four checkmark items (same icon repeated):
  - Leadership aligned on how AI supports the business
  - Clear next steps instead of open-ended experimentation
  - Teams using AI consistently in day-to-day work
  - Confidence replacing uncertainty around AI adoption

**Section: Our Approach**
- H2: `Human-centric AI adoption, built for real teams. We help leaders and teams develop the mindset, confidence, and practical skills to use AI responsibly in their day-to-day work.`
- Three numbered steps:
  1. `Mindset` — We help leaders and teams understand what AI is, what it is not, and how it fits into real work, not hype or theory.
  2. `Capability` — We build hands-on skills and usage patterns so people can confidently apply AI in their own roles.
  3. `Application` — We turn understanding into practical workflows that improve productivity, decision-making, and execution.
- Note: this block is rendered three times in the source (likely a Framer responsive variant artifact). Dedupe in rebuild.

**Section: Our Leadership Team** (`#our-team`)
- H2: `Experienced leaders guiding practical AI adoption.`
- Three team cards (image + name + title + bio):
  1. `Mike Bayes` — President & Lead AI Consultant. Mike helps teams figure out how AI fits into their everyday work, with a focus on practical use and real adoption.
  2. `Chad Beauchamp` — Co-Founder & CEO. Chad helps shape strategy at Origin and works with clients to define how AI supports their business.
  3. `Taylor Crawford` — Co-Founder & Consultant. Taylor leads business development and strategic partnerships at Origin.

**Section: Our Principles**
- H2: `Principles that guide every Origin engagement.`
- Four principle cards (icon + heading + body):
  1. `Real Work. Real Outcomes.` — We cut through the noise and focus on what delivers measurable results, fast.
  2. `Business first, technology second` — We start with your goals, people, and processes. AI serves the business, not the other way around.
  3. `Adoption before automation` — AI only delivers value when people use it. Training, confidence, and change management come first.
  4. `Trust built in by design` — Security, data boundaries, and responsible use are considered from day one, not added later.

**Section: Insights** (`#insights` preview)
- H2: `The latest insights from Origin`
- Three article cards (preview of /insights). Fourth card is a duplicate of the first, likely a Framer carousel artifact.

**Section: Testimonials** (`#testimonials`)
- H2: `What others say about their experience`
- Carousel of four quotes (rendered 6+ times in source, also a Framer artifact):
  1. `Doug Darling`, CEO, Tripwire Media Group — Origin shifted the way our team thinks. They taught us how to frame problems in a way that unlocks better solutions. That shift alone has changed how we operate.
  2. `Keith Nyman`, VP Operations, Direct Focus — After two workshops with Origin, our team felt noticeably more confident using AI. The mindset shift paid off immediately, with staff identifying and building valuable use cases on their own.
  3. `Justin T.`, President, Thor Plumbing & Heating — Working with Origin changed how we think about AI. It made the whole thing feel more approachable and less overwhelming, and our team came away with a much better sense of where it actually fits in our day-to-day work.
  4. `Ryan B.`, Partner, Equipco. Ltd. — Working with Origin gave me space to step back and think more clearly about where AI fits at a leadership level. It helped me ask better questions and feel more confident about the direction we're heading, without feeling rushed into the wrong decisions.
- Each testimonial has a background image `C9J9fRIwfkBpMsRcpu45gI0V8.png`. Unclear if these are real client logos or a single decorative texture.

**Section: FAQ** (`#services-2`, mislabeled anchor)
- H2: `Your questions, answered with clarity`
- Eight collapsed questions (no answers exposed in the markup we can pull, they're rendered behind accordion state):
  1. How do we get started with Origin AI?
  2. Do we need advanced technical infrastructure or clean data to begin?
  3. What types of organizations do you work with?
  4. Is Origin AI a consulting firm or a training company?
  5. How quickly should we expect to see results?
  6. How do you ensure our team actually adopts AI tools?
  7. Do you train on specific AI tools like ChatGPT or Copilot?
  8. What does success look like after working with Origin?
- Action item: pull the answers from Framer (or rewrite them) before the rebuild ships. Currently we only have the questions.

**Section: Final CTA**
- H2: `Ready to begin your AI Evolution journey?`
- Sub: `Let's start with a quick chat to see if there is a fit.`
- CTA: `Start with an AI Readiness Session` → `/contact`
- Background image: `g3k8B0aD1wU1U9thWZhKy9k6No.png`

**Footer (sitewide)**
- Logo
- Tagline: `Take your AI evolution to the next level with Origin Artificial Intelligence.`
- Copyright: `Origin AI Inc.`
- Office address: `315 Pacific Avenue, Winnipeg, MB R3A 0M2, Canada`
- Email: `info@originai.ca`
- Phone: `(204) 515-1415` (linked as `tel:+12045151415`)
- No social links, no legal pages (privacy / terms), no sitemap.

---

### 2.2 Contact (`/contact`)

- H1: `Get in touch with us`
- Sub: `We're here to help and answer any questions you may have.`
- Office block: `315 Pacific Avenue, WINNIPEG · MB · R3A 0M2, Canada`
- Contact block: `Call or email, anytime!` `P: +1 (204) 515 1415` `E: info@originai.ca` (the page text shows `info@origin.ca` once, that's a typo in the live site)
- Form block heading: `After you submit the form, our team will reach out to you as quickly as possible.`
- Form fields: `First name`, `Last name`, `Email`, `Phone`, `Subject` (select with options: AI training, AI Development, AI Strategy, AI Integration, Other), `Your message`
- Submit button: `Submit`
- No privacy / consent checkbox, no spam protection visible.

---

### 2.3 Insights index (`/insights`)

- H1: `Big ideas in the world of AI evolution.`
- Sub: `We help organizations move beyond the hype and turn AI into a competitive edge through practical training, consulting, and hands-on execution that makes teams smarter, faster, and future-ready.`
- Microcopy: `Scroll to explore`
- Hero image (same as homepage hero)
- Section H2: `The latest from Origin`
- Three article cards, each: image, title, reading time, date.

---

### 2.4 Article template (`/insights/[slug]`)

Pattern is consistent across the three live posts:
- Crumb-ish header: `Blog Articles`
- Back link: `Back to blogs` → `/insights`
- Meta block: `Reading time`, `Date`, `Written by`
- Author avatar image
- H1 (title) — duplicated in the markup (likely a Framer responsive artifact)
- Lede paragraph
- Hero illustration (duplicated in markup)
- Body: 5-7 H3 subheadings + paragraphs
- Closing paragraph from Origin AI's voice
- Pager: `Previous` / `Next` (broken on at least one post — points at `/insights/:tG9AbZrun`)

Authors used: `Mike Bayes`, `Chad Beauchamp`. Taylor not yet credited.

---

## 3. Brand Tokens

I can read copy and structure from the markup, but Framer doesn't expose a clean design-token export to a fetch. The values below are inferred from imagery cues and standard Framer defaults. Mark anything you want hardened against your existing brand kit before we lock these in.

### Colors (proposed, please confirm)

Origin's logo and imagery read as a clean, professional, slightly cool palette. Recommended starting tokens:

| Token | Proposed | Use |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-soft` | `#F6F7F9` | Section bands, card backgrounds |
| `--color-ink` | `#0F1115` | Body text, H1/H2 |
| `--color-ink-muted` | `#5B6472` | Sub-copy, captions |
| `--color-accent` | TBD from logo | Buttons, links, accent shapes |
| `--color-accent-ink` | `#FFFFFF` | Text on accent |
| `--color-border` | `#E6E8EC` | Hairlines, card borders |
| `--color-success` | `#10B981` | Result checkmarks |

**Action:** send me the brand color hex codes you used in Framer (or the source file from your designer) and I'll lock the palette. Without it I'll match what's visible from the live site once we render it locally.

### Typography (proposed)

The current site reads as a modern geometric sans for headings with a humanist sans for body. Two reasonable, royalty-free choices that pair well:

- Headings: `Inter`, `Geist`, or `Sohne` if licensed. Start with **Inter Tight** (weights 600/700) on the rebuild.
- Body: **Inter** (weights 400/500), 16-17px base, 1.55 line height.
- Numerals: tabular for stats / phone numbers.

If your existing site uses something specific (Framer often defaults to Inter), keep it for continuity. Otherwise Inter Tight + Inter is a safe, fast-loading default.

### Logo treatment

- Wordmark + mark, currently served as a single PNG (`LKQOasBlptKM6btiuHMWjV7tw.png`, 633×165).
- Rebuild should use SVG for the logo (sharper, smaller, theme-friendly).
- Need a one-color light variant and a one-color dark variant for footer / dark sections.

### Imagery style

Two distinct image families on the site:
1. **Stylized illustrations** for hero, services, approach, and CTA sections — soft-render, semi-3D, muted palette, abstract office/concept scenes.
2. **Iconography** for problem cards, pillar cards, and principles — flat, single-tone, geometric.

The team headshots are full-body / mid-length stylized portraits, not photographic. They feel intentional and cohesive with the illustrations.

For the rebuild, I'd recommend:
- Keep the illustration style. It's the strongest visual signature on the site.
- Move icon set to a consistent SVG library (Lucide or a custom set drawn to match) so colors and sizes scale cleanly.
- Re-export team portraits at 2x with consistent crop and background treatment.

---

## 4. Component Patterns

Catalog of reusable components that will become a component library in the codebase.

### Section header
- Eyebrow (small caps or muted label): `Our Services`, `The Results`, `Our Approach`, `Our Leadership Team`, `Our Principles`, `Insights`, `Testimonials`, `FAQ`
- H2 below it
- Optional supporting paragraph

### Cards
- **Problem card**: square icon, H6 heading, 1-2 line body. White or near-white surface, subtle border or shadow.
- **Pillar card**: small icon, large H1-style word (`Align`, `Govern`, `Activate`), short body. Visually heavier than other cards.
- **Service card**: large illustration on top, eyebrow title, longer body. Three of these stacked vertically with strong section rhythm.
- **Principle card**: large round icon (256×256), H3, short body.
- **Team card**: portrait, name, title, bio.
- **Testimonial card**: quote, name, role, company, decorative background image.
- **Article card**: thumbnail, title, reading time, date. Whole card is a link.

### Buttons
- Primary (filled): `Request an AI Leadership Briefing`, `Get Started`, `Start with an AI Readiness Session`, `Submit`. High-contrast on accent color.
- Secondary (outline or ghost): `Explore our Services`. Lower visual weight.
- Text link with chevron: `Back to blogs`, `Previous`, `Next`. Carry `→` or arrow glyph.
- Anchor links inside nav: bare text, no underline until hover.

### Inputs
- Single-line text (First name, Last name, Email, Phone, Subject)
- Select (Subject)
- Multiline textarea (Your message)
- Submit button
- No labels visible on the live form, only placeholders. **Accessibility issue, fix in rebuild** (visible labels, error states, required indicators).

### Navigation
- Sticky top bar with logo on left, links centered or right, CTA button right.
- Mobile: hamburger drawer with the same items but different labels (see IA inconsistency above).

### Section rhythm
- Section vertical padding feels generous, roughly `120px` top/bottom on desktop, `64px` on mobile.
- Three-column grids for problem/pillar/principle cards.
- Single-column stacked sections for service blocks and team blocks (alternating image position).
- Carousel for testimonials with `←` `→` arrows.

### Footer
- Logo, tagline, copyright, address block, email, phone. Three-column on desktop, single-column on mobile.
- Currently rendered three times in the markup (Framer responsive artifact). Render once in rebuild.

---

## 5. Keep / Change / Cut

### Keep
- The narrative arc on the home page: problem → structure (Align/Govern/Activate) → services → results → approach → team → principles → insights → testimonials → FAQ → CTA. It builds momentum and earns the contact ask.
- The Align / Govern / Activate framing. It's distinctive, ownable, and supports the rest of the messaging.
- The Mindset / Capability / Application three-step approach. Pairs nicely with Align / Govern / Activate and is good narrative scaffolding.
- The Principles section. Differentiator, not boilerplate.
- The illustration style (assuming you own the assets or have license to keep using them).
- The leadership-tier positioning ("AI leadership partner" not "AI consultancy" not "AI training company"). Strongest line on the site.
- All current copy in Services and Approach, it's tight and substantive.

### Change
- Make Services its own page (`/services`) with deep-linkable sections per service, plus condensed teaser on the home page. Today the home page is too long and Services has nothing to link to from external posts or campaigns.
- Make About its own page (`/about`) bringing together Leadership Team, Principles, and Approach. Frees the home page for conversion.
- Fix the desktop/mobile nav label mismatch. Pick one set: I'd recommend `Services`, `About`, `Insights`, `Contact` with `Get Started` as the CTA.
- Anchor the secondary hero CTA correctly. `Explore our Services` should go to `/services`, not `/contact`.
- Replace the duplicated approach/testimonial/footer markup. Render once with proper responsive behavior.
- Move logo from PNG to SVG. Add a dark-background variant.
- Add visible form labels, required indicators, error states, and a privacy note + (recommended) reCAPTCHA or honeypot on the contact form.
- Fix the broken pager link on the curiosity-to-capability article (`/insights/:tG9AbZrun`).
- Fix the email typo on contact (`info@origin.ca` should be `info@originai.ca`).
- Normalize URL slug for the November 17 article (current URL has a stray period: `business-first-technology-second.-a-smarter-way-to-adopt-ai`). Set up a permanent redirect when it changes.
- Add legal pages: Privacy Policy, and (if a form is collecting data) a basic terms-of-use. Link from footer.
- Add Open Graph + Twitter card metadata per page. Today the meta tags are Framer defaults.
- Add structured data: `Organization`, `LocalBusiness` (you have an address), `Article` on insight posts.
- Add a sitemap.xml and robots.txt at the new domain config.

### Cut
- The duplicate fourth article card on the home insights preview.
- The duplicate H1 on article pages (Framer artifact).
- The duplicate hero on the insights index that copies the homepage hero image. Give it its own image or kill the image entirely.
- The "Scroll to explore" microcopy unless we're committing to long parallax pages. On a tighter rebuild it's noise.
- The decorative background image behind every testimonial card if it's not a real client logo. It reads as filler.

### Add (suggested, not on the current site)
- Case studies or named work, even if it's a one-paragraph wins per client. Testimonials are good but proof carries further.
- A simple lead magnet: "AI Readiness Self-Assessment" PDF or short web quiz. Captures email, feeds the existing pitch.
- An author bio on insight posts (photo + 2 lines + LinkedIn link).
- LinkedIn link in footer at minimum. Origin has a clear leadership voice and that needs a social home.
- Newsletter signup on /insights and at the bottom of articles. Insights is a content asset, treat it like one.

---

## 6. Tech notes for the rebuild

- Stack: Next.js (App Router) + TypeScript + Tailwind, deployed to Vercel, source on GitHub. Mirrors the recent builds we've done for other sites.
- Content for /insights: start with MDX in-repo. If editorial volume picks up, swap to a headless CMS (Sanity or Contentlayer). Three posts today does not justify a CMS yet.
- Forms: a Vercel-friendly handler (Resend + a small API route, or Formspree / Web3Forms if we want it dead simple). Keep it server-side, do not expose API keys.
- Analytics: Vercel Web Analytics by default, optional GA4 if you want richer reporting.
- Domain: keep `originai.ca`. Vercel handles the apex + www redirect.
- Performance budget: ship the home page under 150KB JS and 1.5s LCP on a clean Wi-Fi run.
- Accessibility: WCAG AA color contrast, semantic landmarks, real form labels, keyboard-navigable nav and accordion, focus states on every interactive element.

---

## 7. Open questions for you

1. Do you want Services and About to be their own pages, or keep one long home page like today?
2. What are the exact brand hex codes and typeface(s) you used in Framer? If you have a brand guide, share it.
3. Do we have rights to keep the existing illustrations and team portraits, or do we need new artwork?
4. Should the FAQ live on the home page, on /services, or on its own /faq page? (I have a slight lean toward /services with anchor links.)
5. Are the testimonial backgrounds meant to be client logos? If yes, get logo files. If no, drop them.
6. Do you want a newsletter, and if so what tool (Mailchimp, Beehiiv, ConvertKit, etc.)?
7. Any third-party tools to integrate at launch (Calendly, HubSpot, Crisp, etc.)?
