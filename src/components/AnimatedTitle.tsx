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
      <h1 className="text-lg md:text-2xl bg-gradient-to-r from-system via-accent to-highlight bg-clip-text font-mono text-[#ffffff] font-normal">
        {displayText}
        <span className="animate-pulse text-accent">|</span>
      </h1>
      <div className="mt-[30px]">
        <p className="md:text-lg text-center text-[5rem] md:text-[5rem] text-[#7B68EE] font-bold mx-[22px] my-[5px] py-[26px]">
          Создавайте одной командой
        </p>
      </div>
    </div>
  );
};

export default AnimatedTitle;
