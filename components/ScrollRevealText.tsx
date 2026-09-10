import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

/**
 * Statement paragraph that fills in word by word as the section scrolls through
 * the viewport. Each word is a single node whose colour interpolates from
 * neutral-300 to neutral-900 based on scroll progress — single nodes keep
 * copy-paste and screen readers reading the sentence once.
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
      // Fill as the block's centre travels from the lower viewport up to just
      // above half screen height — complete once the centre passes ~45% vh.
      const center = rect.top + rect.height / 2;
      const start = vh * 0.9;
      const end = vh * 0.45;
      const next = (start - center) / Math.max(start - end, 1);

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

  const head = progress * words.length;

  // neutral-300 (#d4d4d4) -> neutral-900 (#171717)
  const BASE = [212, 212, 212];
  const DARK = [23, 23, 23];

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const t = Math.min(1, Math.max(0, head - i));
        const c = BASE.map((b, idx) => Math.round(b + (DARK[idx] - b) * t));
        return (
          <React.Fragment key={`${word}-${i}`}>
            <span style={{ color: `rgb(${c[0]}, ${c[1]}, ${c[2]})` }}>{word}</span>
            {i < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </p>
  );
};
