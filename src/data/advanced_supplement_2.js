/**
 * 高级语法补充题库 Part 2
 * adv_014-adv_017: -지 않다/-지 않니까, -거나/-거나, -음에도 불구하고/-ㄹ지라도, -곤 했다/-곤 한다
 */

export const advancedSupplementPart2 = {
  adv_014: [ // -지 않다/-지 않니까 (Negation/Question)
    {
      id: 'adv_014_001',
      type: 'fill-blank',
      question: '나는 커피를 마시지___.',
      correctAnswers: ['않아요'],
      explanation: '마시다 → 마시지 않아요 = I don\'t drink coffee, 부정 표현',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_014_002',
      type: 'fill-blank',
      question: '너는 이 영화를 보지___?',
      correctAnswers: ['않았'],
      explanation: '보다 → 보지 않았어? = didn\'t you watch?, 반문의 의미',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_014_003',
      type: 'multiple-choice',
      question: '-지 않다와 -지 않니까의 차이는?',
      options: [
        { text: '-지 않니까는 반문이나 의아함을 나타냄', correct: true },
        { text: '-지 않다가 더 문어적', correct: false },
        { text: '둘은 완전히 같은 의미', correct: false }
      ],
      explanation: '-지 않니까는 "...하지 않는데?"라는 반문의 뉘앙스가 있습니다.',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_014_004',
      type: 'fill-blank',
      question: '이게 잘못되지___?',
      correctAnswers: ['않았'],
      explanation: '되다 → 되지 않았어? = wasn\'t this wrong?',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_014_005',
      type: 'context-judgment',
      question: '-지 않다는 과거, 현재, 미래 모두 사용할 수 있다.',
      options: [
        { text: '맞다', correct: true },
        { text: '틀리다', correct: false }
      ],
      explanation: '-지 않다, -지 않았다, -지 않을 것이다 등 다양하게 사용됩니다.',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_014_006',
      type: 'fill-blank',
      question: '내가 말하지___았니까 무슨 일이 있었나?',
      correctAnswers: [''],
      explanation: '말하지 않았으니까 = since I didn\'t tell, 이유를 물을 때',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_014_007',
      type: 'fill-blank',
      question: '그가 오지___았는데 왜 오지 않았어?',
      correctAnswers: [''],
      explanation: '오지 않았는데 = didn\'t come, but why?',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_014_008',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '하지 않다', correct: true },
        { text: '하지 아니하다', correct: true },
        { text: '하지 않는다', correct: false }
      ],
      explanation: '두 표현 모두 가능하지만 -지 않다가 더 일반적입니다.',
      source: 'TOPIK Level 3'
    }
  ],

  adv_015: [ // -거나/-거나 (Choice/Listing)
    {
      id: 'adv_015_001',
      type: 'fill-blank',
      question: '차를 마시거나 커피를 마시거나___.',
      correctAnswers: ['괜찮아요'],
      explanation: '-거나...거나는 "어느 것이든 괜찮다"는 선택을 나타냅니다.',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_015_002',
      type: 'fill-blank',
      question: '이 길로 가거나 저 길로 가거나 상관___.',
      correctAnswers: ['없어'],
      explanation: '없다 → 없어 = doesn\'t matter either way',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_015_003',
      type: 'multiple-choice',
      question: '-거나의 기본 의미는?',
      options: [
        { text: '두 가지 이상의 선택지 제시', correct: true },
        { text: '반복', correct: false },
        { text: '조건', correct: false }
      ],
      explanation: '-거나는 "또는"의 의미로 선택지를 나타냅니다.',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_015_004',
      type: 'fill-blank',
      question: '한국 음식을 먹거나 중국 음식을 먹거나 좋아___.',
      correctAnswers: ['해요'],
      explanation: '좋아해요 = like either way, 어느 것이든 좋음',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_015_005',
      type: 'context-judgment',
      question: '-거나는 정확히 하나의 것을 선택하라는 의미다.',
      options: [
        { text: '아니다', correct: true },
        { text: '맞다', correct: false }
      ],
      explanation: '-거나는 "어느 것이든 괜찮다"는 의미로 선택을 강요하지 않습니다.',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_015_006',
      type: 'fill-blank',
      question: '시간이 있거나 없거나 꼭 와___.',
      correctAnswers: [''],
      explanation: '와야 한다 = must come no matter what',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_015_007',
      type: 'fill-blank',
      question: '좋거나 싫거나 해야___.',
      correctAnswers: [''],
      explanation: '해야 한다 = have to do whether you like it or not',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_015_008',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '하거나, 가거나, 먹거나 (모두 가능)', correct: true },
        { text: '하거나만 가능', correct: false },
        { text: '동사와 형용사는 불가능', correct: false }
      ],
      explanation: '다양한 동사와 형용사에 -거나를 붙일 수 있습니다.',
      source: 'TOPIK Level 3'
    }
  ],

  adv_016: [ // -음에도 불구하고/-ㄹ지라도 (Concession/Despite)
    {
      id: 'adv_016_001',
      type: 'fill-blank',
      question: '많은 노력에도 불구하___성공하지 못했어.',
      correctAnswers: ['고'],
      explanation: '-음에도 불구하고 = in spite of, 어려움에도 불구하고',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_016_002',
      type: 'fill-blank',
      question: '이 정도면 대성공이라 할___도 과언이 아니야.',
      correctAnswers: ['지라도'],
      explanation: '-ㄹ지라도 = even if, 설령...더라도의 의미',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_016_003',
      type: 'multiple-choice',
      question: '-음에도 불구하고와 -ㄹ지라도의 차이는?',
      options: [
        { text: '전자는 이미 일어난 사실, 후자는 가정적', correct: true },
        { text: '전자가 더 격식적', correct: false },
        { text: '둘은 같은 의미', correct: false }
      ],
      explanation: '-음에도 불구하고는 현실, -ㄹ지라도는 가정을 나타냅니다.',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_016_004',
      type: 'fill-blank',
      question: '비싼 가격에도 불구하___많은 사람이 샀어.',
      correctAnswers: ['고'],
      explanation: '비싼 가격에도 불구하고 = despite expensive price',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_016_005',
      type: 'context-judgment',
      question: '-ㄹ지라도는 반드시 부정적 상황에만 사용된다.',
      options: [
        { text: '아니다', correct: true },
        { text: '맞다', correct: false }
      ],
      explanation: '-ㄹ지라도는 "설령...이라도"라는 가정으로 긍정/부정 모두 가능합니다.',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_016_006',
      type: 'fill-blank',
      question: '나쁜 상황에도 불구하___희망을 잃지 않았어.',
      correctAnswers: ['고'],
      explanation: '나쁜 상황에도 불구하고 = despite bad circumstances',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_016_007',
      type: 'fill-blank',
      question: '백 배를 더 노력한___같은 결과가 나올 거야.',
      correctAnswers: [''],
      explanation: '백 배를 더 노력할지라도 = even if work 100 times harder',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_016_008',
      type: 'multiple-choice',
      question: '올바른 형태는?',
      options: [
        { text: '-음에도 불구하고, -ㄹ지라도 (모두 가능)', correct: true },
        { text: '-음에도 불구하고만 가능', correct: false },
        { text: '-ㄹ지라도만 가능', correct: false }
      ],
      explanation: '상황에 따라 두 표현을 다르게 사용합니다.',
      source: 'TOPIK Level 3'
    }
  ],

  adv_017: [ // -곤 했다/-곤 한다 (Habitual/Repeated)
    {
      id: 'adv_017_001',
      type: 'fill-blank',
      question: '어릴 때는 자주 그곳에 가___.',
      correctAnswers: ['곤 했어'],
      explanation: '-곤 했다 = used to, 과거의 반복적 습관',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_017_002',
      type: 'fill-blank',
      question: '지금도 가끔 그 친구를 만나___곤 해.',
      correctAnswers: [''],
      explanation: '-곤 한다 = often do, 현재의 반복적 행동',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_017_003',
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
      id: 'adv_017_004',
      type: 'fill-blank',
      question: '여름이 오___수박을 먹곤 했어.',
      correctAnswers: ['면'],
      explanation: '오면 = when summer comes, 계절에 따른 반복 행동',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_017_005',
      type: 'context-judgment',
      question: '-곤 한다는 정기적이고 규칙적인 행동만 나타낸다.',
      options: [
        { text: '아니다', correct: true },
        { text: '맞다', correct: false }
      ],
      explanation: '-곤 한다는 반복적이고 습관적인 행동을 나타내며, 꼭 규칙적이지는 않아도 됩니다.',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_017_006',
      type: 'fill-blank',
      question: '요즘은 책을 읽___곤 해.',
      correctAnswers: [''],
      explanation: '읽곤 해 = often read these days',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_017_007',
      type: 'fill-blank',
      question: '학생 시절에는 밤새워 공부하___곤 했어.',
      correctAnswers: [''],
      explanation: '했어 = used to study all night, 과거의 습관',
      source: 'TOPIK Level 3'
    },
    {
      id: 'adv_017_008',
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
  ]
};

export default advancedSupplementPart2;
