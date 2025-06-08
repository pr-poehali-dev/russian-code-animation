import React, { useState, useEffect } from "react";

interface CodeLine {
  text: string;
  delay: number;
  color?: string;
}

const CodeBlock: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const codeLines: CodeLine[] = [
    {
      text: "$ create-game Make a space shooter with neon graphics ✨",
      delay: 80,
      color: "text-command",
    },
    {
      text: "🚀 Generating game assets... Creating game logic... Optimizing for web... 🌟",
      delay: 60,
      color: "text-highlight",
    },
    {
      text: "🎮 Game ready! Play now or customize further. |",
      delay: 100,
      color: "text-accent",
    },
  ];

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];

      if (currentCharIndex < currentLine.text.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            if (!newLines[currentLineIndex]) {
              newLines[currentLineIndex] = "";
            }
            newLines[currentLineIndex] += currentLine.text[currentCharIndex];
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, currentLine.delay);

        return () => clearTimeout(timeout);
      } else {
        // Move to next line after a pause
        const timeout = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 800);

        return () => clearTimeout(timeout);
      }
    } else {
      // Restart animation after 5 seconds when all lines are complete
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="bg-terminal border border-muted rounded-lg overflow-hidden shadow-2xl hover:border-accent/20 transition-colors duration-300">
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted border-b border-muted">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-muted-foreground text-sm font-ibm-mono">
            engine-arcade-terminal
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-ibm-mono text-sm leading-relaxed min-h-[180px]">
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className={`${codeLines[index]?.color || "text-system"} mb-2`}
            >
              {line}
              {index === currentLineIndex &&
                currentCharIndex < codeLines[index].text.length && (
                  <span className="animate-pulse text-accent">|</span>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
