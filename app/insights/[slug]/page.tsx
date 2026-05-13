import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightArticle from "@/components/InsightArticle";
import Footer from "@/components/Footer";
import {
  articles,
  getArticleBySlug,
  getAuthor,
} from "@/lib/insights";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-render every article slug at build time. Adding a new article
 * to `articles` automatically gets it a static page on next build.
 */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: "Article not found | Origin AI",
    };
  }

  const author = getAuthor(article.authorId);
  return {
    title: `${article.title} | Origin AI Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.originai.ca/insights/${article.slug}`,
    },
    authors: author ? [{ name: author.name }] : undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: author ? [author.name] : undefined,
      url: `https://www.originai.ca/insights/${article.slug}`,
    },
  };
}

export default async function InsightArticleRoute({ params }: RouteParams) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const author = getAuthor(article.authorId);
  const articleUrl = `https://www.originai.ca/insights/${article.slug}`;

  // BlogPosting JSON-LD. More specific than Article, and Google indexes
  // BlogPosting markup for rich result candidacy (date, author, image).
  // Publisher references the homepage ProfessionalService @id so the
  // graph stays connected across the site.
  const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.title,
    description: article.excerpt,
    image: article.image
      ? `https://www.originai.ca${article.image}`
      : undefined,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
    },
    publisher: { "@id": "https://www.originai.ca/#organization" },
    url: articleUrl,
    articleSection: article.category,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
      <InsightArticle article={article} />
      <Footer />
    </main>
  );
}
