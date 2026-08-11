// ============================================================
// Exam Rescue — Class 12 Maths Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const mathsSubject: Subject = {
  id: 'maths',
  classLevelId: 12,
  name: 'Mathematics',
  icon: '📐',
  color: '#8b5cf6',
};

export const mathsChapters: Chapter[] = [
  { id: 'math-ch1', subjectId: 'maths', chapterNumber: 1, name: 'Relations and Functions', description: 'Types of relations and functions, composition', topicCount: 3 },
  { id: 'math-ch2', subjectId: 'maths', chapterNumber: 2, name: 'Inverse Trigonometric Functions', description: 'Domain, range, properties', topicCount: 3 },
  { id: 'math-ch3', subjectId: 'maths', chapterNumber: 3, name: 'Matrices', description: 'Types, operations, transpose, inverse', topicCount: 4 },
  { id: 'math-ch4', subjectId: 'maths', chapterNumber: 4, name: 'Determinants', description: 'Properties, Cramer\'s rule, area', topicCount: 4 },
  { id: 'math-ch5', subjectId: 'maths', chapterNumber: 5, name: 'Continuity and Differentiability', description: 'Limits, derivatives, chain rule', topicCount: 4 },
  { id: 'math-ch6', subjectId: 'maths', chapterNumber: 6, name: 'Applications of Derivatives', description: 'Rate of change, maxima/minima, tangents', topicCount: 4 },
  { id: 'math-ch7', subjectId: 'maths', chapterNumber: 7, name: 'Integrals', description: 'Integration techniques, definite integrals', topicCount: 4 },
  { id: 'math-ch8', subjectId: 'maths', chapterNumber: 8, name: 'Applications of Integrals', description: 'Area under curves, between curves', topicCount: 3 },
  { id: 'math-ch9', subjectId: 'maths', chapterNumber: 9, name: 'Differential Equations', description: 'Order, degree, formation, solution', topicCount: 4 },
  { id: 'math-ch10', subjectId: 'maths', chapterNumber: 10, name: 'Vector Algebra', description: 'Vectors, dot product, cross product', topicCount: 4 },
  { id: 'math-ch11', subjectId: 'maths', chapterNumber: 11, name: 'Three Dimensional Geometry', description: 'Lines and planes in 3D space', topicCount: 4 },
  { id: 'math-ch12', subjectId: 'maths', chapterNumber: 12, name: 'Linear Programming', description: 'Graphical method, feasible region', topicCount: 3 },
  { id: 'math-ch13', subjectId: 'maths', chapterNumber: 13, name: 'Probability', description: 'Conditional probability, Bayes\' theorem, distributions', topicCount: 4 },
];

export const mathsTopics: Record<string, Topic[]> = {
  'math-ch1': [
    { id: 'math-ch1-t1', chapterId: 'math-ch1', name: 'Types of Relations', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch1-t2', chapterId: 'math-ch1', name: 'Types of Functions', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch1-t3', chapterId: 'math-ch1', name: 'Composition and Invertibility', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch2': [
    { id: 'math-ch2-t1', chapterId: 'math-ch2', name: 'Domain and Range', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch2-t2', chapterId: 'math-ch2', name: 'Properties of Inverse Trig', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch2-t3', chapterId: 'math-ch2', name: 'Simplification', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch3': [
    { id: 'math-ch3-t1', chapterId: 'math-ch3', name: 'Matrix Operations', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch3-t2', chapterId: 'math-ch3', name: 'Transpose and Symmetric', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch3-t3', chapterId: 'math-ch3', name: 'Inverse of a Matrix', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch3-t4', chapterId: 'math-ch3', name: 'Elementary Operations', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'math-ch4': [
    { id: 'math-ch4-t1', chapterId: 'math-ch4', name: 'Determinant Properties', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch4-t2', chapterId: 'math-ch4', name: 'Expansion Methods', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch4-t3', chapterId: 'math-ch4', name: 'Cramer\'s Rule', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch4-t4', chapterId: 'math-ch4', name: 'Consistency of Equations', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'math-ch5': [
    { id: 'math-ch5-t1', chapterId: 'math-ch5', name: 'Continuity', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch5-t2', chapterId: 'math-ch5', name: 'Differentiability', importance: 10, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch5-t3', chapterId: 'math-ch5', name: 'Chain Rule', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch5-t4', chapterId: 'math-ch5', name: 'Implicit Differentiation', importance: 8, difficulty: 7, estimatedMinutes: 20 },
  ],
  'math-ch6': [
    { id: 'math-ch6-t1', chapterId: 'math-ch6', name: 'Rate of Change', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch6-t2', chapterId: 'math-ch6', name: 'Increasing and Decreasing', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch6-t3', chapterId: 'math-ch6', name: 'Maxima and Minima', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch6-t4', chapterId: 'math-ch6', name: 'Tangents and Normals', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'math-ch7': [
    { id: 'math-ch7-t1', chapterId: 'math-ch7', name: 'Basic Integration', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch7-t2', chapterId: 'math-ch7', name: 'Substitution Method', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch7-t3', chapterId: 'math-ch7', name: 'Partial Fractions', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch7-t4', chapterId: 'math-ch7', name: 'Definite Integrals', importance: 10, difficulty: 7, estimatedMinutes: 30 },
  ],
  'math-ch8': [
    { id: 'math-ch8-t1', chapterId: 'math-ch8', name: 'Area Under Curves', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch8-t2', chapterId: 'math-ch8', name: 'Area Between Curves', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch8-t3', chapterId: 'math-ch8', name: 'Applications', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch9': [
    { id: 'math-ch9-t1', chapterId: 'math-ch9', name: 'Order and Degree', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch9-t2', chapterId: 'math-ch9', name: 'Formation of DE', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch9-t3', chapterId: 'math-ch9', name: 'Variable Separable', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch9-t4', chapterId: 'math-ch9', name: 'Linear Differential Equations', importance: 10, difficulty: 7, estimatedMinutes: 30 },
  ],
  'math-ch10': [
    { id: 'math-ch10-t1', chapterId: 'math-ch10', name: 'Vector Operations', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'math-ch10-t2', chapterId: 'math-ch10', name: 'Dot Product', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch10-t3', chapterId: 'math-ch10', name: 'Cross Product', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch10-t4', chapterId: 'math-ch10', name: 'Section Formula', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'math-ch11': [
    { id: 'math-ch11-t1', chapterId: 'math-ch11', name: 'Direction Cosines', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch11-t2', chapterId: 'math-ch11', name: 'Line in 3D', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch11-t3', chapterId: 'math-ch11', name: 'Plane Equations', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch11-t4', chapterId: 'math-ch11', name: 'Shortest Distance', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'math-ch12': [
    { id: 'math-ch12-t1', chapterId: 'math-ch12', name: 'Graphical Method', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch12-t2', chapterId: 'math-ch12', name: 'Feasible Region', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch12-t3', chapterId: 'math-ch12', name: 'Optimization', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'math-ch13': [
    { id: 'math-ch13-t1', chapterId: 'math-ch13', name: 'Conditional Probability', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch13-t2', chapterId: 'math-ch13', name: 'Bayes\' Theorem', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch13-t3', chapterId: 'math-ch13', name: 'Random Variables', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch13-t4', chapterId: 'math-ch13', name: 'Binomial Distribution', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
};
