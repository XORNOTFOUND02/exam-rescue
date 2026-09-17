"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SynapseXLogo from './SynapseXLogo';
import SquashHamburger from './SquashHamburger';
import ScrambleText from './ScrambleText';
import { ArrowRight } from 'lucide-react';

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
      {/* Desktop nav */}
      <div className="hidden md:flex items-center justify-between h-full px-6 md:px-10 lg:px-14">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2.5 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SynapseXLogo size={20} className="text-white" />
          <span className="text-white text-[17px] font-semibold tracking-tight">Exam Rescue</span>
        </motion.div>

        {/* Nav links — visible like references */}
        <div className="flex items-center gap-8">
          <button
            className="text-white/50 hover:text-white text-[13px] font-medium uppercase tracking-[0.12em] transition-colors"
            onMouseEnter={() => setHoveredLink('about')}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => scrollTo(window.innerHeight)}
          >
            <ScrambleText text="How It Works" isHovered={hoveredLink === 'about'} />
          </button>
          <button
            className="text-white/50 hover:text-white text-[13px] font-medium uppercase tracking-[0.12em] transition-colors"
            onMouseEnter={() => setHoveredLink('stats')}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => scrollTo(window.innerHeight * 2)}
          >
            <ScrambleText text="Stats" isHovered={hoveredLink === 'stats'} />
          </button>
          <button
            className="text-white/50 hover:text-white text-[13px] font-medium uppercase tracking-[0.12em] transition-colors"
            onMouseEnter={() => setHoveredLink('tech')}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => scrollTo(window.innerHeight * 3)}
          >
            <ScrambleText text="Features" isHovered={hoveredLink === 'tech'} />
          </button>
        </div>

        {/* CTA pill button with arrow — like Marble "APPLY NOW →" */}
        <Link href="/onboarding">
          <motion.div
            className="h-11 px-6 bg-white rounded-full flex items-center gap-2.5 text-black text-[13px] font-bold uppercase tracking-[0.06em] no-underline cursor-pointer"
            whileHover={{ scale: 1.04, backgroundColor: '#e8e8e8' }}
            whileTap={{ scale: 0.96 }}
          >
            Get Started
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </motion.div>
        </Link>
      </div>

      {/* Mobile nav */}
      <div className="flex md:hidden items-center justify-between h-full px-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <SynapseXLogo size={16} className="text-white" />
          <span className="text-white text-[14px] font-semibold tracking-tight">Exam Rescue</span>
        </div>

        {/* Hamburger */}
        <div className="flex items-center gap-3">
          <motion.div
            className="h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center overflow-hidden"
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
                  transition={{ duration: 0.2 }}
                >
                  <button className="text-white/85 hover:text-white text-[13px] font-medium" onClick={() => scrollTo(window.innerHeight)}>
                    How It Works
                  </button>
                  <button className="text-white/85 hover:text-white text-[13px] font-medium" onClick={() => scrollTo(window.innerHeight * 2)}>
                    Stats
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
