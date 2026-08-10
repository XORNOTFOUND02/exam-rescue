"use client";

import { useEffect, useRef } from 'react';

interface ScrambleInProps {
  text: string;
  delay: number;
  triggered: boolean;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

function ScrambleIn({ text, delay, triggered }: ScrambleInProps) {
  const displayRef = useRef<string>('');
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!triggered) {
      displayRef.current = '';
      if (spanRef.current) spanRef.current.textContent = '\u00A0';
      return;
    }
    const timer = setTimeout(() => {
      let revealPos = 0;
      const interval = setInterval(() => {
        revealPos += 0.5;
        const result = text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < revealPos) return char;
          if (i < revealPos + 3) return CHARS[Math.floor(Math.random() * CHARS.length)];
          return '';
        }).join('');
        if (spanRef.current) spanRef.current.textContent = result;
        if (revealPos >= text.length) {
          clearInterval(interval);
          if (spanRef.current) spanRef.current.textContent = text;
        }
      }, 25);
    }, delay);

    return () => clearTimeout(timer);
  }, [triggered, delay, text]);

  if (!triggered) return <span>&nbsp;</span>;
  return <span ref={spanRef}></span>;
}

export default ScrambleIn;
