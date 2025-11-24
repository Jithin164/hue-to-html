import { Link, useLocation } from "react-router-dom";
import { Snowflake, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Snowflake className="h-10 w-10 text-primary animate-float" />
              <Snowflake className="h-10 w-10 text-primary/30 absolute inset-0 animate-float" style={{ animationDelay: "0.5s" }} />
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">Asal Alwadi</div>
              <div className="text-xs text-muted-foreground">Refrigeration Services</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="tel:+971524745126" className="hidden lg:block">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                <span>+971 52 474 5126</span>
              </Button>
            </a>
            <Link to="/contact">
              <Button size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Get Quote</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
