import { AlertCircle, Lightbulb } from "lucide-react";

const problems = [
  "High youth unemployment in rural communities",
  "Limited access to practical and vocational education",
  "Low participation of girls in technical and digital skills training",
  "Economic vulnerability among school dropouts and underserved youth",
];

export function ProblemStatement() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            The Challenge We Address
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Bridging the Gap for Rural Youth
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                The Challenges
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive text-xs font-semibold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl bg-secondary">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-secondary-foreground">
                Our Solution
              </h3>
            </div>
            <p className="text-secondary-foreground/90 leading-relaxed">
              Through hands-on vocational training, digital skills development, and entrepreneurship education, RIT Foundation Ghana prepares young people—especially girls—to become self-reliant, confident, and economically independent.
            </p>
            <div className="mt-6 pt-6 border-t border-secondary-foreground/10">
              <p className="text-sm text-secondary-foreground/70 italic">
                "We believe every young person deserves the skills and opportunity to build a sustainable livelihood."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
