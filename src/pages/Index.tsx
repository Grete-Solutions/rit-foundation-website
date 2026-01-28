import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { AboutSnapshot } from "@/components/AboutSnapshot";
import { ProgramsOverview } from "@/components/ProgramsOverview";
import { ImpactSnapshot } from "@/components/ImpactSnapshot";
import { GalleryHighlight } from "@/components/GalleryHighlight";
import { WhyPartner } from "@/components/WhyPartner";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSnapshot />
      <ProgramsOverview />
      <ImpactSnapshot />
      <GalleryHighlight />
      <WhyPartner />
      <CallToAction />
    </Layout>
  );
};

export default Index;
