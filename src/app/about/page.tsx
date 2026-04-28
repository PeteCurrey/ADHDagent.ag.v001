import { PageWrapper } from "@/components/layout/page-wrapper";
import { ScrollReveal } from "@/components/layout/page-wrapper";
import { MeshBackground } from "@/components/ui/mesh-background";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata = {
  title: "About — ADHDagent",
  description: "Built by people who get it. Our mission is to build the operating system for high-performing ADHD minds.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <MeshBackground />
        
        <div className="section-padding">
          <div className="container-narrow">
            <ScrollReveal>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">
                Our Mission
              </div>
              <h1 className="text-h1 mb-12 leading-[1.0]">Built by people<br /> who get it.</h1>
              
              <div className="prose prose-invert prose-lg space-y-8 text-text-secondary leading-relaxed">
                <p className="text-xl text-text-primary font-medium">
                  We didn't build ADHDagent because we wanted another SaaS company. 
                  We built it because we were drowning in general-purpose tools that 
                  ignored how our brains actually work.
                </p>
                <p>
                  ADHD isn't a deficit of attention; it's a challenge of regulation. 
                  In a world of constant digital noise, the standard productivity 
                  advice—"just use a planner" or "break it down"—feels like being 
                  told to breathe while underwater.
                </p>
                <p>
                  We believe that with the right structure, ADHD brains aren't just 
                  functional—they're brilliant. We build AI agents that externalize 
                  executive function, bypassing the initiation wall and maintaining the 
                  momentum that high-performers need.
                </p>
                <p>
                  Today, ADHDagent serves over 2,400 founders, executives, and 
                  creative professionals who have decided to stop fighting their 
                  biology and start leveraging it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="section-padding bg-surface-raised">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ScrollReveal delay={0.1}>
                <div className="p-8 glass rounded-card">
                  <h3 className="text-xl font-bold mb-4 text-text-primary">Direct</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    We cut through the noise. No fluff, no clinical jargon, and no condescension.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 glass rounded-card">
                  <h3 className="text-xl font-bold mb-4 text-text-primary">Autonomous</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Our agents don't just wait for prompts; they understand your workflow and surface what matters.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="p-8 glass rounded-card">
                  <h3 className="text-xl font-bold mb-4 text-text-primary">Private</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Your brain's data is sacred. We use the most secure AI infrastructure available.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        <FinalCTA />
      </div>
    </PageWrapper>
  );
}
