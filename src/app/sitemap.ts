import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { AGENTS } from "@/lib/agents-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adhd-agent.com";

  const posts = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const agents = Object.keys(AGENTS).map((slug) => ({
    url: `${baseUrl}/agents/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const routes = [
    "",
    "/pricing",
    "/newsletter",
    "/blog",
    "/about",
    "/contact",
    "/login",
    "/signup",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  return [...routes, ...agents, ...posts];
}
