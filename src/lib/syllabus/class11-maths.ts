// ============================================================
// Exam Rescue — Class 11 Maths Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const mathsSubject: Subject = {
  id: 'maths',
  classLevelId: 11,
  name: 'Mathematics',
  icon: '📐',
  color: '#8b5cf6',
};

export const mathsChapters: Chapter[] = [
  { id: 'math-ch1', subjectId: 'maths', chapterNumber: 1, name: 'Sets', description: 'Set theory, Venn diagrams', topicCount: 3 },
  { id: 'math-ch2', subjectId: 'maths', chapterNumber: 2, name: 'Relations and Functions', description: 'Types of relations and functions', topicCount: 4 },
  { id: 'math-ch3', subjectId: 'maths', chapterNumber: 3, name: 'Trigonometric Functions', description: 'Ratios, identities, graphs', topicCount: 4 },
  { id: 'math-ch4', subjectId: 'maths', chapterNumber: 4, name: 'Principle of Mathematical Induction', description: 'PMI proof technique', topicCount: 2 },
  { id: 'math-ch5', subjectId: 'maths', chapterNumber: 5, name: 'Complex Numbers', description: 'Argand plane, modulus', topicCount: 3 },
  { id: 'math-ch6', subjectId: 'maths', chapterNumber: 6, name: 'Linear Inequalities', description: 'Solving and graphing inequalities', topicCount: 3 },
  { id: 'math-ch7', subjectId: 'maths', chapterNumber: 7, name: 'Permutations and Combinations', description: 'Counting principles', topicCount: 4 },
  { id: 'math-ch8', subjectId: 'maths', chapterNumber: 8, name: 'Binomial Theorem', description: 'General term, middle term', topicCount: 3 },
  { id: 'math-ch9', subjectId: 'maths', chapterNumber: 9, name: 'Sequences and Series', description: 'AP, GP, HP, special series', topicCount: 4 },
  { id: 'math-ch10', subjectId: 'maths', chapterNumber: 10, name: 'Straight Lines', description: 'Slope, equations, distance', topicCount: 4 },
  { id: 'math-ch11', subjectId: 'maths', chapterNumber: 11, name: 'Conic Sections', description: 'Circle, parabola, ellipse, hyperbola', topicCount: 4 },
  { id: 'math-ch12', subjectId: 'maths', chapterNumber: 12, name: 'Introduction to 3D Geometry', description: 'Direction cosines, line equations', topicCount: 3 },
  { id: 'math-ch13', subjectId: 'maths', chapterNumber: 13, name: 'Limits and Derivatives', description: 'First principles, rules', topicCount: 4 },
  { id: 'math-ch14', subjectId: 'maths', chapterNumber: 14, name: 'Mathematical Reasoning', description: 'Statements, tautology, contradiction', topicCount: 3 },
  { id: 'math-ch15', subjectId: 'maths', chapterNumber: 15, name: 'Statistics', description: 'Mean, variance, standard deviation', topicCount: 3 },
  { id: 'math-ch16', subjectId: 'maths', chapterNumber: 16, name: 'Probability', description: 'Axiomatic approach, conditional probability', topicCount: 4 },
];

export const mathsTopics: Record<string, Topic[]> = {
  'math-ch1': [
    { id: 'math-ch1-t1', chapterId: 'math-ch1', name: 'Set Operations', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'math-ch1-t2', chapterId: 'math-ch1', name: 'Venn Diagrams', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'math-ch1-t3', chapterId: 'math-ch1', name: 'Power Set', importance: 7, difficulty: 5, estimatedMinutes: 15 },
  ],
  'math-ch2': [
    { id: 'math-ch2-t1', chapterId: 'math-ch2', name: 'Types of Relations', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch2-t2', chapterId: 'math-ch2', name: 'Types of Functions', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch2-t3', chapterId: 'math-ch2', name: 'Composition of Functions', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch2-t4', chapterId: 'math-ch2', name: 'Invertible Functions', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch3': [
    { id: 'math-ch3-t1', chapterId: 'math-ch3', name: 'Trigonometric Ratios', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch3-t2', chapterId: 'math-ch3', name: 'Trigonometric Identities', importance: 10, difficulty: 6, estimatedMinutes: 30 },
    { id: 'math-ch3-t3', chapterId: 'math-ch3', name: 'Graphs of Trig Functions', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch3-t4', chapterId: 'math-ch3', name: 'General Solutions', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'math-ch4': [
    { id: 'math-ch4-t1', chapterId: 'math-ch4', name: 'Principle of MI', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch4-t2', chapterId: 'math-ch4', name: 'PMI Applications', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch5': [
    { id: 'math-ch5-t1', chapterId: 'math-ch5', name: 'Complex Number Algebra', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch5-t2', chapterId: 'math-ch5', name: 'Argand Plane', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch5-t3', chapterId: 'math-ch5', name: 'Polar Form', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch6': [
    { id: 'math-ch6-t1', chapterId: 'math-ch6', name: 'Linear Inequalities', importance: 7, difficulty: 4, estimatedMinutes: 15 },
    { id: 'math-ch6-t2', chapterId: 'math-ch6', name: 'Graphical Solutions', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch6-t3', chapterId: 'math-ch6', name: 'Systems of Inequalities', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch7': [
    { id: 'math-ch7-t1', chapterId: 'math-ch7', name: 'Fundamental Counting', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch7-t2', chapterId: 'math-ch7', name: 'Permutations', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch7-t3', chapterId: 'math-ch7', name: 'Combinations', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch7-t4', chapterId: 'math-ch7', name: 'Applications', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'math-ch8': [
    { id: 'math-ch8-t1', chapterId: 'math-ch8', name: 'Binomial Expansion', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch8-t2', chapterId: 'math-ch8', name: 'General Term', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch8-t3', chapterId: 'math-ch8', name: 'Middle Term', importance: 8, difficulty: 5, estimatedMinutes: 15 },
  ],
  'math-ch9': [
    { id: 'math-ch9-t1', chapterId: 'math-ch9', name: 'Arithmetic Progression', importance: 10, difficulty: 5, estimatedMinutes: 25 },
    { id: 'math-ch9-t2', chapterId: 'math-ch9', name: 'Geometric Progression', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch9-t3', chapterId: 'math-ch9', name: 'Special Series', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch9-t4', chapterId: 'math-ch9', name: 'Sigma Notation', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'math-ch10': [
    { id: 'math-ch10-t1', chapterId: 'math-ch10', name: 'Slope of a Line', importance: 9, difficulty: 4, estimatedMinutes: 15 },
    { id: 'math-ch10-t2', chapterId: 'math-ch10', name: 'Equations of Lines', importance: 10, difficulty: 5, estimatedMinutes: 25 },
    { id: 'math-ch10-t3', chapterId: 'math-ch10', name: 'Distance and Midpoint', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch10-t4', chapterId: 'math-ch10', name: 'Angle Between Lines', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch11': [
    { id: 'math-ch11-t1', chapterId: 'math-ch11', name: 'Circle', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch11-t2', chapterId: 'math-ch11', name: 'Parabola', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch11-t3', chapterId: 'math-ch11', name: 'Ellipse', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch11-t4', chapterId: 'math-ch11', name: 'Hyperbola', importance: 8, difficulty: 7, estimatedMinutes: 25 },
  ],
  'math-ch12': [
    { id: 'math-ch12-t1', chapterId: 'math-ch12', name: 'Direction Cosines', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch12-t2', chapterId: 'math-ch12', name: 'Line Equations', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch12-t3', chapterId: 'math-ch12', name: 'Plane Introduction', importance: 7, difficulty: 5, estimatedMinutes: 15 },
  ],
  'math-ch13': [
    { id: 'math-ch13-t1', chapterId: 'math-ch13', name: 'Limits', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch13-t2', chapterId: 'math-ch13', name: 'Derivatives', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch13-t3', chapterId: 'math-ch13', name: 'Rules of Differentiation', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch13-t4', chapterId: 'math-ch13', name: 'Applications', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch14': [
    { id: 'math-ch14-t1', chapterId: 'math-ch14', name: 'Statements and Negation', importance: 7, difficulty: 4, estimatedMinutes: 15 },
    { id: 'math-ch14-t2', chapterId: 'math-ch14', name: 'Logical Connectives', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch14-t3', chapterId: 'math-ch14', name: 'Tautology and Contradiction', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'math-ch15': [
    { id: 'math-ch15-t1', chapterId: 'math-ch15', name: 'Mean and Variance', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch15-t2', chapterId: 'math-ch15', name: 'Standard Deviation', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch15-t3', chapterId: 'math-ch15', name: 'Frequency Distributions', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'math-ch16': [
    { id: 'math-ch16-t1', chapterId: 'math-ch16', name: 'Probability Approaches', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch16-t2', chapterId: 'math-ch16', name: 'Conditional Probability', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch16-t3', chapterId: 'math-ch16', name: 'Bayes\' Theorem', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch16-t4', chapterId: 'math-ch16', name: 'Random Variables', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
};
