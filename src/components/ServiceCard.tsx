import { Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <Card 
      className="group hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="mb-4">
          <Snowflake className="h-12 w-12 text-primary group-hover:animate-float" />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
