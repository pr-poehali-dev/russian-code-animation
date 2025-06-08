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
      color: "text-green-400",
    },
    {
      text: "🚀 Generating game assets... Creating game logic... Optimizing for web... 🌟",
      delay: 60,
      color: "text-purple-400",
    },
    {
      text: "🎮 Game ready! Play now or customize further. |",
      delay: 100,
      color: "text-blue-400",
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
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="bg-slate-900/80 border border-slate-700 rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800/60 border-b border-slate-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-slate-400 text-sm font-mono">
            engine-arcade-terminal
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm leading-relaxed min-h-[120px]">
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className={`${codeLines[index]?.color || "text-white"} mb-2`}
            >
              {line}
              {index === currentLineIndex &&
                currentCharIndex < codeLines[index].text.length && (
                  <span className="animate-pulse text-white">|</span>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
