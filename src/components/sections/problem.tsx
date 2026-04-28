"use client";

import { ScrollReveal } from "@/components/layout/page-wrapper";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import * as React from "react";

function Counter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="p-8 glass rounded-card flex flex-col items-center text-center">
      <span className="text-5xl font-bold text-accent mb-2">
        {Math.floor(count)}
        {suffix}
      </span>
      <span className="text-sm text-text-secondary uppercase tracking-widest leading-tight">
        {label}
      </span>
    </div>
  );
}

export function Problem() {
  return (
    <section className="section-padding bg-surface-raised relative overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-h2 mb-20 text-center max-w-[800px] mx-auto">
            You're not falling behind.<br />
            <span className="text-text-secondary">The tools are just wrong.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-text-primary">
                You're a high performer. You run teams, close deals, think ten steps ahead. 
                But every morning feels like trying to start a car with no key.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary">
                The AI world isn't helping. It's made it worse. Another tool. Another promise. 
                Another subscription you forgot you had. And somewhere underneath all of it, 
                a list of things you actually care about finishing.
              </p>
              <p className="text-lg leading-relaxed text-accent font-medium">
                ADHDagent isn't another productivity app. It's the operating system your brain has been waiting for.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <Counter value={22} label="Lost productivity days per year" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Counter value={4.2} suffix="h" label="Lost daily to task-switching" />
            </ScrollReveal>
            <div className="sm:col-span-2">
              <ScrollReveal delay={0.3}>
                <div className="p-8 glass rounded-card flex flex-col items-center text-center border-accent/30 bg-accent/5">
                  <span className="text-5xl font-bold text-success mb-2">1</span>
                  <span className="text-sm text-text-secondary uppercase tracking-widest leading-tight">
                    Platform that actually adapts to you, not the other way around
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
