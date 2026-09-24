"use client";

import NeuralHero from "@/components/landing/NeuralHero";
import CinematicText from "@/components/landing/CinematicText";
import Metrics from "@/components/landing/Metrics";
import Technology from "@/components/landing/Technology";
import Architecture from "@/components/landing/Architecture";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <div className="landing-dark">
      <NeuralHero />
      <div id="how-it-works">
        <CinematicText />
      </div>
      <div id="stats">
        <Metrics />
      </div>
      <div id="features">
        <Technology />
      </div>
      <Architecture />
      <Footer />
    </div>
  );
}
