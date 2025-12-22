/**
 * 中级语法补充题库 Part 1
 * int_010-int_012: -아/-어도, -는 중이다, -겠-/-을ㄹ 것이다
 */

export const intermediateSupplementPart1 = {
  int_010: [ // -아/-어도 (大contrast/Concession)
    {
      id: 'int_010_001',
      type: 'fill-blank',
      question: '비가 와도 우리는 소풍을 간다.',
      correctAnswers: [''],
      explanation: '-아/-어도 문법: \"비가 와도\"는 비가 오더라도 라는 양보의 의미. 동작이 일어나도 결과가 바뀌지 않음.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_010_002',
      type: 'multiple-choice',
      question: '"아무리 열심히 공부해도 시험에 떨어졌어요"에서 -아/-어도의 의미는?',
      options: [
        { text: '양보/대조: 아무리...해도 결과는 바뀌지 않음', correct: true },
        { text: '원인/이유', correct: false },
        { text: '선택', correct: false }
      ],
      explanation: '-아/-어도는 주로 \"어떤 조건에도 불구하고\" 결과가 같음을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_010_003',
      type: 'fill-blank',
      question: '이 카페는 비싼___많은 사람이 온다.',
      correctAnswers: ['데도'],
      explanation: '비싸다 → 비싼데도 = expensive even though, 높은 가격에도 불구하고',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_010_004',
      type: 'fill-blank',
      question: '나는 피곤해___일을 마쳐야 한다.',
      correctAnswers: ['도'],
      explanation: '피곱다 → 피곤해도 = tired even though, 피로에도 불구하고',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_010_005',
      type: 'context-judgment',
      question: '"-아/-어도"는 부정적인 상황에서만 사용할 수 있다.',
      options: [
        { text: '아니다', correct: true },
        { text: '맞다', correct: false }
      ],
      explanation: '-아/-어도는 긍정/부정 모두 사용 가능. \"좋아도 너무 좋아\" 같은 긍정적 맥락도 가능.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_010_006',
      type: 'fill-blank',
      question: '도와줄___고마운 마음은 같다.',
      correctAnswers: [''],
      explanation: '도와주지 않아도 = even if not helping, 도와주지 않더라도',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_010_007',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '먹어도 되다', correct: true },
        { text: '먹어도 되', correct: false },
        { text: '먹도 되다', correct: false }
      ],
      explanation: '먹다(ㅇ) → 먹어도, 음운변화 적용 후 \"되다\"와 결합',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_010_008',
      type: 'context-judgment',
      question: '한국 음식이 맛있어도 처음에는 익숙하지 않을 수 있다.',
      options: [
        { text: '맞다', correct: true },
        { text: '틀리다', correct: false }
      ],
      explanation: '-아/-어도는 \"~해도\"라는 양보의 의미로 두 가지 상황이 모두 가능함을 나타냅니다.',
      source: 'TOPIK Level 2'
    }
  ],

  int_011: [ // -는 중이다 (During/In progress)
    {
      id: 'int_011_001',
      type: 'fill-blank',
      question: '지금 회의가 진행___중입니다.',
      correctAnswers: ['되'],
      explanation: '진행되다 → 진행되는 중이다 = is in progress, 회의가 지금 진행 중인 상태',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_011_002',
      type: 'multiple-choice',
      question: '-는 중이다의 기본 의미는?',
      options: [
        { text: '현재 동작이 진행 중임', correct: true },
        { text: '습관적 반복', correct: false },
        { text: '미래 계획', correct: false }
      ],
      explanation: '-는 중이다는 \"지금 하고 있는 중\"이라는 뜻으로 진행 중인 동작을 강조합니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_011_003',
      type: 'fill-blank',
      question: '아이들이 밥을 먹___중이에요.',
      correctAnswers: ['는'],
      explanation: '먹다 → 먹는 중이에요 = children are eating, 아이들이 현재 밥을 먹고 있는 상태',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_011_004',
      type: 'fill-blank',
      question: '그는 지금 책을 읽___중이다.',
      correctAnswers: ['고'],
      explanation: '읽다 → 읽고 있는 중이다 = is reading, 혹은 읽고 있는 도중',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_011_005',
      type: 'context-judgment',
      question: '\"-는 중이다\"와 \"-고 있다\"는 거의 같은 의미다.',
      options: [
        { text: '맞다', correct: true },
        { text: '틀리다', correct: false }
      ],
      explanation: '둘 다 현재 진행 중인 동작을 나타내며, -는 중이다가 좀 더 격식적입니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_011_006',
      type: 'fill-blank',
      question: '비가 오___중이니 우산을 들고 나가세요.',
      correctAnswers: ['는'],
      explanation: '오다 → 오는 중이니 = since it is raining, 비가 현재 내리고 있으니',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_011_007',
      type: 'multiple-choice',
      question: '-는 중이다를 사용할 수 없는 동사는?',
      options: [
        { text: '알다', correct: true },
        { text: '먹다', correct: false },
        { text: '걷다', correct: false }
      ],
      explanation: '\"알다\"는 상태 동사로 진행 과정이 없어 -는 중이다를 사용할 수 없습니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_011_008',
      type: 'fill-blank',
      question: '수리가 이루___중입니다.',
      correctAnswers: ['어지'],
      explanation: '이루어지다 → 이루어지는 중입니다 = is in progress, 수리 작업이 현재 진행 중',
      source: 'TOPIK Level 2'
    }
  ],

  int_012: [ // -겠-/-을ㄹ 것이다 (Future/Intention/Conjecture)
    {
      id: 'int_012_001',
      type: 'fill-blank',
      question: '내일 날씨가 좋___요.',
      correctAnswers: ['겠어'],
      explanation: '좋다 → 좋겠어요 = will probably be nice, 화자의 추측이나 예상을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_012_002',
      type: 'fill-blank',
      question: '나는 꼭 한국에 가___것이다.',
      correctAnswers: ['겠'],
      explanation: '가다 → 가겠다 = I will definitely go, 강한 의지나 결정을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_012_003',
      type: 'multiple-choice',
      question: '-겠-의 주요 기능은?',
      options: [
        { text: '화자의 의지나 강한 추측', correct: true },
        { text: '객관적인 미래 사실', correct: false },
        { text: '의무나 필요성', correct: false }
      ],
      explanation: '-겠-은 \"나는\"이나 \"너는\" 같은 1인칭, 2인칭과 주로 쓰이며 개인의 의지를 강조합니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_012_004',
      type: 'fill-blank',
      question: '그 영화는 재미있___거야.',
      correctAnswers: ['울'],
      explanation: '재미있다 → 재미있을 거야 = it will probably be fun, 추측을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_012_005',
      type: 'context-judgment',
      question: '\"-겠-\"과 \"-을ㄹ 것이다\"는 항상 같은 의미다.',
      options: [
        { text: '아니다', correct: true },
        { text: '맞다', correct: false }
      ],
      explanation: '-겠-은 주관적 의지/추측, -을ㄹ 것이다는 객관적 미래를 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_012_006',
      type: 'fill-blank',
      question: '이 버스를 탈___것 같아.',
      correctAnswers: [''],
      explanation: '타다 → 탈 것 같아 = I think I will take, -을ㄹ 것 같다로 추측을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_012_007',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '비가 올 것이다', correct: true },
        { text: '비가 올 겟다', correct: false },
        { text: '비가 올 것겠다', correct: false }
      ],
      explanation: '3인칭 미래는 \"-을ㄹ 것이다\"를 사용합니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_012_008',
      type: 'fill-blank',
      question: '너는 뭘 할___거야?',
      correctAnswers: [''],
      explanation: '하다 → 할 거야? = What will you do?, 미래 계획을 묻는 표현',
      source: 'TOPIK Level 2'
    }
  ]
};

export default intermediateSupplementPart1;
