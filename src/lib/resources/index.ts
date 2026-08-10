// ============================================================
// Exam Rescue — Resource Recommendations
// ============================================================

import { Resource } from '@/types';

/**
 * Resource database — Class 10 specific.
 * These are legitimate publicly available educational resources
 * from well-known CBSE educators (linked via YouTube search URLs).
 * Resources are configurable through the admin panel.
 *
 * Each resource carries a `reason` explaining WHY it is recommended,
 * so students understand the value before clicking.
 */

const SEARCH_BASE = 'https://www.youtube.com/results?search_query=';

/** Build a YouTube search URL for a provider + topic */
function searchUrl(providerQuery: string, topic: string): string {
  const q = [providerQuery, topic].join('+').replace(/\s+/g, '+');
  return `${SEARCH_BASE}${encodeURIComponent(q).replace(/%20/g, '+')}`;
}

export const resources: Resource[] = [
  // ============================================================
  // SCIENCE — ExpHub - Prashant Kirad (all 14 chapters)
  // ============================================================

  // Ch 1: Chemical Reactions and Equations
  {
    id: 'res-sci-ch1-1', subjectId: 'science', chapterId: 'sci-ch1', topicId: 'sci-ch1-t3',
    title: 'Chemical Reactions and Equations — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Chemical Reactions and Equations one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '50 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Complete chapter in one sitting — perfect first pass on a high-weightage chapter that appears in almost every board paper.',
  },
  {
    id: 'res-sci-ch1-2', subjectId: 'science', chapterId: 'sci-ch1', topicId: 'sci-ch1-t5',
    title: 'Balancing Chemical Equations — Quick Revision',
    url: searchUrl('ExpHub+Prashant+Kirad', 'balancing chemical equations'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '25 min',
    resourceType: 'revision',
    priority: 8,
    reason: 'Balancing equations is a guaranteed 1-2 mark question — this short video locks the skill before the exam.',
  },
  {
    id: 'res-sci-ch1-3', subjectId: 'science', chapterId: 'sci-ch1', topicId: 'sci-ch1-t4',
    title: 'Types of Chemical Reactions — Detailed Explanation',
    url: searchUrl('ExpHub+Prashant+Kirad', 'types of chemical reactions class 10'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '35 min',
    resourceType: 'concept',
    priority: 8,
    reason: 'Combination, decomposition, displacement and double displacement are the most asked reaction questions in boards.',
  },

  // Ch 2: Acids, Bases and Salts
  {
    id: 'res-sci-ch2-1', subjectId: 'science', chapterId: 'sci-ch2', topicId: 'sci-ch2-t2',
    title: 'Acids, Bases and Salts — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Acids Bases and Salts one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '55 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Covers chemical properties and reactions that are frequently tested — high-yield chapter for quick mark gains.',
  },
  {
    id: 'res-sci-ch2-2', subjectId: 'science', chapterId: 'sci-ch2', topicId: 'sci-ch2-t3',
    title: 'pH Scale and Its Importance — Easy Explanation',
    url: searchUrl('ExpHub+Prashant+Kirad', 'pH scale importance class 10'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '20 min',
    resourceType: 'revision',
    priority: 8,
    reason: 'pH questions are common in both MCQs and short-answer sections — quick concept refresher.',
  },

  // Ch 3: Metals and Non-metals
  {
    id: 'res-sci-ch3-1', subjectId: 'science', chapterId: 'sci-ch3', topicId: 'sci-ch3-t2',
    title: 'Metals and Non-metals — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Metals and Non Metals one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '60 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Reactivity series and extraction of metals carry 3-5 marks — this one-shot covers the whole chapter efficiently.',
  },
  {
    id: 'res-sci-ch3-2', subjectId: 'science', chapterId: 'sci-ch3', topicId: 'sci-ch3-t3',
    title: 'Reactivity Series Made Easy',
    url: searchUrl('ExpHub+Prashant+Kirad', 'reactivity series class 10'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '15 min',
    resourceType: 'revision',
    priority: 8,
    reason: 'The reactivity series is the backbone of most metal questions — memorize it with this short video.',
  },

  // Ch 4: Carbon and its Compounds
  {
    id: 'res-sci-ch4-1', subjectId: 'science', chapterId: 'sci-ch4', topicId: 'sci-ch4-t4',
    title: 'Carbon and its Compounds — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Carbon and its Compounds one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '65 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Functional groups and nomenclature are high-yield — this is a tricky chapter best learned as a complete unit.',
  },
  {
    id: 'res-sci-ch4-2', subjectId: 'science', chapterId: 'sci-ch4', topicId: 'sci-ch4-t3',
    title: 'Homologous Series and Nomenclature — Practice',
    url: searchUrl('ExpHub+Prashant+Kirad', 'homologous series nomenclature class 10'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '30 min',
    resourceType: 'practice',
    priority: 8,
    reason: 'Naming carbon compounds is a predictable board question — drill it with this focused practice video.',
  },

  // Ch 5: Life Processes
  {
    id: 'res-sci-ch5-1', subjectId: 'science', chapterId: 'sci-ch5', topicId: 'sci-ch5-t3',
    title: 'Life Processes — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Life Processes one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '55 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Nutrition, respiration and transportation are almost guaranteed long-answer questions — cover them all at once.',
  },
  {
    id: 'res-sci-ch5-2', subjectId: 'science', chapterId: 'sci-ch5', topicId: 'sci-ch5-t2',
    title: 'Respiration — Aerobic vs Anaerobic (Diagram-based)',
    url: searchUrl('ExpHub+Prashant+Kirad', 'respiration aerobic anaerobic class 10'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '25 min',
    resourceType: 'concept',
    priority: 8,
    reason: 'Diagram-based respiration questions score easy marks — this video teaches the diagram with the concept.',
  },

  // Ch 6: Control and Coordination
  {
    id: 'res-sci-ch6-1', subjectId: 'science', chapterId: 'sci-ch6', topicId: 'sci-ch6-t1',
    title: 'Control and Coordination — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Control and Coordination one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '50 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Nervous system, reflex arc and hormones come together here — a complete chapter video saves you planning time.',
  },

  // Ch 7: How do Organisms Reproduce
  {
    id: 'res-sci-ch7-1', subjectId: 'science', chapterId: 'sci-ch7', topicId: 'sci-ch7-t3',
    title: 'How do Organisms Reproduce — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'How do Organisms Reproduce one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '55 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Reproduction in humans is a favourite 3-mark question — this video covers both plants and humans clearly.',
  },

  // Ch 8: Heredity and Evolution
  {
    id: 'res-sci-ch8-1', subjectId: 'science', chapterId: 'sci-ch8', topicId: 'sci-ch8-t2',
    title: 'Heredity and Evolution — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Heredity and Evolution one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '45 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Mendel\'s laws and Punnett-square questions are high-yield — master the logic here before practising.',
  },

  // Ch 9: Light - Reflection and Refraction
  {
    id: 'res-sci-ch9-1', subjectId: 'science', chapterId: 'sci-ch9', topicId: 'sci-ch9-t1',
    title: 'Light — Reflection and Refraction (One Shot)',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Light Reflection and Refraction one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '60 min',
    resourceType: 'one_shot',
    priority: 10,
    reason: 'Mirror and lens formula questions carry heavy weightage — highest-priority chapter, start here.',
  },
  {
    id: 'res-sci-ch9-2', subjectId: 'science', chapterId: 'sci-ch9', topicId: 'sci-ch9-t5',
    title: 'Light — Numericals on Mirror and Lens Formula',
    url: searchUrl('ExpHub+Prashant+Kirad', 'light numericals mirror lens formula class 10'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '40 min',
    resourceType: 'numerical',
    priority: 9,
    reason: 'Numerical practice is essential — these formula problems appear every single year in boards.',
  },

  // Ch 10: The Human Eye and the Colourful World
  {
    id: 'res-sci-ch10-1', subjectId: 'science', chapterId: 'sci-ch10', topicId: 'sci-ch10-t2',
    title: 'Human Eye and the Colourful World — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Human Eye and Colourful World one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '40 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Defects of vision and their correction is a direct, high-scoring topic — quick marks in a short video.',
  },

  // Ch 11: Electricity
  {
    id: 'res-sci-ch11-1', subjectId: 'science', chapterId: 'sci-ch11', topicId: 'sci-ch11-t2',
    title: 'Electricity — One Shot (Ohm\'s Law + Circuits)',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Electricity class 10 one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '60 min',
    resourceType: 'one_shot',
    priority: 10,
    reason: 'Electricity is one of the most heavily weighted chapters — the one-shot builds the full foundation.',
  },
  {
    id: 'res-sci-ch11-2', subjectId: 'science', chapterId: 'sci-ch11', topicId: 'sci-ch11-t5',
    title: 'Electricity — Numerical Problem Practice',
    url: searchUrl('ExpHub+Prashant+Kirad', 'electricity numericals class 10'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '45 min',
    resourceType: 'numerical',
    priority: 9,
    reason: 'Resistance combination and heating-effect numericals are board favourites — practice them systematically.',
  },

  // Ch 12: Magnetic Effects of Electric Current
  {
    id: 'res-sci-ch12-1', subjectId: 'science', chapterId: 'sci-ch12', topicId: 'sci-ch12-t4',
    title: 'Magnetic Effects of Electric Current — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Magnetic Effects of Electric Current one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '55 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Electromagnetic induction and motors/generators are high-yield — this chapter links directly to Electricity.',
  },

  // Ch 13: Our Environment
  {
    id: 'res-sci-ch13-1', subjectId: 'science', chapterId: 'sci-ch13', topicId: 'sci-ch13-t1',
    title: 'Our Environment — One Shot (Ecosystems)',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Our Environment class 10 one shot'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '35 min',
    resourceType: 'one_shot',
    priority: 7,
    reason: 'Short, low-difficulty chapter — a quick win that boosts your preparation percentage fast.',
  },

  // Ch 14: Sustainable Management of Natural Resources
  {
    id: 'res-sci-ch14-1', subjectId: 'science', chapterId: 'sci-ch14', topicId: 'sci-ch14-t1',
    title: 'Sustainable Management of Natural Resources — One Shot',
    url: searchUrl('ExpHub+Prashant+Kirad', 'Sustainable Management of Natural Resources class 10'),
    provider: 'ExpHub - Prashant Kirad',
    duration: '30 min',
    resourceType: 'one_shot',
    priority: 7,
    reason: 'A short scoring chapter — cover forest and water management here when time is tight.',
  },

  // ============================================================
  // MATHEMATICS — Shobhit Nirwan / Mission Jeet (all 14 chapters)
  // ============================================================

  // Ch 1: Real Numbers
  {
    id: 'res-math-ch1-1', subjectId: 'mathematics', chapterId: 'math-ch1', topicId: 'math-ch1-t3',
    title: 'Real Numbers — Complete Chapter',
    url: searchUrl('Shobhit+Nirwan', 'Real Numbers class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '45 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Euclid\'s lemma and irrational-number proofs are guaranteed questions — cover the chapter end to end.',
  },
  {
    id: 'res-math-ch1-2', subjectId: 'mathematics', chapterId: 'math-ch1', topicId: 'math-ch1-t2',
    title: 'Fundamental Theorem of Arithmetic — Practice',
    url: searchUrl('Mission+Jeet', 'fundamental theorem of arithmetic class 10'),
    provider: 'Mission Jeet',
    duration: '25 min',
    resourceType: 'practice',
    priority: 7,
    reason: 'HCF/LCM problems using prime factorisation are a predictable 1-2 mark question.',
  },

  // Ch 2: Polynomials
  {
    id: 'res-math-ch2-1', subjectId: 'mathematics', chapterId: 'math-ch2', topicId: 'math-ch2-t2',
    title: 'Polynomials — Complete Chapter',
    url: searchUrl('Shobhit+Nirwan', 'Polynomials class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '40 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Relationship between zeroes and coefficients is a high-weightage concept with direct board questions.',
  },

  // Ch 3: Pair of Linear Equations in Two Variables
  {
    id: 'res-math-ch3-1', subjectId: 'mathematics', chapterId: 'math-ch3', topicId: 'math-ch3-t2',
    title: 'Pair of Linear Equations — Complete Chapter',
    url: searchUrl('Shobhit+Nirwan', 'pair of linear equations class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '50 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Elimination, substitution and cross-multiplication methods are exam staples — master all three.',
  },
  {
    id: 'res-math-ch3-2', subjectId: 'mathematics', chapterId: 'math-ch3', topicId: 'math-ch3-t4',
    title: 'Linear Equations — Cross-Multiplication Method',
    url: searchUrl('Mission+Jeet', 'cross multiplication method class 10'),
    provider: 'Mission Jeet',
    duration: '30 min',
    resourceType: 'numerical',
    priority: 8,
    reason: 'Cross-multiplication is the fastest method for board MCQs — drill it to save exam time.',
  },

  // Ch 4: Quadratic Equations
  {
    id: 'res-math-ch4-1', subjectId: 'mathematics', chapterId: 'math-ch4', topicId: 'math-ch4-t3',
    title: 'Quadratic Equations — Complete Chapter',
    url: searchUrl('Shobhit+Nirwan', 'Quadratic Equations class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '50 min',
    resourceType: 'one_shot',
    priority: 10,
    reason: 'Quadratic formula and discriminant questions are almost guaranteed — among the highest-yield math chapters.',
  },
  {
    id: 'res-math-ch4-2', subjectId: 'mathematics', chapterId: 'math-ch4', topicId: 'math-ch4-t5',
    title: 'Quadratic Equations — Word Problems',
    url: searchUrl('Mission+Jeet', 'quadratic equations word problems class 10'),
    provider: 'Mission Jeet',
    duration: '40 min',
    resourceType: 'numerical',
    priority: 9,
    reason: 'Word problems carry 3-4 marks and need dedicated practice — this video walks through the standard patterns.',
  },

  // Ch 5: Arithmetic Progressions
  {
    id: 'res-math-ch5-1', subjectId: 'mathematics', chapterId: 'math-ch5', topicId: 'math-ch5-t3',
    title: 'Arithmetic Progressions — Complete',
    url: searchUrl('Shobhit+Nirwan', 'Arithmetic Progressions class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '45 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'nth term and sum-of-n-terms formulas are direct high-scoring questions — strong ROI for study time.',
  },
  {
    id: 'res-math-ch5-2', subjectId: 'mathematics', chapterId: 'math-ch5', topicId: 'math-ch5-t4',
    title: 'AP — Word Problem Practice',
    url: searchUrl('Mission+Jeet', 'arithmetic progression word problems class 10'),
    provider: 'Mission Jeet',
    duration: '35 min',
    resourceType: 'practice',
    priority: 8,
    reason: 'AP applications are a favourite 3-mark question — build speed with this problem set.',
  },

  // Ch 6: Triangles
  {
    id: 'res-math-ch6-1', subjectId: 'mathematics', chapterId: 'math-ch6', topicId: 'math-ch6-t2',
    title: 'Triangles — BPT and Similarity (One Shot)',
    url: searchUrl('Shobhit+Nirwan', 'Triangles class 10 BPT similarity one shot'),
    provider: 'Shobhit Nirwan',
    duration: '50 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Basic Proportionality Theorem and similarity criteria are theorem-proof favourites in boards.',
  },
  {
    id: 'res-math-ch6-2', subjectId: 'mathematics', chapterId: 'math-ch6', topicId: 'math-ch6-t4',
    title: 'Pythagoras Theorem — Applications',
    url: searchUrl('Mission+Jeet', 'pythagoras theorem applications class 10'),
    provider: 'Mission Jeet',
    duration: '30 min',
    resourceType: 'practice',
    priority: 8,
    reason: 'Pythagoras-based problems appear across geometry questions — practice the standard setups.',
  },

  // Ch 7: Coordinate Geometry
  {
    id: 'res-math-ch7-1', subjectId: 'mathematics', chapterId: 'math-ch7', topicId: 'math-ch7-t1',
    title: 'Coordinate Geometry — Distance and Section Formula',
    url: searchUrl('Shobhit+Nirwan', 'Coordinate Geometry class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '40 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Distance and section formulas are simple formula-based marks — learn them once, score repeatedly.',
  },

  // Ch 8: Introduction to Trigonometry
  {
    id: 'res-math-ch8-1', subjectId: 'mathematics', chapterId: 'math-ch8', topicId: 'math-ch8-t1',
    title: 'Trigonometry — Introduction and Ratios',
    url: searchUrl('Shobhit+Nirwan', 'Introduction to Trigonometry class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '45 min',
    resourceType: 'one_shot',
    priority: 10,
    reason: 'Trigonometric ratios and identities are a guaranteed 5+ mark area — highest-priority math chapter.',
  },
  {
    id: 'res-math-ch8-2', subjectId: 'mathematics', chapterId: 'math-ch8', topicId: 'math-ch8-t3',
    title: 'Trigonometric Identities — Practice',
    url: searchUrl('Mission+Jeet', 'trigonometric identities class 10 practice'),
    provider: 'Mission Jeet',
    duration: '40 min',
    resourceType: 'numerical',
    priority: 9,
    reason: 'Identity-proving questions are board staples — practice the core patterns to solve them fast.',
  },

  // Ch 9: Applications of Trigonometry
  {
    id: 'res-math-ch9-1', subjectId: 'mathematics', chapterId: 'math-ch9', topicId: 'math-ch9-t2',
    title: 'Heights and Distances — Complete',
    url: searchUrl('Shobhit+Nirwan', 'heights and distances class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '40 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Angle of elevation/depression problems are a reliable 3-mark question — formula-driven and learnable.',
  },

  // Ch 10: Circles
  {
    id: 'res-math-ch10-1', subjectId: 'mathematics', chapterId: 'math-ch10', topicId: 'math-ch10-t3',
    title: 'Circles — Tangent Theorems',
    url: searchUrl('Shobhit+Nirwan', 'Circles class 10 tangent theorems one shot'),
    provider: 'Shobhit Nirwan',
    duration: '35 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Tangent-radius theorem is a frequently asked theorem question — clear explanation covers the proof.',
  },

  // Ch 11: Areas Related to Circles
  {
    id: 'res-math-ch11-1', subjectId: 'mathematics', chapterId: 'math-ch11', topicId: 'math-ch11-t2',
    title: 'Areas Related to Circles — Sector and Segment',
    url: searchUrl('Mission+Jeet', 'areas related to circles class 10 sector segment'),
    provider: 'Mission Jeet',
    duration: '35 min',
    resourceType: 'one_shot',
    priority: 7,
    reason: 'Sector and segment formulas are direct-scoring — a compact chapter worth grabbing points from.',
  },

  // Ch 12: Surface Areas and Volumes
  {
    id: 'res-math-ch12-1', subjectId: 'mathematics', chapterId: 'math-ch12', topicId: 'math-ch12-t1',
    title: 'Surface Areas and Volumes — Complete',
    url: searchUrl('Shobhit+Nirwan', 'Surface Areas and Volumes class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '50 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Combination-of-solids problems are a regular long-answer question — covers all formulas in one video.',
  },
  {
    id: 'res-math-ch12-2', subjectId: 'mathematics', chapterId: 'math-ch12', topicId: 'math-ch12-t3',
    title: 'Surface Areas and Volumes — Combined Solids',
    url: searchUrl('Mission+Jeet', 'surface areas volumes combination of solids class 10'),
    provider: 'Mission Jeet',
    duration: '40 min',
    resourceType: 'numerical',
    priority: 8,
    reason: 'Combined-solid and conversion problems carry 3-5 marks — this practice video builds confidence.',
  },

  // Ch 13: Statistics
  {
    id: 'res-math-ch13-1', subjectId: 'mathematics', chapterId: 'math-ch13', topicId: 'math-ch13-t3',
    title: 'Statistics — Mean, Median, Mode',
    url: searchUrl('Shobhit+Nirwan', 'Statistics class 10 mean median mode one shot'),
    provider: 'Shobhit Nirwan',
    duration: '45 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Grouped-data mean/median questions are a near-certain 3-4 marks — step-by-step method coverage.',
  },
  {
    id: 'res-math-ch13-2', subjectId: 'mathematics', chapterId: 'math-ch13', topicId: 'math-ch13-t4',
    title: 'Statistics — Ogive (Cumulative Frequency Curve)',
    url: searchUrl('Mission+Jeet', 'ogive cumulative frequency curve class 10'),
    provider: 'Mission Jeet',
    duration: '25 min',
    resourceType: 'concept',
    priority: 7,
    reason: 'Ogive-based questions are a favourite 5-mark item — graphing steps shown clearly.',
  },

  // Ch 14: Probability
  {
    id: 'res-math-ch14-1', subjectId: 'mathematics', chapterId: 'math-ch14', topicId: 'math-ch14-t1',
    title: 'Probability — Complete Chapter',
    url: searchUrl('Shobhit+Nirwan', 'Probability class 10 one shot'),
    provider: 'Shobhit Nirwan',
    duration: '35 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Dice, cards and coin problems are formula-light and high-scoring — quick marks near the end.',
  },
  {
    id: 'res-math-ch14-2', subjectId: 'mathematics', chapterId: 'math-ch14', topicId: 'math-ch14-t3',
    title: 'Probability — Deck of Cards & Dice Problems',
    url: searchUrl('Mission+Jeet', 'probability cards dice problems class 10'),
    provider: 'Mission Jeet',
    duration: '30 min',
    resourceType: 'practice',
    priority: 7,
    reason: 'Card and dice problems are the most repeated probability questions — drill the standard cases.',
  },

  // ============================================================
  // SOCIAL SCIENCE — Digraj Singh Rajput (key chapters)
  // ============================================================

  // History: Nationalism in India
  {
    id: 'res-ss-hist2-1', subjectId: 'social_science', chapterId: 'ss-hist-ch2', topicId: 'ss-hist-ch2-t2',
    title: 'Nationalism in India — Complete Chapter',
    url: searchUrl('Digraj+Singh+Rajput', 'Nationalism in India class 10 one shot'),
    provider: 'Digraj Singh Rajput',
    duration: '60 min',
    resourceType: 'one_shot',
    priority: 10,
    reason: 'Non-Cooperation and Civil Disobedience are top-scoring history questions — must-do chapter for boards.',
  },
  {
    id: 'res-ss-hist2-2', subjectId: 'social_science', chapterId: 'ss-hist-ch2', topicId: 'ss-hist-ch2-t3',
    title: 'Nationalism in India — Timeline Revision',
    url: searchUrl('Digraj+Singh+Rajput', 'Nationalism in India timeline revision'),
    provider: 'Digraj Singh Rajput',
    duration: '30 min',
    resourceType: 'revision',
    priority: 8,
    reason: 'Movement timelines are a common map-and-sequence question — perfect quick revision before the exam.',
  },

  // Political Science: Power Sharing
  {
    id: 'res-ss-ps1-1', subjectId: 'social_science', chapterId: 'ss-ps-ch1', topicId: 'ss-ps-ch1-t1',
    title: 'Power Sharing — Full Chapter',
    url: searchUrl('Digraj+Singh+Rajput', 'Power Sharing class 10 one shot'),
    provider: 'Digraj Singh Rajput',
    duration: '45 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Belgium vs Sri Lanka comparison is a guaranteed question — this video makes the contrast easy to remember.',
  },

  // Political Science: Federalism
  {
    id: 'res-ss-ps2-1', subjectId: 'social_science', chapterId: 'ss-ps-ch2', topicId: 'ss-ps-ch2-t1',
    title: 'Federalism — Complete Chapter',
    url: searchUrl('Digraj+Singh+Rajput', 'Federalism class 10 one shot'),
    provider: 'Digraj Singh Rajput',
    duration: '50 min',
    resourceType: 'one_shot',
    priority: 9,
    reason: 'Centre-state relations and Panchayati Raj are high-yield — clear diagrams help retention.',
  },

  // Political Science: Democracy and Diversity
  {
    id: 'res-ss-ps3-1', subjectId: 'social_science', chapterId: 'ss-ps-ch3', topicId: 'ss-ps-ch3-t2',
    title: 'Democracy and Diversity — Full Chapter',
    url: searchUrl('Digraj+Singh+Rajput', 'Democracy and Diversity class 10 one shot'),
    provider: 'Digraj Singh Rajput',
    duration: '40 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Social-difference and political-competition concepts are a frequent 3-mark area — covered concisely.',
  },

  // Geography: Resources and Development
  {
    id: 'res-ss-geo1-1', subjectId: 'social_science', chapterId: 'ss-geo-ch1', topicId: 'ss-geo-ch1-t2',
    title: 'Resources and Development — Complete Chapter',
    url: searchUrl('Digraj+Singh+Rajput', 'Resources and Development class 10 one shot'),
    provider: 'Digraj Singh Rajput',
    duration: '45 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Resource planning and soil types are map-heavy scoring topics — good for quick marks.',
  },

  // Geography: Forest and Wildlife
  {
    id: 'res-ss-geo2-1', subjectId: 'social_science', chapterId: 'ss-geo-ch2', topicId: 'ss-geo-ch2-t2',
    title: 'Forest and Wildlife Resources — Full Chapter',
    url: searchUrl('Digraj+Singh+Rajput', 'Forest and Wildlife Resources class 10 one shot'),
    provider: 'Digraj Singh Rajput',
    duration: '40 min',
    resourceType: 'one_shot',
    priority: 7,
    reason: 'Biodiversity and protected areas are direct short-answer questions — compact and score-friendly.',
  },

  // Economics: Sectors of the Indian Economy
  {
    id: 'res-ss-eco2-1', subjectId: 'social_science', chapterId: 'ss-eco-ch2', topicId: 'ss-eco-ch2-t1',
    title: 'Sectors of the Indian Economy — One Shot',
    url: searchUrl('Digraj+Singh+Rajput', 'Sectors of Indian Economy class 10 one shot'),
    provider: 'Digraj Singh Rajput',
    duration: '45 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Primary/secondary/tertiary classification with GDP links is a recurring high-weightage question.',
  },

  // Economics: Money and Credit
  {
    id: 'res-ss-eco3-1', subjectId: 'social_science', chapterId: 'ss-eco-ch3', topicId: 'ss-eco-ch3-t2',
    title: 'Money and Credit — Full Chapter',
    url: searchUrl('Digraj+Singh+Rajput', 'Money and Credit class 10 one shot'),
    provider: 'Digraj Singh Rajput',
    duration: '45 min',
    resourceType: 'one_shot',
    priority: 8,
    reason: 'Formal vs informal credit sources are a favourite 5-mark question — real-world examples make it stick.',
  },
  {
    id: 'res-ss-eco3-2', subjectId: 'social_science', chapterId: 'ss-eco-ch3', topicId: 'ss-eco-ch3-t3',
    title: 'Money and Credit — Credit & RBI Explained',
    url: searchUrl('Digraj+Singh+Rajput', 'Money and Credit credit RBI class 10'),
    provider: 'Digraj Singh Rajput',
    duration: '30 min',
    resourceType: 'concept',
    priority: 7,
    reason: 'Credit terms and RBI functions are commonly confused — this focused video clears the basics.',
  },

  // ============================================================
  // ENGLISH — General CBSE educators (kept + reasons)
  // ============================================================
  {
    id: 'res-eng-ff-1', subjectId: 'english', chapterId: 'eng-ff-ch2', topicId: 'eng-ff-ch2-t2',
    title: 'Nelson Mandela — Summary and Themes',
    url: searchUrl('LearnCBSE', 'Nelson Mandela Long Walk to Freedom summary class 10'),
    provider: 'LearnCBSE',
    duration: '20 min',
    resourceType: 'revision',
    priority: 7,
    reason: 'Summary and theme-based answers score well — quick revision of the most-asked First Flight chapter.',
  },
  {
    id: 'res-eng-ff-2', subjectId: 'english', chapterId: 'eng-ff-ch10', topicId: 'eng-ff-ch10-t2',
    title: 'The Sermon at Benares — Complete Explanation',
    url: searchUrl('LearnCBSE', 'The Sermon at Benares explanation class 10'),
    provider: 'LearnCBSE',
    duration: '25 min',
    resourceType: 'concept',
    priority: 7,
    reason: 'Line-by-line explanation helps you answer extract-based and value-based questions confidently.',
  },
];

/**
 * Parse a duration string like "45 min" into minutes (for time filtering).
 */
export function parseDurationMinutes(duration: string): number {
  const match = duration.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 30;
}

/**
 * Get resources for a specific chapter
 */
export function getResourcesForChapter(chapterId: string): Resource[] {
  return resources.filter(r => r.chapterId === chapterId);
}

/**
 * Get resources for a specific topic
 */
export function getResourcesForTopic(topicId: string): Resource[] {
  return resources.filter(r => r.topicId === topicId);
}

/**
 * Get recommended resources based on student weakness.
 *
 * @param subjectId      The selected subject.
 * @param weakTopicIds   Topic ids the student has struggled with (from quizzes/self-report).
 * @param timeAvailable  Minutes the student has available right now (filters by duration).
 * @param reason         Optional personalization — a context-specific reason (e.g. "You scored
 *                       low on this topic in your last quiz") that is attached to every result.
 *
 * Returns up to 5 resources whose duration fits the available time, sorted by priority,
 * each carrying a personalized `reason`.
 */
export function getRecommendedResources(
  subjectId: string,
  weakTopicIds: string[],
  timeAvailable: number,
  reason?: string
): Resource[] {
  const subjectResources = resources.filter(r => r.subjectId === subjectId);
  const weakResources = subjectResources.filter(r =>
    weakTopicIds.includes(r.topicId || '')
  );

  // Only show resources the student can finish within the available time
  const budget = timeAvailable > 0 ? timeAvailable : 60;
  const fits = weakResources.filter(r => parseDurationMinutes(r.duration) <= budget);

  // If nothing fits the time budget, fall back to the highest priority resources
  const pool = fits.length > 0 ? fits : weakResources;

  return pool
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 5)
    .map(r => ({
      ...r,
      reason: reason || r.reason || 'High-priority topic recommended for your preparation.',
    }));
}

/**
 * Get resource by ID
 */
export function getResourceById(id: string): Resource | undefined {
  return resources.find(r => r.id === id);
}
