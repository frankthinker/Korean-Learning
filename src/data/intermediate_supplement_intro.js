/**
 * 中级语法补充题库 - 引入部分 (int_001-int_003)
 * 基于TOPIK Level 2标准题型
 */

export const intermediateSupplementIntro = {
  int_001: [ // -게 하다 (使役形)
    {
      id: 'int_001_001',
      type: 'fill-blank',
      question: '어머니가 나를 학교에___했어요.',
      correctAnswers: ['가게'],
      explanation: '-게 하다 표현: 가다 → 가게 하다 (엄마가 나를 학교에 가게 했다 = 엄마가 나를 학교에 보냈다)',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_002',
      type: 'multiple-choice',
      question: '-게 하다는 무엇을 나타내나요?',
      options: [
        { text: '누군가에게 어떤 행동을 하도록 시키는 것', correct: true },
        { text: '자연스럽게 변하는 것', correct: false },
        { text: '능력이 있다는 것', correct: false }
      ],
      explanation: '-게 하다는 사역 표현으로, 주체가 다른 사람에게 어떤 행동을 하도록 시키는 의미입니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_003',
      type: 'fill-blank',
      question: '선생님이 학생들을 공부하___했습니다.',
      correctAnswers: ['게'],
      explanation: '공부하다 → 공부하게 하다 (선생님이 학생들을 공부하게 했다 = 선생님이 학생들이 공부하도록 했다)',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_004',
      type: 'multiple-choice',
      question: '다음 중 -게 하다를 올바르게 사용한 문장은?',
      options: [
        { text: '부모님이 저를 공부하게 했어요.', correct: true },
        { text: '부모님이 저가 공부하게 했어요.', correct: false },
        { text: '부모님이 저를 공부게 했어요.', correct: false }
      ],
      explanation: '-게 하다 표현은 "명사 + 를/을 + 동사 + 게 하다" 형태입니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_005',
      type: 'translation',
      question: '번역: 아버지가 저를 연습하게 했어요.',
      expectedKorean: '아버지가 저를 연습하게 했어요',
      chineseMeaning: '父亲让我练习。',
      explanation: '-게 하다는 사역의 의미로 "~에게 ...하게 하다"의 형태입니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_006',
      type: 'fill-blank',
      question: '의사가 환자에게 약을___했어요.',
      correctAnswers: ['먹게'],
      explanation: '먹다 → 먹게 하다 (의사가 환자에게 약을 먹게 했다)',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_007',
      type: 'context-judgment',
      question: '-게 하다와 -게 되다의 뜻이 같나요?',
      options: [
        { text: '아니오, -게 하다는 능동, -게 되다는 피동', correct: true },
        { text: '네, 같은 의미입니다', correct: false }
      ],
      explanation: '-게 하다는 "~하게 하다(사역)", -게 되다는 "자연스럽게 ~되다(변화)"의 의미로 다릅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_008',
      type: 'fill-blank',
      question: '선생님이 우리에게 한국말을___했어요.',
      correctAnswers: ['배우게'],
      explanation: '배우다 → 배우게 하다 (선생님이 우리에게 한국말을 배우게 했다)',
      source: 'TOPIK Level 2'
    }
  ],
  int_002: [ // -는 데 (진행 중/목적/어려움)
    {
      id: 'int_002_001',
      type: 'fill-blank',
      question: '공부하___데 어려워요.',
      correctAnswers: ['는'],
      explanation: '-는 데 표현: 현재진행형 + -는 데 (공부하는 데 어렵다 = 공부하기가 어렵다)',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_002_002',
      type: 'multiple-choice',
      question: '-는 데는 어떤 의미인가요?',
      options: [
        { text: '어떤 행동을 하는 과정이나 그것이 어려운 정도', correct: true },
        { text: '행동이 끝났다는 의미', correct: false },
        { text: '행동을 할 수 있다는 의미', correct: false }
      ],
      explanation: '-는 데는 동작의 과정이나 그 과정에서의 어려움, 시간 등을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_002_003',
      type: 'fill-blank',
      question: '한국어를 배우___데 3개월이 걸렸어요.',
      correctAnswers: ['는'],
      explanation: '배우는 데 3개월이 걸렸다 = 3개월 동안 배웠다 (시간의 의미)',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_002_004',
      type: 'multiple-choice',
      question: '다음 중 -는 데를 올바르게 사용한 문장은?',
      options: [
        { text: '이 일을 하는 데 도움이 필요해요.', correct: true },
        { text: '이 일을 한 데 도움이 필요해요.', correct: false },
        { text: '이 일을 할 데 도움이 필요해요.', correct: false }
      ],
      explanation: '-는 데는 현재진행형 "-는"과 함께 사용됩니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_002_005',
      type: 'translation',
      question: '번역: 일하는 데 시간이 많이 걸려요.',
      expectedKorean: '일하는 데 시간이 많이 걸려요',
      chineseMeaning: '工作需要花很多时间。',
      explanation: '-는 데 표현은 어떤 행동을 하는 데 필요한 시간이나 어려움을 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_002_006',
      type: 'fill-blank',
      question: '숙제를 마치___데 2시간이 걸렸어요.',
      correctAnswers: ['는'],
      explanation: '숙제를 마치는 데 2시간이 걸렸다 (숙제를 끝내기에 2시간이 필요했다)',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_002_007',
      type: 'context-judgment',
      question: '-는 데와 -는 것이 같은 의미인가요?',
      options: [
        { text: '아니오, -는 데는 과정을, -는 것은 결과를 나타냅니다', correct: true },
        { text: '네, 같은 의미입니다', correct: false }
      ],
      explanation: '-는 데는 과정이나 필요한 시간/어려움을, -는 것은 행동 자체나 결과를 나타냅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_002_008',
      type: 'fill-blank',
      question: '이 음식을 요리하___데 어려워요.',
      correctAnswers: ['는'],
      explanation: '음식을 요리하는 데 어렵다 = 요리하기가 어렵다',
      source: 'TOPIK Level 2'
    }
  ],
  int_003: [ // -도록 (목적/결과/정도)
    {
      id: 'int_003_001',
      type: 'fill-blank',
      question: '건강하___운동해요.',
      correctAnswers: ['도록'],
      explanation: '-도록 표현: 건강하도록 운동하다 = 건강해지기 위해 운동하다 (목적)',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_003_002',
      type: 'multiple-choice',
      question: '-도록의 주요 의미는?',
      options: [
        { text: '목적(~하기 위해) 또는 결과(~하게 하다)', correct: true },
        { text: '원인(~때문에)', correct: false },
        { text: '조건(~하면)', correct: false }
      ],
      explanation: '-도록은 목적을 나타낼 때 "~하기 위해"의 의미, 결과를 나타낼 때는 "~하게 되다"의 의미를 가집니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_003_003',
      type: 'fill-blank',
      question: '늦지 않___빨리 왔어요.',
      correctAnswers: ['도록'],
      explanation: '늦지 않도록 빨리 왔다 = 늦지 않기 위해 빨리 왔다 (목적)',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_003_004',
      type: 'multiple-choice',
      question: '다음 중 -도록을 올바르게 사용한 문장은?',
      options: [
        { text: '전학교 학생에게 이 소식을 알리도록 하겠습니다.', correct: true },
        { text: '전학교 학생에게 이 소식을 알리 도록 하겠습니다.', correct: false },
        { text: '전학교 학생에게 이 소식을 알도록 하겠습니다.', correct: false }
      ],
      explanation: '-도록은 동사 또는 형용사 어간에 붙습니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_003_005',
      type: 'translation',
      question: '번역: 다시 오지 않도록 지금 해결하세요.',
      expectedKorean: '다시 오지 않도록 지금 해결하세요',
      chineseMeaning: '现在解决，以免再出现。',
      explanation: '-도록은 목적을 나타내는 표현으로 사용됩니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_003_006',
      type: 'fill-blank',
      question: '학교에 가___짐을 챙겨야 해요.',
      correctAnswers: ['도록'],
      explanation: '학교에 가도록 준비를 해야 한다 = 학교에 갈 수 있도록 준비하다 (목적)',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_003_007',
      type: 'context-judgment',
      question: '-도록과 -게 하다가 같은 의미로 사용될 수 있나요?',
      options: [
        { text: '네, 때로는 비슷한 의미로 사용될 수 있습니다', correct: true },
        { text: '아니오, 완전히 다른 의미입니다', correct: false }
      ],
      explanation: '둘 다 목적이나 결과를 나타낼 수 있지만, 미묘한 차이가 있습니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_003_008',
      type: 'fill-blank',
      question: '실패하지 않___노력해야 해요.',
      correctAnswers: ['도록'],
      explanation: '실패하지 않도록 노력하다 = 실패하지 않기 위해 노력하다 (목적)',
      source: 'TOPIK Level 2'
    }
  ]
}

export default intermediateSupplementIntro
