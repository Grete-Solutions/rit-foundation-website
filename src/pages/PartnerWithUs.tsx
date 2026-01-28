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
  Target,
  Eye,
  BarChart3,
  Sparkles,
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
  "Alignment with sustainable development and workforce readiness",
];

const partnerTypes = [
  {
    icon: Building2,
    type: "Corporate Organizations",
    description: "Companies seeking meaningful CSR partnerships, skills development initiatives, or community impact programs.",
  },
  {
    icon: Heart,
    type: "Foundations and Grant Makers",
    description: "Organizations supporting education, gender equity, youth empowerment, and sustainable livelihoods.",
  },
  {
    icon: Landmark,
    type: "Government Agencies",
    description: "Institutions focused on workforce development, TVET, and national development priorities.",
  },
  {
    icon: Users,
    type: "International and Local NGOs",
    description: "Organizations interested in joint programming, capacity building, or community outreach.",
  },
];

const partnershipModels = [
  {
    icon: DollarSign,
    model: "Program Funding",
    description: "Support the delivery or expansion of vocational, digital, and entrepreneurship training programs.",
  },
  {
    icon: GraduationCap,
    model: "Technical Expertise and Mentorship",
    description: "Provide facilitators, trainers, or mentors to strengthen program quality.",
  },
  {
    icon: Wrench,
    model: "Equipment and Materials Support",
    description: "Donate or support access to training tools, equipment, and learning materials.",
  },
  {
    icon: Layers,
    model: "Joint Program Implementation",
    description: "Co-design and implement programs aligned with shared objectives.",
  },
];

const partnerBenefits = [
  "Direct involvement in measurable community impact",
  "Alignment with gender-responsive and skills-based development goals",
  "Visibility through program activities and impact reporting",
  "Opportunities for long-term collaboration and scaling",
];

const focusAreas = [
  { icon: Scissors, area: "Vocational and technical skills development" },
  { icon: Monitor, area: "Digital skills and innovation" },
  { icon: Briefcase, area: "Entrepreneurship and business readiness" },
  { icon: BookOpen, area: "Girls' education and empowerment" },
  { icon: Leaf, area: "Sustainable and zero-waste practices" },
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
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Collaborate With Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
              Partner With RIT Foundation Ghana
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              We collaborate with organizations and institutions committed to empowering girls and youth through practical skills, innovation, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Why Partner With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                RIT Foundation Ghana brings proven experience, community trust, and a commitment to measurable outcomes.
              </p>
              <ul className="space-y-4">
                {whyPartnerPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-2xl bg-secondary">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary mb-6">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-secondary-foreground mb-4">
                Collaboration, Not Charity
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                We view partnerships as collaborative relationships built on shared goals, mutual respect, and a commitment to sustainable impact. Together, we can achieve more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Who We Partner With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with diverse partners united by a commitment to youth empowerment and sustainable development
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((partner) => (
              <div
                key={partner.type}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <partner.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {partner.type}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Work Together */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              How We Can Work Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Practical partnership models tailored to your organization's goals and capacity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partnershipModels.map((model) => (
              <div
                key={model.model}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <model.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {model.model}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Partners Gain */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary mx-auto mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
                What Partners Gain
              </h2>
              <p className="text-secondary-foreground/80">
                Mutual value through meaningful collaboration
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {partnerBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-secondary-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Focus Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key thematic areas for strategic partnership alignment
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {focusAreas.map((item) => (
              <div
                key={item.area}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">{item.area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Partnership Process
              </h2>
              <p className="text-muted-foreground">
                A straightforward approach to building impactful partnerships
              </p>
            </div>
            <div className="relative">
              {/* Process line */}
              <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-border -translate-x-1/2" />
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className={`inline-flex items-center gap-4 p-5 rounded-xl bg-card border border-border ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}>
                        <span className="text-foreground">{step}</span>
                      </div>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 sm:p-16 text-center">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Let's Explore a Partnership
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
                If your organization is interested in collaborating to expand skills development and opportunities for young people, we'd be glad to connect.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base group bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerWithUs;
