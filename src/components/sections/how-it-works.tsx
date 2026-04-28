"use client";

import { ScrollReveal } from "@/components/layout/page-wrapper";
import { Brain, Users, Zap } from "lucide-react";

const steps = [
  {
    icon: <Brain className="text-accent" size={32} />,
    title: "Tell us how your brain works",
    description: "Quick onboarding — ADHD type, work style, biggest friction points. 5 minutes.",
  },
  {
    icon: <Users className="text-success" size={32} />,
    title: "Meet your agents",
    description: "Seven AI agents, each built for a specific ADHD challenge. Use the ones that fit. Ignore the rest.",
  },
  {
    icon: <Zap className="text-warning" size={32} />,
    title: "Stop managing. Start finishing.",
    description: "Your agents work in the background, surface what matters, and hold you accountable without judgment.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-bg relative">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-h2 mb-4">Three things. That's it.</h2>
            <p className="text-text-secondary text-lg">Simplicity is our design philosophy.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-8 glass rounded-card h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-success opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-6 p-4 rounded-xl bg-white/[0.03] w-fit">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-8 text-4xl font-display italic text-white/[0.03]">
                  0{index + 1}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
