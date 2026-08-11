"use client";

import { useState } from "react";
import { Sparkles, Loader2, RefreshCw, CheckCircle2, AlertTriangle, Lightbulb, Target } from "lucide-react";
import { useStore } from "@/store/useStore";

interface Recommendations {
  priorityChapters: string[];
  timeAllocation: Record<string, string>;
  weakAreas: string[];
  strongAreas: string[];
  dailyStrategy: string;
  examTips: string[];
  confidenceMessage: string;
}

export default function PlanOptimizer() {
  const { onboarding, quizAttempts } = useStore();
  const [recommendations, setRecommendations] = useState<Recommendations | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOptimize = async () => {
    setIsLoading(true);
    setError("");

    // Collect weak topics
    const weakTopics = Object.entries(onboarding.topicStatuses)
      .filter(([, status]) => status === "not_done" || status === "partial")
      .map(([id]) => id);

    // Collect quiz scores
    const quizScores = quizAttempts.map(a => ({
      topicId: a.topicId,
      score: a.score,
      total: a.totalQuestions,
    }));

    const examDate = new Date(onboarding.examDate);
    const now = new Date();
    const daysRemaining = Math.max(1, Math.ceil((examDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

    try {
      const res = await fetch("/api/ai/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: onboarding.selectedSubject,
          chapters: onboarding.selectedChapters,
          chapterStatuses: onboarding.chapterStatuses,
          topicStatuses: onboarding.topicStatuses,
          daysRemaining,
          dailyHours: onboarding.dailyHours,
          quizScores,
          weakTopics,
        }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setRecommendations(data.recommendations);
      }
    } catch {
      setError("Failed to get AI recommendations. Check your API key.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {!recommendations && (
        <button
          onClick={handleOptimize}
          disabled={isLoading}
          className="w-full p-4 rounded-2xl border-2 border-dashed border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all flex items-center justify-center gap-3 text-purple-700 font-bold"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              AI is analyzing your progress...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Get AI-Powered Study Recommendations
            </>
          )}
        </button>
      )}

      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">{error}</div>
      )}

      {recommendations && (
        <div className="space-y-4">
          {/* Confidence Message */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
            <p className="text-sm font-medium text-purple-800">{recommendations.confidenceMessage}</p>
          </div>

          {/* Priority Chapters */}
          {recommendations.priorityChapters.length > 0 && (
            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-red-500" />
                <h4 className="font-bold text-gray-900 text-sm">Priority Chapters</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {recommendations.priorityChapters.map((ch, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">{ch}</span>
                ))}
              </div>
            </div>
          )}

          {/* Weak Areas */}
          {recommendations.weakAreas.length > 0 && (
            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <h4 className="font-bold text-gray-900 text-sm">Needs Attention</h4>
              </div>
              <ul className="space-y-1">
                {recommendations.weakAreas.map((area, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span> {area}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Strong Areas */}
          {recommendations.strongAreas.length > 0 && (
            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <h4 className="font-bold text-gray-900 text-sm">Strong Areas</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {recommendations.strongAreas.map((area, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">{area}</span>
                ))}
              </div>
            </div>
          )}

          {/* Daily Strategy */}
          {recommendations.dailyStrategy && (
            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <h4 className="font-bold text-gray-900 text-sm">Daily Strategy</h4>
              </div>
              <p className="text-sm text-gray-700">{recommendations.dailyStrategy}</p>
            </div>
          )}

          {/* Exam Tips */}
          {recommendations.examTips.length > 0 && (
            <div className="card">
              <h4 className="font-bold text-gray-900 text-sm mb-3">CBSE Exam Tips</h4>
              <ul className="space-y-2">
                {recommendations.examTips.map((tip, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">{i + 1}.</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Refresh */}
          <button onClick={handleOptimize} disabled={isLoading}
            className="w-full p-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4" /> Refresh Recommendations
          </button>
        </div>
      )}
    </div>
  );
}
