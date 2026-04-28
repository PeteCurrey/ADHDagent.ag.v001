"use client";

import { Button } from "@/components/ui/button";
import { MeshBackground } from "@/components/ui/mesh-background";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { LucideMail, LucideArrowLeft, LucideCheckCircle2 } from "lucide-react";
import * as React from "react";

export default function SignupPage() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signIn("email", { email, callbackUrl: "/onboarding" });
    setIsLoading(false);
  };

  const handleGoogleSignUp = () => {
    signIn("google", { callbackUrl: "/onboarding" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      <MeshBackground />
      
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors">
        <LucideArrowLeft size={16} />
        <span className="text-sm font-medium">Back to home</span>
      </Link>

      <div className="w-full max-w-[800px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Value Prop */}
        <div className="hidden lg:block space-y-8">
          <Link href="/" className="inline-flex items-center gap-1 mb-8">
            <span className="text-3xl font-bold tracking-tighter text-accent">ADHD</span>
            <span className="text-3xl font-bold tracking-tighter text-text-primary">agent</span>
          </Link>
          <h1 className="text-5xl font-bold leading-tight">
            Start your <br />
            <span className="text-accent italic font-display font-normal">clarity</span> journey.
          </h1>
          <ul className="space-y-4">
            {[
              "14-day full access free trial",
              "No credit card required to start",
              "All 7 purpose-built AI agents",
              "The Briefing weekly intelligence"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-text-secondary">
                <LucideCheckCircle2 size={20} className="text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-text-muted italic">
              "Finally, a tool that respects how my brain works."
            </p>
            <p className="text-xs font-bold mt-2">— Sarah M., CEO</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full max-w-[400px] mx-auto lg:ml-auto">
          <div className="lg:hidden text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-1 mb-6">
              <span className="text-3xl font-bold tracking-tighter text-accent">ADHD</span>
              <span className="text-3xl font-bold tracking-tighter text-text-primary">agent</span>
            </Link>
            <h1 className="text-3xl font-bold mb-2">Join ADHDagent.</h1>
            <p className="text-text-secondary">The operating system for your brain.</p>
          </div>

          <div className="space-y-4">
            <Button 
              variant="default" 
              className="w-full h-12 bg-white text-black hover:bg-white/90 border-none flex items-center justify-center gap-3"
              onClick={handleGoogleSignUp}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign up with Google
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-bg px-2 text-text-muted">Or magic link</span>
              </div>
            </div>

            <form onSubmit={handleEmailSignUp} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 px-6 rounded-button bg-surface border border-border focus:outline-none focus:border-accent transition-colors text-text-primary"
                />
              </div>
              <Button 
                variant="gradient" 
                className="w-full h-12" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Preparing trial..." : "Start my free trial"}
                <LucideMail size={18} className="ml-2" />
              </Button>
            </form>
          </div>

          <p className="mt-8 text-center text-sm text-text-secondary">
            Already have an account?{" "}
            <Link href="/login" className="text-accent hover:underline">
              Sign in
            </Link>
          </p>

          <p className="mt-8 text-[10px] text-center text-text-muted leading-relaxed">
            By signing up, you agree to our <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
