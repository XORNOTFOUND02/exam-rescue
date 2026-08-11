"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrambleIn from './ScrambleIn';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4';

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [entranceComplete, setEntranceComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEntranceComplete(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden bg-black">
      {/* Video background - pushed to far right */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef} 
          src={VIDEO_URL} 
          className="absolute inset-0 h-full" 
          style={{ objectFit: 'cover', objectPosition: '75% center', width: '65%', left: '35%' }}
          muted 
          playsInline 
        />
      </div>
      
      {/* Strong left gradient for text readability */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, #000 0%, #000 30%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 70%, transparent 100%)' }} />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/40" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-10" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.03 }} 
      />
      
      {/* Content */}
      <motion.div 
        className="relative z-20 flex flex-col h-full px-6 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-8 sm:pb-12" 
        initial={{ opacity: 0 }} 
        animate={entranceComplete ? { opacity: 1 } : { opacity: 0 }} 
        transition={{ duration: 1 }}
      >
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto">
            {/* Main content - stacked vertically for cleaner look */}
            <div className="flex flex-col gap-6 max-w-3xl">
              {/* Primary headline */}
              <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(56px,12vw,140px)]">
                <ScrambleIn text="Study Smart" delay={200} triggered={entranceComplete} /><br />
                <ScrambleIn text="Not Hard" delay={500} triggered={entranceComplete} />
              </h1>
              
              {/* Secondary headline */}
              <h2 className="text-white/80 font-light leading-[0.95] tracking-[-0.03em] text-[clamp(36px,8vw,100px)]">
                <ScrambleIn text="One Strategy" delay={700} triggered={entranceComplete} />
              </h2>
              
              {/* Description */}
              <motion.p 
                className="max-w-lg text-[14px] sm:text-[16px] text-white/50 leading-relaxed mt-4" 
                initial={{ y: 25, opacity: 0 }} 
                animate={entranceComplete ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }} 
                transition={{ duration: 0.9, ease: [0.215, 0.610, 0.355, 1.000], delay: 0.3 }}
              >
                AI-powered exam strategy engine that analyzes your preparation level, available time, and syllabus weightage to build a day-by-day plan that maximizes marks.
              </motion.p>
              
              {/* CTA Button */}
              <motion.div 
                initial={{ y: 25, opacity: 0 }} 
                animate={entranceComplete ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }} 
                transition={{ duration: 0.9, ease: [0.215, 0.610, 0.355, 1.000], delay: 0.5 }}
                className="mt-2"
              >
                <Link href="/onboarding">
                  <motion.div
                    className="inline-flex items-center gap-2 h-14 px-10 bg-white rounded-full text-black text-[16px] font-semibold cursor-pointer"
                    whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get Started Free
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
