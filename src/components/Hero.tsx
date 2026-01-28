import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Lightbulb } from "lucide-react";

const impactStats = [
  { icon: Users, value: "50,000+", label: "Lives Impacted" },
  { icon: Heart, value: "120+", label: "Communities Served" },
  { icon: Lightbulb, value: "45", label: "Active Programs" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Transforming Lives Since 2010</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 animate-slide-up">
            Empowering Communities,{" "}
            <span className="text-primary">Transforming Ghana</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-secondary-foreground/80 mb-10 max-w-2xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            RIT Foundation Ghana is dedicated to sustainable development through education, healthcare, and community empowerment programs that create lasting change.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up"
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
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <span className="font-display text-2xl sm:text-3xl font-bold text-secondary-foreground">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-secondary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
