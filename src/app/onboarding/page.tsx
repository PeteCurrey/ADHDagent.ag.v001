"use client";

import { Button } from "@/components/ui/button";
import { MeshBackground } from "@/components/ui/mesh-background";
import { useRouter } from "next/navigation";
import { LucideArrowRight, LucideArrowLeft, LucideCheckCircle2 } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "adhd-type",
    title: "How do you work best?",
    subtitle: "Understanding your ADHD type helps us tailor the agents' responses.",
    options: [
      { label: "Inattentive", value: "inattentive" },
      { label: "Hyperactive", value: "hyperactive" },
      { label: "Combined", value: "combined" },
      { label: "Prefer not to say", value: "none" }
    ],
    multiSelect: false
  },
  {
    id: "challenges",
    title: "What's your biggest challenge?",
    subtitle: "Select all that apply to your current situation.",
    options: [
      { label: "Starting tasks", value: "starting" },
      { label: "Email overwhelm", value: "email" },
      { label: "Staying focused", value: "focus" },
      { label: "Meeting deadlines", value: "deadlines" },
      { label: "AI overwhelm", value: "ai_overwhelmed" },
      { label: "Finishing projects", value: "finishing" }
    ],
    multiSelect: true
  },
  {
    id: "agents",
    title: "Pick your first agents",
    subtitle: "These will be pinned to your dashboard for quick access.",
    options: [
      { label: "Clarity (Daily Planning)", value: "clarity" },
      { label: "Momentum (Accountability)", value: "momentum" },
      { label: "Inbox Zero (Email Management)", value: "inbox-zero" },
      { label: "Briefing (AI Intelligence)", value: "briefing" },
      { label: "Finisher (Project Breakdown)", value: "finisher" },
      { label: "Reframe (Overwhelm Support)", value: "reframe" },
      { label: "Capture (Voice-to-Action)", value: "capture" }
    ],
    multiSelect: true
  }
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selections, setSelections] = React.useState<Record<string, any>>({});
  const [isFinishing, setIsFinishing] = React.useState(false);

  const step = steps[currentStep];

  const handleSelect = (value: string) => {
    if (step.multiSelect) {
      const current = selections[step.id] || [];
      const updated = current.includes(value)
        ? current.filter((v: string) => v !== value)
        : [...current, value];
      setSelections({ ...selections, [step.id]: updated });
    } else {
      setSelections({ ...selections, [step.id]: value });
    }
  };

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finish();
    }
  };

  const back = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const finish = async () => {
    setIsFinishing(true);
    // Simulate API call to save onboarding data
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/dashboard");
  };

  if (isFinishing) {
    return (
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <MeshBackground />
        <div className="text-center space-y-6">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h1 className="text-2xl font-bold">Your workspace is ready.</h1>
          <p className="text-text-secondary">Calibrating your agents...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      <MeshBackground />
      
      <div className="w-full max-w-[600px] relative z-10">
        <div className="mb-12">
          <div className="flex gap-2 mb-8">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 flex-grow rounded-full transition-colors duration-500 ${i <= currentStep ? "bg-accent" : "bg-white/10"}`}
              />
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl font-bold mb-2">{step.title}</h1>
              <p className="text-text-secondary mb-10">{step.subtitle}</p>

              <div className="grid grid-cols-1 gap-4">
                {step.options.map((option) => {
                  const isSelected = step.multiSelect 
                    ? (selections[step.id] || []).includes(option.value)
                    : selections[step.id] === option.value;
                  
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className={`p-6 rounded-card border text-left transition-all duration-300 flex items-center justify-between ${
                        isSelected 
                          ? "bg-accent/10 border-accent text-text-primary" 
                          : "bg-surface border-border text-text-secondary hover:border-text-muted"
                      }`}
                    >
                      <span className="font-medium">{option.label}</span>
                      {isSelected && <LucideCheckCircle2 size={20} className="text-accent" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={back} 
            disabled={currentStep === 0}
            className={currentStep === 0 ? "opacity-0" : ""}
          >
            <LucideArrowLeft size={18} className="mr-2" />
            Back
          </Button>
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={next}
            disabled={!selections[step.id] || (step.multiSelect && selections[step.id].length === 0)}
          >
            {currentStep === steps.length - 1 ? "Complete setup" : "Next step"}
            <LucideArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
