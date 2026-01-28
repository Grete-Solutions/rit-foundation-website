import { Layout } from "@/components/Layout";
import { GraduationCap, HeartPulse, Home, Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: GraduationCap,
    title: "Education Initiative",
    description: "Providing scholarships, school supplies, and infrastructure improvements to ensure every child has access to quality education.",
    stats: "15,000+ students supported",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Outreach",
    description: "Mobile clinics, maternal health programs, and disease prevention campaigns reaching remote communities.",
    stats: "120+ communities served",
  },
  {
    icon: Home,
    title: "Community Development",
    description: "Building wells, community centers, and supporting local entrepreneurship for economic empowerment.",
    stats: "85 infrastructure projects",
  },
  {
    icon: Sprout,
    title: "Environmental Sustainability",
    description: "Tree planting initiatives, sustainable farming training, and renewable energy projects.",
    stats: "50,000+ trees planted",
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Programs
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
              Creating Lasting Impact
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Our comprehensive programs address the most pressing needs in Ghanaian communities, creating sustainable pathways to prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="group p-10 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <program.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{program.stats}</span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Want to Support Our Programs?
          </h2>
          <Button asChild size="lg">
            <Link to="/partner-with-us">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
