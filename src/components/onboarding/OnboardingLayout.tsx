"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4';

function lerp(a: number, b: number, factor: number) {
  return a + (b - a) * factor;
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const rainbowRef = useRef<HTMLDivElement>(null);
  const leftCloudRef = useRef<HTMLDivElement>(null);
  const rightCloudRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const stateRef = useRef({
    rainbow: { current: 120, target: 120 },
    leftCloud: { x: -200, targetX: -200, y: 0, targetY: 0, opacity: 0, targetOpacity: 0 },
    rightCloud: { x: 200, targetX: 200, y: 0, targetY: 0, opacity: 0, targetOpacity: 0 },
    content: { opacity: 0, targetOpacity: 0 },
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
      s.content.opacity = lerp(s.content.opacity, s.content.targetOpacity, 0.06);

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
      if (contentRef.current) {
        contentRef.current.style.opacity = String(s.content.opacity);
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

      s.rainbow.target = 120 + progress * (-160 - 120);

      if (progress > 0.12 && progress < 0.92) {
        s.leftCloud.targetX = 0;
        s.leftCloud.targetY = progress * -50;
        s.leftCloud.targetOpacity = 0.5;
      } else {
        s.leftCloud.targetX = -200;
        s.leftCloud.targetOpacity = 0;
      }

      if (progress > 0.12 && progress < 0.92) {
        s.rightCloud.targetX = 0;
        s.rightCloud.targetY = progress * -50;
        s.rightCloud.targetOpacity = 0.5;
      } else {
        s.rightCloud.targetX = 200;
        s.rightCloud.targetOpacity = 0;
      }

      s.content.targetOpacity = progress > 0.1 ? 1 : 0;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef as React.RefObject<HTMLDivElement>} className="bg-[#0a0608] min-h-screen">
      {/* Background video */}
      <video
        src={VIDEO_URL}
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/40 z-10" />

      {/* Rainbow parallax layer */}
      <div
        ref={rainbowRef}
        className="fixed inset-x-0 top-0 z-20 w-full pointer-events-none"
        style={{ willChange: 'transform', opacity: 0.3 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/8d520a7515d06cbfc403d0125e3d05b1a7ccd29c.png"
          alt=""
          className="w-full h-auto"
          draggable={false}
        />
      </div>

      {/* Left cloud */}
      <div
        ref={leftCloudRef}
        className="fixed left-0 bottom-[10%] z-10 hidden sm:block pointer-events-none"
        style={{
          width: 'clamp(400px, 50vw, 550px)',
          marginLeft: '-30%',
          willChange: 'transform, opacity',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
          alt=""
          className="w-full h-auto"
          draggable={false}
        />
      </div>

      {/* Right cloud */}
      <div
        ref={rightCloudRef}
        className="fixed right-0 bottom-[15%] z-10 hidden sm:block pointer-events-none"
        style={{
          width: 'clamp(400px, 50vw, 550px)',
          marginRight: '-50%',
          transform: 'scaleX(-1)',
          willChange: 'transform, opacity',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
          alt=""
          className="w-full h-auto"
          draggable={false}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
        <Link href="/" className="font-dancing text-white text-2xl md:text-3xl no-underline">
          Exam Rescue
        </Link>
        <Link href="/">
          <div className="bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all">
            Back to Home
          </div>
        </Link>
      </nav>

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-30 min-h-screen flex items-center justify-center px-4 py-24"
        style={{ willChange: 'opacity' }}
      >
        <div className="w-full max-w-2xl">
          {/* Glass card */}
          <div className="liquid-glass rounded-3xl p-8 md:p-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
