// YouTube one-shot video mappings for Class 10 chapters
// Science: Prashant Kirad (ExpHub)
// Social Science: Digraj Singh Rajput (full chapter explanations)
// Maths: Shobhit Nirwan
// English: Educational Bhaiya

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
  'ss-hist-ch1': { channel: 'Digraj Singh Rajput', videoId: 'lTbloYiHdiQ', title: 'The Rise of Nationalism in Europe' },
  'ss-hist-ch2': { channel: 'Digraj Singh Rajput', videoId: 'exByrWPeYvk', title: 'Nationalism in India' },
  'ss-hist-ch3': { channel: 'Digraj Singh Rajput', videoId: 'DMs_3ZnaN5M', title: 'The Making of a Global World' },
  'ss-hist-ch4': { channel: 'Digraj Singh Rajput', videoId: '1fG7LEJBClU', title: 'The Age of Industrialisation' },
  'ss-hist-ch5': { channel: 'Digraj Singh Rajput', videoId: 'oI1Pw9qEYyU', title: 'Print Culture and The Modern World' },
  // Geography (ss-geo-ch*)
  'ss-geo-ch1': { channel: 'Digraj Singh Rajput', videoId: 'H9RAGaOBpr8', title: 'Resources and Development' },
  'ss-geo-ch2': { channel: 'Digraj Singh Rajput', videoId: '8svGUETOw5o', title: 'Forest and Wildlife Resources' },
  'ss-geo-ch3': { channel: 'Digraj Singh Rajput', videoId: 'xOyDX8nAc_o', title: 'Water Resources' },
  'ss-geo-ch4': { channel: 'Digraj Singh Rajput', videoId: 'kmnddbK-VqY', title: 'Agriculture' },
  'ss-geo-ch5': { channel: 'Digraj Singh Rajput', videoId: 'iuR9YIiDXFE', title: 'Minerals and Energy Resources' },
  'ss-geo-ch6': { channel: 'Digraj Singh Rajput', videoId: 'NTcr_rYHiSE', title: 'Manufacturing Industries' },
  'ss-geo-ch7': { channel: 'Digraj Singh Rajput', videoId: 'QWQUKfMIJP8', title: 'Lifelines of National Economy' },
  // Political Science (ss-ps-ch*)
  'ss-ps-ch1': { channel: 'Digraj Singh Rajput', videoId: '1HxLCF3sDzA', title: 'Power Sharing' },
  'ss-ps-ch2': { channel: 'Digraj Singh Rajput', videoId: 'I0ZmY77j0gg', title: 'Federalism' },
  'ss-ps-ch3': { channel: 'Magnet Brains', videoId: 'O4GfrcwDF24', title: 'Democracy and Diversity' }, // Full chapter 1:11:52 - Digraj doesn't have this chapter
  'ss-ps-ch4': { channel: 'Digraj Singh Rajput', videoId: 'Jy2rireNJBs', title: 'Gender, Religion and Caste' },
  'ss-ps-ch5': { channel: 'Digraj Singh Rajput', videoId: 'rCNNEZFLwtM', title: 'Political Parties' },
  'ss-ps-ch6': { channel: 'Digraj Singh Rajput', videoId: 'JVBWKBYsvH4', title: 'Outcomes of Democracy' },
  // Economics (ss-eco-ch*)
  'ss-eco-ch1': { channel: 'Digraj Singh Rajput', videoId: 'L-FGyJY0Thk', title: 'Development' },
  'ss-eco-ch2': { channel: 'Digraj Singh Rajput', videoId: 'Kll5_iIJj2g', title: 'Sectors of the Indian Economy' },
  'ss-eco-ch3': { channel: 'Digraj Singh Rajput', videoId: 'V6LPuBEXCfE', title: 'Money and Credit' },
  'ss-eco-ch4': { channel: 'Digraj Singh Rajput', videoId: '8kiUJ65f8iQ', title: 'Globalisation and the Indian Economy' },
  'ss-eco-ch5': { channel: 'Digraj Singh Rajput', videoId: 'gtFjdcVcvys', title: 'Consumer Rights' },
};

// English one-shots from Educational Bhaiya
// eng-ff-* = First Flight Prose, eng-fp-* = First Flight Poetry, eng-ww-* = Footprints without Feet
const englishOneShots: Record<string, OneShotVideo> = {
  // First Flight Prose — all map to the full one-shot
  'eng-ff-ch1': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'A Letter to God' },
  'eng-ff-ch2': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'Nelson Mandela: Long Walk to Freedom' },
  'eng-ff-ch3': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'Two Stories about Flying' },
  'eng-ff-ch4': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'From the Diary of Anne Frank' },
  'eng-ff-ch5': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'The Hundred Dresses - I' },
  'eng-ff-ch6': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'The Hundred Dresses - II' },
  'eng-ff-ch7': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'Glimpses of India' },
  'eng-ff-ch8': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'Mijbil the Otter' },
  'eng-ff-ch9': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'Madam Rides the Bus' },
  'eng-ff-ch10': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'The Sermon at Benares' },
  'eng-ff-ch11': { channel: 'Educational Bhaiya', videoId: 't-VEZWcZTYQ', title: 'The Proposal' },
  // First Flight Poetry — all map to the poetry one-shot
  'eng-fp-ch1': { channel: 'Educational Bhaiya', videoId: 'S42gn-LOGqo', title: 'Dust of Snow / Fire and Ice' },
  'eng-fp-ch2': { channel: 'Educational Bhaiya', videoId: 'S42gn-LOGqo', title: 'A Tiger in the Zoo' },
  'eng-fp-ch3': { channel: 'Educational Bhaiya', videoId: 'S42gn-LOGqo', title: 'How to Tell Wild Animals / The Ball Poem' },
  'eng-fp-ch4': { channel: 'Educational Bhaiya', videoId: 'S42gn-LOGqo', title: 'Amanda / Animals' },
  'eng-fp-ch5': { channel: 'Educational Bhaiya', videoId: 'S42gn-LOGqo', title: 'The Ball Poem / For Anne Gregory' },
  // Footprints without Feet
  'eng-ww-ch1': { channel: 'Educational Bhaiya', videoId: '1CY8E_8nuXY', title: 'Footprints without Feet' },
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
