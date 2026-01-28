import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import participantsPledge from "@/assets/participants-pledge.jpg";

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img
                src={participantsPledge}
                alt="RIT Foundation participants taking pledge"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="section-label mb-4 block">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              RIT Foundation Ghana is a registered non-governmental organization established to empower girls, young women, and youth through gender-responsive vocational, technical, and digital skills training.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Since 2020, we have worked with communities in rural Ghana to bridge the gap between education and employability.
            </p>
            <Button asChild variant="outline" className="rounded-none group">
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
