import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Mission />
      <CallToAction />
    </Layout>
  );
};

export default Index;
