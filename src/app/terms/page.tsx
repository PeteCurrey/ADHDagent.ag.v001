import { PageWrapper } from "@/components/layout/page-wrapper";
import { ScrollReveal } from "@/components/layout/page-wrapper";

export default function TermsPage() {
  return (
    <PageWrapper>
      <div className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <h1 className="text-h1 mb-12">Terms of Service</h1>
            <div className="prose prose-invert max-w-none text-text-secondary space-y-8 leading-relaxed">
              <p>Last Updated: April 28, 2026</p>
              
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using ADHDagent, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of the terms, you may not access the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">2. Subscription & Trials</h2>
                <p>
                  We offer a 14-day free trial on all plans. No credit card is required to start the trial. 
                  At the end of the trial, you must choose a paid plan to continue using the service. 
                  Subscriptions are billed monthly or annually and can be cancelled at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">3. Acceptable Use</h2>
                <p>
                  You agree not to use ADHDagent for any unlawful purpose or to generate content that 
                  is harmful, threatening, or abusive. We reserve the right to terminate accounts that 
                  violate our acceptable use policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">4. Limitation of Liability</h2>
                <p>
                  ADHDagent provides AI-driven structure and support. We are not a medical service 
                  and do not provide medical advice or ADHD diagnosis. Use of the platform is at 
                  your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">5. Contact</h2>
                <p>
                  If you have any questions about these Terms, please contact us at terms@adhd-agent.com.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageWrapper>
  );
}
