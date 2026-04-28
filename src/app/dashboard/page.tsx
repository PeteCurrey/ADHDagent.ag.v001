"use client";

import { DashboardHeader } from "@/components/dashboard/layout";
import { Button } from "@/components/ui/button";
import { 
  LucideLayout, 
  LucideArrowRight, 
  LucideCheckCircle2, 
  LucideClock, 
  LucideTrendingUp,
  LucideMail,
  LucideMic
} from "lucide-react";
import Link from "next/link";

const quickAgents = [
  { name: "Clarity", slug: "clarity", icon: LucideLayout, color: "text-accent" },
  { name: "Momentum", slug: "momentum", icon: LucideTrendingUp, color: "text-success" },
  { name: "Inbox Zero", slug: "inbox-zero", icon: LucideMail, color: "text-accent" },
  { name: "Capture", slug: "capture", icon: LucideMic, color: "text-accent" },
];

export default function DashboardHomePage() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  return (
    <>
      <DashboardHeader title="Home" />
      <main className="p-8 space-y-8">
        {/* Greeting Section */}
        <section>
          <h2 className="text-3xl font-bold mb-2">{greeting}, Pete.</h2>
          <p className="text-text-secondary">Here's what your brain needs to know today.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Focus Widget */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 glass rounded-card border-accent/20">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <LucideLayout size={20} />
                  </div>
                  <h3 className="font-bold">Today's Focus</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-xs h-8">
                  Refresh with Clarity
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  { task: "Complete Q4 Marketing Strategy proposal", priority: "High", time: "2h" },
                  { task: "Review Inbox Zero drafts for client outreach", priority: "Medium", time: "45m" },
                  { task: "Weekly Team Sync - Agenda preparation", priority: "Low", time: "30m" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/[0.03] rounded-xl border border-border group hover:border-accent/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded border border-text-muted flex items-center justify-center group-hover:border-accent transition-colors">
                        <LucideCheckCircle2 size={14} className="text-accent opacity-0 group-hover:opacity-100" />
                      </div>
                      <span className="text-sm font-medium text-text-primary">{item.task}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded",
                        item.priority === "High" ? "bg-accent/20 text-accent" : "bg-white/5 text-text-muted"
                      )}>
                        {item.priority}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <LucideClock size={14} />
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Launch */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickAgents.map((agent) => (
                <Link key={agent.slug} href={`/dashboard/agents/${agent.slug}`} className="group">
                  <div className="p-6 glass rounded-card border-transparent hover:border-accent transition-all text-center">
                    <div className={cn("mb-4 flex justify-center", agent.color)}>
                      <agent.icon size={24} />
                    </div>
                    <div className="text-sm font-bold group-hover:text-accent transition-colors">{agent.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Sidebar Widgets */}
          <div className="space-y-8">
            {/* Newsletter Teaser */}
            <div className="p-6 bg-gradient-hero rounded-card text-bg">
              <h3 className="font-bold mb-4">This week's Briefing is live</h3>
              <p className="text-sm mb-6 font-medium opacity-90">
                "The Truth About Agentic Workflows" — Read our latest analysis on autonomous AI agents.
              </p>
              <Button className="w-full bg-bg text-text-primary border-none hover:bg-bg/90 h-10 text-xs">
                Read issue
                <LucideArrowRight size={14} className="ml-2" />
              </Button>
            </div>

            {/* Usage Stats */}
            <div className="p-6 glass rounded-card">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-text-muted">Usage Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-text-secondary">AI Interactions</span>
                    <span className="text-text-primary font-bold">342 / 500</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-accent" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-text-secondary">Agents Active</span>
                    <span className="text-text-primary font-bold">5 / 7</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[71%] bg-success" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
