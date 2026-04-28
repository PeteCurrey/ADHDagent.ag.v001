"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LucideLayoutDashboard, 
  LucideUsers, 
  LucideNewspaper, 
  LucideSettings, 
  LucideHelpCircle,
  LucideLogOut,
  LucideZap
} from "lucide-react";
import { cn } from "@/components/ui/button";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LucideLayoutDashboard },
  { name: "My Agents", href: "/dashboard/agents", icon: LucideZap },
  { name: "Briefing", href: "/dashboard/briefing", icon: LucideNewspaper },
  { name: "Settings", href: "/dashboard/settings", icon: LucideSettings },
  { name: "Help", href: "/dashboard/help", icon: LucideHelpCircle },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-surface border-r border-border z-50 hidden lg:flex flex-col">
      <div className="p-8 border-b border-border">
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-2xl font-bold tracking-tighter text-accent">ADHD</span>
          <span className="text-2xl font-bold tracking-tighter text-text-primary transition-colors group-hover:text-accent">agent</span>
        </Link>
      </div>

      <nav className="flex-grow p-6 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group",
                isActive 
                  ? "bg-accent/10 text-accent" 
                  : "text-text-secondary hover:bg-white/[0.03] hover:text-text-primary"
              )}
            >
              <item.icon size={18} className={cn(isActive ? "text-accent" : "text-text-muted group-hover:text-text-primary")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-border">
        <div className="p-4 glass rounded-xl mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-hero" />
            <div>
              <div className="text-xs font-bold text-text-primary">Executive Plan</div>
              <div className="text-[10px] text-text-muted">Renewing May 12</div>
            </div>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-accent" />
          </div>
        </div>
        
        <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-text-muted hover:text-warning transition-colors w-full">
          <LucideLogOut size={18} />
          Sign out
        </button>
      </div>
    </aside>
  );
}

export function DashboardHeader({ title }: { title: string }) {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-bg border-b border-border sticky top-0 z-40">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex flex-col items-end">
          <div className="text-sm font-bold">Pete Collins</div>
          <div className="text-[10px] text-text-muted uppercase tracking-widest">Administrator</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-raised border border-border flex items-center justify-center font-bold text-accent">
          PC
        </div>
      </div>
    </header>
  );
}
