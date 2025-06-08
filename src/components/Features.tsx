import React from "react";
import Icon from "@/components/ui/icon";

const Features: React.FC = () => {
  const features = [
    {
      icon: "Zap",
      title: "Быстрая разработка",
      description:
        "Создавайте приложения в разы быстрее благодаря современным инструментам",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Встроенные механизмы защиты обеспечивают безопасность ваших данных",
    },
    {
      icon: "Smartphone",
      title: "Адаптивность",
      description: "Ваши приложения отлично работают на всех устройствах",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Современные решения для современных задач
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
