import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const partnerPoints = [
  "Strong focus on girls and underserved youth",
  "Proven community-based implementation",
  "Alignment with sustainable development and skills-based empowerment",
  "Transparent, impact-driven programming",
];

export function WhyPartner() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Collaborate With Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Partner With RIT Foundation Ghana
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We collaborate with organizations, institutions, and individuals who share our commitment to empowering the next generation through practical skills and opportunity.
            </p>
            <Button asChild className="group">
              <Link to="/partner-with-us">
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Points */}
          <div className="p-8 sm:p-10 rounded-2xl bg-card border border-border">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              What Makes Us Different
            </h3>
            <ul className="space-y-5">
              {partnerPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
