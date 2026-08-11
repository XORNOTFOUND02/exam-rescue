// ============================================================
// Exam Rescue — Class 11 Chemistry Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const chemistrySubject: Subject = {
  id: 'chemistry',
  classLevelId: 11,
  name: 'Chemistry',
  icon: '🧪',
  color: '#10b981',
};

export const chemistryChapters: Chapter[] = [
  { id: 'chem-ch1', subjectId: 'chemistry', chapterNumber: 1, name: 'Some Basic Concepts of Chemistry', description: 'Mole concept, stoichiometry', topicCount: 4 },
  { id: 'chem-ch2', subjectId: 'chemistry', chapterNumber: 2, name: 'Structure of Atom', description: 'Atomic models, electronic configuration', topicCount: 4 },
  { id: 'chem-ch3', subjectId: 'chemistry', chapterNumber: 3, name: 'Classification of Elements', description: 'Periodic table, periodic properties', topicCount: 4 },
  { id: 'chem-ch4', subjectId: 'chemistry', chapterNumber: 4, name: 'Chemical Bonding', description: 'Ionic, covalent, coordinate bonds', topicCount: 4 },
  { id: 'chem-ch5', subjectId: 'chemistry', chapterNumber: 5, name: 'States of Matter', description: 'Gases, liquids, solids', topicCount: 4 },
  { id: 'chem-ch6', subjectId: 'chemistry', chapterNumber: 6, name: 'Thermodynamics', description: 'Enthalpy, entropy, Gibbs energy', topicCount: 4 },
  { id: 'chem-ch7', subjectId: 'chemistry', chapterNumber: 7, name: 'Equilibrium', description: 'Chemical and ionic equilibrium', topicCount: 4 },
  { id: 'chem-ch8', subjectId: 'chemistry', chapterNumber: 8, name: 'Redox Reactions', description: 'Oxidation, reduction, balancing', topicCount: 3 },
  { id: 'chem-ch9', subjectId: 'chemistry', chapterNumber: 9, name: 'Hydrogen', description: 'Properties and compounds of hydrogen', topicCount: 3 },
  { id: 'chem-ch10', subjectId: 'chemistry', chapterNumber: 10, name: 's-Block Elements', description: 'Alkali and alkaline earth metals', topicCount: 3 },
  { id: 'chem-ch11', subjectId: 'chemistry', chapterNumber: 11, name: 'p-Block Elements', description: 'Group 13-14 elements', topicCount: 4 },
  { id: 'chem-ch12', subjectId: 'chemistry', chapterNumber: 12, name: 'Organic Chemistry - Basic Principles', description: 'IUPAC nomenclature, isomerism', topicCount: 4 },
  { id: 'chem-ch13', subjectId: 'chemistry', chapterNumber: 13, name: 'Hydrocarbons', description: 'Alkanes, alkenes, alkynes', topicCount: 4 },
  { id: 'chem-ch14', subjectId: 'chemistry', chapterNumber: 14, name: 'Environmental Chemistry', description: 'Pollution, green chemistry', topicCount: 3 },
];

export const chemistryTopics: Record<string, Topic[]> = {
  'chem-ch1': [
    { id: 'chem-ch1-t1', chapterId: 'chem-ch1', name: 'Mole Concept', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch1-t2', chapterId: 'chem-ch1', name: 'Stoichiometry', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch1-t3', chapterId: 'chem-ch1', name: 'Limiting Reagent', importance: 9, difficulty: 7, estimatedMinutes: 20 },
    { id: 'chem-ch1-t4', chapterId: 'chem-ch1', name: 'Concentration Terms', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'chem-ch2': [
    { id: 'chem-ch2-t1', chapterId: 'chem-ch2', name: 'Atomic Models', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch2-t2', chapterId: 'chem-ch2', name: 'Bohr\'s Model', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch2-t3', chapterId: 'chem-ch2', name: 'Quantum Numbers', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'chem-ch2-t4', chapterId: 'chem-ch2', name: 'Electronic Configuration', importance: 10, difficulty: 6, estimatedMinutes: 25 },
  ],
  'chem-ch3': [
    { id: 'chem-ch3-t1', chapterId: 'chem-ch3', name: 'Modern Periodic Table', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch3-t2', chapterId: 'chem-ch3', name: 'Periodic Trends', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch3-t3', chapterId: 'chem-ch3', name: 'Ionization Energy', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'chem-ch3-t4', chapterId: 'chem-ch3', name: 'Electronegativity', importance: 9, difficulty: 6, estimatedMinutes: 20 },
  ],
  'chem-ch4': [
    { id: 'chem-ch4-t1', chapterId: 'chem-ch4', name: 'Ionic Bond', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch4-t2', chapterId: 'chem-ch4', name: 'Covalent Bond', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch4-t3', chapterId: 'chem-ch4', name: 'VSEPR Theory', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'chem-ch4-t4', chapterId: 'chem-ch4', name: 'Hybridization', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'chem-ch5': [
    { id: 'chem-ch5-t1', chapterId: 'chem-ch5', name: 'Gas Laws', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch5-t2', chapterId: 'chem-ch5', name: 'Ideal Gas Equation', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch5-t3', chapterId: 'chem-ch5', name: 'Liquefaction of Gases', importance: 7, difficulty: 6, estimatedMinutes: 15 },
    { id: 'chem-ch5-t4', chapterId: 'chem-ch5', name: 'Intermolecular Forces', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'chem-ch6': [
    { id: 'chem-ch6-t1', chapterId: 'chem-ch6', name: 'Enthalpy', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch6-t2', chapterId: 'chem-ch6', name: 'Hess\'s Law', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'chem-ch6-t3', chapterId: 'chem-ch6', name: 'Entropy', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'chem-ch6-t4', chapterId: 'chem-ch6', name: 'Gibbs Energy', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'chem-ch7': [
    { id: 'chem-ch7-t1', chapterId: 'chem-ch7', name: 'Chemical Equilibrium', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch7-t2', chapterId: 'chem-ch7', name: 'Le Chatelier\'s Principle', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch7-t3', chapterId: 'chem-ch7', name: 'Ionic Equilibrium', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'chem-ch7-t4', chapterId: 'chem-ch7', name: 'pH and Buffers', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'chem-ch8': [
    { id: 'chem-ch8-t1', chapterId: 'chem-ch8', name: 'Oxidation Numbers', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch8-t2', chapterId: 'chem-ch8', name: 'Balancing Redox Reactions', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch8-t3', chapterId: 'chem-ch8', name: 'Types of Redox Reactions', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'chem-ch9': [
    { id: 'chem-ch9-t1', chapterId: 'chem-ch9', name: 'Hydrogen Properties', importance: 7, difficulty: 4, estimatedMinutes: 15 },
    { id: 'chem-ch9-t2', chapterId: 'chem-ch9', name: 'Water and Hydrogen Peroxide', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch9-t3', chapterId: 'chem-ch9', name: 'Hydrides', importance: 7, difficulty: 5, estimatedMinutes: 15 },
  ],
  'chem-ch10': [
    { id: 'chem-ch10-t1', chapterId: 'chem-ch10', name: 'Alkali Metals', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch10-t2', chapterId: 'chem-ch10', name: 'Alkaline Earth Metals', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch10-t3', chapterId: 'chem-ch10', name: 'Diagonal Relationship', importance: 7, difficulty: 5, estimatedMinutes: 15 },
  ],
  'chem-ch11': [
    { id: 'chem-ch11-t1', chapterId: 'chem-ch11', name: 'Group 13 Elements', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch11-t2', chapterId: 'chem-ch11', name: 'Group 14 Elements', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch11-t3', chapterId: 'chem-ch11', name: 'Allotropy', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'chem-ch11-t4', chapterId: 'chem-ch11', name: 'Intermetallic Compounds', importance: 7, difficulty: 6, estimatedMinutes: 15 },
  ],
  'chem-ch12': [
    { id: 'chem-ch12-t1', chapterId: 'chem-ch12', name: 'IUPAC Nomenclature', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch12-t2', chapterId: 'chem-ch12', name: 'Isomerism', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch12-t3', chapterId: 'chem-ch12', name: 'Electronic Effects', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'chem-ch12-t4', chapterId: 'chem-ch12', name: 'Reaction Intermediates', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'chem-ch13': [
    { id: 'chem-ch13-t1', chapterId: 'chem-ch13', name: 'Alkanes', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch13-t2', chapterId: 'chem-ch13', name: 'Alkenes', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch13-t3', chapterId: 'chem-ch13', name: 'Alkynes', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch13-t4', chapterId: 'chem-ch13', name: 'Aromatic Hydrocarbons', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'chem-ch14': [
    { id: 'chem-ch14-t1', chapterId: 'chem-ch14', name: 'Air Pollution', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'chem-ch14-t2', chapterId: 'chem-ch14', name: 'Water Pollution', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'chem-ch14-t3', chapterId: 'chem-ch14', name: 'Green Chemistry', importance: 7, difficulty: 3, estimatedMinutes: 15 },
  ],
};
