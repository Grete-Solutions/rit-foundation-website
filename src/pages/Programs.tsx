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
  GraduationCap,
  Target,
  Clock,
  Award,
  Handshake,
  BookOpen,
  BarChart,
} from "lucide-react";

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
    outcome: "Participants create complete outfits and showcase their work at exhibitions",
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
    outcome: "Graduation ceremony and readiness for entrepreneurship or further training",
  },
];

const teensInTechObjectives = [
  "Introduce teenagers to vocational and technical skills at an early age",
  "Encourage girls' participation in technical and digital education",
  "Build confidence, creativity, and leadership skills",
  "Provide practical, income-generating abilities",
];

const deliveryMethods = [
  "Hands-on practical sessions",
  "Community-based training",
  "Facilitator-led instruction",
  "Exhibitions and graduations",
];

const digitalSkillsAreas = [
  "Digital literacy",
  "Graphic design",
  "Digital marketing",
  "Introduction to coding",
];

const entrepreneurshipAreas = [
  "Basic business management",
  "Financial literacy",
  "Pricing and cost control",
  "Customer relations",
];

const zeroWasteAreas = [
  "Zero-waste production practices",
  "Upcycling of materials",
  "Sustainable fashion concepts",
];

const shortTermSkills = [
  "Beadwork",
  "Resin earring design",
  "Craftworks",
  "Makeup artistry",
];

const implementationMethods = [
  { icon: Users, text: "Community-based implementation" },
  { icon: Handshake, text: "Partnership with schools and local institutions" },
  { icon: BookOpen, text: "Hands-on, practical learning" },
  { icon: BarChart, text: "Continuous monitoring and evaluation" },
];

const Programs = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              RIT Foundation Ghana delivers hands-on vocational, technical, digital, and entrepreneurial training programs designed to equip girls and youth with practical, income-generating skills.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Program - Teens in Tech */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Program Header */}
            <div className="flex items-start gap-6 mb-12">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Scissors className="h-8 w-8" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                  Flagship Program
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                  Teens in Tech Initiative
                </h2>
                <p className="text-muted-foreground">
                  <strong>Target Group:</strong> Teenagers aged 9–15, with a strong focus on girls in rural communities
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="p-8 rounded-2xl bg-muted mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                The Teens in Tech Initiative is a multi-phase skills development program that combines fashion design, basic ICT, and personal development to prepare young people for self-reliance and future career pathways.
              </p>
            </div>

            {/* Objectives */}
            <div className="mb-12">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Program Objectives
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {teensInTechObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <Target className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phases */}
            <div className="mb-12">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Program Structure
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {teensInTechPhases.map((phase, index) => (
                  <div key={phase.phase} className="p-6 rounded-2xl bg-card border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-foreground">{phase.phase}</h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {phase.duration}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {phase.focus.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground font-medium">{phase.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Methods */}
            <div className="p-6 rounded-2xl bg-secondary">
              <h3 className="font-display text-lg font-semibold text-secondary-foreground mb-4">
                Delivery Methods
              </h3>
              <div className="flex flex-wrap gap-3">
                {deliveryMethods.map((method) => (
                  <span key={method} className="px-4 py-2 rounded-full bg-secondary-foreground/10 text-secondary-foreground text-sm">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Programs Grid */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Additional Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complementary training initiatives that support holistic skills development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital Skills */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Digital Skills Development Program
                  </h3>
                  <p className="text-sm text-muted-foreground">Youth and young women</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This program equips participants with essential digital skills to participate in the growing digital economy.
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {digitalSkillsAreas.map((area) => (
                    <span key={area} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Planned and expanding
                </span>
              </div>
            </div>

            {/* Entrepreneurship */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Entrepreneurship and Business Skills
                  </h3>
                  <p className="text-sm text-muted-foreground">Youth, young women, and program graduates</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Entrepreneurship training complements vocational skills by equipping participants with business management and financial literacy knowledge.
              </p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {entrepreneurshipAreas.map((area) => (
                    <span key={area} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Zero-Waste */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Recycle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Zero-Waste Vocational Training
                  </h3>
                  <p className="text-sm text-muted-foreground">Youth and vocational trainees</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This program integrates sustainability practices into vocational training by promoting resource efficiency and upcycling.
              </p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {zeroWasteAreas.map((area) => (
                    <span key={area} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Short-Term Workshops */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Short-Term Skills Workshops
                  </h3>
                  <p className="text-sm text-muted-foreground">Quick, marketable skills</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Short-duration training programs focused on quick, marketable skills that can generate income immediately.
              </p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Skills Offered</h4>
                <div className="flex flex-wrap gap-2">
                  {shortTermSkills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                How We Deliver Our Programs
              </h2>
              <p className="text-muted-foreground">
                Our implementation approach ensures quality, accessibility, and lasting impact
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {implementationMethods.map((method) => (
                <div key={method.text} className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <span className="text-foreground font-medium">{method.text}</span>
                </div>
              ))}
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
                Partner With Us to Expand Skills Development
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
                We collaborate with partners to scale our programs, reach more communities, and create sustainable impact.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-base group bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                >
                  <Link to="/partner-with-us">
                    Partner With Us
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
