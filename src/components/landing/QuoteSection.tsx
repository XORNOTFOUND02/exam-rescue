"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const RAINBOW_URL = 'https://soft-zoom-63098134.figma.site/_assets/v11/8d520a7515d06cbfc403d0125e3d05b1a7ccd29c.png';
const CLOUD_URL = 'https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png';

function lerp(a: number, b: number, factor: number) {
  return a + (b - a) * factor;
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rainbowRef = useRef<HTMLDivElement>(null);
  const leftCloudRef = useRef<HTMLDivElement>(null);
  const rightCloudRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const stateRef = useRef({
    rainbow: { current: 120, target: 120 },
    leftCloud: { x: -200, targetX: -200, y: 0, targetY: 0, opacity: 0, targetOpacity: 0 },
    rightCloud: { x: 200, targetX: 200, y: 0, targetY: 0, opacity: 0, targetOpacity: 0 },
    quote: { opacity: 0, targetOpacity: 0 },
  });

  const rafRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      const s = stateRef.current;

      s.rainbow.current = lerp(s.rainbow.current, s.rainbow.target, 0.06);
      s.leftCloud.x = lerp(s.leftCloud.x, s.leftCloud.targetX, 0.04);
      s.leftCloud.y = lerp(s.leftCloud.y, s.leftCloud.targetY, 0.04);
      s.leftCloud.opacity = lerp(s.leftCloud.opacity, s.leftCloud.targetOpacity, 0.04);
      s.rightCloud.x = lerp(s.rightCloud.x, s.rightCloud.targetX, 0.04);
      s.rightCloud.y = lerp(s.rightCloud.y, s.rightCloud.targetY, 0.04);
      s.rightCloud.opacity = lerp(s.rightCloud.opacity, s.rightCloud.targetOpacity, 0.04);
      s.quote.opacity = lerp(s.quote.opacity, s.quote.targetOpacity, 0.06);

      if (rainbowRef.current) {
        rainbowRef.current.style.transform = `translate3d(0, ${s.rainbow.current}px, 0)`;
      }
      if (leftCloudRef.current) {
        leftCloudRef.current.style.transform = `translate3d(${s.leftCloud.x}px, ${s.leftCloud.y}px, 0)`;
        leftCloudRef.current.style.opacity = String(s.leftCloud.opacity);
      }
      if (rightCloudRef.current) {
        rightCloudRef.current.style.transform = `translate3d(${s.rightCloud.x}px, ${s.rightCloud.y}px, 0)`;
        rightCloudRef.current.style.opacity = String(s.rightCloud.opacity);
      }
      if (quoteRef.current) {
        quoteRef.current.style.opacity = String(s.quote.opacity);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const h = window.innerHeight;
      const progress = clamp(0, 1, (h - rect.top) / (h + rect.height));
      const s = stateRef.current;

      // Rainbow parallax
      s.rainbow.target = 120 + progress * (-160 - 120);

      // Left cloud
      if (progress > 0.12 && progress < 0.92) {
        s.leftCloud.targetX = 0;
        s.leftCloud.targetY = progress * -50;
        s.leftCloud.targetOpacity = 0.7;
      } else {
        s.leftCloud.targetX = -200;
        s.leftCloud.targetOpacity = 0;
      }

      // Right cloud
      if (progress > 0.12 && progress < 0.92) {
        s.rightCloud.targetX = 0;
        s.rightCloud.targetY = progress * -50;
        s.rightCloud.targetOpacity = 0.7;
      } else {
        s.rightCloud.targetX = 200;
        s.rightCloud.targetOpacity = 0;
      }

      // Quote opacity
      s.quote.targetOpacity = progress > 0.3 && progress < 0.8 ? 1 : 0;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #010A17 0%, #0A4267 30%, #20658E 60%, #6BADC4 100%)',
      }}
    >
      {/* Rainbow image */}
      <div
        ref={rainbowRef}
        className="absolute inset-x-0 top-0 z-30 w-full"
        style={{ willChange: 'transform' }}
      >
        <Image
          src={RAINBOW_URL}
          alt=""
          width={1920}
          height={400}
          className="w-full h-auto"
          draggable={false}
        />
      </div>

      {/* Left cloud */}
      <div
        ref={leftCloudRef}
        className="absolute left-0 bottom-[10%] z-10 hidden sm:block"
        style={{
          width: 'clamp(500px, 60vw, 650px)',
          marginLeft: '-50%',
          willChange: 'transform, opacity',
        }}
      >
        <Image src={CLOUD_URL} alt="" width={650} height={400} className="w-full h-auto" draggable={false} />
      </div>

      {/* Right cloud */}
      <div
        ref={rightCloudRef}
        className="absolute right-0 bottom-[15%] z-10 hidden sm:block"
        style={{
          width: 'clamp(500px, 60vw, 650px)',
          marginRight: '-75%',
          transform: 'scaleX(-1)',
          willChange: 'transform, opacity',
        }}
      >
        <Image src={CLOUD_URL} alt="" width={650} height={400} className="w-full h-auto" draggable={false} />
      </div>

      {/* Quote content */}
      <div
        ref={quoteRef}
        className="relative z-20 flex flex-col items-center justify-center h-full px-6 max-w-4xl mx-auto"
        style={{ willChange: 'opacity' }}
      >
        <p className="font-instrument italic text-white text-xl sm:text-2xl md:text-4xl lg:text-[42px] leading-[1.45] md:leading-[1.5] text-center">
          &ldquo;Exam Rescue was built on a belief that every student deserves a strategy, not just a schedule. We analyze your preparation, map it against what matters most, and build a plan that targets the highest-yield topics first. No guessing, no panic &mdash; just a clear path to your best possible score.&rdquo;
        </p>
        <p className="mt-6 md:mt-8 text-white/80 text-sm md:text-base tracking-wide text-center">
          The Exam Rescue Team &mdash; Built for CBSE Students
        </p>
      </div>
    </section>
  );
}
