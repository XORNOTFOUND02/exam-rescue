// ============================================================
// Exam Rescue — Quiz Generator
// ============================================================

import { Question } from '@/types';

// Demo quiz questions database
const questionBank: Question[] = [
  // Science - Chemical Reactions
  {
    id: 'q1', topicId: 'sci-ch1-t3', chapterId: 'sci-ch1',
    question: 'Which type of reaction is represented by: 2Mg + O₂ → 2MgO?',
    questionType: 'mcq', difficulty: 3,
    options: ['Combination reaction', 'Decomposition reaction', 'Displacement reaction', 'Double displacement reaction'],
    correctAnswer: 'Combination reaction',
    explanation: 'Two elements combine to form a single compound, which is a combination reaction.',
  },
  {
    id: 'q2', topicId: 'sci-ch1-t3', chapterId: 'sci-ch1',
    question: 'What is the chemical equation for rusting of iron?',
    questionType: 'short_answer', difficulty: 4,
    correctAnswer: '4Fe + 3O₂ + xH₂O → 2Fe₂O₃·xH₂O',
    explanation: 'Iron reacts with oxygen and moisture to form hydrated iron(III) oxide (rust).',
  },
  // Science - Electricity
  {
    id: 'q3', topicId: 'sci-ch11-t1', chapterId: 'sci-ch11',
    question: 'What is the SI unit of electric current?',
    questionType: 'mcq', difficulty: 2,
    options: ['Volt', 'Ohm', 'Ampere', 'Watt'],
    correctAnswer: 'Ampere',
    explanation: 'Ampere (A) is the SI unit of electric current, named after André-Marie Ampère.',
  },
  {
    id: 'q4', topicId: 'sci-ch11-t1', chapterId: 'sci-ch11',
    question: 'State Ohm\'s Law.',
    questionType: 'short_answer', difficulty: 3,
    correctAnswer: 'The current through a conductor is directly proportional to the potential difference across it, provided the temperature remains constant. V = IR',
    explanation: 'Ohm\'s Law states V = IR, where V is voltage, I is current, and R is resistance.',
  },
  {
    id: 'q5', topicId: 'sci-ch11-t2', chapterId: 'sci-ch11',
    question: 'Two resistors of 4Ω and 6Ω are connected in series. What is the total resistance?',
    questionType: 'numerical', difficulty: 4,
    correctAnswer: '10Ω',
    explanation: 'In series, R_total = R₁ + R₂ = 4 + 6 = 10Ω',
  },
  // Mathematics - Quadratic Equations
  {
    id: 'q6', topicId: 'math-ch4-t3', chapterId: 'math-ch4',
    question: 'The roots of the equation x² - 5x + 6 = 0 are:',
    questionType: 'mcq', difficulty: 3,
    options: ['2 and 3', '1 and 6', '-2 and -3', '-1 and -6'],
    correctAnswer: '2 and 3',
    explanation: 'Factorizing: (x-2)(x-3) = 0, so x = 2 or x = 3',
  },
  {
    id: 'q7', topicId: 'math-ch4-t4', chapterId: 'math-ch4',
    question: 'If the discriminant of a quadratic equation is zero, the equation has:',
    questionType: 'mcq', difficulty: 3,
    options: ['Two distinct real roots', 'Two equal real roots', 'No real roots', 'One imaginary root'],
    correctAnswer: 'Two equal real roots',
    explanation: 'When D = b² - 4ac = 0, the quadratic equation has two equal real roots.',
  },
  {
    id: 'q8', topicId: 'math-ch4-t5', chapterId: 'math-ch4',
    question: 'A rectangular garden is 5m longer than it is wide. If its area is 300 m², find its dimensions.',
    questionType: 'numerical', difficulty: 6,
    correctAnswer: 'Width = 15m, Length = 20m',
    explanation: 'Let width = x. Then x(x+5) = 300 → x² + 5x - 300 = 0 → (x+20)(x-15) = 0 → x = 15',
  },
  // Mathematics - Trigonometry
  {
    id: 'q9', topicId: 'math-ch8-t2', chapterId: 'math-ch8',
    question: 'What is the value of sin 60°?',
    questionType: 'mcq', difficulty: 2,
    options: ['1/2', '√3/2', '1/√2', '1'],
    correctAnswer: '√3/2',
    explanation: 'sin 60° = √3/2. This is a standard trigonometric value that should be memorized.',
  },
  {
    id: 'q10', topicId: 'math-ch8-t3', chapterId: 'math-ch8',
    question: 'Prove that sin²θ + cos²θ = 1.',
    questionType: 'short_answer', difficulty: 5,
    correctAnswer: 'Consider a right triangle with hypotenuse 1. By Pythagoras theorem, sin²θ + cos²θ = (opposite/hypotenuse)² + (adjacent/hypotenuse)² = (a² + b²)/c² = c²/c² = 1',
    explanation: 'This fundamental identity follows from the Pythagorean theorem applied to a right triangle.',
  },
  // Science - Light
  {
    id: 'q11', topicId: 'sci-ch9-t1', chapterId: 'sci-ch9',
    question: 'The angle of incidence is equal to the angle of reflection. This is the law of:',
    questionType: 'mcq', difficulty: 2,
    options: ['Refraction', 'Reflection', 'Diffraction', 'Polarization'],
    correctAnswer: 'Reflection',
    explanation: 'The first law of reflection states that the angle of incidence equals the angle of reflection.',
  },
  // Social Science
  {
    id: 'q12', topicId: 'ss-hist-ch2-t2', chapterId: 'ss-hist-ch2',
    question: 'Who led the Non-Cooperation Movement in India?',
    questionType: 'mcq', difficulty: 2,
    options: ['Jawaharlal Nehru', 'Subhas Chandra Bose', 'Mahatma Gandhi', 'B.R. Ambedkar'],
    correctAnswer: 'Mahatma Gandhi',
    explanation: 'Mahatma Gandhi launched the Non-Cooperation Movement in 1920 as a major part of the Indian independence struggle.',
  },
  {
    id: 'q13', topicId: 'ss-eco-ch3-t2', chapterId: 'ss-eco-ch3',
    question: 'What is the difference between formal and informal sources of credit?',
    questionType: 'short_answer', difficulty: 4,
    correctAnswer: 'Formal sources include banks and cooperatives regulated by RBI. Informal sources include moneylenders, traders, and relatives who are not regulated.',
    explanation: 'Understanding the difference helps students appreciate the importance of formal banking systems.',
  },
];

/**
 * Generate a quiz for a given set of topic IDs
 */
export function generateQuiz(
  topicIds: string[],
  questionCount: number = 5
): Question[] {
  const available = questionBank.filter(q => topicIds.includes(q.topicId));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(questionCount, shuffled.length));
}

/**
 * Generate a quiz for a specific topic
 */
export function generateTopicQuiz(topicId: string): Question[] {
  return generateQuiz([topicId], 5);
}

/**
 * Generate a mixed quiz for multiple topics
 */
export function generateMixedQuiz(topicIds: string[]): Question[] {
  return generateQuiz(topicIds, 10);
}

/**
 * Calculate quiz results
 */
export function calculateQuizResults(
  questions: Question[],
  answers: Record<string, string>
): { score: number; total: number; percentage: number; topicBreakdown: Record<string, { correct: number; total: number }> } {
  let score = 0;
  const topicBreakdown: Record<string, { correct: number; total: number }> = {};

  for (const q of questions) {
    if (!topicBreakdown[q.topicId]) {
      topicBreakdown[q.topicId] = { correct: 0, total: 0 };
    }
    topicBreakdown[q.topicId].total++;

    const userAnswer = answers[q.id] || '';
    if (userAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
      score++;
      topicBreakdown[q.topicId].correct++;
    }
  }

  return {
    score,
    total: questions.length,
    percentage: Math.round((score / questions.length) * 100),
    topicBreakdown,
  };
}

export { questionBank };
