import { Layout } from "@/components/Layout";
import { Users, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
              Our Story & Mission
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Since 2010, RIT Foundation Ghana has been at the forefront of sustainable community development across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl bg-card border border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Ghana where every community thrives with access to quality education, healthcare, and economic opportunities, preserving our rich cultural heritage while embracing sustainable progress.
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-card border border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower Ghanaian communities through sustainable development initiatives that foster education, improve health outcomes, and create pathways to economic self-sufficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our dedicated team of professionals and volunteers work tirelessly to bring our vision to life.
            </p>
          </div>
          <div className="flex items-center justify-center p-12 rounded-2xl border-2 border-dashed border-border">
            <div className="text-center">
              <Users className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Team profiles coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
