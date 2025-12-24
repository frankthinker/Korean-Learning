export const grammarAdditions = {
  beginner: [
    {
      id: 'beg_020',
      form: '-(으)ㄹ까요?',
      title: '建议与推测疑问句',
      category: '基础疑问',
      definition: '用于与听话者商量下一步行动或表达轻柔的推测，语气委婉而有礼貌。',
      meaning: '要不要...？/ 会不会...？',
      partOfSpeech: '词尾',
      tags: ['疑问句', '建议', '推测'],
      examples: [
        {
          korean: '우리 같이 점심을 먹을까요?',
          chinese: '我们要不要一起吃午饭？',
          situation: '与朋友商量'
        },
        {
          korean: '지금 출발할까요, 조금 더 기다릴까요?',
          chinese: '现在出发还是再等等呢？',
          situation: '讨论计划'
        },
        {
          korean: '비가 올까요?',
          chinese: '会下雨吗？',
          situation: '推测天气'
        }
      ],
      notes: '与“-나요?”相比语气更柔和，常用于征求意见或一起做某事的建议。用于推测时多与天气、情况等不确定信息搭配。',
      expandVocab: [
        { word: '갈까요?', meaning: '要不要去？' },
        { word: '볼까요?', meaning: '要不要看？' },
        { word: '할까요?', meaning: '要不要做？' },
        { word: '마실까요?', meaning: '要不要喝？' }
      ]
    },
    {
      id: 'beg_021',
      form: '-(으)ㄹ 거예요',
      title: '基础将来时/推测表达',
      category: '基础时态',
      definition: '表示计划将要发生的动作、说话者的意志或对未来情况的推测。',
      meaning: '会...、打算...、大概会...',
      partOfSpeech: '词尾',
      tags: ['将来时', '计划', '推测'],
      examples: [
        {
          korean: '저는 다음 달에 한국에 갈 거예요.',
          chinese: '我下个月要去韩国。',
          situation: '陈述计划'
        },
        {
          korean: '내일은 비가 올 거예요.',
          chinese: '明天大概会下雨。',
          situation: '推测天气'
        },
        {
          korean: '그 친구도 곧 도착할 거예요.',
          chinese: '那位朋友也快到了。',
          situation: '预测'
        }
      ],
      notes: '接在动词/形容词词干之后，词干以元音结尾时直接接-ㄹ 거예요，以辅音结尾时接-을 거예요。',
      expandVocab: [
        { word: '할 거예요', meaning: '会做' },
        { word: '먹을 거예요', meaning: '会吃' },
        { word: '볼 거예요', meaning: '会看' },
        { word: '갈 거예요', meaning: '会去' }
      ]
    },
    {
      id: 'beg_022',
      form: '-지 않다',
      title: '正式否定句型',
      category: '基础否定',
      definition: '在动词或形容词词干后加“-지 않다”表示“不...、没有...”，语气正式。',
      meaning: '不...、没有...',
      partOfSpeech: '词尾',
      tags: ['否定', '语气', '书面表达'],
      examples: [
        {
          korean: '저는 커피를 마시지 않아요.',
          chinese: '我不喝咖啡。',
          situation: '日常陈述'
        },
        {
          korean: '그 학생은 늦지 않습니다.',
          chinese: '那个学生不会迟到。',
          situation: '正式语体'
        },
        {
          korean: '오늘은 춥지 않네요.',
          chinese: '今天不冷啊。',
          situation: '口语观察'
        }
      ],
      notes: '口语中也可用“안 + 动词/形容词”的短否定形式，但-지 않다语气更完整，可用于书面语。',
      expandVocab: [
        { word: '가지 않다', meaning: '不去' },
        { word: '보지 않다', meaning: '不看' },
        { word: '좋아하지 않다', meaning: '不喜欢' },
        { word: '늦지 않다', meaning: '不迟到' }
      ]
    },
    {
      id: 'beg_023',
      form: '(이)랑/하고',
      title: '并列助词',
      category: '基础助词',
      definition: '连接两个以上的名词，表示与某人一起或列举多个对象，口语常用。',
      meaning: '与...、和...',
      partOfSpeech: '助词',
      tags: ['并列', '助词', '口语'],
      examples: [
        {
          korean: '친구랑 영화를 봤어요.',
          chinese: '和朋友一起看了电影。',
          situation: '口语'
        },
        {
          korean: '사과하고 바나나를 샀어요.',
          chinese: '买了苹果和香蕉。',
          situation: '列举'
        },
        {
          korean: '언니랑 여행 가요.',
          chinese: '和姐姐去旅行。',
          situation: '计划'
        }
      ],
      notes: '名词以元音结尾多用랑，以辅音结尾也可用이랑；“하고”适用任何场合，语气稍正式。',
      expandVocab: [
        { word: '친구랑', meaning: '和朋友' },
        { word: '가족하고', meaning: '和家人' },
        { word: '회사랑', meaning: '与公司' },
        { word: '선생님하고', meaning: '和老师' }
      ]
    },
    {
      id: 'beg_024',
      form: '-(으)로',
      title: '方向/手段助词',
      category: '方向助词',
      definition: '表示动作的方向、移动的目的地或使用的工具、材料。',
      meaning: '往...、向...、用/以...',
      partOfSpeech: '助词',
      tags: ['方向', '工具', '助词'],
      examples: [
        {
          korean: '학교로 가요.',
          chinese: '往学校去。',
          situation: '方向'
        },
        {
          korean: '젓가락으로 먹어요.',
          chinese: '用筷子吃。',
          situation: '手段'
        },
        {
          korean: '버스로 출근해요.',
          chinese: '坐公交上班。',
          situation: '交通'
        }
      ],
      notes: '以ㄹ结尾的名词后直接接-로，其余辅音用-으로。用于工具时与“으로/로”不同读音需注意收音。',
      expandVocab: [
        { word: '한국으로', meaning: '往韩国' },
        { word: '왼쪽으로', meaning: '向左' },
        { word: '펜으로', meaning: '用笔' },
        { word: '전철로', meaning: '坐地铁' }
      ]
    },
    {
      id: 'beg_025',
      form: 'A보다 B가 ...',
      title: '基础比较句型',
      category: '比较表达',
      definition: '用“보다”表示与基准对象相比，强调B在某方面更突出。',
      meaning: '比...更...',
      partOfSpeech: '助词',
      tags: ['比较', '程度', '形容词'],
      examples: [
        {
          korean: '한국어가 영어보다 어려워요.',
          chinese: '韩语比英语难。',
          situation: '比较难易'
        },
        {
          korean: '오늘이 어제보다 따뜻해요.',
          chinese: '今天比昨天暖和。',
          situation: '天气比较'
        },
        {
          korean: '언니보다 제가 키가 작아요.',
          chinese: '我比姐姐矮。',
          situation: '身高比较'
        }
      ],
      notes: '基准对象后接“보다”，核心信息放在后面主语B。可与副词“더”搭配强化程度：B가 A보다 더 ...',
      expandVocab: [
        { word: '보다 크다', meaning: '比...大' },
        { word: '보다 빠르다', meaning: '比...快' },
        { word: '보다 싸다', meaning: '比...便宜' },
        { word: '보다 예쁘다', meaning: '比...漂亮' }
      ]
    }
  ],
  intermediate: [
    {
      id: 'int_033',
      form: '-(으)ㄹ 뻔하다',
      title: '差点发生',
      category: '惯用表达',
      definition: '表示事情几乎发生但最终未发生，常带有惊险或庆幸的语气。',
      meaning: '差点...、险些...',
      partOfSpeech: '惯用表达',
      tags: ['差点', '回顾', '语气'],
      examples: [
        {
          korean: '버스에 치일 뻔했어요.',
          chinese: '差点被公交车撞到。',
          situation: '危险经历'
        },
        {
          korean: '회의에 늦을 뻔했어요.',
          chinese: '差点开会迟到。',
          situation: '职场'
        },
        {
          korean: '눈물이 날 뻔했어요.',
          chinese: '差点哭出来。',
          situation: '情绪'
        }
      ],
      notes: '谓语一般用过去式结尾。可与“거의”搭配强调：거의 ~할 뻔했다。',
      expandVocab: [
        { word: '넘어질 뻔하다', meaning: '差点摔倒' },
        { word: '잊어버릴 뻔하다', meaning: '差点忘记' },
        { word: '포기할 뻔하다', meaning: '差点放弃' },
        { word: '지각할 뻔하다', meaning: '差点迟到' }
      ]
    },
    {
      id: 'int_034',
      form: '-(으)ㄴ/는 척하다',
      title: '假装/装作',
      category: '惯用表达',
      definition: '表示假装成某种样子或装作不知道，常包含批判色彩。',
      meaning: '装作...、假装...',
      partOfSpeech: '惯用表达',
      tags: ['假装', '态度', '语用'],
      examples: [
        {
          korean: '모르는 척했어요.',
          chinese: '装作不知道。',
          situation: '回避'
        },
        {
          korean: '바쁜 척하지 마세요.',
          chinese: '别假装很忙。',
          situation: '提醒'
        },
        {
          korean: '학생들은 듣는 척만 했어요.',
          chinese: '学生们只是装作在听。',
          situation: '课堂描述'
        }
      ],
      notes: '谓语词干后接-는 척（进行式）或-은/ㄴ 척（完成/状态），可以加“모르는 척하다”固定搭配。',
      expandVocab: [
        { word: '아는 척', meaning: '装懂' },
        { word: '못 본 척', meaning: '装没看见' },
        { word: '피곤한 척', meaning: '装累' },
        { word: '웃는 척', meaning: '假笑' }
      ]
    },
    {
      id: 'int_035',
      form: '-고 말다',
      title: '最终发生/遗憾语气',
      category: '词尾变化',
      definition: '表示意料之外或遗憾的结果最终还是发生，带有不可逆转的语气。',
      meaning: '最终...、还是...了',
      partOfSpeech: '词尾',
      tags: ['结果', '遗憾', '完成'],
      examples: [
        {
          korean: '열심히 참았지만 결국 울고 말았어요.',
          chinese: '虽然拼命忍住，最终还是哭了。',
          situation: '情绪'
        },
        {
          korean: '다이어트를 하다가 야식을 먹고 말았어요.',
          chinese: '减肥中却还是吃了夜宵。',
          situation: '生活'
        },
        {
          korean: '실수를 하고 말아서 모두에게 사과했어요.',
          chinese: '最终犯了错，只好向大家道歉。',
          situation: '职场'
        }
      ],
      notes: '常与“결국, 끝내”搭配强调失控的结果；若与意志动词并用，可带有责备或自责。',
      expandVocab: [
        { word: '잊고 말다', meaning: '最终忘掉' },
        { word: '지고 말다', meaning: '还是输掉' },
        { word: '넘겨버리고 말다', meaning: '最终错过' },
        { word: '포기하고 말다', meaning: '终究放弃' }
      ]
    },
    {
      id: 'int_036',
      form: '-(으)ㄹ지도 모르다',
      title: '不确定推测',
      category: '连接词扩展',
      definition: '表达可能性较低但不能排除的推测，语气谨慎。',
      meaning: '也许会...、说不定...',
      partOfSpeech: '词尾',
      tags: ['推测', '谨慎语气', '假设'],
      examples: [
        {
          korean: '오늘 회의가 길어질지도 몰라요.',
          chinese: '今天的会议说不定会拉长。',
          situation: '职场'
        },
        {
          korean: '그 사람은 이미 출발했을지도 몰라요.',
          chinese: '那个人可能已经出发了。',
          situation: '猜测'
        },
        {
          korean: '비가 갑자기 올지도 몰라서 우산을 챙겼어요.',
          chinese: '怕突然下雨，所以带了伞。',
          situation: '防备'
        }
      ],
      notes: '常与“모르니까, 혹시”连用加强不确定语气；通常使用现在式或过去式推测。',
      expandVocab: [
        { word: '늦을지도 모르다', meaning: '可能会迟到' },
        { word: '실패할지도 모르다', meaning: '也许会失败' },
        { word: '돌아오지 않을지도 모르다', meaning: '说不定不会回来' },
        { word: '떨어질지도 모르다', meaning: '可能掉下来' }
      ]
    },
    {
      id: 'int_037',
      form: '-자마자',
      title: '一...就...',
      category: '连接词扩展',
      definition: '表示前一动作一结束马上接着发生下一动作，强调紧接顺序。',
      meaning: '一...就...',
      partOfSpeech: '连接词',
      tags: ['顺序', '时间', '连接词'],
      examples: [
        {
          korean: '집에 도착하자마자 샤워했어요.',
          chinese: '一到家就洗澡。',
          situation: '日常'
        },
        {
          korean: '문을 열자마자 손님이 들어왔어요.',
          chinese: '门一开客人就进来了。',
          situation: '服务场景'
        },
        {
          korean: '수업이 끝나자마자 도서관에 갔어요.',
          chinese: '下课后马上去了图书馆。',
          situation: '校园'
        }
      ],
      notes: '前后主语通常相同。与“-고 나서”相比更强调紧接发生的速度。',
      expandVocab: [
        { word: '앉자마자', meaning: '一坐下就...' },
        { word: '열자마자', meaning: '一打开就...' },
        { word: '끝나자마자', meaning: '一结束就...' },
        { word: '도착하자마자', meaning: '一到达就...' }
      ]
    },
    {
      id: 'int_038',
      form: '-(으)ㄴ/는 김에',
      title: '顺便利用机会',
      category: '复合概念',
      definition: '利用已经进行的动作机会顺便做别的，强调顺势而为。',
      meaning: '趁着...顺便...',
      partOfSpeech: '惯用表达',
      tags: ['顺便', '机会', '计划'],
      examples: [
        {
          korean: '시장에 간 김에 과일도 샀어요.',
          chinese: '去了市场就顺便买了水果。',
          situation: '购物'
        },
        {
          korean: '외출하는 김에 쓰레기도 버려 주세요.',
          chinese: '既然要出门，请顺便把垃圾扔了吧。',
          situation: '请求'
        },
        {
          korean: '서울에 온 김에 전시회를 봤어요.',
          chinese: '既然来首尔，就顺便看了展览。',
          situation: '旅行'
        }
      ],
      notes: '过去式-은/ㄴ 김에表示已经进行中的动作，-는 김에表示正在进行的动作。后句多为顺带行动。',
      expandVocab: [
        { word: '만난 김에', meaning: '既然见面' },
        { word: '쉬는 김에', meaning: '趁着休息' },
        { word: '가는 김에', meaning: '顺路去时' },
        { word: '왔다 김에', meaning: '既然来了' }
      ]
    }
  ],
  advanced: [
    {
      id: 'adv_021',
      form: '-(으)랴 -(으)랴',
      title: '忙乱并列表达',
      category: '复杂句型',
      definition: '交替列举两个以上需要同时处理的动作，体现忙碌不堪或应接不暇。',
      meaning: '一会儿要...一会儿要...、忙着...',
      partOfSpeech: '连接词',
      tags: ['并列', '强调', '口语强化'],
      examples: [
        {
          korean: '보고서를 쓰랴 전화 받으랴 정신이 없었어요.',
          chinese: '忙着写报告又要接电话，忙得不可开交。',
          situation: '职场抱怨'
        },
        {
          korean: '아이를 돌보랴 집안을 치우랴 하루가 금방 지나가요.',
          chinese: '照顾孩子又打扫家里，一天很快就过去。',
          situation: '生活杂务'
        },
        {
          korean: '시험 준비를 하랴 아르바이트를 하랴 체력이 버티질 않네요.',
          chinese: '备考又打工，体力吃不消。',
          situation: '学生生活'
        }
      ],
      notes: '一般与相似重要性的两个动作搭配，后面常接评价句如“정신이 없다”。',
      expandVocab: [
        { word: '준비하랴', meaning: '忙着准备' },
        { word: '정리하랴', meaning: '忙着整理' },
        { word: '알바하랴', meaning: '忙着打工' },
        { word: '연락하랴', meaning: '忙着联系' }
      ]
    },
    {
      id: 'adv_022',
      form: '-다시피 하다',
      title: '几乎/差不多达到',
      category: '惯用型扩展',
      definition: '表示动作或状态几乎达到某种程度，常与“먹다시피, 살다시피”组成固定搭配。',
      meaning: '几乎...、简直就像...',
      partOfSpeech: '惯用表达',
      tags: ['程度', '夸张', '文学'],
      examples: [
        {
          korean: '며칠 동안 굶다시피 했어요.',
          chinese: '好几天几乎没吃东西。',
          situation: '夸张陈述'
        },
        {
          korean: '회사에서 살다시피 하고 있어요.',
          chinese: '几乎住在公司里。',
          situation: '职场抱怨'
        },
        {
          korean: '우리는 매일 같이 붙어 지내다시피 했어요.',
          chinese: '我们几乎每天都腻在一起。',
          situation: '回忆'
        }
      ],
      notes: '常与副词“거의”并用，加强“近似”的意味，后面多接“했다/한다”等陈述。',
      expandVocab: [
        { word: '울다시피 하다', meaning: '几乎要哭' },
        { word: '붙어 지내다시피', meaning: '几乎形影不离' },
        { word: '버티다시피 하다', meaning: '硬撑着' },
        { word: '쓰러지다시피 하다', meaning: '几乎倒下' }
      ]
    },
    {
      id: 'adv_023',
      form: '-(으)랴마는',
      title: '让步转折的文学表达',
      category: '文学语法',
      definition: '前项承认现实或限制，后项表达不同意见或遗憾，语气雅致。',
      meaning: '虽说...但...、虽然...却...',
      partOfSpeech: '连接词',
      tags: ['让步', '文学', '对比'],
      examples: [
        {
          korean: '도와주랴마는 내 힘이 너무 약하구나.',
          chinese: '虽想帮忙，却力不从心。',
          situation: '抒情'
        },
        {
          korean: '이해하랴마는 쉽게 납득되지는 않는다.',
          chinese: '虽说想理解，却难以真正接受。',
          situation: '评论'
        },
        {
          korean: '기다리랴마는 끝내 오지 않았다.',
          chinese: '虽然守候，却终究没有来。',
          situation: '叙事'
        }
      ],
      notes: '多用于书面或演讲，后句常与现实结果形成对照。',
      expandVocab: [
        { word: '믿으랴마는', meaning: '虽想相信' },
        { word: '견디랴마는', meaning: '想忍耐却...' },
        { word: '웃으랴마는', meaning: '想笑却...' },
        { word: '가르치랴마는', meaning: '虽欲教导' }
      ]
    },
    {
      id: 'adv_024',
      form: '-(으)ㄴ 듯싶다',
      title: '文学式推测',
      category: '敬语体系',
      definition: '带有主观揣测与文学气息的表达，常用于散文或独白，隐含不确定。',
      meaning: '仿佛...、似乎...',
      partOfSpeech: '词尾',
      tags: ['推测', '描写', '文学'],
      examples: [
        {
          korean: '비가 곧 올 듯싶다.',
          chinese: '似乎要下雨了。',
          situation: '描写'
        },
        {
          korean: '그의 표정이 한층 부드러워진 듯싶다.',
          chinese: '他的表情似乎柔和了不少。',
          situation: '人物刻画'
        },
        {
          korean: '이 길은 끝이 없는 듯싶다.',
          chinese: '这条路仿佛没有尽头。',
          situation: '文学独白'
        }
      ],
      notes: '常与“마치, 왠지”搭配，表达不十分确定的主观感受。',
      expandVocab: [
        { word: '보이는 듯싶다', meaning: '似乎看得见' },
        { word: '느껴지는 듯싶다', meaning: '仿佛感觉到' },
        { word: '사라진 듯싶다', meaning: '像是消失了' },
        { word: '퍼지는 듯싶다', meaning: '似乎扩散开' }
      ]
    },
    {
      id: 'adv_025',
      form: '-(으)ㄹ세라',
      title: '惧怕某结果',
      category: '复杂句型',
      definition: '表示担心某事发生而采取行动，语气谨慎或焦虑，多用于文学或正式语境。',
      meaning: '唯恐...、担心...会...',
      partOfSpeech: '词尾',
      tags: ['担心', '先发制人', '正式语体'],
      examples: [
        {
          korean: '늦을세라 뛰어갔어요.',
          chinese: '怕迟到所以跑过去。',
          situation: '紧张'
        },
        {
          korean: '비밀이 새어 나갈세라 입을 굳게 다물었다.',
          chinese: '唯恐秘密泄露而紧闭嘴巴。',
          situation: '文学描写'
        },
        {
          korean: '아이들이 놀랄세라 조용히 문을 닫았다.',
          chinese: '怕孩子被吓到便轻轻关上门。',
          situation: '叙述'
        }
      ],
      notes: '常与“~ㄹ까 봐”意义接近，但-ㄹ세라更庄重、书面。',
      expandVocab: [
        { word: '다칠세라', meaning: '怕受伤' },
        { word: '잊을세라', meaning: '怕忘记' },
        { word: '흩어질세라', meaning: '怕散掉' },
        { word: '떨어질세라', meaning: '怕掉下来' }
      ]
    },
    {
      id: 'adv_026',
      form: '-(으)ㄴ/는 양',
      title: '仿佛...的样子',
      category: '文学语法',
      definition: '描写主体表现出的姿态仿佛怎样，多用于叙述文体以增加画面感。',
      meaning: '宛如...、好似...',
      partOfSpeech: '惯用表达',
      tags: ['比喻', '描写', '文学'],
      examples: [
        {
          korean: '모르는 양 고개를 돌렸다.',
          chinese: '装作不知似的扭过头。',
          situation: '描写'
        },
        {
          korean: '아무 일도 없는 양 웃어 보였다.',
          chinese: '若无其事般笑了笑。',
          situation: '叙事'
        },
        {
          korean: '비가 그친 양 하늘이 환해졌다.',
          chinese: '仿佛雨停了一样天空亮了起来。',
          situation: '景物描写'
        }
      ],
      notes: '常搭配“듯, 마냥”等副词强化拟态效果，可分别用过去式-은 양与现在式-는 양。',
      expandVocab: [
        { word: '아는 양', meaning: '好像知道似的' },
        { word: '듣는 양', meaning: '仿佛在听' },
        { word: '기다리는 양', meaning: '像在等一样' },
        { word: '웃는 양', meaning: '仿佛在笑' }
      ]
    }
  ],
  categories: {
    beginner: ['基础疑问', '基础时态', '基础否定', '方向助词', '比较表达'],
    intermediate: ['惯用表达', '词尾变化', '连接词扩展', '复合概念'],
    advanced: ['复杂句型', '惯用型扩展', '文学语法', '敬语体系']
  }
}
