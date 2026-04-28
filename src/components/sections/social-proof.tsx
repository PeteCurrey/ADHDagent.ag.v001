"use client";

import { ScrollReveal } from "@/components/layout/page-wrapper";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "The first tool that actually works with my brain instead of trying to fix it. My output has doubled in the last month.",
    name: "James Thompson",
    role: "Founder",
    company: "Lumina Labs",
    size: "large"
  },
  {
    quote: "I finished 3 projects I'd been avoiding for months. The Finisher agent is worth the price alone.",
    name: "Sarah Miller",
    role: "CEO",
    company: "Miller Growth",
    size: "small"
  },
  {
    quote: "The Briefing is the only newsletter I actually read. It's clinical, direct, and ruthlessly helpful.",
    name: "David Khan",
    role: "CMO",
    company: "Vertex Digital",
    size: "medium"
  },
  {
    quote: "ADHDagent has become my secret weapon for managing a 50-person team without losing my mind.",
    name: "Elena Rodriguez",
    role: "VP of Product",
    company: "FlowStack",
    size: "medium"
  },
  {
    quote: "Finally, a premium experience that treats ADHD executives like the high-performers we are.",
    name: "Michael Chen",
    role: "Consultant",
    company: "Chen Advisory",
    size: "large"
  },
  {
    quote: "The Clarity agent's morning plan is the only reason I'm getting through my inbox right now.",
    name: "Rachel Webb",
    role: "Executive Director",
    company: "Global Initiatives",
    size: "small"
  }
];

export function SocialProof() {
  return (
    <section className="section-padding bg-surface-raised relative overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-h2">Real ADHD brains. Real results.</h2>
          </div>
        </ScrollReveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={cn(
                "break-inside-avoid p-8 glass rounded-card flex flex-col group transition-all duration-500 hover:bg-white/[0.05]",
                t.size === "large" ? "min-h-[300px]" : t.size === "medium" ? "min-h-[240px]" : "min-h-[200px]"
              )}>
                <div className="flex text-success gap-1 mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-lg text-text-primary mb-8 flex-grow leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center font-bold text-bg text-xs">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-sm">{t.name}</div>
                    <div className="text-xs text-text-muted">{t.role} @ {t.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
