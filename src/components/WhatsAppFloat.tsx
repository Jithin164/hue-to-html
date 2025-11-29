import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        asChild
      >
        <a
          href="https://wa.me/971524745126"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      </Button>
      
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        asChild
      >
        <a
          href="tel:+971524745126"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6 text-white" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
