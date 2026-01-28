import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Award } from "lucide-react";

const metrics = [
  {
    icon: MapPin,
    label: "Communities Reached",
    value: "Sogakope & Kpotame",
  },
  {
    icon: Users,
    label: "Girls Trained",
    value: "30+",
  },
  {
    icon: Award,
    label: "Programs Delivered",
    value: "Teens in Tech (Multiple Phases)",
  },
];

export function ImpactSnapshot() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Real Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
            Our Impact So Far
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-8 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary mx-auto mb-4">
                <metric.icon className="h-7 w-7" />
              </div>
              <p className="text-sm text-secondary-foreground/70 mb-2">{metric.label}</p>
              <p className="font-display text-2xl font-bold text-secondary-foreground">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our programs have culminated in exhibitions, graduations, and national recognition, including support from Ghana's TVET Services.
          </p>
          <Button asChild variant="outline" className="group border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
            <Link to="/impact">
              See Our Impact
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
