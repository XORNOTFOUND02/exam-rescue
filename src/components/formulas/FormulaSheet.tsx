"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import { BookOpen, Copy, Check } from "lucide-react";

const FORMULAS: Record<string, { title: string; formulas: { name: string; formula: string; note?: string }[] }[]> = {
  science: [
    { title: "Motion", formulas: [
      { name: "Speed", formula: "v = d/t" },
      { name: "Velocity", formula: "v = displacement/t" },
      { name: "Acceleration", formula: "a = (v-u)/t" },
      { name: "First Equation", formula: "v = u + at" },
      { name: "Second Equation", formula: "s = ut + 1/2 at2" },
      { name: "Third Equation", formula: "v2 = u2 + 2as" },
      { name: "Average Speed", formula: "Total distance / Total time" },
    ]},
    { title: "Force & Laws of Motion", formulas: [
      { name: "Newton's 2nd Law", formula: "F = ma" },
      { name: "Momentum", formula: "p = mv" },
      { name: "Impulse", formula: "J = Ft = change in momentum" },
      { name: "Weight", formula: "W = mg" },
      { name: "Friction", formula: "f = mu * N" },
    ]},
    { title: "Work, Energy & Power", formulas: [
      { name: "Work", formula: "W = Fd cos(theta)" },
      { name: "Kinetic Energy", formula: "KE = 1/2 mv2" },
      { name: "Potential Energy", formula: "PE = mgh" },
      { name: "Power", formula: "P = W/t = Fv" },
      { name: "Conservation", formula: "KE + PE = constant" },
    ]},
    { title: "Gravitation", formulas: [
      { name: "Gravitational Force", formula: "F = GMm/r2" },
      { name: "Free Fall", formula: "v = gt, h = 1/2 gt2" },
      { name: "Weight on Earth", formula: "W = mg (g = 9.8 m/s2)" },
    ]},
    { title: "Sound", formulas: [
      { name: "Speed of Sound", formula: "v = f * lambda" },
      { name: "Frequency", formula: "f = 1/T" },
      { name: "Echo", formula: "Distance = v * t / 2" },
    ]},
  ],
  mathematics: [
    { title: "Number Systems", formulas: [
      { name: "Square Root", formula: "sqrt(a*b) = sqrt(a) * sqrt(b)" },
      { name: "Rationalization", formula: "(a+b)(a-b) = a2 - b2" },
    ]},
    { title: "Polynomials", formulas: [
      { name: "Square", formula: "(a+b)2 = a2 + 2ab + b2" },
      { name: "Square Diff", formula: "(a-b)(a+b) = a2 - b2" },
      { name: "Cube", formula: "(a+b)3 = a3 + 3a2b + 3ab2 + b3" },
    ]},
    { title: "Triangles", formulas: [
      { name: "Pythagoras", formula: "a2 + b2 = c2" },
      { name: "Area", formula: "A = 1/2 * base * height" },
      { name: "Heron's", formula: "A = sqrt(s(s-a)(s-b)(s-c)), s=(a+b+c)/2" },
    ]},
    { title: "Mensuration", formulas: [
      { name: "Circle Area", formula: "A = pi*r2" },
      { name: "Circle Perimeter", formula: "C = 2*pi*r" },
      { name: "Cylinder Vol", formula: "V = pi*r2*h" },
      { name: "Sphere Vol", formula: "V = (4/3)*pi*r3" },
      { name: "Cone Vol", formula: "V = (1/3)*pi*r2*h" },
    ]},
    { title: "Coordinate Geometry", formulas: [
      { name: "Distance", formula: "d = sqrt((x2-x1)^2 + (y2-y1)^2)" },
      { name: "Midpoint", formula: "M = ((x1+x2)/2, (y1+y2)/2)" },
      { name: "Slope", formula: "m = (y2-y1)/(x2-x1)" },
    ]},
    { title: "Statistics", formulas: [
      { name: "Mean", formula: "x-bar = sum(xi) / n" },
      { name: "Median", formula: "Middle value when ordered" },
      { name: "Mode", formula: "Most frequent value" },
    ]},
  ],
  physics: [
    { title: "Mechanics", formulas: [
      { name: "Newton's 2nd", formula: "F = ma" },
      { name: "Momentum", formula: "p = mv" },
      { name: "Work", formula: "W = Fs cos(theta)" },
      { name: "KE", formula: "KE = 1/2 mv2" },
      { name: "PE", formula: "PE = mgh" },
      { name: "Power", formula: "P = W/t" },
    ]},
    { title: "Rotational Motion", formulas: [
      { name: "Torque", formula: "tau = rF sin(theta)" },
      { name: "Moment of Inertia", formula: "I = mr2" },
      { name: "Angular Momentum", formula: "L = Iw" },
    ]},
    { title: "Gravitation", formulas: [
      { name: "Gravitational Force", formula: "F = GMm/r2" },
      { name: "Orbital Velocity", formula: "v = sqrt(GM/r)" },
    ]},
    { title: "Thermodynamics", formulas: [
      { name: "First Law", formula: "dQ = dU + dW" },
      { name: "Ideal Gas", formula: "PV = nRT" },
      { name: "Efficiency", formula: "eta = 1 - T2/T1" },
    ]},
  ],
  chemistry: [
    { title: "Mole Concept", formulas: [
      { name: "Moles", formula: "n = mass/M = N/NA" },
      { name: "Molarity", formula: "M = moles/Volume(L)" },
      { name: "NA", formula: "6.022 x 10^23" },
    ]},
    { title: "pH & Solutions", formulas: [
      { name: "pH", formula: "pH = -log[H+]" },
      { name: "pOH", formula: "pOH = -log[OH-]" },
      { name: "Relation", formula: "pH + pOH = 14" },
    ]},
  ],
  biology: [
    { title: "Cell Biology", formulas: [
      { name: "Photosynthesis", formula: "6CO2 + 6H2O -> C6H12O6 + 6O2" },
      { name: "Respiration", formula: "C6H12O6 + 6O2 -> 6CO2 + 6H2O + ATP" },
      { name: "ATP", formula: "Adenosine Triphosphate - energy currency" },
    ]},
  ],
};

export default function FormulaSheet() {
  const { onboarding } = useStore();
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<number>(0);

  const subjectFormulas = FORMULAS[onboarding.selectedSubject || "science"] || FORMULAS.science;

  const copyFormula = (formula: string, key: string) => {
    navigator.clipboard.writeText(formula).catch(() => {});
    setCopiedIdx(key);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div className="space-y-4">
      {subjectFormulas.map((section, si) => (
        <div key={si} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
          <button onClick={() => setExpandedSection(expandedSection === si ? -1 : si)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-all">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span className="font-semibold text-white">{section.title}</span>
            </div>
            <span className="text-white/40">{expandedSection === si ? "^" : "v"}</span>
          </button>
          {expandedSection === si && (
            <div className="px-4 pb-4 space-y-2">
              {section.formulas.map((f, fi) => {
                const key = `${si}-${fi}`;
                return (
                  <div key={fi} className="flex items-center justify-between p-3 rounded-xl bg-white/5 group">
                    <div>
                      <div className="text-sm font-medium text-white">{f.name}</div>
                      <div className="text-sm font-mono text-purple-300">{f.formula}</div>
                      {f.note && <div className="text-xs text-white/40 mt-0.5">{f.note}</div>}
                    </div>
                    <button onClick={() => copyFormula(f.formula, key)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all">
                      {copiedIdx === key ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-white/60" />}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
