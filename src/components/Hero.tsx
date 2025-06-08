import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Добро пожаловать в будущее
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Создавайте удивительные веб-приложения с помощью современных
          технологий
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Rocket" size={20} className="mr-2" />
            Начать сейчас
          </Button>
          <Button variant="outline" size="lg">
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть демо
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
