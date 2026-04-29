import { PageWrapper } from "@/components/layout/page-wrapper";
import { Agents } from "@/components/sections/agents";

export default function AgentsPage() {
  return (
    <PageWrapper>
      <div className="pt-20">
        <Agents />
      </div>
    </PageWrapper>
  );
}
