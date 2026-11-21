import type { Metadata } from "next";

/**
 * Shared Open Graph fields for a page.
 *
 * The root layout sets homepage Open Graph tags. Next.js does not merge
 * those with a page: if a page sets `openGraph` at all, it replaces the
 * layout object. Pages that only set `title`, `description`, and
 * `canonical` therefore keep the homepage og:title, og:description, and
 * og:url.
 *
 * This helper sets those three from the page's own title, description,
 * and canonical URL, and repeats the existing site name, locale, type,
 * and default image so those tags stay as they are. Insights posts set
 * their own `openGraph` and are intentionally not routed through here.
 */
const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Origin AI — AI Consulting & Custom AI Software in Winnipeg",
};

export function pageOpenGraph(
  title: string,
  description: string,
  url: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    url,
    siteName: "Origin AI",
    type: "website",
    locale: "en_CA",
    images: [DEFAULT_OG_IMAGE],
  };
}
