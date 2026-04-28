"use client";

import { Button } from "@/components/ui/button";
import { MeshBackground } from "@/components/ui/mesh-background";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import * as React from "react";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signIn("email", { email, callbackUrl: "/dashboard" });
    setIsLoading(false);
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      <MeshBackground />
      
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors">
        <ArrowLeft size={16} />
        <span className="text-sm font-medium">Back to home</span>
      </Link>

      <div className="w-full max-w-[400px] relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-1 mb-6">
            <span className="text-3xl font-bold tracking-tighter text-accent">ADHD</span>
            <span className="text-3xl font-bold tracking-tighter text-text-primary">agent</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome back.</h1>
          <p className="text-text-secondary">Sign in to your operating system.</p>
        </div>

        <div className="space-y-4">
          <Button 
            variant="default" 
            className="w-full h-12 bg-white text-black hover:bg-white/90 border-none flex items-center justify-center gap-3"
            onClick={handleGoogleSignIn}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-bg px-2 text-text-muted">Or magic link</span>
            </div>
          </div>

          <form onSubmit={handleEmailSignIn} className="space-y-4">
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
              {isLoading ? "Sending link..." : "Send magic link"}
              <Mail size={18} className="ml-2" />
            </Button>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-text-secondary">
          Don't have an account?{" "}
          <Link href="/signup" className="text-accent hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
