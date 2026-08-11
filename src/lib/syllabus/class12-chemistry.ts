// ============================================================
// Exam Rescue — Class 12 Chemistry Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const chemistrySubject: Subject = {
  id: 'chemistry',
  classLevelId: 12,
  name: 'Chemistry',
  icon: '🧪',
  color: '#10b981',
};

export const chemistryChapters: Chapter[] = [
  { id: 'chem-ch1', subjectId: 'chemistry', chapterNumber: 1, name: 'Solutions', description: 'Types, colligative properties, Van\'t Hoff factor', topicCount: 4 },
  { id: 'chem-ch2', subjectId: 'chemistry', chapterNumber: 2, name: 'Electrochemistry', description: 'Nernst equation, conductivity, batteries', topicCount: 4 },
  { id: 'chem-ch3', subjectId: 'chemistry', chapterNumber: 3, name: 'Chemical Kinetics', description: 'Rate law, Arrhenius equation, order', topicCount: 4 },
  { id: 'chem-ch4', subjectId: 'chemistry', chapterNumber: 4, name: 'Surface Chemistry', description: 'Adsorption, catalysis, colloids', topicCount: 3 },
  { id: 'chem-ch5', subjectId: 'chemistry', chapterNumber: 5, name: 'p-Block Elements', description: 'Group 15-18 elements', topicCount: 4 },
  { id: 'chem-ch6', subjectId: 'chemistry', chapterNumber: 6, name: 'd and f Block Elements', description: 'Transition metals, lanthanides, actinides', topicCount: 4 },
  { id: 'chem-ch7', subjectId: 'chemistry', chapterNumber: 7, name: 'Coordination Compounds', description: 'Werner\'s theory, CFT, isomerism', topicCount: 4 },
  { id: 'chem-ch8', subjectId: 'chemistry', chapterNumber: 8, name: 'Haloalkanes and Haloarenes', description: 'Preparation, reactions, Grignard', topicCount: 4 },
  { id: 'chem-ch9', subjectId: 'chemistry', chapterNumber: 9, name: 'Alcohols, Phenols and Ethers', description: 'Preparation, reactions, acidity', topicCount: 4 },
  { id: 'chem-ch10', subjectId: 'chemistry', chapterNumber: 10, name: 'Aldehydes, Ketones and Carboxylic Acids', description: 'Nucleophilic addition, oxidation', topicCount: 4 },
  { id: 'chem-ch11', subjectId: 'chemistry', chapterNumber: 11, name: 'Amines', description: 'Classification, preparation, reactions', topicCount: 3 },
  { id: 'chem-ch12', subjectId: 'chemistry', chapterNumber: 12, name: 'Biomolecules', description: 'Carbohydrates, proteins, nucleic acids, vitamins', topicCount: 4 },
  { id: 'chem-ch13', subjectId: 'chemistry', chapterNumber: 13, name: 'Polymers', description: 'Types, polymerisation, biodegradable polymers', topicCount: 3 },
  { id: 'chem-ch14', subjectId: 'chemistry', chapterNumber: 14, name: 'Chemistry in Everyday Life', description: 'Drugs, food additives, cleansing agents', topicCount: 3 },
];

export const chemistryTopics: Record<string, Topic[]> = {
  'chem-ch1': [
    { id: 'chem-ch1-t1', chapterId: 'chem-ch1', name: 'Types of Solutions', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'chem-ch1-t2', chapterId: 'chem-ch1', name: 'Colligative Properties', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'chem-ch1-t3', chapterId: 'chem-ch1', name: 'Van\'t Hoff Factor', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'chem-ch1-t4', chapterId: 'chem-ch1', name: 'Osmotic Pressure', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'chem-ch2': [
    { id: 'chem-ch2-t1', chapterId: 'chem-ch2', name: 'Conductivity', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch2-t2', chapterId: 'chem-ch2', name: 'Nernst Equation', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'chem-ch2-t3', chapterId: 'chem-ch2', name: 'Electrochemical Cells', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch2-t4', chapterId: 'chem-ch2', name: 'Corrosion and Batteries', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'chem-ch3': [
    { id: 'chem-ch3-t1', chapterId: 'chem-ch3', name: 'Rate Law', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch3-t2', chapterId: 'chem-ch3', name: 'Order of Reaction', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'chem-ch3-t3', chapterId: 'chem-ch3', name: 'Arrhenius Equation', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch3-t4', chapterId: 'chem-ch3', name: 'Half-Life', importance: 9, difficulty: 6, estimatedMinutes: 20 },
  ],
  'chem-ch4': [
    { id: 'chem-ch4-t1', chapterId: 'chem-ch4', name: 'Adsorption', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch4-t2', chapterId: 'chem-ch4', name: 'Catalysis', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch4-t3', chapterId: 'chem-ch4', name: 'Colloids', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'chem-ch5': [
    { id: 'chem-ch5-t1', chapterId: 'chem-ch5', name: 'Group 15 Elements', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch5-t2', chapterId: 'chem-ch5', name: 'Group 16 Elements', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch5-t3', chapterId: 'chem-ch5', name: 'Group 17 Elements', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch5-t4', chapterId: 'chem-ch5', name: 'Group 18 Elements', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'chem-ch6': [
    { id: 'chem-ch6-t1', chapterId: 'chem-ch6', name: 'Transition Metals', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch6-t2', chapterId: 'chem-ch6', name: 'Lanthanides', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'chem-ch6-t3', chapterId: 'chem-ch6', name: 'Actinides', importance: 7, difficulty: 6, estimatedMinutes: 20 },
    { id: 'chem-ch6-t4', chapterId: 'chem-ch6', name: 'Properties of d-block', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'chem-ch7': [
    { id: 'chem-ch7-t1', chapterId: 'chem-ch7', name: 'Werner\'s Theory', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch7-t2', chapterId: 'chem-ch7', name: 'Crystal Field Theory', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'chem-ch7-t3', chapterId: 'chem-ch7', name: 'Isomerism in Coordination', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'chem-ch7-t4', chapterId: 'chem-ch7', name: 'Nomenclature', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'chem-ch8': [
    { id: 'chem-ch8-t1', chapterId: 'chem-ch8', name: 'Preparation of Haloalkanes', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch8-t2', chapterId: 'chem-ch8', name: 'Nucleophilic Substitution', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch8-t3', chapterId: 'chem-ch8', name: 'Elimination Reactions', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch8-t4', chapterId: 'chem-ch8', name: 'Grignard Reagent', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'chem-ch9': [
    { id: 'chem-ch9-t1', chapterId: 'chem-ch9', name: 'Alcohols', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch9-t2', chapterId: 'chem-ch9', name: 'Phenols', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch9-t3', chapterId: 'chem-ch9', name: 'Ethers', importance: 7, difficulty: 5, estimatedMinutes: 15 },
    { id: 'chem-ch9-t4', chapterId: 'chem-ch9', name: 'Acidity Comparison', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'chem-ch10': [
    { id: 'chem-ch10-t1', chapterId: 'chem-ch10', name: 'Aldehydes and Ketones', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch10-t2', chapterId: 'chem-ch10', name: 'Carboxylic Acids', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch10-t3', chapterId: 'chem-ch10', name: 'Nucleophilic Addition', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'chem-ch10-t4', chapterId: 'chem-ch10', name: 'Name Reactions', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'chem-ch11': [
    { id: 'chem-ch11-t1', chapterId: 'chem-ch11', name: 'Classification of Amines', importance: 8, difficulty: 4, estimatedMinutes: 15 },
    { id: 'chem-ch11-t2', chapterId: 'chem-ch11', name: 'Preparation Methods', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch11-t3', chapterId: 'chem-ch11', name: 'Reactions of Amines', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'chem-ch12': [
    { id: 'chem-ch12-t1', chapterId: 'chem-ch12', name: 'Carbohydrates', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch12-t2', chapterId: 'chem-ch12', name: 'Proteins', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'chem-ch12-t3', chapterId: 'chem-ch12', name: 'Nucleic Acids', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'chem-ch12-t4', chapterId: 'chem-ch12', name: 'Vitamins and Enzymes', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'chem-ch13': [
    { id: 'chem-ch13-t1', chapterId: 'chem-ch13', name: 'Types of Polymers', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch13-t2', chapterId: 'chem-ch13', name: 'Polymerisation Methods', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch13-t3', chapterId: 'chem-ch13', name: 'Biodegradable Polymers', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'chem-ch14': [
    { id: 'chem-ch14-t1', chapterId: 'chem-ch14', name: 'Drugs and Drug Targets', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'chem-ch14-t2', chapterId: 'chem-ch14', name: 'Food Additives', importance: 7, difficulty: 4, estimatedMinutes: 15 },
    { id: 'chem-ch14-t3', chapterId: 'chem-ch14', name: 'Cleansing Agents', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
};
