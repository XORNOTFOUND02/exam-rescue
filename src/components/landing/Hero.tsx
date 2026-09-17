"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4';

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden bg-black">
      {/* Video background - pushed to right */}
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

      {/* Left gradient for text readability */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, #000 0%, #000 30%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 70%, transparent 100%)' }} />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.03 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col h-full px-6 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-10 sm:pb-14"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col max-w-3xl">

              {/* Badge tag — like "NEXT-GENERATION TOOLS" from Proof */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                <span className="inline-block text-white/40 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] border border-white/10 rounded-full px-4 py-1.5 mb-5 sm:mb-6">
                  AI-Powered Exam Planner
                </span>
              </motion.div>

              {/* Main headline — big, bold, like references */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <h1 className="text-white font-black uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(48px,11vw,130px)]">
                  Study Smart
                </h1>
              </motion.div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-white/90 font-black uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(48px,11vw,130px)]">
                  Not Hard
                </h1>
              </motion.div>

              {/* Subtitle — clean, uppercase, tracked */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6 sm:mt-8"
              >
                <h2 className="text-white/50 font-bold uppercase tracking-[0.2em] text-[clamp(13px,2vw,20px)]">
                  One AI Strategy
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                className="max-w-md text-[14px] sm:text-[15px] text-white/30 leading-relaxed mt-4 font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
              >
                AI builds your day-by-day exam plan. Maximize marks in minimum time.
              </motion.p>

              {/* Dual CTA buttons — like Proof: primary filled + secondary outlined */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
              >
                {/* Primary CTA — filled pill with arrow */}
                <Link href="/onboarding">
                  <motion.div
                    className="inline-flex items-center gap-2.5 h-12 px-8 bg-white rounded-full text-black text-[14px] font-bold uppercase tracking-[0.04em] cursor-pointer"
                    whileHover={{ scale: 1.04, backgroundColor: '#e8e8e8' }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </motion.div>
                </Link>

                {/* Secondary CTA — ghost/outlined pill */}
                <Link href="#how-it-works">
                  <motion.div
                    className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-white/15 text-white/70 text-[14px] font-semibold uppercase tracking-[0.06em] cursor-pointer hover:bg-white/5 transition-colors"
                    whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.3)' }}
                    whileTap={{ scale: 0.96 }}
                  >
                    See How It Works
                  </motion.div>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Scroll indicator — bottom right, like Marble */}
        <motion.div
          className="hidden sm:flex absolute bottom-8 right-8 lg:right-14 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
