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
    <div className="text-center py-16">
      <h2 className="text-3xl font-bold font-mono mb-4 bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
        Попробуйте в раннем доступе
      </h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Получите приоритетный доступ к новым функциям и возможностям платформы
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
      >
        <Input
          type="email"
          placeholder="ваш@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 font-mono"
          disabled={isSubmitted}
        />
        <Button type="submit" className="px-6 font-mono" disabled={isSubmitted}>
          {isSubmitted ? (
            <>
              <Icon name="Check" size={16} />
              Отправлено
            </>
          ) : (
            <>
              <Icon name="Send" size={16} />
              Отправить
            </>
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
