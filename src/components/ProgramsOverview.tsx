import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Monitor, Briefcase } from "lucide-react";

const programs = [
  {
    icon: Scissors,
    name: "Teens in Tech Initiative",
    summary: "Multi-phase fashion design, ICT, and life skills training for teenagers aged 9–15.",
  },
  {
    icon: Monitor,
    name: "Digital Skills Development",
    summary: "Digital literacy, graphic design, and coding to prepare youth for the digital economy.",
  },
  {
    icon: Briefcase,
    name: "Entrepreneurship Training",
    summary: "Business management and financial literacy for sustainable livelihoods.",
  },
];

export function ProgramsOverview() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-4 block">What We Do</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Our Core Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group bg-background p-8 border border-border hover:border-primary transition-colors"
            >
              <program.icon className="h-10 w-10 text-primary mb-6" />
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
          <Button asChild variant="outline" className="rounded-none group">
            <Link to="/programs">
              Explore All Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
