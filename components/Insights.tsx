import { getRecentArticles, getAuthor, formatDate } from "@/lib/insights";

/**
 * Homepage Insights section — preview of recent articles.
 *
 * Pulls live from lib/insights.ts so the homepage and the /insights
 * page stay in sync. Shows the three most recent articles. To change
 * what appears here, add or reorder entries in lib/insights.ts —
 * articles[0..2] are always rendered first.
 */
export default function Insights() {
  const recent = getRecentArticles(undefined, 3);

  // Short date for the homepage card (e.g. "Dec 12 · 2025")
  const shortDate = (iso: string) => {
    const d = new Date(iso + "T00:00:00");
    const month = d.toLocaleDateString("en-US", { month: "short" });
    const day = d.getDate();
    const year = d.getFullYear();
    return { md: `${month} ${day}`, year: String(year) };
  };

  const initials = (name: string) =>
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="stage" data-screen-label="Insights">
      <div className="stage-grain" aria-hidden="true" />
      <div className="stage-inner">
        <header className="s-header" data-reveal>
          <div>
            <span className="eyebrow">Insights</span>
            <h2 className="s-h2 display">
              <span>The latest from Origin.</span>
              <span className="muted"> Field notes from the work.</span>
            </h2>
          </div>
          <p className="s-lede">
            Short, opinionated reads on framing AI problems, building durable systems, and the operations work that makes them stick.
          </p>
        </header>

        <div className="insights-grid" data-reveal-stagger>
          {recent.map((a) => {
            const author = getAuthor(a.authorId);
            const { md, year } = shortDate(a.date);
            return (
              <a key={a.slug} className="insight" href={`/insights/${a.slug}`}>
                <div className="insight-photo cphoto">
                  <span className="insight-tag">{a.category}</span>
                  <div className="cphoto-grain" aria-hidden="true" />
                  <span className="cphoto-caption">
                    <span className="bar" />
                    Cover · {a.category}
                  </span>
                </div>
                <div className="insight-body">
                  <div className="insight-meta">
                    <span>{md}</span>
                    <span className="sep" aria-hidden="true" />
                    <span>{year}</span>
                  </div>
                  <h3 className="insight-title">{a.title}</h3>
                  <div className="insight-foot">
                    <span className="author">
                      <span className="author-avatar" aria-hidden="true">
                        {initials(author.name)}
                      </span>
                      {author.name}
                    </span>
                    <span className="read-time">{a.readingTime}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="insights-foot">
          <a className="tlink" href="/insights">
            View all insights <span className="arrow" aria-hidden="true">→</span>
          </a>
          <span className="meta">Updated monthly · No newsletter spam</span>
        </div>
      </div>
    </section>
  );
}
