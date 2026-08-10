"use client";

import { useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  isHovered: boolean;
  className?: string;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

function ScrambleText({ text, isHovered, className = '' }: ScrambleTextProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!isHovered) {
      if (spanRef.current) spanRef.current.textContent = text;
      frameRef.current = 0;
      return;
    }

    const interval = setInterval(() => {
      frameRef.current++;
      const result = text.split('').map((char, i) => {
        if (char === ' ') return ' ';
        if (i < frameRef.current * 4) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      if (spanRef.current) spanRef.current.textContent = result;
      if (frameRef.current * 4 >= text.length) {
        clearInterval(interval);
        if (spanRef.current) spanRef.current.textContent = text;
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return <span ref={spanRef} className={className}>{text}</span>;
}

export default ScrambleText;
