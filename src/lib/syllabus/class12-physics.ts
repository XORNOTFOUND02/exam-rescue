// ============================================================
// Exam Rescue — Class 12 Physics Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const physicsSubject: Subject = {
  id: 'physics',
  classLevelId: 12,
  name: 'Physics',
  icon: '⚡',
  color: '#3b82f6',
};

export const physicsChapters: Chapter[] = [
  { id: 'phy-ch1', subjectId: 'physics', chapterNumber: 1, name: 'Electric Charges and Fields', description: 'Coulomb\'s law, electric field, Gauss\'s law', topicCount: 4 },
  { id: 'phy-ch2', subjectId: 'physics', chapterNumber: 2, name: 'Electrostatic Potential and Capacitance', description: 'Potential, capacitors, dielectrics', topicCount: 4 },
  { id: 'phy-ch3', subjectId: 'physics', chapterNumber: 3, name: 'Current Electricity', description: 'Ohm\'s law, Kirchhoff\'s laws, Wheatstone bridge', topicCount: 4 },
  { id: 'phy-ch4', subjectId: 'physics', chapterNumber: 4, name: 'Moving Charges and Magnetism', description: 'Biot-Savart, Ampere\'s law, Lorentz force', topicCount: 4 },
  { id: 'phy-ch5', subjectId: 'physics', chapterNumber: 5, name: 'Magnetism and Matter', description: 'Earth\'s magnetism, diamagnetism, paramagnetism', topicCount: 3 },
  { id: 'phy-ch6', subjectId: 'physics', chapterNumber: 6, name: 'Electromagnetic Induction', description: 'Faraday\'s law, Lenz\'s law, self/mutual inductance', topicCount: 4 },
  { id: 'phy-ch7', subjectId: 'physics', chapterNumber: 7, name: 'Alternating Current', description: 'AC circuits, resonance, transformers', topicCount: 4 },
  { id: 'phy-ch8', subjectId: 'physics', chapterNumber: 8, name: 'Electromagnetic Waves', description: 'Maxwell\'s equations, EM spectrum', topicCount: 3 },
  { id: 'phy-ch9', subjectId: 'physics', chapterNumber: 9, name: 'Ray Optics', description: 'Reflection, refraction, prism, lenses', topicCount: 4 },
  { id: 'phy-ch10', subjectId: 'physics', chapterNumber: 10, name: 'Wave Optics', description: 'Huygens\' principle, interference, diffraction', topicCount: 4 },
  { id: 'phy-ch11', subjectId: 'physics', chapterNumber: 11, name: 'Dual Nature of Radiation and Matter', description: 'Photoelectric effect, de Broglie wavelength', topicCount: 3 },
  { id: 'phy-ch12', subjectId: 'physics', chapterNumber: 12, name: 'Atoms', description: 'Bohr model, spectral series', topicCount: 3 },
  { id: 'phy-ch13', subjectId: 'physics', chapterNumber: 13, name: 'Nuclei', description: 'Nuclear structure, radioactive decay, fission/fusion', topicCount: 4 },
  { id: 'phy-ch14', subjectId: 'physics', chapterNumber: 14, name: 'Semiconductor Electronics', description: 'p-n junction, diodes, transistors, logic gates', topicCount: 4 },
];

export const physicsTopics: Record<string, Topic[]> = {
  'phy-ch1': [
    { id: 'phy-ch1-t1', chapterId: 'phy-ch1', name: 'Coulomb\'s Law', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch1-t2', chapterId: 'phy-ch1', name: 'Electric Field', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch1-t3', chapterId: 'phy-ch1', name: 'Electric Flux', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch1-t4', chapterId: 'phy-ch1', name: 'Gauss\'s Law', importance: 10, difficulty: 7, estimatedMinutes: 30 },
  ],
  'phy-ch2': [
    { id: 'phy-ch2-t1', chapterId: 'phy-ch2', name: 'Electric Potential', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch2-t2', chapterId: 'phy-ch2', name: 'Equipotential Surfaces', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch2-t3', chapterId: 'phy-ch2', name: 'Capacitors', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch2-t4', chapterId: 'phy-ch2', name: 'Dielectrics', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'phy-ch3': [
    { id: 'phy-ch3-t1', chapterId: 'phy-ch3', name: 'Ohm\'s Law', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch3-t2', chapterId: 'phy-ch3', name: 'Kirchhoff\'s Laws', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch3-t3', chapterId: 'phy-ch3', name: 'Wheatstone Bridge', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch3-t4', chapterId: 'phy-ch3', name: 'Potentiometer', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'phy-ch4': [
    { id: 'phy-ch4-t1', chapterId: 'phy-ch4', name: 'Biot-Savart Law', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch4-t2', chapterId: 'phy-ch4', name: 'Ampere\'s Circuital Law', importance: 10, difficulty: 7, estimatedMinutes: 25 },
    { id: 'phy-ch4-t3', chapterId: 'phy-ch4', name: 'Force on Moving Charge', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch4-t4', chapterId: 'phy-ch4', name: 'Cyclotron', importance: 8, difficulty: 7, estimatedMinutes: 20 },
  ],
  'phy-ch5': [
    { id: 'phy-ch5-t1', chapterId: 'phy-ch5', name: 'Earth\'s Magnetism', importance: 7, difficulty: 4, estimatedMinutes: 15 },
    { id: 'phy-ch5-t2', chapterId: 'phy-ch5', name: 'Diamagnetism and Paramagnetism', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch5-t3', chapterId: 'phy-ch5', name: 'Ferromagnetism', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'phy-ch6': [
    { id: 'phy-ch6-t1', chapterId: 'phy-ch6', name: 'Faraday\'s Laws', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch6-t2', chapterId: 'phy-ch6', name: 'Lenz\'s Law', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch6-t3', chapterId: 'phy-ch6', name: 'Self-Inductance', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch6-t4', chapterId: 'phy-ch6', name: 'Mutual Inductance', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'phy-ch7': [
    { id: 'phy-ch7-t1', chapterId: 'phy-ch7', name: 'AC Circuits', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch7-t2', chapterId: 'phy-ch7', name: 'Phasor Diagrams', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch7-t3', chapterId: 'phy-ch7', name: 'Resonance', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch7-t4', chapterId: 'phy-ch7', name: 'Transformers', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'phy-ch8': [
    { id: 'phy-ch8-t1', chapterId: 'phy-ch8', name: 'Maxwell\'s Equations', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch8-t2', chapterId: 'phy-ch8', name: 'EM Spectrum', importance: 8, difficulty: 4, estimatedMinutes: 15 },
    { id: 'phy-ch8-t3', chapterId: 'phy-ch8', name: 'Properties of EM Waves', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'phy-ch9': [
    { id: 'phy-ch9-t1', chapterId: 'phy-ch9', name: 'Mirror Formula', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch9-t2', chapterId: 'phy-ch9', name: 'Refraction - Snell\'s Law', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch9-t3', chapterId: 'phy-ch9', name: 'Total Internal Reflection', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch9-t4', chapterId: 'phy-ch9', name: 'Prism and Dispersion', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'phy-ch10': [
    { id: 'phy-ch10-t1', chapterId: 'phy-ch10', name: 'Huygens\' Principle', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch10-t2', chapterId: 'phy-ch10', name: 'Young\'s Double Slit', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'phy-ch10-t3', chapterId: 'phy-ch10', name: 'Diffraction', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'phy-ch10-t4', chapterId: 'phy-ch10', name: 'Polarisation', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'phy-ch11': [
    { id: 'phy-ch11-t1', chapterId: 'phy-ch11', name: 'Photoelectric Effect', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch11-t2', chapterId: 'phy-ch11', name: 'Einstein\'s Equation', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch11-t3', chapterId: 'phy-ch11', name: 'de Broglie Wavelength', importance: 9, difficulty: 6, estimatedMinutes: 20 },
  ],
  'phy-ch12': [
    { id: 'phy-ch12-t1', chapterId: 'phy-ch12', name: 'Bohr Model', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch12-t2', chapterId: 'phy-ch12', name: 'Spectral Series', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch12-t3', chapterId: 'phy-ch12', name: 'X-rays', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'phy-ch13': [
    { id: 'phy-ch13-t1', chapterId: 'phy-ch13', name: 'Nuclear Structure', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch13-t2', chapterId: 'phy-ch13', name: 'Radioactive Decay', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch13-t3', chapterId: 'phy-ch13', name: 'Mass-Energy Equivalence', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch13-t4', chapterId: 'phy-ch13', name: 'Nuclear Fission and Fusion', importance: 10, difficulty: 6, estimatedMinutes: 25 },
  ],
  'phy-ch14': [
    { id: 'phy-ch14-t1', chapterId: 'phy-ch14', name: 'p-n Junction Diode', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch14-t2', chapterId: 'phy-ch14', name: 'Diode as Rectifier', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch14-t3', chapterId: 'phy-ch14', name: 'Transistors', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'phy-ch14-t4', chapterId: 'phy-ch14', name: 'Logic Gates', importance: 10, difficulty: 6, estimatedMinutes: 25 },
  ],
};
