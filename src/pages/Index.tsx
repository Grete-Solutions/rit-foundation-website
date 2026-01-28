import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { AboutSnapshot } from "@/components/AboutSnapshot";
import { ProblemStatement } from "@/components/ProblemStatement";
import { ProgramsOverview } from "@/components/ProgramsOverview";
import { ImpactSnapshot } from "@/components/ImpactSnapshot";
import { WhyPartner } from "@/components/WhyPartner";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSnapshot />
      <ProblemStatement />
      <ProgramsOverview />
      <ImpactSnapshot />
      <WhyPartner />
      <CallToAction />
    </Layout>
  );
};

export default Index;
