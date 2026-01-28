import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Eye,
  Target,
  CheckCircle2,
  ArrowRight,
  Award,
  Flame,
  Compass,
  Sparkles,
  Clock,
  Zap,
  Trophy,
  Users,
  Star,
} from "lucide-react";
import techSkillsParticipant from "@/assets/tech-skills-participant.jpg";
import presenterSpeaking from "@/assets/presenter-speaking.jpg";

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
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block text-primary">About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              About RIT Foundation Ghana
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              A registered non-governmental organization committed to empowering girls, young women, and youth in rural Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Our Identity</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 and officially registered in 2021, RIT Foundation Ghana works to bridge the gap between education and employability for underserved youth.
                </p>
                <p>
                  Our programs are designed with a strong gender-responsive approach, ensuring that girls and young women—particularly in rural communities—have access to practical skills that enable economic independence and self-reliance.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={techSkillsParticipant}
                  alt="RIT Foundation Tech Skills Challenge participant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-10 border-l-4 border-primary">
              <Eye className="h-10 w-10 text-primary mb-6" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be West Africa's premier platform advancing gender-responsive empowerment through innovative vocational, technical, and digital education, creating pathways for economic independence and leadership.
              </p>
            </div>
            <div className="bg-secondary text-secondary-foreground p-10 border-l-4 border-primary">
              <Target className="h-10 w-10 text-primary mb-6" />
              <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-secondary-foreground/80 leading-relaxed">
                To deliver gender-responsive, transformative education and skills development through technical training, entrepreneurship, and sustainable practices, enabling youth and women to become innovative leaders and agents of positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label mb-4 block">Our Objectives</span>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Goals and Objectives
              </h2>
            </div>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-muted border-l-4 border-primary">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </span>
                  <p className="text-foreground">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block text-primary">Our History</span>
            <h2 className="font-display text-3xl font-bold">Our Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-secondary-foreground/20 mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-secondary-foreground/80 leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Guiding Principles</span>
            <h2 className="font-display text-3xl font-bold text-foreground">Our Values</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {values.map((value) => (
              <div key={value.name} className="text-center p-4 border border-border hover:border-primary transition-colors group">
                <value.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <span className="text-xs font-medium text-foreground">{value.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label mb-4 block">Our Convictions</span>
              <h2 className="font-display text-3xl font-bold text-foreground">What We Believe</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {beliefs.map((belief, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-background border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
              <span className="section-label mb-4 block">Our Team</span>
              <h2 className="font-display text-3xl font-bold text-foreground">Our Leadership</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img
                  src={presenterSpeaking}
                  alt="RIT Foundation event presenter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Deborah Morkporkpor Zottor
                </h3>
                <p className="text-primary font-medium mb-2">Founder & Director</p>
                <p className="text-sm text-muted-foreground mb-4">
                  MPhil Curriculum and Pedagogic Studies, BSc ICT Education
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Deborah Zottor is an education and development professional with a strong background in ICT education and curriculum development. She leads RIT Foundation Ghana's mission to empower youth through skills-based and gender-responsive training.
                </p>
                <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
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
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-6" />
            <span className="section-label mb-4 block">Verification</span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Legal Status</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-background border border-border">
                <p className="text-sm text-muted-foreground mb-1">Organization Type</p>
                <p className="font-semibold text-foreground">Non-Governmental Organization</p>
              </div>
              <div className="p-6 bg-background border border-border">
                <p className="text-sm text-muted-foreground mb-1">Registration Act</p>
                <p className="font-semibold text-foreground">Companies Act, 2019 (Act 992)</p>
              </div>
              <div className="p-6 bg-background border border-border">
                <p className="text-sm text-muted-foreground mb-1">Registration Number</p>
                <p className="font-semibold text-foreground">CG173310421</p>
              </div>
              <div className="p-6 bg-background border border-border">
                <p className="text-sm text-muted-foreground mb-1">Country</p>
                <p className="font-semibold text-foreground">Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Partner With Us to Empower the Next Generation
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We welcome partnerships that support skills development, gender equality, and sustainable livelihoods.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-none px-8 group">
                <Link to="/partner-with-us">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
