import type { MetadataRoute } from "next";
import { articles } from "@/lib/insights";

const BASE_URL = "https://www.originai.ca";

/**
 * Sitemap for /sitemap.xml. Next.js generates the XML automatically
 * from the array we return here. Add new static pages to the
 * `staticPages` list. Article URLs are pulled live from
 * lib/insights.ts so new articles auto-appear after build.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/strategy", priority: 0.9, changeFrequency: "monthly" as const },
    // Team AI Training. 0.9 to match the other two primary service pages.
    { url: "/services/ai-training", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/build", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/managed", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/approach", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/team", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/insights", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((page) => ({
    ...page,
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    lastModified: new Date(article.date + "T00:00:00"),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
