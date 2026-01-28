import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Users, Gift, Handshake } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const partnershipTypes = [
  {
    icon: Building2,
    title: "Corporate Partnership",
    description: "Align your brand with meaningful social impact through CSR initiatives and employee engagement programs.",
  },
  {
    icon: Users,
    title: "NGO Collaboration",
    description: "Join forces with us to amplify impact through shared resources, expertise, and networks.",
  },
  {
    icon: Gift,
    title: "Individual Giving",
    description: "Make a direct impact through one-time or recurring donations that fund our programs.",
  },
  {
    icon: Handshake,
    title: "In-Kind Support",
    description: "Contribute goods, services, or expertise that directly benefit our communities.",
  },
];

const PartnerWithUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch within 2 business days to discuss partnership opportunities.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Partner With Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Together, we can create transformative change across Ghana. Explore how your organization can make a lasting difference.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ways to Partner
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer flexible partnership models tailored to your goals and capacity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type) => (
              <div
                key={type.title}
                className="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-6">
                  <type.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Start the Conversation
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our partnerships team will reach out to discuss opportunities.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <Input id="organization" placeholder="Company Name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How would you like to partner with us?
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your interest in partnering..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerWithUs;
