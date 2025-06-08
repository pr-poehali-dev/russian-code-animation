import React from "react";
import AnimatedTitle from "@/components/AnimatedTitle";
import FeatureCard from "@/components/FeatureCard";
import ActionSection from "@/components/ActionSection";

const Index = () => {
  const features = [
    {
      icon: "MessageSquare",
      title: "Говори и Создавай",
      description:
        "Просто опишите свою идею на естественном языке и наблюдайте, как она оживает",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: "Code2",
      title: "Никакого Кодинга",
      description:
        "Создавайте сложные приложения не написав ни единой строчки кода",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: "Rocket",
      title: "Мгновенный Запуск",
      description:
        "Получите рабочее приложение за секунды, которым можно сразу поделиться",
      gradient: "from-pink-500/20 to-orange-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <AnimatedTitle text="Поехали!" className="mb-8" />
          <p className="text-xl text-slate-300 font-open-sans max-w-3xl mx-auto leading-relaxed">
            Революционная платформа для создания приложений через искусственный
            интеллект
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        <ActionSection />
      </div>
    </div>
  );
};

export default Index;
