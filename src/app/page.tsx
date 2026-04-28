import { PageWrapper } from "@/components/layout/page-wrapper";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Agents } from "@/components/sections/agents";
import { Newsletter } from "@/components/sections/newsletter";
import { SocialProof } from "@/components/sections/social-proof";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <Problem />
      <HowItWorks />
      <Agents />
      <Newsletter />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </PageWrapper>
  );
}
