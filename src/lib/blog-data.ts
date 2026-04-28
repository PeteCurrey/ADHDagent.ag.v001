export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The 7 Best AI Tools for ADHD in 2025 (Actually Tested)",
    slug: "best-ai-tools-for-adhd-2025",
    excerpt: "We tested dozens of AI tools to find the ones that actually help with executive function challenges. Here are the clear winners.",
    category: "AI Tools",
    publishedAt: "2026-04-20",
    readTime: "8 min read",
    author: {
      name: "Pete",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pete"
    },
    featured: true,
    content: `
      ## Why Most AI Tools Fail ADHD Brains
      Many AI tools add more noise than clarity. For an ADHD brain, a new tool often represents another source of overwhelm.

      ### The Selection Criteria
      1. **Task Initiation**: Does it help you start?
      2. **Frictionless Entry**: Can you get thoughts in quickly?
      3. **Structure without Rigidity**: Does it allow for lateral thinking?

      [Full content would continue here for 1,500 words...]
    `
  },
  {
    title: "Why AI Is Overwhelming If You Have ADHD — And How to Fix It",
    slug: "why-ai-is-overwhelming-adhd",
    excerpt: "The paradox of AI: it promises productivity but often delivers decision fatigue. Learn how to curate your stack.",
    category: "ADHD Strategies",
    publishedAt: "2026-04-18",
    readTime: "6 min read",
    author: {
      name: "Pete",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pete"
    },
    content: "Content placeholder..."
  },
  {
    title: "Body Doubling With AI: Does It Actually Work?",
    slug: "body-doubling-with-ai",
    excerpt: "Exploring the science of body doubling and how AI agents can provide the same accountability benefits.",
    category: "Executive Function",
    publishedAt: "2026-04-15",
    readTime: "10 min read",
    author: {
      name: "Pete",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pete"
    },
    content: "Content placeholder..."
  },
  {
    title: "ADHD Tax Is Real — Here's How AI Agents Are Reclaiming It",
    slug: "adhd-tax-ai-agents",
    excerpt: "From forgotten subscriptions to late fees, learn how automation can eliminate the hidden costs of ADHD.",
    category: "ADHD Strategies",
    publishedAt: "2026-04-12",
    readTime: "7 min read",
    author: {
      name: "Pete",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pete"
    },
    content: "Content placeholder..."
  },
  {
    title: "The Complete Guide to Executive Function Support for ADHD Adults",
    slug: "executive-function-support-guide",
    excerpt: "Everything you need to know about externalizing your brain's management system.",
    category: "Executive Function",
    publishedAt: "2026-04-10",
    readTime: "12 min read",
    author: {
      name: "Pete",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pete"
    },
    content: "Content placeholder..."
  },
  {
    title: "What Is an AI Agent? A No-Jargon Guide for ADHD Brains",
    slug: "what-is-an-ai-agent-guide",
    excerpt: "Understanding the shift from passive tools to active agents that actually get things done for you.",
    category: "AI Tools",
    publishedAt: "2026-04-05",
    readTime: "5 min read",
    author: {
      name: "Pete",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pete"
    },
    content: "Content placeholder..."
  }
];
