import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 sm:p-16 text-center">
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Let's Work Together to Empower the Next Generation
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
              Whether you're interested in partnership, collaboration, or learning more about our work, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base group bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
              >
                <Link to="/partner-with-us">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
