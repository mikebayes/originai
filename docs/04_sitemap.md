# Origin AI — Sitemap & Content Plan

This is the structural map of the new site: every page, every route, and how content gets published. It complements the brand guide and the homepage plan.

---

## Sitemap

```
/
├── /services                          (one page, three anchored sections + FAQ)
│   ├── #opportunity                   (AI Opportunity & Roadmap)
│   ├── #solutions                     (AI Solutions & Development — centerpiece)
│   ├── #managed                       (Managed AI)
│   └── #faq                           (FAQ accordion)
├── /team                              (full leadership team page)
├── /approach                          (how we work, includes A/G/A and Mindset/Capability/Application)
├── /principles                        (4 principles, full page) — optional, can fold into /approach
├── /insights                          (article index)
│   └── /insights/[slug]               (individual article pages, MDX or HTML)
├── /contact                           (form + office details)
├── /privacy                           (privacy policy, footer link)
├── /terms                             (terms of use, footer link, optional v1)
└── /sitemap.xml                       (auto-generated)
└── /robots.txt                        (manual, allow all, point at sitemap)
```

---

## Page summaries

### `/` Home

The conversion page. Eight sections (per homepage plan): Hero → Problem → Framework → Services overview → Proof → About teaser → Insights → CTA. Goal is to qualify the reader and route them to the discovery session, the services page, or insights.

### `/services`

The detail page. One scrollable page with three anchored sections and a FAQ at the bottom. Each service section has its own hero photo, longer-form description, deliverables list, and a "Book a discovery session" CTA. The structure:

- **Section: AI Opportunity & Roadmap** (`#opportunity`)
- **Section: AI Solutions & Development** (`#solutions`) *(centerpiece, more visual weight)*
- **Section: Managed AI** (`#managed`)
- **Section: FAQ** (`#faq`)

Internal links from the homepage services overview cards land on the matching anchor.

### `/team`

The team page. Each member gets a full block: portrait, name, title, longer bio, optional LinkedIn link. Three members today (Mike, Chad, Taylor), easy to add more later.

### `/approach`

How Origin works. Combines the Mindset/Capability/Application frame, the Align/Govern/Activate framework callout, and any other process content. This is where prospects learn the *how* of working with Origin.

### `/principles` *(optional)*

Four principles displayed as a full-page grid. Worth a standalone page if you want to use it as a values anchor in sales conversations or a press kit. If it ends up sparse, fold it into /approach as a section.

### `/insights`

Article index. Reverse-chronological list of all published articles. Each card: image, title, author, reading time, date, link. No tags or categories needed at v1.

### `/insights/[slug]`

Individual article page. Pattern:
- Title, author byline, date, reading time
- Hero image
- Body content (rich text)
- Author bio block at the bottom (photo, name, role, two-line bio, optional LinkedIn)
- Previous / Next navigation
- Final CTA: "Book a discovery session"

### `/contact`

Contact page. Form (with proper labels), office address, email (info@originai.ca, fix the existing typo), phone, optional embedded map.

### `/privacy` and `/terms`

Standard legal pages. /privacy is required if the contact form collects data. /terms is optional for v1 but worth adding before any commercial activity flows through the site.

---

## Old → new URL redirects

The Framer site has a few URLs that need to be preserved or redirected so we don't lose any inbound links or SEO equity.

| Old URL | Action | New URL |
|---|---|---|
| `/` | Keep | `/` |
| `/contact` | Keep | `/contact` |
| `/insights` | Keep | `/insights` |
| `/insights/human-centric-ai-why-adoption-matters-more-than-automation` | Keep | same |
| `/insights/from-curiosity-to-capability-how-teams-actually-learn-to-use-ai` | Keep | same |
| `/insights/business-first-technology-second.-a-smarter-way-to-adopt-ai` | 301 redirect (drop the stray period) | `/insights/business-first-technology-second-a-smarter-way-to-adopt-ai` |
| `/insights/:tG9AbZrun` | 404 → /insights | (broken Framer template token, was never valid) |
| `/#our-team` (anchor) | 301 to | `/team` |
| `/#services-2` (anchor) | 301 to | `/services` |
| `/#testimonials` (anchor) | 301 to | `/team` (testimonials live with the team or fold into homepage Proof) |

These redirects go in `next.config.js` (or via Vercel's `vercel.json`) when we scaffold.

---

## Internal linking strategy

Every page has clear next-step routes. The site should never dead-end the reader.

| From | Primary CTA | Secondary CTA |
|---|---|---|
| `/` | Book a discovery session | See our services |
| `/services` (each section) | Book a discovery session | (none) |
| `/team` | Meet our approach → /approach | Book a discovery session |
| `/approach` | See our services → /services | Book a discovery session |
| `/principles` | Read our approach → /approach | Book a discovery session |
| `/insights` | (top article) | Book a discovery session at the bottom |
| `/insights/[slug]` | Book a discovery session | Read another article |
| `/contact` | (form) | (none) |

The "Book a discovery session" CTA appears at the bottom of every content page. The footer also surfaces it.

---

## Publishing flow for /insights (no CMS)

You're writing the blog manually using Claude Code rather than running a CMS. This is fine for low volume and gives you tight editorial control. Here's the flow.

### Where articles live in the codebase

```
content/
└── insights/
    ├── human-centric-ai-why-adoption-matters-more-than-automation.mdx
    ├── from-curiosity-to-capability-how-teams-actually-learn-to-use-ai.mdx
    ├── business-first-technology-second-a-smarter-way-to-adopt-ai.mdx
    └── [new-article-slug].mdx
```

Each MDX file has frontmatter at the top with metadata, then the article body in MDX (Markdown plus optional React components for images, quotes, callouts).

### Frontmatter template

```yaml
---
title: "From Curiosity to Capability: How Teams Actually Learn to Use AI"
slug: "from-curiosity-to-capability-how-teams-actually-learn-to-use-ai"
author: "Chad Beauchamp"
authorRole: "Co-Founder & CEO"
date: "2025-11-28"
readingTime: "6 min read"
heroImage: "/insights/curiosity-to-capability/hero.png"
excerpt: "Interest in AI is everywhere, but real capability is rare. This article explores how teams move beyond curiosity and build the skills, confidence, and habits needed to use AI effectively in real work."
---
```

### To publish a new article

1. Create a new MDX file in `content/insights/` with the slug as the filename.
2. Fill in frontmatter (title, slug, author, date, reading time, hero image path, excerpt).
3. Save the article body in MDX below the frontmatter.
4. Drop the hero image into `public/insights/[slug]/hero.png` (or wherever the path points).
5. Commit, push to GitHub. Vercel auto-deploys.

The site automatically picks up new files. Index page lists by date desc. No manual list maintenance.

### Article body conventions

- Use H2 for section headings (the title is already the H1).
- Keep paragraphs short. Three to four sentences max.
- Use blockquote for pull quotes.
- Use the `<Image>` MDX component for inline images so they get Next.js optimization.
- Use the `<Callout>` MDX component for sidebar-style notes (we'll define this in the build).
- End with a soft CTA paragraph or let the global footer-CTA handle it.

### Author byline

Authors are defined in a single config file (e.g., `data/authors.ts`) with name, role, photo, bio, and LinkedIn URL. Frontmatter just references the author by name; the article page pulls full author data from config. Add new authors there once.

### Optional but recommended

- A draft flag in frontmatter (`draft: true`) so unfinished work doesn't ship. Build hides drafts in production.
- An updated date (`updatedAt`) for articles you revise meaningfully. Display "Updated MMM DD, YYYY" if present.
- An OG image override (`ogImage`) for when the hero image isn't ideal as a social share preview.

### When you outgrow this

If you start publishing weekly or have multiple contributors needing a UI, swap to Sanity or Contentlayer. Migration from MDX is straightforward: keep the same frontmatter schema, point the CMS at it.

---

## SEO essentials for v1

These are the minimum SEO pieces the rebuild ships with.

- **Page titles and meta descriptions:** unique per page, set in Next.js metadata API. Format: `Page Name | Origin AI`.
- **Canonical URLs:** auto-generated.
- **OG and Twitter card metadata:** every page has its own. Default OG image is the brand hero shot. Articles use their hero image.
- **Structured data:** `Organization` + `LocalBusiness` (you have an address) site-wide. `Article` schema on individual insight pages.
- **`sitemap.xml`:** auto-generated by Next.js.
- **`robots.txt`:** allow all, point at sitemap.
- **Performance:** target Lighthouse 90+ across Performance, Accessibility, Best Practices, SEO.
- **Accessibility:** WCAG AA color contrast (already covered by brand tokens), semantic HTML landmarks, real form labels, keyboard-navigable nav and accordions.

---

## Tech stack (locked)

- **Framework:** Next.js 15 with App Router and TypeScript.
- **Styling:** Tailwind CSS, brand tokens defined in `globals.css` as CSS variables.
- **Content:** MDX in-repo for `/insights`, no CMS at v1.
- **Forms:** Vercel-friendly API route plus Resend for transactional email. Or Formspree if you want to skip the API route entirely.
- **Hosting:** Vercel.
- **Source:** GitHub (private repo or public, your call).
- **Domain:** originai.ca. Vercel handles apex + www redirect.
- **Analytics:** Vercel Web Analytics by default. GA4 if you want richer reporting.
- **Email:** Resend for any transactional, info@originai.ca for contact.

This mirrors the recent builds we've done.
