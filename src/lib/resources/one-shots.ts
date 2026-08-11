// YouTube one-shot video mappings for Class 10 chapters
// Science: Prashant Kirad (ExpHub)
// Social Science: Digraj Singh Rajput
// Maths: Shobhit Nirwan
// English: Educational Content

export interface OneShotVideo {
  channel: string;
  videoId: string;
  title: string;
}

const scienceOneShots: Record<string, OneShotVideo> = {
  'sci-ch1': { channel: 'Prashant Kirad', videoId: 'gQ-X9wV8TXQ', title: 'Chemical Reactions and Equations' },
  'sci-ch2': { channel: 'Prashant Kirad', videoId: 'qKl4mieovu0', title: 'Acids, Bases and Salts' },
  'sci-ch3': { channel: 'Prashant Kirad', videoId: 'YV1BFWi-AWY', title: 'Metals and Non-metals' },
  'sci-ch4': { channel: 'Prashant Kirad', videoId: 'mb3csoFqLGs', title: 'Carbon and its Compounds' },
  'sci-ch5': { channel: 'Prashant Kirad', videoId: 'iwdChb3QZ7I', title: 'Life Processes' },
  'sci-ch6': { channel: 'Prashant Kirad', videoId: '2SvKmS99xhM', title: 'Control and Coordination' },
  'sci-ch7': { channel: 'Prashant Kirad', videoId: 'n4LLUcXOYgc', title: 'How do Organisms Reproduce' },
  'sci-ch8': { channel: 'Prashant Kirad', videoId: 'm1vfHJaaf4E', title: 'Heredity and Evolution' },
  'sci-ch9': { channel: 'Prashant Kirad', videoId: '8Rwv2hvdZFo', title: 'Light - Reflection and Refraction' },
  'sci-ch10': { channel: 'Prashant Kirad', videoId: 'VWNxgkOr55Y', title: 'Human Eye and Colourful World' },
  'sci-ch11': { channel: 'Prashant Kirad', videoId: 'J3DvsZfYEfs', title: 'Electricity' },
  'sci-ch12': { channel: 'Prashant Kirad', videoId: 'D5rouymJ_UA', title: 'Magnetic Effects of Electric Current' },
  'sci-ch13': { channel: 'Prashant Kirad', videoId: 'WGdQZoMYSjk', title: 'Our Environment' },
  'sci-ch14': { channel: 'Prashant Kirad', videoId: 'WGdQZoMYSjk', title: 'Sustainable Management of Natural Resources' },
};

const mathOneShots: Record<string, OneShotVideo> = {
  'math-ch1': { channel: 'Shobhit Nirwan', videoId: '7wYSGOJcK10', title: 'Real Numbers' },
  'math-ch2': { channel: 'Shobhit Nirwan', videoId: 'Uill15OhzjE', title: 'Polynomials' },
  'math-ch3': { channel: 'Shobhit Nirwan', videoId: 'mDV43Sdoq2Y', title: 'Pair of Linear Equations' },
  'math-ch4': { channel: 'Shobhit Nirwan', videoId: 'UkstzZACyQ8', title: 'Quadratic Equations' },
  'math-ch5': { channel: 'Shobhit Nirwan', videoId: 'buTk-CqJlIA', title: 'Arithmetic Progressions' },
  'math-ch6': { channel: 'Shobhit Nirwan', videoId: 'c4s8NxJ7Swk', title: 'Triangles' },
  'math-ch7': { channel: 'Shobhit Nirwan', videoId: 'pVgBUVf-oTM', title: 'Coordinate Geometry' },
  'math-ch8': { channel: 'Shobhit Nirwan', videoId: '2wYLgSGVNqY', title: 'Introduction to Trigonometry' },
  'math-ch9': { channel: 'Shobhit Nirwan', videoId: 'fnipHHsib94', title: 'Some Applications of Trigonometry' },
  'math-ch10': { channel: 'Shobhit Nirwan', videoId: 'tnpV2VhiQnE', title: 'Circles' },
  'math-ch11': { channel: 'Shobhit Nirwan', videoId: 'Q0hZNlAlyxk', title: 'Areas Related to Circles' },
  'math-ch12': { channel: 'Shobhit Nirwan', videoId: 'nL48cLNpdOE', title: 'Surface Areas and Volumes' },
  'math-ch13': { channel: 'Shobhit Nirwan', videoId: 'a9P3hJ7VcrM', title: 'Statistics' },
  'math-ch14': { channel: 'Shobhit Nirwan', videoId: 'rLiA1jqxqDM', title: 'Probability' },
};

const sstOneShots: Record<string, OneShotVideo> = {
  // History
  'sst-ch1': { channel: 'Digraj Singh Rajput', videoId: 'JXeryAV8JNE', title: 'The Rise of Nationalism in Europe' },
  'sst-ch2': { channel: 'Digraj Singh Rajput', videoId: 'exByrWPeYvk', title: 'Nationalism in India' },
  'sst-ch3': { channel: 'Digraj Singh Rajput', videoId: 'kLe3K7JEYO8', title: 'The Making of a Global World' },
  'sst-ch4': { channel: 'Digraj Singh Rajput', videoId: '9XWKDo5LElU', title: 'The Age of Industrialisation' },
  'sst-ch5': { channel: 'Digraj Singh Rajput', videoId: 'UWBwLodPMwg', title: 'Print Culture and The Modern World' },
  // Geography
  'sst-ch6': { channel: 'Digraj Singh Rajput', videoId: 'Cq5ULsLLItY', title: 'Resources and Development' },
  'sst-ch7': { channel: 'Digraj Singh Rajput', videoId: 'GqLBGoMkEVA', title: 'Forest and Wildlife Resources' },
  'sst-ch8': { channel: 'Digraj Singh Rajput', videoId: 'kEhVWVCeUTk', title: 'Water Resources' },
  'sst-ch9': { channel: 'Digraj Singh Rajput', videoId: 'kmnddbK-VqY', title: 'Agriculture' },
  'sst-ch10': { channel: 'Digraj Singh Rajput', videoId: 'zaiju4KFOPg', title: 'Minerals and Energy Resources' },
  'sst-ch11': { channel: 'Digraj Singh Rajput', videoId: 'NTcr_rYHiSE', title: 'Manufacturing Industries' },
  'sst-ch12': { channel: 'Digraj Singh Rajput', videoId: 'x0OzQNRziaE', title: 'Lifelines of National Economy' },
  // Civics
  'sst-ch13': { channel: 'Digraj Singh Rajput', videoId: 'rCNNEZFLwtM', title: 'Power Sharing' },
  'sst-ch14': { channel: 'Digraj Singh Rajput', videoId: 'q5uuKyIwAPM', title: 'Federalism' },
  'sst-ch15': { channel: 'Digraj Singh Rajput', videoId: 'O4GfrcwDF24', title: 'Democracy and Diversity' },
  'sst-ch16': { channel: 'Digraj Singh Rajput', videoId: 'rCNNEZFLwtM', title: 'Political Parties' },
  'sst-ch17': { channel: 'Digraj Singh Rajput', videoId: 'JVBWKBYsvH4', title: 'Outcomes of Democracy' },
  // Economics
  'sst-ch18': { channel: 'Digraj Singh Rajput', videoId: 'kNh_4EtB31A', title: 'Development' },
  'sst-ch19': { channel: 'Digraj Singh Rajput', videoId: '6avWRnhAvSU', title: 'Sectors of the Indian Economy' },
  'sst-ch20': { channel: 'Digraj Singh Rajput', videoId: 'V6LPuBEXCfE', title: 'Money and Credit' },
  'sst-ch21': { channel: 'Digraj Singh Rajput', videoId: 'PK2YonJyUeg', title: 'Globalisation and the Indian Economy' },
  'sst-ch22': { channel: 'Digraj Singh Rajput', videoId: 'gtFjdcVcvys', title: 'Consumer Rights' },
  'sst-ch23': { channel: 'Digraj Singh Rajput', videoId: 'mim9Z_HxX-Q', title: 'Indian Economy Challenges' },
};

const englishOneShots: Record<string, OneShotVideo> = {
  'eng-ch1': { channel: 'Educational Content', videoId: 'dQw4w9WgXcQ', title: 'First Flight - Prose' },
  'eng-ch2': { channel: 'Educational Content', videoId: 'dQw4w9WgXcQ', title: 'First Flight - Poetry' },
  'eng-ch3': { channel: 'Educational Content', videoId: 'dQw4w9WgXcQ', title: 'Footprints without Feet' },
};

export function getOneShotVideo(subjectId: string, chapterId: string): OneShotVideo | null {
  switch (subjectId) {
    case 'science': return scienceOneShots[chapterId] || null;
    case 'mathematics': return mathOneShots[chapterId] || null;
    case 'social-science': return sstOneShots[chapterId] || null;
    case 'english': return englishOneShots[chapterId] || null;
    default: return null;
  }
}

export function shouldShowOneShot(chapterStatus: string): boolean {
  return chapterStatus === 'partial' || chapterStatus === 'not_prepared';
}
