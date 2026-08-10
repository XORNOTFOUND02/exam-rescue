"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SynapseXLogo from './SynapseXLogo';
import SquashHamburger from './SquashHamburger';
import ScrambleText from './ScrambleText';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const scrollTo = (y: number) => {
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      style={{ height: 80 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-8">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          <motion.div
            className="h-12 px-5 bg-white/15 backdrop-blur-md rounded-[14px] flex items-center gap-2.5 cursor-pointer"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.22)' }}
            whileTap={{ scale: 0.98 }}
          >
            <SynapseXLogo size={18} className="text-white" />
            <span className="text-white text-[16px] font-medium tracking-tight">Exam Rescue</span>
          </motion.div>

          <motion.div
            className="h-12 bg-white/15 backdrop-blur-md rounded-[14px] flex items-center overflow-hidden"
            animate={{ width: menuOpen ? 290 : 48 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            <motion.div
              className="flex items-center justify-center"
              style={{ width: 48, height: 48, borderRadius: 14 }}
              animate={{
                width: menuOpen ? 36 : 48,
                height: menuOpen ? 36 : 48,
                borderRadius: menuOpen ? 11 : 14,
                marginLeft: menuOpen ? 6 : 0,
              }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              <SquashHamburger isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
            </motion.div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="flex items-center gap-6 ml-4"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    className="text-white/85 hover:text-white text-[16px] font-normal transition-colors"
                    onMouseEnter={() => setHoveredLink('about')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => scrollTo(window.innerHeight)}
                  >
                    <ScrambleText text="How It Works" isHovered={hoveredLink === 'about'} />
                  </button>
                  <button
                    className="text-white/85 hover:text-white text-[16px] font-normal transition-colors"
                    onMouseEnter={() => setHoveredLink('metrics')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => scrollTo(window.innerHeight * 2)}
                  >
                    <ScrambleText text="Stats" isHovered={hoveredLink === 'metrics'} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center gap-2">
          <AnimatePresence>
            {!menuOpen && (
              <motion.div
                className="h-9 px-4 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center gap-2 cursor-pointer"
                initial={{ width: 'auto' }}
                exit={{ width: 0, padding: 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              >
                <SynapseXLogo size={14} className="text-white" />
                <span className="text-white text-[13px] font-medium tracking-tight">Exam Rescue</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="h-9 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center overflow-hidden"
            animate={{ width: menuOpen ? '100%' : 36 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            <div className="flex items-center justify-center" style={{ width: 36, height: 36 }}>
              <SquashHamburger isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} isMobile />
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="flex items-center gap-5 ml-3 pr-4"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                >
                  <button className="text-white/85 hover:text-white text-[13px] font-normal" onClick={() => scrollTo(window.innerHeight)}>
                    How It Works
                  </button>
                  <button className="text-white/85 hover:text-white text-[13px] font-normal" onClick={() => scrollTo(window.innerHeight * 2)}>
                    Stats
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* CTA button — links to /onboarding */}
        <Link href="/onboarding">
          <motion.div
            className="h-12 px-6 bg-white rounded-full flex items-center gap-2 text-black text-[15px] font-normal no-underline md:flex hidden cursor-pointer"
            whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
            whileTap={{ scale: 0.97 }}
          >
            <ScrambleText text="Get Started" isHovered={false} />
          </motion.div>
        </Link>

        {/* Mobile CTA */}
        <Link href="/onboarding">
          <motion.div
            className="h-9 px-3.5 bg-white rounded-full flex items-center gap-1.5 text-black text-[13px] font-normal no-underline md:hidden cursor-pointer"
            whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.div>
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;
