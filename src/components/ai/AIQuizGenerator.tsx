"use client";

import { useState, useMemo } from "react";
import { Brain, CheckCircle2, XCircle, RotateCcw, Loader2, Sparkles } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getChapters, getTopics } from "@/lib/syllabus";
import { Question } from "@/types";

export default function AIQuizGenerator() {
  const { onboarding, addQuizAttempt, adjustPlanBasedOnQuiz } = useStore();
  const [phase, setPhase] = useState<"select" | "generating" | "quiz" | "results">("select");
  const [selectedChapter, setSelectedChapter] = useState<{ id: string; name: string } | null>(null);
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState("");

  const chapters = onboarding.selectedSubject ? getChapters(onboarding.selectedSubject) : [];
  const selectedChapters = chapters.filter(ch => onboarding.selectedChapters.includes(ch.id));

  const handleGenerate = async (chapterId: string, chapterName: string) => {
    setSelectedChapter({ id: chapterId, name: chapterName });
    setPhase("generating");
    setError("");

    try {
      const res = await fetch("/api/ai/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: onboarding.selectedSubject,
          chapter: chapterName,
          questionCount: 5,
          questionType: "mixed",
        }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setPhase("select");
        return;
      }

      setQuiz(data.questions);
      setCurrentQ(0);
      setAnswers({});
      setPhase("quiz");
    } catch {
      setError("Failed to generate quiz. Check your AI API key.");
      setPhase("select");
    }
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleFinish = () => {
    let score = 0;
    for (const q of quiz) {
      const userAns = answers[q.id] || "";
      if (userAns.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
        score++;
      }
    }

    addQuizAttempt({
      id: `ai-qa-${Date.now()}`,
      userId: "local-user",
      topicId: selectedChapter?.id || "",
      questions: quiz,
      answers,
      score,
      totalQuestions: quiz.length,
      timeTaken: 0,
      completedAt: new Date().toISOString(),
    });

    if (selectedChapter) {
      adjustPlanBasedOnQuiz(selectedChapter.id, score, quiz.length);
    }

    setPhase("results");
  };

  // SELECT PHASE
  if (phase === "select") {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <h3 className="font-bold text-gray-900">AI-Powered Quiz</h3>
        </div>
        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">{error}</div>
        )}
        <p className="text-sm text-gray-500">Pick a chapter — AI will generate fresh questions every time.</p>
        <div className="space-y-2 max-h-[50vh] overflow-y-auto">
          {selectedChapters.map(ch => (
            <button key={ch.id} onClick={() => handleGenerate(ch.id, ch.name)}
              className="w-full flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all text-left group">
              <Brain className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">{ch.name}</div>
                <div className="text-xs text-gray-500">AI generates 5 mixed questions</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 font-bold">Generate</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // GENERATING PHASE
  if (phase === "generating") {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="w-10 h-10 text-purple-500 animate-spin mb-4" />
        <h3 className="font-bold text-gray-900 mb-1">AI is creating your quiz...</h3>
        <p className="text-sm text-gray-500">Generating questions for {selectedChapter?.name}</p>
      </div>
    );
  }

  // QUIZ PHASE
  if (phase === "quiz") {
    const question = quiz[currentQ];
    const progress = ((currentQ + 1) / quiz.length) * 100;

    return (
      <div className="space-y-4">
        {/* Progress */}
        <div className="flex items-center justify-between text-sm">
          <span className="font-bold text-gray-900">Question {currentQ + 1}/{quiz.length}</span>
          <span className="text-gray-500">{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Question */}
        <div className="p-5 rounded-2xl bg-white border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              question.questionType === "mcq" ? "bg-blue-100 text-blue-700" :
              question.questionType === "numerical" ? "bg-purple-100 text-purple-700" :
              "bg-emerald-100 text-emerald-700"
            }`}>
              {question.questionType.toUpperCase()}
            </span>
            <span className="text-[10px] text-gray-400">Difficulty: {question.difficulty}/10</span>
          </div>
          <h2 className="text-base font-bold text-gray-900 mb-5">{question.question}</h2>

          {question.questionType === "mcq" && question.options && (
            <div className="space-y-2">
              {question.options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(question.id, opt)}
                  className={`w-full p-3 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                    answers[question.id] === opt
                      ? "border-purple-500 bg-purple-50 text-purple-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold mr-3">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {question.questionType !== "mcq" && (
            <textarea value={answers[question.id] || ""} onChange={e => handleAnswer(question.id, e.target.value)}
              placeholder="Write your answer here..."
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm min-h-[100px] resize-none" />
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          {currentQ > 0 && (
            <button onClick={() => setCurrentQ(prev => prev - 1)}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">
              Previous
            </button>
          )}
          {currentQ < quiz.length - 1 ? (
            <button onClick={() => setCurrentQ(prev => prev + 1)}
              className="flex-1 py-2.5 rounded-xl gradient-primary text-white font-bold text-sm">
              Next
            </button>
          ) : (
            <button onClick={handleFinish}
              className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700">
              Finish Quiz
            </button>
          )}
        </div>
      </div>
    );
  }

  // RESULTS PHASE
  if (phase === "results") {
    const lastAttempt = useStore.getState().quizAttempts[useStore.getState().quizAttempts.length - 1];
    const percentage = lastAttempt ? Math.round((lastAttempt.score / lastAttempt.totalQuestions) * 100) : 0;

    return (
      <div className="text-center py-6 space-y-4">
        <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${
          percentage >= 80 ? "bg-emerald-100" : percentage >= 50 ? "bg-amber-100" : "bg-red-100"
        }`}>
          {percentage >= 80 ? <CheckCircle2 className="w-8 h-8 text-emerald-600" /> :
           percentage >= 50 ? <Brain className="w-8 h-8 text-amber-600" /> :
           <XCircle className="w-8 h-8 text-red-600" />}
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-900">{percentage}%</h3>
          <p className="text-sm text-gray-500">{lastAttempt?.score}/{lastAttempt?.totalQuestions} correct</p>
        </div>
        <p className="text-sm text-gray-600">
          {percentage >= 80 ? "Excellent! You've mastered this chapter." :
           percentage >= 50 ? "Good progress! A bit more practice will help." :
           "This chapter needs more attention. Your plan has been updated."}
        </p>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
        </div>
        <button onClick={() => { setPhase("select"); setSelectedChapter(null); setQuiz([]); }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 font-bold text-sm hover:bg-gray-50">
          <RotateCcw className="w-4 h-4" /> Try Another Chapter
        </button>
      </div>
    );
  }

  return null;
}
