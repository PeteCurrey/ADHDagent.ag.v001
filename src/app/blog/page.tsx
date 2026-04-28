import { PageWrapper } from "@/components/layout/page-wrapper";
import { ScrollReveal } from "@/components/layout/page-wrapper";
import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";
import { LucideClock, LucideArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Blog — ADHDagent",
  description: "Insights, strategies, and tools for high-performing ADHD brains.",
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug);

  return (
    <PageWrapper>
      <div className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-16">
              <h1 className="text-h1 mb-4">Insights & Strategies</h1>
              <p className="text-xl text-text-secondary">Building an operating system for the ADHD mind.</p>
            </div>
          </ScrollReveal>

          {/* Featured Post */}
          <ScrollReveal delay={0.1}>
            <Link href={`/blog/${featuredPost.slug}`} className="group block mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 glass rounded-card overflow-hidden p-1 border-accent/20">
                <div className="aspect-[16/10] bg-gradient-hero rounded-[14px] flex items-center justify-center p-12">
                  <span className="text-4xl font-display italic text-bg text-center">
                    {featuredPost.title}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-accent mb-6">
                    <span>{featuredPost.category}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                    <span>Featured Post</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6 group-hover:text-accent transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-raised border border-border flex items-center justify-center font-bold text-[10px]">
                        {featuredPost.author.name[0]}
                      </div>
                      <span className="text-sm text-text-muted">{featuredPost.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <LucideClock size={14} />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {["All", "ADHD Strategies", "AI Tools", "Executive Function", "The Briefing"].map((cat) => (
              <Button 
                key={cat} 
                variant={cat === "All" ? "default" : "ghost"} 
                size="sm"
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full glass rounded-card p-6 border-transparent hover:border-accent transition-all duration-300">
                  <div className="mb-6 aspect-video bg-surface-raised rounded-xl flex items-center justify-center p-6 border border-border group-hover:border-accent/30 transition-colors">
                    <span className="text-lg font-display italic text-text-muted text-center group-hover:text-accent transition-colors">
                      {post.title}
                    </span>
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/[0.03]">
                    <span className="text-xs text-text-muted">{post.publishedAt}</span>
                    <div className="flex items-center gap-1.5 text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more
                      <LucideArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
