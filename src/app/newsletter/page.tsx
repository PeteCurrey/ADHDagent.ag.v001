import { PageWrapper } from "@/components/layout/page-wrapper";
import { ScrollReveal } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { LucideCalendar, LucideArrowRight, LucideMail } from "lucide-react";
import Link from "next/link";

const pastIssues = [
  {
    number: 42,
    date: "April 28, 2026",
    title: "The Truth About Agentic Workflows",
    excerpt: "Cutting through the noise around 'autonomous agents' and focusing on what actually helps with task initiation paralysis.",
    slug: "issue-42-agentic-workflows"
  },
  {
    number: 41,
    date: "April 21, 2026",
    title: "The ADHD Tax: A Digital Audit",
    excerpt: "How to identify and eliminate the hidden costs of executive function challenges using simple automation.",
    slug: "issue-41-adhd-tax-audit"
  },
  {
    number: 40,
    date: "April 14, 2026",
    title: "Signal vs. Noise in the Claude 3 Era",
    excerpt: "Why model selection matters more for ADHD brains than you think.",
    slug: "issue-40-claude-3-signal"
  },
  {
    number: 39,
    date: "April 7, 2026",
    title: "The 3-3-1 Method for Morning Clarity",
    excerpt: "A simple framework for prioritizing your day without the overwhelm.",
    slug: "issue-39-331-method"
  }
];

export const metadata = {
  title: "The Briefing — ADHDagent Newsletter",
  description: "Weekly AI intelligence for ADHD executives. Signal through the noise, delivered every Tuesday.",
};

export default function NewsletterPage() {
  return (
    <PageWrapper>
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <ScrollReveal>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">
                Weekly Intelligence
              </div>
              <h1 className="text-h1 mb-8 leading-[1.0]">The Briefing.</h1>
              <p className="text-2xl text-text-primary mb-8 font-medium leading-tight">
                Built for people who don't have time to read 47 newsletters.
              </p>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                Every Tuesday, we send a ruthlessly edited summary of what actually 
                matters in AI for high-performing ADHD executives. No hype. No noise. Just signal.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-[500px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow h-14 px-6 rounded-button bg-surface border border-border focus:outline-none focus:border-accent"
                  required
                />
                <Button variant="gradient" size="lg" className="h-14 px-8">
                  Subscribe
                  <LucideMail size={18} className="ml-2" />
                </Button>
              </form>
              <p className="mt-4 text-sm text-text-muted">
                Join 2,400+ executives. Free forever.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative glass rounded-card p-12 border-accent/20 bg-accent/5">
                <h3 className="text-2xl font-bold mb-8">What's inside:</h3>
                <ul className="space-y-6">
                  {[
                    { label: "The Big One", desc: "One major AI development, decoded for your brain." },
                    { label: "Worth Your Time", desc: "3 relevant tools with 'Use / Watch / Skip' verdicts." },
                    { label: "Signal vs. Noise", desc: "One thing you can safely ignore this week." },
                    { label: "The Briefing Bite", desc: "One short actionable tactic for the week." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-accent" />
                      <div>
                        <div className="font-bold text-text-primary mb-1">{item.label}</div>
                        <div className="text-sm text-text-secondary">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12">Past Issues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastIssues.map((issue, i) => (
                <Link key={issue.number} href={`/newsletter/${issue.slug}`} className="group">
                  <div className="p-8 glass rounded-card border-transparent group-hover:border-accent transition-all h-full flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-xs font-bold tracking-widest text-text-muted uppercase">Issue #{issue.number}</div>
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <LucideCalendar size={12} />
                        {issue.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                      {issue.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-8 flex-grow">
                      {issue.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Read issue
                      <LucideArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageWrapper>
  );
}
