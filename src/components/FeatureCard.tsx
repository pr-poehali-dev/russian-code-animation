import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradient = "from-purple-500/20 to-blue-500/20",
}) => {
  return (
    <Card className="group relative overflow-hidden bg-terminal border-muted hover:border-accent/20 transition-all duration-300">
      <CardContent className="relative p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-accent/20 transition-colors duration-300">
            <Icon name={icon} size={32} className="text-accent" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-system mb-4 font-mono">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed font-mono">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
