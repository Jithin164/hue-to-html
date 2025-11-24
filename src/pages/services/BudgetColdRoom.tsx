import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Thermometer, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import budgetColdRoomImage from "@/assets/budget-cold-room.jpg";

const BudgetColdRoom = () => {
  const features = [
    "Cost-effective solutions",
    "Quality components guaranteed",
    "Efficient space utilization",
    "Temperature range: -5°C to +5°C",
    "Standard sizes available",
    "Easy installation process",
    "Low operating costs",
    "2-year warranty included"
  ];

  const specifications = [
    { icon: Thermometer, title: "Temperature Range", value: "-5°C to +5°C" },
    { icon: Shield, title: "Warranty", value: "2 Years Standard" },
    { icon: Zap, title: "Operating Cost", value: "Economy Mode" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={budgetColdRoomImage} 
              alt="Budget Cold Room" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
            <div className="max-w-3xl">
              <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4">
                <ArrowLeft className="h-5 w-5" />
                Back to Services
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
                Budget Cold Room
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Affordable refrigeration solutions without compromising on quality
              </p>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all"
                >
                  <spec.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{spec.title}</h3>
                  <p className="text-2xl font-bold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Details */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Perfect For
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Small Businesses</h3>
                    <p className="text-muted-foreground">Cafes, small restaurants, and grocery stores with limited budgets.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Startups</h3>
                    <p className="text-muted-foreground">New food businesses looking to minimize initial investment costs.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Home Businesses</h3>
                    <p className="text-muted-foreground">Home-based food preparation and small-scale catering operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Get Started with an Affordable Solution
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Quality cold storage that fits your budget
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

export default BudgetColdRoom;
