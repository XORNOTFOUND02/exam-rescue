"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8 shadow-lg shadow-indigo-200">
          <Zap className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Your time is limited.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Your strategy shouldn&apos;t be.
          </span>
        </h2>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Stop guessing what to study. Start with a plan that&apos;s built specifically for you.
          Your preparation level. Your time. Your best possible score.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/onboarding" className="group px-10 py-5 rounded-2xl gradient-primary text-white font-bold text-lg shadow-xl shadow-indigo-200 hover:shadow-2xl transition-all hover:-translate-y-0.5 flex items-center gap-2">
            Build My Exam Plan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <p className="text-sm text-gray-400 mt-6">Free to use. No signup required to start.</p>
      </div>
    </section>
  );
}
