import Link from "next/link";
import { LucideTwitter, LucideLinkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-border pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-accent">ADHD</span>
              <span className="text-2xl font-bold tracking-tighter text-text-primary">agent</span>
            </Link>
            <p className="text-text-secondary max-w-[300px] mb-8 leading-relaxed">
              Built for how high-performing ADHD brains actually work. 
              Less noise, more structure, total clarity.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-text-muted hover:text-accent transition-colors">
                <LucideTwitter size={20} />
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors">
                <LucideLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-6 uppercase tracking-wider">Product</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-secondary">
              <li><Link href="/agents" className="hover:text-accent transition-colors">All Agents</Link></li>
              <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-accent transition-colors">How it works</Link></li>
              <li><Link href="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-secondary">
              <li><Link href="/newsletter" className="hover:text-accent transition-colors">Newsletter</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-secondary">
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© {currentYear} ADHDagent. All rights reserved.</p>
          <p className="italic font-display text-sm">"Built by people who get it."</p>
        </div>
      </div>
    </footer>
  );
}
