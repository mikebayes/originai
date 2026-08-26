# Origin AI Website, Developer Handoff

A working orientation for any developer joining the Origin AI website. Read this end to end before touching code. Pair with **Origin AI Brand File.md** (same folder) for voice, color, and copy rules that affect what you build.

Owner: Mike Bayes (mike@webwizards.ca)
Live site: https://originai.ca
Repository: GitHub (originai repo under Mike's account)
Deployed by: Vercel, auto on push to `main`

---

## What this project is

Marketing site for Origin AI, a Winnipeg-based senior AI consulting firm. Three connected services (Strategy, Build, Managed), a small Insights blog, a contact form, and a privacy page. No customer accounts, no app, no database. Everything is static or server-rendered Next.js.

What it is NOT: a CMS-backed site, a SaaS product, a multi-tenant anything. Treat the codebase like a designed marketing surface, not a platform.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Vanilla CSS with custom properties. No Tailwind. No CSS-in-JS. |
| Email | Resend (transactional, contact form only) |
| Analytics | GA4 + Vercel Analytics + Vercel Speed Insights |
| Code quality | SonarCloud (automatic analysis on `main`) |
| Hosting | Vercel |
| DNS | Cloudflare |

`package.json` is intentionally lean. Resist adding dependencies.

---

## Local setup

```bash
git clone <repo-url>
cd "Origin AI Website Development"
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (run before pushing if uncertain)
npm run lint
```

**Environment variables** (set in `.env.local` for dev, in Vercel project settings for prod):

| Var | Purpose |
|---|---|
| `RESEND_API_KEY` | Contact form email send. Required for `/api/contact`. |

That's it. No database URLs, no auth secrets, no third-party API keys beyond Resend.

---

## Project structure

```
app/                  Next.js App Router. One folder per route.
  api/contact/        POST endpoint that emails the contact form via Resend
  approach/           /approach page
  contact/            /contact page
  insights/           /insights index + [slug] dynamic route
  privacy/            /privacy page
  services/           /services + /services/build, /strategy, /managed
  team/               /team page
  layout.tsx          Root layout. GA4, analytics, JSON-LD schema live here.
  page.tsx            Homepage. Composes Hero, Problem, Services, etc.
  sitemap.ts          Generates /sitemap.xml dynamically from articles + static routes
  globals.css         Base resets + brand tokens (--accent etc.)

components/           React components, one per visual section. Flat, not nested.
                      Naming pattern: <PageName><Section>.tsx (e.g. ServicesBuildPage.tsx).
                      Several "V2" components are newer iterations that replaced older ones.

lib/insights.ts       Single source of truth for all blog articles. TypeScript
                      objects with structured content blocks. No CMS. To add
                      an article, append to the array. See "Adding an article" below.

styles/
  services-deep.css   The big one (~180KB). Most page-level styles live here,
                      including all Insights, deep service, approach, and team
                      page CSS. Appends over time, do not refactor without a
                      reason. Mobile rules at the bottom.
  Other css files     Section-scoped: about.css, dynamics.css, framework.css,
                      problem.css, proof.css, sections.css, services.css,
                      services-v2.css, insights.css.

public/
  images/             Site images. Headshots at /public/images/MB.avif etc.
  images/insights/    Article cover images. Kebab-case lowercase only.
  logos/              SVG and PNG logos.

next.config.ts        301 redirects from legacy Framer URLs. Add new redirects here.
```

---

## Critical conventions

These are not negotiable. Most exist because something broke once.

**No em dashes anywhere.** Brand rule. Use commas, periods, or colons. This applies to copy, comments, alt text, and commit messages.

**No CMS.** Articles are TypeScript objects in `lib/insights.ts`. Block types are `paragraph`, `heading`, `pullquote`, `list`, `callout`. To add a new variant, extend the `Block` union and handle it in `components/InsightArticle.tsx`.

**Markdown links in article paragraphs.** Article paragraph text supports `[anchor text](url)` syntax. `InsightArticle.tsx` parses these inline. Used for internal links to service pages.

**Public folder is case-sensitive in production.** Vercel runs on Linux. `Blog Image.png` and `blog-image.png` are different files. Always use kebab-case lowercase for asset filenames. Windows hides case differences in Explorer, which makes this a frequent footgun.

**Page modifier classes scope CSS.** Each top-level page wrapper gets a `.bp-page` class plus a modifier like `.bp-page--insights` or `.bp-page--insights-article`. Many CSS rules require the compound selector `.bp-page.bp-page--foo` for specificity. Don't simplify to single classes, you'll break overrides.

**Color tokens.**
- `--accent: #5DA89C` (teal) is the brand accent everywhere except Strategy pages
- Strategy pages use `--svc-accent: #968560` (brass)
- Dark backgrounds use `#0a0f0e` and variants
- Body text on dark: `rgba(245, 240, 228, 0.88)`

**Add CSS by appending, not editing in place.** `services-deep.css` has grown by accretion. Most edits go at the bottom of the relevant section or appended to the end. Keep selectors as specific as needed to avoid cascade fights with what's above.

---

## Common tasks

### Add a new Insights article

1. Drop the cover image into `public/images/insights/` as `kebab-case.png`. Existing covers are 1672 × 941.
2. Open `lib/insights.ts` and prepend a new entry to the `articles` array (most recent first).
3. Required fields: `slug`, `title`, `excerpt`, `date` (ISO YYYY-MM-DD), `authorId`, `readingTime`, `category` (Adoption | Build | Strategy | Managed | Notes), `image`, `content` (array of blocks).
4. Use heading level 3 for section breaks inside the article body.
5. If linking to a service page, weave a markdown-style link into a paragraph: `text: "...read about [custom AI software](/services/build)..."`.
6. `npm run build` to type-check. Push. Vercel rebuilds.

### Add a 301 redirect

Edit `next.config.ts`, add to the `redirects()` array. Use `permanent: true` for 301. Literal colons in URL paths need to be escaped (`\\:`).

### Update homepage or page copy

Find the component in `components/`. Each section is its own file. Names match what you'd guess. Search by H1 text if unsure.

### Add a new service page

Pattern: route in `app/services/<name>/page.tsx` imports a single big `Services<Name>Page.tsx` component. Use the existing pages as a template. They include hero, body sections, FAQ, and a leader callout where applicable. Don't try to break them into smaller files, the team has tried, it isn't worth it.

---

## Deployment

`main` is the production branch. Pushing to `main` triggers a Vercel deploy. Preview deploys happen on PRs automatically. There is no staging environment by name, the Vercel preview URL on a PR is the staging.

The Vercel project has a connected domain (originai.ca, with `www.` as a redirect to apex). DNS is in Cloudflare. SSL is automatic via Vercel.

**Resend** is configured for the `send.originai.ca` subdomain (DKIM/SPF/MX records in Cloudflare). Mail from the contact form sends as `Origin AI <noreply@send.originai.ca>` to `mike@originai.ca`, with `Reply-To` set to the form submitter.

---

## SEO surface

This project takes SEO seriously and a lot of work has been done on it. If you change page titles, descriptions, or H1s, run it past Mike first.

- **Sitemap**: `app/sitemap.ts` generates `/sitemap.xml` from a hand-maintained static route list plus the articles array. Add new routes there.
- **Structured data**: ProfessionalService schema in `app/layout.tsx`, Service schema on each `/services/*` page, BlogPosting schema on each insights article.
- **Tracked keywords**: locked in a working spreadsheet maintained outside this repo. Ask Mike for the "Main tab" if you need it.
- **GA4 ID**: `G-4WMTNEFV3C` (wired in `app/layout.tsx` via next/script).
- **Search Console**: ownership verified, sitemap submitted.
- **Vercel Speed Insights** is live, watch the Core Web Vitals dashboard if you ship perf-sensitive changes.

---

## External accounts and dashboards

No credentials in this doc. Mike will share access separately.

| System | What it does | Where |
|---|---|---|
| GitHub | Code repo | github.com (Mike's account, repo name `originai` or similar) |
| Vercel | Hosting, analytics, speed insights | vercel.com, project name `originai` |
| Cloudflare | DNS for originai.ca and send.originai.ca | cloudflare.com |
| Resend | Transactional email for contact form | resend.com |
| Google Analytics 4 | Site analytics | analytics.google.com, property G-4WMTNEFV3C |
| Google Search Console | Search performance, indexing | search.google.com/search-console |
| SonarCloud | Code quality + security analysis | sonarcloud.io, org `mikebayes`, project `mikebayes_originai` |
| SE Ranking | Keyword tracking | seranking.com |
| ProfitParrot | SEO agency partner | external, contact via Mike |
| Google Business Profile | GBP listing for Winnipeg local SEO | business.google.com |

---

## Reference docs in this folder

- **Origin AI Brand File.md** — voice, vocabulary, what to use and avoid in copy, hard rules (no em dashes, etc.). Read this before writing any user-facing copy.
- **Origin AI PPC Brief.md** — paid search strategy. Useful context for understanding what the paid traffic side looks like, even if you're not running it.
- **docs/** — older planning docs (site audit, brand guide, sitemap, homepage plan). Background, not load-bearing.

---

## Gotchas, in order of how likely they are to bite you

1. **Case-sensitive asset filenames.** See "Critical conventions" above. If an image works locally but breaks on prod, this is why.
2. **services-deep.css is huge and cascades matter.** Use the most specific selector you can. If a rule isn't taking effect, check above your rule for an earlier one with the same or higher specificity.
3. **The `.bp-page.bp-page` compound selector pattern.** Earlier rules used single `.bp-page` which doesn't have enough specificity against page-modifier overrides. Match the existing pattern.
4. **Article markdown links need their CSS.** New `.bp-ins-art-link` styling lives in `services-deep.css` next to the other article body rules. Inline links in articles won't pick up styling otherwise.
5. **Vercel env vars are case-sensitive and exact.** `RESEND_API_KEY` is the name. Anything else and the contact form returns 500.
6. **The contact form has a honeypot field named `website`.** If a bot fills it, the API silently returns 200 without sending. Don't remove this.
7. **No em dashes.** Yes, still no em dashes. Even in commit messages.

---

That's the orientation. Ship something small to start, push to a branch, get a preview URL, and Mike will review. Welcome aboard.
