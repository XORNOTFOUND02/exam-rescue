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
  // History (ss-hist-ch*)
  'ss-hist-ch1': { channel: 'Digraj Singh Rajput', videoId: 'JXeryAV8JNE', title: 'The Rise of Nationalism in Europe' },
  'ss-hist-ch2': { channel: 'Digraj Singh Rajput', videoId: 'exByrWPeYvk', title: 'Nationalism in India' },
  'ss-hist-ch3': { channel: 'Digraj Singh Rajput', videoId: 'kLe3K7JEYO8', title: 'The Making of a Global World' },
  'ss-hist-ch4': { channel: 'Digraj Singh Rajput', videoId: '9XWKDo5LElU', title: 'The Age of Industrialisation' },
  'ss-hist-ch5': { channel: 'Digraj Singh Rajput', videoId: 'UWBwLodPMwg', title: 'Print Culture and The Modern World' },
  // Geography (ss-geo-ch*)
  'ss-geo-ch1': { channel: 'Digraj Singh Rajput', videoId: 'Cq5ULsLLItY', title: 'Resources and Development' },
  'ss-geo-ch2': { channel: 'Digraj Singh Rajput', videoId: 'GqLBGoMkEVA', title: 'Forest and Wildlife Resources' },
  'ss-geo-ch3': { channel: 'Digraj Singh Rajput', videoId: 'kEhVWVCeUTk', title: 'Water Resources' },
  'ss-geo-ch4': { channel: 'Digraj Singh Rajput', videoId: 'kmnddbK-VqY', title: 'Agriculture' },
  'ss-geo-ch5': { channel: 'Digraj Singh Rajput', videoId: 'zaiju4KFOPg', title: 'Minerals and Energy Resources' },
  'ss-geo-ch6': { channel: 'Digraj Singh Rajput', videoId: 'NTcr_rYHiSE', title: 'Manufacturing Industries' },
  'ss-geo-ch7': { channel: 'Digraj Singh Rajput', videoId: 'x0OzQNRziaE', title: 'Lifelines of National Economy' },
  // Political Science (ss-ps-ch*)
  'ss-ps-ch1': { channel: 'Digraj Singh Rajput', videoId: 'rCNNEZFLwtM', title: 'Power Sharing' },
  'ss-ps-ch2': { channel: 'Digraj Singh Rajput', videoId: 'q5uuKyIwAPM', title: 'Federalism' },
  'ss-ps-ch3': { channel: 'Digraj Singh Rajput', videoId: 'O4GfrcwDF24', title: 'Democracy and Diversity' },
  'ss-ps-ch4': { channel: 'Digraj Singh Rajput', videoId: 'rCNNEZFLwtM', title: 'Gender, Religion and Caste' },
  'ss-ps-ch5': { channel: 'Digraj Singh Rajput', videoId: 'rCNNEZFLwtM', title: 'Political Parties' },
  'ss-ps-ch6': { channel: 'Digraj Singh Rajput', videoId: 'JVBWKBYsvH4', title: 'Outcomes of Democracy' },
  // Economics (ss-eco-ch*)
  'ss-eco-ch1': { channel: 'Digraj Singh Rajput', videoId: 'kNh_4EtB31A', title: 'Development' },
  'ss-eco-ch2': { channel: 'Digraj Singh Rajput', videoId: '6avWRnhAvSU', title: 'Sectors of the Indian Economy' },
  'ss-eco-ch3': { channel: 'Digraj Singh Rajput', videoId: 'V6LPuBEXCfE', title: 'Money and Credit' },
  'ss-eco-ch4': { channel: 'Digraj Singh Rajput', videoId: 'PK2YonJyUeg', title: 'Globalisation and the Indian Economy' },
  'ss-eco-ch5': { channel: 'Digraj Singh Rajput', videoId: 'gtFjdcVcvys', title: 'Consumer Rights' },
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
    case 'social_science': return sstOneShots[chapterId] || null;
    case 'english': return englishOneShots[chapterId] || null;
    default: return null;
  }
}

export function shouldShowOneShot(chapterStatus: string): boolean {
  return chapterStatus === 'partial' || chapterStatus === 'not_prepared';
}
