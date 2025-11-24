import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Snowflake, Wrench, Clock, Shield, Thermometer, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Commercial Refrigeration",
      description: "Complete refrigeration solutions for restaurants, supermarkets, and retail businesses. We install and maintain walk-in coolers, display cases, and commercial freezers.",
      features: [
        "Walk-in coolers & freezers",
        "Display case installation",
        "Ice machine services",
        "Refrigerated storage solutions"
      ]
    },
    {
      icon: Building2,
      title: "Industrial Cooling Systems",
      description: "Heavy-duty refrigeration systems for factories, warehouses, and large-scale operations. Designed for maximum efficiency and reliability.",
      features: [
        "Cold storage facilities",
        "Process cooling systems",
        "Blast freezer installation",
        "Custom industrial solutions"
      ]
    },
    {
      icon: Wrench,
      title: "Installation & Setup",
      description: "Professional installation of all types of refrigeration equipment. We ensure proper setup for optimal performance and energy efficiency.",
      features: [
        "System design & planning",
        "Equipment installation",
        "Performance testing",
        "Staff training"
      ]
    },
    {
      icon: Shield,
      title: "Preventive Maintenance",
      description: "Regular maintenance programs to keep your systems running efficiently and prevent costly breakdowns.",
      features: [
        "Scheduled inspections",
        "Performance optimization",
        "Parts replacement",
        "System upgrades"
      ]
    },
    {
      icon: Clock,
      title: "24/7 Emergency Repairs",
      description: "Round-the-clock emergency service to minimize downtime. Our technicians are always ready to respond to your urgent needs.",
      features: [
        "Rapid response time",
        "Emergency diagnostics",
        "On-site repairs",
        "Temporary cooling solutions"
      ]
    },
    {
      icon: Thermometer,
      title: "System Diagnostics",
      description: "Advanced diagnostic services to identify and resolve issues before they become major problems.",
      features: [
        "Performance analysis",
        "Energy efficiency audits",
        "Leak detection",
        "Refrigerant level checks"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Comprehensive refrigeration solutions for businesses of all sizes
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Choose Asal Alwadi?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Need Refrigeration Services?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch for a free consultation and customized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Request a Quote
                </Button>
              </Link>
              <a href="tel:+971524745126">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
