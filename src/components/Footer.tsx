import { Snowflake, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Snowflake className="h-8 w-8 text-primary" />
              <div>
                <div className="font-bold text-lg">Asal Alwadi</div>
                <div className="text-xs text-muted-foreground">اصل الوادي</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional refrigeration installation and maintenance services in Dubai, UAE. Available 24/7.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Clock className="h-4 w-4" />
              <span className="font-medium">24hr Everyday Service</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Blast Freezer</li>
              <li>Industrial Cold Rooms</li>
              <li>Walk-in Chiller & Freezer</li>
              <li>Super Market Display</li>
              <li>Chiller & Freezer</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+971524745126" className="text-muted-foreground hover:text-primary transition-colors block">
                    +971 52 474 5126
                  </a>
                  <a href="tel:+971504745193" className="text-muted-foreground hover:text-primary transition-colors block">
                    +971 50 474 5193
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:asalwadiuae@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  asalwadiuae@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Asal Alwadi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
