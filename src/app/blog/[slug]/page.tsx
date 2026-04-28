"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { LucideClock, LucideArrowLeft, LucideUser, LucideCalendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as React from "react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  const { scrollYProgress } = useScroll();

  if (!post) {
    notFound();
  }

  return (
    <PageWrapper>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <article className="section-padding">
        <div className="container-narrow">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-12"
          >
            <LucideArrowLeft size={16} />
            Back to blog
          </Link>

          <header className="mb-16">
            <div className="text-xs font-bold tracking-widest uppercase text-accent mb-6">
              {post.category}
            </div>
            <h1 className="text-h1 mb-8 leading-[1.1]">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-raised border border-border flex items-center justify-center">
                  <LucideUser size={20} className="text-text-muted" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">{post.author.name}</div>
                  <div className="text-xs text-text-muted">Author</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <LucideCalendar size={16} />
                {post.publishedAt}
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <LucideClock size={16} />
                {post.readTime}
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-xl text-text-secondary leading-relaxed mb-12 italic font-display">
              {post.excerpt}
            </div>
            
            <div 
              className="text-text-primary space-y-8 leading-[1.7] blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Newsletter Prompt */}
            <div className="my-20 p-12 glass rounded-card text-center border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Don't have time for 47 newsletters?</h3>
              <p className="text-text-secondary mb-8">
                Join 2,400+ ADHD executives who get the signal through the noise every week.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-[400px] mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow h-12 px-6 rounded-button bg-surface border border-border focus:outline-none focus:border-accent"
                />
                <Button variant="gradient">Join us</Button>
              </form>
            </div>
          </div>

          <footer className="pt-16 border-t border-border mt-20">
            <h4 className="text-xl font-bold mb-8">Related Articles</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2).map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <div className="p-6 glass rounded-card border-transparent group-hover:border-accent transition-all">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">{p.category}</div>
                    <h5 className="font-bold group-hover:text-accent transition-colors line-clamp-2">{p.title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </article>

      <style jsx global>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: var(--color-text-primary);
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: var(--color-text-primary);
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-text-secondary);
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </PageWrapper>
  );
}
