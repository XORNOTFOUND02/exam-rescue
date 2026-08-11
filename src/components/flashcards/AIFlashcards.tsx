"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import { RotateCcw, Check, X } from "lucide-react";

interface Flashcard {
  front: string;
  back: string;
  difficulty: "easy" | "medium" | "hard";
}

const FLASHCARD_DB: Record<string, Flashcard[]> = {
  science: [
    { front: "What is the SI unit of force?", back: "Newton (N) = 1 kg.m/s2", difficulty: "easy" },
    { front: "State Newton's First Law", back: "Object stays at rest/motion unless acted by external force", difficulty: "medium" },
    { front: "Formula for gravitational PE?", back: "PE = mgh", difficulty: "medium" },
    { front: "Distance vs Displacement?", back: "Distance = scalar (path), Displacement = vector (shortest path)", difficulty: "easy" },
    { front: "Law of conservation of energy?", back: "Energy cannot be created/destroyed, only transformed", difficulty: "medium" },
    { front: "Unit of electric current?", back: "Ampere (A) = 1 C/s", difficulty: "easy" },
    { front: "What is Ohm's Law?", back: "V = IR", difficulty: "easy" },
    { front: "pH of pure water?", back: "7 (neutral)", difficulty: "easy" },
    { front: "Atomic number of Carbon?", back: "6", difficulty: "easy" },
    { front: "Powerhouse of cell?", back: "Mitochondria", difficulty: "easy" },
    { front: "Speed vs Velocity?", back: "Speed = scalar, Velocity = vector (with direction)", difficulty: "medium" },
    { front: "Acceleration due to gravity?", back: "9.8 m/s2 (approx 10)", difficulty: "easy" },
    { front: "Formula for work?", back: "W = F x d x cos(theta)", difficulty: "medium" },
    { front: "Momentum formula?", back: "p = mv", difficulty: "easy" },
    { front: "Formula for power?", back: "P = W/t = Fv", difficulty: "medium" },
  ],
  mathematics: [
    { front: "Pythagorean theorem?", back: "a2 + b2 = c2", difficulty: "easy" },
    { front: "Quadratic formula?", back: "x = (-b +/- sqrt(b2-4ac)) / 2a", difficulty: "medium" },
    { front: "Area of circle?", back: "A = pi*r2", difficulty: "easy" },
    { front: "Sum of angles in triangle?", back: "180 degrees", difficulty: "easy" },
    { front: "Volume of cylinder?", back: "V = pi*r2*h", difficulty: "medium" },
    { front: "sin(30)?", back: "1/2 = 0.5", difficulty: "easy" },
    { front: "nth term of AP?", back: "an = a + (n-1)d", difficulty: "medium" },
    { front: "Sum of first n naturals?", back: "n(n+1)/2", difficulty: "medium" },
    { front: "Slope formula?", back: "m = (y2-y1)/(x2-x1)", difficulty: "easy" },
    { front: "Distance formula?", back: "d = sqrt((x2-x1)^2 + (y2-y1)^2)", difficulty: "medium" },
    { front: "Volume of sphere?", back: "V = (4/3)*pi*r3", difficulty: "medium" },
    { front: "Sum of angles in quadrilateral?", back: "360 degrees", difficulty: "easy" },
    { front: "Area of triangle?", back: "A = (1/2)*base*height", difficulty: "easy" },
    { front: "Compound interest formula?", back: "A = P(1+r/n)^(nt)", difficulty: "hard" },
    { front: "Area of parallelogram?", back: "A = base * height", difficulty: "easy" },
  ],
  physics: [
    { front: "What is inertia?", back: "Tendency of body to resist change in state of motion", difficulty: "easy" },
    { front: "SI unit of force?", back: "Newton (N)", difficulty: "easy" },
    { front: "What is torque?", back: "tau = r x F = rF*sin(theta)", difficulty: "medium" },
    { front: "Conservation of linear momentum?", back: "Total momentum before = Total momentum after (no external force)", difficulty: "medium" },
    { front: "What is SHM?", back: "Oscillation where acceleration is proportional to displacement and directed towards mean position", difficulty: "medium" },
  ],
  chemistry: [
    { front: "What is a mole?", back: "6.022 x 10^23 particles (Avogadro number)", difficulty: "easy" },
    { front: "What is electronegativity?", back: "Ability of atom to attract shared pair of electrons", difficulty: "medium" },
    { front: "pH formula?", back: "pH = -log[H+]", difficulty: "easy" },
    { front: "What is a buffer?", back: "Solution that resists pH change on addition of small amount of acid/base", difficulty: "medium" },
  ],
  biology: [
    { front: "What is photosynthesis?", back: "6CO2 + 6H2O -> C6H12O6 + 6O2 (using sunlight)", difficulty: "easy" },
    { front: "DNA full form?", back: "Deoxyribonucleic Acid", difficulty: "easy" },
    { front: "What is mitosis?", back: "Cell division producing 2 identical daughter cells", difficulty: "easy" },
    { front: "What is osmosis?", back: "Movement of water through semi-permeable membrane from low to high solute concentration", difficulty: "medium" },
    { front: "Centrioles function?", back: "Form spindle fibers during cell division", difficulty: "medium" },
  ],
  english: [
    { front: "What is a metaphor?", back: "Direct comparison without using like/as", difficulty: "easy" },
    { front: "What is alliteration?", back: "Repetition of initial consonant sounds", difficulty: "easy" },
    { front: "What is a simile?", back: "Comparison using like or as", difficulty: "easy" },
    { front: "What is personification?", back: "Giving human qualities to non-human things", difficulty: "medium" },
  ],
  social_science: [
    { front: "What is democracy?", back: "System of government where people elect representatives", difficulty: "easy" },
    { front: "What is GDP?", back: "Gross Domestic Product - total value of goods/services produced", difficulty: "easy" },
    { front: "What is federalism?", back: "System where power is divided between central and state governments", difficulty: "medium" },
    { front: "What is globalization?", back: "Interconnection of economies, cultures, and populations worldwide", difficulty: "medium" },
  ],
};

export default function AIFlashcards() {
  const { onboarding } = useStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<number[]>([]);
  const [unknown, setUnknown] = useState<number[]>([]);

  const cards = FLASHCARD_DB[onboarding.selectedSubject || "science"] || FLASHCARD_DB.science;
  const card = cards[currentIndex];
  const progress = ((known.length + unknown.length) / cards.length) * 100;

  const handleKnown = () => { setKnown([...known, currentIndex]); setIsFlipped(false); setCurrentIndex((currentIndex + 1) % cards.length); };
  const handleUnknown = () => { setUnknown([...unknown, currentIndex]); setIsFlipped(false); setCurrentIndex((currentIndex + 1) % cards.length); };
  const handleReset = () => { setCurrentIndex(0); setIsFlipped(false); setKnown([]); setUnknown([]); };

  const diffColor = (d: string) => d === "easy" ? "text-emerald-400 bg-emerald-500/10" : d === "medium" ? "text-yellow-400 bg-yellow-500/10" : "text-red-400 bg-red-500/10";

  return (
    <div className="space-y-6">
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-white/50">Card {currentIndex + 1} of {cards.length}</span>
        <span className="text-emerald-400">{known.length} known</span>
        <span className="text-red-400">{unknown.length} to review</span>
      </div>
      <div className="flex justify-center">
        <div onClick={() => setIsFlipped(!isFlipped)} className="w-full max-w-lg h-64 cursor-pointer">
          <div className="relative w-full h-full transition-all duration-500" style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/20 p-6 flex flex-col items-center justify-center" style={{ backfaceVisibility: "hidden" }}>
              <span className={`text-xs px-2 py-0.5 rounded-full mb-4 ${diffColor(card.difficulty)}`}>{card.difficulty}</span>
              <p className="text-xl font-semibold text-white text-center">{card.front}</p>
              <p className="text-xs text-white/30 mt-4">Tap to reveal answer</p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/20 p-6 flex flex-col items-center justify-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
              <p className="text-lg text-white text-center">{card.back}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button onClick={handleUnknown} className="px-6 py-3 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all flex items-center gap-2"><X className="w-4 h-4" /> Don&apos;t Know</button>
        <button onClick={handleReset} className="p-3 rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 transition-all"><RotateCcw className="w-4 h-4" /></button>
        <button onClick={handleKnown} className="px-6 py-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all flex items-center gap-2"><Check className="w-4 h-4" /> Got It</button>
      </div>
    </div>
  );
}
