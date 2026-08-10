"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const phases = [
  { phase: 'Phase 1', name: 'Assess' },
  { phase: 'Phase 2', name: 'Plan' },
  { phase: 'Phase 3', name: 'Execute' },
];

function Architecture() {
  return (
    <section className="relative w-full bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <motion.div className="flex flex-col items-center text-center" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.0 }}>
          <p className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-8">How It Works</p>
          <h2 className="text-white font-light text-[clamp(28px,6vw,56px)] leading-[1.15] tracking-[-0.02em] mb-10">Three phases. Maximum marks.</h2>
          <p className="text-white/45 text-[15px] sm:text-[17px] leading-relaxed max-w-xl">Tell us your syllabus, your preparation level, and your exam date. We handle the rest — from priority scoring to daily schedules to adaptive quiz feedback.</p>
        </motion.div>

        <motion.div className="mt-20 flex flex-col items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.2, delay: 0.4 }}>
          {phases.map((p) => (
            <div key={p.phase} className="max-w-md h-[72px] border border-white/10 rounded-lg flex items-center justify-between px-6 w-full">
              <span className="text-white/30 text-[12px] tracking-[0.15em] uppercase">{p.phase}</span>
              <span className="text-white text-[16px] sm:text-[18px] font-light">{p.name}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="mt-16 flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.0, delay: 0.6 }}>
          <Link href="/onboarding">
            <motion.button className="px-8 py-4 bg-white text-black rounded-full text-[16px] font-medium cursor-pointer" whileHover={{ scale: 1.05, backgroundColor: '#e2e2e6' }} whileTap={{ scale: 0.97 }}>
              Start My Strategy
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Architecture;
