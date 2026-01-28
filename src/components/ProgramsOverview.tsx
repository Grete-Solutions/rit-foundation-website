import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Scissors, Sprout } from "lucide-react";

const programs = [
  {
    icon: Scissors,
    name: "Teens in Tech Initiative",
    summary:
      "A multi-phase program combining fashion design, ICT, and life skills training for teenagers aged 9–15, with a strong focus on girls in rural Ghana.",
  },
  {
    icon: Monitor,
    name: "Digital Skills Development",
    summary:
      "Training in digital literacy, graphic design, digital marketing, and coding to prepare youth for the digital economy.",
  },
  {
    icon: Sprout,
    name: "Entrepreneurship & Zero-Waste Training",
    summary:
      "Programs that combine vocational skills with entrepreneurship education and sustainable, zero-waste practices.",
  },
];

export function ProgramsOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Core Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Practical, community-driven programs designed to create lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <program.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {program.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {program.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="group">
            <Link to="/programs">
              Explore Our Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
