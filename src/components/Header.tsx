import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ritLogo from "@/assets/rit-logo.png";

const navItems = [
  { label: "Home", link: "/" },
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container flex h-10 items-center justify-between">
          <div className="hidden sm:flex items-center gap-4 text-xs">
            <span>Empowering Girls & Youth in Ghana</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
            <Link
              to="/contact"
              className="text-xs font-medium uppercase tracking-wider hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "bg-background transition-all duration-300",
          isScrolled ? "shadow-warm border-b border-border" : ""
        )}
      >
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="RIT Foundation Ghana - Home"
          >
            <img
              src={ritLogo}
              alt="RIT Foundation Ghana"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.slice(1, -1).map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative group",
                  location.pathname === item.link
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-transform origin-left",
                    location.pathname === item.link ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button asChild className="rounded-none px-6">
              <Link to="/partner-with-us">Partner With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-full overflow-hidden bg-background border-b border-border shadow-elevated lg:hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-none"
        )}
      >
        <nav className="container py-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.link}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-colors border-l-2",
                    location.pathname === item.link
                      ? "text-primary border-primary bg-primary/5"
                      : "text-foreground border-transparent hover:text-primary hover:border-primary/50"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 px-4">
            <Button asChild className="w-full rounded-none">
              <Link to="/partner-with-us">Partner With Us</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
