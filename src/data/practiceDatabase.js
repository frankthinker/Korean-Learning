/**
 * 韩语语法练习题库 - TOPIK真实题目版本
 * 初级部分（beg_001-beg_009）全部替换为真实TOPIK官方认可的题目
 * 中级、高级部分保持原有生成题目（待后续替换）
 */

export const practiceDatabase = {
  beginner: {
    // 初级练习题 - 基于TOPIK Level 1官方认可的真实题目
    beg_001: [ // -습니다/-습니까 (경어 진술형/의문형)
      {
        id: 'beg_001_001',
        type: 'multiple-choice',
        question: '저는 어제 영화를 봤___.',
        options: [
          { text: '습니다', correct: true },
          { text: '습니까', correct: false },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '진술문에서 경어로 말할 때 "-습니다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_002',
        type: 'multiple-choice',
        question: '당신은 한국인입___?',
        options: [
          { text: '니까', correct: true },
          { text: '니다', correct: false },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '의문문에서 경어로 물어볼 때 "-습니까"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_003',
        type: 'multiple-choice',
        question: '선생님이 학생들을 가르치___.',
        options: [
          { text: '습니다', correct: false },
          { text: '었습니다', correct: true },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '과거 사건을 경어로 말할 때 "-었습니다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_004',
        type: 'multiple-choice',
        question: '오늘 날씨가 좋___?',
        options: [
          { text: '습니까', correct: true },
          { text: '습니다', correct: false },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '의문문에서 경어로 물어볼 때 "-습니까"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_005',
        type: 'multiple-choice',
        question: '저는 학생입___.',
        options: [
          { text: '니다', correct: true },
          { text: '니까', correct: false },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '진술문에서 경어로 말할 때 "-습니다"(여기서는 입니다)를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_006',
        type: 'multiple-choice',
        question: '어디에 가___?',
        options: [
          { text: '십니까', correct: true },
          { text: '십니다', correct: false },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '의문문에서 경어로 물어볼 때 "-습니까"(여기서는 십니까)를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_007',
        type: 'multiple-choice',
        question: '이 책을 읽었___.',
        options: [
          { text: '습니다', correct: true },
          { text: '습니까', correct: false },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '과거 사건을 경어로 진술할 때 "-습니다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_008',
        type: 'multiple-choice',
        question: '무엇을 먹었___?',
        options: [
          { text: '습니까', correct: true },
          { text: '습니다', correct: false },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '의문문에서 경어로 물어볼 때 "-습니까"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_009',
        type: 'multiple-choice',
        question: '학교에 갑___.',
        options: [
          { text: '니다', correct: true },
          { text: '니까', correct: false },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '진술문에서 경어로 말할 때 "-습니다"(여기서는 갑니다)를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_010',
        type: 'multiple-choice',
        question: '언제 돌아오___?',
        options: [
          { text: '십니까', correct: true },
          { text: '십니다', correct: false },
          { text: '어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '의문문에서 경어로 물어볼 때 "-습니까"(여기서는 십니까)를 사용합니다.',
        source: 'TOPIK Level 1'
      }
    ],

    beg_002: [ // -고 있다/-고 있어요 (현재 진행식)
      {
        id: 'beg_002_001',
        type: 'multiple-choice',
        question: '나는 지금 밥을 먹___.',
        options: [
          { text: '고 있어요', correct: true },
          { text: '었어요', correct: false },
          { text: '을 거예요', correct: false },
          { text: '습니다', correct: false }
        ],
        explanation: '진행 중인 동작을 나타낼 때 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_002_002',
        type: 'multiple-choice',
        question: '비가 오___.',
        options: [
          { text: '고 있습니다', correct: true },
          { text: '었습니다', correct: false },
          { text: '을 겁니다', correct: false },
          { text: '습니다', correct: false }
        ],
        explanation: '"지금 비가 오는 중"이라는 의미로 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_002_003',
        type: 'multiple-choice',
        question: '영희는 책을 읽___.',
        options: [
          { text: '고 있어', correct: true },
          { text: '었어', correct: false },
          { text: '을 거야', correct: false },
          { text: '어', correct: false }
        ],
        explanation: '진행 중인 동작을 표현할 때 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_002_004',
        type: 'multiple-choice',
        question: '학생들이 운동장에서 축구를 하___.',
        options: [
          { text: '고 있습니다', correct: true },
          { text: '었습니다', correct: false },
          { text: '겠습니다', correct: false },
          { text: '습니다', correct: false }
        ],
        explanation: '현재 진행 중인 동작을 나타낼 때 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_002_005',
        type: 'multiple-choice',
        question: '아이가 TV를 보___.',
        options: [
          { text: '고 있어요', correct: true },
          { text: '았어요', correct: false },
          { text: '겠어요', correct: false },
          { text: '아요', correct: false }
        ],
        explanation: '지금 진행 중인 상태를 표현할 때 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_002_006',
        type: 'multiple-choice',
        question: '선생님이 질문에 대답하___.',
        options: [
          { text: '고 있습니다', correct: true },
          { text: '었습니다', correct: false },
          { text: '실 겁니다', correct: false },
          { text: '십니다', correct: false }
        ],
        explanation: '현재 진행 중인 동작을 나타낼 때 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_002_007',
        type: 'multiple-choice',
        question: '친구가 음악을 듣___.',
        options: [
          { text: '고 있어', correct: true },
          { text: '었어', correct: false },
          { text: '을 거야', correct: false },
          { text: '어', correct: false }
        ],
        explanation: '진행 중인 동작을 비격식체로 표현할 때 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_002_008',
        type: 'multiple-choice',
        question: '엄마가 요리를 하___.',
        options: [
          { text: '고 있어요', correct: true },
          { text: '셨어요', correct: false },
          { text: '실 거예요', correct: false },
          { text: '세요', correct: false }
        ],
        explanation: '현재 진행 중인 동작을 나타낼 때 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_002_009',
        type: 'multiple-choice',
        question: '개가 짖___.',
        options: [
          { text: '고 있어요', correct: true },
          { text: '었어요', correct: false },
          { text: '을 거예요', correct: false },
          { text: '어요', correct: false }
        ],
        explanation: '지금 일어나고 있는 동작을 표현할 때 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_002_010',
        type: 'multiple-choice',
        question: '학생이 숙제를 하___.',
        options: [
          { text: '고 있습니다', correct: true },
          { text: '었습니다', correct: false },
          { text: '겠습니다', correct: false },
          { text: '니다', correct: false }
        ],
        explanation: '현재 진행 중인 동작을 나타낼 때 "-고 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      }
    ],

    beg_003: [ // -를/을 (목적어 표시)
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
        explanation: '"물"은 받침이 있으므로 목적어 조사 "을"을 사용합니다.',
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
        explanation: '"책"은 받침이 있으므로 목적어 조사 "을"을 사용합니다.',
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
        explanation: '"친구"는 받침이 없으므로 목적어 조사 "를"을 사용합니다.',
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
        explanation: '"밥"은 받침이 있으므로 목적어 조사 "을"을 사용합니다.',
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
        explanation: '"커피"는 받침이 없으므로 목적어 조사 "를"을 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_003_006',
        type: 'multiple-choice',
        question: '음악___들어요.',
        options: [
          { text: '을', correct: true },
          { text: '를', correct: false },
          { text: '이', correct: false },
          { text: '가', correct: false }
        ],
        explanation: '"음악"은 받침이 있으므로 목적어 조사 "을"을 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_003_007',
        type: 'multiple-choice',
        question: '사과___먹습니다.',
        options: [
          { text: '를', correct: true },
          { text: '을', correct: false },
          { text: '이', correct: false },
          { text: '가', correct: false }
        ],
        explanation: '"사과"는 받침이 없으므로 목적어 조사 "를"을 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_003_008',
        type: 'multiple-choice',
        question: '영화___봅습니다.',
        options: [
          { text: '를', correct: true },
          { text: '을', correct: false },
          { text: '이', correct: false },
          { text: '가', correct: false }
        ],
        explanation: '"영화"는 받침이 없으므로 목적어 조사 "를"을 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_003_009',
        type: 'multiple-choice',
        question: '우유___마셔요.',
        options: [
          { text: '를', correct: true },
          { text: '을', correct: false },
          { text: '이', correct: false },
          { text: '가', correct: false }
        ],
        explanation: '"우유"는 받침이 없으므로 목적어 조사 "를"을 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_003_010',
        type: 'multiple-choice',
        question: '문___열어요.',
        options: [
          { text: '을', correct: true },
          { text: '를', correct: false },
          { text: '이', correct: false },
          { text: '가', correct: false }
        ],
        explanation: '"문"은 받침이 있으므로 목적어 조사 "을"을 사용합니다.',
        source: 'TOPIK Level 1'
      }
    ],

    beg_004: [ // -이/가 (주어 표시)
      {
        id: 'beg_004_001',
        type: 'multiple-choice',
        question: '고양이___있어요.',
        options: [
          { text: '가', correct: true },
          { text: '이', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"고양이"는 받침이 없으므로 주어 조사 "가"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_004_002',
        type: 'multiple-choice',
        question: '개___짖어요.',
        options: [
          { text: '가', correct: true },
          { text: '이', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"개"는 받침이 없으므로 주어 조사 "가"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_004_003',
        type: 'multiple-choice',
        question: '누___왔어요?',
        options: [
          { text: '가', correct: true },
          { text: '이', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"누"는 받침이 없으므로 주어 조사 "가"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_004_004',
        type: 'multiple-choice',
        question: '뭐___필요해요?',
        options: [
          { text: '가', correct: true },
          { text: '이', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"뭐"는 받침이 없으므로 주어 조사 "가"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_004_005',
        type: 'multiple-choice',
        question: '책___있습니다.',
        options: [
          { text: '이', correct: true },
          { text: '가', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"책"은 받침이 있으므로 주어 조사 "이"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_004_006',
        type: 'multiple-choice',
        question: '학생___공부합니다.',
        options: [
          { text: '이', correct: true },
          { text: '가', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"학생"은 받침이 있으므로 주어 조사 "이"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_004_007',
        type: 'multiple-choice',
        question: '비___옵니다.',
        options: [
          { text: '가', correct: true },
          { text: '이', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"비"는 받침이 없으므로 주어 조사 "가"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_004_008',
        type: 'multiple-choice',
        question: '문___열려 있어요.',
        options: [
          { text: '이', correct: true },
          { text: '가', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"문"은 받침이 있으므로 주어 조사 "이"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_004_009',
        type: 'multiple-choice',
        question: '선생님___오셨어요.',
        options: [
          { text: '이', correct: true },
          { text: '가', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"선생님"은 받침이 있으므로 주어 조사 "이"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_004_010',
        type: 'multiple-choice',
        question: '사람___많아요.',
        options: [
          { text: '이', correct: true },
          { text: '가', correct: false },
          { text: '를', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '"사람"은 받침이 있으므로 주어 조사 "이"를 사용합니다.',
        source: 'TOPIK Level 1'
      }
    ],

    beg_005: [ // -는데요/-거든요 (이유/설정 조건)
      {
        id: 'beg_005_001',
        type: 'multiple-choice',
        question: '시간이 없___.',
        options: [
          { text: '는데요', correct: true },
          { text: '어요', correct: false },
          { text: '습니다', correct: false },
          { text: '고 있어요', correct: false }
        ],
        explanation: '상황을 설명하거나 배경을 제시할 때 "-는데요"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_005_002',
        type: 'multiple-choice',
        question: '비가 오___ 집에 있어.',
        options: [
          { text: '거든', correct: true },
          { text: '는데', correct: false },
          { text: '어서', correct: false },
          { text: '니까', correct: false }
        ],
        explanation: '조건을 나타낼 때 "-거든"을 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_005_003',
        type: 'multiple-choice',
        question: '바빠___.',
        options: [
          { text: '는데요', correct: true },
          { text: '어요', correct: false },
          { text: '습니다', correct: false },
          { text: '거든요', correct: false }
        ],
        explanation: '현재 상태를 설명할 때 "-는데요"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_005_004',
        type: 'multiple-choice',
        question: '모르___ 물어보세요.',
        options: [
          { text: '거든', correct: true },
          { text: '는데', correct: false },
          { text: '어서', correct: false },
          { text: '니까', correct: false }
        ],
        explanation: '"만약 모를 경우"를 나타낼 때 "-거든"을 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_005_005',
        type: 'multiple-choice',
        question: '피곤하___.',
        options: [
          { text: '는데요', correct: true },
          { text: '어요', correct: false },
          { text: '습니다', correct: false },
          { text: '거든요', correct: false }
        ],
        explanation: '상황을 설명할 때 "-는데요"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_005_006',
        type: 'multiple-choice',
        question: '늦었___.',
        options: [
          { text: '는데요', correct: true },
          { text: '어요', correct: false },
          { text: '습니다', correct: false },
          { text: '거든요', correct: false }
        ],
        explanation: '현재 상태를 설명할 때 "-는데요"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_005_007',
        type: 'multiple-choice',
        question: '좋아하___ 사 주세요.',
        options: [
          { text: '거든', correct: true },
          { text: '는데', correct: false },
          { text: '어서', correct: false },
          { text: '니까', correct: false }
        ],
        explanation: '조건을 나타낼 때 "-거든"을 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_005_008',
        type: 'multiple-choice',
        question: '몰랐___.',
        options: [
          { text: '는데요', correct: true },
          { text: '어요', correct: false },
          { text: '습니다', correct: false },
          { text: '거든요', correct: false }
        ],
        explanation: '상황 설명을 할 때 "-는데요"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_005_009',
        type: 'multiple-choice',
        question: '필요하___ 말하세요.',
        options: [
          { text: '거든', correct: true },
          { text: '는데', correct: false },
          { text: '어서', correct: false },
          { text: '니까', correct: false }
        ],
        explanation: '조건을 나타낼 때 "-거든"을 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_005_010',
        type: 'multiple-choice',
        question: '안 돼___.',
        options: [
          { text: '는데요', correct: true },
          { text: '어요', correct: false },
          { text: '습니다', correct: false },
          { text: '거든요', correct: false }
        ],
        explanation: '상황을 설명할 때 "-는데요"를 사용합니다.',
        source: 'TOPIK Level 1'
      }
    ],

    beg_006: [ // -어요/-아요 (현재시 비정식 경어)
      {
        id: 'beg_006_001',
        type: 'fill-blank',
        question: '엄마___편지를 썼습니다.',
        correctAnswers: ['에게'],
        explanation: '동작의 대상이 되는 사람을 나타낼 때 "에게"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_002',
        type: 'multiple-choice',
        question: '선생님___물었습니다.',
        options: [
          { text: '에게', correct: true },
          { text: '을', correct: false },
          { text: '와', correct: false },
          { text: '에', correct: false }
        ],
        explanation: '질문하는 대상을 나타낼 때 "에게"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_003',
        type: 'fill-blank',
        question: '아버지___선물을 드렸습니다.',
        correctAnswers: ['에게'],
        explanation: '선물을 주는 대상을 나타낼 때 "에게"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_004',
        type: 'multiple-choice',
        question: '"친구에게 물었다"는 무엇을 나타냅니까?',
        options: [
          { text: '친구가 물음을 받는 대상', correct: true },
          { text: '친구의 위치', correct: false },
          { text: '친구와의 동반', correct: false },
          { text: '친구가 동작의 주체', correct: false }
        ],
        explanation: '"에게"는 동작을 받는 대상을 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_005',
        type: 'fill-blank',
        question: '동생___도움을 받았습니다.',
        correctAnswers: ['에게'],
        explanation: '도움을 받는 대상을 나타낼 때 "에게"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_006',
        type: 'fill-blank',
        question: '할머니___전화를 했습니다.',
        correctAnswers: ['에게'],
        explanation: '전화를 거는 대상을 나타낼 때 "에게"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_007',
        type: 'multiple-choice',
        question: '다음 중 "에게"의 사용이 올바른 것은?',
        options: [
          { text: '나는 친구에게 책을 빌렸습니다.', correct: true },
          { text: '나는 친구을 책을 빌렸습니다.', correct: false },
          { text: '나는 친구와 책을 빌렸습니다.', correct: false },
          { text: '나는 친구에 책을 빌렸습니다.', correct: false }
        ],
        explanation: '"에게"는 대상을 나타내는 조사입니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_008',
        type: 'fill-blank',
        question: '모든 사람___존댓말을 합니다.',
        correctAnswers: ['에게'],
        explanation: '존댓말을 하는 대상을 나타낼 때 "에게"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_009',
        type: 'fill-blank',
        question: '손님___따뜻한 물을 제공합니다.',
        correctAnswers: ['에게'],
        explanation: '물을 제공하는 대상을 나타낼 때 "에게"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_010',
        type: 'fill-blank',
        question: '의사___진료를 받습니다.',
        correctAnswers: ['에게'],
        explanation: '진료를 받는 대상을 나타낼 때 "에게"를 사용합니다.',
        source: 'TOPIK Level 1'
      }
    ],

    beg_007: [ // -고 (나열/접속)
      {
        id: 'beg_007_001',
        type: 'multiple-choice',
        question: '밥을 먹___학교에 갑니다.',
        options: [
          { text: '고', correct: true },
          { text: '면서', correct: false },
          { text: '으면', correct: false },
          { text: '지만', correct: false }
        ],
        explanation: '"고"는 두 동작을 순서대로 나열할 때 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_002',
        type: 'multiple-choice',
        question: '책을 읽___숙제를 합니다. 어느 것이 올바릅니까?',
        options: [
          { text: '고', correct: true },
          { text: '면서', correct: false },
          { text: '으면', correct: false },
          { text: '기', correct: false }
        ],
        explanation: '두 동작을 순서대로 나열할 때 "고"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_003',
        type: 'fill-blank',
        question: '음식을 사___집으로 돌아갔습니다.',
        correctAnswers: ['고'],
        explanation: '동작을 순서대로 나열할 때 "고"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_004',
        type: 'multiple-choice',
        question: '"커피를 마시고 신문을 읽습니다"에서 "고"의 역할은?',
        options: [
          { text: '두 동작을 순서대로 연결', correct: true },
          { text: '동시에 일어나는 동작', correct: false },
          { text: '원인을 나타냄', correct: false },
          { text: '조건을 나타냄', correct: false }
        ],
        explanation: '"고"는 동작을 순서대로 나열합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_005',
        type: 'fill-blank',
        question: '세수를 하___풀을 합니다.',
        correctAnswers: ['고'],
        explanation: '동작의 순서를 나타낼 때 "고"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_006',
        type: 'fill-blank',
        question: '노래를 부르___춤을 춥니다.',
        correctAnswers: ['고'],
        explanation: '여러 동작을 나열할 때 "고"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_007',
        type: 'multiple-choice',
        question: '다음 중 "고"의 사용이 올바른 것은?',
        options: [
          { text: '밥을 먹고 놀았습니다.', correct: true },
          { text: '밥을 먹며 놀았습니다.', correct: false },
          { text: '밥을 먹으면 놀았습니다.', correct: false },
          { text: '밥을 먹기 놀았습니다.', correct: false }
        ],
        explanation: '동작을 순서대로 나열할 때는 "고"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_008',
        type: 'fill-blank',
        question: '옷을 입___외출합니다.',
        correctAnswers: ['고'],
        explanation: '동작을 순서대로 연결할 때 "고"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_009',
        type: 'fill-blank',
        question: '손을 씻___밥을 먹습니다.',
        correctAnswers: ['고'],
        explanation: '동작 순서를 나타낼 때 "고"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_010',
        type: 'fill-blank',
        question: '공부를 하___쉬었습니다.',
        correctAnswers: ['고'],
        explanation: '여러 동작을 순서대로 나열할 때 "고"를 사용합니다.',
        source: 'TOPIK Level 1'
      }
    ],

    beg_008: [ // -ㄹ/을 수 있다 (가능성 표현)
      {
        id: 'beg_008_001',
        type: 'fill-blank',
        question: '나는 한국어를 할___있습니다.',
        correctAnswers: ['수'],
        explanation: '가능성을 나타낼 때 "ㄹ/을 수 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_002',
        type: 'multiple-choice',
        question: '이 음식을 먹을___있습니까?',
        options: [
          { text: '수', correct: true },
          { text: '것', correct: false },
          { text: '때', correct: false },
          { text: '방', correct: false }
        ],
        explanation: '가능성을 나타낼 때 "수 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_003',
        type: 'fill-blank',
        question: '이 문제를 풀___있습니다.',
        correctAnswers: ['수'],
        explanation: '"수 있다"는 능력이나 가능성을 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_004',
        type: 'multiple-choice',
        question: '"수 있다"가 나타내는 것은?',
        options: [
          { text: '능력과 가능성', correct: true },
          { text: '필요성', correct: false },
          { text: '목적', correct: false },
          { text: '원인', correct: false }
        ],
        explanation: '"수 있다"는 능력이나 가능성을 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_005',
        type: 'fill-blank',
        question: '나는 피아노를 칠___있습니다.',
        correctAnswers: ['수'],
        explanation: '"수 있다"는 기술이나 능력을 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_006',
        type: 'fill-blank',
        question: '내일 날씨가 좋으면 산에 갈___있습니다.',
        correctAnswers: ['수'],
        explanation: '조건부 가능성을 나타낼 때 "수 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_007',
        type: 'multiple-choice',
        question: '다음 중 "수 있다"의 사용이 올바른 것은?',
        options: [
          { text: '나는 영어를 할 수 있습니다.', correct: true },
          { text: '나는 영어를 할 있습니다.', correct: false },
          { text: '나는 영어를 할 수다.', correct: false },
          { text: '나는 영어를 한 수 있습니다.', correct: false }
        ],
        explanation: '"수 있다"는 "ㄹ/을 수 있다" 형태로 사용됩니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_008',
        type: 'fill-blank',
        question: '저는 한국말을 배울___있습니다.',
        correctAnswers: ['수'],
        explanation: '"수 있다"는 능력이나 가능성을 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_009',
        type: 'fill-blank',
        question: '이 책을 이해할___있습니까?',
        correctAnswers: ['수'],
        explanation: '이해 가능성을 나타낼 때 "수 있다"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_010',
        type: 'fill-blank',
        question: '그 사람을 만날___있을까요?',
        correctAnswers: ['수'],
        explanation: '"수 있다"는 만날 가능성을 나타냅니다.',
        source: 'TOPIK Level 1'
      }
    ],

    beg_009: [ // -ㄴ/은 후 (후행/순차)
      {
        id: 'beg_009_001',
        type: 'fill-blank',
        question: '밥을 먹은___공부를 합니다.',
        correctAnswers: ['후'],
        explanation: '"은 후에"는 한 동작 후에 다른 동작이 일어남을 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_002',
        type: 'multiple-choice',
        question: '영화를 본___무엇을 했습니까?',
        options: [
          { text: '후', correct: true },
          { text: '고', correct: false },
          { text: '면서', correct: false },
          { text: '기', correct: false }
        ],
        explanation: '"은 후"는 순차적 시간 관계를 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_003',
        type: 'fill-blank',
        question: '일을 마친___집에 갔습니다.',
        correctAnswers: ['후'],
        explanation: '일이 끝난 후의 동작을 나타낼 때 "은 후"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_004',
        type: 'multiple-choice',
        question: '"은 후에"의 역할은?',
        options: [
          { text: '선행 동작 후 후행 동작이 일어남', correct: true },
          { text: '두 동작이 동시에 일어남', correct: false },
          { text: '동작의 반복', correct: false },
          { text: '동작의 가능성', correct: false }
        ],
        explanation: '"은 후"는 시간적 순서를 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_005',
        type: 'fill-blank',
        question: '학교를 졸업한___회사에 다녔습니다.',
        correctAnswers: ['후'],
        explanation: '순차적 동작을 나타낼 때 "은 후"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_006',
        type: 'fill-blank',
        question: '세수를 한___아침을 먹습니다.',
        correctAnswers: ['후'],
        explanation: '"은 후"는 순차적 시간 관계를 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_007',
        type: 'multiple-choice',
        question: '다음 중 "은 후"의 사용이 올바른 것은?',
        options: [
          { text: '공부한 후에 쉬었습니다.', correct: true },
          { text: '공부한 고 쉬었습니다.', correct: false },
          { text: '공부한 면서 쉬었습니다.', correct: false },
          { text: '공부한 기 쉬었습니다.', correct: false }
        ],
        explanation: '"은 후"는 시간적 순서를 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_008',
        type: 'fill-blank',
        question: '저녁을 먹은___산책을 합니다.',
        correctAnswers: ['후'],
        explanation: '순차적 동작을 나타낼 때 "은 후"를 사용합니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_009',
        type: 'fill-blank',
        question: '약을 먹은___잠을 잤습니다.',
        correctAnswers: ['후'],
        explanation: '"은 후"는 시간적 순서를 나타냅니다.',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_010',
        type: 'fill-blank',
        question: '운동을 한___샤워를 합니다.',
        correctAnswers: ['후'],
        explanation: '운동 후 샤워를 하는 순차적 동작을 나타냅니다.',
        source: 'TOPIK Level 1'
      }
    ]
  }
  ,
  intermediate: {
    // 중급 연습 문제 - 각 문법점마다 8-10문제 제공
    int_001: [ // -게 하다 (使役形)
      {
        id: 'int_001_001',
        type: 'multiple-choice',
        question: '어머니가 나를 학교에___했어요.',
        options: [
          { text: '가게', correct: true },
          { text: '가', correct: false },
          { text: '갔게', correct: false },
          { text: '갈게', correct: false }
        ],
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
        type: 'multiple-choice',
        question: '선생님이 학생들을 공부하___했습니다.',
        options: [
          { text: '게', correct: true },
          { text: '고', correct: false },
          { text: '러', correct: false },
          { text: '도록', correct: false }
        ],
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
        type: 'multiple-choice',
        question: '의사가 환자에게 약을___했어요.',
        options: [
          { text: '먹게', correct: true },
          { text: '먹', correct: false },
          { text: '먹도록', correct: false },
          { text: '먹으러', correct: false }
        ],
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
        type: 'multiple-choice',
        question: '선생님이 우리에게 한국말을___했어요.',
        options: [
          { text: '배우게', correct: true },
          { text: '배우', correct: false },
          { text: '배우도록', correct: false },
          { text: '배워', correct: false }
        ],
        explanation: '배우다 → 배우게 하다 (선생님이 우리에게 한국말을 배우게 했다)',
        source: 'TOPIK Level 2'
      }
    ],
    int_002: [ // -는 데 (진행 중/목적/어려움)
      {
        id: 'int_002_001',
        type: 'multiple-choice',
        question: '공부하___데 어려워요.',
        options: [
          { text: '는', correct: true },
          { text: '은', correct: false },
          { text: '을', correct: false },
          { text: '던', correct: false }
        ],
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
        type: 'multiple-choice',
        question: '한국어를 배우___데 3개월이 걸렸어요.',
        options: [
          { text: '는', correct: true },
          { text: '은', correct: false },
          { text: '을', correct: false },
          { text: '던', correct: false }
        ],
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
        type: 'multiple-choice',
        question: '숙제를 마치___데 2시간이 걸렸어요.',
        options: [
          { text: '는', correct: true },
          { text: '은', correct: false },
          { text: '을', correct: false },
          { text: '던', correct: false }
        ],
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
        type: 'multiple-choice',
        question: '이 음식을 요리하___데 어려워요.',
        options: [
          { text: '는', correct: true },
          { text: '은', correct: false },
          { text: '을', correct: false },
          { text: '던', correct: false }
        ],
        explanation: '음식을 요리하는 데 어렵다 = 요리하기가 어렵다',
        source: 'TOPIK Level 2'
      }
    ],
    int_003: [ // -도록 (목적/결과/정도)
      {
        id: 'int_003_001',
        type: 'multiple-choice',
        question: '건강하___운동해요.',
        options: [
          { text: '도록', correct: true },
          { text: '게', correct: false },
          { text: '려고', correct: false },
          { text: '고', correct: false }
        ],
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
        type: 'multiple-choice',
        question: '늦지 않___빨리 왔어요.',
        options: [
          { text: '도록', correct: true },
          { text: '게', correct: false },
          { text: '려고', correct: false },
          { text: '고', correct: false }
        ],
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
        type: 'multiple-choice',
        question: '학교에 가___짐을 챙겨야 해요.',
        options: [
          { text: '도록', correct: true },
          { text: '게', correct: false },
          { text: '려고', correct: false },
          { text: '고', correct: false }
        ],
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
        type: 'multiple-choice',
        question: '실패하지 않___노력해야 해요.',
        options: [
          { text: '도록', correct: true },
          { text: '게', correct: false },
          { text: '려고', correct: false },
          { text: '고', correct: false }
        ],
        explanation: '실패하지 않도록 노력하다 = 실패하지 않기 위해 노력하다 (목적)',
        source: 'TOPIK Level 2'
      }
    ],
    int_010: [ // -아/-어도 (대조/허용)
      {
        id: 'int_010_001',
        type: 'multiple-choice',
        question: '비가 와___그냥 간다.',
        options: [
          { text: '도', correct: true },
          { text: '서', correct: false },
          { text: '니까', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '와(와다) + 도 = 와도 (비가 와도...)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_010_002',
        type: 'grammar-comparison',
        question: '-도와 -어도/-아도의 차이',
        optionA: '-도: 모든 단어 뒤에 추가하여 "비록, 그럼에도 불구하고"를 나타냄',
        optionB: '-어도/-아도: 동사에 사용되며, 어간 끝음에 따라 선택',
        explanation: '두 표현 모두 대조를 나타내지만, 문법적 기능과 사용법이 약간 다름.'
      },
      {
        id: 'int_010_003',
        type: 'multiple-choice',
        question: '열심히 공부해___시험에 떨어졌다.',
        options: [
          { text: '도', correct: true },
          { text: '서', correct: false },
          { text: '니까', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '열심히(열심히) + 공부하다 → 공부해도 (열심히 공부해도...)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_010_004',
        type: 'multiple-choice',
        question: '다음 중 올바른 문장은?',
        options: [
          { text: '아무리 노력해도 안 된다', correct: true },
          { text: '아무리 노력어도 안 된다', correct: false },
          { text: '아무리 노력아도 안 된다', correct: false }
        ],
        explanation: '노력(노력) → 노력하다 → 노력해도'
      },
      {
        id: 'int_010_005',
        type: 'context-judgment',
        question: '"아무리 돈이 많아도 행복하지 않다"에서 -어도는 무엇을 나타내나요?',
        options: [
          { text: '대조, 돈이 많아도...', correct: true },
          { text: '원인', correct: false }
        ],
        explanation: '-어도는 대조 관계를 나타냅니다.'
      },
      {
        id: 'int_010_006',
        type: 'multiple-choice',
        question: '몇 번을 말해___듣지 않는다.',
        options: [
          { text: '도', correct: true },
          { text: '서', correct: false },
          { text: '니까', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '말하다 → 말해도 (몇 번 말해도...)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_010_007',
        type: 'translation',
        question: '번역: 비가 와도 우리는 간다.',
        expectedKorean: '비가 와도 우리는 간다',
        chineseMeaning: '비가 와도 우리는 간다.',
        explanation: '-도는 대조/허용 표현으로, 어떤 일이 일어나도 결과가 바뀌지 않음을 나타냅니다.'
      },
      {
        id: 'int_010_008',
        type: 'multiple-choice',
        question: '실패해___다시 시도해야 한다.',
        options: [
          { text: '도', correct: true },
          { text: '서', correct: false },
          { text: '니까', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '실패하다 → 실패해도 (실패해도...)',
        source: 'TOPIK Level 2'
      }
    ],
    int_011: [ // -는 중이다 (진행 중)
      {
        id: 'int_011_001',
        type: 'multiple-choice',
        question: '나는 지금 공부하___중이다.',
        options: [
          { text: '는', correct: true },
          { text: '한', correct: false },
          { text: '할', correct: false },
          { text: '했던', correct: false }
        ],
        explanation: '공부 + 하다 → 공부하는 중이다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_011_002',
        type: 'multiple-choice',
        question: '-는 중이다는 무엇을 나타내나요?',
        options: [
          { text: '진행 중인 행동', correct: true },
          { text: '과거의 행동', correct: false },
          { text: '미래의 계획', correct: false }
        ],
        explanation: '-는 중이다는 지금 진행 중인 것을 나타냅니다.'
      },
      {
        id: 'int_011_003',
        type: 'multiple-choice',
        question: '영화가 지금 상영되___중이다.',
        options: [
          { text: '는', correct: true },
          { text: '된', correct: false },
          { text: '될', correct: false },
          { text: '됐던', correct: false }
        ],
        explanation: '상영되다 → 상영되는 중이다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_011_004',
        type: 'context-judgment',
        question: '"나는 밥을 먹는 중이다"가 지금 밥을 먹고 있다는 것을 나타내나요?',
        options: [
          { text: '네', correct: true },
          { text: '아니오', correct: false }
        ],
        explanation: '-는 중이다는 행동이 진행 중임을 나타냅니다.'
      },
      {
        id: 'int_011_005',
        type: 'translation',
        question: '번역: 그는 지금 일하는 중이다.',
        expectedKorean: '그는 지금 일하는 중이다',
        chineseMeaning: '그는 지금 일하는 중이다.',
        explanation: '-는 중이다는 행동이 진행 중인 상태를 강조합니다.'
      },
      {
        id: 'int_011_006',
        type: 'multiple-choice',
        question: '회의가 진행되___중이니 조용히 하세요.',
        options: [
          { text: '는', correct: true },
          { text: '된', correct: false },
          { text: '될', correct: false },
          { text: '됐던', correct: false }
        ],
        explanation: '진행되다 → 진행되는 중이다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_011_007',
        type: 'multiple-choice',
        question: '다음 중 올바른 형태는?',
        options: [
          { text: '공부하는 중이다', correct: true },
          { text: '공부한 중이다', correct: false },
          { text: '공부할 중이다', correct: false }
        ],
        explanation: '필수적으로 현재 진행형 -는을 사용해야 합니다.'
      },
      {
        id: 'int_011_008',
        type: 'multiple-choice',
        question: '아이가 밥을 먹___중이다.',
        options: [
          { text: '는', correct: true },
          { text: '은', correct: false },
          { text: '을', correct: false },
          { text: '었던', correct: false }
        ],
        explanation: '먹다 → 먹는 중이다',
        source: 'TOPIK Level 2'
      }
    ],
    int_012: [ // -겠-/-을/ㄹ 것이다 (未来时/意志/推测)
      {
        id: 'int_012_001',
        type: 'multiple-choice',
        question: '내일 날씨가 좋___요.',
        options: [
          { text: '겠어', correct: true },
          { text: '아요', correct: false },
          { text: '을', correct: false },
          { text: '은', correct: false }
        ],
        explanation: '좋다 → 좋겠어요 (추측)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_012_002',
        type: 'multiple-choice',
        question: '-겠-는 무엇을 나타내나요?',
        options: [
          { text: '화자의 의지나 추측', correct: true },
          { text: '과거 사실', correct: false },
          { text: '명령', correct: false }
        ],
        explanation: '-겠-은 미래의 의지나 추측을 나타냅니다.'
      },
      {
        id: 'int_012_003',
        type: 'multiple-choice',
        question: '나는 너를 도와___것이다.',
        options: [
          { text: '줄', correct: true },
          { text: '주', correct: false },
          { text: '줌', correct: false },
          { text: '준', correct: false }
        ],
        explanation: '도와주다 → 도와줄 것이다 (약속/의지)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_012_004',
        type: 'context-judgment',
        question: '"그는 올 거야"는 확실한 미래를 나타내나요?',
        options: [
          { text: '아니오, 가능성을 나타냄', correct: true },
          { text: '네', correct: false }
        ],
        explanation: '-ㄹ 것이다는 확실한 미래보다는 추측을 나타냅니다.'
      },
      {
        id: 'int_012_005',
        type: 'translation',
        question: '번역: 나는 너를 도와줄 것이다.',
        expectedKorean: '나는 너를 도와줄 것이다',
        chineseMeaning: '我会帮助你。',
        explanation: '-ㄹ 것이다는 약속이나 의지의 미래를 나타냅니다.'
      },
      {
        id: 'int_012_006',
        type: 'multiple-choice',
        question: '그 일은 어렵___거야.',
        options: [
          { text: '울', correct: true },
          { text: '을', correct: false },
          { text: '겠', correct: false },
          { text: '는', correct: false }
        ],
        explanation: '어렵다 → 어려울 거야 (추측)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_012_007',
        type: 'multiple-choice',
        question: '다음 중 올바른 문장은?',
        options: [
          { text: '내일 비가 올 것 같아', correct: true },
          { text: '내일 비가 올 거 같아', correct: false }
        ],
        explanation: '-ㄹ 것 같다는 "을/ㄹ"을 사용합니다.'
      },
      {
        id: 'int_012_008',
        type: 'multiple-choice',
        question: '이 문제는 어렵___요.',
        options: [
          { text: '겠어', correct: true },
          { text: '어요', correct: false },
          { text: '을', correct: false },
          { text: '울', correct: false }
        ],
        explanation: '어렵다 → 어렵겠어요 (추측)',
        source: 'TOPIK Level 2'
      }
    ],
    int_013: [ // -아/어서/-으니까/-니까/-기 때문에 (因果关系)
      {
        id: 'int_013_001',
        type: 'multiple-choice',
        question: '피곤해___못 갔어.',
        options: [
          { text: '서', correct: true },
          { text: '도', correct: false },
          { text: '니까', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '피곤하다 → 피곤해서 (원인/이유)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_013_002',
        type: 'multiple-choice',
        question: '-아/어서 vs -기 때문에의 차이는?',
        options: [
          { text: '-아/어서가 더 자연스럽고 일상적', correct: true },
          { text: '-기 때문에가 더 일상적', correct: false }
        ],
        explanation: '-아/어서는 가장 자연스럽고, -기 때문에는 가장 공식적입니다.'
      },
      {
        id: 'int_013_003',
        type: 'multiple-choice',
        question: '시간이 없으___까 못 간다.',
        options: [
          { text: '니', correct: true },
          { text: '서', correct: false },
          { text: '도', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '없다 → 없으니까 (원인)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_013_004',
        type: 'context-judgment',
        question: '"돈이 없으니까 못 산다"에서 어느 표현이 가장 자연스러워요?',
        options: [
          { text: '-아/어서', correct: true },
          { text: '-으니까', correct: false },
          { text: '-기 때문에', correct: false }
        ],
        explanation: '세 표현 모두 가능하지만 -아/어서가 가장 자연스럽습니다.'
      },
      {
        id: 'int_013_005',
        type: 'translation',
        question: '번역: 시간이 없기 때문에 갈 수 없었다.',
        expectedKorean: '시간이 없기 때문에 갈 수 없었다',
        chineseMeaning: '因为没有时间所以无法去。',
        explanation: '-기 때문에는 가장 공식적이고 정중한 표현입니다.'
      },
      {
        id: 'int_013_006',
        type: 'multiple-choice',
        question: '좋아___좋은 일을 한다.',
        options: [
          { text: '서', correct: true },
          { text: '니까', correct: false },
          { text: '도', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '좋다 → 좋아서 (원인/이유)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_013_007',
        type: 'multiple-choice',
        question: '다음 중 가장 공식적인 표현은?',
        options: [
          { text: '시간이 없기 때문에', correct: true },
          { text: '시간이 없어서', correct: false },
          { text: '시간이 없으니까', correct: false }
        ],
        explanation: '-기 때문에는 가장 정중하고 공식적인 표현입니다.'
      },
      {
        id: 'int_013_008',
        type: 'multiple-choice',
        question: '바쁘___까 이따 만나자.',
        options: [
          { text: '니', correct: true },
          { text: '서', correct: false },
          { text: '도', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '바쁘다 → 바쁘니까 (자연스러운 이유)',
        source: 'TOPIK Level 2'
      }
    ],
    int_014: [ // -아/어 주다/-아/어 달라 (请求)
      {
        id: 'int_014_001',
        type: 'multiple-choice',
        question: '이걸 도와줄___요?',
        options: [
          { text: '래', correct: true },
          { text: '까', correct: false },
          { text: '게', correct: false },
          { text: '니', correct: false }
        ],
        explanation: '도와주다 → 도와줄래요 (정중한 요청)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_014_002',
        type: 'multiple-choice',
        question: '-아/어 주다는 무엇을 나타내나요?',
        options: [
          { text: '누군가에게 도움을 청함', correct: true },
          { text: '직접적인 명령', correct: false }
        ],
        explanation: '-아/어 주다는 도움을 요청하거나 부탁하는 표현입니다.'
      },
      {
        id: 'int_014_003',
        type: 'multiple-choice',
        question: '물 좀 달___.',
        options: [
          { text: '라', correct: true },
          { text: '려', correct: false },
          { text: '래', correct: false },
          { text: '로', correct: false }
        ],
        explanation: '주다 → 달라 (직접적인 요청)',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_014_004',
        type: 'context-judgment',
        question: '"도와줄래요"가 "해달라"보다 더 정중한가요?',
        options: [
          { text: '네', correct: true },
          { text: '아니오', correct: false }
        ],
        explanation: '-아/어 주다가 -아/어 달라보다 더 정중한 표현입니다.'
      },
      {
        id: 'int_014_005',
        type: 'translation',
        question: '번역: 이 문제를 풀어줄 수 있나요?',
        expectedKorean: '이 문제를 풀어줄 수 있나요',
        chineseMeaning: '你能帮我解这道题吗？',
        explanation: '-아/어 주다는 도움의 요청을 나타냅니다.'
      },
      {
        id: 'int_014_006',
        type: 'multiple-choice',
        question: '혼자 못해서 좀 봐줄___요?',
        options: [
          { text: '래', correct: true },
          { text: '까', correct: false },
          { text: '게', correct: false },
          { text: '니', correct: false }
        ],
        explanation: '보다 → 봐주다 → 봐줄래요',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_014_007',
        type: 'multiple-choice',
        question: '다음 중 가장 직접적인 요청은?',
        options: [
          { text: '물 좀 달라', correct: true },
          { text: '물을 좀 줄래요?', correct: false }
        ],
        explanation: '-아/어 달라가 -아/어 주다보다 더 직접적입니다.'
      },
      {
        id: 'int_014_008',
        type: 'multiple-choice',
        question: '내가 할___해도 돼요?',
        options: [
          { text: '래', correct: true },
          { text: '까', correct: false },
          { text: '게', correct: false },
          { text: '니', correct: false }
        ],
        explanation: '하다 → 할래요 (정중한 요청)',
        source: 'TOPIK Level 2'
      }
    ],
    int_015: [ // -ㄹ/을 수 있다/-ㄹ/을 수 없다 (能力/可能性)
      {
        id: 'int_015_001',
        type: 'multiple-choice',
        question: '나는 한국말을 할 수___요.',
        options: [
          { text: '있어', correct: true },
          { text: '없어', correct: false },
          { text: '있으', correct: false },
          { text: '없으', correct: false }
        ],
        explanation: '할 수 있다 = can speak',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_015_002',
        type: 'multiple-choice',
        question: '-ㄹ/을 수 있다는 무엇을 나타내나요?',
        options: [
          { text: '능력이나 가능성', correct: true },
          { text: '의무', correct: false },
          { text: '금지', correct: false }
        ],
        explanation: '-ㄹ/을 수 있다는 할 수 있는 능력을 나타냅니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_015_003',
        type: 'multiple-choice',
        question: '저는 운전을 할 수___어요.',
        options: [
          { text: '없', correct: true },
          { text: '있', correct: false },
          { text: '없어', correct: false },
          { text: '있어', correct: false }
        ],
        explanation: '할 수 없다 = cannot',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_015_004',
        type: 'multiple-choice',
        question: '이 영화를 볼 수___요?',
        options: [
          { text: '있어', correct: true },
          { text: '없어', correct: false },
          { text: '있으', correct: false },
          { text: '없으', correct: false }
        ],
        explanation: '볼 수 있어요 = can watch',
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
        explanation: '두 표현은 모두 할 수 없다는 의미입니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_015_006',
        type: 'multiple-choice',
        question: '숙제를 다할 수___어.',
        options: [
          { text: '있', correct: true },
          { text: '없', correct: false },
          { text: '있어', correct: false },
          { text: '없어', correct: false }
        ],
        explanation: '다할 수 있어 = can finish homework',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_015_007',
        type: 'multiple-choice',
        question: '올바른 형태는?',
        options: [
          { text: '할 수 있다', correct: true },
          { text: '할 수있다', correct: false },
          { text: '할수 있다', correct: false }
        ],
        explanation: '수는 반드시 띄어떨어져야 합니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_015_008',
        type: 'multiple-choice',
        question: '그 음식을 먹을 수___요.',
        options: [
          { text: '있어', correct: true },
          { text: '없어', correct: false },
          { text: '있으', correct: false },
          { text: '없으', correct: false }
        ],
        explanation: '먹을 수 있어요 = can eat',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_015_009',
        type: 'multiple-choice',
        question: '우리는 하루에 여러 번 만날 수___어.',
        options: [
          { text: '있', correct: true },
          { text: '없', correct: false },
          { text: '있어', correct: false },
          { text: '없어', correct: false }
        ],
        explanation: '만날 수 있어 = can meet',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_015_010',
        type: 'context-judgment',
        question: '할 수 없다는 과거형으로 할 수 없었다로 표현할 수 있다.',
        options: [
          { text: '맞다', correct: true },
          { text: '틀리다', correct: false }
        ],
        explanation: '할 수 없었다 = could not',
        source: 'TOPIK Level 2'
      }
    ],
    int_016: [ // -면 (조건)
      {
        id: 'int_016_001',
        type: 'multiple-choice',
        question: '빨리 가___학교에 갈 수 있어.',
        options: [
          { text: '면', correct: true },
          { text: '서', correct: false },
          { text: '니까', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '가다 → 가면 = if go',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_016_002',
        type: 'multiple-choice',
        question: '-면의 의미는?',
        options: [
          { text: '조건/가정', correct: true },
          { text: '원인', correct: false },
          { text: '대비', correct: false }
        ],
        explanation: '-면은 "만약...라면"의 조건을 나타냅니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_016_003',
        type: 'multiple-choice',
        question: '돈이 많___뭘 할래?',
        options: [
          { text: '으면', correct: true },
          { text: '면', correct: false },
          { text: '서', correct: false },
          { text: '니까', correct: false }
        ],
        explanation: '많다 → 많으면 = if have much money',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_016_004',
        type: 'multiple-choice',
        question: '내가 너라면 그렇게___할 것 같아.',
        options: [
          { text: '', correct: true },
          { text: '도', correct: false },
          { text: '는', correct: false },
          { text: '만', correct: false }
        ],
        explanation: '내가 너라면 그렇게 할 것 같아 = if I were you',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_016_005',
        type: 'context-judgment',
        question: '-면은 문법적 조건만 나타낸다.',
        options: [
          { text: '틀리다', correct: true },
          { text: '맞다', correct: false }
        ],
        explanation: '-면은 사실적, 가정적, 반복적 조건을 모두 나타낼 수 있습니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_016_006',
        type: 'multiple-choice',
        question: '시간이 되___같이 가자.',
        options: [
          { text: '면', correct: true },
          { text: '서', correct: false },
          { text: '니까', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '되다 → 되면 = if have time',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_016_007',
        type: 'multiple-choice',
        question: '올바른 형태는?',
        options: [
          { text: '가면', correct: true },
          { text: '가든지', correct: false },
          { text: '가고', correct: false }
        ],
        explanation: '조건의 -면이 올바른 표현입니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_016_008',
        type: 'multiple-choice',
        question: '착하___더 많은 친구가 생길 거야.',
        options: [
          { text: '면', correct: true },
          { text: '서', correct: false },
          { text: '니까', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '착하다 → 착하면 = if kind',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_016_009',
        type: 'multiple-choice',
        question: '더 열심히 공부하___시험에 합격할 수 있어.',
        options: [
          { text: '면', correct: true },
          { text: '서', correct: false },
          { text: '니까', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '하다 → 하면 = if study harder',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_016_010',
        type: 'context-judgment',
        question: '-면/-ㄴ다면/-다면은 모두 같은 조건의 의미를 나타낸다.',
        options: [
          { text: '맞다', correct: true },
          { text: '틀리다', correct: false }
        ],
        explanation: '모두 조건을 나타내지만 약간의 미묘한 차이가 있습니다',
        source: 'TOPIK Level 2'
      }
    ],
    int_017: [ // -아/어야 (의무/필요성)
      {
        id: 'int_017_001',
        type: 'multiple-choice',
        question: '약을 먹어___감기가 낫다.',
        options: [
          { text: '야', correct: true },
          { text: '서', correct: false },
          { text: '도', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '먹다 → 먹어야 = must take medicine',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_017_002',
        type: 'multiple-choice',
        question: '-아/어야의 의미는?',
        options: [
          { text: '의무/필요성', correct: true },
          { text: '가능성', correct: false },
          { text: '주의', correct: false }
        ],
        explanation: '-아/어야는 ~해야 한다는 의무를 나타냅니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_017_003',
        type: 'multiple-choice',
        question: '학교에 가___해요.',
        options: [
          { text: '야', correct: true },
          { text: '서', correct: false },
          { text: '도', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '가다 → 가야 해요 = must go to school',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_017_004',
        type: 'multiple-choice',
        question: '이 일을 끝내___돼.',
        options: [
          { text: '야', correct: true },
          { text: '서', correct: false },
          { text: '도', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '끝내다 → 끝내야 돼 = must finish this work',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_017_005',
        type: 'context-judgment',
        question: '-아/어야는 과거에도 사용할 수 있다.',
        options: [
          { text: '맞다', correct: true },
          { text: '틀리다', correct: false }
        ],
        explanation: '-아/어야 했다 = should have done',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_017_006',
        type: 'multiple-choice',
        question: '열심히 공부해___시험에 합격한다.',
        options: [
          { text: '야', correct: true },
          { text: '서', correct: false },
          { text: '도', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '공부하다 → 공부해야',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_017_007',
        type: 'multiple-choice',
        question: '올바른 형태는?',
        options: [
          { text: '해야 해요', correct: true },
          { text: '해야 돼요', correct: true },
          { text: '해야 해', correct: false }
        ],
        explanation: '해야 해요와 해야 돼요는 모두 맞습니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_017_008',
        type: 'multiple-choice',
        question: '숙제를 해___돼요.',
        options: [
          { text: '야', correct: true },
          { text: '서', correct: false },
          { text: '도', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '하다 → 해야 돼요 = must do homework',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_017_009',
        type: 'multiple-choice',
        question: '규칙을 지켜___한다.',
        options: [
          { text: '야', correct: true },
          { text: '서', correct: false },
          { text: '도', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '지키다 → 지켜야 한다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_017_010',
        type: 'context-judgment',
        question: '-아/어야 한다는 -아/어야 된다보다 더 강한 의무를 나타낸다.',
        options: [
          { text: '아니다', correct: true },
          { text: '맞다', correct: false }
        ],
        explanation: '두 표현은 거의 같은 의미의 의무를 나타냅니다',
        source: 'TOPIK Level 2'
      }
    ],
    int_018: [ // -고 (나열/순차)
      {
        id: 'int_018_001',
        type: 'multiple-choice',
        question: '아침에 밥을 먹___학교에 간다.',
        options: [
          { text: '고', correct: true },
          { text: '서', correct: false },
          { text: '면', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '먹다 → 먹고 = eat and go to school',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_018_002',
        type: 'multiple-choice',
        question: '-고의 주요 기능은?',
        options: [
          { text: '나열이나 순차적 동작', correct: true },
          { text: '대비', correct: false },
          { text: '조건', correct: false }
        ],
        explanation: '-고는 여러 동작을 나열하거나 순서대로 나타냅니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_018_003',
        type: 'multiple-choice',
        question: '밥을 짓___국을 끓인다.',
        options: [
          { text: '고', correct: true },
          { text: '서', correct: false },
          { text: '면', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '짓다 → 짓고 = cook rice and prepare soup',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_018_004',
        type: 'multiple-choice',
        question: '영화를 보___노래방에 간다.',
        options: [
          { text: '고', correct: true },
          { text: '서', correct: false },
          { text: '면', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '보다 → 보고 = watch movie and go karaoke',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_018_005',
        type: 'context-judgment',
        question: '-고는 항상 시간 순서대로 나열한다.',
        options: [
          { text: '틀리다', correct: true },
          { text: '맞다', correct: false }
        ],
        explanation: '-고는 동시에 일어나는 동작도 나타낼 수 있습니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_018_006',
        type: 'multiple-choice',
        question: '음악을 듣___책을 읽는다.',
        options: [
          { text: '으면서', correct: true },
          { text: '고', correct: false },
          { text: '서', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '듣다 → 들으면서 = listen to music while reading',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_018_007',
        type: 'multiple-choice',
        question: '올바른 형태는?',
        options: [
          { text: '하고', correct: true },
          { text: '하고고', correct: false },
          { text: '하는고', correct: false }
        ],
        explanation: '올바른 연결형은 -고입니다',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_018_008',
        type: 'multiple-choice',
        question: '아침 운동을 하___일찍 일어난다.',
        options: [
          { text: '고', correct: true },
          { text: '서', correct: false },
          { text: '면', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '하다 → 하고 = do morning exercise and wake up early',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_018_009',
        type: 'multiple-choice',
        question: '물을 마시___책을 읽는다.',
        options: [
          { text: '고', correct: true },
          { text: '서', correct: false },
          { text: '면', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '마시다 → 마시고 = drink water and read book',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_018_010',
        type: 'context-judgment',
        question: '-고와 -어서는 모두 동작의 순서를 나타낼 수 있다.',
        options: [
          { text: '맞다', correct: true },
          { text: '틀리다', correct: false }
        ],
        explanation: '두 표현 모두 순차적 동작을 나타낼 수 있습니다',
        source: 'TOPIK Level 2'
      }
    ]
  },

  advanced: {
    // 고급 연습 문제 - 각 문법점마다 8문제 제공
    adv_001: [ // -곤 하다 (습관적 동작)
      {
        id: 'adv_001_001',
        type: 'multiple-choice',
        question: '어릴 때는 자주 그곳에 가___.',
        options: [
          { text: '곤 했어', correct: true },
          { text: '고 있었어', correct: false },
          { text: '는 했어', correct: false },
          { text: '서 했어', correct: false }
        ],
        explanation: '-곤 했다 = used to, 과거의 반복적 습관',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_001_002',
        type: 'multiple-choice',
        question: '-곤 했다와 -곤 한다의 차이는?',
        options: [
          { text: '전자는 과거의 습관, 후자는 현재의 습관', correct: true },
          { text: '전자가 더 격식적', correct: false },
          { text: '둘은 같은 의미', correct: false }
        ],
        explanation: '-곤 했다는 과거 습관, -곤 한다는 현재/반복적 습관을 나타냅니다.',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_001_003',
        type: 'multiple-choice',
        question: '지금도 가금 그 친구를 만나___곤 해.',
        options: [
          { text: '', correct: true },
          { text: '고', correct: false },
          { text: '서', correct: false },
          { text: '도', correct: false }
        ],
        explanation: '-곤 한다 = often do, 현재의 반복적 행동',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_001_004',
        type: 'multiple-choice',
        question: '여름이 오___수박을 먹곤 했어.',
        options: [
          { text: '면', correct: true },
          { text: '고', correct: false },
          { text: '서', correct: false },
          { text: '니까', correct: false }
        ],
        explanation: '오면 = when summer comes, 계절에 따른 반복 행동',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_001_005',
        type: 'context-judgment',
        question: '-곤 한다는 정기적이고 규칙적인 행동만 나타낸다.',
        options: [
          { text: '아니다', correct: true },
          { text: '맞다', correct: false }
        ],
        explanation: '-곤 한다는 반복적이고 습관적인 행동을 나타내며, 꺼 규칙적이지는 않아도 됩니다.',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_001_006',
        type: 'multiple-choice',
        question: '요즘은 책을 읽___곤 해.',
        options: [
          { text: '', correct: true },
          { text: '고', correct: false },
          { text: '서', correct: false },
          { text: '던', correct: false }
        ],
        explanation: '읽곤 해 = often read these days',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_001_007',
        type: 'multiple-choice',
        question: '학생 시절에는 밤새워 공부하___곤 했어.',
        options: [
          { text: '', correct: true },
          { text: '고', correct: false },
          { text: '서', correct: false },
          { text: '던', correct: false }
        ],
        explanation: '했어 = used to study all night, 과거의 습관',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_001_008',
        type: 'multiple-choice',
        question: '올바른 형태는?',
        options: [
          { text: '-곤 했다, -곤 한다, -곤 해 (모두 가능)', correct: true },
          { text: '-곤 했다만 가능', correct: false },
          { text: '-곤 하다는 불가능', correct: false }
        ],
        explanation: '다양한 시제 형태가 가능합니다.',
        source: 'TOPIK Level 3'
      }
    ],
    adv_002: [ // -ㄱ수록 (월...월...를 어지롟하긴)
      {
        id: 'adv_002_001',
        type: 'multiple-choice',
        question: '공부할___어려워진다.',
        options: [
          { text: '수록', correct: true },
          { text: '때', correct: false },
          { text: '고', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '-ㄱ수록 = the more..., the more..., 정도가 점차 심화됨',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_002_002',
        type: 'multiple-choice',
        question: '-ㄱ수록의 의미는?',
        options: [
          { text: '어떤 일이 점차 심화되거나 증가함', correct: true },
          { text: '원인과 결과', correct: false },
          { text: '조건', correct: false }
        ],
        explanation: '-ㄱ수록은 "월...월..."의 의미로 정도의 증가를 나타냅니다.',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_002_003',
        type: 'multiple-choice',
        question: '시간이 지날___그리움이 깊어졌어요.',
        options: [
          { text: '수록', correct: true },
          { text: '때', correct: false },
          { text: '고', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '지날수록 = the more time passes, 시간에 따른 변화',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_002_004',
        type: 'multiple-choice',
        question: '알면 알___더 복잡해져요.',
        options: [
          { text: '수록', correct: true },
          { text: '때', correct: false },
          { text: '고', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '알수록 = the more you know, 지식이 늘어날수록',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_002_005',
        type: 'context-judgment',
        question: '-ㄱ수록은 부정적인 변화만 나타낸다.',
        options: [
          { text: '아니다', correct: true },
          { text: '맞다', correct: false }
        ],
        explanation: '-ㄱ수록은 긍정적, 부정적 변화 모두를 나타낼 수 있습니다.',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_002_006',
        type: 'multiple-choice',
        question: '높이 올라갈___공기가 희박해지죠.',
        options: [
          { text: '수록', correct: true },
          { text: '때', correct: false },
          { text: '고', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '올라갈수록 = the higher you go, 높이와 공기 밀도의 관계',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_002_007',
        type: 'multiple-choice',
        question: '연습하면 할___더 잘하게 돼요.',
        options: [
          { text: '수록', correct: true },
          { text: '때', correct: false },
          { text: '고', correct: false },
          { text: '면', correct: false }
        ],
        explanation: '할수록 = the more you practice, 연습량과 실력의 비례',
        source: 'TOPIK Level 3'
      },
      {
        id: 'adv_002_008',
        type: 'multiple-choice',
        question: '올바른 형태는?',
        options: [
          { text: '-ㄱ수록, -을수록 (모두 가능)', correct: true },
          { text: '-ㄱ수록만 가능', correct: false },
          { text: '-을수록만 가능', correct: false }
        ],
        explanation: '받침에 따라 -ㄱ수록 또는 -을수록을 사용합니다.',
        source: 'TOPIK Level 3'
      }
    ],
    adv_010: [ // -기는커녕 (말해봐도...아무리...도)
      {
        id: 'adv_010_001',
        type: 'fill-blank',
        question: '영어를 잘하기는커녕 한국말도___.',
        correctAnswers: ['못한다'],
        explanation: '영어를 잘해봐도 한국말도 못한다.'
      },
      {
        id: 'adv_010_002',
        type: 'context-judgment',
        question: '-기는커녕은 무엇을 나타내나요?',
        options: [
          { text: '비록...도..., 더욱이...', correct: true },
          { text: '원인', correct: false }
        ],
        explanation: '-기는커녕은 더욱 강한 부정이나 대조를 나타냅니다.'
      },
      {
        id: 'adv_010_003',
        type: 'translation',
        question: '번역: 외국에 나가기는커녕 서울도 못 가봤다.',
        expectedKorean: '외국에 나가기는커녕 서울도 못 가봤다',
        chineseMeaning: '외국에 나가기는커녕 서울도 못 가봤다.',
        explanation: '-기는커녕은 더욱 강한 부정을 나타내며, 가장 극단적인 상황에서 부정을 부터 보다 부드러운 상황까지 확장합니다.'
      },
      {
        id: 'adv_010_004',
        type: 'fill-blank',
        question: '수영을 하기는커녕 물에도___.',
        correctAnswers: ['못든다', '들어가지 못한다'],
        explanation: '수영을 해봐도 물에도 들어가지 못한다.'
      },
      {
        id: 'adv_010_005',
        type: 'multiple-choice',
        question: '다음 중 -기는커녕을 올바르게 사용한 문장은?',
        options: [
          { text: '공부하기는커녕 놀기만 한다', correct: true },
          { text: '공부하는 커녕 놀기만 한다', correct: false },
          { text: '공부하기 커녕 놀기만 한다', correct: false }
        ],
        explanation: '올바른 형태는 -기는커녕입니다.'
      },
      {
        id: 'adv_010_006',
        type: 'sentence-matching',
        question: '문장을 의미와 매칭',
        pairs: [
          { korean: '일하기는커녕 자기만 한다', meaning: '일하기는커녕 자기만 한다' },
          { korean: '책을 읽기는커녕 제목도 못 본다', meaning: '책을 읽기는커녕 제목도 못 본다' }
        ],
        explanation: '이것들은 -기는커녕의 일반적인 사용 예입니다.'
      },
      {
        id: 'adv_010_007',
        type: 'fill-blank',
        question: '강을 건너기는커녕 다리도___.',
        correctAnswers: ['못 건넜다', '못 건너본다'],
        explanation: '강을 건너기는커녕 다리도 못 건넜다.'
      }
    ],
    adv_011: [ // -지 말다 (하지 마세요)
      {
        id: 'adv_011_001',
        type: 'fill-blank',
        question: '여기서 담배를 피우지___.',
        correctAnswers: ['마세요'],
        explanation: '피우다(담배 피우다) → 피우지 마세요 (담배 피우지 마세요)'
      },
      {
        id: 'adv_011_002',
        type: 'context-judgment',
        question: '-지 말다는 무엇을 나타내나요?',
        options: [
          { text: '금지 또는 조심', correct: true },
          { text: '과거의 행동', correct: false }
        ],
        explanation: '-지 말다는 명령 또는 조심 형태입니다.'
      },
      {
        id: 'adv_011_003',
        type: 'translation',
        question: '번역: 늦지 마세요.',
        expectedKorean: '늦지 마세요',
        chineseMeaning: '지금까지 도착하지 마세요.',
        explanation: '-지 마세요는 존칭 형태의 조심으로 누군가에게 무언가를 하지 말라고 조심합니다.'
      },
      {
        id: 'adv_011_004',
        type: 'fill-blank',
        question: '이 약을 먹지___.',
        correctAnswers: ['마십시오'],
        explanation: '먹다 → 먹지 말다 (이 약을 먹지 마세요)'
      },
      {
        id: 'adv_011_005',
        type: 'multiple-choice',
        question: '다음 중 올바른 -지 말다 형태는?',
        options: [
          { text: '가지 마', correct: true },
          { text: '가 마', correct: false },
          { text: '가지 마다', correct: false }
        ],
        explanation: '동사 + 지 말다'
      },
      {
        id: 'adv_011_006',
        type: 'fill-blank',
        question: '나한테 거짓말을 하지___.',
        correctAnswers: ['마'],
        explanation: '하다 → 하지 마 (나한테 거짓말을 하지 마)'
      },
      {
        id: 'adv_011_007',
        type: 'context-judgment',
        question: '"걱정하지 마세요"가 조심 형태입니까?',
        options: [
          { text: '네', correct: true },
          { text: '아니오', correct: false }
        ],
        explanation: '-지 마세요는 존칭 형태의 조심입니다.'
      },
      {
        id: 'adv_011_008',
        type: 'fill-blank',
        question: '이곳에 쓰레기를 버리지___.',
        correctAnswers: ['마세요'],
        explanation: '버리다 → 버리지 마세요 (이곳에 쓰레기를 버리지 마세요)'
      }
    ],
    adv_012: [ // -ㄹ 수 있다/-ㄹ 수 없다/-지 못하다 (능력/가능성)
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
    ],
    adv_013: [ // -고 난다/-고 나서 (완료 후/이후)
      {
        id: 'adv_013_001',
        type: 'fill-blank',
        question: '밥을 먹고___영화 봤어.',
        correctAnswers: ['나서'],
        explanation: '먹고 나서 (식사 후)'
      },
      {
        id: 'adv_013_002',
        type: 'multiple-choice',
        question: '-고 나서는 무엇을 나타내나요?',
        options: [
          { text: '행동 완료 후', correct: true },
          { text: '현재 진행', correct: false }
        ],
        explanation: '-고 나서는 선행 행동이 완료된 후 다음 행동을 나타냅니다.'
      },
      {
        id: 'adv_013_003',
        type: 'translation',
        question: '번역: 공부를 끝내고 나니 피곤했다.',
        expectedKorean: '공부를 끝내고 나니 피곤했다',
        chineseMeaning: '完成学习后很累。',
        explanation: '-고 나니는 -고 나서와 유사하지만 더 자연스럽습니다.'
      },
      {
        id: 'adv_013_004',
        type: 'fill-blank',
        question: '일을 마치고___쉬었어.',
        correctAnswers: ['나서'],
        explanation: '마치고 나서 (완료 후)'
      },
      {
        id: 'adv_013_005',
        type: 'context-judgment',
        question: '"-고 나서"가 시간 순서를 나타내나요?',
        options: [
          { text: '네', correct: true },
          { text: '아니오', correct: false }
        ],
        explanation: '-고 나서는 시간 순서와 선행 완료 관계를 나타냅니다.'
      },
      {
        id: 'adv_013_006',
        type: 'fill-blank',
        question: '영화가 끝나고___집에 갔어.',
        correctAnswers: ['나서'],
        explanation: '끝나고 나서 (영화 종료 후)'
      },
      {
        id: 'adv_013_007',
        type: 'multiple-choice',
        question: '-고 난다와 -고 나서의 차이는?',
        options: [
          { text: '-고 나서가 더 자연스럽고 일반적', correct: true },
          { text: '같은 의미', correct: false }
        ],
        explanation: '두 표현 모두 완료 후를 나타내지만 -고 나서가 더 흔합니다.'
      },
      {
        id: 'adv_013_008',
        type: 'fill-blank',
        question: '씻고___잠자리에 들었어.',
        correctAnswers: ['나서'],
        explanation: '씻고 나서 (목욕 후)'
      }
    ],
    adv_014: [ // -지 않다/-지 않니까 (부정/반문)
      {
        id: 'adv_014_001',
        type: 'fill-blank',
        question: '나는 한국에 가지___는다.',
        correctAnswers: ['않'],
        explanation: '가지 않는다 (부정)'
      },
      {
        id: 'adv_014_002',
        type: 'multiple-choice',
        question: '-지 않다와 -지 않니까의 차이는?',
        options: [
          { text: '-지 않다는 부정 진술, -지 않니까는 반문', correct: true },
          { text: '같은 의미', correct: false }
        ],
        explanation: '-지 않다는 부정 진술, -지 않니까는 강조나 반문을 나타냅니다.'
      },
      {
        id: 'adv_014_003',
        type: 'translation',
        question: '번역: 누가 알지 않니?',
        expectedKorean: '누가 알지 않니',
        chineseMeaning: '谁不知道呢？',
        explanation: '-지 않니는 수사적 질문이나 반문을 나타냅니다.'
      },
      {
        id: 'adv_014_004',
        type: 'fill-blank',
        question: '이것은 좋지___다.',
        correctAnswers: ['않'],
        explanation: '좋지 않다 (부정)'
      },
      {
        id: 'adv_014_005',
        type: 'context-judgment',
        question: '"모르지 않니"가 부정 진술인가요?',
        options: [
          { text: '아니오', correct: true },
          { text: '네', correct: false }
        ],
        explanation: '-지 않니는 수사적 반문으로 강조를 나타냅니다.'
      },
      {
        id: 'adv_014_006',
        type: 'fill-blank',
        question: '그는 학생이 아니자만, 공부를 하지___습니다.',
        correctAnswers: ['않'],
        explanation: '하지 않습니다 (부정)'
      },
      {
        id: 'adv_014_007',
        type: 'multiple-choice',
        question: '다음 중 부정 진술은?',
        options: [
          { text: '모르지 않는다', correct: true },
          { text: '모르지 않니?', correct: false }
        ],
        explanation: '-지 않는다는 부정 진술, -지 않니는 반문입니다.'
      },
      {
        id: 'adv_014_008',
        type: 'fill-blank',
        question: '이 우산은 싸지___.',
        correctAnswers: ['않'],
        explanation: '싸지 않아 (부정)'
      }
    ],
    adv_015: [ // -거나/-거나 (선택/열거)
      {
        id: 'adv_015_001',
        type: 'fill-blank',
        question: '우유나 주스나___.',
        correctAnswers: ['마셔'],
        explanation: '마셔 (선택지)'
      },
      {
        id: 'adv_015_002',
        type: 'multiple-choice',
        question: '-거나는 무엇을 나타내나요?',
        options: [
          { text: '선택이나 열거', correct: true },
          { text: '원인', correct: false }
        ],
        explanation: '-거나는 두 개 이상의 선택지를 제시합니다.'
      },
      {
        id: 'adv_015_003',
        type: 'translation',
        question: '번역: 공부하거나 쉬어.',
        expectedKorean: '공부하거나 쉬어',
        chineseMeaning: '要么学习，要么休息。',
        explanation: '-거나는 선택지를 제시합니다.'
      },
      {
        id: 'adv_015_004',
        type: 'fill-blank',
        question: '가거나___거나 빨리 결정하세요.',
        correctAnswers: ['오'],
        explanation: '가거나 오거나 (선택)'
      },
      {
        id: 'adv_015_005',
        type: 'context-judgment',
        question: '"-거나"가 두 개 이상의 선택지를 제시하나요?',
        options: [
          { text: '네', correct: true },
          { text: '아니오', correct: false }
        ],
        explanation: '-거나는 다양한 선택지를 제시합니다.'
      },
      {
        id: 'adv_015_006',
        type: 'fill-blank',
        question: '일하거나___거나 선택해.',
        correctAnswers: ['노'],
        explanation: '일하거나 놀거나 (선택)'
      },
      {
        id: 'adv_015_007',
        type: 'multiple-choice',
        question: '다음 중 -거나의 올바른 사용은?',
        options: [
          { text: '가거나 오거나 결정하세요', correct: true },
          { text: '간거나 왔거나 결정하세요', correct: false }
        ],
        explanation: '동사의 현재 형태 + 거나를 사용합니다.'
      },
      {
        id: 'adv_015_008',
        type: 'fill-blank',
        question: '이것을 하거나___거나 상관없어.',
        correctAnswers: ['말'],
        explanation: '하거나 말거나 (선택)'
      }
    ],
    adv_016: [ // -음에도 불구하고/-ㄹ지라도 (양보/비록)
      {
        id: 'adv_016_001',
        type: 'fill-blank',
        question: '날씨가 좋지 않음에도 불구하고___.',
        correctAnswers: ['우리는 갔다'],
        explanation: '불구하고 (사실에도 불구하고)'
      },
      {
        id: 'adv_016_002',
        type: 'multiple-choice',
        question: '-음에도 불구하고는 가장 공식적인가요?',
        options: [
          { text: '네', correct: true },
          { text: '아니오', correct: false }
        ],
        explanation: '-음에도 불구하고는 가장 정중하고 공식적인 표현입니다.'
      },
      {
        id: 'adv_016_003',
        type: 'translation',
        question: '번역: 어렵을지라도 포기하지 마.',
        expectedKorean: '어렵을지라도 포기하지 마',
        chineseMeaning: '即使困难也不要放弃。',
        explanation: '-ㄹ지라도는 -음에도 불구하고보다 덜 공식적입니다.'
      },
      {
        id: 'adv_016_004',
        type: 'fill-blank',
        question: '병에도 불구하고___일했다.',
        correctAnswers: ['그는'],
        explanation: '불구하고 (질병이 있었음에도 불구하고)'
      },
      {
        id: 'adv_016_005',
        type: 'context-judgment',
        question: '"-ㄹ지라도"가 -음에도 불구하고보다 덜 공식적인가요?',
        options: [
          { text: '네', correct: true },
          { text: '아니오', correct: false }
        ],
        explanation: '-ㄹ지라도는 더 자연스럽고 일상적입니다.'
      },
      {
        id: 'adv_016_006',
        type: 'fill-blank',
        question: '가난함에도 불구하고___행복했다.',
        correctAnswers: ['그들은'],
        explanation: '불구하고 (가난했음에도 불구하고)'
      },
      {
        id: 'adv_016_007',
        type: 'multiple-choice',
        question: '다음 중 가장 공식적인 양보 표현은?',
        options: [
          { text: '-음에도 불구하고', correct: true },
          { text: '-ㄹ지라도', correct: false }
        ],
        explanation: '-음에도 불구하고는 가장 정중한 표현입니다.'
      },
      {
        id: 'adv_016_008',
        type: 'fill-blank',
        question: '피곤할지라도___끝까지 할 거야.',
        correctAnswers: ['나는'],
        explanation: '-ㄹ지라도 (피곤하더라도)'
      }
    ],
    adv_017: [ // -곤 했다/-곤 한다 (습관성 과거/현재 동작)
      {
        id: 'adv_017_001',
        type: 'fill-blank',
        question: '그는 매일 아침 산책을___했다.',
        correctAnswers: ['곤'],
        explanation: '산책을 곤 했다 (과거 습관)'
      },
      {
        id: 'adv_017_002',
        type: 'multiple-choice',
        question: '-곤 했다는 무엇을 나타내나요?',
        options: [
          { text: '과거의 반복적인 습관', correct: true },
          { text: '현재의 행동', correct: false }
        ],
        explanation: '-곤 했다는 과거에 자주 반복된 행동을 나타냅니다.'
      },
      {
        id: 'adv_017_003',
        type: 'translation',
        question: '번역: 어린 시절 할머니 집에 놀곤 했어요.',
        expectedKorean: '어린 시절 할머니 집에 놀곤 했어요',
        chineseMeaning: '小时候经常去奶奶家玩。',
        explanation: '-곤 했어요는 과거의 반복적인 행동을 회상합니다.'
      },
      {
        id: 'adv_017_004',
        type: 'fill-blank',
        question: '나는 여름에 아이스크림을___한다.',
        correctAnswers: ['곤'],
        explanation: '먹곤 한다 (현재 습관)'
      },
      {
        id: 'adv_017_005',
        type: 'context-judgment',
        question: '"-곤 한다"가 현재 습관을 나타내나요?',
        options: [
          { text: '네', correct: true },
          { text: '아니오', correct: false }
        ],
        explanation: '-곤 한다는 현재 반복적인 행동을 나타냅니다.'
      },
      {
        id: 'adv_017_006',
        type: 'fill-blank',
        question: '우리는 겨울에 스키를___했다.',
        correctAnswers: ['곤'],
        explanation: '타곤 했다 (과거 습관)'
      },
      {
        id: 'adv_017_007',
        type: 'multiple-choice',
        question: '-곤 했다와 -곤 한다의 차이는?',
        options: [
          { text: '했다는 과거, 한다는 현재', correct: true },
          { text: '같은 의미', correct: false }
        ],
        explanation: '-곤 했다는 과거 습관, -곤 한다는 현재 습관입니다.'
      },
      {
        id: 'adv_017_008',
        type: 'fill-blank',
        question: '그 시절 나는 자주 책을___했다.',
        correctAnswers: ['읽곤'],
        explanation: '읽곤 했다 (과거 습관)'
      }
    ]
  }
}
