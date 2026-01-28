import { GraduationCap, HeartPulse, Home, Sprout } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Providing quality education and scholarships to empower the next generation of Ghanaian leaders.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Delivering essential healthcare services and medical outreach to underserved communities.",
  },
  {
    icon: Home,
    title: "Community",
    description: "Building sustainable infrastructure and fostering economic development at the grassroots level.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description: "Implementing eco-friendly initiatives and training for long-term environmental stewardship.",
  },
];

export function Mission() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Mission
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Building a Brighter Future for Ghana
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through our four core pillars, we work hand-in-hand with local communities to create sustainable, lasting change that uplifts lives and preserves culture.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <pillar.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
