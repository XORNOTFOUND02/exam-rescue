"use client";

// ============================================================
// Exam Rescue — "What should I do NOW?" Floating Action Button
// ------------------------------------------------------------
// Fixed pill (bottom-right on desktop / full-width above the
// bottom nav on mobile). Opens a modal with the single highest
// priority next action from the current plan: exact topic,
// chapter, time estimate, what/how to study, and a jump to the
// plan page to start studying.
// ============================================================

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Clock, ArrowRight, X, Zap } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getChapterById, getTopicById } from "@/lib/syllabus";
import { StudySession } from "@/types";

// Activity type → visual metadata (mirrors the plan page cards)
const ACTIVITY_META: Record<string, { bg: string; text: string; label: string }> = {
  study: { bg: "bg-red-100", text: "text-red-700", label: "📖 Study" },
  revision: { bg: "bg-amber-100", text: "text-amber-700", label: "🔄 Revision" },
  practice: { bg: "bg-blue-100", text: "text-blue-700", label: "✏️ Practice" },
  quiz: { bg: "bg-purple-100", text: "text-purple-700", label: "🧠 Quiz" },
  active_recall: { bg: "bg-pink-100", text: "text-pink-700", label: "💡 Active Recall" },
  mock_test: { bg: "bg-orange-100", text: "text-orange-700", label: "📝 Mock Test" },
  break: { bg: "bg-gray-100", text: "text-gray-600", label: "☕ Break" },
};

/** Human readable duration from session start/end times. */
function formatDuration(session: StudySession): string {
  const [sh, sm] = session.startTime.split(":").map(Number);
  const [eh, em] = session.endTime.split(":").map(Number);
  const mins = (eh * 60 + em) - (sh * 60 + sm);
  if (mins >= 60) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m ? `${h}h ${m}m` : `${h}h`;
  }
  return `${Math.max(mins, 1)} min`;
}

export default function WhatNowButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPlan } = useStore();

  // The single highest-priority next action:
  // the first pending session found scanning days from today onward
  // (the plan is generated in priority order, so "first pending"
  //  == "highest priority").
  const nextSession = useMemo(() => {
    if (!currentPlan) return null;
    const days = currentPlan.days;
    const today = new Date().toISOString().split("T")[0];

    const startIdx = Math.max(0, days.findIndex((d) => d.date >= today));
    const orderedDays = [...days.slice(startIdx), ...days.slice(0, startIdx)];

    for (const day of orderedDays) {
      const pending = day.sessions.find(
        (s) => s.status === "pending" || s.status === "in_progress"
      );
      if (pending) return pending;
    }
    return null;
  }, [currentPlan]);

  // Lock body scroll while the modal is open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Nothing to suggest → don't render the FAB at all
  if (!nextSession) return null;

  const topic = getTopicById(nextSession.topicId);
  const chapter = getChapterById(nextSession.chapterId);
  const activity = ACTIVITY_META[nextSession.activityType] || ACTIVITY_META.study;
  const title = topic?.name || nextSession.whatToStudy[0] || "Next study session";

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Floating pill */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-[60] left-4 right-4 bottom-20 md:left-auto md:right-8 md:bottom-8 md:w-auto
                   gradient-primary text-white rounded-2xl md:rounded-full shadow-xl
                   flex items-center justify-center gap-2.5 px-4 md:px-6 py-4 md:py-3.5
                   animate-pulse-glow hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        aria-label="What should I do right now?"
      >
        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Zap className="w-4.5 h-4.5 md:w-5 md:h-5" />
        </span>
        <span className="text-sm md:text-[15px] font-bold tracking-tight whitespace-nowrap">
          What should I do NOW?
        </span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />

            <div className="fixed inset-0 z-[80] flex items-end justify-center md:items-center pointer-events-none">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Next action"
                className="pointer-events-auto w-full max-w-lg bg-white rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl"
                initial={{ y: 100, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 100, opacity: 0, scale: 0.98 }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
              >
                {/* Header */}
                <div className="gradient-primary text-white p-5 flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                      Do this right now
                    </div>
                    <h2 className="text-lg font-black leading-tight">Your highest-yield next step</h2>
                  </div>
                  <button
                    onClick={close}
                    className="p-2 rounded-lg hover:bg-white/15 transition-colors cursor-pointer shrink-0"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-5 space-y-5 max-h-[55vh] overflow-y-auto">
                  {/* Session summary */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activity.bg} ${activity.text}`}>
                        {activity.label}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                        ⏭ Next session
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 leading-snug">{title}</h3>
                    {chapter && (
                      <p className="text-sm text-gray-500 mt-0.5">{chapter.name}</p>
                    )}
                  </div>

                  {/* Time estimate */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                    <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
                    <div className="text-sm text-gray-700">
                      <span className="font-bold text-gray-900">{nextSession.startTime} – {nextSession.endTime}</span>
                      <span className="text-gray-500"> · {formatDuration(nextSession)}</span>
                    </div>
                  </div>

                  {/* What to study */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                      What to study
                    </h4>
                    <ul className="space-y-1.5">
                      {nextSession.whatToStudy.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-indigo-400 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How to study */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                      How to study
                    </h4>
                    <ol className="space-y-1.5">
                      {nextSession.howToStudy.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-emerald-500 font-bold text-xs mt-0.5">{i + 1}.</span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-5 pt-2 border-t border-gray-100 flex gap-3">
                  <button
                    onClick={close}
                    className="px-5 py-3 rounded-xl border border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Later
                  </button>
                  <Link
                    href="/plan"
                    onClick={close}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-primary text-white font-bold text-sm hover:opacity-90 transition-all"
                  >
                    Start Studying <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
