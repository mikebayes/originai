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
    slug: "the-new-ai-stack-how-modern-applications-are-built-now",
    title:
      "The New AI Stack: How Modern Applications Are Actually Built Now",
    excerpt:
      "Most conversations about AI and software development focus on code generation and faster cycles. The bigger shift is happening in development workflows themselves, where AI-assisted environments, connected repositories, and continuous deployment are reshaping what custom software can actually do.",
    date: "2026-05-13",
    authorId: "mike-bayes",
    readingTime: "6 min read",
    category: "Build",
    image: "/images/insights/the-new-ai-stack.png",
    content: [
      {
        type: "paragraph",
        text: "Most conversations around AI and software development still focus on the obvious surface-level stuff. AI can generate code. Development cycles are speeding up. Small teams can suddenly build things that used to require much larger engineering resources.",
      },
      {
        type: "paragraph",
        text: "All of that is true, but it also misses what is probably the more important shift underneath it.",
      },
      {
        type: "paragraph",
        text: "What has changed most over the last couple of years is not simply the ability to generate code faster. It is the emergence of a very different type of development workflow and deployment model. Once you start working inside these environments regularly, you realize fairly quickly that software development itself is starting to behave differently than it did even a few years ago.",
      },
      {
        type: "paragraph",
        text: "Historically, building custom software carried a lot of operational weight with it. Development timelines were long, iteration was expensive, deployment cycles were disruptive, and even relatively small changes could become disproportionately time-consuming. Businesses often adapted themselves around software limitations because modifying the software itself was difficult enough that it became easier to change the process instead.",
      },
      { type: "paragraph", text: "A lot of SMB software decisions were shaped by that reality." },
      {
        type: "paragraph",
        text: "That is part of the reason SaaS exploded the way it did. Buying standardized platforms was usually far more practical than trying to build tailored internal systems, especially for mid-sized organizations without massive internal engineering teams.",
      },
      {
        type: "paragraph",
        text: "What feels different now is not necessarily that [custom AI software development](/services/build) suddenly became easy. Good software development is still difficult. Architecture still matters. Security still matters. Operational understanding still matters. There is still a major difference between building a quick prototype and building something stable, scalable, and maintainable.",
      },
      {
        type: "paragraph",
        text: "What has changed is the amount of friction between an idea, an iteration, and a deployed improvement.",
      },
      {
        type: "paragraph",
        text: "Modern AI-assisted development environments are increasingly connected into broader engineering workflows that include structured repositories, deployment pipelines, staging environments, and cloud infrastructure. That combination is where things start to get interesting.",
      },
      {
        type: "paragraph",
        text: "Instead of treating software as something that gets updated occasionally through large release cycles, applications can now evolve much more continuously. A workflow issue gets identified, adjustments get made, changes get tested, and deployments happen quickly enough that software starts to feel more operationally connected to the business itself.",
      },
      { type: "paragraph", text: "That may sound subtle, but it changes quite a bit." },
      {
        type: "paragraph",
        text: "Historically, businesses often treated software projects as large capital-style initiatives. Scope everything upfront, build toward a future state, launch, then live with the result for several years while incremental improvements slowly accumulate in the background.",
      },
      {
        type: "paragraph",
        text: "Increasingly, modern development workflows are allowing software to evolve more incrementally alongside the business. In practice, that changes how companies think about experimentation, operational improvements, internal workflows, and even what types of applications are economically viable to build in the first place.",
      },
      { type: "paragraph", text: "This is particularly noticeable with internal business applications." },
      {
        type: "paragraph",
        text: "For a long time, custom internal software often failed the cost-benefit test for SMBs. Even when companies had highly specific operational needs, it was usually difficult to justify building tailored systems because the development overhead and long-term maintenance burden were too high relative to the business value.",
      },
      { type: "paragraph", text: "That equation appears to be shifting." },
      {
        type: "paragraph",
        text: "When development environments become more iterative and deployment becomes less painful, smaller operational applications suddenly start making more sense. Internal quoting systems, onboarding workflows, operational dashboards, AI-assisted internal tools, customer service utilities, reporting workflows, approval systems, and process-specific applications become more realistic to build and evolve over time.",
      },
      {
        type: "paragraph",
        text: "Not because software complexity disappears, but because iteration itself becomes far less expensive operationally.",
      },
      { type: "paragraph", text: "That distinction matters." },
      {
        type: "paragraph",
        text: "There is also a tendency right now to frame all of this as \"AI replacing developers,\" which honestly feels like a misunderstanding of what is actually happening inside serious development environments.",
      },
      {
        type: "paragraph",
        text: "The stronger teams are not removing engineering discipline from the process. If anything, they are becoming more dependent on it. Once development velocity increases, architecture quality, repository structure, deployment discipline, governance, and maintainability become even more important because systems can evolve much faster than before.",
      },
      { type: "paragraph", text: "Bad software can now scale its problems faster too." },
      {
        type: "paragraph",
        text: "What AI-assisted development seems to be changing most is not the need for experienced technical teams, but the speed at which those teams can execute, iterate, and refine systems over time.",
      },
      { type: "paragraph", text: "That has fairly significant implications for businesses." },
      {
        type: "paragraph",
        text: "Over the next several years, the companies that adapt best to this environment probably will not be the ones trying to replace people with AI-generated software. More likely, they will be the organizations that become operationally better at continuous iteration. Faster refinement cycles. Faster deployment cycles. Faster feedback loops between operations and technology.",
      },
      {
        type: "paragraph",
        text: "The companies building this way already notice the difference pretty quickly once they start operating inside these environments regularly.",
      },
      {
        type: "paragraph",
        text: "Software starts behaving less like a static implementation and more like an evolving operational system that continuously adapts alongside the business itself.",
      },
    ],
  },
  {
    slug: "human-centric-ai-why-adoption-matters-more-than-automation",
    title:
      "Human-Centric AI: Why Adoption Matters More Than Automation",
    excerpt:
      "Most AI initiatives fail not because the technology falls short, but because people struggle to adopt it. This piece explains why human-centric enablement matters more than automation, and how organizations build sustainable AI adoption.",
    date: "2026-05-10",
    authorId: "mike-bayes",
    readingTime: "5 min read",
    category: "Adoption",
    image: "/images/insights/human-centric-ai.png",
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
        text: "[AI training, hands-on experimentation, and a clear roadmap](/services/strategy) create the foundation for meaningful adoption. Once people are comfortable using AI in their own work, automation becomes a natural next step rather than a forced initiative.",
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
    slug: "how-ai-is-changing-software-development-itself",
    title: "How AI Is Changing Software Development Itself",
    excerpt:
      "Public discussion swings between two extremes: AI will replace developers, or AI coding tools are mostly hype. Neither lines up with what is happening inside modern development environments. The real shift is in how software gets built, refined, deployed, and maintained over time.",
    date: "2026-05-06",
    authorId: "mike-bayes",
    readingTime: "5 min read",
    category: "Build",
    image: "/images/insights/ai-changing-software-development.png",
    content: [
      { type: "paragraph", text: "A lot of the public discussion around AI and software development still tends to swing between two extremes." },
      {
        type: "paragraph",
        text: "On one side, there is the idea that AI will replace developers entirely. On the other, there is the assumption that AI coding tools are mostly hype and that very little has fundamentally changed.",
      },
      { type: "paragraph", text: "Neither perspective really lines up with what is happening inside modern development environments." },
      {
        type: "paragraph",
        text: "What seems to be changing most is not the existence of software development itself, but the mechanics around how software gets built, refined, deployed, and maintained over time.",
      },
      { type: "paragraph", text: "The easiest way to describe it is probably this: software development is becoming significantly more iterative than it used to be." },
      {
        type: "paragraph",
        text: "Historically, there was a considerable amount of operational friction attached to development workflows. Requirements gathering, sprint planning, backlog prioritization, testing cycles, deployment coordination, release management, and post-launch refinement all introduced delays between identifying a problem and implementing a solution.",
      },
      { type: "paragraph", text: "Even relatively small application changes could move slowly once those layers accumulated." },
      {
        type: "paragraph",
        text: "That operational drag shaped how businesses interacted with technology teams for years. Many organizations became accustomed to software evolving more slowly than the business itself simply because the cost and complexity of iteration were high enough that constant refinement became impractical.",
      },
      { type: "paragraph", text: "[Modern AI-assisted development environments](/services/build) are beginning to compress those cycles fairly dramatically." },
      {
        type: "paragraph",
        text: "Part of that comes from code generation itself. Developers are no longer starting from zero every time they build interfaces, workflows, integrations, or application structures. AI tools are accelerating execution across a wide range of repetitive development tasks.",
      },
      { type: "paragraph", text: "But the larger shift is probably happening around the workflows surrounding development." },
      {
        type: "paragraph",
        text: "AI is increasingly being used inside connected engineering environments that include structured repositories, deployment pipelines, staging environments, cloud infrastructure, and continuous iteration workflows. Once those systems are operating together, software development starts behaving differently than it did under older development models.",
      },
      { type: "paragraph", text: "The distance between an operational idea and a deployed refinement becomes much shorter." },
      {
        type: "paragraph",
        text: "That does not mean software suddenly becomes easy to build. If anything, faster iteration tends to expose poor architecture and weak engineering discipline more quickly. Systems still require thoughtful design, maintainability, security, governance, and operational alignment.",
      },
      { type: "paragraph", text: "In some ways, experienced technical leadership becomes even more important once development velocity increases." },
      { type: "paragraph", text: "Bad systems can now evolve quickly too." },
      {
        type: "paragraph",
        text: "One of the more interesting changes happening underneath all of this is that software development is becoming less linear and more conversational. Historically, software projects often followed fairly rigid implementation structures. Gather requirements, define scope, develop features, deploy, then revisit improvements later.",
      },
      {
        type: "paragraph",
        text: "Increasingly, applications can evolve through ongoing operational feedback loops. Teams identify friction points, test improvements, refine workflows, and deploy incremental changes continuously instead of waiting for major release cycles.",
      },
      { type: "paragraph", text: "That changes how organizations think about experimentation." },
      {
        type: "paragraph",
        text: "Historically, software changes often carried enough cost and disruption that businesses became cautious about modifying operational systems too frequently. The process itself created hesitation.",
      },
      {
        type: "paragraph",
        text: "As iteration becomes faster and deployment becomes less disruptive, companies gain more flexibility to evolve software alongside changing business needs instead of treating systems as relatively static implementations.",
      },
      { type: "paragraph", text: "That has fairly broad implications beyond development teams themselves." },
      {
        type: "paragraph",
        text: "It changes how organizations think about operational workflows, internal tools, customer experiences, and even product development cycles. In many environments, software is starting to behave less like a fixed asset and more like an evolving operational layer that continuously adapts over time.",
      },
      {
        type: "paragraph",
        text: "The organizations benefiting most from this shift are generally not the ones treating AI as a shortcut to eliminate engineering discipline. They are usually the teams combining AI-assisted development with strong operational understanding, structured development practices, and continuous refinement workflows.",
      },
      { type: "paragraph", text: "That combination appears to be where the larger long-term shift is happening." },
    ],
  },
  {
    slug: "why-internal-business-apps-are-about-to-explode",
    title: "Why Internal Business Apps Are About to Explode",
    excerpt:
      "Custom internal applications used to fail the cost-benefit test for most SMBs. That equation is shifting. As AI-assisted development and modern deployment workflows reduce iteration friction, smaller targeted operational apps are becoming the more practical option.",
    date: "2026-05-03",
    authorId: "mike-bayes",
    readingTime: "5 min read",
    category: "Build",
    image: "/images/insights/internal-business-apps-explosion.png",
    content: [
      {
        type: "paragraph",
        text: "For most of the last two decades, the economics around custom business software were fairly straightforward.",
      },
      {
        type: "paragraph",
        text: "Unless you were a large enterprise with a substantial technology budget, building internal applications usually carried more complexity, cost, and long-term overhead than most organizations wanted to take on. Even companies with very specific operational requirements often defaulted to SaaS platforms simply because custom development was difficult to justify financially.",
      },
      { type: "paragraph", text: "That shaped how a lot of businesses evolved operationally." },
      {
        type: "paragraph",
        text: "Teams adapted their workflows around the software they purchased. Processes became constrained by platform limitations. Gaps were handled manually. Spreadsheets filled the spaces between disconnected systems. Everyone understood the tradeoff, but for the most part it was still the most practical option available.",
      },
      {
        type: "paragraph",
        text: "What seems to be changing now is not necessarily the need for SaaS platforms. Those are not going away. Most organizations are still not going to build their own accounting software, CRM, or payroll systems.",
      },
      {
        type: "paragraph",
        text: "What does appear to be changing is the viability of smaller, highly targeted operational applications that sit around those platforms and solve very specific business problems.",
      },
      { type: "paragraph", text: "That shift is being driven partly by AI, but probably not in the way most people think." },
      {
        type: "paragraph",
        text: "The public conversation tends to focus heavily on AI generating code, which is certainly part of the story. In practice though, what feels more significant is the change happening around development workflows themselves. Modern AI-assisted development environments, connected repositories, streamlined deployment pipelines, and cloud-native infrastructure are dramatically reducing the amount of friction involved in building and evolving software.",
      },
      {
        type: "paragraph",
        text: "Historically, even relatively small internal applications could become operationally heavy. Requirements gathering took time. Development cycles stretched out. Small changes turned into backlog items. Enhancements became projects. Deployment carried enough complexity that businesses often delayed improvements simply to avoid disruption.",
      },
      { type: "paragraph", text: "That friction influenced software decisions for years." },
      { type: "paragraph", text: "Now the process is becoming much more iterative." },
      {
        type: "paragraph",
        text: "Applications can be prototyped quickly, refined continuously, deployed incrementally, and adjusted alongside the business itself instead of waiting for large future roadmap cycles. Once development and deployment environments become more fluid, the economics around internal software start to look very different than they did even a few years ago.",
      },
      { type: "paragraph", text: "That is where things get interesting for SMBs." },
      {
        type: "paragraph",
        text: "A lot of businesses have operational workflows that are highly specific to how they function. Quoting processes, onboarding flows, customer communication systems, reporting layers, scheduling coordination, approval chains, inventory visibility, internal AI assistants, service workflows, and operational dashboards are rarely perfect fits inside off-the-shelf platforms.",
      },
      {
        type: "paragraph",
        text: "Historically, companies tolerated those inefficiencies because building custom operational tools often created even larger inefficiencies.",
      },
      { type: "paragraph", text: "Now there are situations where [building the tailored workflow as custom AI software](/services/build) may actually be the more practical option." },
      {
        type: "paragraph",
        text: "Not because custom software suddenly became simple, but because the cost and complexity of iteration have changed so significantly.",
      },
      {
        type: "paragraph",
        text: "That distinction matters because software projects have traditionally been evaluated as large upfront investments. Build everything, launch everything, and hope the requirements remain relatively stable over time.",
      },
      {
        type: "paragraph",
        text: "Increasingly, internal applications are becoming more evolutionary in nature. Businesses can start with a focused operational problem, deploy something relatively lightweight, gather feedback, refine the workflow, and continue iterating over time. In many cases, the first version no longer needs to be perfect because the system itself can evolve much more continuously.",
      },
      { type: "paragraph", text: "That changes the risk profile around internal software development quite a bit." },
      {
        type: "paragraph",
        text: "There is also a broader strategic implication underneath all of this. For a long time, software increasingly standardized how companies operated. Businesses across industries ended up using largely the same platforms, the same workflows, and often the same operational structures because adapting to software constraints became part of normal business operations.",
      },
      {
        type: "paragraph",
        text: "As tailored operational software becomes more accessible, companies may begin differentiating themselves operationally again. Not necessarily through massive enterprise platforms, but through smaller systems that align more closely with how they actually work.",
      },
      { type: "paragraph", text: "Some organizations are going to move faster here than others." },
      {
        type: "paragraph",
        text: "The companies that benefit most probably will not be the ones trying to build everything themselves. More likely, they will be the organizations that become better at identifying operational friction points and building focused systems that improve how work actually gets done internally.",
      },
      { type: "paragraph", text: "That feels like a fairly meaningful shift from where the market has been for a long time." },
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
    image: "/images/insights/curiosity-to-capability.png",
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
        text: "Curiosity opens the door, but capability is what delivers results. Teams that invest in [structured AI training and a clear strategy](/services/strategy) move faster, work smarter, and get real value from AI.",
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
    image: "/images/insights/business-first-technology-second.png",
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
        text: "A [business-first AI strategy](/services/strategy) flips the conversation. Instead of asking what AI can do, leaders begin by asking where the organization is experiencing friction.",
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
