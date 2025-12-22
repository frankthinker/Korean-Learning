/**
 * 韩语语法练习题库
 * 包含初级、中级、高级三个阶段的200+练习题
 * 지원多种练习类型：多选、填空、翻译、语法对比、例句配对、语境判断等
 */

export const practiceDatabase = {
  beginner: {
    // 初级练习题 - 每个语法点配备10-15道题
    beg_001: [ // 이/가 (主语标记)
      {
        id: 'beg_001_001',
        type: 'multiple-choice',
        question: '选择正确的主语标记：나___한국인이다.',
        options: [
          { text: '이', correct: true },
          { text: '가', correct: true }, // 이/가都可以
          { text: '을', correct: false },
          { text: '를', correct: false }
        ],
        explanation: '이/가都是主语标记。在"나는"中，나后面用이/가标记主语。',
        tips: '主语标记이/가在现代韩语中常互换使用'
      },
      {
        id: 'beg_001_002',
        type: 'fill-blank',
        question: '그___학생입니다. (那是学生)',
        correctAnswers: ['이', '가'],
        explanation: '그(那)后面用이/가标记主语。',
        tips: '代词后通常用이/가'
      },
      {
        id: 'beg_001_003',
        type: 'translation',
        question: '翻译：나는 선생님이다.',
        expectedKorean: '나는 선생님이다',
        chineseMeaning: '我是老师。',
        explanation: '나(我)는主语，는은主题标记，이다는系动词。'
      },
      {
        id: 'beg_001_004',
        type: 'sentence-matching',
        question: '将韩文与中文配对',
        pairs: [
          { korean: '나가 학생이다', chinese: '我是学生' },
          { korean: '그가 선생님이다', chinese: '他是老师' },
          { korean: '그녀가 의사이다', chinese: '她是医生' }
        ],
        explanation: '이/가用于标记主语。'
      },
      {
        id: 'beg_001_005',
        type: 'context-judgment',
        question: '判断这句话是否正确：그___경찰관입니다.',
        options: [
          { text: '이', correct: true },
          { text: '가', correct: true },
          { text: '을', correct: false }
        ],
        explanation: '그后面应该用이/가作为主语标记。'
      },
      {
        id: 'beg_001_006',
        type: 'fill-blank',
        question: '나___한국사람입니다.',
        correctAnswers: ['이', '가'],
        explanation: '나(我)后面用이/가标记主语。'
      },
      {
        id: 'beg_001_007',
        type: 'multiple-choice',
        question: '选择语法正确的句子：',
        options: [
          { text: '나이 학생이다', correct: true },
          { text: '나을 학생이다', correct: false },
          { text: '나를 학생이다', correct: false },
          { text: '나에 학생이다', correct: false }
        ],
        explanation: '이/가는 주사标记，用于标记句子的主语。'
      },
      {
        id: 'beg_001_008',
        type: 'translation',
        question: '翻译：그녀가 의사입니다.',
        expectedKorean: '그녀가 의사입니다',
        chineseMeaning: '她是医生。',
        explanation: '그녀(她)는 주사，가标记주사。'
      },
      {
        id: 'beg_001_009',
        type: 'fill-blank',
        question: '저___학생입니다. (我是学生)',
        correctAnswers: ['이', '가'],
        explanation: '저(나-존칭)后面용이/가 주사한다.'
      },
      {
        id: 'beg_001_010',
        type: 'multiple-choice',
        question: '다음 중 어떤 것이 올바른 주사 표시법입니까?',
        options: [
          { text: '우리가 친구이다', correct: true },
          { text: '우리을 친구이다', correct: false },
          { text: '우리를 친구이다', correct: false },
          { text: '우리에 친구이다', correct: false }
        ],
        explanation: '우리(우리) 뒤에는 가가 주사로 사용된다.'
      }
    ],
    beg_002: [ // 는/은 (주제 표시)
      {
        id: 'beg_002_001',
        type: 'multiple-choice',
        question: '주제 표시를 선택하세요：나___학생입니다.',
        options: [
          { text: '는', correct: true },
          { text: '은', correct: true },
          { text: '을', correct: false },
          { text: '를', correct: false }
        ],
        explanation: '나는/나은 모두 가능하지만 뒤에 받침이 없으므로 는을 사용한다.'
      },
      {
        id: 'beg_002_002',
        type: 'fill-blank',
        question: '저___한국인입니다.',
        correctAnswers: ['는'],
        explanation: '저(나) 뒤에 받침이 없으므로 는을 사용한다.'
      },
      {
        id: 'beg_002_003',
        type: 'grammar-comparison',
        question: '비교: 주사 표시 vs 주제 표시의 차이',
        optionA: '이/가 - 주사 표시',
        optionB: '는/은 - 주제 표시, 대조를 강조',
        explanation: '이/가는 주사 표시; 는/은는 주제 표시로 일상 표현에서 자주 사용된다.'
      },
      {
        id: 'beg_002_004',
        type: 'fill-blank',
        question: '책___여기 있습니다.',
        correctAnswers: ['은'],
        explanation: '책(책) 끝에 받침이 있으므로 은을 사용한다.'
      },
      {
        id: 'beg_002_005',
        type: 'multiple-choice',
        question: '문법적으로 올바른 문장은?',
        options: [
          { text: '저는 학생입니다', correct: true },
          { text: '저은 학생입니다', correct: false },
          { text: '저를 학생입니다', correct: false },
          { text: '저가 학생입니다', correct: true }
        ],
        explanation: '저는과 저가 모두 가능하며 주제 표시인지 주사 표시인지에 따라 달라진다.'
      },
      {
        id: 'beg_002_006',
        type: 'fill-blank',
        question: '그___친구입니다.',
        correctAnswers: ['는'],
        explanation: '그(그/그녀) 뒤에 받침이 없으므로 는을 사용한다.'
      },
      {
        id: 'beg_002_007',
        type: 'context-judgment',
        question: '"그녀는 의사입니다"에서 는의 역할은?',
        options: [
          { text: '주제 표시, 대조 의미 강조', correct: true },
          { text: '주사 표시', correct: false },
          { text: '목적어 표시', correct: false }
        ],
        explanation: '는은 주제 표시로 여기서 "그녀에 대해, 그녀는 의사입니다"를 강조한다.'
      },
      {
        id: 'beg_002_008',
        type: 'fill-blank',
        question: '우리 학교___큽니다.',
        correctAnswers: ['은'],
        explanation: '학교(학교) 끝에 받침이 있으므로 은을 사용한다.'
      },
      {
        id: 'beg_002_009',
        type: 'translation',
        question: '번역: 저는 한국인입니다.',
        expectedKorean: '저는 한국인입니다',
        chineseMeaning: '나는 한국인입니다.',
        explanation: '저는 표현 "나는 한국인입니다"의 의미로는 한국인입니다, 는 주제 표시를 사용한다.'
      },
      {
        id: 'beg_002_010',
        type: 'multiple-choice',
        question: '주사 표시와 주제 표시는 어떻게 선택합니까?',
        options: [
          { text: '앞 글자가 받침이 있으면 은, 없으면 는', correct: true },
          { text: '항상 은을 사용', correct: false },
          { text: '항상 는을 사용', correct: false },
          { text: '의미에 따라 임의로 선택', correct: false }
        ],
        explanation: '음운 변화: 끝에 받침이 있으면 은, 없으면 는.'
      }
    ],
    beg_003: [ // 을/를 (목적어 표시)
      {
        id: 'beg_003_001',
        type: 'multiple-choice',
        question: '목적어 표시를 선택하세요: 나는 물___마십니다.',
        options: [
          { text: '을', correct: true },
          { text: '를', correct: false },
          { text: '은', correct: false },
          { text: '가', correct: false }
        ],
        explanation: '물(물) 끝에 받침이 있으므로 을을 사용한다.'
      },
      {
        id: 'beg_003_002',
        type: 'fill-blank',
        question: '나는 밥___먹습니다.',
        correctAnswers: ['을'],
        explanation: '밥(밥) 끝에 받침이 있으므로 을을 사용한다.'
      },
      {
        id: 'beg_003_003',
        type: 'fill-blank',
        question: '나는 책___읽습니다.',
        correctAnswers: ['을'],
        explanation: '책(책) 끝에 받침이 있으므로 을을 사용한다.'
      },
      {
        id: 'beg_003_004',
        type: 'multiple-choice',
        question: '문법적으로 올바른 문장은?',
        options: [
          { text: '나는 우유를 마십니다', correct: true },
          { text: '나는 우유을 마십니다', correct: false },
          { text: '나는 우유는 마십니다', correct: false },
          { text: '나는 우유가 마십니다', correct: false }
        ],
        explanation: '우유(우유) 끝에 받침이 없으므로 를을 사용한다.'
      },
      {
        id: 'beg_003_005',
        type: 'fill-blank',
        question: '나는 커피___마십니다.',
        correctAnswers: ['를'],
        explanation: '커피(커피) 끝에 받침이 없으므로 를을 사용한다.'
      },
      {
        id: 'beg_003_006',
        type: 'context-judgment',
        question: '판단: 나는 사과를 먹습니다. 이 문장은 올바른가?',
        options: [
          { text: '올바름', correct: true },
          { text: '오류, 을을 사용해야 함', correct: false },
          { text: '오류, 는을 사용해야 함', correct: false }
        ],
        explanation: '사과(사과) 끝에 받침이 없으므로 를을 사용한다.'
      },
      {
        id: 'beg_003_007',
        type: 'translation',
        question: '번역: 나는 텔레비전을 봅니다.',
        expectedKorean: '나는 텔레비전을 봅니다',
        chineseMeaning: '나는 텔레비전을 봅니다.',
        explanation: '텔레비전(텔레비전) 끝에 받침이 없으므로 를을 사용한다.'
      },
      {
        id: 'beg_003_008',
        type: 'fill-blank',
        question: '나는 노래___부릅니다.',
        correctAnswers: ['를'],
        explanation: '노래(노래) 끝에 받침이 없으므로 를을 사용한다.'
      },
      {
        id: 'beg_003_009',
        type: 'multiple-choice',
        question: '을/를의 선택 규칙은 무엇입니까?',
        options: [
          { text: '앞 글자가 받침이 있으면 을, 없으면 를', correct: true },
          { text: '항상 을을 사용', correct: false },
          { text: '항상 를을 사용', correct: false }
        ],
        explanation: '이것은 한국어의 기본 음운 규칙이다.'
      },
      {
        id: 'beg_003_010',
        type: 'fill-blank',
        question: '나는 학교___갑니다.',
        correctAnswers: ['를'],
        explanation: '학교(학교) 끝에 받침이 있으나 여기서는 는을 사용한다. 를을 사용해야 하는 목적어는 를을 사용한다.'
      }
    ],
    beg_004: [ // -입니다/-습니다 (존칭)
      {
        id: 'beg_004_001',
        type: 'multiple-choice',
        question: '존칭 형태를 선택하세요: 나는 학생___.',
        options: [
          { text: '입니다', correct: true },
          { text: '습니다', correct: false },
          { text: '요', correct: false }
        ],
        explanation: '학생 끝에 받침이 없으므로 입니다를 사용한다.'
      },
      {
        id: 'beg_004_002',
        type: 'fill-blank',
        question: '저는 선생님___.',
        correctAnswers: ['입니다'],
        explanation: '선생님 끝에 받침이 있으므로 입니다를 사용한다.'
      },
      {
        id: 'beg_004_003',
        type: 'fill-blank',
        question: '나는 밥을 먹___.',
        correctAnswers: ['습니다'],
        explanation: '먹 끝에 받침이 있으므로 습니다를 사용한다.'
      },
      {
        id: 'beg_004_004',
        type: 'multiple-choice',
        question: '다음 중 올바른 형태는?',
        options: [
          { text: '저는 학교에 갑니다.', correct: true },
          { text: '저는 학교에 갑니다.', correct: false },
          { text: '저는 학교에 갑습니다.', correct: true }
        ],
        explanation: '갑(가다) 끝에 받침이 있으므로 습니다를 사용한다; 갑니다 형태도 가능하다.'
      },
      {
        id: 'beg_004_005',
        type: 'context-judgment',
        question: '공식적인 상황에서 어떤 존칭을 사용해야 하나요?',
        options: [
          { text: '-입니다/-습니다', correct: true },
          { text: '-요', correct: false },
          { text: '-어요/-아요', correct: false }
        ],
        explanation: '-입니다/-습니다는 가장 공식적인 존칭 형태이다.'
      },
      {
        id: 'beg_004_006',
        type: 'fill-blank',
        question: '나는 커피를 마___.',
        correctAnswers: ['십니다'],
        explanation: '마 끝에 받침이 없으나 마실 → 마십니다.'
      },
      {
        id: 'beg_004_007',
        type: 'translation',
        question: '번역: 저는 한국인입니다.',
        expectedKorean: '저는 한국인입니다',
        chineseMeaning: '나는 한국인입니다.(공식)',
        explanation: '입니다는 가장 공식적인 존칭 형태로 공식적인 상황과 서면에서 자주 사용된다.'
      },
      {
        id: 'beg_004_008',
        type: 'multiple-choice',
        question: '선택하다의 -입니다 형태는?',
        options: [
          { text: '선택합니다', correct: true },
          { text: '선택습니다', correct: false },
          { text: '선택입니다', correct: false }
        ],
        explanation: '하동사 → 합니다 (특수 형태)'
      },
      {
        id: 'beg_004_009',
        type: 'fill-blank',
        question: '나는 한국말을 배___.',
        correctAnswers: ['웁니다'],
        explanation: '배움 → 배웁니다'
      },
      {
        id: 'beg_004_010',
        type: 'context-judgment',
        question: '판단: 이것은 컴퓨터입니다. 공식적인 존칭을 사용했나요?',
        options: [
          { text: '네', correct: true },
          { text: '아니오', correct: false }
        ],
        explanation: '입니다는 공식적인 존칭 형태를 나타낸다.'
      }
    ],
    beg_005: [ // -어요/-아요 (친근한 존칭)
      {
        id: 'beg_005_001',
        type: 'multiple-choice',
        question: '선택하다의 -어요형은?',
        options: [
          { text: '선택해요', correct: true },
          { text: '선택어요', correct: false },
          { text: '선택아요', correct: false }
        ],
        explanation: '하 → 해: 하가 해로 바뀐다.'
      },
      {
        id: 'beg_005_002',
        type: 'fill-blank',
        question: '나는 학교에 가___.',
        correctAnswers: ['요'],
        explanation: '가 → 가요 (a음사용 아요) → 가요'
      },
      {
        id: 'beg_005_003',
        type: 'fill-blank',
        question: '나는 밥을 먹___.',
        correctAnswers: ['어요'],
        explanation: '먹 → 먹어요 (o/u음사용 요) → 먹어요'
      },
      {
        id: 'beg_005_004',
        type: 'context-judgment',
        question: '-어요/-아요와 -입니다/-습니다의 차이는?',
        options: [
          { text: '-어요/-아요가 더 비공식적이고 가까움', correct: true },
          { text: '차이가 없음', correct: false }
        ],
        explanation: '-어요/-아요는 일상 비공식 존칭, -입니다/-습니다는 공식 존칭이다.'
      },
      {
        id: 'beg_005_005',
        type: 'fill-blank',
        question: '나는 책을 읽___.',
        correctAnswers: ['어요'],
        explanation: '읽 → 읽어요'
      },
      {
        id: 'beg_005_006',
        type: 'multiple-choice',
        question: '마시다의 -어요형은:',
        options: [
          { text: '마셔요', correct: true },
          { text: '마시어요', correct: false },
          { text: '마시아요', correct: false }
        ],
        explanation: '마시 → 마셔요 (ㅣ변환)'
      },
      {
        id: 'beg_005_007',
        type: 'translation',
        question: '번역: 나는 학교에 가요.',
        expectedKorean: '나는 학교에 가요',
        chineseMeaning: '나는 학교에 가요.(일상 언어)',
        explanation: '-어요/-아요는 일상 비공식 존칭으로 친구나 가까운 사람과 사용된다.'
      },
      {
        id: 'beg_005_008',
        type: 'fill-blank',
        question: '나는 운동을 해___.',
        correctAnswers: ['요'],
        explanation: '하 → 해요'
      },
      {
        id: 'beg_005_009',
        type: 'multiple-choice',
        question: '듣다의 -어요형은?',
        options: [
          { text: '들어요', correct: true },
          { text: '듣어요', correct: false },
          { text: '듣아요', correct: false }
        ],
        explanation: '듣 → 들어요 (받침 처리)'
      },
      {
        id: 'beg_005_010',
        type: 'context-judgment',
        question: '친구 사이의 대화에서 어떤 형태를 사용해야 하나요?',
        options: [
          { text: '-어요/-아요', correct: true },
          { text: '-입니다/-습니다', correct: false },
          { text: '둘 다 가능', correct: true }
        ],
        explanation: '-어요/-아요는 가까운 관계에서, -입니다/-습니다는 공식적인 상황에서 사용된다.'
      }
    ]
  },

  intermediate: {
    // 중급 연습 문제 - 각 문법점마다 8-10문제 제공
    int_010: [ // -아/-어도 (대조/허용)
      {
        id: 'int_010_001',
        type: 'fill-blank',
        question: '비가 와___그냥 간다.',
        correctAnswers: ['도'],
        explanation: '와(와다) + 도 = 와도 (비가 와도...)'
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
        type: 'fill-blank',
        question: '열심히 공부해___시험에 떨어졌다.',
        correctAnswers: ['도'],
        explanation: '열심히(열심히) + 공부하다 → 공부해도 (열심히 공부해도...)'
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
        type: 'fill-blank',
        question: '몇 번을 말해___듣지 않는다.',
        correctAnswers: ['도'],
        explanation: '말하다 → 말해도 (몇 번 말해도...)'
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
        type: 'fill-blank',
        question: '실패해___다시 시도해야 한다.',
        correctAnswers: ['도'],
        explanation: '실패하다 → 실패해도 (실패해도...)'
      }
    ],
    int_011: [ // -는 중이다 (진행 중)
      {
        id: 'int_011_001',
        type: 'fill-blank',
        question: '나는 지금 공부___중이다.',
        correctAnswers: ['하'],
        explanation: '공부 + 하다 → 공부하는 중이다'
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
        type: 'fill-blank',
        question: '영화가 지금 상영___중이다.',
        correctAnswers: ['되'],
        explanation: '상영되다 → 상영되는 중이다'
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
        type: 'fill-blank',
        question: '회의가 진행___중이니 조용히 하세요.',
        correctAnswers: ['되'],
        explanation: '진행되다 → 진행되는 중이다'
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
        type: 'fill-blank',
        question: '아이가 밥을 먹___중이다.',
        correctAnswers: ['는'],
        explanation: '먹다 → 먹는 중이다'
      }
    ],
    int_012: [ // -겠-/-을/ㄹ 것이다 (未来时/意志/推测)
      {
        id: 'int_012_001',
        type: 'fill-blank',
        question: '내일 날씨가 좋___요.',
        correctAnswers: ['겠어'],
        explanation: '좋다 → 좋겠어요 (추측)'
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
        type: 'fill-blank',
        question: '나는 너를 도와___것이다.',
        correctAnswers: ['줄'],
        explanation: '도와주다 → 도와줄 것이다 (약속/의지)'
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
        type: 'fill-blank',
        question: '그 일은 어렵___거야.',
        correctAnswers: ['울'],
        explanation: '어렵다 → 어려울 거야 (추측)'
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
        type: 'fill-blank',
        question: '이 문제는 어렵___요.',
        correctAnswers: ['겠'],
        explanation: '어렵다 → 어렵겠어요 (추측)'
      }
    ],
    int_013: [ // -아/어서/-으니까/-니까/-기 때문에 (因果关系)
      {
        id: 'int_013_001',
        type: 'fill-blank',
        question: '피곤해___못 갔어.',
        correctAnswers: ['서'],
        explanation: '피곤하다 → 피곤해서 (원인/이유)'
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
        type: 'fill-blank',
        question: '시간이 없___까 못 간다.',
        correctAnswers: ['으니'],
        explanation: '없다 → 없으니까 (원인)'
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
        type: 'fill-blank',
        question: '좋아___좋은 일을 한다.',
        correctAnswers: ['서'],
        explanation: '좋다 → 좋아서 (원인/이유)'
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
        type: 'fill-blank',
        question: '바쁘___까 이따 만나자.',
        correctAnswers: ['니'],
        explanation: '바쁘다 → 바쁘니까 (자연스러운 이유)'
      }
    ],
    int_014: [ // -아/어 주다/-아/어 달라 (请求)
      {
        id: 'int_014_001',
        type: 'fill-blank',
        question: '이걸 도와줄___요?',
        correctAnswers: ['래'],
        explanation: '도와주다 → 도와줄래요 (정중한 요청)'
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
        type: 'fill-blank',
        question: '물 좀 달___.',
        correctAnswers: ['라'],
        explanation: '주다 → 달라 (직접적인 요청)'
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
        type: 'fill-blank',
        question: '혼자___못해서 좀 봐___.',
        correctAnswers: ['못해', '줄래'],
        explanation: '못하다 → 못해서 / 봐주다 → 봐줄래'
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
        type: 'fill-blank',
        question: '내가___해도 돼요?',
        correctAnswers: ['할'],
        explanation: '하다 → 할래요 (정중한 요청)'
      }
    ]
  },

  advanced: {
    // 고급 연습 문제 - 각 문법점마다 8문제 제공
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

/**
 * 종합 테스트 문제 - 여러 문법점에 걸친 종합 문제
 */
export const comprehensiveTestDatabase = {
  beginner: [
    {
      id: 'comp_beg_001',
      type: 'passage-comprehension',
      title: '초급 종합 테스트1',
      passage: '안녕하세요. 나는 한국인입니다. 나는 서울에서 살고 있습니다. 매일 아침에 학교에 갑니다. 학교에서 한국말을 배웁니다.',
      questions: [
        {
          question: '나는 어디에 삽니까?',
          options: ['서울', '부산', '대구'],
          correct: 0,
          grammarFocus: 'beg_002'
        },
        {
          question: '나는 하루에 몇 번 학교에 갑니까?',
          options: ['매일', '일주일에 한 번', '한 달에 한 번'],
          correct: 0,
          grammarFocus: 'beg_001'
        }
      ]
    },
    {
      id: 'comp_beg_002',
      type: 'dialogue',
      title: '초급 종합 테스트2 - 일상 대화',
      dialogue: [
        { speaker: 'A', text: '안녕하세요. 저는 학생입니다.' },
        { speaker: 'B', text: '만나서 반갑습니다.' },
        { speaker: 'A', text: '저는 매일 학교에 갑니다.' }
      ],
      questions: [
        {
          question: 'A는 무엇인가요?',
          options: ['학생', '선생님', '의사'],
          correct: 0,
          grammarFocus: 'beg_004'
        }
      ]
    }
  ],

  intermediate: [
    {
      id: 'comp_int_001',
      type: 'passage-comprehension',
      title: '중급 종합 테스트1',
      passage: '제가 학교에 가는 중이었을 때 친구를 만났어요. 아무리 바빠도 친구와 이야기하기는 좋았어요. 그 친구는 미국에 가려고 했는데 아직도 한국에 있어요.',
      questions: [
        {
          question: '나는 언제 친구를 만났어요?',
          options: ['학교 가는 중에', '학교에 도착한 후', '집에서'],
          correct: 0,
          grammarFocus: 'int_011'
        },
        {
          question: '문장에서 -아도는 어떤 의미입니까?',
          options: ['대조', '원인', '결과'],
          correct: 0,
          grammarFocus: 'int_010'
        }
      ]
    }
  ],

  advanced: [
    {
      id: 'comp_adv_001',
      type: 'passage-comprehension',
      title: '고급 종합 테스트1',
      passage: '외국에 나가기는커녕 서울도 못 가본 사람들이 있다. 그들은 경제적으로 어렵기도 했지만, 또한 용기를 내지 못했다. 하지만 그들도 꿈을 꾸기는 한다.',
      questions: [
        {
          question: '문장의 주인공은 누구의 상황을 설명합니까?',
          options: ['못 여행간 사람들', '부자들', '공무원들'],
          correct: 0,
          grammarFocus: 'adv_010'
        }
      ]
    }
  ]
}
