import { PageWrapper } from "@/components/layout/page-wrapper";
import { ScrollReveal } from "@/components/layout/page-wrapper";

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <h1 className="text-h1 mb-12">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none text-text-secondary space-y-8 leading-relaxed">
              <p>Last Updated: April 28, 2026</p>
              
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">1. Introduction</h2>
                <p>
                  At ADHDagent, we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you as to how we look after your personal data when you 
                  visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">2. The Data We Collect</h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you which 
                  we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Identity Data</strong> includes first name, last name, and username.</li>
                  <li><strong>Contact Data</strong> includes email address.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, and operating system.</li>
                  <li><strong>Profile Data</strong> includes your ADHD type and workspace preferences.</li>
                  <li><strong>Usage Data</strong> includes information about how you use our agents and services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">3. AI Data Processing</h2>
                <p>
                  ADHDagent uses Claude (Anthropic) for AI processing. Your conversational data is processed 
                  securely and is <strong>not used to train public AI models</strong>. We implement strict 
                  data residency and security protocols to ensure your executive function data remains yours.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">4. GDPR Compliance</h2>
                <p>
                  For users in the EU/UK, we process data under the lawful basis of contract performance 
                  and legitimate interest. You have the right to request access to, correction of, or 
                  deletion of your personal data at any time via your dashboard or by contacting us.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageWrapper>
  );
}
