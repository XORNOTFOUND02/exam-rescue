"use client";

import { useMemo } from "react";
import { Calendar, Clock } from "lucide-react";
import { useStore } from "@/store/useStore";

export default function ExamCountdown() {
  const { onboarding } = useStore();

  const countdown = useMemo(() => {
    if (!onboarding.examDate) return null;

    const exam = new Date(onboarding.examDate);
    const now = new Date();
    const diff = exam.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, isPast: true };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes, isPast: false };
  }, [onboarding.examDate]);

  if (!countdown) return null;

  const urgency = countdown.days <= 3 ? "critical" : countdown.days <= 7 ? "warning" : "normal";
  const bgClass = urgency === "critical" ? "from-red-500 to-red-600" :
                  urgency === "warning" ? "from-amber-500 to-orange-500" :
                  "from-indigo-500 to-purple-600";

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${bgClass} p-5 text-white shadow-lg`}>
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-5 h-5 opacity-80" />
        <h3 className="font-bold">Exam Countdown</h3>
      </div>

      <div className="flex items-baseline gap-4 mb-2">
        <div className="text-center">
          <div className="text-4xl font-black">{countdown.days}</div>
          <div className="text-xs opacity-70">Days</div>
        </div>
        <div className="text-2xl font-bold opacity-40">:</div>
        <div className="text-center">
          <div className="text-3xl font-black">{String(countdown.hours).padStart(2, "0")}</div>
          <div className="text-xs opacity-70">Hours</div>
        </div>
        <div className="text-2xl font-bold opacity-40">:</div>
        <div className="text-center">
          <div className="text-3xl font-black">{String(countdown.minutes).padStart(2, "0")}</div>
          <div className="text-xs opacity-70">Minutes</div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs opacity-80">
        <Clock className="w-3 h-3" />
        <span>
          {onboarding.examTime
            ? `Exam on ${new Date(onboarding.examDate).toLocaleDateString("en-IN", { weekday: "long", month: "short", day: "numeric" })} at ${onboarding.examTime}`
            : `Exam on ${new Date(onboarding.examDate).toLocaleDateString("en-IN", { weekday: "long", month: "short", day: "numeric" })}`
          }
        </span>
      </div>

      {urgency === "critical" && (
        <div className="mt-3 px-3 py-2 rounded-lg bg-white/20 text-xs font-medium">
          Focus mode ON — prioritize high-yield topics only!
        </div>
      )}
    </div>
  );
}
