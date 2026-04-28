"use client";

import { ScrollReveal } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { LucideCheck } from "lucide-react";

export function Newsletter() {
  return (
    <section className="section-padding bg-bg overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-h2 mb-6">The only AI newsletter that understands your brain.</h2>
            <p className="text-xl text-text-secondary mb-10 leading-relaxed">
              Weekly. Curated. Ruthlessly edited. Built for people who don't have time to read 47 newsletters.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "1 major AI development, decoded for ADHD executives",
                "3 relevant tools (Use It / Watch It / Skip It)",
                "The 'Signal vs Noise' audit",
                "1 short actionable tactic for the week"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-primary">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center text-success">
                    <LucideCheck size={12} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow h-12 px-6 rounded-button bg-white/[0.03] border border-border focus:outline-none focus:border-accent transition-colors"
                required
              />
              <Button variant="gradient" size="lg" type="submit">
                Subscribe to The Briefing
              </Button>
            </form>
            <p className="mt-4 text-xs text-text-muted">
              Join 2,400+ ADHD executives who read The Briefing every week.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-hero blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative glass rounded-card p-1 overflow-hidden">
                <div className="p-8 bg-surface rounded-[14px]">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
                    <div className="text-label">Issue #42 — Latest</div>
                    <div className="text-xs text-text-muted">April 28, 2026</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">The Truth About Agentic Workflows</h3>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    This week, we're cutting through the noise around "autonomous agents" and focusing 
                    on the one thing that actually helps with task initiation paralysis...
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="h-2 w-full bg-white/[0.03] rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-accent/30"></div>
                    </div>
                    <div className="h-2 w-[90%] bg-white/[0.03] rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-accent/30"></div>
                    </div>
                    <div className="h-2 w-[70%] bg-white/[0.03] rounded-full overflow-hidden">
                      <div className="h-full w-[60%] bg-accent/30"></div>
                    </div>
                  </div>
                  <div className="p-12 bg-gradient-to-b from-transparent to-surface absolute bottom-0 left-0 right-0 flex items-center justify-center">
                    <Button variant="ghost" className="bg-surface/80 backdrop-blur-sm">
                      Read full issue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
