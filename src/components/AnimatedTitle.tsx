import React, { useState, useEffect } from "react";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className={`relative ${className}`}>
      <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-system via-accent to-highlight bg-clip-text text-transparent font-mono">
        {displayText}
        <span className="animate-pulse text-accent">|</span>
      </h1>
      <div className="mt-[30px]">
        <p className="md:text-lg font-medium text-center glow-text text-[12rem] md:text-[14rem] text-[#7B68EE]">
          Создавайте одной командой
        </p>
      </div>
    </div>
  );
};

export default AnimatedTitle;
