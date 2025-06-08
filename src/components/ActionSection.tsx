import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ActionSection: React.FC = () => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto">
          Создавайте потрясающие проекты без единой строчки кода. Просто опишите
          свою идею, и мы воплотим её в жизнь.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-button hover:bg-button/80 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-button/25 font-mono"
          >
            <Icon name="Sparkles" size={20} className="mr-2" />
            Начать создавать
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-muted text-muted-foreground hover:bg-muted hover:text-system px-8 py-4 text-lg transition-all duration-300 hover:scale-105 font-mono"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Посмотреть демо
          </Button>
        </div>
      </div>

      <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Icon name="Zap" size={16} className="text-highlight" />
          <span>Мгновенный результат</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Shield" size={16} className="text-command" />
          <span>Безопасно</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Heart" size={16} className="text-red-400" />
          <span>Просто использовать</span>
        </div>
      </div>
    </div>
  );
};

export default ActionSection;
