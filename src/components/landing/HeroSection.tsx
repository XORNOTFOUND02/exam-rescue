"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block w-full h-[1.5px] bg-white rounded-full origin-center transition-all duration-300"
          style={{
            transform: isOpen
              ? i === 0
                ? 'rotate(45deg) translate(3.5px, 3.5px)'
                : i === 1
                ? 'scaleX(0)'
                : 'rotate(-45deg) translate(3.5px, -3.5px)'
              : 'rotate(0) translate(0, 0)',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      ))}
    </div>
  );
}

function SoundIndicator() {
  return (
    <div className="hidden md:flex items-center gap-3 absolute bottom-8 left-8 z-30">
      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
        <div className="w-3 h-[2px] bg-white/60 rounded-full" />
      </div>
      <div className="flex flex-col">
        <span className="text-white/60 text-xs leading-tight">Experience</span>
        <span className="text-white/60 text-xs leading-tight">with sound</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [entranceComplete, setEntranceComplete] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEntranceComplete(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
        {/* Left - Brand */}
        <Link href="/" className="font-dancing text-white text-2xl md:text-3xl no-underline">
          Exam Rescue
        </Link>

        {/* Center - Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-sm tracking-wide transition-colors duration-300 no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right - CTA (desktop) */}
        <Link href="/onboarding">
          <motion.div
            className="hidden md:flex items-center bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide cursor-pointer button-glow"
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.9)' }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.div>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon isOpen={menuOpen} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 h-full w-[85%] max-w-[340px] bg-[#0a0608]/95 backdrop-blur-xl border-l border-white/10 flex flex-col p-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-6 mt-16">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-white/80 hover:text-white text-lg tracking-wide no-underline"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.075 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <Link href="/onboarding">
                    <div className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide text-center button-glow mt-4">
                      Get Started
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full px-6 -mt-[120px]"
        initial={{ opacity: 0 }}
        animate={entranceComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="font-instrument italic text-white text-[36px] md:text-7xl lg:text-[110px] leading-[0.9] tracking-tight text-center text-glow">
          Study Smart.<br />Score Higher.
        </h1>
        <motion.p
          className="text-white/70 text-sm md:text-base text-center mt-5 md:mt-7 max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={entranceComplete ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          AI-powered exam strategy engine that analyzes your preparation, available time, and syllabus weightage to build a day-by-day plan that maximizes marks.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={entranceComplete ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href="/onboarding">
            <div className="mt-6 md:mt-9 bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide cursor-pointer button-glow inline-block">
              Begin Your Strategy
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Sound indicator */}
      <SoundIndicator />
    </section>
  );
}
