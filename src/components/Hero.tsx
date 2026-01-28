import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Award } from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";

const stats = [
  { icon: Users, value: "30+", label: "Girls Trained" },
  { icon: MapPin, value: "2", label: "Communities" },
  { icon: Award, value: "Multiple", label: "Program Phases" },
];

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5">
        <img
          src={heroImage}
          alt="Young women in vocational training"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:from-background lg:via-background/50 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl py-20">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 animate-slide-up">
            Empowering Girls and Youth Through Skills, Technology, and Opportunity.
          </h1>

          <p
            className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            RIT Foundation Ghana equips young women and youth in rural communities with practical vocational, digital, and entrepreneurial skills for sustainable livelihoods.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button asChild size="lg" className="rounded-none px-8 text-base group">
              <Link to="/partner-with-us">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none px-8 text-base border-foreground/20 hover:bg-foreground hover:text-background"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-3 divide-x divide-secondary-foreground/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 py-6 px-4 sm:px-8">
                <stat.icon className="h-8 w-8 text-primary hidden sm:block" />
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-secondary-foreground">
                    {stat.value}
                  </span>
                  <p className="text-xs sm:text-sm text-secondary-foreground/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
