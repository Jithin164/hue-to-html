import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Thermometer, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portableColdRoomImage from "@/assets/portable-cold-room.jpg";

const PortableColdRoom = () => {
  const features = [
    "Fully mobile and relocatable",
    "Quick installation (24-48 hours)",
    "Plug-and-play operation",
    "Temperature range: -25°C to +15°C",
    "Weather-resistant exterior",
    "Container-based design",
    "Minimal maintenance required",
    "Rental and purchase options"
  ];

  const specifications = [
    { icon: Thermometer, title: "Temperature Range", value: "-25°C to +15°C" },
    { icon: Shield, title: "Construction", value: "Container-Grade" },
    { icon: Zap, title: "Setup Time", value: "24-48 Hours" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={portableColdRoomImage} 
              alt="Portable Cold Room" 
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
                Portable Cold Room
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Mobile refrigeration solutions that go wherever you need them
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
                    <h3 className="font-semibold text-foreground mb-2">Events & Catering</h3>
                    <p className="text-muted-foreground">Temporary cold storage for outdoor events, festivals, and catering services.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Construction Sites</h3>
                    <p className="text-muted-foreground">On-site food storage for remote locations and long-term projects.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Emergency Backup</h3>
                    <p className="text-muted-foreground">Temporary storage during renovations or equipment failures.</p>
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
              Need a Portable Cold Room?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Flexible rental and purchase options available
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

export default PortableColdRoom;
