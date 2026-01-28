import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, MapPin } from "lucide-react";

const highlights = [
  { icon: Award, label: "Registered NGO", value: "Companies Act 992" },
  { icon: Users, label: "Focus", value: "Girls & Youth" },
  { icon: MapPin, label: "Based In", value: "Volta Region, Ghana" },
];

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Building Pathways from Education to Employability
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RIT Foundation Ghana is a registered non-governmental organization established to empower girls, young women, and youth through gender-responsive vocational, technical, and digital skills training. Since 2020, we have worked with communities in rural Ghana to bridge the gap between education and employability.
            </p>
            <Button asChild variant="outline" className="group">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
