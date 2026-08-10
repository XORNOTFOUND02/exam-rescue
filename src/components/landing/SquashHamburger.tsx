"use client";

import { motion } from 'framer-motion';

interface SquashHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

function SquashHamburger({ isOpen, onClick, isMobile = false }: SquashHamburgerProps) {
  const w = isMobile ? 15 : 18;
  const h = isMobile ? 10 : 12;
  const barH = isMobile ? 1.2 : 1.5;

  return (
    <button
      onClick={onClick}
      style={{ width: w, height: h, position: 'relative' }}
      aria-label="Toggle menu"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: barH,
            background: 'white',
            borderRadius: 2,
            top: i * (h / 3),
          }}
          animate={
            isOpen
              ? i === 0
                ? { rotate: 45, y: h / 3 }
                : i === 1
                ? { opacity: 0, scaleX: 0 }
                : { rotate: -45, y: -h / 3 }
              : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
          }
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      ))}
    </button>
  );
}

export default SquashHamburger;
