/**
 * 中级语法补充题库 Part 2
 * int_013-int_015: -아/-어서/-으니까/-니까/-기 때문에, -아/-어 주다/-아/-어 달라, -ㄹ/-을 수 있다/-ㄹ/-을 수 없다
 */

export const intermediateSupplementPart2 = {
  int_013: [ // -아/-어서/-으니까/-니까/-기 때문에 (Cause/Reason)
    {
      id: 'int_013_001',
      type: 'fill-blank',
      question: '배가 고파___밥을 먹었어요.',
      correctAnswers: ['서'],
      explanation: '고프다 → 고파서 = because hungry, -아/-어서는 가장 자연스러운 이유 표현',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_013_002',
      type: 'fill-blank',
      question: '시간이 없___먼저 가도 돼요.',
      correctAnswers: ['으니까'],
      explanation: '없다 → 없으니까 = since there\'s no time, -으니까는 상대방이 이해할 수 있는 이유',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_013_003',
      type: 'multiple-choice',
      question: '-아/-어서와 -으니까의 차이는?',
      options: [
        { text: '-아/-어서는 단순 이유, -으니까는 청자를 배려한 표현', correct: true },
        { text: '-아/-어서는 문어, -으니까는 구어', correct: false },
        { text: '둘은 같은 의미', correct: false }
      ],
      explanation: '-아/-어서는 기본적인 인과관계, -으니까는 \"그래서 ...해도 돼\"라는 양보의 느낌이 있습니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_013_004',
      type: 'fill-blank',
      question: '날씨가 좋기 때문에___소풍을 가기로 했어요.',
      correctAnswers: [''],
      explanation: '좋기 때문에 = because of good weather, -기 때문에는 가장 격식적이고 정중한 표현',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_013_005',
      type: 'context-judgment',
      question: '-기 때문에는 가장 일상적인 원인 표현이다.',
      options: [
        { text: '아니다', correct: true },
        { text: '맞다', correct: false }
      ],
      explanation: '-기 때문에는 가장 격식적이고 정중한 표현입니다. 일상적으로는 -아/-어서를 많이 씁니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_013_006',
      type: 'fill-blank',
      question: '공부를 안 했___시험을 떨어졌어.',
      correctAnswers: ['어서'],
      explanation: '하다(안 하다) → 안 했어서 = because didn\'t study, 과거 이유를 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_013_007',
      type: 'fill-blank',
      question: '너무 바빠___밥을 못 먹었어요.',
      correctAnswers: ['서'],
      explanation: '바쁘다 → 바빠서 = because very busy, ㅡ 불규칙 적용',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_013_008',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '없어서, 없으니까, 없기 때문에 (모두 가능)', correct: true },
        { text: '없어서만 가능', correct: false },
        { text: '없기 때문에만 가능', correct: false }
      ],
      explanation: '3가지 모두 같은 의미의 원인을 나타내지만, 격식도와 상황에 따라 다르게 쓰입니다.',
      source: 'TOPIK Level 2'
    }
  ],

  int_014: [ // -아/-어 주다/-아/-어 달라 (Request/Favor)
    {
      id: 'int_014_001',
      type: 'fill-blank',
      question: '이 문제를 풀어___수 있나요?',
      correctAnswers: ['줄'],
      explanation: '풀다 → 풀어줄 = can you help me solve?, 정중한 요청',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_014_002',
      type: 'fill-blank',
      question: '물 좀 마시___.',
      correctAnswers: ['게'],
      explanation: '마시다 → 마시게 = let me drink, 혹은 마시라고. 직접적인 요청',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_014_003',
      type: 'multiple-choice',
      question: '-아/-어 주다와 -아/-어 달라의 차이는?',
      options: [
        { text: '-아/-어 주다가 더 정중한 표현', correct: true },
        { text: '-아/-어 달라가 더 정중한 표현', correct: false },
        { text: '둘은 같은 의미', correct: false }
      ],
      explanation: '-아/-어 주다는 상대방의 도움을 청하는 표현이고, -아/-어 달라는 직접적인 요청입니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_014_004',
      type: 'fill-blank',
      question: '도와줄래요?',
      correctAnswers: [''],
      explanation: '도와주다 → 도와줄래요? = Can you help me?, 자연스럽고 정중한 요청',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_014_005',
      type: 'context-judgment',
      question: '-아/-어 주다는 혼자서도 할 수 있지만 도움을 받고 싶을 때 사용한다.',
      options: [
        { text: '맞다', correct: true },
        { text: '틀리다', correct: false }
      ],
      explanation: '-아/-어 주다는 \"혼자서는 못 하니 도와달라\"는 의미를 포함합니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_014_006',
      type: 'fill-blank',
      question: '이 짐을 들어___.',
      correctAnswers: ['줄래'],
      explanation: '들다 → 들어줄래 = will you carry?, 비격식적인 요청',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_014_007',
      type: 'fill-blank',
      question: '나중에 연락해___.',
      correctAnswers: ['줄래'],
      explanation: '연락하다 → 연락해줄래 = will you contact me later?',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_014_008',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '봐주세요', correct: true },
        { text: '보아주세요', correct: false },
        { text: '봐 주세요', correct: false }
      ],
      explanation: '보다 → 봐주세요, 띄어쓰기 없이 일반적으로 붙여서 씁니다.',
      source: 'TOPIK Level 2'
    }
  ],

  int_015: [ // -ㄹ/-을 수 있다/-ㄹ/-을 수 없다 (Ability/Possibility)
    {
      id: 'int_015_001',
      type: 'fill-blank',
      question: '나는 한국말을 할 수___요.',
      correctAnswers: ['있어'],
      explanation: '하다 → 할 수 있어요 = can speak Korean, 능력이나 가능성을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_015_002',
      type: 'fill-blank',
      question: '이 문제는 풀 수___어요.',
      correctAnswers: ['없'],
      explanation: '풀다 → 풀 수 없어요 = cannot solve, 불가능성을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_015_003',
      type: 'multiple-choice',
      question: '-ㄹ 수 있다의 의미는?',
      options: [
        { text: '능력/가능성', correct: true },
        { text: '의무', correct: false },
        { text: '권유', correct: false }
      ],
      explanation: '-ㄹ 수 있다는 \"~할 가능성이 있다\" 또는 \"~할 능력이 있다\"는 뜻입니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_015_004',
      type: 'fill-blank',
      question: '날씨가 좋으면 소풍을 갈 수___어요.',
      correctAnswers: ['있'],
      explanation: '가다 → 갈 수 있어요 = can go, 조건이 맞으면 가능함을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_015_005',
      type: 'context-judgment',
      question: '-ㄹ 수 없다와 -지 못하다는 같은 의미다.',
      options: [
        { text: '맞다', correct: true },
        { text: '틀리다', correct: false }
      ],
      explanation: '둘 다 불가능성을 나타내지만, -ㄹ 수 없다가 좀 더 상황적, -지 못하다가 주관적입니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_015_006',
      type: 'fill-blank',
      question: '운전을 할 수___어요.',
      correctAnswers: ['있'],
      explanation: '하다 → 할 수 있어요 = can drive, 운전 능력이 있음을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_015_007',
      type: 'fill-blank',
      question: '이 책은 읽을 수___어요.',
      correctAnswers: ['있'],
      explanation: '읽다 → 읽을 수 있어요 = can read, 읽을 능력이나 기회가 있음을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_015_008',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '할 수 있어요', correct: true },
        { text: '할 수 있어', correct: false },
        { text: '할 수는 있어요', correct: false }
      ],
      explanation: '\"할 수 있어요\"가 표준형입니다. 존댓말로 표현합니다.',
      source: 'TOPIK Level 2'
    }
  ]
};

export default intermediateSupplementPart2;
