"use client";

import { ScrollReveal } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { MeshBackground } from "@/components/ui/mesh-background";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-border">
      <MeshBackground />
      
      <div className="container-custom relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-hero mb-8 text-text-primary">
            Start <em className="text-accent italic">finishing</em> things.
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-[600px] mx-auto leading-relaxed">
            Your 14-day free trial starts the moment you sign up. 
            No card. No commitment. Just clarity.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <Link href="/signup">
              <Button variant="gradient" size="lg" className="group h-16 px-12 text-lg">
                Start free trial
                <LucideArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <p className="text-sm text-text-muted uppercase tracking-[0.2em]">
              Trusted by 2,400+ ADHD executives worldwide
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
