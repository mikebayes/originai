import HeroNav from "./HeroNav";

/**
 * /team — Team page.
 *
 * Sister page to /approach. Reuses the .bp-page system with a new
 * .bp-page--team modifier that pulls the same dark/near-black hero
 * treatment used on the approach page (and services overview),
 * keeping the brand-neutral teal accent family. No forest green
 * service-detail hero — that's reserved for the three service pages.
 *
 * Sections (intentionally short):
 *   1. Hero — TEAM eyebrow, H1, sub, two CTAs, 3-col footer rail
 *      (Team / Model / Delivery).
 *   2. Founding team — three premium cards (Mike, Chad, Taylor)
 *      with photo placeholders (initials), role, short bio, focus
 *      chips. Photos are placeholders that can be swapped to real
 *      headshots later. We deliberately don't use AI-generated faces.
 *   3. How we work — single statement block ("You work with the
 *      people responsible for the outcome.") with three small
 *      supporting points.
 *   4. Final CTA — uses the existing .bp-cta pattern.
 *
 * Nav: site-wide HeroNav. Footer: rendered by the page route.
 */
export default function TeamPage() {
  return (
    <div className="bp-page bp-page--team">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell">
        <HeroNav />

        <section className="wrap bp-hero" data-screen-label="Team hero">
          <div className="bp-hero-meta">
            <span>
              <a href="/">← Origin AI</a>
              <span className="crumb-sep">/</span>
              <span>Team</span>
            </span>
            <span>The people behind the work</span>
          </div>

          <div className="bp-hero-eyebrow">
            <span className="dot" />
            <span>Team</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1">
            Senior people,{" "}
            <span className="accent">close to the work.</span>
          </h1>

          <p className="bp-hero-sub">
            Origin AI is led by business, technology, and marketing operators
            who work directly with clients to turn AI strategy into working
            systems.
          </p>

          <div className="bp-hero-actions">
            <a href="/contact" className="pill pill-primary">
              Book a discovery session
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="/services" className="pill pill-secondary">
              Explore services
            </a>
          </div>

          <div className="bp-hero-footer">
            <div className="bp-hero-foot-col">
              <div className="k">Team</div>
              <div className="v">3 partners</div>
            </div>
            <div className="bp-hero-foot-col">
              <div className="k">Model</div>
              <div className="v">Senior-led</div>
            </div>
            <div className="bp-hero-foot-col">
              <div className="k">Delivery</div>
              <div className="v">End-to-end</div>
            </div>
          </div>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* FOUNDING TEAM */}
      <section className="bp-team" data-screen-label="Founding team">
        <div className="wrap">
          <div className="bp-team-head">
            <div>
              <div className="eyebrow">
                <span className="bar" />
                Founding team
              </div>
              <h2 className="section-h2" style={{ marginTop: 24 }}>
                The people leading{" "}
                <span className="muted">the work.</span>
              </h2>
            </div>
            <p className="section-lede lede">
              Three partners with operator experience across AI strategy,
              software delivery, and growth. Senior on every engagement.
            </p>
          </div>

          <div className="bp-team-grid">
            {[
              {
                name: "Mike Bayes",
                initials: "MB",
                photo: "/images/MB.avif",
                role: "President & Lead AI Strategist",
                bio:
                  "Mike works with leadership teams to clarify where AI fits, identify the right opportunities, and move from interest to implementation. He brings executive experience across technology, operations, connectivity, cloud, and cybersecurity.",
                chips: [
                  "AI strategy",
                  "Leadership alignment",
                  "Business systems",
                  "Enablement",
                ],
              },
              {
                name: "Chad Beauchamp",
                initials: "CB",
                photo: "/images/CB.avif",
                role: "Co-Founder & CEO",
                bio:
                  "Chad leads product thinking, delivery discipline, and the build capability behind Origin AI. He brings years of experience turning business needs into software, websites, and digital systems.",
                chips: [
                  "Product direction",
                  "Software delivery",
                  "AI-assisted build",
                  "Digital systems",
                ],
              },
              {
                name: "Taylor Crawford",
                initials: "TC",
                photo: "/images/TC.avif",
                role: "Co-Founder, Growth & Partnerships",
                bio:
                  "Taylor brings commercial strategy, marketing, and partnership experience to Origin AI. He helps connect AI opportunities to market realities, client needs, and business growth.",
                chips: [
                  "Partnerships",
                  "Growth strategy",
                  "Market positioning",
                  "Client relationships",
                ],
              },
            ].map((p) => (
              <article className="bp-team-card" key={p.name}>
                <div className="bp-team-photo">
                  {p.photo ? (
                    <img src={p.photo} alt={p.name} loading="lazy" />
                  ) : (
                    <span className="initials" aria-hidden="true">{p.initials}</span>
                  )}
                </div>
                <h3 className="bp-team-name">{p.name}</h3>
                <div className="bp-team-role">{p.role}</div>
                <p className="bp-team-bio">{p.bio}</p>
                <ul className="bp-team-chips" aria-label="Focus areas">
                  {p.chips.map((c) => (
                    <li className="bp-team-chip" key={c}>
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bp-statement" data-screen-label="How we work">
        <div className="wrap">
          <div className="bp-statement-inner">
            <div className="bp-statement-eyebrow">
              <span className="bar" />
              How we work
            </div>
            <h2 className="bp-statement-h2">
              You work with the people{" "}
              <span className="muted">responsible for the outcome.</span>
            </h2>
            <p className="bp-statement-body">
              We are intentionally senior and hands-on. The people shaping the
              strategy stay close to the build, the delivery, and the client
              relationship. That keeps the work focused, accountable, and tied
              to business value.
            </p>
            <ul className="bp-statement-points" aria-label="How we work">
              <li>
                <span className="bp-statement-dot" aria-hidden="true" />
                Senior on the work
              </li>
              <li>
                <span className="bp-statement-dot" aria-hidden="true" />
                Close to the client
              </li>
              <li>
                <span className="bp-statement-dot" aria-hidden="true" />
                Accountable for the outcome
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bp-cta" data-screen-label="Final CTA" id="contact">
        <div className="wrap">
          <div className="bp-cta-inner">
            <div className="bp-cta-eyebrow">
              <span className="dot" />
              Talk with the team
            </div>
            <h2>Talk with the team.</h2>
            <p>
              Let&rsquo;s discuss where AI fits, what is worth building, and
              how we can help move it into production.
            </p>
            <div className="bp-cta-actions">
              <a href="/contact" className="pill pill-primary">
                Book a discovery session
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="/services" className="pill pill-secondary">
                See our services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
