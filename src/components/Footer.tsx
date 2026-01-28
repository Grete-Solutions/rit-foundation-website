import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "About Us", link: "/about" },
  { label: "Programs", link: "/programs" },
  { label: "Impact", link: "/impact" },
  { label: "Partner With Us", link: "/partner-with-us" },
  { label: "Contact", link: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/ritfoundationgh", label: "Facebook", handle: "@ritfoundationgh" },
  { icon: Instagram, href: "https://instagram.com/ritskillsgh", label: "Instagram", handle: "@ritskillsgh" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">
                  RIT
                </span>
              </div>
              <div>
                <span className="font-display text-lg font-semibold">
                  RIT Foundation Ghana
                </span>
                <span className="block text-xs text-primary font-medium">LBG</span>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/80 mb-4 leading-relaxed">
              A registered non-governmental organization empowering girls and youth in rural Ghana through vocational, digital, and entrepreneurial skills training.
            </p>
            <div className="text-xs text-secondary-foreground/60 space-y-1 mb-6">
              <p>Registered NGO</p>
              <p>Companies Act, 2019 (Act 992)</p>
              <p>Reg. No: CG173310421</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.link}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p>P.O. Box SG 90</p>
                  <p>Sogasco Street</p>
                  <p>Sogakope, Volta Region</p>
                  <p>Ghana</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p>+233 55 494 2195</p>
                  <p>+233 24 251 5127</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Mail className="h-5 w-5 shrink-0" />
                <a 
                  href="mailto:ritfoundationofficial@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  ritfoundationofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & CTA */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <social.icon className="h-4 w-4" />
                  </div>
                  <span>{social.handle}</span>
                </a>
              ))}
            </div>
            
            <div className="space-y-3">
              <Button asChild size="sm" className="w-full">
                <Link to="/partner-with-us">Partner With Us</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-secondary-foreground/60 text-center">
            © {new Date().getFullYear()} RIT Foundation Ghana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
