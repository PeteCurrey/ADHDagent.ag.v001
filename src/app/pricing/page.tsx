import { PageWrapper } from "@/components/layout/page-wrapper";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata = {
  title: "Pricing — ADHDagent",
  description: "Straightforward pricing for high-performing ADHD brains. Start your 14-day free trial today.",
};

export default function PricingPage() {
  return (
    <PageWrapper>
      <div className="pt-20">
        <Pricing />
        <FAQ />
        <FinalCTA />
      </div>
    </PageWrapper>
  );
}
