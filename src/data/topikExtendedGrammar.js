/**
 * TOPIK 官方认证的扩展语法库
 * 基于 TOPIK I（初级）和 TOPIK II（中级/高级）标准
 * 来源：https://www.koreantopik.com/
 */

export const topikExtendedGrammar = {
  beginner: [
    // 现有的9个初级语法点基础上添加
    // TOPIK I 级别的额外语法点
    
    {
      id: 'beg_010',
      form: '-려고',
      title: '意图/目的',
      category: '词尾',
      partOfSpeech: '动词词尾',
      definition: '表示做某事的意图或目的',
      meaning: '为了..., 想要...',
      examples: [
        { korean: '한국에 공부하려고 간다.', chinese: '为了在韩国学习而去。', situation: '日常' },
        { korean: '책을 읽으려고 도서관에 간다.', chinese: '为了读书而去图书馆。', situation: '日常' }
      ],
      expandVocab: [
        { word: '려고', meaning: '为了（目的）' },
        { word: '가다', meaning: '去' }
      ],
      notes: '表示主语的意图或目的，后面通常跟动词'
    },

    {
      id: 'beg_011',
      form: '-고 있다',
      title: '进行时',
      category: '词尾',
      partOfSpeech: '动词词尾',
      definition: '表示正在进行的动作或持续的状态',
      meaning: '正在...，一直在...',
      examples: [
        { korean: '지금 밥을 먹고 있다.', chinese: '现在正在吃饭。', situation: '日常' },
        { korean: '그는 책을 읽고 있다.', chinese: '他正在读书。', situation: '日常' }
      ],
      expandVocab: [
        { word: '고 있다', meaning: '正在进行' },
        { word: '밥', meaning: '米饭' }
      ]
    },

    {
      id: 'beg_012',
      form: '-아/어서',
      title: '顺序/原因',
      category: '词尾',
      partOfSpeech: '连接词尾',
      definition: '表示两个动作按顺序进行，或前面是后面的原因',
      meaning: '因为...，然后...，从而...',
      examples: [
        { korean: '밥을 먹어서 배가 부르다.', chinese: '吃了饭所以肚子饱了。', situation: '日常' },
        { korean: '비가 와서 우산을 챙겼다.', chinese: '因为下雨所以带了伞。', situation: '日常' }
      ],
      expandVocab: [
        { word: '어서', meaning: '因为' },
        { word: '부르다', meaning: '饱' }
      ]
    },

    {
      id: 'beg_013',
      form: '-를 주다',
      title: '给予',
      category: '表达',
      partOfSpeech: '复合动词',
      definition: '表示为某人做某事',
      meaning: '为...做...，帮...做...',
      examples: [
        { korean: '친구를 도와주다.', chinese: '帮朋友。', situation: '日常' },
        { korean: '엄마가 나한테 책을 사주다.', chinese: '妈妈给我买书。', situation: '家庭' }
      ],
      expandVocab: [
        { word: '주다', meaning: '给' },
        { word: '도와주다', meaning: '帮助' }
      ]
    }
  ],
  
  intermediate: [
    // TOPIK II（中级）官方语法点（选自前40个）
    
    {
      id: 'int_020',
      form: '-아/어 보이다',
      title: '看起来/似乎',
      category: '词尾',
      partOfSpeech: '表达',
      definition: '表示根据外观或表现进行的推测',
      meaning: '看起来..., 似乎...',
      examples: [
        { korean: '그 사람은 매우 피곤해 보인다.', chinese: '那个人看起来很疲劳。', situation: '观察' },
        { korean: '이 음식은 맛있어 보인다.', chinese: '这个食物看起来很好吃。', situation: '日常' }
      ],
      expandVocab: [
        { word: '보이다', meaning: '看起来' },
        { word: '피곤하다', meaning: '疲劳的' }
      ],
      notes: '用于根据表面特征推测，而不是自己的亲身经历'
    },

    {
      id: 'int_021',
      form: '-(으)ㄴ/는 모양이다',
      title: '看起来/似乎（观察）',
      category: '表达',
      partOfSpeech: '复合表达',
      definition: '根据观察推测的情况',
      meaning: '看起来..., 似乎...',
      examples: [
        { korean: '형제가 싸우는 모양이다.', chinese: '看起来兄弟俩在吵架。', situation: '观察' },
        { korean: '비가 내릴 모양이다.', chinese: '似乎要下雨了。', situation: '天气' }
      ],
      expandVocab: [
        { word: '모양이다', meaning: '样子' },
        { word: '싸우다', meaning: '吵架' }
      ]
    },

    {
      id: 'int_022',
      form: '-(으)ㄹ텐데',
      title: '推测（推想）',
      category: '词尾',
      partOfSpeech: '表达',
      definition: '表示对未来或过去情况的推测',
      meaning: '大概...吧，应该...',
      examples: [
        { korean: '그 영화는 재미있을 텐데 못 봤다.', chinese: '那部电影应该很有趣，但我没看。', situation: '假设' },
        { korean: '지금쯤 집에 도착했을 텐데.', chinese: '现在应该已经到家了。', situation: '推测' }
      ],
      expandVocab: [
        { word: '텐데', meaning: '大概...吧' },
        { word: '재미있다', meaning: '有趣的' }
      ]
    },

    {
      id: 'int_023',
      form: '-기는 하지만',
      title: '对比（虽然但是）',
      category: '表达',
      partOfSpeech: '连接词尾',
      definition: '虽然有某种事实，但表示不同的观点',
      meaning: '虽然...但...，尽管...但...',
      examples: [
        { korean: '시간이 좀 오래 걸리기는 하지만 질은 좋다.', chinese: '虽然花时间长，但质量很好。', situation: '对比' },
        { korean: '비싸기는 하지만 실용적이다.', chinese: '虽然贵，但很实用。', situation: '评价' }
      ],
      expandVocab: [
        { word: '하지만', meaning: '但是' },
        { word: '질', meaning: '质量' }
      ],
      notes: '强调承认一个事实，但提出不同的看法'
    },

    {
      id: 'int_024',
      form: '-(으)ㄴ/-는 반면에',
      title: '对比（相反）',
      category: '表达',
      partOfSpeech: '连接词尾',
      definition: '表示两个对立或相反的情况',
      meaning: '...的反面，相反...',
      examples: [
        { korean: '큰 형은 개구쟁이인 반면에 작은 형은 조용하다.', chinese: '大哥淘气，相反小哥很安静。', situation: '对比' },
        { korean: '작년에 힘든 반면에 올해는 좋다.', chinese: '去年很困难，而今年很好。', situation: '对比' }
      ],
      expandVocab: [
        { word: '반면에', meaning: '相反地' },
        { word: '개구쟁이', meaning: '淘气鬼' }
      ]
    },

    {
      id: 'int_025',
      form: '-(으)ㄴ데도',
      title: '尽管（对比）',
      category: '表达',
      partOfSpeech: '词尾',
      definition: '尽管某种情况，但发生了不同的结果',
      meaning: '尽管...但...，虽然...可是...',
      examples: [
        { korean: '공부했는데도 시험에 떨어졌다.', chinese: '虽然学习了，但考试失败了。', situation: '结果' },
        { korean: '열심히 했는데도 안 됐다.', chinese: '虽然很努力，但失败了。', situation: '结果' }
      ],
      expandVocab: [
        { word: '데도', meaning: '虽然' },
        { word: '떨어지다', meaning: '失败' }
      ]
    }
  ],

  advanced: [
    // TOPIK III（高级）认证的语法点
    
    {
      id: 'adv_020',
      form: '-(으)ㄹ지도 모르다',
      title: '可能性（不确定）',
      category: '表达',
      partOfSpeech: '复合表达',
      definition: '表示某事可能发生的不确定性',
      meaning: '可能...，也许...',
      examples: [
        { korean: '내일 비가 올지도 모른다.', chinese: '明天可能会下雨。', situation: '推测' },
        { korean: '그가 올지도 모르니 준비해야 한다.', chinese: '他可能会来，所以要做好准备。', situation: '准备' }
      ],
      expandVocab: [
        { word: '모르다', meaning: '不知道' },
        { word: '올지도', meaning: '可能会来' }
      ],
      notes: '表达更高程度的不确定性'
    },

    {
      id: 'adv_021',
      form: '-(으)ㄴ/는 걸 보니(까)',
      title: '推测（从观察）',
      category: '表达',
      partOfSpeech: '复合表达',
      definition: '根据观察到的事实进行推测',
      meaning: '看...样子，从...来看...',
      examples: [
        { korean: '자꾸 하품을 하는 걸 보니 피곤한 모양이다.', chinese: '看他不停打哈欠，样子很疲劳。', situation: '观察' },
        { korean: '웃고 있는 걸 보니 좋은 일이 있나 봐.', chinese: '看他在笑，应该有好事。', situation: '观察' }
      ],
      expandVocab: [
        { word: '하품', meaning: '哈欠' },
        { word: '보니', meaning: '看...样子' }
      ]
    },

    {
      id: 'adv_022',
      form: '-(으)나 -거나',
      title: '选择（或者）',
      category: '表达',
      partOfSpeech: '词尾',
      definition: '表示两个选项中选一个',
      meaning: '或...或...，无论...还是...',
      examples: [
        { korean: '커피나 차 중에서 뭘 마실까?', chinese: '咖啡或茶，你要喝哪个？', situation: '选择' },
        { korean: '누구나 실수를 할 수 있다.', chinese: '任何人都可能犯错。', situation: '一般' }
      ],
      expandVocab: [
        { word: '나', meaning: '或者' },
        { word: '거나', meaning: '或者' }
      ]
    },

    {
      id: 'adv_023',
      form: '-(으)ㄹ 뿐만 아니라',
      title: '不仅...而且',
      category: '表达',
      partOfSpeech: '复合表达',
      definition: '表示除了一个事实外，还有另外的事实',
      meaning: '不仅...而且..., 非但...反而...',
      examples: [
        { korean: '그는 똑똑할 뿐만 아니라 착하기도 하다.', chinese: '他不仅聪明，而且善良。', situation: '评价' },
        { korean: '한국 음식은 맛있을 뿐만 아니라 건강하다.', chinese: '韩国食物不仅美味，而且健康。', situation: '评价' }
      ],
      expandVocab: [
        { word: '뿐만 아니라', meaning: '不仅...而且...' },
        { word: '착하다', meaning: '善良' }
      ]
    },

    {
      id: 'adv_024',
      form: 'V-(으)ㄹ 때마다',
      title: '每次...都',
      category: '表达',
      partOfSpeech: '复合表达',
      definition: '每当某事发生时，另一个事情也发生',
      meaning: '每次...都..., 每当...就...',
      examples: [
        { korean: '그를 볼 때마다 웃음이 나온다.', chinese: '每次看到他都想笑。', situation: '反应' },
        { korean: '비가 올 때마다 감기에 걸린다.', chinese: '每次下雨都会感冒。', situation: '规律' }
      ],
      expandVocab: [
        { word: '때마다', meaning: '每次' },
        { word: '웃음이 나오다', meaning: '想笑' }
      ]
    }
  ]
}

/**
 * TOPIK II（中级）完整语法点列表（精选）
 * 这是从官方TOPIK资源精选的40个最常用的中级语法点
 */
export const topikIntermediateComprehensive = [
  {
    id: 'topik_int_001',
    form: '-아/어 보이다',
    description: 'look like, seem like ~guess based on outward appearance',
    korean_example: '그 사람은 매우 행복해 보인다.',
    english: 'That person looks very happy.'
  },
  {
    id: 'topik_int_002',
    form: '-(으)ㄴ/는 모양이다',
    description: 'it seems, I guess ~refer or guess a situation after observation',
    korean_example: '비가 내릴 모양이다.',
    english: 'It seems like it will rain.'
  },
  {
    id: 'topik_int_003',
    form: '-(으)ㄹ텐데',
    description: 'would, suppose… ~express an expected future situation',
    korean_example: '그 영화는 재미있을 텐데.',
    english: 'That movie would be fun.'
  },
  {
    id: 'topik_int_004',
    form: '-기는 하지만',
    description: 'but (I think) ~express contrast with emphasis',
    korean_example: '비싸기는 하지만 좋다.',
    english: 'Although it is expensive, it is good.'
  },
  {
    id: 'topik_int_005',
    form: '-(으)ㄴ/-는 반면에',
    description: 'but, while ~express opposite things',
    korean_example: '형은 키가 크고 동생은 작은 반면에',
    english: 'While the older brother is tall, the younger brother is short.'
  },
  {
    id: 'topik_int_006',
    form: '-(으)ㄴ데도',
    description: 'although, despite that ~express a contrast',
    korean_example: '공부했는데도 떨어졌다.',
    english: 'Although I studied, I failed.'
  },
  {
    id: 'topik_int_007',
    form: '-거든요',
    description: 'because ~provide a reason/thinking',
    korean_example: '시간이 없거든요.',
    english: 'Because I do not have time.'
  },
  {
    id: 'topik_int_008',
    form: 'V-느라고',
    description: 'because, due to ~give reason for negative consequence',
    korean_example: '공부하느라고 바빴어요.',
    english: 'I was busy studying.'
  },
  {
    id: 'topik_int_009',
    form: 'V-는 바람에',
    description: 'because, as a result ~give unexpected reason for negative consequence',
    korean_example: '너무 바쁜 바람에 못 갔어요.',
    english: 'Because I was too busy, I could not go.'
  },
  {
    id: 'topik_int_010',
    form: 'A-(으)ㄴ 탓에',
    description: 'due to, because ~give reason for negative consequence',
    korean_example: '날씨가 나쁜 탓에 못 갔어요.',
    english: 'Due to bad weather, I could not go.'
  }
]
