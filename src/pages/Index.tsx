import React from "react";
import AnimatedTitle from "@/components/AnimatedTitle";
import FeatureCard from "@/components/FeatureCard";
import ActionSection from "@/components/ActionSection";
import CodeBlock from "@/components/CodeBlock";
import EarlyAccessForm from "@/components/EarlyAccessForm";

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-highlight/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <AnimatedTitle text="Prompt>Run" className="mb-8" />
          <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto leading-relaxed">
            Создавайте игры, сайты и приложения одной командой — как в терминале
          </p>
        </div>

        <CodeBlock />

        <EarlyAccessForm />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 mt-12">
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

        {/* Footer */}
      </div>

      <footer className="mt-24 pt-8 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Prompt&gt;Run. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
