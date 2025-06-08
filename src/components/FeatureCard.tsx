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
    <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <CardContent className="relative p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
            <Icon
              name={icon}
              size={32}
              className="text-purple-400 group-hover:text-purple-300"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
          {title}
        </h3>
        <p className="text-slate-300 leading-relaxed font-open-sans">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
