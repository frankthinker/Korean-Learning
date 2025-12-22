// 韩语语法数据库 - 包含初级、中级、高级语法

import extendedData from './grammarDataExtended.js'

export const grammarDatabase = {
  beginner: [
    {
      id: 'beg_001',
      form: '-습니다/-습니까',
      title: '敬语陈述形/疑问形',
      category: '基础词尾',
      definition: '过去或现在时敬语陈述词尾与疑问词尾，用于正式或尊敬场合',
      meaning: '(过去)...、是否...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '저는 어제 영화를 봤습니다.',
          chinese: '我昨天看了电影。',
          situation: '正式/书面语'
        },
        {
          korean: '당신은 한국인입니까?',
          chinese: '你是韩国人吗？',
          situation: '正式疑问'
        },
        {
          korean: '선생님이 학생들을 가르쳤습니다.',
          chinese: '老师教了学生们。',
          situation: '正式'
        }
      ],
      notes: '最常见的敬语词尾，广泛用于新闻、书信、正式报告',
      expandVocab: [
        { word: '봤습니다', meaning: '看了（敬语）' },
        { word: '갔습니다', meaning: '去了（敬语）' },
        { word: '했습니다', meaning: '做了（敬语）' },
        { word: '먹었습니다', meaning: '吃了（敬语）' }
      ]
    },
    {
      id: 'beg_002',
      form: '-고 있다/-고 있어요',
      title: '现在进行式',
      category: '基础词尾',
      definition: '表示正在进行或持续进行的动作状态',
      meaning: '正在...、...中、进行中',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '나는 지금 밥을 먹고 있어요.',
          chinese: '我现在正在吃饭。',
          situation: '日常/口语'
        },
        {
          korean: '비가 오고 있습니다.',
          chinese: '正在下雨。',
          situation: '正式'
        },
        {
          korean: '영희는 책을 읽고 있어.',
          chinese: '英希正在读书。',
          situation: '非正式'
        }
      ],
      notes: '表示持续的动作，不能与完成动词（도움말, 도착)搭配',
      expandVocab: [
        { word: '먹고 있다', meaning: '正在吃' },
        { word: '공부하고 있다', meaning: '正在学习' },
        { word: '일하고 있다', meaning: '正在工作' },
        { word: '기다리고 있다', meaning: '正在等待' }
      ]
    },
    {
      id: 'beg_003',
      form: '-를/을',
      title: '宾语助词',
      category: '基础助词',
      definition: '标记及物动词的直接宾语，根据前字末音选择',
      meaning: '(宾语标记)',
      partOfSpeech: '助词',
      examples: [
        {
          korean: '나는 물을 마신다.',
          chinese: '我喝水。',
          situation: '日常'
        },
        {
          korean: '그는 책을 읽어요.',
          chinese: '他读书。',
          situation: '日常'
        },
        {
          korean: '친구를 만났어요.',
          chinese: '遇见了朋友。',
          situation: '日常'
        }
      ],
      notes: '子音末尾用"-을"，元音末尾用"-를"。不可与不及物动词搭配',
      expandVocab: [
        { word: '물을', meaning: '水（宾语）' },
        { word: '책을', meaning: '书（宾语）' },
        { word: '친구를', meaning: '朋友（宾语）' },
        { word: '밥을', meaning: '饭（宾语）' }
      ]
    },
    {
      id: 'beg_004',
      form: '-이/가',
      title: '主语助词',
      category: '基础助词',
      definition: '标记句子的主语，区分动作的执行者，根据末音选择',
      meaning: '(主语标记)',
      partOfSpeech: '助词',
      examples: [
        {
          korean: '고양이가 있어요.',
          chinese: '有猫。',
          situation: '日常'
        },
        {
          korean: '나는 학생이다.',
          chinese: '我是学生。',
          situation: '陈述'
        },
        {
          korean: '누가 왔어요?',
          chinese: '谁来了？',
          situation: '疑问'
        }
      ],
      notes: '子音末尾用"-이"，元音末尾用"-가"。新信息/强调时常用',
      expandVocab: [
        { word: '고양이가', meaning: '猫（主语）' },
        { word: '개가', meaning: '狗（主语）' },
        { word: '누가', meaning: '谁（主语）' },
        { word: '뭐가', meaning: '什么（主语）' }
      ]
    },
    {
      id: 'beg_005',
      form: '-는데요/-거든요',
      title: '理由/设定条件',
      category: '基础词尾',
      definition: '表示说话者对某事实的补充说明或假设条件',
      meaning: '...你看、假如...、如果...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '시간이 없는데요.',
          chinese: '你看我没有时间。',
          situation: '日常'
        },
        {
          korean: '비가 오거든 집에 있어.',
          chinese: '如果下雨，就待在家里。',
          situation: '日常'
        }
      ],
      notes: '-는데 表状态或背景，-거든 表条件',
      expandVocab: [
        { word: '없는데요', meaning: '没有啦' },
        { word: '바쁘는데요', meaning: '很忙啦' },
        { word: '모르거든', meaning: '如果不知道' }
      ]
    },
    {
      id: 'beg_006',
      form: '-어요/-아요',
      title: '现在时非正式敬语',
      category: '基础词尾',
      definition: '现在时非正式敬语陈述词尾，日常对话最常用',
      meaning: '...(现在)',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '저는 학생이에요.',
          chinese: '我是学生。',
          situation: '日常对话'
        },
        {
          korean: '지금 학교에 가요.',
          chinese: '现在去学校。',
          situation: '日常对话'
        },
        {
          korean: '날씨가 좋아요.',
          chinese: '天气很好。',
          situation: '日常对话'
        }
      ],
      notes: '最常用的敬语形式，ㅏ/ㅗ母音后用-아요，其他用-어요',
      expandVocab: [
        { word: '예요', meaning: '是（非正式）' },
        { word: '있어요', meaning: '有（非正式）' },
        { word: '안 돼요', meaning: '不行（非正式）' },
        { word: '몰라요', meaning: '不知道（非正式）' }
      ]
    },
    {
      id: 'beg_007',
      form: '-기 때문에/-라서/-니까',
      title: '原因/理由',
      category: '基础连接词',
      definition: '表示前句是后句的原因、理由或根据',
      meaning: '因为...、由于...、...所以...',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '시간이 없기 때문에 못 갔어요.',
          chinese: '因为没有时间所以没去。',
          situation: '日常'
        },
        {
          korean: '피곤해서 집에 있었어.',
          chinese: '因为累所以待在家里。',
          situation: '日常'
        },
        {
          korean: '돈이 없으니까 못 사.',
          chinese: '因为没钱所以买不了。',
          situation: '日常'
        }
      ],
      notes: '-기 때문에最正式，-라서最简洁，-니까最自然',
      expandVocab: [
        { word: '없기 때문에', meaning: '因为没有' },
        { word: '좋아서', meaning: '因为喜欢' },
        { word: '바쁘니까', meaning: '因为忙' },
        { word: '몰라서', meaning: '因为不知道' }
      ]
    },
    {
      id: 'beg_008',
      form: '-는다/-는다고 했어',
      title: '现在时陈述/间接引语',
      category: '基础词尾',
      definition: '标准现在式陈述形，或表达他人的陈述内容',
      meaning: '...(现在)、...说...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '나는 밥을 먹는다.',
          chinese: '我吃饭。',
          situation: '书面'
        },
        {
          korean: '그는 내일 온다고 했어.',
          chinese: '他说明天来。',
          situation: '日常'
        }
      ],
      notes: '书面语或新闻常用，日常口语较少',
      expandVocab: [
        { word: '간다', meaning: '去' },
        { word: '온다', meaning: '来' },
        { word: '한다', meaning: '做' }
      ]
    },
    {
      id: 'beg_009',
      form: '-는/(은/은)ㄴ',
      title: '현재시제 vs 과거시제 구분',
      category: '基础词尾',
      definition: '-는 表现在或习惯，-은/ㄴ表过去或完成',
      meaning: '...(现在)/...(过去)',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '오는 버스를 기다려요. / 온 버스를 탔어요.',
          chinese: '等来的公交车。 / 上了来的公交车。',
          situation: '日常'
        }
      ],
      notes: '定语形式中的时态区分至关重要',
      expandVocab: [
        { word: '가는 길', meaning: '去的路（现在）' },
        { word: '간 길', meaning: '去过的路（过去）' }
      ]
    },
    {
      id: 'beg_010',
      form: '있다/없다',
      title: '存在/不存在',
      category: '基础动词',
      definition: '表示事物、人或某事物的存在或不存在',
      meaning: '有...、没有...',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '가방이 책상 위에 있어요.',
          chinese: '包在书桌上。',
          situation: '日常'
        },
        {
          korean: '시간이 없어요.',
          chinese: '没有时间。',
          situation: '日常'
        }
      ],
      notes: '最常用的基础动词，表示存在状态',
      expandVocab: [
        { word: '있어요', meaning: '有/在' },
        { word: '없어요', meaning: '没有/不在' }
      ]
    },
    {
      id: 'beg_011',
      form: '가다/오다',
      title: '去/来',
      category: '基础动词',
      definition: '表示移动的方向：去（离开）或来（接近）',
      meaning: '去...、来...',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '학교에 가요.',
          chinese: '去学校。',
          situation: '日常'
        },
        {
          korean: '집에 와요.',
          chinese: '来家里。',
          situation: '日常'
        }
      ],
      notes: '基础动词，方向性相反',
      expandVocab: [
        { word: '가요', meaning: '去' },
        { word: '와요', meaning: '来' }
      ]
    },
    {
      id: 'beg_012',
      form: '하다',
      title: '做/进行',
      category: '基础动词',
      definition: '表示做某事或进行某动作',
      meaning: '做...、进行...',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '뭐 해요?',
          chinese: '你在做什么？',
          situation: '日常'
        },
        {
          korean: '공부해요.',
          chinese: '我在学习。',
          situation: '日常'
        }
      ],
      notes: '最常用的多功能动词，与许多名词组合形成短语动词',
      expandVocab: [
        { word: '해요', meaning: '做' },
        { word: '공부하다', meaning: '学习' },
        { word: '일하다', meaning: '工作' }
      ]
    },
    {
      id: 'beg_013',
      form: '먹다/마시다',
      title: '吃/喝',
      category: '基础动词',
      definition: '먹다表示吃固体食物，마시다表示喝液体',
      meaning: '吃...、喝...',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '밥을 먹어요.',
          chinese: '我在吃饭。',
          situation: '日常'
        },
        {
          korean: '물을 마셔요.',
          chinese: '我在喝水。',
          situation: '日常'
        }
      ],
      notes: '重要区分：固体用먹다，液体用마시다',
      expandVocab: [
        { word: '먹어요', meaning: '吃' },
        { word: '마셔요', meaning: '喝' }
      ]
    },
    {
      id: 'beg_014',
      form: '자다',
      title: '睡觉',
      category: '基础动词',
      definition: '表示睡眠或休息',
      meaning: '睡...',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '밤에 자요.',
          chinese: '晚上睡觉。',
          situation: '日常'
        },
        {
          korean: '충분히 자요.',
          chinese: '睡眠充足。',
          situation: '日常'
        }
      ],
      notes: '不规则动词，变化形式需注意',
      expandVocab: [
        { word: '자요', meaning: '睡觉' },
        { word: '일어나다', meaning: '起床' }
      ]
    },
    {
      id: 'beg_015',
      form: '보다',
      title: '看/见',
      category: '基础动词',
      definition: '表示视觉观看或见面',
      meaning: '看...、见...、会面',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '영화를 봐요.',
          chinese: '我在看电影。',
          situation: '日常'
        },
        {
          korean: '친구를 봐요.',
          chinese: '我在见朋友。',
          situation: '日常'
        }
      ],
      notes: '不规则动词，-보다变化为-봐요',
      expandVocab: [
        { word: '봐요', meaning: '看' },
        { word: '봤어요', meaning: '看了' }
      ]
    },
    {
      id: 'beg_016',
      form: '말하다/듣다',
      title: '说/听',
      category: '基础动词',
      definition: '말하다表示说话，듣다表示听取声音',
      meaning: '说...、听...',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '한국말을 해요.',
          chinese: '我说韩语。',
          situation: '日常'
        },
        {
          korean: '음악을 들어요.',
          chinese: '我在听音乐。',
          situation: '日常'
        }
      ],
      notes: '基本动词，表示信息交流',
      expandVocab: [
        { word: '말해요', meaning: '说' },
        { word: '들어요', meaning: '听' }
      ]
    },
    {
      id: 'beg_017',
      form: '숨다/찾다',
      title: '躲藏/寻找',
      category: '基础动词',
      definition: '숨다表示躲藏，찾다表示寻找或搜索',
      meaning: '躲...、找...',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '어디에 숨어요.',
          chinese: '藏在哪里。',
          situation: '日常'
        },
        {
          korean: '열쇠를 찾아요.',
          chinese: '我在找钥匙。',
          situation: '日常'
        }
      ],
      notes: '反义动词对，常用于日常情境',
      expandVocab: [
        { word: '숨어요', meaning: '躲' },
        { word: '찾아요', meaning: '找' }
      ]
    },
    {
      id: 'beg_018',
      form: '좋아하다',
      title: '喜欢',
      category: '基础动词',
      definition: '表示喜欢或偏好某事物',
      meaning: '喜欢...',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '음악을 좋아해요.',
          chinese: '我喜欢音乐。',
          situation: '日常'
        },
        {
          korean: '스포츠를 좋아해요.',
          chinese: '我喜欢运动。',
          situation: '日常'
        }
      ],
      notes: '动词形容词，表示个人偏好',
      expandVocab: [
        { word: '좋아해요', meaning: '喜欢' },
        { word: '좋다', meaning: '好' }
      ]
    },
    {
      id: 'beg_019',
      form: '만나다/헤어지다',
      title: '见面/分手',
      category: '基础动词',
      definition: '만나다表示相遇或见面，헤어지다表示告别或分离',
      meaning: '见面...、分别...',
      partOfSpeech: '动词',
      examples: [
        {
          korean: '친구를 만나요.',
          chinese: '我在见朋友。',
          situation: '日常'
        },
        {
          korean: '내일 안녕히 헤어져요.',
          chinese: '明天再见。',
          situation: '日常'
        }
      ],
      notes: '关系动词，强调人际互动',
      expandVocab: [
        { word: '만나요', meaning: '见面' },
        { word: '헤어져요', meaning: '分别' }
      ]
    }

  ],
  intermediate: [
    {
      id: 'int_001',
      form: '-게 하다',
      title: '使役形',
      category: '词尾变化',
      definition: '表示让或使某人做某事',
      meaning: '让...、使...做...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '어머니가 나를 학교에 가게 했어요.',
          chinese: '妈妈让我去学校。',
          situation: '日常'
        },
        {
          korean: '선생님이 학생들을 공부하게 했습니다.',
          chinese: '老师让学生们学习。',
          situation: '正式'
        }
      ],
      notes: '表示使役关系，常与被动形对比',
      expandVocab: [
        { word: '가게 하다', meaning: '让...去' },
        { word: '공부하게 하다', meaning: '让...学习' }
      ],
      confusionComparison: {
        compared: '-게 되다',
        explanation: '-게 되다表示自然而然地发生变化，-게 하다表示主动让某人做某事'
      }
    },
    {
      id: 'int_002',
      form: '-는 데',
      title: '进行中/目的',
      category: '词尾变化',
      definition: '表示动作进行过程或目的',
      meaning: '在...中、为了...、...的过程中',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '공부하는 데 어려워요.',
          chinese: '学习很困难。',
          situation: '日常'
        },
        {
          korean: '한국어를 배우는 데 3개월이 걸렸어요.',
          chinese: '学韩语用了3个月。',
          situation: '日常'
        }
      ],
      notes: '与"-는 것"不同，强调过程而非结果',
      expandVocab: [
        { word: '공부하는 데', meaning: '学习中' },
        { word: '일하는 데', meaning: '工作中' }
      ],
      confusionComparison: {
        compared: '-는 것',
        explanation: '-는 것强调事物本身或结果，-는 데强调过程或困难程度'
      }
    },
    {
      id: 'int_003',
      form: '-도록',
      title: '为了...、致使',
      category: '连接词扩展',
      definition: '表示目的或结果',
      meaning: '为了...、使得...、...到...的程度',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '건강하도록 운동해요.',
          chinese: '为了健康而运动。',
          situation: '日常'
        },
        {
          korean: '늦지 않도록 빨리 왔어요.',
          chinese: '为了不迟到而快速来了。',
          situation: '日常'
        }
      ],
      notes: '可表示目的也可表示结果',
      expandVocab: [
        { word: '건강하다', meaning: '健康' },
        { word: '늦다', meaning: '迟到' }
      ]
    }
  ],
  advanced: [
    {
      id: 'adv_001',
      form: '-곤 하다',
      title: '习惯性动作（文学性）',
      category: '惯用型扩展',
      definition: '表示过去经常反复进行的动作或习惯',
      meaning: '常常...、经常...',
      partOfSpeech: '惯用型',
      examples: [
        {
          korean: '그는 매일 아침 산책을 곤 했다.',
          chinese: '他常常每天早上散步。',
          situation: '文学/书面语'
        },
        {
          korean: '어린 시절 할머니의 집에 놀곤 했어요.',
          chinese: '小时候经常去奶奶家玩。',
          situation: '回忆性叙述'
        }
      ],
      notes: '带有文学或文雅的色彩，日常口语较少使用',
      expandVocab: [
        { word: '산책하다', meaning: '散步' },
        { word: '놀다', meaning: '玩' }
      ],
      culturalBackground: '常见于韩国文学、诗歌、正式文章中，表示对过去习惯的回忆或描述'
    },
    {
      id: 'adv_002',
      form: '-ㄹ수록',
      title: '越...越...（递进）',
      category: '高级连接词',
      definition: '表示一个事物随着另一个事物增加而增加',
      meaning: '越...越...',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '공부할수록 어려워진다.',
          chinese: '越学习越觉得困难。',
          situation: '描述性'
        },
        {
          korean: '시간이 지날수록 그리움이 깊어졌어요.',
          chinese: '时间越久，思念越深。',
          situation: '文学'
        }
      ],
      notes: '常用于描写变化过程，带有递进关系',
      expandVocab: [
        { word: '어려워지다', meaning: '变困难' },
        { word: '깊어지다', meaning: '变深' }
      ]
    }
  ]
};

export const categories = {
  beginner: ['基础助词', '基础词尾', '基础动词', '基础连接词'],
  intermediate: ['词尾变化', '高级助词', '连接词扩展', '复合概念', '惯用表达'],
  advanced: ['文学语法', '高级连接词', '敬语体系', '复杂句型', '惯用型扩展']
};

// 获取对应级别的语法列表
export const getGrammarByLevel = (level) => {
  return grammarDatabase[level] || [];
};

// 按分类筛选语法
export const filterGrammarByCategory = (level, category) => {
  return grammarDatabase[level]?.filter(g => g.category === category) || [];
};

// 搜索语法（韩文或中文释义）
export const searchGrammar = (query, level = null) => {
  let results = [];
  
  const levels = level ? [level] : ['beginner', 'intermediate', 'advanced'];
  
  levels.forEach(lv => {
    const levelGrammars = grammarDatabase[lv] || [];
    levelGrammars.forEach(grammar => {
      if (
        grammar.form.includes(query) ||
        grammar.title.includes(query) ||
        grammar.meaning.includes(query) ||
        grammar.examples?.some(ex => 
          ex.korean.includes(query) || ex.chinese.includes(query)
        )
      ) {
        results.push({ ...grammar, level: lv });
      }
    });
  });
  
  return results;
};

// 合并扩展数据到主数据库
if (extendedData && extendedData.intermediate) {
  grammarDatabase.intermediate = [
    ...grammarDatabase.intermediate,
    ...extendedData.intermediate
  ];
}

if (extendedData && extendedData.advanced) {
  grammarDatabase.advanced = [
    ...grammarDatabase.advanced,
    ...extendedData.advanced
  ];
}
