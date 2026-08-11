"use client";

import { useState, useEffect } from "react";
import { useStore } from "@/store/useStore";
import { Clock, AlertTriangle, CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

interface MockQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  marks: number;
  explanation: string;
}

const MOCK_QUESTIONS: Record<string, MockQuestion[]> = {
  science: [
    { id: "mq1", question: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], correctIndex: 1, marks: 1, explanation: "Newton (N) is the SI unit of force. 1N = 1kg x 1m/s2." },
    { id: "mq2", question: "Which organelle is called the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], correctIndex: 2, marks: 1, explanation: "Mitochondria produces ATP through cellular respiration." },
    { id: "mq3", question: "What is the formula for kinetic energy?", options: ["KE = mgh", "KE = 1/2 mv2", "KE = Fd", "KE = Pt"], correctIndex: 1, marks: 1, explanation: "Kinetic Energy = 1/2 x mass x velocity squared." },
    { id: "mq4", question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctIndex: 2, marks: 1, explanation: "Nitrogen makes up about 78% of Earth's atmosphere." },
    { id: "mq5", question: "What is the pH range of acids?", options: ["0-7", "7-14", "7", "0-14"], correctIndex: 0, marks: 1, explanation: "Acids have pH less than 7 (0-7 range)." },
    { id: "mq6", question: "Newton's first law is also known as:", options: ["Law of acceleration", "Law of inertia", "Law of reaction", "Law of gravitation"], correctIndex: 1, marks: 1, explanation: "Newton's first law is the law of inertia." },
    { id: "mq7", question: "What type of reaction is: 2H2 + O2 -> 2H2O?", options: ["Decomposition", "Displacement", "Combination", "Double displacement"], correctIndex: 2, marks: 1, explanation: "Two substances combine to form one product - combination reaction." },
    { id: "mq8", question: "The SI unit of electric current is:", options: ["Volt", "Ohm", "Ampere", "Watt"], correctIndex: 2, marks: 1, explanation: "Ampere (A) is the SI unit of electric current." },
    { id: "mq9", question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctIndex: 1, marks: 1, explanation: "Mars appears red due to iron oxide on its surface." },
    { id: "mq10", question: "What is the acceleration due to gravity?", options: ["8.9 m/s2", "9.8 m/s2", "10.8 m/s2", "6.7 m/s2"], correctIndex: 1, marks: 1, explanation: "g = 9.8 m/s2 on Earth's surface." },
  ],
  mathematics: [
    { id: "mq1", question: "What is the value of root 2?", options: ["1.414", "1.732", "2.236", "1.618"], correctIndex: 0, marks: 1, explanation: "sqrt(2) = 1.4142..." },
    { id: "mq2", question: "What is the sum of angles in a triangle?", options: ["90", "180", "270", "360"], correctIndex: 1, marks: 1, explanation: "Sum of angles in any triangle = 180 degrees." },
    { id: "mq3", question: "What is the formula for the area of a circle?", options: ["2*pi*r", "pi*r2", "pi*d", "4*pi*r2"], correctIndex: 1, marks: 1, explanation: "Area of circle = pi * radius squared." },
    { id: "mq4", question: "If x2 - 5x + 6 = 0, what are the roots?", options: ["2, 3", "1, 6", "-2, -3", "1, 5"], correctIndex: 0, marks: 1, explanation: "x2 - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or x = 3." },
    { id: "mq5", question: "What is the HCF of 12 and 18?", options: ["3", "6", "12", "18"], correctIndex: 1, marks: 1, explanation: "Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. HCF = 6." },
  ],
};

export default function MockTest() {
  const { onboarding, addQuizAttempt } = useStore();
  const [phase, setPhase] = useState<"select" | "quiz" | "results">("select");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [questions, setQuestions] = useState<MockQuestion[]>([]);

  const startTest = () => {
    const qs = MOCK_QUESTIONS[onboarding.selectedSubject || "science"] || MOCK_QUESTIONS.science;
    setQuestions(qs);
    setTimeLeft(qs.length * 60); // 1 min per question
    setCurrentQ(0);
    setAnswers({});
    setPhase("quiz");
  };

  useEffect(() => {
    if (phase !== "quiz" || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(t => { if (t <= 1) { setPhase("results"); return 0; } return t - 1; }), 1000);
    return () => clearInterval(timer);
  }, [phase, timeLeft]);

  const handleAnswer = (qId: string, optIdx: number) => {
    setAnswers({ ...answers, [qId]: optIdx });
    if (currentQ < questions.length - 1) setCurrentQ(currentQ + 1);
    else setPhase("results");
  };

  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctIndex ? q.marks : 0), 0);
  const total = questions.reduce((acc, q) => acc + q.marks, 0);
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  if (phase === "select") {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
          <Trophy className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Mock Test</h2>
          <p className="text-white/50 mb-6">Test your knowledge with timed questions. 1 minute per question.</p>
          <button onClick={startTest} className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg transition-all">
            Start Test
          </button>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
          <div className={`text-6xl font-black mb-4 ${percentage >= 80 ? "text-emerald-400" : percentage >= 50 ? "text-yellow-400" : "text-red-400"}`}>{percentage}%</div>
          <div className="text-xl text-white mb-2">{score}/{total} marks</div>
          <div className="text-sm text-white/50 mb-6">{percentage >= 80 ? "Excellent! Keep it up!" : percentage >= 50 ? "Good effort! Review weak areas." : "Keep practicing! You'll improve."}</div>
        </div>
        <div className="space-y-3">
          {questions.map((q, i) => (
            <div key={q.id} className={`p-4 rounded-xl border ${answers[q.id] === q.correctIndex ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"}`}>
              <div className="flex items-start gap-3">
                {answers[q.id] === q.correctIndex ? <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-400 mt-0.5" />}
                <div>
                  <p className="text-sm font-semibold text-white">{q.question}</p>
                  <p className="text-xs text-white/50 mt-1">{q.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setPhase("select")} className="w-full py-3 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
          <RotateCcw className="w-4 h-4" /> Retake Test
        </button>
      </div>
    );
  }

  const q = questions[currentQ];
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/50">Question {currentQ + 1}/{questions.length}</span>
        <span className={`text-sm font-mono font-bold ${timeLeft < 30 ? "text-red-400" : "text-white"}`}><Clock className="w-4 h-4 inline mr-1" />{formatTime(timeLeft)}</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-purple-500 rounded-full transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
      </div>
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <p className="text-lg font-semibold text-white mb-4">{q.question}</p>
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(q.id, i)}
              className={`w-full p-4 rounded-xl border text-left transition-all hover:scale-[1.02] ${answers[q.id] === i ? "border-purple-500 bg-purple-500/20" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
              <span className="text-white">{opt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
