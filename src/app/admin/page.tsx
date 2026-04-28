"use client";

import { DashboardHeader } from "@/components/dashboard/layout";
import { 
  LucideUsers, 
  LucideTrendingUp, 
  LucideNewspaper, 
  LucideFileText, 
  LucideZap,
  LucideDollarSign,
  LucideArrowUpRight,
  LucideArrowDownRight
} from "lucide-react";

const stats = [
  { label: "MRR", value: "£14,520", trend: "+12.5%", positive: true, icon: LucideDollarSign },
  { label: "Active Subs", value: "242", trend: "+18", positive: true, icon: LucideUsers },
  { label: "Newsletter", value: "2,480", trend: "+84", positive: true, icon: LucideNewspaper },
  { label: "Avg Usage", value: "14.2/day", trend: "-2.1%", positive: false, icon: LucideZap },
];

export default function AdminDashboardPage() {
  return (
    <>
      <DashboardHeader title="Admin Overview" />
      <main className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 glass rounded-card border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-white/[0.03] text-text-muted">
                  <stat.icon size={18} />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-xs font-bold",
                  stat.positive ? "text-success" : "text-warning"
                )}>
                  {stat.trend}
                  {stat.positive ? <LucideArrowUpRight size={12} /> : <LucideArrowDownRight size={12} />}
                </div>
              </div>
              <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
              <div className="text-xs text-text-muted uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Users */}
          <div className="glass rounded-card border-border overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="font-bold">Recent Users</h3>
              <button className="text-xs text-accent hover:underline font-bold uppercase tracking-widest">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-white/[0.01]">
                    <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-widest">User</th>
                    <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-widest">Plan</th>
                    <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-widest">Status</th>
                    <th className="p-4 text-xs font-bold text-text-muted uppercase tracking-widest">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { name: "John Doe", email: "john@example.com", plan: "Executive", status: "Active", date: "2 mins ago" },
                    { name: "Sarah Smith", email: "sarah@growth.io", plan: "Focus", status: "Trial", date: "1 hour ago" },
                    { name: "Mike Johnson", email: "mike@tech.com", plan: "Team", status: "Active", date: "5 hours ago" },
                    { name: "Elena Ross", email: "elena@pdt.com", plan: "Executive", status: "Active", date: "1 day ago" }
                  ].map((user, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4">
                        <div className="font-bold text-sm">{user.name}</div>
                        <div className="text-xs text-text-muted">{user.email}</div>
                      </td>
                      <td className="p-4 text-sm text-text-secondary">{user.plan}</td>
                      <td className="p-4">
                        <span className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest",
                          user.status === "Active" ? "bg-success/20 text-success" : "bg-warning/20 text-warning"
                        )}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-text-muted">{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Content */}
          <div className="glass rounded-card border-border overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="font-bold">Latest Content</h3>
              <button className="text-xs text-accent hover:underline font-bold uppercase tracking-widest">New Post</button>
            </div>
            <div className="p-6 space-y-6">
              {[
                { title: "The 7 Best AI Tools for ADHD", type: "Blog", status: "Published", views: "1.2k" },
                { title: "[Briefing #42] Agentic Workflows", type: "Newsletter", status: "Scheduled", views: "—" },
                { title: "ADHD Tax Audit Guide", type: "Blog", status: "Draft", views: "—" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-surface-raised border border-border text-text-muted group-hover:text-accent transition-colors">
                      {item.type === "Blog" ? <LucideFileText size={16} /> : <LucideNewspaper size={16} />}
                    </div>
                    <div>
                      <div className="text-sm font-bold group-hover:text-accent transition-colors">{item.title}</div>
                      <div className="text-xs text-text-muted">{item.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-xs text-text-muted">{item.views} views</div>
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest",
                      item.status === "Published" ? "bg-success/20 text-success" : item.status === "Scheduled" ? "bg-accent/20 text-accent" : "bg-white/5 text-text-muted"
                    )}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
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
