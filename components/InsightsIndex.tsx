import HeroNav from "./HeroNav";
import InsightCover from "./InsightCover";
import {
  articles,
  getFeaturedArticle,
  getRecentArticles,
  getAuthor,
  formatDate,
} from "@/lib/insights";

/**
 * /insights — magazine front page.
 *
 * Layout (Option 3 from concept sketches):
 *   1. Compact top: floating nav + thin magazine strip header
 *   2. Featured article: abstract cover left, big copy right
 *   3. Grid of remaining articles, each with its own cover
 *   4. Quiet CTA strip linking to /contact
 *
 * The page reads as a publication, not a marketing landing page.
 * Covers come from <InsightCover/>, which generates an abstract SVG
 * keyed off category + slug so every new article auto-gets a cover.
 */
export default function InsightsIndex() {
  const featured = getFeaturedArticle();
  const rest = getRecentArticles(featured.slug);
  const featuredAuthor = getAuthor(featured.authorId);

  const initials = (name: string) =>
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div className="bp-page bp-page--insights bp-page--insights-magazine">
      <div className="bp-grain" aria-hidden="true" />

      {/* TOP — floating nav + magazine strip */}
      <div className="bp-ins-top">
        <HeroNav />

        <div className="bp-ins-strip">
          <div className="wrap bp-ins-strip-inner">
            <div className="bp-ins-strip-title">
              <span className="dot" aria-hidden="true" />
              <span className="bp-ins-strip-label">Insights</span>
              <span className="sep" aria-hidden="true">·</span>
              <span className="bp-ins-strip-desc">
                Field notes from Origin AI
              </span>
            </div>
            <div className="bp-ins-strip-meta">
              Updated monthly · {articles.length} article
              {articles.length === 1 ? "" : "s"}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED — cover + body */}
      <section
        className="bp-ins-mag-featured-wrap"
        data-screen-label="Featured article"
      >
        <div className="wrap">
          <div className="bp-ins-mag-featured-eyebrow">
            <span className="bar" aria-hidden="true" />
            <span>Latest · {formatDate(featured.date)}</span>
          </div>

          <a
            href={`/insights/${featured.slug}`}
            className="bp-ins-mag-featured"
          >
            <div className="bp-ins-mag-featured-cover">
              <InsightCover
                category={featured.category}
                seed={featured.slug}
                aspect="featured"
              />
            </div>

            <div className="bp-ins-mag-featured-body">
              <div className="bp-ins-mag-featured-meta">
                <span className="bp-ins-tag">{featured.category}</span>
                <span className="bp-ins-sep" aria-hidden="true">·</span>
                <span>{featured.readingTime}</span>
              </div>

              <h1 className="bp-ins-mag-featured-title">{featured.title}</h1>

              <p className="bp-ins-mag-featured-excerpt">{featured.excerpt}</p>

              <div className="bp-ins-mag-featured-foot">
                <span className="bp-ins-author">
                  {featuredAuthor.photo ? (
                    <img
                      src={featuredAuthor.photo}
                      alt={featuredAuthor.name}
                      className="bp-ins-author-photo"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className="bp-ins-author-avatar"
                      aria-hidden="true"
                    >
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
            </div>
          </a>
        </div>
      </section>

      {/* GRID — remaining articles, each with cover */}
      {rest.length > 0 && (
        <section
          className="bp-ins-grid-wrap"
          data-screen-label="Recent articles"
        >
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
                    className="bp-ins-card bp-ins-card--with-cover"
                  >
                    <div className="bp-ins-card-cover">
                      <InsightCover
                        category={article.category}
                        seed={article.slug}
                        aspect="card"
                      />
                    </div>

                    <div className="bp-ins-card-body">
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
                        <span className="bp-ins-read">
                          {article.readingTime}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
