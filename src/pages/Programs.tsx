import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Scissors,
  Monitor,
  Briefcase,
  Recycle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Handshake,
  BookOpen,
  BarChart,
  Clock,
  Award,
} from "lucide-react";
import fashionShowcase from "@/assets/fashion-showcase.jpg";
import presenterSpeaking from "@/assets/presenter-speaking.jpg";

const teensInTechPhases = [
  {
    phase: "Beginner",
    duration: "24 weeks",
    focus: [
      "Basic fashion design",
      "Body measurement and pattern making",
      "Sewing simple garments",
      "Introduction to ICT",
    ],
    outcome: "Participants complete simple garments and receive certificates",
  },
  {
    phase: "Intermediate",
    duration: "24 weeks",
    focus: [
      "Sewing skirts and dresses",
      "Basic styling techniques",
      "Introduction to fashion-related software",
      "Basic MS Office skills",
    ],
    outcome: "Participants create complete outfits and showcase their work",
  },
  {
    phase: "Advanced",
    duration: "24 weeks",
    focus: [
      "Advanced garment construction",
      "Fabric selection for different body types",
      "Ceremonial and custom outfit design",
      "Advanced ICT applications",
    ],
    outcome: "Graduation and readiness for entrepreneurship",
  },
];

const additionalPrograms = [
  {
    icon: Monitor,
    name: "Digital Skills Development",
    target: "Youth and young women",
    description: "Essential digital skills for the growing digital economy.",
    areas: ["Digital literacy", "Graphic design", "Digital marketing", "Introduction to coding"],
    status: "Planned and expanding",
  },
  {
    icon: Briefcase,
    name: "Entrepreneurship Training",
    target: "Youth and program graduates",
    description: "Business management and financial literacy knowledge.",
    areas: ["Business management", "Financial literacy", "Pricing and cost control", "Customer relations"],
  },
  {
    icon: Recycle,
    name: "Zero-Waste Training",
    target: "Vocational trainees",
    description: "Sustainability practices integrated into vocational training.",
    areas: ["Zero-waste production", "Upcycling of materials", "Sustainable fashion"],
  },
  {
    icon: Sparkles,
    name: "Short-Term Workshops",
    target: "General public",
    description: "Quick, marketable skills for immediate income opportunities.",
    areas: ["Beadwork", "Resin earring design", "Craftworks", "Makeup artistry"],
  },
];

const deliveryMethods = [
  { icon: Users, text: "Community-based implementation" },
  { icon: Handshake, text: "Partnership with schools and local institutions" },
  { icon: BookOpen, text: "Hands-on, practical learning" },
  { icon: BarChart, text: "Continuous monitoring and evaluation" },
];

const Programs = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block text-primary">What We Do</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Hands-on vocational, technical, digital, and entrepreneurial training programs designed to equip girls and youth with practical, income-generating skills.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Program */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Scissors className="h-12 w-12 text-primary" />
              <div>
                <span className="section-label block text-primary">Flagship Program</span>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Teens in Tech Initiative
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src={fashionShowcase}
                  alt="Fashion showcase participant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-muted p-8 border-l-4 border-primary flex flex-col justify-center">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  A multi-phase skills development program combining fashion design, basic ICT, and personal development for teenagers aged 9–15, with a strong focus on girls in rural Ghana.
                </p>
                <p className="text-muted-foreground">
                  <strong>Target Group:</strong> Teenagers aged 9–15 in rural communities
                </p>
              </div>
            </div>

            {/* Phases */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {teensInTechPhases.map((phase, index) => (
                <div key={phase.phase} className="bg-background border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {phase.phase}
                      </h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {phase.duration}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {phase.focus.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{phase.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Additional Offerings</span>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Additional Programs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalPrograms.map((program) => (
              <div key={program.name} className="bg-background border border-border p-8">
                <div className="flex items-center gap-4 mb-4">
                  <program.icon className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {program.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{program.target}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="flex flex-wrap gap-2">
                  {program.areas.map((area) => (
                    <span key={area} className="px-3 py-1 bg-muted text-sm text-muted-foreground">
                      {area}
                    </span>
                  ))}
                </div>
                {program.status && (
                  <p className="mt-4 text-sm text-primary font-medium">• {program.status}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label mb-4 block">Our Approach</span>
              <h2 className="font-display text-3xl font-bold text-foreground">
                How We Deliver Our Programs
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {deliveryMethods.map((method) => (
                <div key={method.text} className="flex items-center gap-4 p-6 bg-muted border-l-4 border-primary">
                  <method.icon className="h-8 w-8 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{method.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Partner With Us to Expand Skills Development
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-10">
              We collaborate with partners to scale our programs, reach more communities, and create sustainable impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-none px-8 group">
                <Link to="/partner-with-us">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-8 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
