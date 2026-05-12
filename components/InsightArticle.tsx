import HeroNav from "./HeroNav";
import {
  type Article,
  type Block,
  getAuthor,
  getRelatedArticles,
  formatDate,
} from "@/lib/insights";

interface Props {
  article: Article;
}

/**
 * /insights/[slug] — article reader.
 *
 * Renders the article body as a sequence of typed blocks. Each block
 * variant has its own visual treatment (see renderBlock below). The
 * page is intentionally narrow on desktop (~640px content column) to
 * keep line length in the ~70ch sweet spot for reading.
 */
export default function InsightArticle({ article }: Props) {
  const author = getAuthor(article.authorId);
  const related = getRelatedArticles(article.slug, 2);

  return (
    <div className="bp-page bp-page--insights bp-page--insights-article">
      <div className="bp-grain" aria-hidden="true" />

      <div className="bp-hero-shell bp-hero-shell--compact">
        <HeroNav />

        <section
          className="wrap bp-hero bp-hero--compact bp-ins-art-hero"
          data-screen-label="Article hero"
        >
          <a className="bp-ins-art-back" href="/insights">
            <span aria-hidden="true">←</span> Back to insights
          </a>

          <div className="bp-ins-art-meta">
            <span className="bp-ins-tag">{article.category}</span>
            <span className="bp-ins-sep" aria-hidden="true">·</span>
            <span className="bp-ins-date">{formatDate(article.date)}</span>
            <span className="bp-ins-sep" aria-hidden="true">·</span>
            <span className="bp-ins-read">{article.readingTime}</span>
          </div>

          <h1 className="bp-ins-art-title">{article.title}</h1>

          <p className="bp-ins-art-excerpt">{article.excerpt}</p>

          <div className="bp-ins-art-byline">
            {author.photo ? (
              <img
                src={author.photo}
                alt={author.name}
                className="bp-ins-author-photo bp-ins-author-photo--lg"
                loading="lazy"
              />
            ) : (
              <span
                className="bp-ins-author-avatar bp-ins-author-avatar--lg"
                aria-hidden="true"
              >
                {author.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
            )}
            <span className="bp-ins-author-meta">
              <span className="bp-ins-author-name">{author.name}</span>
              <span className="bp-ins-author-role">{author.role}</span>
            </span>
          </div>
        </section>
      </div>

      <div className="bp-fade-down" aria-hidden="true" />

      {/* HERO IMAGE — drops between hero band and article body */}
      {article.image && (
        <div
          className="bp-ins-art-hero-image"
          data-screen-label="Article hero image"
        >
          <div className="wrap">
            <img src={article.image} alt="" loading="lazy" />
          </div>
        </div>
      )}

      {/* BODY — narrow reading column */}
      <section className="bp-ins-art-body-wrap" data-screen-label="Article body">
        <article className="bp-ins-art-body">
          {article.content.map((block, i) => (
            <RenderedBlock key={i} block={block} />
          ))}
        </article>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section
          className="bp-ins-related-wrap"
          data-screen-label="Related articles"
        >
          <div className="wrap">
            <div className="bp-ins-grid-head">
              <span className="bar" aria-hidden="true" />
              <h2 className="bp-ins-grid-h2">Keep reading</h2>
            </div>

            <div className="bp-ins-grid bp-ins-grid--related">
              {related.map((r) => {
                const ra = getAuthor(r.authorId);
                return (
                  <a
                    key={r.slug}
                    href={`/insights/${r.slug}`}
                    className="bp-ins-card"
                  >
                    <div className="bp-ins-card-meta">
                      <span className="bp-ins-tag">{r.category}</span>
                      <span className="bp-ins-sep" aria-hidden="true">·</span>
                      <span className="bp-ins-date">{formatDate(r.date)}</span>
                    </div>
                    <h3 className="bp-ins-card-title">{r.title}</h3>
                    <p className="bp-ins-card-excerpt">{r.excerpt}</p>
                    <div className="bp-ins-card-foot">
                      <span className="bp-ins-author bp-ins-author--compact">
                        {ra.photo ? (
                          <img
                            src={ra.photo}
                            alt={ra.name}
                            className="bp-ins-author-photo"
                            loading="lazy"
                          />
                        ) : (
                          <span
                            className="bp-ins-author-avatar"
                            aria-hidden="true"
                          >
                            {ra.name
                              .split(" ")
                              .map((p) => p[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase()}
                          </span>
                        )}
                        <span className="bp-ins-author-name">{ra.name}</span>
                      </span>
                      <span className="bp-ins-read">{r.readingTime}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* QUIET CTA STRIP */}
      <section className="bp-ins-cta" data-screen-label="Article CTA">
        <div className="wrap">
          <div className="bp-ins-cta-row">
            <div className="bp-ins-cta-copy">
              <span className="bp-ins-cta-eyebrow">
                <span className="bar" aria-hidden="true" />
                Want to talk through any of this?
              </span>
              <p className="bp-ins-cta-line">
                If this piece sparked a question about your own AI work,
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

/* ─── Block renderer ────────────────────────────────────────────────
   One component per block variant. Heading levels map to <h2>/<h3>.
   Pullquotes get optional attribution. Lists toggle ordered/unordered.
   Callouts are accent-colored panels for short emphasized lines.
   ────────────────────────────────────────────────────────────────── */

function RenderedBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return <p className="bp-ins-art-p">{block.text}</p>;

    case "heading":
      if (block.level === 2) {
        return <h2 className="bp-ins-art-h2">{block.text}</h2>;
      }
      return <h3 className="bp-ins-art-h3">{block.text}</h3>;

    case "pullquote":
      return (
        <blockquote className="bp-ins-art-pull">
          <p>&ldquo;{block.text}&rdquo;</p>
          {block.attribution && (
            <cite className="bp-ins-art-pull-cite">{block.attribution}</cite>
          )}
        </blockquote>
      );

    case "list":
      if (block.ordered) {
        return (
          <ol className="bp-ins-art-list bp-ins-art-list--ordered">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="bp-ins-art-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <aside className="bp-ins-art-callout">
          <span className="bp-ins-art-callout-bar" aria-hidden="true" />
          <p>{block.text}</p>
        </aside>
      );

    default:
      return null;
  }
}
