import { Phone, Mail, Snowflake, Clock, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-refrigeration.jpg";

const Index = () => {
  const services = [
    {
      title: "Blast Freezer",
      description: "High-performance blast freezing solutions for rapid cooling and preservation of food products.",
    },
    {
      title: "Industrial Cold Rooms",
      description: "Custom-designed cold storage facilities for large-scale industrial refrigeration needs.",
    },
    {
      title: "Walk-in Chiller & Freezer",
      description: "Professional walk-in refrigeration units for commercial kitchens and storage facilities.",
    },
    {
      title: "Super Market Display",
      description: "Energy-efficient display refrigeration systems for retail and supermarket environments.",
    },
    {
      title: "Chiller & Freezer",
      description: "Comprehensive chiller and freezer installation, maintenance, and repair services.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center gap-3">
              <Snowflake className="h-16 w-16 text-primary animate-float" />
              <Snowflake className="h-16 w-16 text-primary/60 animate-float" style={{ animationDelay: "0.3s" }} />
              <Snowflake className="h-16 w-16 text-primary/30 animate-float" style={{ animationDelay: "0.6s" }} />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Asal Alwadi
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              اصل الوادي
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Refrigeration Installation & Maintenance
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">24hr Everyday Service</span>
              </div>
              <div className="flex items-center gap-2 bg-card border-2 border-primary px-6 py-3 rounded-full">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold">Professional Team</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <a href="tel:+971524745126">
                <Button size="lg" className="gap-2 text-lg px-8">
                  <Phone className="h-5 w-5" />
                  Call Us Now
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                  <Mail className="h-5 w-5" />
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative snowflakes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Snowflake className="absolute top-20 left-10 h-8 w-8 text-primary/20 animate-float" />
          <Snowflake className="absolute top-40 right-20 h-12 w-12 text-primary/10 animate-float" style={{ animationDelay: "1s" }} />
          <Snowflake className="absolute bottom-40 left-1/4 h-10 w-10 text-primary/15 animate-float" style={{ animationDelay: "2s" }} />
          <Snowflake className="absolute bottom-60 right-1/3 h-6 w-6 text-primary/20 animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive refrigeration solutions for all your commercial and industrial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for refrigeration solutions in Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-card border-2 border-border hover:border-primary transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Round-the-clock service to ensure your operations never stop
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card border-2 border-border hover:border-primary transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Certified professionals with years of industry experience
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card border-2 border-border hover:border-primary transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Premium service and genuine parts for lasting performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for professional refrigeration services in Dubai, UAE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971524745126">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
                <Phone className="h-5 w-5" />
                +971 52 474 5126
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
