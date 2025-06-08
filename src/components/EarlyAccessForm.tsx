import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Здесь будет интеграция с бэкендом
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="text-center py-[26px]">
      <h2 className="text-3xl font-bold font-mono mb-4 bg-gradient-to-r from-accent to-highlight bg-clip-text text-[#ffffff]">
        Попробуйте в раннем доступе
      </h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto"></p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
      >
        <Input
          type="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 border-[#24374E] focus:border-[#24374E] focus:ring-[#24374E]/20 font-[Arial,sans-serif]"
          disabled={isSubmitted}
        />
        <Button
          type="submit"
          className="px-6 font-[Arial,sans-serif] bg-button hover:bg-button/80 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-button/25"
          disabled={isSubmitted}
        >
          {isSubmitted ? (
            <>
              <Icon name="Check" className="w-4 h-4 mr-2" />
              Отправлено
            </>
          ) : (
            "Отправить"
          )}
        </Button>
      </form>

      {isSubmitted && (
        <p className="text-sm text-accent mt-4 animate-fade-in">
          Спасибо! Мы свяжемся с вами в ближайшее время 🚀
        </p>
      )}
    </div>
  );
};

export default EarlyAccessForm;
