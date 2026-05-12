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

  return (
    <main>
      <InsightArticle article={article} />
      <Footer />
    </main>
  );
}
