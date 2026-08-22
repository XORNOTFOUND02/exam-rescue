"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        className="relative z-20 flex flex-col h-full px-6 sm:px-8 md:px-12 lg:px-16 pt-20 sm:pt-24 pb-8 sm:pb-12"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col max-w-3xl">

              {/* Main headline — big, bold, uppercase, impactful */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h1 className="text-white font-black uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(48px,11vw,130px)]">
                  Study Smart
                </h1>
              </motion.div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                <h1 className="text-white/90 font-black uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(48px,11vw,130px)]">
                  Not Hard
                </h1>
              </motion.div>

              {/* Subtitle — clean, smaller, like "PUBLISHER SALE" */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="mt-6 sm:mt-8"
              >
                <h2 className="text-white/60 font-bold uppercase tracking-[0.2em] text-[clamp(14px,2.5vw,22px)]">
                  One AI Strategy
                </h2>
              </motion.div>

              {/* Short punchy description — 1 line max */}
              <motion.p
                className="max-w-md text-[14px] sm:text-[15px] text-white/35 leading-relaxed mt-5 font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                AI builds your day-by-day exam plan. Maximize marks in minimum time.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
                className="mt-8"
              >
                <Link href="/onboarding">
                  <motion.div
                    className="inline-flex items-center gap-2 h-14 px-10 bg-white rounded-full text-black text-[16px] font-bold cursor-pointer"
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
