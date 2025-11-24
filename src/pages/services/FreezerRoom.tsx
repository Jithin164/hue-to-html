import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Thermometer, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import freezerRoomImage from "@/assets/freezer-room.jpg";

const FreezerRoom = () => {
  const features = [
    "Industrial-grade insulation panels",
    "Energy-efficient cooling systems",
    "Custom sizing and configurations",
    "Temperature range: -18°C to -25°C",
    "Heavy-duty construction",
    "Digital temperature control",
    "Emergency backup systems",
    "Compliance with health standards"
  ];

  const specifications = [
    { icon: Thermometer, title: "Temperature Range", value: "-18°C to -25°C" },
    { icon: Shield, title: "Insulation", value: "120mm PU panels" },
    { icon: Zap, title: "Energy Rating", value: "A++ Efficiency" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={freezerRoomImage} 
              alt="Freezer Room Manufacturing" 
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
                Freezer Room Manufacturing
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Industrial-grade freezer rooms built to your exact specifications
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
                    <h3 className="font-semibold text-foreground mb-2">Food Industry</h3>
                    <p className="text-muted-foreground">Long-term storage of frozen foods, meat, seafood, and ice cream.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Pharmaceuticals</h3>
                    <p className="text-muted-foreground">Temperature-sensitive medications and biological samples.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Logistics</h3>
                    <p className="text-muted-foreground">Cold chain warehousing and distribution centers.</p>
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
              Ready to Build Your Freezer Room?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a custom quote based on your specific requirements
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

export default FreezerRoom;
