"use client";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import CinematicText from "@/components/landing/CinematicText";
import Metrics from "@/components/landing/Metrics";
import Technology from "@/components/landing/Technology";
import Architecture from "@/components/landing/Architecture";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <div style={{ fontFamily: '"Space Mono", monospace' }}>
      <Navbar />
      <Hero />
      <CinematicText />
      <Metrics />
      <Technology />
      <Architecture />
      <Footer />
    </div>
  );
}
