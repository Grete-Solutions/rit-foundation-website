import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import certificateCeremony from "@/assets/certificate-ceremony.jpg";

export function ImpactSnapshot() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="section-label mb-4 block">Real Results</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Impact So Far
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our programs have culminated in exhibitions, graduations, and national recognition, including support from Ghana's TVET Services.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-foreground">30+ girls and youth trained</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-foreground">Communities in Kpotame and Sogakope reached</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-foreground">Multiple Teens in Tech phases completed</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="rounded-none group">
              <Link to="/impact">
                See Our Impact
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img
                src={certificateCeremony}
                alt="Certificate award ceremony"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-primary -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
