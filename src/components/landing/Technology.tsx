"use client";

import { motion } from 'framer-motion';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095750_32a52ce0-2005-45c9-9093-41f03fde9530.mp4';

const features = [
  { title: 'Priority Scoring', desc: 'Every topic scored by marks-per-hour, importance, and your preparation gap.' },
  { title: 'Adaptive Plans', desc: 'Quiz scores reshape your schedule in real time — weak areas get more time.' },
  { title: 'Emergency Mode', desc: '2 days left? Exam Rescue switches to crisis mode and targets only essentials.' },
  { title: 'Resource Links', desc: 'Curated videos and notes from top CBSE educators, matched to each topic.' },
];

function Technology() {
  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden">
      <video src={VIDEO_URL} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
      <div className="relative z-10 flex flex-col px-8 sm:px-12 md:px-16 py-12 sm:py-16 h-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <motion.h2 className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em]" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.0 }}>
            Smart<br />Strategy
          </motion.h2>
          <motion.p className="text-white/50 text-[13px] sm:text-[15px] leading-relaxed max-w-xs md:text-right md:pt-2" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.0, delay: 0.2 }}>
            Not another study app. Exam Rescue is a strategy engine that tells you exactly what to study, when to study it, and how much time each topic deserves.
          </motion.p>
        </div>
        <div className="flex-1" />
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.0, delay: 0.3 }}>
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}>
              <h3 className="text-white text-[14px] sm:text-[16px] font-normal mb-2">{f.title}</h3>
              <p className="text-white/40 text-[12px] sm:text-[14px] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Technology;
