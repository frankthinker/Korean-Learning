// 扩展语法数据库 - 包含更多中级和高级语法点（可合并到主数据库）

export const extendedGrammarData = {
  intermediate: [
    {
      id: 'int_004',
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
      id: 'int_005',
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
      id: 'int_006',
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
      id: 'int_007',
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
      id: 'int_008',
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
      id: 'int_009',
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
      id: 'int_010',
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
      id: 'int_011',
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
      id: 'int_012',
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
    },
    {
      id: 'int_013',
      form: '-어/아 버리다',
      title: '完全、彻底',
      category: '词尾变化',
      definition: '表示动作完全完成或遗憾地完成，强调结果的彻底性',
      meaning: '彻底...、完全...、不幸地...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '시간이 다 가버렸어요.',
          chinese: '时间都过完了。',
          situation: '日常'
        },
        {
          korean: '물을 쏟아버렸어.',
          chinese: '不小心把水打翻了。',
          situation: '日常'
        }
      ],
      notes: '表示完全性或不可挽回的遗憾',
      expandVocab: [
        { word: '잊어버렸다', meaning: '完全忘了' },
        { word: '먹어버렸다', meaning: '全部吃了' }
      ]
    },
    {
      id: 'int_014',
      form: '-으면서',
      title: '同时、一边...一边',
      category: '连接词扩展',
      definition: '表示两个动作同时进行或相互矛盾的状态',
      meaning: '同时...、一边...一边...',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '음악을 들으면서 공부해요.',
          chinese: '一边听音乐一边学习。',
          situation: '日常'
        },
        {
          korean: '웃으면서 울었어.',
          chinese: '一边笑一边哭了。',
          situation: '感情'
        }
      ],
      notes: '表示同时发生的两个行为',
      expandVocab: [
        { word: '보면서', meaning: '一边看' },
        { word: '생각하면서', meaning: '一边思考' }
      ]
    },
    {
      id: 'int_015',
      form: '-어/아 야 하다',
      title: '必须、不得不',
      category: '词尾变化',
      definition: '表示必须做某事或不得不做某事，强调义务性',
      meaning: '必须...、应该...、得...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '빨리 가야 해요.',
          chinese: '得快速去。',
          situation: '日常'
        },
        {
          korean: '숙제를 해야 한다.',
          chinese: '必须做作业。',
          situation: '正式'
        }
      ],
      notes: '强调必须性和义务性',
      expandVocab: [
        { word: '먹어야 한다', meaning: '得吃' },
        { word: '가야 돼', meaning: '得去' }
      ]
    },
    {
      id: 'int_016',
      form: '-었어야 하다',
      title: '本应该、应该已经',
      category: '词尾变化',
      definition: '表示过去本应该做但没有做的后悔',
      meaning: '本应该...、应该已经...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '더 공부했어야 했어.',
          chinese: '本来应该多学习的。',
          situation: '后悔'
        },
        {
          korean: '미리 말했어야 했다.',
          chinese: '本应该提前说。',
          situation: '遗憾'
        }
      ],
      notes: '表示对过去行为的遗憾和后悔',
      expandVocab: [
        { word: '했어야 했다', meaning: '本来应该做' },
        { word: '가졌어야 했어', meaning: '本来应该有' }
      ]
    },
    {
      id: 'int_017',
      form: '-든지',
      title: '无论、或者',
      category: '连接词扩展',
      definition: '表示无论...还是...，或者两个选择都可以',
      meaning: '无论...、...还是...、或者...',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '누가 오든지 상관없어.',
          chinese: '无论谁来都没关系。',
          situation: '日常'
        },
        {
          korean: '어디든지 가고 싶어요.',
          chinese: '我想去任何地方。',
          situation: '日常'
        }
      ],
      notes: '表示对象不限，任何都可以',
      expandVocab: [
        { word: '뭐든지', meaning: '任何东西' },
        { word: '언제든지', meaning: '任何时候' }
      ]
    },
    {
      id: 'int_018',
      form: '-는 동안',
      title: '期间、在...过程中',
      category: '词尾变化',
      definition: '表示某个时间段或状态持续期间',
      meaning: '在...期间、...中...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '학생이 공부하는 동안 엄마가 밥을 했어.',
          chinese: '学生在学习期间，妈妈在做饭。',
          situation: '日常'
        },
        {
          korean: '휴가 동안 많이 쉬었어.',
          chinese: '假期期间休息了很多。',
          situation: '日常'
        }
      ],
      notes: '强调时间范围内的持续性',
      expandVocab: [
        { word: '자는 동안', meaning: '睡觉期间' },
        { word: '있는 동안', meaning: '在...期间' }
      ]
    },
    {
      id: 'int_019',
      form: '-는 중',
      title: '正在...的时候',
      category: '词尾变化',
      definition: '表示动作正在进行中',
      meaning: '正在...、...中...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '회의 중이에요.',
          chinese: '正在开会。',
          situation: '正式'
        },
        {
          korean: '일하는 중에 전화가 왔어.',
          chinese: '工作中接到了电话。',
          situation: '日常'
        }
      ],
      notes: '强调动作的进行中状态',
      expandVocab: [
        { word: '먹는 중', meaning: '正在吃' },
        { word: '공부하는 중', meaning: '正在学习' }
      ]
    },
    {
      id: 'int_020',
      form: '-ㄹ 것 같다',
      title: '好像、似乎',
      category: '词尾变化',
      definition: '表示推测或感觉某事将要发生',
      meaning: '好像...、似乎...、大概...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '내일 비가 올 것 같아요.',
          chinese: '明天好像会下雨。',
          situation: '推测'
        },
        {
          korean: '그 사람이 화낼 것 같은데...',
          chinese: '那个人好像会生气。',
          situation: '感觉'
        }
      ],
      notes: '表示对未来的推测或预感',
      expandVocab: [
        { word: '할 것 같다', meaning: '好像要做' },
        { word: '올 것 같아', meaning: '好像会来' }
      ]
    },
    {
      id: 'int_021',
      form: '-은/ㄴ 것 같다',
      title: '好像已经',
      category: '词尾变化',
      definition: '表示已经完成或已经存在的推测',
      meaning: '好像已经...、似乎...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '그는 이미 떠난 것 같다.',
          chinese: '他好像已经离开了。',
          situation: '推测'
        },
        {
          korean: '문제가 해결된 것 같아요.',
          chinese: '问题似乎已经解决了。',
          situation: '观察'
        }
      ],
      notes: '表示过去完成的推测',
      expandVocab: [
        { word: '도착한 것 같다', meaning: '好像已到' },
        { word: '끝난 것 같다', meaning: '好像已完成' }
      ]
    },
    {
      id: 'int_022',
      form: '-는지',
      title: '是否、不知道是否',
      category: '词尾变化',
      definition: '表示疑问或不确定',
      meaning: '是否...、不知道...不知道...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '이게 맞는지 모르겠어요.',
          chinese: '不知道这是否正确。',
          situation: '日常'
        },
        {
          korean: '그가 올지 안 올지 모르겠다.',
          chinese: '不知道他是否会来。',
          situation: '不确定'
        }
      ],
      notes: '表示疑问、不确定或询问',
      expandVocab: [
        { word: '될지', meaning: '是否会成为' },
        { word: '할지', meaning: '是否做' }
      ]
    },
    {
      id: 'int_023',
      form: '-지 않아도 되다',
      title: '不必、无需',
      category: '词尾变化',
      definition: '表示不需要或可以不做某事',
      meaning: '不必...、无需...、可以不...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '일찍 일어나지 않아도 돼.',
          chinese: '不必早起。',
          situation: '日常'
        },
        {
          korean: '걱정하지 않아도 괜찮아.',
          chinese: '无需担心。',
          situation: '安慰'
        }
      ],
      notes: '表示可选性，不是强制',
      expandVocab: [
        { word: '가지 않아도 된다', meaning: '可以不去' },
        { word: '하지 않아도 돼', meaning: '可以不做' }
      ]
    },
    {
      id: 'int_024',
      form: '-건',
      title: '无论什么/谁/哪里',
      category: '连接词扩展',
      definition: '表示无论哪个，任何都可以',
      meaning: '无论...、...哪个...、任何...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '누가 하건 상관없어.',
          chinese: '谁做都没关系。',
          situation: '日常'
        },
        {
          korean: '어디로 가건 함께 갈게.',
          chinese: '无论去哪里，我都陪你。',
          situation: '日常'
        }
      ],
      notes: '表示选择的灵活性',
      expandVocab: [
        { word: '뭐하건', meaning: '无论做什么' },
        { word: '누구건', meaning: '无论谁' }
      ]
    },
    {
      id: 'int_025',
      form: '-으로',
      title: '材料、手段、原因、方法',
      category: '高级助词',
      definition: '表示材料、工具、手段或原因',
      meaning: '用...、以...、...为...',
      partOfSpeech: '助词',
      examples: [
        {
          korean: '펜으로 글을 써요.',
          chinese: '用笔写字。',
          situation: '日常'
        },
        {
          korean: '밀가루로 빵을 만들어요.',
          chinese: '用面粉做面包。',
          situation: '日常'
        }
      ],
      notes: '表示工具或材料的关键助词',
      expandVocab: [
        { word: '손으로', meaning: '用手' },
        { word: '차로', meaning: '用车' }
      ]
    },
    {
      id: 'int_026',
      form: '-있습니다',
      title: '存在、拥有（敬语）',
      category: '词尾变化',
      definition: '表示存在某事物或拥有某物的敬语形式',
      meaning: '有...、存在...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '책상 위에 책이 있습니다.',
          chinese: '书桌上有书。',
          situation: '正式'
        },
        {
          korean: '한국에는 많은 산이 있습니다.',
          chinese: '韩国有很多山。',
          situation: '正式'
        }
      ],
      notes: '敬语形式，用于正式场合',
      expandVocab: [
        { word: '있었습니다', meaning: '有过（敬语过去）' },
        { word: '있습니까', meaning: '有吗（敬语疑问）' }
      ]
    },
    {
      id: 'int_027',
      form: '-이야',
      title: '强调',
      category: '词尾变化',
      definition: '用于强调主题或反驳',
      meaning: '啊、嘛、才...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '나야말로 가장 열심히 한 사람이야.',
          chinese: '我才是最努力的人。',
          situation: '强调'
        },
        {
          korean: '이것이야말로 최고야.',
          chinese: '这才是最好的。',
          situation: '赞同'
        }
      ],
      notes: '用于强调观点或反驳',
      expandVocab: [
        { word: '이거야', meaning: '这个啦' },
        { word: '나야', meaning: '我啦' }
      ]
    },
    {
      id: 'int_028',
      form: '-다고 하다',
      title: '说、据说',
      category: '词尾变化',
      definition: '表示间接引语，传述他人的话',
      meaning: '说...、据说...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '그는 내일 온다고 했어.',
          chinese: '他说明天来。',
          situation: '日常'
        },
        {
          korean: '선생님이 시험이 어렵다고 했어.',
          chinese: '老师说考试很难。',
          situation: '学校'
        }
      ],
      notes: '用于转述他人的话',
      expandVocab: [
        { word: '좋다고 했다', meaning: '说好的' },
        { word: '못 간다고 했어', meaning: '说不能去' }
      ]
    },
    {
      id: 'int_029',
      form: '-로 인해',
      title: '因为、由于',
      category: '连接词扩展',
      definition: '表示原因或结果的正式表达',
      meaning: '因为...、由于...、由...造成',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '태풍으로 인해 피해가 많았다.',
          chinese: '由于台风造成了很多损害。',
          situation: '正式'
        },
        {
          korean: '교통 체증으로 인해 늦었어.',
          chinese: '由于交通堵塞所以迟到了。',
          situation: '日常'
        }
      ],
      notes: '较正式的因果表达',
      expandVocab: [
        { word: '실수로 인해', meaning: '由于错误' },
        { word: '질병으로 인해', meaning: '由于疾病' }
      ]
    },
    {
      id: 'int_030',
      form: '-일 뿐',
      title: '只是、仅仅',
      category: '词尾变化',
      definition: '表示限制范围，只限于...程度',
      meaning: '只是...、仅仅...、不过...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '이것은 생각일 뿐이야.',
          chinese: '这只是个想法。',
          situation: '日常'
        },
        {
          korean: '학생일 뿐 다른 것은 모르겠어.',
          chinese: '只是学生，其他的我不知道。',
          situation: '谦虚'
        }
      ],
      notes: '表示限制和谦虚',
      expandVocab: [
        { word: '말일 뿐', meaning: '只是说说' },
        { word: '일 뿐이다', meaning: '仅此而已' }
      ]
    },
    {
      id: 'int_031',
      form: '-을수록',
      title: '越...越',
      category: '连接词扩展',
      definition: '表示程度的递进关系',
      meaning: '越...越...',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '공부할수록 더 어려워진다.',
          chinese: '越学习越觉得难。',
          situation: '日常'
        },
        {
          korean: '알수록 더 좋아진다.',
          chinese: '越了解越喜欢。',
          situation: '感受'
        }
      ],
      notes: '强调程度的逐步增加',
      expandVocab: [
        { word: '높을수록', meaning: '越高' },
        { word: '많을수록', meaning: '越多' }
      ]
    },
    {
      id: 'int_032',
      form: '-는 바람에',
      title: '因为...导致',
      category: '连接词扩展',
      definition: '表示因为某事的发生而导致不幸的结果',
      meaning: '因为...导致...、由于...结果...',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '실수하는 바람에 시험을 떨어졌어.',
          chinese: '因为犯错导致考试失败。',
          situation: '遗憾'
        },
        {
          korean: '길을 잃는 바람에 많이 늦었다.',
          chinese: '因为迷路结果迟到了很多。',
          situation: '日常'
        }
      ],
      notes: '通常带有负面或遗憾的含义',
      expandVocab: [
        { word: '잘못 알았는 바람에', meaning: '因为理解错导致' },
        { word: '깜빡하는 바람에', meaning: '因为忘记导致' }
      ]
    }
  ],
  advanced: [
    {
      id: 'adv_003',
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
      id: 'adv_004',
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
      id: 'adv_005',
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
      id: 'adv_006',
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
      id: 'adv_007',
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
      id: 'adv_008',
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
      id: 'adv_009',
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
      id: 'adv_010',
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
    },
    {
      id: 'adv_011',
      form: '-아/어 지다',
      title: '变成、变得',
      category: '高级连接词',
      definition: '表示状态的自然变化过程',
      meaning: '变成...、变得...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '세상이 빠르게 변해지고 있어요.',
          chinese: '世界在快速变化。',
          situation: '观察'
        },
        {
          korean: '나이가 들면서 얼굴이 주름져간다.',
          chinese: '随着年龄增长脸上出现皱纹。',
          situation: '自然现象'
        }
      ],
      notes: '表示自然而然的状态变化',
      expandVocab: [
        { word: '나빠지다', meaning: '变坏' },
        { word: '좋아지다', meaning: '变好' }
      ]
    },
    {
      id: 'adv_012',
      form: '-아/어 놓다',
      title: '预先做、提前完成',
      category: '高级连接词',
      definition: '表示提前完成或为将来做准备',
      meaning: '提前...、预先...、已经...了',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '미리 준비해놓았어요.',
          chinese: '提前准备好了。',
          situation: '计划性'
        },
        {
          korean: '밥을 데워놨으니까 먹어요.',
          chinese: '已经热好饭了，吃吧。',
          situation: '日常'
        }
      ],
      notes: '强调事先完成或预备状态',
      expandVocab: [
        { word: '적어놓다', meaning: '记下来' },
        { word: '청소해놓다', meaning: '打扫好了' }
      ]
    },
    {
      id: 'adv_013',
      form: '-기는 하지만',
      title: '虽然...但是',
      category: '让步表达',
      definition: '表示承认前面的事实，但转折后面的观点',
      meaning: '虽然...但是...、承认...但是...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '맛있기는 하지만 너무 비싸요.',
          chinese: '虽然好吃但是太贵了。',
          situation: '转折'
        },
        {
          korean: '어렵기는 하지만 노력해봐야 해요.',
          chinese: '虽然困难但是要努力尝试。',
          situation: '鼓励'
        }
      ],
      notes: '表示承认但保留意见的让步表达',
      expandVocab: [
        { word: '좋기는 한데', meaning: '虽然好但是' },
        { word: '크기는 한데', meaning: '虽然大但是' }
      ]
    },
    {
      id: 'adv_014',
      form: '-은/ㄴ 지',
      title: '时间经过',
      category: '时间表达',
      definition: '表示某事发生后经过的时间',
      meaning: '自从...以来、已经...了、...有多久',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '한국에 온 지 3년이 되었어요.',
          chinese: '来韩国已经3年了。',
          situation: '时间描述'
        },
        {
          korean: '졸업한 지 10년이 지났어요.',
          chinese: '毕业已经10年了。',
          situation: '回忆'
        }
      ],
      notes: '用于表示经过的时间长度',
      expandVocab: [
        { word: '만난 지', meaning: '认识有多久' },
        { word: '떠난 지', meaning: '离开有多久' }
      ]
    },
    {
      id: 'adv_015',
      form: '-아/어 하다',
      title: '使役、让...做',
      category: '使役表达',
      definition: '表示某人使另一个人做某事或导致某种状态',
      meaning: '让...、使...、导致...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '아이가 엄마를 웃게 해요.',
          chinese: '孩子让妈妈笑。',
          situation: '使役'
        },
        {
          korean: '이 책이 나를 슬프게 했어요.',
          chinese: '这本书让我伤心。',
          situation: '导致状态'
        }
      ],
      notes: '表示导致或让某人/某物改变状态',
      expandVocab: [
        { word: '생각하게 하다', meaning: '让...思考' },
        { word: '화나게 하다', meaning: '让...生气' }
      ]
    },
    {
      id: 'adv_016',
      form: '-을/ㄹ지라도',
      title: '即使...也',
      category: '让步表达',
      definition: '表示假设某情况发生也不改变结果',
      meaning: '即使...也...、尽管...还是...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '비가 오지라도 가야 해요.',
          chinese: '即使下雨也要去。',
          situation: '坚持'
        },
        {
          korean: '힘들지라도 끝까지 할 거야.',
          chinese: '即使困难也要坚持到底。',
          situation: '决心'
        }
      ],
      notes: '强调不顾困难也要做某事',
      expandVocab: [
        { word: '틀렸을지라도', meaning: '即使错了' },
        { word: '반대할지라도', meaning: '即使反对' }
      ]
    },
    {
      id: 'adv_017',
      form: '-기 때문에',
      title: '因为...所以',
      category: '因果关系',
      definition: '表示原因和理由的正式表达',
      meaning: '因为...、由于...、所以...',
      partOfSpeech: '连接词',
      examples: [
        {
          korean: '바쁘기 때문에 못 갔어요.',
          chinese: '因为忙所以没去。',
          situation: '解释'
        },
        {
          korean: '날씨가 좋기 때문에 산에 갔어요.',
          chinese: '因为天气好所以去了山里。',
          situation: '原因'
        }
      ],
      notes: '最正式的因果表达方式',
      expandVocab: [
        { word: '늦기 때문에', meaning: '因为迟到' },
        { word: '없기 때문에', meaning: '因为没有' }
      ]
    },
    {
      id: 'adv_018',
      form: '-는 한',
      title: '只要...就、即使...也',
      category: '条件表达',
      definition: '表示某状态持续期间的条件',
      meaning: '只要...就...、在...期间...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '사람이 사는 한 어딜 가든 자주 만날 수 있어요.',
          chinese: '只要活着，无论去哪里都能经常见面。',
          situation: '哲学'
        },
        {
          korean: '이 회사가 있는 한 안심이 돼요.',
          chinese: '只要这家公司存在就放心。',
          situation: '保证'
        }
      ],
      notes: '表示持续条件下的结果',
      expandVocab: [
        { word: '있는 한', meaning: '只要存在' },
        { word: '살아있는 한', meaning: '只要活着' }
      ]
    },
    {
      id: 'adv_019',
      form: '-더라도',
      title: '即使...也',
      category: '让步表达',
      definition: '表示假设情景下也要如何',
      meaning: '即使...也...、尽管...仍然...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '실패하더라도 다시 시작할 거예요.',
          chinese: '即使失败也要重新开始。',
          situation: '决心'
        },
        {
          korean: '늦더라도 안 하는 것보다 낫지요.',
          chinese: '迟到也比不做好。',
          situation: '劝说'
        }
      ],
      notes: '常用于表示坚决的态度',
      expandVocab: [
        { word: '힘들더라도', meaning: '即使困难' },
        { word: '비오더라도', meaning: '即使下雨' }
      ]
    },
    {
      id: 'adv_020',
      form: '-을/ㄹ뿐 아니라',
      title: '不仅...而且',
      category: '递进表达',
      definition: '表示前面的内容不够，还要加上其他',
      meaning: '不仅...而且...、不只...还...',
      partOfSpeech: '词尾',
      examples: [
        {
          korean: '그는 똑똑할 뿐 아니라 착하다.',
          chinese: '他不仅聪明而且善良。',
          situation: '评价'
        },
        {
          korean: '이 책은 재미있을 뿐 아니라 유익하다.',
          chinese: '这本书不仅有趣而且有益。',
          situation: '推荐'
        }
      ],
      notes: '用于添加额外的积极特点',
      expandVocab: [
        { word: '아름다울 뿐 아니라', meaning: '不仅漂亮而且' },
        { word: '빠를 뿐 아니라', meaning: '不仅快而且' }
      ]
    }
  ]
};

export default extendedGrammarData;
