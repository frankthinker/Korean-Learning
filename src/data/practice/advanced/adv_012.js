// -ㄹ 수 있다/-ㄹ 수 없다/-지 못하다 (능력/가능성) 练习题
export const practice_adv_012 = [
    {
      id: 'adv_012_001',
      type: 'fill-blank',
      question: '나는 한국어를 할 수___요.',
      correctAnswers: ['있'],
      explanation: '할 수 있어요 (능력)'
    },
    {
      id: 'adv_012_002',
      type: 'multiple-choice',
      question: '-ㄹ 수 없다와 -지 못하다의 차이는?',
      options: [
        { text: '-ㄹ 수 없다는 가능성이 없고, -지 못하다는 피동', correct: true },
        { text: '같은 의미', correct: false }
      ],
      explanation: '-ㄹ 수 없다는 능력이나 가능성 부재, -지 못하다는 외부 요인으로 인한 불가능'
    },
    {
      id: 'adv_012_003',
      type: 'translation',
      question: '번역: 시간 때문에 가지 못했어.',
      expectedKorean: '시간 때문에 가지 못했어',
      chineseMeaning: '因为时间问题，去不了。',
      explanation: '-지 못하다는 외부 요인으로 불가능함을 나타냅니다.'
    },
    {
      id: 'adv_012_004',
      type: 'fill-blank',
      question: '이 문제는 너무 어려워서 풀 수___요.',
      correctAnswers: ['없'],
      explanation: '풀 수 없어요 (능력/가능성 부재)'
    },
    {
      id: 'adv_012_005',
      type: 'context-judgment',
      question: '"돈이 없어서 못 샀어"는 -지 못하다를 사용하나요?',
      options: [
        { text: '네', correct: true },
        { text: '아니오', correct: false }
      ],
      explanation: '외부 요인으로 인한 불가능이므로 -지 못하다를 사용합니다.'
    },
    {
      id: 'adv_012_006',
      type: 'fill-blank',
      question: '나는 영어를 할 수___어.',
      correctAnswers: ['있'],
      explanation: '할 수 있어 (능력)'
    },
    {
      id: 'adv_012_007',
      type: 'multiple-choice',
      question: '다음 중 가능성을 나타내는 것은?',
      options: [
        { text: '할 수 있다', correct: true },
        { text: '할 수 없다', correct: false },
        { text: '못한다', correct: false }
      ],
      explanation: '-ㄹ 수 있다는 능력이나 가능성을 나타냅니다.'
    },
    {
      id: 'adv_012_008',
      type: 'fill-blank',
      question: '병 때문에 운동하지___했어요.',
      correctAnswers: ['못'],
      explanation: '못했어요 (외부 요인으로 불가능)'
    }
];
