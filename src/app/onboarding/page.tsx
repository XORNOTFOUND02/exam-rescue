"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Search, ChevronDown, ChevronUp, Zap, AlertTriangle } from "lucide-react";
import YouTubeEmbed from "@/components/shared/YouTubeEmbed";
import { useStore } from "@/store/useStore";
import { subjectsByClass, getChapters, getTopics } from "@/lib/syllabus";
import { getCachedSyllabus } from "@/lib/syllabus/ncert-fetcher";
import type { NcertSyllabus } from "@/lib/syllabus/ncert-fetcher";
import SyllabusBadge from "@/components/onboarding/SyllabusBadge";
import { generateStudyPlan } from "@/lib/engine/planner";
import { getOneShotVideo, shouldShowOneShot } from "@/lib/resources/one-shots";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const CLASSES = [9, 10, 11, 12];

// ====== STEP 1: CLASS SELECTION ======
function StepClass() {
  const { onboarding, setSelectedClass, setOnboardingStep } = useStore();
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Select your class</h2>
      <p className="text-white/60 mb-8">Which class are you in?</p>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {CLASSES.map(cls => (
          <button key={cls} onClick={() => { setSelectedClass(cls); setOnboardingStep(1); }}
            className={`p-6 rounded-2xl border-2 text-center font-bold text-lg transition-all ${onboarding.selectedClass === cls ? "border-purple-500 bg-purple-500/20 text-white shadow-lg shadow-purple-500/20" : "border-white/10 hover:border-white/20 text-white/70 hover:text-white bg-white/5 hover:bg-white/10"}`}>
            Class {cls}
          </button>
        ))}
      </div>
    </div>
  );
}

// ====== STEP 2: SUBJECT SELECTION ======
function StepSubject() {
  const { onboarding, setSelectedSubject, setOnboardingStep } = useStore();
  const subjects = onboarding.selectedClass ? subjectsByClass[onboarding.selectedClass] || [] : [];
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Select your subject</h2>
      <p className="text-white/60 mb-8">Which subject do you need help with?</p>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {subjects.map(sub => (
          <button key={sub.id} onClick={() => { setSelectedSubject(sub.id); setOnboardingStep(2); }}
            className={`p-6 rounded-2xl border-2 text-center transition-all ${onboarding.selectedSubject === sub.id ? "border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/20" : "border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10"}`}>
            <div className="text-3xl mb-2">{sub.icon}</div>
            <div className="font-bold text-white">{sub.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ====== STEP 3: CHAPTER SELECTION ======
function StepChapters() {
  const { onboarding, toggleChapter } = useStore();
  const [search, setSearch] = useState("");
  const chapters = onboarding.selectedSubject ? getChapters(onboarding.selectedSubject, onboarding.selectedClass ?? undefined) : [];
  const filtered = chapters.filter(ch => ch.name.toLowerCase().includes(search.toLowerCase()));

  const allSelected = filtered.length > 0 && filtered.every(ch => onboarding.selectedChapters.includes(ch.id));

  // Load NCERT source metadata synchronously via useMemo (not useEffect + setState).
  const ncert = useMemo<NcertSyllabus | null>(() => {
    if (!onboarding.selectedClass || !onboarding.selectedSubject) return null;
    return getCachedSyllabus(onboarding.selectedClass, onboarding.selectedSubject);
  }, [onboarding.selectedClass, onboarding.selectedSubject]);

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Select the chapters you need to prepare</h2>
      <p className="text-white/60 mb-6">Choose the chapters you want to include in your exam plan.</p>

      {ncert && (
        <div className="mb-4">
          <SyllabusBadge source={ncert.source} lastUpdated={ncert.lastUpdated} />
          <p className="text-[11px] text-white/40 mt-1.5">Syllabus sourced from NCERT official curriculum. Local data used as fallback.</p>
        </div>
      )}

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <input type="text" placeholder="Search chapters..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none text-sm bg-white/5 text-white placeholder:text-white/30" />
        </div>
        <button onClick={() => {
          if (allSelected) {
            filtered.forEach(ch => {
              if (onboarding.selectedChapters.includes(ch.id)) toggleChapter(ch.id);
            });
          } else {
            filtered.forEach(ch => {
              if (!onboarding.selectedChapters.includes(ch.id)) toggleChapter(ch.id);
            });
          }
        }} className="px-4 py-3 rounded-xl border border-white/10 text-sm font-medium hover:bg-white/10 whitespace-nowrap text-white/70">
          {allSelected ? "Clear All" : "Select All"}
        </button>
      </div>

      <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
        {filtered.map(ch => {
          const selected = onboarding.selectedChapters.includes(ch.id);
          return (
            <button key={ch.id} onClick={() => toggleChapter(ch.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${selected ? "border-purple-500 bg-purple-500/20" : "border-white/10 hover:border-white/20 bg-white/5"}`}>
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 ${selected ? "border-purple-500 bg-purple-500" : "border-white/20"}`}>
                {selected && <Check className="w-4 h-4 text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white text-sm">Chapter {ch.chapterNumber} — {ch.name}</div>
                <div className="text-xs text-white/50 mt-0.5">{ch.topicCount} topics · {ch.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ====== STEP 4: PREPARATION STATUS ======
function StepPreparation() {
  const { onboarding, setChapterStatus, setTopicStatus } = useStore();
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const chapters = onboarding.selectedSubject ? getChapters(onboarding.selectedSubject, onboarding.selectedClass ?? undefined) : [];
  const selectedChapters = chapters.filter(ch => onboarding.selectedChapters.includes(ch.id));

  const statusColors: Record<string, string> = {
    prepared: "border-emerald-500 bg-emerald-500/20 text-emerald-400",
    partial: "border-yellow-500 bg-yellow-500/20 text-yellow-400",
    not_prepared: "border-red-500 bg-red-500/20 text-red-400",
  };

  const topicStatusColors: Record<string, string> = {
    done: "border-emerald-500 bg-emerald-500/20 text-emerald-400",
    partial: "border-yellow-500 bg-yellow-500/20 text-yellow-400",
    not_done: "border-red-500 bg-red-500/20 text-red-400",
    unknown: "border-white/20 bg-white/5 text-white/50",
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">How prepared are you?</h2>
      <p className="text-white/60 mb-8">For each chapter, select your preparation level. For partial chapters, you can go topic-level.</p>

      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
        {selectedChapters.map(ch => {
          const status = onboarding.chapterStatuses[ch.id] || "not_prepared";
          const isExpanded = expandedChapter === ch.id && status === "partial";
          const topics = onboarding.selectedSubject ? getTopics(onboarding.selectedSubject, ch.id, onboarding.selectedClass ?? undefined) : [];

          return (
            <div key={ch.id} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
              <div className="p-4">
                <div className="font-semibold text-white text-sm mb-3">Chapter {ch.chapterNumber} — {ch.name}</div>
                <div className="flex gap-2">
                  {(["prepared", "partial", "not_prepared"] as const).map(s => (
                    <button key={s} onClick={() => { setChapterStatus(ch.id, s); if (s !== "partial") setExpandedChapter(null); }}
                      className={`flex-1 py-2.5 px-3 rounded-xl border-2 text-xs font-semibold transition-all ${status === s ? statusColors[s] : "border-white/10 text-white/40 hover:border-white/20"}`}>
                      {s === "prepared" ? "🟢 Prepared" : s === "partial" ? "🟡 Partial" : "🔴 Not Prepared"}
                    </button>
                  ))}
                </div>

                {/* One-shot video embed for partial/not prepared chapters */}
                {shouldShowOneShot(status) && onboarding.selectedSubject && (
                  <div className="mt-4">
                    {(() => {
                      const video = getOneShotVideo(onboarding.selectedSubject, ch.id, onboarding.selectedClass ?? undefined);
                      if (!video) return null;
                      return (
                        <div>
                          <p className="text-xs text-white/50 mb-2">Watch one-shot by {video.channel}:</p>
                          <YouTubeEmbed videoId={video.videoId} title={video.title} />
                        </div>
                      );
                    })()}
                  </div>
                )}

                {status === "partial" && (
                  <button onClick={() => setExpandedChapter(isExpanded ? null : ch.id)}
                    className="mt-3 flex items-center gap-1 text-xs text-purple-400 font-medium hover:text-purple-300">
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    {isExpanded ? "Hide topics" : "Select specific topics"}
                  </button>
                )}
              </div>

              {isExpanded && (
                <div className="border-t border-white/10 p-4 bg-white/5 space-y-2">
                  {topics.map(topic => {
                    const tStatus = onboarding.topicStatuses[topic.id] || "not_done";
                    return (
                      <div key={topic.id} className="flex items-center justify-between">
                        <span className="text-xs text-white/70 flex-1">{topic.name}</span>
                        <div className="flex gap-1.5">
                          {(["done", "partial", "not_done", "unknown"] as const).map(ts => (
                            <button key={ts} onClick={() => setTopicStatus(topic.id, ts)}
                              className={`px-2 py-1 rounded-lg text-[10px] font-semibold border transition-all ${tStatus === ts ? topicStatusColors[ts] : "border-white/10 text-white/30 hover:border-white/20"}`}>
                              {ts === "done" ? "✓ Done" : ts === "partial" ? "~ Part" : ts === "unknown" ? "? Skip" : "✗ No"}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ====== STEP 5: EXAM DATE ======
function StepExamDate() {
  const { onboarding, setExamDate } = useStore();
  const today = new Date().toISOString().split("T")[0];

  const daysRemaining = useMemo(() => {
    if (!onboarding.examDate) return 0;
    const now = new Date();
    const exam = new Date(onboarding.examDate);
    return Math.max(0, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  }, [onboarding.examDate]);

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">When is your exam?</h2>
      <p className="text-white/60 mb-8">Select your exam date. We&apos;ll calculate the best plan for your remaining time.</p>

      <div className="max-w-md mx-auto space-y-6">
        <div>
          <label className="block text-sm font-semibold text-white/70 mb-2">Exam Date</label>
          <input type="date" min={today} value={onboarding.examDate} onChange={e => setExamDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none text-sm font-medium bg-white/5 text-white" />
        </div>

        {daysRemaining > 0 && (
          <div className={`p-4 rounded-2xl text-center ${daysRemaining <= 2 ? "bg-red-500/10 border border-red-500/30" : daysRemaining <= 5 ? "bg-yellow-500/10 border border-yellow-500/30" : "bg-emerald-500/10 border border-emerald-500/30"}`}>
            <div className={`text-4xl font-black mb-1 ${daysRemaining <= 2 ? "text-red-400" : daysRemaining <= 5 ? "text-yellow-400" : "text-emerald-400"}`}>
              {daysRemaining} DAYS
            </div>
            <div className="text-sm text-white/60">remaining until your exam</div>
            {daysRemaining <= 2 && (
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-red-400 font-medium">
                <AlertTriangle className="w-3 h-3" /> Emergency mode will activate — we&apos;ll focus on high-priority topics only
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ====== STEP 6: STUDY TIME ======
function StepStudyTime() {
  const { onboarding, setDailyHours, setStudyTimeOfDay, setLearningStyle, setBreakPreference } = useStore();
  const hours = [1, 2, 3, 4, 5, 6];
  const times = [
    { value: "morning", label: "Morning", desc: "6 AM – 12 PM" },
    { value: "afternoon", label: "Afternoon", desc: "12 PM – 5 PM" },
    { value: "evening", label: "Evening", desc: "4 PM – 9 PM" },
    { value: "night", label: "Night", desc: "7 PM – 12 AM" },
  ] as const;
  const styles = [
    { value: "video", label: "🎥 Video" },
    { value: "reading", label: "📚 Reading" },
    { value: "questions", label: "✏️ Questions" },
    { value: "mixed", label: "🔄 Mixed" },
  ] as const;
  const breaks = [
    { value: "short_frequent", label: "Short & frequent (5 min every hour)" },
    { value: "longer", label: "Longer breaks (15 min every 2 hours)" },
    { value: "flexible", label: "Flexible" },
  ] as const;

  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">How much can you study daily?</h2>
        <p className="text-white/60 mb-6">Be realistic. We won&apos;t create an impossible schedule.</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-lg">
          {hours.map(h => (
            <button key={h} onClick={() => setDailyHours(h)}
              className={`py-3 rounded-xl border-2 text-center font-bold transition-all ${onboarding.dailyHours === h ? "border-purple-500 bg-purple-500/20 text-white" : "border-white/10 text-white/60 hover:border-white/20"}`}>
              {h}h
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-3">When do you normally study?</h3>
        <div className="grid grid-cols-2 gap-3 max-w-lg">
          {times.map(t => (
            <button key={t.value} onClick={() => setStudyTimeOfDay(t.value)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${onboarding.studyTimeOfDay === t.value ? "border-purple-500 bg-purple-500/20" : "border-white/10 hover:border-white/20 bg-white/5"}`}>
              <div className="font-semibold text-sm text-white">{t.label}</div>
              <div className="text-xs text-white/50">{t.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-3">Preferred learning style</h3>
        <div className="flex gap-3 flex-wrap max-w-lg">
          {styles.map(s => (
            <button key={s.value} onClick={() => setLearningStyle(s.value)}
              className={`px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${onboarding.learningStyle === s.value ? "border-purple-500 bg-purple-500/20 text-white" : "border-white/10 text-white/60 hover:border-white/20"}`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-3">Break preference</h3>
        <div className="space-y-2 max-w-lg">
          {breaks.map(b => (
            <button key={b.value} onClick={() => setBreakPreference(b.value)}
              className={`w-full p-3 rounded-xl border-2 text-left text-sm font-medium transition-all ${onboarding.breakPreference === b.value ? "border-purple-500 bg-purple-500/20 text-white" : "border-white/10 text-white/60 hover:border-white/20"}`}>
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ====== LOADING SCREEN ======
function LoadingScreen() {
  const stages = [
    "Analyzing your syllabus",
    "Mapping your preparation",
    "Finding priority topics",
    "Calculating your available time",
    "Building your routine",
    "Planning revision",
    "Preparing your practice strategy",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0608]">
      <div className="text-center px-8">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-8 animate-pulse">
          <Zap className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-8">Building your exam strategy...</h2>
        <div className="space-y-4 max-w-xs mx-auto">
          {stages.map((stage, i) => (
            <div key={i} className="flex items-center gap-3 opacity-0 animate-fade-in" style={{ animationDelay: `${i * 0.4}s`, animationFillMode: "forwards" }}>
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-purple-400" />
              </div>
              <span className="text-sm text-white/70">{stage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ====== MAIN ONBOARDING PAGE ======
export default function OnboardingPage() {
  const router = useRouter();
  const { onboarding, setOnboardingStep, setCurrentPlan, setLoading, isLoading } = useStore();
  const step = onboarding.currentStep;

  const steps = ["Class", "Subject", "Chapters", "Preparation", "Exam Date", "Study Time"];
  const canNext = useMemo(() => {
    switch (step) {
      case 0: return onboarding.selectedClass !== null;
      case 1: return onboarding.selectedSubject !== null;
      case 2: return onboarding.selectedChapters.length > 0;
      case 3: return onboarding.selectedChapters.length > 0;
      case 4: return onboarding.examDate !== "";
      case 5: return true;
      default: return false;
    }
  }, [step, onboarding]);

  const handleGenerate = async () => {
    setLoading(true);
    // Simulate generation time
    await new Promise(resolve => setTimeout(resolve, 3500));

    const plan = generateStudyPlan({
      subjectId: onboarding.selectedSubject!,
      selectedChapters: onboarding.selectedChapters,
      chapterStatuses: onboarding.chapterStatuses,
      topicStatuses: onboarding.topicStatuses,
      examDate: onboarding.examDate,
      dailyHours: onboarding.dailyHours,
      studyTimeOfDay: onboarding.studyTimeOfDay,
      learningStyle: onboarding.learningStyle,
      breakPreference: onboarding.breakPreference,
      userId: "local-user",
    });

    setCurrentPlan(plan);
    setLoading(false);
    router.push("/dashboard");
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <OnboardingLayout>
      {/* Step indicators */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        {steps.map((s, i) => (
          <div key={i} className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${i === step ? "bg-purple-500/30 text-purple-300 border border-purple-500/50" : i < step ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-white/5 text-white/30 border border-white/10"}`}>
            {i < step ? "✓ " : ""}{s}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>

      {/* Step content */}
      <div className="min-h-[400px]">
        {step === 0 && <StepClass />}
        {step === 1 && <StepSubject />}
        {step === 2 && <StepChapters />}
        {step === 3 && <StepPreparation />}
        {step === 4 && <StepExamDate />}
        {step === 5 && <StepStudyTime />}
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-8">
        {step > 0 && (
          <button onClick={() => setOnboardingStep(step - 1)}
            className="px-6 py-3 rounded-xl border border-white/10 text-white/70 font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        )}
        {step < 5 ? (
          <button onClick={() => canNext && setOnboardingStep(step + 1)} disabled={!canNext}
            className={`flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${canNext ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:opacity-90" : "bg-white/10 text-white/30 cursor-not-allowed"}`}>
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button onClick={handleGenerate}
            className="flex-1 py-3 rounded-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:opacity-90 transition-all flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" /> Generate My Exam Plan
          </button>
        )}
      </div>
    </OnboardingLayout>
  );
}
