import { Phone, Mail, Snowflake, Clock, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ReviewSection from "@/components/ReviewSection";
import heroImage from "@/assets/hero-refrigeration.jpg";
import freezerRoomImg from "@/assets/freezer-room.jpg";
import chillerRoomImg from "@/assets/chiller-room.jpg";
import petShelterImg from "@/assets/pet-shelter.jpg";
import portableColdRoomImg from "@/assets/portable-cold-room.jpg";
import budgetColdRoomImg from "@/assets/budget-cold-room.jpg";
import { Card } from "@/components/ui/card";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <Snowflake className="absolute top-20 left-10 text-white animate-float" size={60} />
          <Snowflake className="absolute top-40 right-20 text-white animate-float" size={40} style={{ animationDelay: '1s' }} />
          <Snowflake className="absolute bottom-40 left-1/4 text-white animate-float" size={50} style={{ animationDelay: '2s' }} />
          <Snowflake className="absolute bottom-20 right-1/3 text-white animate-float" size={35} style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in text-white">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Best Cold Room
                <span className="block mt-2">Manufacturer</span>
                <span className="block mt-2">in UAE</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-medium">
                We Make Cold Room Easy &
                <span className="block">Affordable</span>
              </p>
              
              <Button size="lg" className="gap-2 text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                <Link to="/contact" className="flex items-center gap-2">
                  GET STARTED
                </Link>
              </Button>
            </div>

            {/* Right: Product Images Collage */}
            <div className="relative h-[500px] md:h-[600px] animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <img 
                    src={freezerRoomImg} 
                    alt="Freezer Room" 
                    className="w-full h-48 object-cover rounded-lg shadow-2xl"
                  />
                  <img 
                    src={chillerRoomImg} 
                    alt="Chiller Room" 
                    className="w-full h-64 object-cover rounded-lg shadow-2xl"
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <img 
                    src={portableColdRoomImg} 
                    alt="Portable Cold Room" 
                    className="w-full h-64 object-cover rounded-lg shadow-2xl"
                  />
                  <img 
                    src={budgetColdRoomImg} 
                    alt="Budget Cold Room" 
                    className="w-full h-48 object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="relative -mt-20 z-20 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center bg-card hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Snowflake className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Cold Room Service</h3>
              <p className="text-muted-foreground">
                The quality of work is always at the highest level. We are ready to perform a large amount of work in quality.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Price</h3>
              <p className="text-muted-foreground">
                We hope that our Cold rooms are a humble effort by us to serve all with the latest technology.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">
                We see opportunities coming again. We provide service within the agreed timelines of the agreement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              Your trusted partner for refrigeration solutions in Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-lg bg-card border-2 border-border hover:border-primary hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 mb-4 transition-all duration-300">
                <Clock className="h-8 w-8 text-primary group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Round-the-clock service to ensure your operations never stop
              </p>
            </div>

            <div className="group text-center p-8 rounded-lg bg-card border-2 border-border hover:border-primary hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer" style={{ animationDelay: "100ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 mb-4 transition-all duration-300">
                <Award className="h-8 w-8 text-primary group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Expert Team</h3>
              <p className="text-muted-foreground">
                Certified professionals with years of industry experience
              </p>
            </div>

            <div className="group text-center p-8 rounded-lg bg-card border-2 border-border hover:border-primary hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer" style={{ animationDelay: "200ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 mb-4 transition-all duration-300">
                <Shield className="h-8 w-8 text-primary group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Premium service and genuine parts for lasting performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewSection />

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
