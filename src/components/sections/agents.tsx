"use client";

import { ScrollReveal } from "@/components/layout/page-wrapper";
import { 
  Layout, 
  TrendingUp, 
  Mail, 
  Newspaper, 
  CheckCircle2, 
  RotateCcw, 
  Mic,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const agents = [
  {
    slug: "clarity",
    name: "CLARITY",
    icon: <Layout size={24} />,
    tagline: "Turn morning chaos into a plan you'll actually follow.",
    description: "Voice note or brain dump → structured, prioritised daily plan in 60 seconds.",
    color: "accent"
  },
  {
    slug: "momentum",
    name: "MOMENTUM",
    icon: <TrendingUp size={24} />,
    tagline: "A body-doubling partner that checks in and keeps you moving.",
    description: "AI accountability companion — real check-ins, gentle nudges, no judgment.",
    color: "success"
  },
  {
    slug: "inbox-zero",
    name: "INBOX ZERO",
    icon: <Mail size={24} />,
    tagline: "Your email, handled. Drafts written. Noise eliminated.",
    description: "Reads your inbox, understands context, drafts responses in your voice.",
    color: "accent"
  },
  {
    slug: "briefing",
    name: "BRIEFING",
    icon: <Newspaper size={24} />,
    tagline: "What's actually worth knowing in AI this week.",
    description: "Weekly AI intelligence — stripped of hype, focused on what matters for your work.",
    color: "warning"
  },
  {
    slug: "finisher",
    name: "FINISHER",
    icon: <CheckCircle2 size={24} />,
    tagline: "That project you've been avoiding? Let's get it done.",
    description: "Takes stuck projects, creates atomic next steps, tracks completion.",
    color: "success"
  },
  {
    slug: "reframe",
    name: "REFRAME",
    icon: <RotateCcw size={24} />,
    tagline: "When you're spiralling, Reframe gets you unstuck.",
    description: "Cognitive reframing for overwhelm, procrastination paralysis, and imposter moments.",
    color: "warning"
  },
  {
    slug: "capture",
    name: "CAPTURE",
    icon: <Mic size={24} />,
    tagline: "Say it. Forget it. We'll remember.",
    description: "Voice-to-action: any thought captured instantly and routed to the right place.",
    color: "accent"
  }
];

export function Agents() {
  return (
    <section id="agents" className="section-padding bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-h2 mb-6">Seven agents. One executive brain.</h2>
            <p className="text-xl text-text-secondary max-w-[700px]">
              Each agent is purpose-built for a specific ADHD friction point. 
              Click to see what they do.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <ScrollReveal key={agent.slug} delay={index * 0.05}>
              <Link href={`/agents/${agent.slug}`} className="block group">
                <div className="h-full p-8 glass rounded-card border-t-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-accent group-hover:shadow-[0_20px_50px_rgba(123,110,246,0.1)]">
                  <div className={cn(
                    "mb-6 p-3 rounded-lg bg-white/[0.03] w-fit transition-colors group-hover:bg-accent/10",
                    agent.color === "accent" ? "text-accent" : agent.color === "success" ? "text-success" : "text-warning"
                  )}>
                    {agent.icon}
                  </div>
                  <h3 className="text-lg font-bold tracking-widest uppercase mb-4 text-text-primary group-hover:text-accent transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-text-primary font-medium mb-3 leading-snug">
                    {agent.tagline}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-8">
                    {agent.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    See how it works
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Animated typing mockup (hover only) */}
                  <div className="mt-6 pt-6 border-t border-white/[0.03] hidden group-hover:block animate-in fade-in slide-in-from-bottom-2">
                    <div className="font-mono text-[10px] text-text-muted space-y-2">
                      <div className="flex gap-2">
                        <span className="text-accent">{">"}</span>
                        <span className="animate-pulse">_</span>
                      </div>
                      <div className="text-text-secondary truncate">Analyzing your daily tasks...</div>
                      <div className="text-success truncate">Priority #1: Launch marketing campaign</div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}

          {/* Call to action card */}
          <ScrollReveal delay={0.4}>
            <div className="h-full p-8 bg-gradient-hero rounded-card flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-bg mb-4">Every agent is powered by Claude.</h3>
              <p className="text-bg/80 text-sm mb-8 max-w-[240px]">
                We&apos;ve trained each one specifically for ADHD executive function challenges.
              </p>
              <Link href="/signup">
                <Button variant="default" className="bg-bg text-text-primary border-none hover:bg-bg/90">
                  Try them all for free
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Utility function duplicated for simplicity in this file
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
