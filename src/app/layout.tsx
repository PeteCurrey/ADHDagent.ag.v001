import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-dm-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
  title: "ADHDagent — AI Agents for ADHD Executives & Professionals",
  description: "The only AI platform built specifically for ADHD brains. Seven purpose-built agents for focus, task completion, email, and clarity.",
  metadataBase: new URL("https://adhd-agent.com"),
  openGraph: {
    title: "ADHDagent — AI Agents for ADHD Executives & Professionals",
    description: "The only AI platform built specifically for ADHD brains. Seven purpose-built agents for focus, task completion, email, and clarity.",
    url: "https://adhd-agent.com",
    siteName: "ADHDagent",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADHDagent — AI Agents for ADHD Executives & Professionals",
    description: "The only AI platform built specifically for ADHD brains. Seven purpose-built agents for focus, task completion, email, and clarity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          dmSans.variable,
          instrumentSerif.variable,
          jetBrainsMono.variable,
          "min-h-screen bg-bg font-body antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
