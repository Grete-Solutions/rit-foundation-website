import { Layout } from "@/components/Layout";
import { Users, Heart, GraduationCap, Home, TrendingUp } from "lucide-react";

const impactMetrics = [
  { icon: Users, value: "50,000+", label: "Lives Impacted", description: "Individuals directly benefiting from our programs" },
  { icon: Heart, value: "120+", label: "Communities", description: "Villages and towns across all regions of Ghana" },
  { icon: GraduationCap, value: "15,000+", label: "Students", description: "Children receiving educational support and scholarships" },
  { icon: Home, value: "85", label: "Projects", description: "Infrastructure and development projects completed" },
];

const Impact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Impact
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
              Measuring Our Progress
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Transparency and accountability drive our work. See how your support translates into real, measurable change.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="text-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-6">
                  <metric.icon className="h-7 w-7" />
                </div>
                <span className="font-display text-4xl font-bold text-foreground">
                  {metric.value}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-8">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Growing Impact Year Over Year
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Since our founding in 2010, we've expanded from serving 3 communities to over 120, with consistent growth in both reach and depth of our programs. Our commitment to sustainable development ensures that the impact we create today will continue to benefit generations to come.
            </p>
            <div className="p-12 rounded-2xl border-2 border-dashed border-border bg-background">
              <p className="text-muted-foreground">Interactive impact charts coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
