"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CalendarClock, CheckCircle2, X, Clock, ArrowRight } from "lucide-react";
import { useStore } from "@/store/useStore";
import { handleMissedDay } from "@/lib/engine/planner";
import type { StudyPlan } from "@/types";

// ============================================================
// Exam Rescue — "I missed today" feature
// Lets the student tell the engine a day was lost. The engine
// redistributes the unfinished sessions across the remaining
// days and the plan is rebuilt in place.
// ============================================================

type TimeLostOption = "half" | "full" | "twoPlus" | "custom";

interface TimeLostPreset {
  id: TimeLostOption;
  label: string;
  hint: string;
}

const TIME_LOST_PRESETS: TimeLostPreset[] = [
  { id: "half", label: "Half day", hint: "≈ 4 hours lost" },
  { id: "full", label: "Full day", hint: "≈ 8 hours lost" },
  { id: "twoPlus", label: "2+ days", hint: "Multiple days missed" },
  { id: "custom", label: "Custom", hint: "Enter exact hours" },
];

/**
 * Find the most recent day in the plan (on or before today) that still
 * has uncompleted sessions — that is the day the student missed.
 * Falls back to today's date if the whole plan is already complete.
 */
function findMissedDate(plan: StudyPlan): string {
  const today = new Date().toISOString().split("T")[0];

  for (let i = plan.days.length - 1; i >= 0; i--) {
    const day = plan.days[i];
    if (day.date <= today && day.sessions.some((s) => s.status !== "completed")) {
      return day.date;
    }
  }

  return today;
}

/** Human-readable date like "Mon, Aug 10" */
function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export default function MissedDayButton() {
  const { currentPlan, setCurrentPlan } = useStore();

  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<"question" | "success">("question");
  const [selected, setSelected] = useState<TimeLostOption | null>(null);
  const [customHours, setCustomHours] = useState("");
  const [wasRescheduled, setWasRescheduled] = useState(true);

  if (!currentPlan) return null;

  const customValid = selected === "custom" && Number(customHours) > 0;
  const canConfirm = selected !== null && (selected !== "custom" || customValid);

  const open = () => {
    setSelected(null);
    setCustomHours("");
    setPhase("question");
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const confirm = () => {
    if (!currentPlan || !canConfirm) return;

    const missedDate = findMissedDate(currentPlan);
    const missedDay = currentPlan.days.find((d) => d.date === missedDate);
    const hadPendingSessions = missedDay
      ? missedDay.sessions.some((s) => s.status !== "completed")
      : false;

    const updatedPlan = handleMissedDay(currentPlan, missedDate);
    setCurrentPlan(updatedPlan);
    setWasRescheduled(hadPendingSessions);

    setPhase("success");
  };

  const lostHoursLabel =
    selected === "half" ? "a half day" :
    selected === "full" ? "a full day" :
    selected === "twoPlus" ? "2+ days" :
    selected === "custom" ? `${customHours} hours` : "";

  return (
    <>
      {/* Subtle, muted trigger button */}
      <button
        onClick={open}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-amber-200/70 bg-amber-50/60 text-amber-800 text-sm font-medium hover:bg-amber-50 hover:border-amber-300 transition-all"
      >
        <AlertCircle className="w-4 h-4 text-amber-500" />
        I couldn&apos;t complete today&apos;s plan
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="w-full max-w-md card rounded-2xl shadow-2xl"
              initial={{ scale: 0.92, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Missed a day"
            >
              {phase === "question" ? (
                <>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                        <CalendarClock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 leading-tight">Missed a day?</h3>
                        <p className="text-xs text-gray-500">No problem — we&apos;ll rebuild your route</p>
                      </div>
                    </div>
                    <button
                      onClick={close}
                      className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Question */}
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <p className="text-sm font-semibold text-gray-800">How much time did you lose?</p>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-2 gap-2.5 mb-4">
                    {TIME_LOST_PRESETS.map((option) => {
                      const isSelected = selected === option.id;
                      return (
                        <button
                          key={option.id}
                          onClick={() => setSelected(option.id)}
                          className={`flex flex-col items-start gap-0.5 px-4 py-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "border-amber-500 bg-amber-50 ring-2 ring-amber-500/20"
                              : "border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-50/40"
                          }`}
                        >
                          <span className={`text-sm font-semibold ${isSelected ? "text-amber-800" : "text-gray-800"}`}>
                            {option.label}
                          </span>
                          <span className="text-[11px] text-gray-400">{option.hint}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom hours */}
                  <AnimatePresence>
                    {selected === "custom" && (
                      <motion.div
                        className="mb-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center gap-3 pt-1">
                          <input
                            type="number"
                            min={1}
                            max={24}
                            value={customHours}
                            onChange={(e) => setCustomHours(e.target.value)}
                            placeholder="Hours missed"
                            className="w-28 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400"
                          />
                          <span className="text-xs text-gray-400">How many study hours did you lose?</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={confirm}
                      disabled={!canConfirm}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl gradient-primary text-white text-sm font-bold hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Rebuild My Plan
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={close}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Success */}
                  <div className="flex flex-col items-center text-center py-6 px-2">
                    <div className="relative mb-5">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-emerald-100"
                        initial={{ scale: 0.6, opacity: 0.8 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                      <motion.div
                        className="relative w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                      >
                        <CheckCircle2 className="w-9 h-9 text-emerald-500" />
                      </motion.div>
                    </div>

                    <motion.h3
                      className="text-lg font-bold text-gray-900 mb-1"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      Plan adjusted. Here&apos;s your new route.
                    </motion.h3>
                    <motion.p
                      className="text-sm text-gray-500 max-w-xs"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      {wasRescheduled
                        ? `We missed you for ${lostHoursLabel || "a while"} — your unfinished sessions from ${formatDate(findMissedDate(currentPlan))} have been moved into the days ahead.`
                        : "You're all caught up — nothing needed rescheduling."}
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-3 mt-6 w-full"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <Link
                        href="/plan"
                        onClick={close}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl gradient-primary text-white text-sm font-bold hover:opacity-90 transition-all"
                      >
                        View New Plan
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={close}
                        className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
