/**
 * 中级语法补充题库 Part 3
 * int_016-int_018: -면 조건, -아/-어야 의무/필요성, -고 나열/순차
 */

export const intermediateSupplementPart3 = {
  int_016: [ // -면 (Condition)
    {
      id: 'int_016_001',
      type: 'fill-blank',
      question: '날씨가 좋으___소풍을 가자.',
      correctAnswers: ['면'],
      explanation: '좋다 → 좋으면 = if good, -면은 가정의 조건을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_016_002',
      type: 'fill-blank',
      question: '시간이 있___와.',
      correctAnswers: ['으면'],
      explanation: '있다 → 있으면 = if have time, -으면으로 가정 조건을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_016_003',
      type: 'multiple-choice',
      question: '-면/-으면의 기본 의미는?',
      options: [
        { text: '가정적 조건', correct: true },
        { text: '원인/이유', correct: false },
        { text: '선택', correct: false }
      ],
      explanation: '-면/-으면은 \"만약 ...라면\"이라는 가정 조건을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_016_004',
      type: 'fill-blank',
      question: '더 열심히 공부하___합격할 거야.',
      correctAnswers: ['면'],
      explanation: '하다 → 하면 = if study harder, 조건부 결과를 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_016_005',
      type: 'context-judgment',
      question: '-면은 실제로 일어날 가능성이 높은 조건이다.',
      options: [
        { text: '아니다', correct: true },
        { text: '맞다', correct: false }
      ],
      explanation: '-면은 가정적 조건으로, 실제 가능성과 관계없이 가정 상황을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_016_006',
      type: 'fill-blank',
      question: '돈이 많으___뭘 사고 싶어?',
      correctAnswers: ['면'],
      explanation: '많다 → 많으면 = if had much money, 반사실적 조건',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_016_007',
      type: 'fill-blank',
      question: '내일 오___좋을 텐데.',
      correctAnswers: [''],
      explanation: '오다 → 오면 좋을 텐데 = it would be good if you come tomorrow',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_016_008',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '가면', correct: true },
        { text: '가으면', correct: false },
        { text: '가는면', correct: false }
      ],
      explanation: '가다 → 가면, 자음 받침 동사는 -으면을 사용합니다.',
      source: 'TOPIK Level 2'
    }
  ],

  int_017: [ // -아/-어야 (Obligation/Necessity)
    {
      id: 'int_017_001',
      type: 'fill-blank',
      question: '약을 먹___감기가 낫습니다.',
      correctAnswers: ['어야'],
      explanation: '먹다 → 먹어야 = must take, 필요성이나 의무를 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_017_002',
      type: 'fill-blank',
      question: '학교에 가___해요.',
      correctAnswers: ['야'],
      explanation: '가다 → 가야 해요 = have to go, 의무나 필요성을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_017_003',
      type: 'multiple-choice',
      question: '-아/-어야의 기본 의미는?',
      options: [
        { text: '의무/필요성', correct: true },
        { text: '가능성', correct: false },
        { text: '조건', correct: false }
      ],
      explanation: '-아/-어야는 \"~해야 한다\"는 의무나 필요성을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_017_004',
      type: 'fill-blank',
      question: '숙제를 다 끝내___놀 수 있어.',
      correctAnswers: ['야'],
      explanation: '끝내다 → 끝내야 = must finish, 조건의 의미도 포함합니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_017_005',
      type: 'context-judgment',
      question: '-아/-어야는 과거에는 사용할 수 없다.',
      options: [
        { text: '아니다', correct: true },
        { text: '맞다', correct: false }
      ],
      explanation: '-아/-어야 했다 = should have done, 과거 의무도 나타낼 수 있습니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_017_006',
      type: 'fill-blank',
      question: '지금 출발___비행기를 놓칠 거야.',
      correctAnswers: ['하지 않으면'],
      explanation: '하다 → 하지 않으면 = if don\'t leave now, 비행기를 놓칠 것 같은 의무',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_017_007',
      type: 'fill-blank',
      question: '이 문제는 계산___답을 낼 수 있어.',
      correctAnswers: ['해야'],
      explanation: '하다 → 해야 = must calculate, 계산이 필요함을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_017_008',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '먹어야 한다', correct: true },
        { text: '먹어야 된다', correct: true },
        { text: '먹아야 한다', correct: false }
      ],
      explanation: '먹다(ㅇ) → 먹어야, 둘 다 비슷한 의미로 사용됩니다.',
      source: 'TOPIK Level 2'
    }
  ],

  int_018: [ // -고 (Listing/Sequential)
    {
      id: 'int_018_001',
      type: 'fill-blank',
      question: '밥을 먹___학교에 간다.',
      correctAnswers: ['고'],
      explanation: '먹다 → 먹고 = eat and go, 순차적 동작을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_018_002',
      type: 'fill-blank',
      question: '노래를 하___춤을 춘다.',
      correctAnswers: ['고'],
      explanation: '하다 → 하고 = sing and dance, 두 동작을 함께 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_018_003',
      type: 'multiple-choice',
      question: '-고의 주요 기능은?',
      options: [
        { text: '여러 동작을 순차적으로 연결', correct: true },
        { text: '대비', correct: false },
        { text: '조건', correct: false }
      ],
      explanation: '-고는 \"그리고\"의 의미로 동작들을 나열합니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_018_004',
      type: 'fill-blank',
      question: '책을 읽___음악을 들어요.',
      correctAnswers: ['고'],
      explanation: '읽다 → 읽고 = read and listen, 동시에 일어나는 동작도 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_018_005',
      type: 'context-judgment',
      question: '-고는 항상 시간 순서대로 동작을 나타낸다.',
      options: [
        { text: '아니다', correct: true },
        { text: '맞다', correct: false }
      ],
      explanation: '-고는 시간 순서와 관계없이 동시에 일어나는 동작도 나타낼 수 있습니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_018_006',
      type: 'fill-blank',
      question: '물을 마시___밥을 먹는다.',
      correctAnswers: ['고'],
      explanation: '마시다 → 마시고 = drink water and eat, 동시 동작',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_018_007',
      type: 'fill-blank',
      question: '청소를 하___옷을 빨아야 한다.',
      correctAnswers: ['고'],
      explanation: '하다 → 하고 = clean and wash, 여러 해야 할 일을 나열합니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_018_008',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '하고', correct: true },
        { text: '하고고', correct: false },
        { text: '하는고', correct: false }
      ],
      explanation: '하다 → 하고, 단순히 -고만 붙입니다.',
      source: 'TOPIK Level 2'
    }
  ]
};

export default intermediateSupplementPart3;
