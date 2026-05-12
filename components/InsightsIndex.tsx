import HeroNav from "./HeroNav";
import {
  getFeaturedArticle,
  getRecentArticles,
  getAuthor,
  formatDate,
} from "@/lib/insights";

/**
 * /insights — article index.
 *
 * Layout:
 *   Compact dark hero
 *   Featured article (most recent) — wide card
 *   Remaining articles — grid of compact cards
 *   Quiet CTA strip linking to /contact
 *
 * All content is sourced from lib/insights.ts. To add a new article,
 * append it to the `articles` array in that file. No CMS, no DB, no
 * fetch — the data is bundled at build time, so navigating between
 * articles is instant.
 */
export default function InsightsIndex() {
  const featured = getFeaturedArticle();
  const rest = getRecentArticles(featured.slug);

  const featuredAuthor = getAuthor(featured.authorId);

  // Build the author initials (e.g. "MB") for the avatar disc.
  const initials = (name: string) =>
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div className="bp-page bp-page--insights">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell bp-hero-shell--compact">
        <HeroNav />

        <section
          className="wrap bp-hero bp-hero--compact"
          data-screen-label="Insights hero"
        >
          <div className="bp-hero-eyebrow">
            <span className="dot" />
            <span>Insights</span>
            <span className="bar" />
          </div>

          <h1 className="bp-hero-h1">
            Notes on AI, what&rsquo;s worth building,{" "}
            <span className="accent">and how to think about it.</span>
          </h1>

          <p className="bp-hero-sub">
            Short, opinionated reads from the people doing the work. No
            think-piece roundups, no AI hype cycle commentary. Just what
            we&rsquo;ve learned helping teams move from curiosity to
            capability.
          </p>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* FEATURED — most recent article, foregrounded */}
      <section className="bp-ins-featured" data-screen-label="Featured article">
        <div className="wrap">
          <div className="bp-ins-featured-eyebrow">
            <span className="bar" aria-hidden="true" />
            Latest
          </div>

          <a
            href={`/insights/${featured.slug}`}
            className="bp-ins-featured-card"
          >
            <div className="bp-ins-featured-meta">
              <span className="bp-ins-tag">{featured.category}</span>
              <span className="bp-ins-sep" aria-hidden="true">·</span>
              <span className="bp-ins-date">{formatDate(featured.date)}</span>
              <span className="bp-ins-sep" aria-hidden="true">·</span>
              <span className="bp-ins-read">{featured.readingTime}</span>
            </div>

            <h2 className="bp-ins-featured-title">{featured.title}</h2>

            <p className="bp-ins-featured-excerpt">{featured.excerpt}</p>

            <div className="bp-ins-featured-foot">
              <span className="bp-ins-author">
                {featuredAuthor.photo ? (
                  <img
                    src={featuredAuthor.photo}
                    alt={featuredAuthor.name}
                    className="bp-ins-author-photo"
                    loading="lazy"
                  />
                ) : (
                  <span className="bp-ins-author-avatar" aria-hidden="true">
                    {initials(featuredAuthor.name)}
                  </span>
                )}
                <span className="bp-ins-author-meta">
                  <span className="bp-ins-author-name">
                    {featuredAuthor.name}
                  </span>
                  <span className="bp-ins-author-role">
                    {featuredAuthor.role}
                  </span>
                </span>
              </span>

              <span className="bp-ins-read-cta">
                Read the article
                <span className="arrow" aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* GRID — remaining articles */}
      {rest.length > 0 && (
        <section className="bp-ins-grid-wrap" data-screen-label="Recent articles">
          <div className="wrap">
            <div className="bp-ins-grid-head">
              <span className="bar" aria-hidden="true" />
              <h2 className="bp-ins-grid-h2">More from the team</h2>
            </div>

            <div className="bp-ins-grid">
              {rest.map((article) => {
                const author = getAuthor(article.authorId);
                return (
                  <a
                    key={article.slug}
                    href={`/insights/${article.slug}`}
                    className="bp-ins-card"
                  >
                    <div className="bp-ins-card-meta">
                      <span className="bp-ins-tag">{article.category}</span>
                      <span className="bp-ins-sep" aria-hidden="true">·</span>
                      <span className="bp-ins-date">
                        {formatDate(article.date)}
                      </span>
                    </div>

                    <h3 className="bp-ins-card-title">{article.title}</h3>

                    <p className="bp-ins-card-excerpt">{article.excerpt}</p>

                    <div className="bp-ins-card-foot">
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
                      <span className="bp-ins-read">{article.readingTime}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* QUIET CTA STRIP */}
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
