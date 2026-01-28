import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  CheckCircle2,
  Calendar,
  BarChart3,
  AlertCircle,
  Heart,
  ArrowRight,
  TrendingUp,
  GraduationCap,
  Lightbulb,
  Target,
} from "lucide-react";

const impactMetrics = [
  { icon: Users, label: "Girls and Youth Trained", value: "30+" },
  { icon: MapPin, label: "Communities Reached", value: "Kpotame, Sogakope & surrounding villages" },
  { icon: Award, label: "Completed Training Phases", value: "Teens in Tech – Multiple Phases" },
  { icon: GraduationCap, label: "Graduation & Exhibitions", value: "Yes" },
];

const locations = [
  {
    name: "Kpotame",
    region: "Volta Region",
    description: "Home to the first phase of the Teens in Tech initiative, drawing participants from surrounding villages.",
  },
  {
    name: "Sogakope",
    region: "Volta Region",
    description: "Site of advanced training phases and graduation ceremonies for Teens in Tech beneficiaries.",
  },
];

const outcomes = [
  "Ability to take body measurements and create patterns",
  "Independent operation of hand and industrial sewing machines",
  "Design and production of skirts, dresses, and ceremonial outfits",
  "Improved confidence and creative expression",
  "Basic ICT and digital literacy skills",
];

const milestones = [
  {
    date: "November 2022",
    event: "Completion of Teens in Tech Phase I in Kpotame with an exhibition and certificate awards.",
  },
  {
    date: "November 2024",
    event: "Graduation ceremony for Teens in Tech beneficiaries in Sogakope.",
  },
  {
    date: "November 2024",
    event: "Recognition and keynote address by the Volta Regional Director of Ghana TVET Services.",
  },
];

const evaluationMethods = [
  "Monthly progress checks on skill acquisition",
  "Midway reviews to assess engagement and attendance",
  "Final evaluations measuring confidence, skills, and readiness for entrepreneurship or further education",
];

const challenges = [
  "Food insecurity affecting attendance and concentration",
  "Financial constraints limiting consistent participation",
  "Limited training materials and tools",
  "Irregular attendance and dropouts",
  "Insufficient parental support in some communities",
  "Discouragement from mainstream school teachers toward vocational training",
];

const futurePlans = [
  "Expansion of digital skills training",
  "Introduction of short-term, market-ready skill workshops",
  "Strengthening entrepreneurship education alongside vocational training",
  "Reaching additional rural communities",
];

const Impact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Real Results
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              RIT Foundation Ghana measures success by the practical skills gained, confidence built, and opportunities created for girls and youth in rural communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact at a Glance */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Impact at a Glance
            </h2>
            <p className="text-muted-foreground">A snapshot of our measurable outcomes</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="text-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                  <metric.icon className="h-7 w-7" />
                </div>
                <p className="font-display text-2xl font-bold text-foreground mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Where We Work
            </h2>
            <p className="text-muted-foreground">Communities we serve in the Volta Region</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location) => (
              <div key={location.name} className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {location.name}
                    </h3>
                    <p className="text-sm text-primary">{location.region}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Participants Achieved */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                What Participants Achieved
              </h2>
              <p className="text-muted-foreground">Practical skills and personal growth outcomes</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
              Key Milestones
            </h2>
            <p className="text-secondary-foreground/80">Moments that validate our progress</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-secondary-foreground/20" />

              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-6 mb-8 last:mb-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="flex-1 p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-3">
                      {milestone.date}
                    </span>
                    <p className="text-secondary-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring and Evaluation */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BarChart3 className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  Monitoring and Evaluation
                </h2>
                <p className="text-muted-foreground">
                  Our commitment to accountability and continuous improvement
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {evaluationMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-foreground">{method}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <AlertCircle className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  Challenges We Encounter
                </h2>
                <p className="text-muted-foreground">
                  Transparency about the realities we face
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive text-xs font-semibold mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic p-4 rounded-lg bg-card border border-border">
              These challenges inform program improvements and partnership needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Support Matters */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-8">
              <Heart className="h-8 w-8" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Why Support Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Partnerships and support enable RIT Foundation Ghana to provide meals, training materials, and expanded access to skills development, ensuring that no motivated young person is left behind due to financial or social barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary mx-auto mb-6">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
                Looking Ahead
              </h2>
              <p className="text-secondary-foreground/80">
                Our plans for sustainable growth and expanded reach
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {futurePlans.map((plan, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <p className="text-secondary-foreground">{plan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 sm:p-16 text-center">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Partner With Us to Deepen Impact
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
                We welcome partners who share our commitment to skills development, gender equity, and sustainable livelihoods.
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

export default Impact;
