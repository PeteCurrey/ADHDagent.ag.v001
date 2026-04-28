"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { ScrollReveal } from "@/components/layout/page-wrapper";
import { AGENTS } from "@/lib/agents-data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LucideCheckCircle2, LucideArrowRight, LucideArrowLeft, LucidePlay } from "lucide-react";
import Link from "next/link";
import { MeshBackground } from "@/components/ui/mesh-background";

export default function AgentDetailPage({ params }: { params: { slug: string } }) {
  const agent = AGENTS[params.slug as keyof typeof AGENTS];

  if (!agent) {
    notFound();
  }

  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <MeshBackground />
        
        <div className="section-padding pb-0">
          <div className="container-custom">
            <Link 
              href="/#agents" 
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-12"
            >
              <LucideArrowLeft size={16} />
              Back to all agents
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <ScrollReveal>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">
                  AI Agent — {params.slug}
                </div>
                <h1 className="text-h1 mb-8 leading-[1.0]">{agent.name}</h1>
                <p className="text-2xl text-text-primary mb-8 font-medium leading-tight">
                  {agent.tagline}
                </p>
                <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                  {agent.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/signup">
                    <Button variant="gradient" size="lg" className="group">
                      Start 14-day free trial
                      <LucideArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="lg">
                    Watch demo
                    <LucidePlay size={16} className="ml-2" />
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-accent blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                  <div className="relative glass rounded-card aspect-square flex flex-col p-1">
                    <div className="flex-grow bg-surface rounded-[14px] p-8 flex flex-col">
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                          <LucidePlay size={14} fill="currentColor" />
                        </div>
                        <span className="text-sm font-bold tracking-widest uppercase">{agent.name} Interface</span>
                      </div>
                      
                      <div className="space-y-6 font-mono text-sm overflow-hidden flex-grow">
                        <div className="p-4 rounded-lg bg-accent/5 border border-accent/10 text-text-primary animate-in fade-in slide-in-from-left duration-700">
                          <span className="text-accent mr-2">User:</span>
                          I'm feeling completely stuck on the Q4 marketing plan...
                        </div>
                        <div className="p-4 rounded-lg bg-white/[0.03] border border-border text-text-secondary animate-in fade-in slide-in-from-right delay-700 duration-700">
                          <span className="text-success mr-2">{agent.name}:</span>
                          I understand. That "blank page" dread is real. Let's break it down. 
                          What's the one thing that must happen for this to be a success?
                        </div>
                        <div className="p-4 rounded-lg bg-accent/5 border border-accent/10 text-text-primary animate-in fade-in slide-in-from-left delay-1000 duration-700">
                          <span className="text-accent mr-2">User:</span>
                          We need 500 new leads.
                        </div>
                        <div className="p-4 rounded-lg bg-white/[0.03] border border-border text-text-secondary animate-in fade-in slide-in-from-right delay-1500 duration-700">
                          <span className="text-success mr-2">{agent.name}:</span>
                          Perfect. That's our anchor. Now, what's the smallest first step toward those 500 leads? 
                          Is it defining the target audience or listing potential channels?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div className="section-padding bg-surface-raised">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <ScrollReveal>
                <h2 className="text-h2 mb-12">Who this agent is for</h2>
                <p className="text-xl text-text-secondary leading-relaxed mb-12">
                  {agent.who}
                </p>
                <div className="space-y-6">
                  {agent.useCases.map((useCase, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 glass rounded-xl border-transparent hover:border-accent transition-colors">
                      <LucideCheckCircle2 className="text-success mt-1 flex-shrink-0" />
                      <span className="text-text-primary font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-12 glass rounded-card border-accent/20 bg-accent/5">
                  <h3 className="text-2xl font-bold mb-6">Frequently Asked</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold mb-2 text-text-primary">Does it require manual setup?</h4>
                      <p className="text-sm text-text-secondary">No. {agent.name} is pre-trained with ADHD-specific heuristics. It's ready to go the moment you sign in.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-text-primary">Can I use it on mobile?</h4>
                      <p className="text-sm text-text-secondary">Yes. All our agents are fully optimized for mobile web access, allowing for voice-to-text capture on the go.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-text-primary">Is the data saved?</h4>
                      <p className="text-sm text-text-secondary">Yes, all sessions are saved to your agent history for later review and refinement.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
