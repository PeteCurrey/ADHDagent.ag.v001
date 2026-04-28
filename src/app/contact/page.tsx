"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { ScrollReveal } from "@/components/layout/page-wrapper";
import { MeshBackground } from "@/components/ui/mesh-background";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send } from "lucide-react";
import * as React from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <div className="relative overflow-hidden min-h-[calc(100vh-72px)] flex flex-col justify-center">
        <MeshBackground />
        
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">
                  Get in touch
                </div>
                <h1 className="text-h1 mb-8 leading-[1.0]">We're here to help.</h1>
                <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                  Have a question about the agents? Need help with your subscription? 
                  Or just want to tell us how your brain is doing today? We'd love to hear from you.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-text-primary">Email</div>
                      <div className="text-text-secondary">hello@adhd-agent.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-text-primary">Support</div>
                      <div className="text-text-secondary">support@adhd-agent.com</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="glass rounded-card p-8 md:p-12 border-accent/20 relative overflow-hidden">
                  {submitted ? (
                    <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                      <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center text-success mx-auto mb-6">
                        <Send size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Message sent.</h3>
                      <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
                      <Button variant="ghost" className="mt-8" onClick={() => setSubmitted(false)}>
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Name</label>
                          <input
                            type="text"
                            required
                            className="w-full h-12 px-4 rounded-lg bg-white/[0.03] border border-border focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email</label>
                          <input
                            type="email"
                            required
                            className="w-full h-12 px-4 rounded-lg bg-white/[0.03] border border-border focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Subject</label>
                        <select className="w-full h-12 px-4 rounded-lg bg-surface border border-border focus:outline-none focus:border-accent transition-colors text-text-primary">
                          <option>General Inquiry</option>
                          <option>Billing Question</option>
                          <option>Technical Support</option>
                          <option>Press</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Message</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full p-4 rounded-lg bg-white/[0.03] border border-border focus:outline-none focus:border-accent transition-colors resize-none"
                        ></textarea>
                      </div>
                      <Button variant="gradient" size="lg" className="w-full h-14" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send size={18} className="ml-2" />
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
