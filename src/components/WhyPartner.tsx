import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const partnerPoints = [
  "Strong focus on girls and underserved youth",
  "Proven community-based implementation",
  "Transparent, impact-driven programming",
  "Alignment with sustainable development goals",
];

export function WhyPartner() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="section-label mb-4 block text-primary">Collaborate With Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Why Partner With RIT Foundation Ghana
            </h2>
            <p className="text-secondary-foreground/80 leading-relaxed mb-8">
              We collaborate with organizations, institutions, and individuals who share our commitment to empowering the next generation through practical skills and opportunity.
            </p>
            <ul className="space-y-4 mb-10">
              {partnerPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="rounded-none group">
              <Link to="/partner-with-us">
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Quote/Highlight Box */}
          <div className="bg-secondary-foreground/5 p-10 border-l-4 border-primary">
            <blockquote className="font-display text-2xl font-medium text-secondary-foreground italic mb-6">
              "We believe every young person deserves the skills and opportunity to build a sustainable livelihood."
            </blockquote>
            <p className="text-secondary-foreground/60">— RIT Foundation Ghana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
