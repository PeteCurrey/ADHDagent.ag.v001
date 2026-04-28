"use client";

import { ScrollReveal } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import * as React from "react";
import Link from "next/link";

const plans = [
  {
    name: "FOCUS",
    monthlyPrice: 29,
    annualPrice: 23,
    description: "For individuals looking to regain control of their workday.",
    features: [
      "3 AI agents of your choice",
      "The Briefing newsletter",
      "500 AI interactions/month",
      "Email support"
    ],
    cta: "Start free trial",
    highlight: false
  },
  {
    name: "EXECUTIVE",
    monthlyPrice: 79,
    annualPrice: 63,
    description: "Full access for high-performers who need the complete operating system.",
    features: [
      "All 7 AI agents",
      "Unlimited AI interactions",
      "The Briefing (early access)",
      "Priority support",
      "Agent history & analytics"
    ],
    cta: "Start free trial",
    highlight: true,
    badge: "Most popular"
  },
  {
    name: "TEAM",
    monthlyPrice: 199,
    annualPrice: 159,
    description: "For teams of up to 5 seats. Scalable for larger organizations.",
    features: [
      "Everything in Executive",
      "Team workspace",
      "Manager dashboard",
      "Usage analytics across team",
      "Dedicated onboarding call"
    ],
    cta: "Talk to us",
    highlight: false
  }
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <section id="pricing" className="section-padding bg-bg">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Straightforward pricing. No asterisks.</h2>
            <p className="text-text-secondary text-lg mb-10">
              Cancel any time. 14-day free trial on all plans. No card required to start.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={cn("text-sm transition-colors", !isAnnual ? "text-text-primary" : "text-text-muted")}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-12 h-6 rounded-full bg-surface-raised border border-border p-1 relative transition-colors"
              >
                <div className={cn(
                  "w-4 h-4 rounded-full bg-accent transition-transform duration-300",
                  isAnnual ? "translate-x-6" : "translate-x-0"
                )} />
              </button>
              <span className={cn("text-sm transition-colors", isAnnual ? "text-text-primary" : "text-text-muted")}>
                Annually <span className="text-success ml-1 text-xs font-bold uppercase tracking-widest">-20%</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div className={cn(
                "h-full p-8 rounded-card border transition-all duration-500 relative flex flex-col",
                plan.highlight 
                  ? "bg-surface-raised border-accent/50 shadow-[0_20px_50px_rgba(123,110,246,0.1)] scale-105 z-10" 
                  : "bg-surface border-border hover:border-text-muted"
              )}>
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-text-muted mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-text-primary">£{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                    <span className="text-text-secondary">/month</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed h-12">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={plan.cta === "Talk to us" ? "/contact" : "/signup"}>
                  <Button 
                    variant={plan.highlight ? "gradient" : "default"} 
                    className="w-full h-12"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
