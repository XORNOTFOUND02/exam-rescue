// ============================================================
// Exam Rescue — Class 9 Mathematics Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const mathsSubject: Subject = {
  id: 'mathematics',
  classLevelId: 9,
  name: 'Mathematics',
  icon: '📐',
  color: '#6366f1',
};

export const mathsChapters: Chapter[] = [
  { id: 'math-ch1', subjectId: 'mathematics', chapterNumber: 1, name: 'Number Systems', description: 'Real numbers, irrational numbers, number line', topicCount: 4 },
  { id: 'math-ch2', subjectId: 'mathematics', chapterNumber: 2, name: 'Polynomials', description: 'Polynomials in one variable, zeroes, factor theorem', topicCount: 4 },
  { id: 'math-ch3', subjectId: 'mathematics', chapterNumber: 3, name: 'Coordinate Geometry', description: 'Cartesian plane, coordinates of a point', topicCount: 3 },
  { id: 'math-ch4', subjectId: 'mathematics', chapterNumber: 4, name: 'Linear Equations in Two Variables', description: 'Graph of linear equation, equations of lines', topicCount: 4 },
  { id: 'math-ch5', subjectId: 'mathematics', chapterNumber: 5, name: 'Introduction to Euclid\'s Geometry', description: 'Euclid\'s axioms and postulates', topicCount: 3 },
  { id: 'math-ch6', subjectId: 'mathematics', chapterNumber: 6, name: 'Lines and Angles', description: 'Pairs of angles, parallel lines and transversal', topicCount: 4 },
  { id: 'math-ch7', subjectId: 'mathematics', chapterNumber: 7, name: 'Triangles', description: 'Congruence of triangles, inequalities', topicCount: 4 },
  { id: 'math-ch8', subjectId: 'mathematics', chapterNumber: 8, name: 'Quadrilaterals', description: 'Properties of quadrilaterals, midpoint theorem', topicCount: 4 },
  { id: 'math-ch9', subjectId: 'mathematics', chapterNumber: 9, name: 'Areas of Parallelograms and Triangles', description: 'Area theorems and applications', topicCount: 3 },
  { id: 'math-ch10', subjectId: 'mathematics', chapterNumber: 10, name: 'Circles', description: 'Angles subtended by chords, cyclic quadrilaterals', topicCount: 4 },
  { id: 'math-ch11', subjectId: 'mathematics', chapterNumber: 11, name: 'Constructions', description: 'Bisectors, triangle construction', topicCount: 3 },
  { id: 'math-ch12', subjectId: 'mathematics', chapterNumber: 12, name: 'Heron\'s Formula', description: 'Area of triangles using Heron\'s formula', topicCount: 3 },
  { id: 'math-ch13', subjectId: 'mathematics', chapterNumber: 13, name: 'Surface Areas and Volumes', description: 'Surface area and volume of 3D shapes', topicCount: 4 },
  { id: 'math-ch14', subjectId: 'mathematics', chapterNumber: 14, name: 'Statistics', description: 'Mean, median, mode, frequency distributions', topicCount: 4 },
  { id: 'math-ch15', subjectId: 'mathematics', chapterNumber: 15, name: 'Probability', description: 'Probability of events, experimental probability', topicCount: 3 },
];

export const mathsTopics: Record<string, Topic[]> = {
  'math-ch1': [
    { id: 'math-ch1-t1', chapterId: 'math-ch1', name: 'Real Numbers', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch1-t2', chapterId: 'math-ch1', name: 'Irrational Numbers', importance: 8, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch1-t3', chapterId: 'math-ch1', name: 'Number Line', importance: 7, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch1-t4', chapterId: 'math-ch1', name: 'Real Number Operations', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'math-ch2': [
    { id: 'math-ch2-t1', chapterId: 'math-ch2', name: 'Polynomials in One Variable', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch2-t2', chapterId: 'math-ch2', name: 'Zeroes of a Polynomial', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch2-t3', chapterId: 'math-ch2', name: 'Factor Theorem', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch2-t4', chapterId: 'math-ch2', name: 'Algebraic Identities', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'math-ch3': [
    { id: 'math-ch3-t1', chapterId: 'math-ch3', name: 'Cartesian System', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch3-t2', chapterId: 'math-ch3', name: 'Plotting Points', importance: 7, difficulty: 4, estimatedMinutes: 15 },
    { id: 'math-ch3-t3', chapterId: 'math-ch3', name: 'Coordinate Geometry Applications', importance: 7, difficulty: 5, estimatedMinutes: 20 },
  ],
  'math-ch4': [
    { id: 'math-ch4-t1', chapterId: 'math-ch4', name: 'Linear Equations', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch4-t2', chapterId: 'math-ch4', name: 'Graph of Linear Equation', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch4-t3', chapterId: 'math-ch4', name: 'Equations of Lines', importance: 8, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch4-t4', chapterId: 'math-ch4', name: 'Applications', importance: 7, difficulty: 5, estimatedMinutes: 20 },
  ],
  'math-ch5': [
    { id: 'math-ch5-t1', chapterId: 'math-ch5', name: 'Euclid\'s Geometry', importance: 7, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch5-t2', chapterId: 'math-ch5', name: 'Axioms and Postulates', importance: 7, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch5-t3', chapterId: 'math-ch5', name: 'Theorems', importance: 7, difficulty: 5, estimatedMinutes: 20 },
  ],
  'math-ch6': [
    { id: 'math-ch6-t1', chapterId: 'math-ch6', name: 'Lines and Angles', importance: 8, difficulty: 5, estimatedMinutes: 25 },
    { id: 'math-ch6-t2', chapterId: 'math-ch6', name: 'Pairs of Angles', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch6-t3', chapterId: 'math-ch6', name: 'Parallel Lines', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch6-t4', chapterId: 'math-ch6', name: 'Transversal', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'math-ch7': [
    { id: 'math-ch7-t1', chapterId: 'math-ch7', name: 'Triangle Congruence', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch7-t2', chapterId: 'math-ch7', name: 'RHS Congruence', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch7-t3', chapterId: 'math-ch7', name: 'Inequalities in Triangles', importance: 8, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch7-t4', chapterId: 'math-ch7', name: 'Applications', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'math-ch8': [
    { id: 'math-ch8-t1', chapterId: 'math-ch8', name: 'Properties of Quadrilaterals', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch8-t2', chapterId: 'math-ch8', name: 'Midpoint Theorem', importance: 9, difficulty: 8, estimatedMinutes: 30 },
    { id: 'math-ch8-t3', chapterId: 'math-ch8', name: 'Special Quadrilaterals', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch8-t4', chapterId: 'math-ch8', name: 'Applications', importance: 7, difficulty: 6, estimatedMinutes: 20 },
  ],
  'math-ch9': [
    { id: 'math-ch9-t1', chapterId: 'math-ch9', name: 'Area Theorems', importance: 8, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch9-t2', chapterId: 'math-ch9', name: 'Parallelograms on Same Base', importance: 8, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch9-t3', chapterId: 'math-ch9', name: 'Triangles on Same Base', importance: 8, difficulty: 7, estimatedMinutes: 25 },
  ],
  'math-ch10': [
    { id: 'math-ch10-t1', chapterId: 'math-ch10', name: 'Angles Subtended by Chords', importance: 8, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch10-t2', chapterId: 'math-ch10', name: 'Cyclic Quadrilaterals', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch10-t3', chapterId: 'math-ch10', name: 'Perpendicular from Centre', importance: 8, difficulty: 7, estimatedMinutes: 25 },
    { id: 'math-ch10-t4', chapterId: 'math-ch10', name: 'Equal Chords', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'math-ch11': [
    { id: 'math-ch11-t1', chapterId: 'math-ch11', name: 'Angle Bisector Construction', importance: 7, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch11-t2', chapterId: 'math-ch11', name: 'Perpendicular Bisector', importance: 7, difficulty: 6, estimatedMinutes: 20 },
    { id: 'math-ch11-t3', chapterId: 'math-ch11', name: 'Triangle Construction', importance: 8, difficulty: 7, estimatedMinutes: 25 },
  ],
  'math-ch12': [
    { id: 'math-ch12-t1', chapterId: 'math-ch12', name: 'Heron\'s Formula', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch12-t2', chapterId: 'math-ch12', name: 'Area of Quadrilaterals', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch12-t3', chapterId: 'math-ch12', name: 'Applications', importance: 7, difficulty: 5, estimatedMinutes: 20 },
  ],
  'math-ch13': [
    { id: 'math-ch13-t1', chapterId: 'math-ch13', name: 'Surface Area', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch13-t2', chapterId: 'math-ch13', name: 'Volume', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'math-ch13-t3', chapterId: 'math-ch13', name: 'Combined Shapes', importance: 8, difficulty: 8, estimatedMinutes: 30 },
    { id: 'math-ch13-t4', chapterId: 'math-ch13', name: 'Applications', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'math-ch14': [
    { id: 'math-ch14-t1', chapterId: 'math-ch14', name: 'Mean', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch14-t2', chapterId: 'math-ch14', name: 'Median', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch14-t3', chapterId: 'math-ch14', name: 'Mode', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'math-ch14-t4', chapterId: 'math-ch14', name: 'Frequency Distribution', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'math-ch15': [
    { id: 'math-ch15-t1', chapterId: 'math-ch15', name: 'Probability Basics', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'math-ch15-t2', chapterId: 'math-ch15', name: 'Experimental Probability', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'math-ch15-t3', chapterId: 'math-ch15', name: 'Applications', importance: 7, difficulty: 5, estimatedMinutes: 20 },
  ],
};
