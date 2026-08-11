// YouTube one-shot video mappings for all classes (9, 10, 11, 12)
// Class 10 Science: Prashant Kirad (ExpHub), Math: Shobhit Nirwan, SST: Digraj, English: Educational Bhaiya
// Class 9: Prashant Kirad (ExpHub 9th), Shobhit Nirwan (9th), Digraj, Dear Sir
// Class 11: Prashant Kirad (11th/12th), PW
// Class 12: NCERT Wallah

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

// Class 9/11/12 one-shot maps (placeholder videoIds — '' until verified)
// Keys match chapter ids in src/lib/syllabus/class9-*.ts, class11-*.ts, class12-*.ts
const class9ScienceOneShots: Record<string, OneShotVideo> = {
  'sci-ch1': { channel: 'Prashant Kirad', videoId: 'bmzDsWMSCTk', title: 'Matter in Our Surroundings' },
  'sci-ch2': { channel: 'Prashant Kirad', videoId: 'KUqLOHFNTgk', title: 'Is Matter Around Us Pure' },
  'sci-ch3': { channel: 'PW Foundation', videoId: 'GGNN3cl57DQ', title: 'Atoms and Molecules' },
  'sci-ch4': { channel: 'PW Foundation', videoId: 'GGNN3cl57DQ', title: 'Structure of the Atom' },
  'sci-ch5': { channel: 'PW Foundation', videoId: 'GGNN3cl57DQ', title: 'The Fundamental Unit of Life' },
  'sci-ch6': { channel: 'PW Foundation', videoId: 'GGNN3cl57DQ', title: 'Tissues' },
  'sci-ch7': { channel: 'PW Foundation', videoId: 'GGNN3cl57DQ', title: 'Diversity in Living Organisms' },
  'sci-ch8': { channel: 'PW Foundation', videoId: 'Msy44HhRGRw', title: 'Motion' },
  'sci-ch9': { channel: 'PW Foundation', videoId: 'yhyMVW8vhlw', title: 'Force and Laws of Motion' },
  'sci-ch10': { channel: 'PW Foundation', videoId: 'yhyMVW8vhlw', title: 'Gravitation' },
  'sci-ch11': { channel: 'PW NEEV', videoId: 'RC1byAKXHKw', title: 'Work and Energy' },
  'sci-ch12': { channel: 'PW Foundation', videoId: 'Msy44HhRGRw', title: 'Sound' },
  'sci-ch13': { channel: 'PW Foundation', videoId: 'GGNN3cl57DQ', title: 'Why Do We Fall Ill' },
  'sci-ch14': { channel: 'PW Foundation', videoId: 'GGNN3cl57DQ', title: 'Natural Resources' },
  'sci-ch15': { channel: 'PW Foundation', videoId: 'GGNN3cl57DQ', title: 'Improvement in Food Resources' },
};

const class9MathOneShots: Record<string, OneShotVideo> = {
  'math-ch1': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Number Systems' },
  'math-ch2': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Polynomials' },
  'math-ch3': { channel: 'Shobhit Nirwan', videoId: 'CEF-IN3HMgk', title: 'Coordinate Geometry' },
  'math-ch4': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Linear Equations in Two Variables' },
  'math-ch5': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Introduction to Euclid\'s Geometry' },
  'math-ch6': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Lines and Angles' },
  'math-ch7': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Triangles' },
  'math-ch8': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Quadrilaterals' },
  'math-ch9': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Areas of Parallelograms and Triangles' },
  'math-ch10': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Circles' },
  'math-ch11': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Constructions' },
  'math-ch12': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Heron\'s Formula' },
  'math-ch13': { channel: 'Shobhit Nirwan', videoId: 'hq60NbWkt0c', title: 'Surface Areas and Volumes' },
  'math-ch14': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Statistics' },
  'math-ch15': { channel: 'Shobhit Nirwan', videoId: '4VHrvMutJQw', title: 'Probability' },
};

const class9SstOneShots: Record<string, OneShotVideo> = {
  // History
  'ss-hist-ch1': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'The French Revolution' },
  'ss-hist-ch2': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'Socialism in Europe and the Russian Revolution' },
  'ss-hist-ch3': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'Nazism and the Rise of Hitler' },
  'ss-hist-ch4': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'Forest Society and Colonialism' },
  'ss-hist-ch5': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'Pastoralists in the Modern World' },
  // Geography
  'ss-geo-ch1': { channel: 'Digraj Singh Rajput', videoId: 'CdVf_H44tho', title: 'India - Size and Location' },
  'ss-geo-ch2': { channel: 'Digraj Singh Rajput', videoId: 'CdVf_H44tho', title: 'Physical Features of India' },
  'ss-geo-ch3': { channel: 'Digraj Singh Rajput', videoId: 'CdVf_H44tho', title: 'Drainage' },
  'ss-geo-ch4': { channel: 'Digraj Singh Rajput', videoId: 'CdVf_H44tho', title: 'Climate' },
  'ss-geo-ch5': { channel: 'Digraj Singh Rajput', videoId: 'CdVf_H44tho', title: 'Natural Vegetation and Wild Life' },
  'ss-geo-ch6': { channel: 'Digraj Singh Rajput', videoId: 'CdVf_H44tho', title: 'Population' },
  // Political Science
  'ss-ps-ch1': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'What is Democracy? Why Democracy?' },
  'ss-ps-ch2': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'Constitutional Design' },
  'ss-ps-ch3': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'Electoral Politics in Democracy' },
  'ss-ps-ch4': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'Working of Institutions' },
  'ss-ps-ch5': { channel: 'Digraj Singh Rajput', videoId: 'N4KswB4OA0c', title: 'Democratic Rights' },
};

const class9EnglishOneShots: Record<string, OneShotVideo> = {
  // Beehive Prose (eng-bh-ch*)
  'eng-bh-ch1': { channel: 'Dear Sir', videoId: 'utIFfatMqLk', title: 'The Fun They Had' },
  'eng-bh-ch2': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'The Sound of Music' },
  'eng-bh-ch3': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'The Little Girl' },
  'eng-bh-ch4': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'A Truly Beautiful Mind' },
  'eng-bh-ch5': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'The Snake and the Mirror' },
  'eng-bh-ch6': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'My Childhood' },
  'eng-bh-ch7': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'Packing' },
  'eng-bh-ch8': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'Reach for the Top' },
  'eng-bh-ch9': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'The Bond of Love' },
  'eng-bh-ch10': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'Kathmandu' },
  'eng-bh-ch11': { channel: 'Dear Sir', videoId: '0VAkuxxCvnI', title: 'If I Were You' },
  // Beehive Poetry (eng-bp-ch*)
  'eng-bp-ch1': { channel: 'Dear Sir', videoId: 'GWJgruZtWT8', title: 'The Road Not Taken' },
  'eng-bp-ch2': { channel: 'Dear Sir', videoId: 'GWJgruZtWT8', title: 'Wind' },
  'eng-bp-ch3': { channel: 'Dear Sir', videoId: 'GWJgruZtWT8', title: 'Rain on the Roof' },
  'eng-bp-ch4': { channel: 'Dear Sir', videoId: 'GWJgruZtWT8', title: 'The Lake Isle of Innisfree' },
  'eng-bp-ch5': { channel: 'Dear Sir', videoId: 'GWJgruZtWT8', title: 'The Duck and the Kangaroo' },
  'eng-bp-ch6': { channel: 'Dear Sir', videoId: 'GWJgruZtWT8', title: 'I Wandered Lonely as a Cloud' },
  'eng-bp-ch7': { channel: 'Dear Sir', videoId: 'GWJgruZtWT8', title: 'On Killing a Tree' },
  'eng-bp-ch8': { channel: 'Dear Sir', videoId: 'GWJgruZtWT8', title: 'A Slumber Did My Spirit Seal' },
};

const class11PhysicsOneShots: Record<string, OneShotVideo> = {
  'phy-ch1': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Physical World' },
  'phy-ch2': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Units and Measurements' },
  'phy-ch3': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Motion in a Straight Line' },
  'phy-ch4': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Motion in a Plane' },
  'phy-ch5': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Laws of Motion' },
  'phy-ch6': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Work, Energy and Power' },
  'phy-ch7': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'System of Particles and Rotational Motion' },
  'phy-ch8': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Gravitation' },
  'phy-ch9': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Mechanical Properties of Solids' },
  'phy-ch10': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Mechanical Properties of Fluids' },
  'phy-ch11': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Thermal Properties of Matter' },
  'phy-ch12': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Thermodynamics' },
  'phy-ch13': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Kinetic Theory' },
  'phy-ch14': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Oscillations' },
  'phy-ch15': { channel: 'Prashant Kirad', videoId: 'HYQdPGN3ZXQ', title: 'Waves' },
};

const class11ChemistryOneShots: Record<string, OneShotVideo> = {
  'chem-ch1': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Some Basic Concepts of Chemistry' },
  'chem-ch2': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Structure of Atom' },
  'chem-ch3': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Classification of Elements' },
  'chem-ch4': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Chemical Bonding' },
  'chem-ch5': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'States of Matter' },
  'chem-ch6': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Thermodynamics' },
  'chem-ch7': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Equilibrium' },
  'chem-ch8': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Redox Reactions' },
  'chem-ch9': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Hydrogen' },
  'chem-ch10': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 's-Block Elements' },
  'chem-ch11': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'p-Block Elements' },
  'chem-ch12': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Organic Chemistry - Basic Principles' },
  'chem-ch13': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Hydrocarbons' },
  'chem-ch14': { channel: 'Prashant Kirad', videoId: 'k4FvOpHU0jo', title: 'Environmental Chemistry' },
};
const class11MathsOneShots: Record<string, OneShotVideo> = {
  'math-ch1': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Sets' },
  'math-ch2': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Relations and Functions' },
  'math-ch3': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Trigonometric Functions' },
  'math-ch4': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Principle of Mathematical Induction' },
  'math-ch5': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Complex Numbers' },
  'math-ch6': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Linear Inequalities' },
  'math-ch7': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Permutations and Combinations' },
  'math-ch8': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Binomial Theorem' },
  'math-ch9': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Sequences and Series' },
  'math-ch10': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Straight Lines' },
  'math-ch11': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Conic Sections' },
  'math-ch12': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Introduction to 3D Geometry' },
  'math-ch13': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Limits and Derivatives' },
  'math-ch14': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Mathematical Reasoning' },
  'math-ch15': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Statistics' },
  'math-ch16': { channel: 'PW', videoId: 'CEF-IN3HMgk', title: 'Probability' },
};

const class11BiologyOneShots: Record<string, OneShotVideo> = {
  'bio-ch1': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'The Living World' },
  'bio-ch2': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Biological Classification' },
  'bio-ch3': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Plant Kingdom' },
  'bio-ch4': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Animal Kingdom' },
  'bio-ch5': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Morphology of Flowering Plants' },
  'bio-ch6': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Anatomy of Flowering Plants' },
  'bio-ch7': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Structural Organisation in Animals' },
  'bio-ch8': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Cell: The Unit of Life' },
  'bio-ch9': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Biomolecules' },
  'bio-ch10': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Cell Cycle and Cell Division' },
  'bio-ch11': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Transport in Plants' },
  'bio-ch12': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Mineral Nutrition' },
  'bio-ch13': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Photosynthesis' },
  'bio-ch14': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Respiration in Plants' },
  'bio-ch15': { channel: 'PW', videoId: 'GGNN3cl57DQ', title: 'Plant Growth and Development' },
};

const class12PhysicsOneShots: Record<string, OneShotVideo> = {
  'phy-ch1': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Electric Charges and Fields' },
  'phy-ch2': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Electrostatic Potential and Capacitance' },
  'phy-ch3': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Current Electricity' },
  'phy-ch4': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Moving Charges and Magnetism' },
  'phy-ch5': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Magnetism and Matter' },
  'phy-ch6': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Electromagnetic Induction' },
  'phy-ch7': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Alternating Current' },
  'phy-ch8': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Electromagnetic Waves' },
  'phy-ch9': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Ray Optics' },
  'phy-ch10': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Wave Optics' },
  'phy-ch11': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Dual Nature of Radiation and Matter' },
  'phy-ch12': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Atoms' },
  'phy-ch13': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Nuclei' },
  'phy-ch14': { channel: 'NCERT Wallah', videoId: 'HYQdPGN3ZXQ', title: 'Semiconductor Electronics' },
};

const class12ChemistryOneShots: Record<string, OneShotVideo> = {
  'chem-ch1': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Solutions' },
  'chem-ch2': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Electrochemistry' },
  'chem-ch3': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Chemical Kinetics' },
  'chem-ch4': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Surface Chemistry' },
  'chem-ch5': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'p-Block Elements' },
  'chem-ch6': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'd and f Block Elements' },
  'chem-ch7': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Coordination Compounds' },
  'chem-ch8': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Haloalkanes and Haloarenes' },
  'chem-ch9': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Alcohols, Phenols and Ethers' },
  'chem-ch10': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Aldehydes, Ketones and Carboxylic Acids' },
  'chem-ch11': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Amines' },
  'chem-ch12': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Biomolecules' },
  'chem-ch13': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Polymers' },
  'chem-ch14': { channel: 'NCERT Wallah', videoId: 'k4FvOpHU0jo', title: 'Chemistry in Everyday Life' },
};
const class12MathsOneShots: Record<string, OneShotVideo> = {
  'math-ch1': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Relations and Functions' },
  'math-ch2': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Inverse Trigonometric Functions' },
  'math-ch3': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Matrices' },
  'math-ch4': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Determinants' },
  'math-ch5': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Continuity and Differentiability' },
  'math-ch6': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Applications of Derivatives' },
  'math-ch7': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Integrals' },
  'math-ch8': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Applications of Integrals' },
  'math-ch9': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Differential Equations' },
  'math-ch10': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Vector Algebra' },
  'math-ch11': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Three Dimensional Geometry' },
  'math-ch12': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Linear Programming' },
  'math-ch13': { channel: 'NCERT Wallah', videoId: 'CEF-IN3HMgk', title: 'Probability' },
};

const class12BiologyOneShots: Record<string, OneShotVideo> = {
  'bio-ch1': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Reproduction in Organisms' },
  'bio-ch2': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Sexual Reproduction in Flowering Plants' },
  'bio-ch3': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Human Reproduction' },
  'bio-ch4': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Reproductive Health' },
  'bio-ch5': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Principles of Inheritance' },
  'bio-ch6': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Molecular Basis of Inheritance' },
  'bio-ch7': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Evolution' },
  'bio-ch8': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Human Health and Disease' },
  'bio-ch9': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Strategies for Enhancement in Food Production' },
  'bio-ch10': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Microbes in Human Welfare' },
  'bio-ch11': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Biotechnology: Principles and Processes' },
  'bio-ch12': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Biotechnology and Its Applications' },
  'bio-ch13': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Organisms and Populations' },
  'bio-ch14': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Ecosystem' },
  'bio-ch15': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Biodiversity and Conservation' },
  'bio-ch16': { channel: 'NCERT Wallah', videoId: 'GGNN3cl57DQ', title: 'Environmental Issues' },
};

export function getOneShotVideo(subjectId: string, chapterId: string, classLevelId?: number): OneShotVideo | null {
  const classId = classLevelId || 10;
  
  if (classId === 9) {
    switch (subjectId) {
      case 'science': return class9ScienceOneShots[chapterId] || null;
      case 'mathematics': return class9MathOneShots[chapterId] || null;
      case 'social_science': return class9SstOneShots[chapterId] || null;
      case 'english': return class9EnglishOneShots[chapterId] || null;
      default: return null;
    }
  }
  
  if (classId === 11) {
    switch (subjectId) {
      case 'physics': return class11PhysicsOneShots[chapterId] || null;
      case 'chemistry': return class11ChemistryOneShots[chapterId] || null;
      case 'mathematics': return class11MathsOneShots[chapterId] || null;
      case 'biology': return class11BiologyOneShots[chapterId] || null;
      default: return null;
    }
  }
  
  if (classId === 12) {
    switch (subjectId) {
      case 'physics': return class12PhysicsOneShots[chapterId] || null;
      case 'chemistry': return class12ChemistryOneShots[chapterId] || null;
      case 'mathematics': return class12MathsOneShots[chapterId] || null;
      case 'biology': return class12BiologyOneShots[chapterId] || null;
      default: return null;
    }
  }
  
  // Default: Class 10 (backward compatible)
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
