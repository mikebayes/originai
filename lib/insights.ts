/**
 * Insights — article data and types.
 *
 * Single source of truth for everything published at /insights. No
 * CMS. Articles are TypeScript objects with structured content
 * blocks so rendering can stay precise to the brand.
 *
 * Mike: paste new article content in chat. Append a new entry to
 * `articles` below, run the type checker, ship.
 *
 * Migration paths if this ever needs to leave TypeScript:
 *   - JSON: `JSON.stringify(articles)` exports the whole archive
 *   - MDX: small script walks articles, writes one .mdx per slug
 *   - CMS import: most platforms accept JSON via their import API
 * The content shape (slug, title, author, date, blocks) is universal.
 */

export interface Author {
  id: string;
  name: string;
  role: string;
  /** Path to a square headshot in /public/images/. Optional. */
  photo?: string;
}

/** Typed content blocks. Add a new variant when a future article
 *  needs a structure we haven't used yet. Today, paragraph + heading
 *  cover all migrated articles; the rest are scaffolded for later. */
export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "pullquote"; text: string; attribution?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; text: string };

export interface Article {
  /** URL slug. Lowercased, hyphen-separated, no trailing punctuation. */
  slug: string;
  title: string;
  /** Short intro paragraph used as the card excerpt and the article's
   *  opening dek. Two-three sentences max. */
  excerpt: string;
  /** ISO date (YYYY-MM-DD). Used for sorting + display formatting. */
  date: string;
  /** Author id — must match a key in the `authors` map. */
  authorId: string;
  /** Human-readable read time, e.g. "5 min read". Computed by hand at
   *  ~200 wpm. Kept as a string so we can fine-tune per piece. */
  readingTime: string;
  /** Loose category. Keep the set small. Used for filtering + visual
   *  accent. Add new ones sparingly. */
  category: "Adoption" | "Build" | "Strategy" | "Managed" | "Notes";
  /** Abstract conceptual cover image. Path to a file in /public/.
   *  Optional — if missing, the card shows a quiet placeholder. */
  image?: string;
  content: Block[];
}

export const authors: Record<string, Author> = {
  "mike-bayes": {
    id: "mike-bayes",
    name: "Mike Bayes",
    role: "Lead AI Advisor",
    photo: "/images/MB.avif",
  },
  "chad-beauchamp": {
    id: "chad-beauchamp",
    name: "Chad Beauchamp",
    role: "Co-Founder & CEO",
    photo: "/images/CB.avif",
  },
  "taylor-crawford": {
    id: "taylor-crawford",
    name: "Taylor Crawford",
    role: "Co-Founder, Growth & Partnerships",
    photo: "/images/TC.avif",
  },
};

/* ─── Articles ─────────────────────────────────────────────────────
   Ordered most-recent first. Sort is preserved when rendering;
   getRecentArticles() does not re-sort, it just slices in this
   order. Keep new entries at the top.
   ──────────────────────────────────────────────────────────────── */
export const articles: Article[] = [
  {
    slug: "human-centric-ai-why-adoption-matters-more-than-automation",
    title:
      "Human-Centric AI: Why Adoption Matters More Than Automation",
    excerpt:
      "Most AI initiatives fail not because the technology falls short, but because people struggle to adopt it. This piece explains why human-centric enablement matters more than automation, and how organizations build sustainable AI adoption.",
    date: "2025-12-12",
    authorId: "mike-bayes",
    readingTime: "5 min read",
    category: "Adoption",
    image: "/images/insights/human-centric-ai.jpg",
    content: [
      { type: "heading", level: 3, text: "Adoption matters more than automation" },
      {
        type: "paragraph",
        text: "Most conversations about AI focus on automation. Faster processes. Fewer manual steps. Lower costs. While those outcomes can be real, they are rarely where AI success actually begins.",
      },
      {
        type: "paragraph",
        text: "In practice, most AI initiatives fail or stall not because the technology does not work, but because people do not use it. Tools get purchased, pilots get launched, and enthusiasm fades when teams are unsure how AI fits into their day-to-day work.",
      },
      {
        type: "paragraph",
        text: "This is why adoption matters more than automation.",
      },

      {
        type: "heading",
        level: 3,
        text: "AI is a behavior change, not a technology upgrade",
      },
      {
        type: "paragraph",
        text: "AI changes how people think, decide, and work. That makes it fundamentally different from most software rollouts. You are not just introducing a new tool. You are asking people to trust it, experiment with it, and incorporate it into decisions they already feel accountable for.",
      },
      {
        type: "paragraph",
        text: "Without confidence, clarity, and guidance, most teams revert to familiar habits. The result is underused tools, inconsistent outcomes, and growing skepticism about AI's value.",
      },

      {
        type: "heading",
        level: 3,
        text: "Automation without adoption creates risk",
      },
      {
        type: "paragraph",
        text: "Automating processes before people understand the technology can introduce new risks. Poor inputs, misunderstood outputs, and misplaced trust in AI recommendations can all lead to bad decisions at scale.",
      },
      {
        type: "paragraph",
        text: "When teams do not understand how or why AI is being used, accountability becomes unclear. This often slows adoption further and raises concerns around data use, accuracy, and responsibility.",
      },

      {
        type: "heading",
        level: 3,
        text: "Human-centric AI starts with enablement",
      },
      {
        type: "paragraph",
        text: "A human-centric approach to AI starts by building understanding and confidence. Leaders need clarity on what AI can and cannot do. Teams need practical guidance on how AI supports their roles, not replaces them.",
      },
      {
        type: "paragraph",
        text: "Training, hands-on experimentation, and clear use cases create the foundation for meaningful adoption. Once people are comfortable using AI in their own work, automation becomes a natural next step rather than a forced initiative.",
      },

      {
        type: "heading",
        level: 3,
        text: "Sustainable AI success is incremental",
      },
      {
        type: "paragraph",
        text: "The most successful AI programs grow gradually. They start with small, visible wins that improve productivity or decision-making. Over time, these wins build trust and momentum.",
      },
      {
        type: "paragraph",
        text: "Automation then becomes a tool for scaling what already works, not a shortcut to transformation.",
      },

      {
        type: "heading",
        level: 3,
        text: "Adoption first leads to better outcomes",
      },
      {
        type: "paragraph",
        text: "Organizations that prioritize adoption see better long-term results. Teams use AI more consistently. Leaders make better decisions about where automation makes sense. Risk is reduced, and value becomes easier to measure.",
      },
      {
        type: "paragraph",
        text: "AI delivers its greatest impact when it supports people, not when it tries to bypass them.",
      },
      {
        type: "paragraph",
        text: "At Origin AI, we believe real progress comes from helping people use AI confidently in the work they already do. Automation follows naturally when adoption is done right.",
      },
    ],
  },
  {
    slug: "from-curiosity-to-capability-how-teams-actually-learn-to-use-ai",
    title:
      "From Curiosity to Capability: How Teams Actually Learn to Use AI",
    excerpt:
      "Interest in AI is everywhere, but real capability is rare. This piece explores how teams move beyond curiosity and build the skills, confidence, and habits needed to use AI effectively in real work.",
    date: "2025-11-28",
    authorId: "chad-beauchamp",
    readingTime: "6 min read",
    category: "Adoption",
    image: "/images/insights/curiosity-to-capability.jpg",
    content: [
      {
        type: "heading",
        level: 3,
        text: "Curiosity is easy. Capability takes work.",
      },
      {
        type: "paragraph",
        text: "Most teams are curious about AI. They attend a demo, experiment with a tool, or ask a few questions. That curiosity is a useful starting point, but it is not enough. Curiosity does not change how work gets done, and it does not create lasting value on its own.",
      },
      {
        type: "paragraph",
        text: "Capability is different. Capability means people know when to use AI, how to use it, and when not to. It means AI fits naturally into daily workflows instead of feeling like an extra task. Getting there requires more than exposure to tools. It requires deliberate learning and practice.",
      },

      {
        type: "heading",
        level: 3,
        text: "Why tool training alone falls short",
      },
      {
        type: "paragraph",
        text: "Many organizations try to build AI capability by focusing on tools first. They offer platform walkthroughs, feature lists, or one-time training sessions. While this can be helpful, it rarely leads to sustained adoption.",
      },
      {
        type: "paragraph",
        text: "The problem is not the tools. The problem is context. Without understanding how AI applies to specific roles and responsibilities, people struggle to translate knowledge into action. They may know what a tool can do, but not how it helps them do their job better.",
      },
      {
        type: "paragraph",
        text: "Real capability develops when learning is tied directly to real work.",
      },

      {
        type: "heading",
        level: 3,
        text: "How teams actually learn to use AI",
      },
      {
        type: "paragraph",
        text: "Teams build AI capability through a combination of understanding, repetition, and confidence. First, people need a clear mental model of what AI is and what it is not. This removes fear, confusion, and unrealistic expectations.",
      },
      {
        type: "paragraph",
        text: "Next, they need hands-on experience using AI in familiar scenarios. This could include drafting content, analyzing information, supporting decisions, or simplifying routine tasks. When learning is grounded in day-to-day work, it becomes practical instead of theoretical.",
      },
      {
        type: "paragraph",
        text: "Finally, teams need time and support to build confidence. This includes guidance on best practices, feedback on usage, and space to experiment safely. Capability grows when people feel supported, not pressured.",
      },

      {
        type: "heading",
        level: 3,
        text: "Moving from learning to habit",
      },
      {
        type: "paragraph",
        text: "The goal is not for teams to try AI once. The goal is for AI to become a natural part of how work gets done. This happens when usage patterns become habits and when people trust the results they are getting.",
      },
      {
        type: "paragraph",
        text: "Organizations that succeed focus less on mastery and more on momentum. Small improvements compound quickly when teams are using AI consistently and intentionally.",
      },
      {
        type: "paragraph",
        text: "Curiosity opens the door, but capability is what delivers results. Teams that invest in learning the right way move faster, work smarter, and get real value from AI.",
      },
    ],
  },
  {
    slug: "business-first-technology-second-a-smarter-way-to-adopt-ai",
    title:
      "Business First, Technology Second: A Smarter Way to Adopt AI",
    excerpt:
      "Successful AI adoption does not start with tools. It starts with business problems, people, and processes. This piece explains why leading with business needs leads to better outcomes and fewer failed AI initiatives.",
    date: "2025-11-17",
    authorId: "mike-bayes",
    readingTime: "6 min read",
    category: "Adoption",
    image: "/images/insights/business-first-technology-second.jpg",
    content: [
      {
        type: "paragraph",
        text: "Artificial intelligence has become easier to access than ever. New tools appear weekly, promising faster work, better decisions, and competitive advantage. Yet despite the excitement, many organizations struggle to turn AI experimentation into real business value.",
      },
      {
        type: "paragraph",
        text: "The problem is rarely the technology itself. More often, it is the order in which decisions are made.",
      },
      {
        type: "paragraph",
        text: "Too many AI initiatives begin with tools. A platform is selected, features are explored, and pilots are launched before the organization is clear on what it is actually trying to improve. When this happens, AI adoption becomes disconnected from real business needs and teams quickly lose confidence in the effort.",
      },
      {
        type: "paragraph",
        text: "A smarter approach starts with the business first and treats technology as a supporting element, not the driver.",
      },

      {
        type: "heading",
        level: 3,
        text: "Why technology-led AI initiatives fall short",
      },
      {
        type: "paragraph",
        text: "When AI adoption begins with tools, organizations tend to focus on what is possible rather than what is necessary. This often leads to scattered use cases, overlapping solutions, and unclear ownership.",
      },
      {
        type: "paragraph",
        text: "Teams may be asked to use AI in ways that do not align with how they work today. Leaders may struggle to explain why certain tools were chosen or how success will be measured. As a result, adoption stalls and early enthusiasm fades.",
      },
      {
        type: "paragraph",
        text: "In many cases, AI becomes something people are told to use rather than something that genuinely helps them do their jobs better.",
      },

      {
        type: "heading",
        level: 3,
        text: "Starting with business goals changes everything",
      },
      {
        type: "paragraph",
        text: "A business-first approach flips the conversation. Instead of asking what AI can do, leaders begin by asking where the organization is experiencing friction.",
      },
      {
        type: "list",
        items: [
          "Where are decisions slow or inconsistent?",
          "Where is work repetitive or manual?",
          "Where do teams struggle to access or interpret information?",
        ],
      },
      {
        type: "paragraph",
        text: "These questions create clarity. They help identify problems worth solving and set realistic expectations for what AI should support.",
      },
      {
        type: "paragraph",
        text: "Once business priorities are clear, it becomes much easier to evaluate technology options. Tools are selected based on fit, not novelty. AI is introduced with a clear purpose and a defined outcome.",
      },

      {
        type: "heading",
        level: 3,
        text: "People and processes come before platforms",
      },
      {
        type: "paragraph",
        text: "Even the best AI solution will fail if it does not fit existing workflows or if teams are unsure how to use it. A business-first mindset recognizes that adoption is a human challenge as much as a technical one.",
      },
      {
        type: "paragraph",
        text: "Training plays a critical role. People need to understand what AI is, what it is not, and how it supports their role. They also need space to build confidence through practical use, not just demonstrations.",
      },
      {
        type: "paragraph",
        text: "Processes matter just as much. AI should enhance how work already gets done, not force teams to work around it. When AI fits naturally into daily routines, usage becomes consistent and value becomes visible.",
      },

      {
        type: "heading",
        level: 3,
        text: "Measuring impact instead of activity",
      },
      {
        type: "paragraph",
        text: "Another advantage of leading with the business is that success becomes easier to measure. Instead of tracking how often a tool is used, organizations can evaluate whether AI is saving time, improving decisions, or reducing complexity.",
      },
      {
        type: "paragraph",
        text: "This focus on outcomes helps leaders make better decisions about where to expand, refine, or stop AI initiatives altogether. It also builds trust by showing teams that AI adoption is tied to real improvement, not experimentation for its own sake.",
      },

      {
        type: "heading",
        level: 3,
        text: "Technology still matters, but in the right role",
      },
      {
        type: "paragraph",
        text: "None of this suggests that technology is unimportant. On the contrary, choosing the right tools is critical. The difference is timing.",
      },
      {
        type: "paragraph",
        text: "When business goals, people, and processes are clearly understood, technology selection becomes simpler and more effective. AI solutions are chosen because they serve a defined purpose, not because they are popular or powerful in isolation.",
      },

      {
        type: "heading",
        level: 3,
        text: "A more sustainable path to AI adoption",
      },
      {
        type: "paragraph",
        text: "Organizations that succeed with AI tend to follow the same pattern. They start with the business. They invest in people. They introduce technology deliberately. And they measure results that matter.",
      },
      {
        type: "paragraph",
        text: "By putting business first and technology second, AI becomes a practical capability rather than a risky experiment. This approach leads to stronger adoption, better outcomes, and long-term value that teams can actually feel in their day-to-day work.",
      },
    ],
  },
];

/* ─── Helpers ─────────────────────────────────────────────────────
   All consumers go through these so call sites stay readable and
   the index/article components don't reach into the data array
   directly.
   ──────────────────────────────────────────────────────────────── */

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article {
  // Most recent is featured. If we ever want a manual "featured"
  // flag, add `featured?: boolean` to Article and filter here.
  return articles[0];
}

export function getRecentArticles(
  excludeSlug?: string,
  limit?: number
): Article[] {
  const filtered = excludeSlug
    ? articles.filter((a) => a.slug !== excludeSlug)
    : articles;
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

export function getRelatedArticles(
  currentSlug: string,
  count = 2
): Article[] {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, count);
}

export function getAuthor(authorId: string): Author {
  return authors[authorId];
}

/** "2025-12-12" -> "December 12, 2025" */
export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
