import { Link, useLocation } from "react-router-dom";
import { Snowflake, Phone, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-foreground"
              }`}
            >
              Services
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
            <Link to="/contact" className="hidden sm:block">
              <Button size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                <span>Get Quote</span>
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-3">
              <Snowflake className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="text-lg font-bold">Asal Alwadi</div>
                <div className="text-xs text-muted-foreground">Refrigeration Services</div>
              </div>
            </DrawerTitle>
          </DrawerHeader>
          
          <nav className="flex flex-col gap-2 p-4">
            <DrawerClose asChild>
              <Link
                to="/"
                className={`text-base font-medium py-3 px-4 rounded-md transition-colors ${
                  isActive("/") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
              >
                Home
              </Link>
            </DrawerClose>
            <DrawerClose asChild>
              <Link
                to="/about"
                className={`text-base font-medium py-3 px-4 rounded-md transition-colors ${
                  isActive("/about") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
              >
                About
              </Link>
            </DrawerClose>
            <DrawerClose asChild>
              <Link
                to="/services"
                className={`text-base font-medium py-3 px-4 rounded-md transition-colors ${
                  isActive("/services") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
              >
                Services
              </Link>
            </DrawerClose>
            <DrawerClose asChild>
              <Link
                to="/contact"
                className={`text-base font-medium py-3 px-4 rounded-md transition-colors ${
                  isActive("/contact") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
              >
                Contact
              </Link>
            </DrawerClose>
            
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:+971524745126">
                <Button variant="outline" size="lg" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+971 52 474 5126</span>
                </Button>
              </a>
              <DrawerClose asChild>
                <Link to="/contact">
                  <Button size="lg" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Get Quote</span>
                  </Button>
                </Link>
              </DrawerClose>
            </div>
          </nav>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Navbar;
