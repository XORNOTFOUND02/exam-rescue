"use client";

import Link from "next/link";
import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Exam Rescue</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">How It Works</a>
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#example" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Example Plan</a>
            <Link href="/onboarding" className="px-5 py-2.5 rounded-xl gradient-primary text-white text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-200">
              Build My Plan
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#how-it-works" className="block text-sm font-medium text-gray-600 py-2">How It Works</a>
          <a href="#features" className="block text-sm font-medium text-gray-600 py-2">Features</a>
          <a href="#example" className="block text-sm font-medium text-gray-600 py-2">Example Plan</a>
          <Link href="/onboarding" className="block w-full text-center px-5 py-3 rounded-xl gradient-primary text-white text-sm font-semibold">Build My Plan</Link>
        </div>
      )}
    </nav>
  );
}
