"use client";

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4';

function CinematicText() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const springProgress = useSpring(scrollYProgress, { stiffness: 15, damping: 32, mass: 1.8 });
  const yValue = useTransform(springProgress, [0, 1], [60, -120]);
  const rotateX = useTransform(springProgress, [0, 1], [24, 24]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const transform = useMotionTemplate`rotateX(${rotateX}deg) translateY(${yValue}px) translateZ(15px)`;

  return (
    <section ref={sectionRef} className="relative h-screen h-[100dvh] w-full overflow-hidden">
      <video src={VIDEO_URL} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none" style={{ height: 180, background: 'linear-gradient(#010103, transparent)' }} />
      <div className="relative z-20 flex items-center justify-center h-full px-6 sm:px-12" style={{ perspective: 400 }}>
        <motion.p className="font-sans font-normal text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-white leading-[1.35] tracking-[-0.02em] select-none text-center max-w-5xl" style={{ transform, opacity }}>
          Most students study harder when they should study smarter. Exam Rescue analyzes your entire CBSE syllabus, maps it against your preparation level, and builds a day-by-day strategy that targets the highest-yield topics first. Every minute is accounted for. Every session has a purpose. No more guessing what to study next.
        </motion.p>
      </div>
    </section>
  );
}

export default CinematicText;
