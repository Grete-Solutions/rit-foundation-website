import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Handshake,
  Building2,
  Heart,
  Landmark,
  Users,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  GraduationCap,
  Wrench,
  Layers,
  Scissors,
  Monitor,
  Briefcase,
  Leaf,
  BookOpen,
} from "lucide-react";

const whyPartnerPoints = [
  "Strong community-based implementation experience",
  "Clear focus on girls and underserved youth",
  "Proven vocational and digital skills programs",
  "Transparent, impact-driven approach",
  "Alignment with sustainable development goals",
];

const partnerTypes = [
  { icon: Building2, type: "Corporate Organizations", description: "CSR partnerships, skills initiatives, and community impact programs." },
  { icon: Heart, type: "Foundations & Grant Makers", description: "Education, gender equity, and youth empowerment support." },
  { icon: Landmark, type: "Government Agencies", description: "Workforce development and TVET priorities." },
  { icon: Users, type: "NGOs & CSOs", description: "Joint programming and capacity building." },
];

const partnershipModels = [
  { icon: DollarSign, model: "Program Funding", description: "Support delivery or expansion of training programs." },
  { icon: GraduationCap, model: "Technical Expertise", description: "Provide facilitators, trainers, or mentors." },
  { icon: Wrench, model: "Equipment Support", description: "Donate training tools and learning materials." },
  { icon: Layers, model: "Joint Implementation", description: "Co-design programs with shared objectives." },
];

const focusAreas = [
  { icon: Scissors, area: "Vocational skills" },
  { icon: Monitor, area: "Digital innovation" },
  { icon: Briefcase, area: "Entrepreneurship" },
  { icon: BookOpen, area: "Girls' education" },
  { icon: Leaf, area: "Sustainability" },
];

const processSteps = [
  "Initial discussion to understand shared goals",
  "Identification of partnership model and scope",
  "Co-development of implementation plan",
  "Program delivery and ongoing communication",
  "Monitoring, evaluation, and impact reporting",
];

const PartnerWithUs = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block text-primary">Collaborate With Us</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Partner With RIT Foundation Ghana
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              We collaborate with organizations committed to empowering girls and youth through practical skills, innovation, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Value Proposition</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Why Partner With Us</h2>
              <ul className="space-y-4">
                {whyPartnerPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted p-10 border-l-4 border-primary">
              <Handshake className="h-12 w-12 text-primary mb-6" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Collaboration, Not Charity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We view partnerships as collaborative relationships built on shared goals, mutual respect, and a commitment to sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Who We Work With</span>
            <h2 className="font-display text-3xl font-bold text-foreground">Who We Partner With</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((partner) => (
              <div key={partner.type} className="bg-background p-6 border border-border hover:border-primary transition-colors">
                <partner.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{partner.type}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Collaboration Options</span>
            <h2 className="font-display text-3xl font-bold text-foreground">How We Can Work Together</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnershipModels.map((model) => (
              <div key={model.model} className="flex items-start gap-4 p-6 bg-muted border-l-4 border-primary">
                <model.icon className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{model.model}</h3>
                  <p className="text-muted-foreground">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block text-primary">Strategic Alignment</span>
            <h2 className="font-display text-3xl font-bold">Our Focus Areas</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {focusAreas.map((item) => (
              <div key={item.area} className="flex items-center gap-3 px-6 py-3 bg-secondary-foreground/5 border border-secondary-foreground/10">
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground font-medium">{item.area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-label mb-4 block">Getting Started</span>
              <h2 className="font-display text-3xl font-bold text-foreground">Our Partnership Process</h2>
            </div>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-6 p-6 bg-muted">
                  <span className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-foreground font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Let's Explore a Partnership
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              If your organization is interested in collaborating to expand skills development and opportunities for young people, we'd be glad to connect.
            </p>
            <Button asChild size="lg" className="rounded-none px-8 group">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerWithUs;
