// ============================================================
// Exam Rescue — Class 9 Science Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const scienceSubject: Subject = {
  id: 'science',
  classLevelId: 9,
  name: 'Science',
  icon: '🔬',
  color: '#10b981',
};

export const scienceChapters: Chapter[] = [
  { id: 'sci-ch1', subjectId: 'science', chapterNumber: 1, name: 'Matter in Our Surroundings', description: 'Physical nature of matter, states of matter, evaporation', topicCount: 4 },
  { id: 'sci-ch2', subjectId: 'science', chapterNumber: 2, name: 'Is Matter Around Us Pure', description: 'Mixtures, solutions, separation techniques', topicCount: 4 },
  { id: 'sci-ch3', subjectId: 'science', chapterNumber: 3, name: 'Atoms and Molecules', description: 'Laws of chemical combination, atomic and molecular masses', topicCount: 4 },
  { id: 'sci-ch4', subjectId: 'science', chapterNumber: 4, name: 'Structure of the Atom', description: 'Thomson, Rutherford, Bohr models, electronic configuration', topicCount: 4 },
  { id: 'sci-ch5', subjectId: 'science', chapterNumber: 5, name: 'The Fundamental Unit of Life', description: 'Cell structure, organelles, cell division', topicCount: 4 },
  { id: 'sci-ch6', subjectId: 'science', chapterNumber: 6, name: 'Tissues', description: 'Plant and animal tissues, meristematic and permanent tissues', topicCount: 4 },
  { id: 'sci-ch7', subjectId: 'science', chapterNumber: 7, name: 'Diversity in Living Organisms', description: 'Classification, Kingdom Plantae and Animalia', topicCount: 4 },
  { id: 'sci-ch8', subjectId: 'science', chapterNumber: 8, name: 'Motion', description: 'Distance, displacement, velocity, acceleration, equations of motion', topicCount: 4 },
  { id: 'sci-ch9', subjectId: 'science', chapterNumber: 9, name: 'Force and Laws of Motion', description: 'Newton\'s laws, inertia, momentum, conservation of momentum', topicCount: 4 },
  { id: 'sci-ch10', subjectId: 'science', chapterNumber: 10, name: 'Gravitation', description: 'Universal law of gravitation, weight, mass, free fall', topicCount: 4 },
  { id: 'sci-ch11', subjectId: 'science', chapterNumber: 11, name: 'Work and Energy', description: 'Work, energy, power, kinetic and potential energy', topicCount: 4 },
  { id: 'sci-ch12', subjectId: 'science', chapterNumber: 12, name: 'Sound', description: 'Wave propagation, frequency, amplitude, speed of sound', topicCount: 4 },
  { id: 'sci-ch13', subjectId: 'science', chapterNumber: 13, name: 'Why Do We Fall Ill', description: 'Diseases, pathogens, immunity, treatment and prevention', topicCount: 4 },
  { id: 'sci-ch14', subjectId: 'science', chapterNumber: 14, name: 'Natural Resources', description: 'Air, water, soil pollution, biogeochemical cycles', topicCount: 4 },
  { id: 'sci-ch15', subjectId: 'science', chapterNumber: 15, name: 'Improvement in Food Resources', description: 'Crop production, animal husbandry, food preservation', topicCount: 4 },
];

export const scienceTopics: Record<string, Topic[]> = {
  'sci-ch1': [
    { id: 'sci-ch1-t1', chapterId: 'sci-ch1', name: 'Matter in Our Surroundings', importance: 8, difficulty: 5, estimatedMinutes: 30 },
    { id: 'sci-ch1-t2', chapterId: 'sci-ch1', name: 'Is Matter Around Us Pure', importance: 7, difficulty: 5, estimatedMinutes: 25 },
    { id: 'sci-ch1-t3', chapterId: 'sci-ch1', name: 'Atoms and Molecules', importance: 9, difficulty: 7, estimatedMinutes: 35 },
    { id: 'sci-ch1-t4', chapterId: 'sci-ch1', name: 'Structure of the Atom', importance: 8, difficulty: 7, estimatedMinutes: 30 },
  ],
  'sci-ch2': [
    { id: 'sci-ch2-t1', chapterId: 'sci-ch2', name: 'Atoms and Molecules', importance: 9, difficulty: 7, estimatedMinutes: 35 },
    { id: 'sci-ch2-t2', chapterId: 'sci-ch2', name: 'Structure of the Atom', importance: 8, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch2-t3', chapterId: 'sci-ch2', name: 'Chemical Formulae', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'sci-ch2-t4', chapterId: 'sci-ch2', name: 'Molecular Mass', importance: 7, difficulty: 6, estimatedMinutes: 20 },
  ],
  'sci-ch3': [
    { id: 'sci-ch3-t1', chapterId: 'sci-ch3', name: 'Laws of Chemical Combination', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch3-t2', chapterId: 'sci-ch3', name: 'What is an Atom?', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch3-t3', chapterId: 'sci-ch3', name: 'What is a Molecule?', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'sci-ch3-t4', chapterId: 'sci-ch3', name: 'Writing Chemical Formulae', importance: 8, difficulty: 7, estimatedMinutes: 25 },
  ],
  'sci-ch4': [
    { id: 'sci-ch4-t1', chapterId: 'sci-ch4', name: 'Charged Particles in Matter', importance: 8, difficulty: 7, estimatedMinutes: 25 },
    { id: 'sci-ch4-t2', chapterId: 'sci-ch4', name: 'Structure of Atom', importance: 9, difficulty: 8, estimatedMinutes: 35 },
    { id: 'sci-ch4-t3', chapterId: 'sci-ch4', name: 'Bohr\'s Model', importance: 9, difficulty: 8, estimatedMinutes: 30 },
    { id: 'sci-ch4-t4', chapterId: 'sci-ch4', name: 'Electronic Configuration', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'sci-ch5': [
    { id: 'sci-ch5-t1', chapterId: 'sci-ch5', name: 'Cell - Basic Unit of Life', importance: 9, difficulty: 6, estimatedMinutes: 30 },
    { id: 'sci-ch5-t2', chapterId: 'sci-ch5', name: 'Structure of a Cell', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch5-t3', chapterId: 'sci-ch5', name: 'Organelles in a Cell', importance: 8, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch5-t4', chapterId: 'sci-ch5', name: 'Cell Division', importance: 8, difficulty: 7, estimatedMinutes: 25 },
  ],
  'sci-ch6': [
    { id: 'sci-ch6-t1', chapterId: 'sci-ch6', name: 'Plant Tissues', importance: 8, difficulty: 6, estimatedMinutes: 30 },
    { id: 'sci-ch6-t2', chapterId: 'sci-ch6', name: 'Animal Tissues', importance: 8, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch6-t3', chapterId: 'sci-ch6', name: 'Meristematic Tissues', importance: 7, difficulty: 6, estimatedMinutes: 20 },
    { id: 'sci-ch6-t4', chapterId: 'sci-ch6', name: 'Permanent Tissues', importance: 7, difficulty: 6, estimatedMinutes: 25 },
  ],
  'sci-ch7': [
    { id: 'sci-ch7-t1', chapterId: 'sci-ch7', name: 'Biodiversity', importance: 7, difficulty: 5, estimatedMinutes: 25 },
    { id: 'sci-ch7-t2', chapterId: 'sci-ch7', name: 'Classification Systems', importance: 8, difficulty: 6, estimatedMinutes: 30 },
    { id: 'sci-ch7-t3', chapterId: 'sci-ch7', name: 'Kingdom Plantae', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'sci-ch7-t4', chapterId: 'sci-ch7', name: 'Kingdom Animalia', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'sci-ch8': [
    { id: 'sci-ch8-t1', chapterId: 'sci-ch8', name: 'Distance and Displacement', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'sci-ch8-t2', chapterId: 'sci-ch8', name: 'Speed and Velocity', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'sci-ch8-t3', chapterId: 'sci-ch8', name: 'Acceleration', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'sci-ch8-t4', chapterId: 'sci-ch8', name: 'Equations of Motion', importance: 10, difficulty: 8, estimatedMinutes: 35 },
  ],
  'sci-ch9': [
    { id: 'sci-ch9-t1', chapterId: 'sci-ch9', name: 'Force and Motion', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch9-t2', chapterId: 'sci-ch9', name: 'Newton\'s Laws of Motion', importance: 10, difficulty: 8, estimatedMinutes: 35 },
    { id: 'sci-ch9-t3', chapterId: 'sci-ch9', name: 'Inertia and Mass', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'sci-ch9-t4', chapterId: 'sci-ch9', name: 'Conservation of Momentum', importance: 9, difficulty: 8, estimatedMinutes: 30 },
  ],
  'sci-ch10': [
    { id: 'sci-ch10-t1', chapterId: 'sci-ch10', name: 'Gravitation', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch10-t2', chapterId: 'sci-ch10', name: 'Free Fall', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'sci-ch10-t3', chapterId: 'sci-ch10', name: 'Mass and Weight', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'sci-ch10-t4', chapterId: 'sci-ch10', name: 'Thrust and Pressure', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'sci-ch11': [
    { id: 'sci-ch11-t1', chapterId: 'sci-ch11', name: 'Work', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'sci-ch11-t2', chapterId: 'sci-ch11', name: 'Energy', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch11-t3', chapterId: 'sci-ch11', name: 'Kinetic and Potential Energy', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'sci-ch11-t4', chapterId: 'sci-ch11', name: 'Power', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'sci-ch12': [
    { id: 'sci-ch12-t1', chapterId: 'sci-ch12', name: 'Sound Production', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'sci-ch12-t2', chapterId: 'sci-ch12', name: 'Propagation of Sound', importance: 8, difficulty: 7, estimatedMinutes: 25 },
    { id: 'sci-ch12-t3', chapterId: 'sci-ch12', name: 'Sound Waves', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'sci-ch12-t4', chapterId: 'sci-ch12', name: 'Speed of Sound', importance: 8, difficulty: 7, estimatedMinutes: 25 },
  ],
  'sci-ch13': [
    { id: 'sci-ch13-t1', chapterId: 'sci-ch13', name: 'Health and Disease', importance: 7, difficulty: 4, estimatedMinutes: 20 },
    { id: 'sci-ch13-t2', chapterId: 'sci-ch13', name: 'Infectious Diseases', importance: 8, difficulty: 5, estimatedMinutes: 25 },
    { id: 'sci-ch13-t3', chapterId: 'sci-ch13', name: 'Immunity', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'sci-ch13-t4', chapterId: 'sci-ch13', name: 'Prevention of Diseases', importance: 7, difficulty: 4, estimatedMinutes: 20 },
  ],
  'sci-ch14': [
    { id: 'sci-ch14-t1', chapterId: 'sci-ch14', name: 'Air Pollution', importance: 7, difficulty: 4, estimatedMinutes: 20 },
    { id: 'sci-ch14-t2', chapterId: 'sci-ch14', name: 'Water Pollution', importance: 7, difficulty: 4, estimatedMinutes: 20 },
    { id: 'sci-ch14-t3', chapterId: 'sci-ch14', name: 'Soil Pollution', importance: 7, difficulty: 4, estimatedMinutes: 20 },
    { id: 'sci-ch14-t4', chapterId: 'sci-ch14', name: 'Biogeochemical Cycles', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'sci-ch15': [
    { id: 'sci-ch15-t1', chapterId: 'sci-ch15', name: 'Crop Production', importance: 7, difficulty: 4, estimatedMinutes: 20 },
    { id: 'sci-ch15-t2', chapterId: 'sci-ch15', name: 'Animal Husbandry', importance: 7, difficulty: 4, estimatedMinutes: 20 },
    { id: 'sci-ch15-t3', chapterId: 'sci-ch15', name: 'Food Preservation', importance: 7, difficulty: 5, estimatedMinutes: 20 },
    { id: 'sci-ch15-t4', chapterId: 'sci-ch15', name: 'Improvement in Food Resources', importance: 7, difficulty: 4, estimatedMinutes: 20 },
  ],
};
