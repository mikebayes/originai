import HeroNav from "./HeroNav";
import {
  getRecentArticles,
  getAuthor,
  formatDate,
  type Article,
} from "@/lib/insights";

/**
 * /insights — simple list.
 *
 * Downgraded from earlier magazine version. The insights page is
 * supporting evidence for the firm's credibility, not a publication.
 * Layout intentionally restrained:
 *
 *   1. Compact hero with a clear purpose statement
 *   2. Article grid: image, meta, title, excerpt, byline
 *   3. CTA strip
 *
 * Article cover images live in /public/images/insights/. Abstract
 * conceptual imagery, no portrait stock, no people. When an article
 * has no `image` set, the card shows a quiet placeholder block.
 */
export default function InsightsIndex() {
  const all: Article[] = getRecentArticles();

  const initials = (name: string) =>
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div className="bp-page bp-page--insights bp-page--insights-simple">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell bp-hero-shell--compact">
        <HeroNav />

        <section
          className="wrap bp-hero bp-hero--compact bp-ins-hero"
          data-screen-label="Insights hero"
        >
          <div className="bp-hero-eyebrow">
            <span className="dot" />
            <span>Insights</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1 bp-ins-hero-h1">
            Practical notes on AI work.
          </h1>

          <p className="bp-hero-sub bp-ins-hero-sub">
            Written by Origin&rsquo;s team, mostly about adoption and where
            leadership matters most. Short pieces from the people doing the
            engagements, not a content team.
          </p>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* SIMPLE GRID */}
      <section
        className="bp-ins-simple-wrap"
        data-screen-label="Articles"
      >
        <div className="wrap">
          <div className="bp-ins-simple-grid">
            {all.map((a) => {
              const author = getAuthor(a.authorId);
              return (
                <a
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="bp-ins-simple-card"
                >
                  <div className="bp-ins-simple-image">
                    {a.image ? (
                      <img src={a.image} alt="" loading="lazy" />
                    ) : (
                      <div
                        className="bp-ins-simple-image-placeholder"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="bp-ins-simple-body">
                    <div className="bp-ins-simple-meta">
                      <span className="bp-ins-tag">{a.category}</span>
                      <span className="bp-ins-sep" aria-hidden="true">·</span>
                      <span>{formatDate(a.date)}</span>
                    </div>

                    <h2 className="bp-ins-simple-title">{a.title}</h2>

                    <p className="bp-ins-simple-excerpt">{a.excerpt}</p>

                    <div className="bp-ins-simple-foot">
                      <span className="bp-ins-author bp-ins-author--compact">
                        {author.photo ? (
                          <img
                            src={author.photo}
                            alt={author.name}
                            className="bp-ins-author-photo"
                            loading="lazy"
                          />
                        ) : (
                          <span
                            className="bp-ins-author-avatar"
                            aria-hidden="true"
                          >
                            {initials(author.name)}
                          </span>
                        )}
                        <span className="bp-ins-author-name">
                          {author.name}
                        </span>
                      </span>
                      <span className="bp-ins-read">{a.readingTime}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bp-ins-cta" data-screen-label="Insights CTA">
        <div className="wrap">
          <div className="bp-ins-cta-row">
            <div className="bp-ins-cta-copy">
              <span className="bp-ins-cta-eyebrow">
                <span className="bar" aria-hidden="true" />
                Want to talk through any of this?
              </span>
              <p className="bp-ins-cta-line">
                If a piece here sparked a question about your own AI work,
                that&rsquo;s the best kind of starting point for a
                conversation.
              </p>
            </div>
            <a href="/contact" className="pill pill-primary">
              Start a conversation
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
