"use client";

import { Target, BarChart3, TrendingUp, Calendar, Brain, Zap, BookOpen, Compass } from "lucide-react";

export default function WhyExamRescue() {
  const features = [
    { icon: <Target className="w-6 h-6" />, title: "No manual syllabus entry", description: "Syllabus is pre-loaded. Just select chapters." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Personalized planning", description: "Based on YOUR preparation level and available time." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Topic-level prioritization", description: "Know exactly which topics deserve your time first." },
    { icon: <Calendar className="w-6 h-6" />, title: "Daily routine", description: "Exact time blocks with WHAT and HOW to study." },
    { icon: <Brain className="w-6 h-6" />, title: "Smart revision", description: "Automatic revision scheduling based on spaced repetition." },
    { icon: <Zap className="w-6 h-6" />, title: "Adaptive planning", description: "Plan changes based on your quiz performance." },
    { icon: <BookOpen className="w-6 h-6" />, title: "Learning resources", description: "Relevant video and study resources recommended for you." },
    { icon: <Compass className="w-6 h-6" />, title: "Marks per Hour", description: "Focus on what gives the best return for your time." },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">Why Exam Rescue?</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Everything you need to ace your exams</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Not just a timetable. An intelligent exam strategy engine.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card card-interactive group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">{f.icon}</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
