"use client";

import { useEffect, useState } from "react";

interface WritingTextProps {
  text: string;
  fontSize?: string;
  delay?: number;
}

export default function WritingText({ text, fontSize, delay = 0 }: WritingTextProps) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleChars < text.length) {
        const interval = setInterval(() => {
          setVisibleChars((prev) => {
            if (prev >= text.length) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
        }, 30); // 30ms마다 한 글자씩 (더 빠르게)

        return () => clearInterval(interval);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text.length, delay, visibleChars]);

  return (
    <span style={{ fontSize, fontFamily: "inherit" }}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            opacity: index < visibleChars ? 1 : 0,
            transition: "opacity 0.08s ease-in",
            fontFamily: "inherit",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

