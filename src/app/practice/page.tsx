"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Brain, Trophy, RotateCcw, Target } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getChapters, getTopics } from "@/lib/syllabus";
import { generateQuiz, calculateQuizResults, questionBank } from "@/lib/quiz/generator";
import { Question } from "@/types";

export default function PracticePage() {
  const { currentPlan, onboarding, addQuizAttempt, adjustPlanBasedOnQuiz } = useStore();
  const [phase, setPhase] = useState<"select" | "quiz" | "results">("select");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quiz, setQuiz] = useState<Question[]>([]);

  const chapters = onboarding.selectedSubject ? getChapters(onboarding.selectedSubject, onboarding.selectedClass ?? undefined) : [];
  const selectedChapters = chapters.filter(ch => onboarding.selectedChapters.includes(ch.id));

  // Get available topics with questions
  const availableTopics = useMemo(() => {
    const topics: { id: string; name: string; chapterName: string; hasQuestions: boolean }[] = [];
    for (const ch of selectedChapters) {
      const chTopics = onboarding.selectedSubject ? getTopics(onboarding.selectedSubject, ch.id, onboarding.selectedClass ?? undefined) : [];
      for (const t of chTopics) {
        const hasQ = questionBank.some(q => q.topicId === t.id);
        topics.push({ id: t.id, name: t.name, chapterName: ch.name, hasQuestions: hasQ });
      }
    }
    return topics;
  }, [selectedChapters, onboarding.selectedSubject]);

  const handleStartQuiz = () => {
    if (selectedTopics.length === 0) return;
    const generatedQuiz = generateQuiz(selectedTopics, Math.min(10, selectedTopics.length * 2));
    if (generatedQuiz.length === 0) return;
    setQuiz(generatedQuiz);
    setCurrentQ(0);
    setAnswers({});
    setPhase("quiz");
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleFinish = () => {
    const results = calculateQuizResults(quiz, answers);

    // Add quiz attempt
    addQuizAttempt({
      id: `qa-${Date.now()}`,
      userId: "local-user",
      topicId: selectedTopics[0] || "",
      questions: quiz,
      answers,
      score: results.score,
      totalQuestions: results.total,
      timeTaken: 0,
      completedAt: new Date().toISOString(),
    });

    // Adapt plan for each topic
    for (const [topicId, topicResult] of Object.entries(results.topicBreakdown)) {
      adjustPlanBasedOnQuiz(topicId, topicResult.correct, topicResult.total);
    }

    setPhase("results");
  };

  if (!currentPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-8">
          <Target className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">No plan yet</h2>
          <p className="text-gray-500 text-sm mb-6">Create your plan to start practicing.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-white font-bold text-sm">
            Build My Plan
          </Link>
        </div>
      </div>
    );
  }

  // SELECT PHASE
  if (phase === "select") {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <div className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <Link href="/dashboard" className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Practice & Quiz</h1>
              <p className="text-xs text-gray-500">Test your knowledge on specific topics</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="card mb-6">
            <h3 className="font-bold text-gray-900 mb-2">Select topics to quiz on</h3>
            <p className="text-sm text-gray-500 mb-4">Choose the topics you want to be tested on.</p>
            <div className="space-y-2 max-h-[40vh] overflow-y-auto">
              {availableTopics.map(t => {
                const selected = selectedTopics.includes(t.id);
                return (
                  <button key={t.id} onClick={() => {
                    setSelectedTopics(prev => selected ? prev.filter(id => id !== t.id) : [...prev, t.id]);
                  }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all ${selected ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"}`}>
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 ${selected ? "border-indigo-500 bg-indigo-500" : "border-gray-300"}`}>
                      {selected && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900 truncate">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.chapterName}</div>
                    </div>
                    {t.hasQuestions && <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-bold">Available</span>}
                    {!t.hasQuestions && <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-bold">Soon</span>}
                  </button>
                );
              })}
            </div>
          </div>

          <button onClick={handleStartQuiz} disabled={selectedTopics.length === 0}
            className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${selectedTopics.length > 0 ? "gradient-primary text-white shadow-lg shadow-indigo-200" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            Start Quiz ({selectedTopics.length} topics selected)
          </button>
        </div>
      </div>
    );
  }

  // QUIZ PHASE
  if (phase === "quiz") {
    const question = quiz[currentQ];
    const progress = ((currentQ + 1) / quiz.length) * 100;

    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <div className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-900">Question {currentQ + 1} of {quiz.length}</span>
              <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="card mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${question.questionType === "mcq" ? "bg-blue-100 text-blue-700" : question.questionType === "numerical" ? "bg-purple-100 text-purple-700" : "bg-emerald-100 text-emerald-700"}`}>
                {question.questionType.toUpperCase()}
              </span>
              <span className="text-[10px] text-gray-400">Difficulty: {question.difficulty}/10</span>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-6">{question.question}</h2>

            {question.questionType === "mcq" && question.options && (
              <div className="space-y-3">
                {question.options.map((opt, i) => (
                  <button key={i} onClick={() => handleAnswer(question.id, opt)}
                    className={`w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${answers[question.id] === opt ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-gray-200 hover:border-gray-300"}`}>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold mr-3">{String.fromCharCode(65 + i)}</span>
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {question.questionType !== "mcq" && (
              <textarea value={answers[question.id] || ""} onChange={e => handleAnswer(question.id, e.target.value)}
                placeholder="Write your answer here..."
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm min-h-[120px] resize-none" />
            )}
          </div>

          <div className="flex gap-3">
            {currentQ > 0 && (
              <button onClick={() => setCurrentQ(prev => prev - 1)}
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>
            )}
            {currentQ < quiz.length - 1 ? (
              <button onClick={() => setCurrentQ(prev => prev + 1)}
                className="flex-1 py-3 rounded-xl gradient-primary text-white font-bold flex items-center justify-center gap-2">
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={handleFinish}
                className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
                <Trophy className="w-4 h-4" /> Finish Quiz
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // RESULTS PHASE
  if (phase === "results") {
    const lastAttempt = useStore.getState().quizAttempts[useStore.getState().quizAttempts.length - 1];
    const percentage = lastAttempt ? Math.round((lastAttempt.score / lastAttempt.totalQuestions) * 100) : 0;

    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${percentage >= 80 ? "bg-emerald-100" : percentage >= 50 ? "bg-amber-100" : "bg-red-100"}`}>
              {percentage >= 80 ? <Trophy className="w-10 h-10 text-emerald-600" /> :
                percentage >= 50 ? <Target className="w-10 h-10 text-amber-600" /> :
                <Brain className="w-10 h-10 text-red-600" />}
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              {percentage >= 80 ? "Great Job!" : percentage >= 50 ? "Good Effort!" : "Keep Practicing!"}
            </h1>
            <p className="text-gray-500">
              {percentage >= 80 ? "You're doing really well on these topics." :
                percentage >= 50 ? "Solid foundation. A bit more practice will get you there." :
                "These topics need more attention. Your plan has been updated."}
            </p>
          </div>

          <div className="card mb-6">
            <div className="text-center">
              <div className="text-5xl font-black text-indigo-600 mb-2">{lastAttempt?.score}/{lastAttempt?.totalQuestions}</div>
              <div className="text-sm text-gray-500">Questions Correct</div>
              <div className="mt-4 progress-bar">
                <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
              </div>
              <div className="text-lg font-bold text-gray-900 mt-2">{percentage}% accuracy</div>
            </div>
          </div>

          {percentage < 70 && (
            <div className="card mb-6 bg-amber-50 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-2">Plan Updated</h3>
              <p className="text-sm text-amber-700">
                Your study plan has been automatically adjusted to include more revision and practice for the topics you found challenging.
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <button onClick={() => { setPhase("select"); setSelectedTopics([]); }}
              className="flex-1 py-3 rounded-xl border border-gray-200 font-bold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50">
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
            <Link href="/dashboard" className="flex-1 py-3 rounded-xl gradient-primary text-white font-bold flex items-center justify-center gap-2">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
