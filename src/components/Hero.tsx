import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Young women and girls in vocational training workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Empowering Rural Ghana Since 2020</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 animate-slide-up">
            Empowering Girls and Youth Through{" "}
            <span className="text-primary">Skills, Technology, and Opportunity</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-secondary-foreground/80 mb-10 max-w-2xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            RIT Foundation Ghana equips young women and youth in rural communities with practical vocational, digital, and entrepreneurial skills for sustainable livelihoods.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button asChild size="lg" className="text-base group">
              <Link to="/partner-with-us">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
