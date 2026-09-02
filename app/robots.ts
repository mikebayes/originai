import type { MetadataRoute } from "next";

const BASE_URL = "https://www.originai.ca";

/**
 * robots.txt for /robots.txt. Next.js generates the plain-text file from
 * the object returned here.
 *
 * Before this file existed the site served no robots.txt at all, which
 * meant no sitemap reference and no crawl directives of any kind.
 *
 * Why /draft/ is NOT disallowed
 * -----------------------------
 * Every page under app/draft/ already sets
 * `robots: { index: false, follow: false }` in its own metadata export,
 * and nothing in the live site links to them. That noindex is the
 * directive that actually keeps them out of the index.
 *
 * A Disallow rule here would be counterproductive: a blocked URL cannot
 * be crawled, so Googlebot could never READ the noindex. If a draft URL
 * were ever discovered another way (a shared review link, for example),
 * Google could index it URL-only with no content, which is the exact
 * outcome we are trying to prevent. Allowing the crawl lets the noindex
 * be read and obeyed on first contact.
 *
 * This is the same lesson as the dev.originai.ca cleanup: blocking a
 * crawler stops it from learning what you want it to learn.
 *
 * /api/ is disallowed because app/api/contact/route.ts is a POST-only
 * endpoint with no crawlable content.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
