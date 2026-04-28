"use client";

import { DashboardHeader } from "@/components/dashboard/layout";
import { AGENTS } from "@/lib/agents-data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  LucideSend, 
  LucideMic, 
  LucideSave, 
  LucideShare2, 
  LucideTrash2,
  LucideSparkles
} from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgentInterfacePage({ params }: { params: { slug: string } }) {
  const agent = AGENTS[params.slug as keyof typeof AGENTS];
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([
    { role: "assistant", content: `Hello Pete, I'm your ${agent?.name} agent. ${agent?.tagline} How can I help you today?` }
  ]);
  const [isThinking, setIsThinking] = React.useState(false);

  if (!agent) {
    notFound();
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const assistantMessage = { 
        role: "assistant", 
        content: `I've analyzed that for you. Based on your ADHD profile, I recommend breaking this down into 3 atomic steps to bypass the initiation wall. Would you like me to list them?` 
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsThinking(false);
    }, 2000);
  };

  return (
    <div className="h-screen flex flex-col">
      <DashboardHeader title={`Agent: ${agent.name}`} />
      
      <div className="flex-grow flex overflow-hidden">
        {/* Left Pane: Config/Context */}
        <div className="w-80 border-r border-border bg-surface p-8 hidden xl:flex flex-col gap-8 overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-text-muted mb-4">Current Agent</h3>
            <div className="p-4 glass rounded-xl border-accent/20">
              <div className="font-bold text-text-primary mb-1">{agent.name}</div>
              <div className="text-xs text-text-muted">{agent.tagline}</div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-text-muted mb-4">Instructions</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Always provide structured, high-signal responses. Break complex tasks into atomic units. 
              Celebrate small wins.
            </p>
          </div>

          <div className="mt-auto space-y-4">
            <Button variant="ghost" className="w-full justify-start gap-3 h-10 text-xs">
              <LucideSave size={16} />
              Save to History
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 h-10 text-xs">
              <LucideShare2 size={16} />
              Share Session
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 h-10 text-xs text-warning hover:text-warning hover:bg-warning/10">
              <LucideTrash2 size={16} />
              Clear Chat
            </Button>
          </div>
        </div>

        {/* Right Pane: Chat Interface */}
        <div className="flex-grow flex flex-col relative bg-bg">
          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-8 space-y-8">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex max-w-[800px] mx-auto gap-6",
                    msg.role === "assistant" ? "" : "flex-row-reverse"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[10px]",
                    msg.role === "assistant" ? "bg-accent/20 text-accent" : "bg-surface-raised text-text-muted border border-border"
                  )}>
                    {msg.role === "assistant" ? agent.name[0] : "ME"}
                  </div>
                  <div className={cn(
                    "flex-grow space-y-2",
                    msg.role === "user" ? "text-right" : ""
                  )}>
                    <div className={cn(
                      "inline-block p-5 rounded-2xl text-sm leading-relaxed",
                      msg.role === "assistant" 
                        ? "bg-surface text-text-primary rounded-tl-none border border-border font-mono" 
                        : "bg-accent text-white rounded-tr-none shadow-[0_10px_20px_rgba(123,110,246,0.2)]"
                    )}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isThinking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex max-w-[800px] mx-auto gap-6"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                    <LucideSparkles size={14} className="animate-pulse" />
                  </div>
                  <div className="flex gap-1.5 mt-3">
                    <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="p-8 bg-bg border-t border-border">
            <form 
              onSubmit={handleSend}
              className="max-w-[800px] mx-auto relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-hero rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>
              <div className="relative flex items-center glass rounded-2xl p-2 pr-4 border-border focus-within:border-accent transition-colors">
                <button type="button" className="p-3 text-text-muted hover:text-accent transition-colors">
                  <LucideMic size={20} />
                </button>
                <input
                  type="text"
                  placeholder={`Message ${agent.name}...`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow bg-transparent border-none focus:outline-none px-4 text-sm text-text-primary"
                />
                <Button 
                  type="submit" 
                  variant="gradient" 
                  size="icon" 
                  disabled={!input.trim() || isThinking}
                  className="rounded-xl h-10 w-10"
                >
                  <LucideSend size={18} />
                </Button>
              </div>
              <div className="mt-3 flex justify-between px-2 text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold">
                <span>Claude 3.5 Sonnet</span>
                <span>Context: High</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
