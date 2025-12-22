// -게 하다 (使役形) 练习题
export const practice_int_001 = [
    {
      id: 'int_001_001',
      type: 'multiple-choice',
      question: '어머니가 나를 학교에___했어요. (妈妈让我去学校。)',
      options: [
        { text: '가게', correct: true },
        { text: '가', correct: false },
        { text: '갔게', correct: false },
        { text: '갈게', correct: false }
      ],
      explanation: '【使役形态】"-게 하다"表示使役，即“让某人做某事”。"가다"（去）→"가게 하다"（让……去）。“엄마가 나를 학교에 가게 했다”=妈妈让我去学校。相当于英语的"make someone do"。',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_002',
      type: 'multiple-choice',
      question: '-게 하다는 무엇을 나타내나요? (-게 하다 表示什么含义？)',
      options: [
        { text: '누군가에게 어떤 행동을 하도록 시키는 것（让某人做某动作）', correct: true },
        { text: '자연스럽게 변하는 것（自然地发生变化）', correct: false },
        { text: '능력이 있다는 것（具备某种能力）', correct: false },
        { text: '과거의 행동을 회상하는 것（回忆过去的动作）', correct: false }
      ],
      explanation: '【使役意义】"-게 하다"是使役表达，表示"主体让别人做某动作"。与"스스로 하다"（自己做）相区别，使役强调是让其他人去做。',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_003',
      type: 'multiple-choice',
      question: '선생님이 학생들을 공부하___했습니다. (老师让学生们学习。)',
      options: [
        { text: '게', correct: true },
        { text: '고', correct: false },
        { text: '러', correct: false },
        { text: '도록', correct: false }
      ],
      explanation: '【动词使役化】任何动词都可以用"-게 하다"变成使役形。"공부하다"（学习）→"공부하게 하다"（让……学习）。“선생님이 학생들을 공부하게 했다”=老师让学生们学习。',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_004',
      type: 'multiple-choice',
      question: '다음 중 -게 하다를 올바르게 사용한 문장은? (下列哪句是-게 하다的正确用法？)',
      options: [
        { text: '부모님이 저를 공부하게 했어요.', correct: true },
        { text: '부모님이 저가 공부하게 했어요.', correct: false },
        { text: '부모님이 저를 공부게 했어요.', correct: false },
        { text: '부모님이 저를 공부하하게 했어요.', correct: false }
      ],
      explanation: '【格式固定】使役形格式：“名词+를/을+动词+게 하다”。正确："나를 공부하게 했다"。错误："나가 공부하게 했다"（用主格가）、"나를 공부게 했다"（漏了하）、"나를 공부하하게 했다"（多余的하）。',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_005',
      type: 'multiple-choice',
      question: '아버지가 저를 연습하게 했어요.의 중국어 번역은? (“아버지가 저를 연습하게 했어요.”的中文翻译是？)',
      options: [
        { text: '父亲让我练习。', correct: true },
        { text: '父亲我练习了。', correct: false },
        { text: '父亲和我一起练习。', correct: false },
        { text: '父亲喜欢我练习。', correct: false }
      ],
      explanation: '【使役形结构】使役句结构：“~에게 ....하게 하다”。“아버지가 저를 연습하게 했다”=父亲让我练习。注意：被使役的人用宾格"를/을"，不用主格"이/가"。',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_006',
      type: 'multiple-choice',
      question: '의사가 환자에게 약을___했어요. (医生让病人吃药。)',
      options: [
        { text: '먹게', correct: true },
        { text: '먹', correct: false },
        { text: '먹도록', correct: false },
        { text: '먹으러', correct: false }
      ],
      explanation: '【使役动词例】医疗场景中的使役。"먹다"（吃）→"먹게 하다"（让……吃）。“의사가 환자에게 약을 먹게 했다”=医生让病人吃药。',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_007',
      type: 'multiple-choice',
      question: '-게 하다와 -게 되다의 뜻이 같나요? (-게 하다和-게 되다的意思相同吗？)',
      options: [
        { text: '아니오, -게 하다는 사역, -게 되다는 변화（不，-게 하다是使役，-게 되다是变化）', correct: true },
        { text: '네, 같은 의미입니다（是，意思相同）', correct: false },
        { text: '아니오, -게 하다는 가능성, -게 되다는 의무（不，-게 하다是可能性，-게 되다是义务）', correct: false },
        { text: '아니오, -게 하다는 과거, -게 되다는 미래（不，-게 하다是过去，-게 되다是未来）', correct: false }
      ],
      explanation: '-게 하다는 "~하게 하다(사역)", -게 되다는 "자연스럽게 ~되다(변화)"의 의미로 다릅니다.',
      source: 'TOPIK Level 2'
    },
    {
      id: 'int_001_008',
      type: 'multiple-choice',
      question: '선생님이 우리에게 한국말을___했어요. (老师让我们学韩语。)',
      options: [
        { text: '배우게', correct: true },
        { text: '배우', correct: false },
        { text: '배우도록', correct: false },
        { text: '배워', correct: false }
      ],
      explanation: '【学习使役】教育场景中的使役表达。"배우다"（学）→"배우게 하다"（让……学）。“선생님이 우리에게 한국말을 배우게 했다”=老师让我们学韩语。',
      source: 'TOPIK Level 2'
    }
];
