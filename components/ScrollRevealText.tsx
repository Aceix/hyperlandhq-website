import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

/**
 * Statement paragraph that fills in word by word as the section scrolls through
 * the viewport. Each word is rendered twice: a muted base layer and a dark layer
 * on top whose opacity is driven by scroll progress.
 */
export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text, className = "" }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  const words = text.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Starts filling when the text enters the lower third, completes once it
      // has travelled past the middle of the screen.
      const start = vh * 0.95;
      const end = vh * 0.3;
      const distance = Math.max(start - end + rect.height, 1);
      const next = (start - rect.top) / distance;

      setProgress(Math.min(1, Math.max(0, next)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Slight overshoot so the last words still finish before the section leaves.
  const head = progress * (words.length + 2);

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => {
        const opacity = Math.min(1, Math.max(0, head - i));
        return (
          <React.Fragment key={`${word}-${i}`}>
            <span className="relative inline-block" aria-hidden="true">
              <span className="text-neutral-300">{word}</span>
              <span
                className="absolute inset-0 text-neutral-900 transition-opacity duration-200 ease-out"
                style={{ opacity }}
              >
                {word}
              </span>
            </span>
            {i < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </p>
  );
};
