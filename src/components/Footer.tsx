import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", link: "/about" },
  { label: "Programs", link: "/programs" },
  { label: "Impact", link: "/impact" },
  { label: "Partner With Us", link: "/partner-with-us" },
  { label: "Contact", link: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/ritfoundationgh", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/ritskillsgh", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-[3px] border-primary flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <span className="font-display text-xl font-bold">RIT Foundation</span>
                  <span className="block text-[10px] text-secondary-foreground/60 tracking-[0.15em] uppercase">
                    Ghana LBG
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/70 mb-6 leading-relaxed">
              Empowering girls and youth in rural Ghana through vocational, digital, and entrepreneurial skills training.
            </p>
            <div className="text-xs text-secondary-foreground/50 space-y-1">
              <p>Registered NGO</p>
              <p>Companies Act, 2019 (Act 992)</p>
              <p>Reg. No: CG173310421</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="section-label mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.link}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="section-label mb-6 text-primary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0 mt-1 text-primary" />
                <div>
                  <p>P.O. Box SG 90, Sogasco Street</p>
                  <p>Sogakope, Volta Region, Ghana</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <Phone className="h-4 w-4 shrink-0 mt-1 text-primary" />
                <div>
                  <p>+233 55 494 2195</p>
                  <p>+233 24 251 5127</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:ritfoundationofficial@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  ritfoundationofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="section-label mb-6 text-primary">Connect With Us</h4>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-secondary-foreground/20 text-secondary-foreground/70 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-secondary-foreground/70">
              Follow us for updates on our programs and impact stories.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-secondary-foreground/50 text-center">
            © {new Date().getFullYear()} RIT Foundation Ghana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
