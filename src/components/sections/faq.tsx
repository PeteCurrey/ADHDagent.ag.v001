"use client";

import { ScrollReveal } from "@/components/layout/page-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need an ADHD diagnosis to use ADHDagent?",
    answer: "Not at all. While our agents are built specifically with ADHD executive function challenges in mind (like task initiation, prioritization, and working memory), anyone who feels overwhelmed by modern digital work will find immense value in the platform."
  },
  {
    question: "How is this different from ChatGPT or Copilot?",
    answer: "General AI is like a library; ADHDagent is like a specialized executive assistant. We don't just give you a text box. Each agent is pre-configured with advanced system prompts, specific workflows (like voice-to-plan), and long-term context that general models lack. We've removed the 'blank page' problem that often stops ADHD brains in their tracks."
  },
  {
    question: "What makes these agents specifically good for ADHD?",
    answer: "We focus on the 'Friction Points.' For example, the Clarity agent uses a brain-dump method to bypass the paralysis of choosing where to start. The Momentum agent uses body-doubling techniques to keep you focused. Every interaction is designed to reduce cognitive load and decision fatigue."
  },
  {
    question: "How does the free trial work?",
    answer: "Your 14-day free trial starts as soon as you sign up. You get full access to the Executive plan features. No credit card is required to start—we only ask for payment if you decide to continue after the 14 days."
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes. You can manage your subscription directly from your dashboard. If you cancel, you'll still have access to your plan until the end of the current billing cycle."
  },
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. We use industry-standard encryption, and your data is never used to train public AI models. We use Claude (Anthropic) for processing, which has some of the strictest data privacy standards in the industry."
  },
  {
    question: "Do you integrate with other tools like Notion, Gmail, or Slack?",
    answer: "Currently, our Inbox Zero agent integrates with major email providers. We are actively building integrations for Notion, Slack, and Linear, which will be rolled out to all Executive and Team users in the coming months."
  },
  {
    question: "Is there a mobile app?",
    answer: "We are currently a mobile-optimized web application. You can 'Add to Home Screen' for a near-native experience. A dedicated iOS and Android app are on our roadmap for late 2026."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Questions you'll actually have.</h2>
          </div>
        </ScrollReveal>

        <div className="max-w-[800px] mx-auto">
          <ScrollReveal delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
