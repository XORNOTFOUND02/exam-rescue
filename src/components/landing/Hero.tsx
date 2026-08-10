"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrambleIn from './ScrambleIn';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4';

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [entranceComplete, setEntranceComplete] = useState(false);
  const lastX = useRef<number | null>(null);
  const seeking = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setEntranceComplete(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (seeking.current) return;
      if (lastX.current === null) { lastX.current = e.clientX; return; }
      const delta = e.clientX - lastX.current;
      lastX.current = e.clientX;
      if (video.duration) {
        const seekTo = video.currentTime + delta * 0.8 * (1 / window.innerWidth) * video.duration;
        seeking.current = true;
        video.currentTime = Math.max(0, Math.min(video.duration, seekTo));
      }
    };
    const handleSeeked = () => { seeking.current = false; };
    const handleMouseLeave = () => { lastX.current = null; };

    window.addEventListener('mousemove', handleMouseMove);
    video.addEventListener('seeked', handleSeeked);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden">
      <video ref={videoRef} src={VIDEO_URL} className="absolute inset-0 w-full h-full object-cover" muted playsInline />
      <div className="absolute inset-0 pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.05 }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10" style={{ paddingTop: 50 }}>
        <span className="uppercase select-none" style={{ fontFamily: '"Anton SC", sans-serif', fontSize: 'clamp(120px, 30vw, 521px)', letterSpacing: '-4px', opacity: 0.10, background: 'radial-gradient(circle, rgba(142,127,148,0) 0%, #8E7F94 70%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          EXAM RESCUE
        </span>
      </div>
      <motion.div className="relative z-20 flex flex-col h-full px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12" initial={{ opacity: 0 }} animate={entranceComplete ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 1 }}>
        <div className="flex-1" />
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)]">
              <ScrambleIn text="Study Smart" delay={200} triggered={entranceComplete} /><br />
              <ScrambleIn text="Not Hard" delay={500} triggered={entranceComplete} />
            </h1>
            <motion.p className="max-w-sm text-[13px] sm:text-[15px] text-white/60 leading-relaxed" initial={{ y: 25, opacity: 0 }} animate={entranceComplete ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }} transition={{ duration: 0.9, ease: [0.215, 0.610, 0.355, 1.000], delay: 0.2 }}>
              AI-powered exam strategy engine that analyzes your preparation level, available time, and syllabus weightage to build a day-by-day plan that maximizes marks.
            </motion.p>
            <motion.div initial={{ y: 25, opacity: 0 }} animate={entranceComplete ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }} transition={{ duration: 0.9, ease: [0.215, 0.610, 0.355, 1.000], delay: 0.4 }}>
              <Link href="/onboarding">
                <motion.div
                  className="inline-flex items-center gap-2 h-12 px-8 bg-white rounded-full text-black text-[15px] font-medium cursor-pointer"
                  whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started Free
                </motion.div>
              </Link>
            </motion.div>
          </div>
          <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)] text-left md:text-right">
            <ScrambleIn text="One" delay={700} triggered={entranceComplete} /><br />
            <ScrambleIn text="Strategy" delay={1000} triggered={entranceComplete} />
          </h1>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
