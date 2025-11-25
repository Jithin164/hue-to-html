import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Snowflake, Clock, Shield, Thermometer, Building2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import freezerRoomImg from "@/assets/freezer-room.jpg";
import chillerRoomImg from "@/assets/chiller-room.jpg";
import petShelterImg from "@/assets/pet-shelter.jpg";
import portableColdRoomImg from "@/assets/portable-cold-room.jpg";
import budgetColdRoomImg from "@/assets/budget-cold-room.jpg";

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Freezer Room Manufacturing",
      description: "Industrial-grade freezer rooms built to your exact specifications with advanced insulation and energy-efficient cooling systems.",
      image: freezerRoomImg,
      link: "/services/freezer-room"
    },
    {
      icon: Thermometer,
      title: "Chiller Room",
      description: "Professional chiller rooms with precise temperature control for optimal food storage and display in commercial settings.",
      image: chillerRoomImg,
      link: "/services/chiller-room"
    },
    {
      icon: Building2,
      title: "Pet Shelter Container Cold Room",
      description: "Specialized climate-controlled containers for veterinary clinics and animal care facilities with humidity control.",
      image: petShelterImg,
      link: "/services/pet-shelter"
    },
    {
      icon: Shield,
      title: "Portable Cold Room",
      description: "Mobile refrigeration solutions that can be relocated as needed. Perfect for events, construction sites, and temporary storage.",
      image: portableColdRoomImg,
      link: "/services/portable-cold-room"
    },
    {
      icon: Clock,
      title: "Budget Cold Room",
      description: "Cost-effective cold storage solutions for small businesses and startups without compromising on quality or reliability.",
      image: budgetColdRoomImg,
      link: "/services/budget-cold-room"
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
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group block animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <span>Learn More</span>
                        <ArrowLeft className="h-5 w-5 rotate-180 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
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
