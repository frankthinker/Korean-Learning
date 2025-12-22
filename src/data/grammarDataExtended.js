// 扩展语法数据库 - 包含更多中级和高级语法点（可合并到主数据库）

export const extendedGrammarData = {
  intermediate: [
    {
      id: 'int_010',
      form: '-아/-어도',
      title: '让步/容许条件',
      category: '词尾变化',
      definition: '表示即使发生某事，结果也不改变，表现让步或容许',
      meaning: '即使...也..., 尽管...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '비가 와도 우리는 간다.',
          chinese: '即使下雨我们也去。',
          situation: '日常'
        },
        {
          korean: '힘들어도 끝까지 해.',
          chinese: '尽管困难也要坚持到底。',
          situation: '日常'
        },
        {
          korean: '못해도 괜찮아.',
          chinese: '做不了也没关系。',
          situation: '日常'
        }
      ],
      notes: 'ㅏ/ㅗ母音后用-아도，其他用-어도。表示条件下结果不变',
      expandVocab: [
        { word: '와도', meaning: '即使来' },
        { word: '못해도', meaning: '即使做不了' },
        { word: '늦어도', meaning: '即使迟到' },
        { word: '어려워도', meaning: '即使困难' }
      ]
    },
    {
      id: 'int_011',
      form: '-는 중이다/-고 있다',
      title: '进行中(vs 完成)',
      category: '词尾变化',
      definition: '-는 중 表进行中，-고 있다表现在进行（可能持续）',
      meaning: '...中、正在...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '그는 밥을 먹는 중이다.',
          chinese: '他在吃饭中。',
          situation: '正式'
        },
        {
          korean: '우리는 지금 공부하고 있다.',
          chinese: '我们现在在学习。',
          situation: '书面'
        }
      ],
      notes: '-는 중 更强调正在进行，-고 있다 更自然',
      expandVocab: [
        { word: '읽는 중', meaning: '正在读' },
        { word: '일하고 있다', meaning: '正在工作' }
      ]
    },
    {
      id: 'int_012',
      form: '-겠-/-을/ㄹ 것이다',
      title: '未来时/意志/推测',
      category: '词尾变化',
      definition: '-겠- 表话者的意志或推测，-을/ㄹ 것 表合理推测',
      meaning: '会...、要...、大概会...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '내일 날씨가 좋겠어요.',
          chinese: '明天天气大概会很好。',
          situation: '推测'
        },
        {
          korean: '나는 너를 도와줄 것이다.',
          chinese: '我会帮助你。',
          situation: '正式'
        },
        {
          korean: '그는 올 거야.',
          chinese: '他会来的。',
          situation: '日常'
        }
      ],
      notes: '两者都能表未来，但表达意味不同',
      expandVocab: [
        { word: '할 거예요', meaning: '会做' },
        { word: '올 것 같다', meaning: '好像会来' }
      ]
    },
    {
      id: 'int_013',
      form: '-아/어서/-으니까/-니까/-기 때문에',
      title: '因果关系对比',
      category: '连接词扩展',
      definition: '表示因果，但细微差异不同',
      meaning: '因为...,所以...',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '피곤해서 못 갔어.',
          chinese: '因为累所以没去。',
          situation: '最常用'
        },
        {
          korean: '돈이 없으니까 못 산다.',
          chinese: '因为没钱所以买不了。',
          situation: '自然'
        },
        {
          korean: '시간이 없기 때문에 갈 수 없었다.',
          chinese: '因为没时间所以无法去。',
          situation: '最正式'
        }
      ],
      notes: '-아/어서最常用最自然，-기 때문에最正式，-니까介于两者',
      expandVocab: [
        { word: '좋아서', meaning: '因为好' },
        { word: '바쁘니까', meaning: '因为忙' }
      ]
    },
    {
      id: 'int_014',
      form: '-아/어 주다/-아/어 달라',
      title: '请求/要求',
      category: '词尾变化',
      definition: '-아/어 주다表请人帮忙做某事，-아/어 달라表直接请求',
      meaning: '请...,请帮我...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '이걸 도와줄래요?',
          chinese: '你能帮我这个吗？',
          situation: '礼貌请求'
        },
        {
          korean: '나가 하게 해줄래?',
          chinese: '让我做好不好？',
          situation: '请求'
        },
        {
          korean: '물 좀 달라.',
          chinese: '给我点水。',
          situation: '日常直接'
        }
      ],
      notes: '-아/어 주다 是帮忙为他人做，-아/어 달라 是为自己请求',
      expandVocab: [
        { word: '봐줄래?', meaning: '你能看看吗？' },
        { word: '해달라', meaning: '请做这个' }
      ]
    },
    {
      id: 'int_015',
      form: '-는 것처럼/-것 같다',
      title: '好像/似乎/如同',
      category: '词尾变化',
      definition: '表示相似或猜测，-는 것처럼表如同，-것 같다表好像',
      meaning: '好像...、似乎...、如同...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '마치 아무것도 모르는 것처럼 행동했다.',
          chinese: '他装作什么都不知道。',
          situation: '书面'
        },
        {
          korean: '좋을 것 같아.',
          chinese: '好像会很好。',
          situation: '日常'
        }
      ],
      notes: '两者都表推测或比较，使用频率都很高',
      expandVocab: [
        { word: '하는 것처럼', meaning: '如同做那样' },
        { word: '올 것 같다', meaning: '好像会来' }
      ]
    },
    {
      id: 'int_016',
      form: '-아/어서는 안 되다/-면 안 되다',
      title: '禁止/不能',
      category: '词尾变化',
      definition: '表示不允许做某事，禁止或不能进行',
      meaning: '不能...、不可以...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '담배를 피워서는 안 된다.',
          chinese: '不能抽烟。',
          situation: '正式'
        },
        {
          korean: '늦으면 안 돼.',
          chinese: '迟到的话不行。',
          situation: '日常'
        }
      ],
      notes: '表示禁止或规定，有一定的强制力',
      expandVocab: [
        { word: '들어가서는 안 된다', meaning: '不能进去' },
        { word: '가면 안 된다', meaning: '不能去' }
      ]
    },
    {
      id: 'int_017',
      form: '-로/-으로/-로써',
      title: '介词工具/方式/原因',
      category: '高级助词',
      definition: '表示工具、手段、方式或原因',
      meaning: '用...、以...、以...的身份',
      partOfSpeech: '助词',
      examples: [
        {
          korean: '펜으로 글을 써요.',
          chinese: '用笔写字。',
          situation: '日常'
        },
        {
          korean: '선생님으로써 할 말이 있어요.',
          chinese: '作为老师我有话要说。',
          situation: '正式'
        }
      ],
      notes: '-로 最常用，-으로 在子音末尾，-로써 表身份/资格',
      expandVocab: [
        { word: '손으로', meaning: '用手' },
        { word: '차로', meaning: '用车' }
      ]
    },
    {
      id: 'int_018',
      form: '-다고 해서/-다고 해도',
      title: '转折/不能为理由',
      category: '连接词扩展',
      definition: '某事虽然是真实的，但不能成为做另一件事的理由',
      meaning: '虽然...但是...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '똑똑하다고 해서 성공하는 건 아니다.',
          chinese: '虽然聪明，但这不意味着会成功。',
          situation: '书面'
        }
      ],
      notes: '表示转折关系，前提不足以支撑结论',
      expandVocab: [
        { word: '열심히 한다고 해서', meaning: '虽然努力但...' }
      ]
    }
  ],
  advanced: [
    {
      id: 'adv_010',
      form: '-기는커녕/-ㄹ 줄알다',
      title: '远非/了解',
      category: '惯用型扩展',
      definition: '-기는커녕 表非常遥远，-ㄹ 줄알다表了解某人的性格',
      meaning: '根本没有...、我知道他会...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '밥을 먹기는커녕 물도 못 마셨어.',
          chinese: '别说吃饭了，连水都没喝过。',
          situation: '日常'
        },
        {
          korean: '이 사람이 거짓말을 할 줄 알았어.',
          chinese: '我知道这个人会说谎。',
          situation: '日常'
        }
      ],
      notes: '-기는커녕 表示程度差异很大，-ㄹ 줄 알다表理解/预期',
      expandVocab: [
        { word: '하기는커녕', meaning: '别说做了' },
        { word: '올 줄 알았어', meaning: '知道他会来' }
      ]
    },
    {
      id: 'adv_011',
      form: '-지 말다/-지 말고',
      title: '否定命令',
      category: '惯用型扩展',
      definition: '表示禁止或建议不要做某事',
      meaning: '别...、不要...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '이 음식을 먹지 마세요.',
          chinese: '别吃这个食物。',
          situation: '礼貌禁止'
        },
        {
          korean: '가지 말고 여기에 있어.',
          chinese: '别去，待在这里。',
          situation: '命令'
        }
      ],
      notes: '-지 말다 更正式，-지 말고 有转折意味',
      expandVocab: [
        { word: '울지 마', meaning: '别哭' },
        { word: '보지 마세요', meaning: '别看' }
      ]
    },
    {
      id: 'adv_012',
      form: '-ㄹ 수 있다/-ㄹ 수 없다/-지 못하다',
      title: '能力/可能性',
      category: '复杂句型',
      definition: '表示某人是否有能力或有可能做某事',
      meaning: '能...、可以...、不能...、做不了...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '나는 한국어를 할 수 있어요.',
          chinese: '我会说韩语。',
          situation: '能力'
        },
        {
          korean: '이건 할 수 없어.',
          chinese: '这个做不了。',
          situation: '不可能'
        },
        {
          korean: '시간 때문에 가지 못했어.',
          chinese: '因为时间问题去不了。',
          situation: '被动无法'
        }
      ],
      notes: '-ㄹ 수 없다表可能性不存在，-지 못하다表被迫无法',
      expandVocab: [
        { word: '할 수 있다', meaning: '能做' },
        { word: '갈 수 없다', meaning: '不能去' },
        { word: '오지 못했다', meaning: '没能来' }
      ]
    },
    {
      id: 'adv_013',
      form: '-고 난다/-고 나서',
      title: '完成后/之后',
      category: '复杂句型',
      definition: '表示某事完成后，紧接着做另一件事',
      meaning: '...完了以后、...以后',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '밥을 먹고 나서 영화 봤어.',
          chinese: '吃完饭以后看了电影。',
          situation: '日常'
        },
        {
          korean: '공부를 끝내고 나니 피곤했다.',
          chinese: '学习完了以后很累。',
          situation: '书面'
        }
      ],
      notes: '两者都表时间顺序，-고 나서 更自然，-고 나니 表伴随结果',
      expandVocab: [
        { word: '왔다 가고 나서', meaning: '来过之后' },
        { word: '먹고 나니까', meaning: '吃完之后，结果...' }
      ]
    },
    {
      id: 'adv_014',
      form: '-지 않다/-지 않니까',
      title: '否定/反诘',
      category: '文学语法',
      definition: '-지 않다 是否定形，-지 않니까 是反诘否定',
      meaning: '不...、难道不...、不是吗',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '나는 한국에 가지 않는다.',
          chinese: '我不去韩国。',
          situation: '否定陈述'
        },
        {
          korean: '누가 알지 않니?',
          chinese: '谁不知道呢？',
          situation: '修辞疑问'
        }
      ],
      notes: '-지 않다 是陈述否定，-지 않니까 带有反诘、强调意味',
      expandVocab: [
        { word: '모르지 않니', meaning: '难道不知道' },
        { word: '좋지 않다', meaning: '不好' }
      ]
    },
    {
      id: 'adv_015',
      form: '-거나/-거나',
      title: '选择/列举',
      category: '高级连接词',
      definition: '表示给出两个或更多选择，或列举多个例子',
      meaning: '或者...或者...、...或者...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '우유나 주스나 마셔.',
          chinese: '要么喝牛奶，要么喝果汁。',
          situation: '给予选择'
        },
        {
          korean: '공부하거나 쉬어.',
          chinese: '要么学习，要么休息。',
          situation: '两个选项'
        }
      ],
      notes: '可以与同一个动词重复使用，表示多个选择',
      expandVocab: [
        { word: '가거나 오거나', meaning: '要么去要么来' },
        { word: '하거나 말거나', meaning: '做或不做' }
      ]
    },
    {
      id: 'adv_016',
      form: '-음에도 불구하고/-ㄹ지라도',
      title: '让步/尽管',
      category: '文学语法',
      definition: '表示前提不能阻止后果发生，表示让步',
      meaning: '尽管...还是...、即使...也...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '날씨가 좋지 않음에도 불구하고 우리는 갔다.',
          chinese: '尽管天气不好我们还是去了。',
          situation: '正式书面'
        },
        {
          korean: '어렵을지라도 포기하지 마.',
          chinese: '即使困难也不要放弃。',
          situation: '鼓励'
        }
      ],
      notes: '-음에도 불구하고 最正式，-ㄹ지라도 较常见',
      expandVocab: [
        { word: '피곤함에도 불구하고', meaning: '尽管疲劳' },
        { word: '잘못할지라도', meaning: '即使出错' }
      ]
    },
    {
      id: 'adv_017',
      form: '-곤 했다/-곤 한다',
      title: '习惯性过去/现在动作',
      category: '惯用型扩展',
      definition: '表示过去或现在经常反复进行的动作或习惯',
      meaning: '常常...、经常...',
      partOfSpeech: '惯用型',
      examples: [
        {
          korean: '그는 매일 아침 산책을 곤 했다.',
          chinese: '他过去常常每天早上散步。',
          situation: '书面/文学'
        },
        {
          korean: '나는 여름에 아이스크림을 곤 한다.',
          chinese: '我夏天经常吃冰淇淋。',
          situation: '现在习惯'
        }
      ],
      notes: '带有文学或文雅色彩，日常口语较少',
      expandVocab: [
        { word: '자곤 했다', meaning: '过去常睡' },
        { word: '놀곤 했어', meaning: '过去常玩' }
      ]
    }
  ]
};

export default extendedGrammarData;
