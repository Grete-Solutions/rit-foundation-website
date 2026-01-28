import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Eye,
  Target,
  CheckCircle2,
  ArrowRight,
  Award,
  Heart,
  Lightbulb,
  Users,
  Clock,
  Star,
  Zap,
  Sparkles,
  Trophy,
  Compass,
  Flame,
} from "lucide-react";

const timeline = [
  {
    year: "2020",
    event: "RIT Foundation Ghana was established with a focus on vocational and skills training during the COVID-19 period.",
  },
  {
    year: "2021",
    event: "Official registration as a non-governmental organization under the Companies Act, 2019 (Act 992).",
  },
  {
    year: "2022",
    event: "Implementation of the Teens in Tech Phase I program in Kpotame, reaching girls from multiple surrounding communities.",
  },
  {
    year: "2024",
    event: "Graduation of Teens in Tech beneficiaries in Sogakope, with recognition from Ghana TVET Services.",
  },
];

const goals = [
  "Provide inclusive vocational, technical, and digital skills training for youth, with a strong focus on girls and young women.",
  "Promote entrepreneurship and business skill development to foster sustainable livelihoods.",
  "Build leadership, confidence, and essential soft skills among program participants.",
  "Integrate sustainability and real-world problem-solving into all training programs.",
];

const values = [
  { name: "Passion", icon: Flame },
  { name: "Discipline", icon: Target },
  { name: "Perseverance", icon: Compass },
  { name: "Creativity", icon: Sparkles },
  { name: "Time Consciousness", icon: Clock },
  { name: "Diligence", icon: Zap },
  { name: "Excellence", icon: Trophy },
  { name: "Leadership", icon: Users },
  { name: "Hard Work", icon: Star },
];

const beliefs = [
  "Education and skills acquisition are critical to breaking cycles of poverty.",
  "Girls and women must have equal access to technical and digital opportunities.",
  "Sustainable development is best achieved through practical, community-based solutions.",
  "Empowered youth are catalysts for long-term social and economic transformation.",
];

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
              About RIT Foundation Ghana
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              RIT Foundation Ghana is a registered non-governmental organization committed to empowering girls, young women, and youth in rural Ghana through vocational, technical, digital, and entrepreneurial skills development.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Who We Are</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020 and officially registered in 2021, RIT Foundation Ghana works to bridge the gap between education and employability for underserved youth.
              </p>
              <p>
                Our programs are designed with a strong gender-responsive approach, ensuring that girls and young women—particularly in rural communities—have access to practical skills that enable economic independence and self-reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl bg-card border border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be West Africa's premier platform advancing gender-responsive empowerment through innovative vocational, technical, and digital education, creating pathways for economic independence and leadership.
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-secondary">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="font-display text-2xl font-bold text-secondary-foreground mb-4">Our Mission</h2>
              <p className="text-secondary-foreground/90 leading-relaxed">
                To deliver gender-responsive, transformative education and skills development through technical training, entrepreneurship, and sustainable practices, enabling youth and women to become innovative leaders and agents of positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals and Objectives */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Goals and Objectives
              </h2>
              <p className="text-muted-foreground">What we are working to achieve</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-foreground">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-secondary-foreground/80">Growth, continuity, and experience</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-secondary-foreground/20 -translate-x-1/2" />

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Year badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold z-10">
                    <span className="sr-only">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 ${
                      index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-3">
                      {item.year}
                    </span>
                    <p className="text-secondary-foreground/90">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {values.map((value) => (
              <div
                key={value.name}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-warm transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <value.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-foreground">{value.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-6">
                <Lightbulb className="h-7 w-7" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                What We Believe
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {beliefs.map((belief, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground mt-0.5">
                    <Heart className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-muted-foreground">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Leadership
              </h2>
            </div>
            <div className="p-8 sm:p-10 rounded-2xl bg-card border border-border">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground mx-auto sm:mx-0">
                  <Users className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1 text-center sm:text-left">
                    Deborah Morkporkpor Zottor
                  </h3>
                  <p className="text-primary font-medium mb-2 text-center sm:text-left">
                    Founder & Director
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 text-center sm:text-left">
                    MPhil Curriculum and Pedagogic Studies, BSc ICT Education
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Deborah Zottor is an education and development professional with a strong background in ICT education and curriculum development. She leads RIT Foundation Ghana's mission to empower youth through skills-based and gender-responsive training.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic text-center">
                  Board members and governance details will be published as part of our commitment to transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground mx-auto mb-6">
              <Award className="h-7 w-7" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              Legal Status
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1">Organization Type</p>
                <p className="font-semibold text-foreground">Non-Governmental Organization (NGO)</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1">Registration Act</p>
                <p className="font-semibold text-foreground">Companies Act, 2019 (Act 992)</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1">Registration Number</p>
                <p className="font-semibold text-foreground">CG173310421</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1">Country</p>
                <p className="font-semibold text-foreground">Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 sm:p-16 text-center">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Partner With Us to Empower the Next Generation
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
                We welcome partnerships that support skills development, gender equality, and sustainable livelihoods.
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
    </Layout>
  );
};

export default About;
