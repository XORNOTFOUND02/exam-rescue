"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import SynapseXLogo from "./SynapseXLogo";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4";
const POSTER_URL =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg";

const FEATURES = [
  "AI priority scoring",
  "Day-by-day strategy",
  "Adaptive quiz feedback",
  "Emergency exam mode",
];

function Chevron() {
  return (
    <svg className="nx-chev" viewBox="0 0 11 20" aria-hidden="true">
      <path d="M1.15 1.15 L9.6 10 L1.15 18.85" />
    </svg>
  );
}

/**
 * Full-viewport NEURAL-style hero for Exam Rescue.
 * Desktop: locked 1536×1024 composition. Below: flex-column flow + burger panel.
 */
function NeuralHero() {
  const foot2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // (a) Reduced motion → pause background video on first frame
    const mq =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    const video = document.querySelector("video.nx-art") as HTMLVideoElement | null;
    if (mq && video) {
      const sync = () => {
        if (mq.matches) {
          video.pause();
        } else {
          const p = video.play();
          if (p) p.catch(() => {});
        }
      };
      sync();
      if (mq.addEventListener) mq.addEventListener("change", sync);
      else if (mq.addListener) mq.addListener(sync);
    }

    // (b) Retire entrance once #nx-foot2 animation ends (or 4s safety)
    let timer: ReturnType<typeof setTimeout> | undefined;
    const done = () => {
      if (timer) clearTimeout(timer);
      foot2Ref.current?.removeEventListener("animationend", done);
      document.documentElement.classList.add("is-entered");
    };
    foot2Ref.current?.addEventListener("animationend", done);
    timer = setTimeout(done, 4000);
    return () => {
      if (timer) clearTimeout(timer);
      foot2Ref.current?.removeEventListener("animationend", done);
    };
  }, []);

  return (
    <section className="nx-stage" aria-label="Exam Rescue hero">
      <video
        className="nx-art"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        poster={POSTER_URL}
        src={VIDEO_URL}
      />
      <div className="nx-veil" aria-hidden="true" />

      <header className="nx-bar">
        <Link href="/" className="nx-brand" aria-label="Exam Rescue home">
          <SynapseXLogo size={23} className="text-white" />
          <span id="nx-word" className="nx-word">
            EXAM RESCUE
          </span>
        </Link>

        <input
          className="nx-navtoggle"
          type="checkbox"
          id="nx-nav-open"
          aria-label="Menu"
        />
        <label className="nx-scrim" htmlFor="nx-nav-open" aria-hidden="true" />
        <label className="nx-burger" htmlFor="nx-nav-open" aria-label="Menu">
          <svg viewBox="0 0 22 14" aria-hidden="true">
            <path className="b1" d="M1 1 H21" />
            <path className="b2" d="M1 7 H21" />
            <path className="b3" d="M1 13 H21" />
          </svg>
        </label>

        <div className="nx-navpanel">
          <nav className="nx-menu" aria-label="Primary">
            <Link href="#how-it-works">
              <span id="nx-about" className="nx-nav-link nx-about">
                How It Works
              </span>
            </Link>
            <Link href="#stats">
              <span id="nx-product" className="nx-nav-link nx-product">
                Stats
              </span>
            </Link>
            <Link href="#features">
              <span id="nx-solutions" className="nx-nav-link nx-solutions">
                Features
              </span>
              <svg className="nx-caret" viewBox="0 0 9 6" aria-hidden="true">
                <path d="M0.7 1.1 L4.5 4.6 L8.3 1.1" />
              </svg>
            </Link>
          </nav>
          <Link href="/onboarding" className="nx-login">
            <span id="nx-login" className="nx-nav-link nx-login">
              Start free / Build my plan
            </span>
            <svg className="nx-navarrow" viewBox="0 0 10 9" aria-hidden="true">
              <path d="M0 4.5 H9.1 M5.4 0.9 L9.2 4.5 L5.4 8.1" />
            </svg>
          </Link>
          <Link href="/onboarding" className="nx-pill">
            <span id="nx-contact" className="nx-contact">
              Get Started
            </span>
          </Link>
        </div>
      </header>

      <main className="nx-hero">
        <h1 className="nx-title">
          <span id="nx-h1a">Study Smart, Not Hard.</span>
          <span id="nx-h1b">Your AI Exam Strategy.</span>
        </h1>
        <p className="nx-sub">
          <span id="nx-sub1">Day-by-day plans built for CBSE</span>
          <span id="nx-sub2">students who want every mark.</span>
        </p>
        <Link href="/onboarding" className="nx-cta">
          <span id="nx-cta" className="nx-cta-label">
            Get started today
          </span>
          <svg className="nx-arrow" viewBox="0 0 16 11" aria-hidden="true">
            <path d="M0 5.5 H14.6 M10.3 1.2 L14.9 5.5 L10.3 9.8" />
          </svg>
        </Link>
        <ul className="nx-feats">
          {FEATURES.map((label) => (
            <li key={label}>
              <Chevron />
              <span>{label}</span>
            </li>
          ))}
        </ul>
        <span className="nx-rule" aria-hidden="true" />
      </main>

      <footer className="nx-foot">
        <span id="nx-foot1">
          Trusted by CBSE students preparing smarter every day.
        </span>
        <span id="nx-foot2" ref={foot2Ref}>
          2026
        </span>
      </footer>
    </section>
  );
}

export default NeuralHero;
