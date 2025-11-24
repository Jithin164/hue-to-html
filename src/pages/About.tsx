import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Service",
      description: "We deliver exceptional refrigeration solutions with the highest standards of quality and professionalism."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled technicians bring years of experience in commercial and industrial refrigeration systems."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency service to ensure your refrigeration systems run smoothly at all times."
    },
    {
      icon: CheckCircle2,
      title: "Customer First",
      description: "We prioritize customer satisfaction and build long-term relationships through reliable service."
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
              About Asal Alwadi
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Your trusted partner in refrigeration services across the UAE
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Asal Alwadi has been serving the UAE with professional refrigeration services, 
                specializing in both commercial and industrial cooling solutions. Our commitment 
                to excellence has made us a trusted name in the industry.
              </p>
              <p className="text-muted-foreground mb-4">
                From small businesses to large industrial facilities, we provide comprehensive 
                refrigeration services including installation, maintenance, and emergency repairs. 
                Our team of certified technicians ensures that your cooling systems operate at 
                peak efficiency.
              </p>
              <p className="text-muted-foreground">
                We understand that refrigeration is critical to your business operations. That's 
                why we offer 24/7 support and rapid response times to minimize any downtime and 
                keep your business running smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free consultation and quote
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
