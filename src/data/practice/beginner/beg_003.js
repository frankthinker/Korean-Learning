// -를/을 (목적어 표시) 练习题
export const practice_beg_003 = [
  {
    id: 'beg_003_001',
    type: 'multiple-choice',
    question: '나는 물___마신다.',
    options: [
      { text: '을', correct: true },
      { text: '를', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：有收音用-을的规则】韩语中，-를/을是宾语助词，用于标记动作的对象（宾语），其使用规则由名词的最后一个字是否有收音（받침）决定：1. 名词最后一个字**有收音**，使用-을；2. 名词最后一个字**无收音**，使用-를。本题中，"물（水）"的最后一个字是"물"，收音为ㄹ（有收音），因此使用-을，"물을 마신다"表示"喝水"。需要注意的是，-이/가是主语助词，与本题的宾语考点无关。',
    source: 'TOPIK Level 1'
  },
  {
    id: 'beg_003_002',
    type: 'multiple-choice',
    question: '그는 책___읽어요.',
    options: [
      { text: '을', correct: true },
      { text: '를', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：收音ㄱ的判断】"책（书）"的最后一个字是"책"，收音为ㄱ（有收音），因此使用-을，"책을 읽어요"表示"他看书"。核心考点：收音的判断是宾语助词使用的关键，"책"的收音ㄱ是典型的闭音节收音，需牢记；-이/가是主语助词，不能用于宾语标记。',
    source: 'TOPIK Level 1'
  },
  {
    id: 'beg_003_003',
    type: 'multiple-choice',
    question: '친구___만났어요.',
    options: [
      { text: '를', correct: true },
      { text: '을', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：无收音用-를的规则】"친구（朋友）"的最后一个字是"구"，没有收音（开音节），因此使用-를，"친구를 만났어요"表示"见了朋友"。核心考点：开音节名词后接-를是固定规则，可简单记忆为"元音结尾的名词用-를，辅音结尾的名词用-을"；-이/가是主语助词，不符合本题语境。',
    source: 'TOPIK Level 1'
  },
  {
    id: 'beg_003_004',
    type: 'multiple-choice',
    question: '밥___먹습니다.',
    options: [
      { text: '을', correct: true },
      { text: '를', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：收音ㅂ的判断】"밥（饭）"的最后一个字是"밥"，收音为ㅂ（有收音），因此使用-을，"밥을 먹습니다"表示"吃饭"。核心考点："밥"是韩语中最常用的有收音名词之一，需牢记其接-을的规则；-이/가是主语助词，若使用则表示"饭吃（某物）"，逻辑不通。',
    source: 'TOPIK Level 1'
  },
  {
    id: 'beg_003_005',
    type: 'multiple-choice',
    question: '커피___마십니다.',
    options: [
      { text: '를', correct: true },
      { text: '을', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：外来词的收音判断】"커피（咖啡）"是外来词（coffee），最后一个字是"피"，没有收音（开音节），因此使用-를，"커피를 마십니다"表示"喝咖啡"。核心考点：外来词大多为开音节（元音结尾），因此多数接-를，但需注意少数例外（如"칩（薯片）"有收音ㅂ，接-을）；-이/가是主语助词，不符合本题语境。',
    source: 'TOPIK Level 1'
  },
  {
    id: 'beg_003_006',
    type: 'multiple-choice',
    question: '선생님___뵙겠습니다.',
    options: [
      { text: '을', correct: true },
      { text: '를', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：敬语动词的宾语标记】"뵙다（拜见）"是敬语动词，"선생님（老师）"的最后一个字是"님"，收音为ㅁ（有收音），因此使用-을，"선생님을 뵙겠습니다"表示"拜见老师"。核心考点：敬语动词同样遵循宾语助词规则，-을/-를的选择取决于宾语名词的收音；-이/가是主语助词，不符合本题语境。',
    source: 'TOPIK Level 1'
  },
  {
    id: 'beg_003_007',
    type: 'multiple-choice',
    question: '음악___들어요.',
    options: [
      { text: '을', correct: true },
      { text: '를', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：抽象名词的收音判断】"음악（音乐）"的最后一个字是"악"，收音为ㄱ（有收音），因此使用-을，"음악을 들어요"表示"听音乐"。核心考点：抽象名词同样遵循收音规则，"악"的收音为ㄱ，需使用-을；-이/가是主语助词，不符合本题语境。',
    source: 'TOPIK Level 1'
  },
  {
    id: 'beg_003_008',
    type: 'multiple-choice',
    question: '사과___샀어요.',
    options: [
      { text: '를', correct: true },
      { text: '을', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：水果名词的收音判断】"사과（苹果）"的最后一个字是"과"，没有收音（开音节），因此使用-를，"사과를 샀어요"表示"买了苹果"。核心考点：水果名词同样遵循收音规则，"과"无收音，需使用-를；-이/가是主语助词，不符合本题语境。',
    source: 'TOPIK Level 1'
  },
  {
    id: 'beg_003_009',
    type: 'multiple-choice',
    question: '뉴스___봐요.',
    options: [
      { text: '를', correct: true },
      { text: '을', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：外来词的收音判断】"뉴스（新闻）"是外来词（news），最后一个字是"스"，没有收音（开音节），因此使用-를，"뉴스를 봐요"表示"看新闻"。核心考点：外来词通常为开音节，"스"无收音，需使用-를；-이/가是主语助词，不符合本题语境。',
    source: 'TOPIK Level 1'
  },
  {
    id: 'beg_003_010',
    type: 'multiple-choice',
    question: '운동___해요.',
    options: [
      { text: '을', correct: true },
      { text: '를', correct: false },
      { text: '이', correct: false },
      { text: '가', correct: false }
    ],
    explanation: '【宾语助词：抽象名词的收音判断】"운동（运动）"的最后一个字是"동"，收音为ㅇ（有收音），因此使用-을，"운동을 해요"表示"做运动"。核心考点：抽象名词同样遵循收音规则，"동"的收音为ㅇ，需使用-을；-이/가是主语助词，不符合本题语境。',
    source: 'TOPIK Level 1'
  }
];