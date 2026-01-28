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
} from "lucide-react";

const impactMetrics = [
  { icon: Users, label: "Girls and Youth Trained", value: "30+" },
  { icon: MapPin, label: "Communities Reached", value: "2" },
  { icon: Award, label: "Program Phases", value: "Multiple" },
];

const outcomes = [
  "Ability to take body measurements and create patterns",
  "Independent operation of hand and industrial sewing machines",
  "Design and production of skirts, dresses, and ceremonial outfits",
  "Improved confidence and creative expression",
  "Basic ICT and digital literacy skills",
];

const milestones = [
  { date: "November 2022", event: "Completion of Teens in Tech Phase I in Kpotame with exhibition and certificates." },
  { date: "November 2024", event: "Graduation ceremony for Teens in Tech beneficiaries in Sogakope." },
  { date: "November 2024", event: "Recognition and keynote address by Volta Regional Director of Ghana TVET Services." },
];

const challenges = [
  "Food insecurity affecting attendance and concentration",
  "Financial constraints limiting consistent participation",
  "Limited training materials and tools",
  "Irregular attendance and dropouts",
  "Insufficient parental support in some communities",
  "Discouragement from mainstream school teachers",
];

const futurePlans = [
  "Expansion of digital skills training",
  "Introduction of short-term, market-ready skill workshops",
  "Strengthening entrepreneurship education",
  "Reaching additional rural communities",
];

const Impact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block text-primary">Real Results</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              We measure success by practical skills gained, confidence built, and opportunities created for girls and youth in rural communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Snapshot</span>
            <h2 className="font-display text-3xl font-bold text-foreground">Impact at a Glance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="text-center p-8 border border-border">
                <metric.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <span className="font-display text-4xl font-bold text-foreground block mb-2">
                  {metric.value}
                </span>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Geographic Reach</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Where We Work</h2>
              <div className="space-y-6">
                <div className="bg-background p-6 border-l-4 border-primary">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Kpotame</h3>
                  <p className="text-sm text-primary mb-2">Volta Region</p>
                  <p className="text-muted-foreground">
                    Home to the first phase of Teens in Tech, drawing participants from surrounding villages.
                  </p>
                </div>
                <div className="bg-background p-6 border-l-4 border-primary">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Sogakope</h3>
                  <p className="text-sm text-primary mb-2">Volta Region</p>
                  <p className="text-muted-foreground">
                    Site of advanced training phases and graduation ceremonies for Teens in Tech beneficiaries.
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-secondary flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-secondary-foreground font-display text-xl">Volta Region, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label mb-4 block">Results</span>
              <h2 className="font-display text-3xl font-bold text-foreground">What Participants Achieved</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-4 p-5 bg-muted border-l-4 border-primary">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block text-primary">Progress</span>
            <h2 className="font-display text-3xl font-bold">Key Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone) => (
              <div key={milestone.date} className="flex gap-6 items-start">
                <div className="w-32 shrink-0 text-right">
                  <span className="text-primary font-semibold">{milestone.date}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                <p className="text-secondary-foreground/80 flex-1">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <AlertCircle className="h-10 w-10 text-accent shrink-0" />
              <div>
                <span className="section-label mb-2 block">Transparency</span>
                <h2 className="font-display text-3xl font-bold text-foreground">Challenges We Encounter</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted">
                  <span className="w-6 h-6 bg-accent/10 text-accent text-xs font-semibold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic border-l-2 border-accent pl-4">
              These challenges inform program improvements and partnership needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Support Matters */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <span className="section-label mb-4 block">Making a Difference</span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Why Support Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Partnerships and support enable RIT Foundation Ghana to provide meals, training materials, and expanded access to skills development, ensuring that no motivated young person is left behind due to financial or social barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
              <span className="section-label mb-4 block">Future Plans</span>
              <h2 className="font-display text-3xl font-bold text-foreground">Looking Ahead</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {futurePlans.map((plan) => (
                <div key={plan} className="flex items-center gap-4 p-5 bg-muted border-l-4 border-primary">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-foreground">{plan}</p>
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
              Partner With Us to Deepen Impact
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-10">
              We welcome partners who share our commitment to skills development, gender equity, and sustainable livelihoods.
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

export default Impact;
