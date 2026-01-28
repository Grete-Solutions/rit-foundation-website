import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  { label: "Programs", link: "/programs" },
  { label: "Impact", link: "/impact" },
  { label: "Contact", link: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-warm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label="RIT Foundation Ghana - Home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
            <span className="font-display text-lg font-bold text-secondary-foreground">
              RIT
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-xl font-semibold text-foreground">
              RIT Foundation
            </span>
            <span className="ml-1 text-sm font-medium text-primary">Ghana</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                location.pathname === item.link
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="default" size="default">
            <Link to="/partner-with-us">Partner With Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-full overflow-hidden bg-background border-b border-border shadow-elevated lg:hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-none"
        )}
      >
        <nav className="container py-4" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.link}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-md transition-colors",
                    location.pathname === item.link
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 px-4">
            <Button asChild variant="default" size="lg" className="w-full">
              <Link to="/partner-with-us">Partner With Us</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
