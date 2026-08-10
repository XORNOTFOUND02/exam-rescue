"use client";

import { GraduationCap, Target, Clock, Brain } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: <GraduationCap className="w-7 h-7" />, number: "1", title: "Select your class & subject", description: "Choose your class and the subject you need help with. We support CBSE/NCERT curriculum.", color: "from-indigo-500 to-indigo-600" },
    { icon: <Target className="w-7 h-7" />, number: "2", title: "Tell us what you've prepared", description: "Mark each chapter as prepared, partially prepared, or not prepared. Go topic-level for partial chapters.", color: "from-emerald-500 to-emerald-600" },
    { icon: <Clock className="w-7 h-7" />, number: "3", title: "Tell us how much time remains", description: "Enter your exam date and daily study hours. We'll work with whatever time you have.", color: "from-amber-500 to-amber-600" },
    { icon: <Brain className="w-7 h-7" />, number: "4", title: "Get your personalized exam plan", description: "Receive a day-by-day strategy with WHAT to study, HOW to study, and WHEN to revise.", color: "from-rose-500 to-rose-600" },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">How Exam Rescue Works</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Four simple steps to your personalized exam strategy</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 to-gray-100" />}
              <div className="text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mx-auto mb-5 shadow-lg relative z-10`}>{step.icon}</div>
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Step {step.number}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
