# Origin AI PPC Brief

A starting brief for the PPC team running paid search for originai.ca. Pair this with **Origin AI Brand File.md** (in the same folder) for tone, vocabulary, and visual guidance.

Owner: Mike Bayes (mike@webwizards.ca)
Domain: originai.ca
Launch budget: $500/month (test phase)
Goal: validate paid search as a lead channel for Origin AI

---

## Quick context

Origin AI is a small senior AI consulting firm based in Winnipeg, Canada. Three connected services:

1. **AI Strategy & Training** (advisory, roadmap, training) → /services/strategy
2. **AI Software & Systems** (custom AI software, AI agents) → /services/build
3. **Managed AI** (ongoing development & support) → /services/managed

Target client: mid-market and enterprise organizations in Canada. Primary geography is Winnipeg/Manitoba, with Canada-aware secondary reach.

What Origin is NOT: a tool reseller, generic consultancy, freelance dev shop, workshop business, or AI training platform.

---

## Strategic posture

**This is a learning campaign, not a growth machine.** The $500/month budget is intentionally modest for the test phase. The goal is to figure out which keywords actually convert, not to drive volume yet.

**The Winnipeg constraint is supply, not budget.** Local AI-consulting search volume in Winnipeg is thin enough that even with strong bids the campaign may not deliver the full $500/month in qualified clicks. That's not a problem to solve by raising bids on weak intent, it's information. Expect modest spend AND modest lead volume in month one. After 30 days we have a clear data point: stay Winnipeg-only and accept the natural ceiling, expand geo (Toronto, Calgary, Vancouver), or shift the unused budget to a different channel entirely.

---

## Campaign architecture

Start with two campaigns. Add a third only if data justifies it.

### Campaign A: Local intent (target ~60% of budget)

Winnipeg-anchored high-intent terms. Lower CPC, dominant auction position, qualified buyers.

**Keywords (phrase match):**
- "AI consulting Winnipeg"
- "AI consultant Winnipeg"
- "AI development Winnipeg"
- "AI software development Winnipeg"
- "AI agency Winnipeg"
- "AI strategy Winnipeg"
- "AI services Winnipeg"

**Geo:** Winnipeg + 50 km radius
**Landing page:** /services (primary), with deep service pages for keyword-specific groups where intent is clear

### Campaign B: Higher-intent service terms, Canada-wide (target ~40% of budget)

Specific service queries that signal real buyer intent.

**Keywords (phrase match):**
- "custom AI software development"
- "AI roadmap consulting"
- "AI strategy consulting"
- "AI development company Canada"
- "build AI agents"
- "AI software company Canada"

**Geo:** All of Canada. Exclude outside Canada entirely.
**Landing page:** matching deep service page
- "custom AI software" → /services/build
- "AI roadmap" / "AI strategy" → /services/strategy
- "build AI agents" → /services/build

---

## Match types

- **Phrase match** for all keywords at launch
- **Exact match** added on top-converting keywords after 30 days
- **No broad match** at this budget. Period. It will burn spend on irrelevant queries.

---

## Negative keywords (set at launch, expand weekly)

Filter out informational, educational, job-seeking, and competitor traffic.

**Hard negatives:**
- free, tutorial, course, courses, certification, certificate, bootcamp
- jobs, career, careers, salary, hiring, intern, internship
- what is, how to, definition, meaning, explained, examples, vs
- python, github, open source, library, framework, API
- chatgpt, openai, anthropic, claude, gemini, copilot, perplexity (avoid bidding on competitor terms in this phase)
- amazon, aws, google cloud, azure (when paired with AI)
- crypto, blockchain, web3, NFT
- masters, degree, university, school, college

Also add new negative keywords weekly based on the Search Terms report. Anything that triggered an ad but isn't real buyer intent goes on the list.

---

## Geo targeting

- **Campaign A (Local):** Winnipeg, MB + 50 km radius
- **Campaign B (Canada):** Canada (country-level)
- **Exclude all other countries.**

Do not target by language. The site is English only.

---

## Conversion goals

**Primary (Google Ads optimizes against these):**
1. Contact form submission (success state on /api/contact)
2. Phone click (`tel:+12045151415` click event)

Treat both as primary, similar value. A qualified phone call and a qualified form submission are equivalent for a consulting business at this stage.

**Soft (track in GA4 for context, do not optimize against):**
- Outbound click on "Connect on LinkedIn" from the contact page
- Outbound click on LinkedIn from the footer
- Scroll depth past 75% on any /services/* page
- Session duration over 2 minutes
- 3+ page views in a session

Conversion tracking is set up via GA4 + Google Ads import. Mike will grant GA4 + Google Ads read access at kickoff.

---

## Bidding strategy

- **Launch (first 30 days):** Manual CPC, max bid $3-5
- **After 30 days with 10+ conversions:** switch to Target CPA at $150-250 (refine based on actual data)

Do not use Maximize Conversions or Maximize Clicks at this budget. Both will spend too aggressively before there's enough conversion data to optimize against.

---

## Ad copy direction

Voice: confident, calm, executive. Origin AI sounds like a senior partner who has shipped the work themselves. NOT hypey, NOT "unlock", NOT "transform", NOT "revolutionary", NOT "AI-powered".

**Words to use:** strategy, roadmap, build, deploy, operate, ship, working systems, ownership, custom, senior, end to end, Winnipeg, Canada.

**Words to AVOID:** unlock, leverage, transform, journey, seamless, cutting-edge, supercharge, paradigm, ideate, empower, synergy, holistic, disruptive, game-changing, next-generation, agentic AI (as a hype term).

### Headlines (30 char each) to test

- "AI Consulting in Winnipeg"
- "Custom AI Software Development"
- "AI Roadmap. Working Systems."
- "Senior AI Team in Winnipeg"
- "Strategy, Build, Operate AI"
- "AI Software Development Canada"

### Descriptions (90 char each)

- "Custom AI software and AI strategy for Canadian businesses. Senior team. End-to-end."
- "From roadmap to running system. No offshore handoffs, no junior bench. Winnipeg-based."
- "Origin AI builds the AI your business runs on. Book a 30-minute discovery session."

### CTAs

- "Book a Discovery Session"
- "See Our Approach"

### Sitelinks (use all four slots)

- /services (See Services)
- /approach (Our Approach)
- /team (Meet the Team)
- /insights (Read Insights)

### Callouts (consider)

- Winnipeg-based
- Senior team
- End-to-end delivery
- Custom AI software
- No offshore handoffs

---

## Hard rules for ad copy

1. **No em dashes.** Standing brand rule. Use commas, periods, or colons.
2. **Don't include the keyword in the business display name.** Google penalizes name-stuffing.
3. **Brand mention:** always "Origin AI" (with space). Not "OriginAI" or "Origin.AI".
4. **Phone in callouts:** include "+1 (204) 515-1415" as a callout extension. Adds call options on mobile.

---

## Reporting expectations

Weekly snapshot to Mike, every Monday. Include:

- Spend (and **budget delivery rate**, the % of $500 actually spent)
- Clicks, impressions, CTR, average CPC
- Conversions (form submissions + phone calls, broken out)
- Top-converting keywords
- Wasted spend report: search terms that triggered ads but were off-intent (feed back into negative keywords)
- New negative keywords added that week
- Suggested adjustments for the following week

Monthly: a strategic review covering campaign performance, geo expansion recommendations, landing page test ideas, and budget reallocation suggestions.

---

## Realistic timeline

**Month 1:** spend tuning, lots of negatives added, 1-2 weak leads, mostly learning what triggers searches. Budget delivery rate may be 30-60% as the campaign warms up.

**Month 2:** clearer picture of which keywords convert, 2-4 leads, budget delivery rate climbs as bidding settles.

**End of 60 days:** decision point on whether to scale up budget, expand geo, build dedicated PPC landing pages, or pause and reinvest the dollars elsewhere.

---

## What Mike provides before launch

1. Access to Google Ads account (or set one up if Origin AI doesn't have one yet)
2. GA4 read access (G-4WMTNEFV3C)
3. Confirmation that conversion tracking is firing correctly (contact form + tel: click)
4. Confirmed budget cap at $500/month (set as hard monthly cap to prevent Google Ads' 2x daily overage)
5. Origin AI Brand File.md for tone and voice reference

---

## Stuff to potentially do later

- Dedicated PPC landing pages (single offer, no nav, one CTA). Usually doubles conversion rate vs. paid traffic to /services. Worth building after 30 days if the campaign is showing signal.
- LinkedIn Ads test for B2B targeting by job title (decision-makers at Canadian mid-market companies). Different motion than search, different budget.
- Retargeting campaign for visitors who browsed /services but didn't convert. Cheap CPM, sustains brand visibility.
- Bid on competitor brand terms (only if defensive, only after primary terms are saturated).

None of these are launch tasks. They're 90-day decisions based on what the data shows.

---

Questions for the PPC team to raise back with Mike before launch:

- **Google Ads account setup.** Mike's preference is that the account is created (or already exists) under Origin AI's ownership, with the PPC team granted manager/admin access. Reasons: Origin AI retains historical data, audience lists, and campaign assets long-term, and isn't tied to any specific agency relationship. That said, Mike will defer to the PPC team's recommended setup if there's a strong reason to do it differently. Raise it on the kickoff call.
- Confirm the conversion goal values (in dollars). Per Mike, a qualified lead is worth in the **$2,500 to $5,000 range** at minimum. Some leads worth substantially more. Use this range when configuring conversion values in Google Ads so the bidding algorithm prices clicks correctly.
- Are there competitor brand terms we should specifically NOT bid on (existing relationships, partnerships, etc.)?
- Any verticals or industries to exclude from the campaign?

That's the brief. Hand this to the team along with the Brand File and they have what they need to kick off.
