"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MeshBackground } from "@/components/ui/mesh-background";
import { LucideArrowRight, LucideChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-center overflow-hidden">
      <MeshBackground />
      
      <div className="container-custom">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[800px] mx-auto text-center"
        >
          <motion.div variants={item} className="mb-6 flex justify-center">
            <div className="px-4 py-1.5 rounded-full glass flex items-center gap-2 border-accent/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-medium tracking-wider uppercase">
                The AI platform for ADHD minds
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={item} className="text-hero mb-8 text-text-primary">
            Your <em className="text-accent">brain</em> is brilliant.<br />
            Give it the<br />
            structure it deserves.
          </motion.h1>

          <motion.p variants={item} className="text-xl md:text-2xl text-text-secondary mb-12 max-w-[600px] mx-auto leading-relaxed">
            ADHDagent is a suite of AI agents built specifically for how ADHD executives 
            and professionals think, work, and get things done. No overwhelm. No noise. Just clarity.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/signup">
              <Button variant="gradient" size="lg" className="group">
                Start your free 14-day trial
                <LucideArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#agents">
              <Button variant="ghost" size="lg">
                See the agents
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-20 pt-12 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="flex text-success gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-text-secondary italic">
                "The first tool that actually works with my brain"
              </p>
              <p className="text-xs font-semibold mt-2">— James T., Founder</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex text-success gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-text-secondary italic">
                "I finished 3 projects I'd been avoiding for months"
              </p>
              <p className="text-xs font-semibold mt-2">— Sarah M., CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex text-success gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-text-secondary italic">
                "Worth every penny and then some"
              </p>
              <p className="text-xs font-semibold mt-2">— David K., CMO</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted uppercase tracking-widest">Scroll to explore</span>
        <LucideChevronDown className="animate-bounce text-text-muted w-4 h-4" />
      </motion.div>
    </section>
  );
}
