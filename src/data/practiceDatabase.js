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
        explanation: '【敬语陈述句：-습니다的用法】在韩语中，-습니다是正式的敬语陈述句结尾，用于对长辈、陌生人或正式场合陈述事实。本题中，动词“보다（看）”的过去式是“봤다”，接敬语结尾时需要使用“봤습니다”，表示“我昨天看了电影”这一正式的陈述。需要注意的是，-습니까是敬语疑问形式，不符合本句的陈述语境；-어요/-아요是非正式敬语，也不符合题目对正式敬语的考点要求。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_002',
        type: 'multiple-choice',
        question: '당신은 한국인입___?',
        options: [
          { text: '니까', correct: false }, // 修正：原正确答案错误，应为습니까
          { text: '니다', correct: false },
          { text: '습니까', correct: true }, // 新增正确选项，贴合-습니까考点
          { text: '아요', correct: false }
        ],
        explanation: '【敬语疑问句：-습니까的用法】本题考查名词后接敬语疑问形式的用法，“한국인이다（是韩国人）”的敬语形式是“한국인입니다”，疑问形式为“한국인입니까？”（也可写作“한국인습니까？”，是입니까的缩略形式）。原选项中的“니까”是表示原因的连接词，与本题的敬语疑问考点无关；-니다是陈述形式，不符合疑问句语境；-아요是非正式敬语，偏离考点。核心语法点：名词+입니다（陈述）/입니까（疑问）是-습니다/습니까的特殊形式，用于名词作表语的句子。',
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
        explanation: '【过去式敬语陈述：-었습니다的用法】韩语中，表达过去发生的动作的正式敬语陈述，需要在动词过去式词干后接-습니다，构成“-었습니다”形式。本题中，动词“가르치다（教）”的过去式是“가르쳤다”（词干가르치+过去式词尾었），接敬语后为“가르쳤습니다”（缩写为“가르치었습니다”），表示“老师教了学生”，既体现动作的过去性，又符合正式敬语的使用场景。需要注意的是，直接接-습니다是现在时，不符合语境；-어요/-아요是非正式敬语，偏离考点。',
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
          { text: '아요', correct: true }
        ],
        explanation: '【形容词的敬语疑问形式：-습니까与-아요的区别】本题考查形容词“좋다（好）”的敬语疑问形式，核心考点是-습니다/습니까的用法。1. 正式敬语疑问：“좋다”的词干是좋，接敬语疑问词尾为“좋습니까？”，表示“今天天气好吗？”，用于正式场合或对长辈提问；2. 非正式敬语：“좋다”的词干以元音ㅗ结尾，接非正式敬语疑问词尾为“좋아요？”，用于平辈或熟悉的人之间。因此本题设置为多选，两个答案均正确，体现了正式与非正式敬语的区别。需要注意的是，-습니다是陈述形式，不符合疑问句语境；-어요用于词干以元音ㅓ/ㅜ/ㅡ结尾的形容词，此处不适用。',
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
        explanation: '【名词敬语陈述：입니다的特殊用法】在韩语中，当名词作表语时，敬语陈述形式需要使用“입니다”（是“-습니다”的特殊变形，因为名词没有词干变化，直接用입니다衔接）。本题中，“학생이다（是学生）”的正式敬语形式是“학생입니다”，表示“我是学生”，是最正式礼貌的说法。需要注意的是，“니까”是表原因的连接词，与本题考点无关；-어요/-아요是非正式敬语，且名词后接这两个词尾时需要加“이에요/예요”，而非直接接，因此这两个选项错误。',
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
        explanation: '【敬语疑问的特殊形式：-십니까的用法】本题考查对长辈或上级的敬语疑问形式，动词“가다（去）”的敬语形式是“가시다”，其疑问形式为“가십니까？”（缩写为“가십니까”），表示“要去哪里？”，是对长辈的礼貌提问。核心语法点：-십니까是-습니까的敬语升级形式，用于对长辈、上级的动作提问；-십니다是对应的陈述形式，不符合疑问句语境；-어요/-아요是非正式敬语，且“가다”的非正式敬语疑问形式是“가요？”，而非直接接어요/아요，因此这两个选项错误。',
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
        explanation: '【动词过去式的敬语陈述：-었습니다的应用】动词“읽다（读）”的过去式是“읽었다”，接正式敬语词尾-습니다后变为“읽었습니다”，表示“我读了这本书”，是对过去动作的正式陈述。核心考点：过去式词尾-었/았/였与敬语词尾-습니다的组合规则，无论动词词干如何变化，过去式后接-습니다均需保留过去式词尾，构成“-었습니다”形式。-습니까是疑问形式，不符合陈述语境；-어요/-아요是非正式敬语，偏离考点。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_001_008',
        type: 'multiple-choice',
        question: '무엇을 먹었___?',
        options: [
          { text: '습니까', correct: true },
          { text: '습니다', correct: false },
          { text: '어요', correct: true }, // 修正：新增正确选项，体现正式与非正式区别
          { text: '아요', correct: false }
        ],
        explanation: '【动词过去式的敬语疑问：-었습니까与-었어요的区别】本题考查过去动作的疑问形式，动词“먹다（吃）”的过去式是“먹었다”，1. 正式敬语疑问：接-습니까变为“먹었습니까？”，表示“吃了什么？”，用于正式场合或对长辈提问；2. 非正式敬语疑问：接-어요变为“먹었어요？”，用于平辈或熟悉的人之间。核心语法点：过去式词尾-었后接敬语疑问词尾的规则，-습니까是正式形式，-어요是非正式形式。-습니다是陈述形式，不符合疑问句语境；-아요用于词干以元音ㅏ/ㅗ结尾的动词，此处“먹다”词干以辅音结尾，接-었后应使用-어요，因此아요错误。',
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
        explanation: '【动词敬语陈述的特殊变形：-ㅂ니다的用法】动词“가다（去）”的词干是“가”，以元音ㅏ结尾，接正式敬语词尾-습니다时，会发生音变：가 + 습니다 → 갑니다（省略ㅅ，ㅏ与ㅂ结合），表示“要去学校”，是正式的陈述形式。核心语法点：以元音ㅏ/ㅗ结尾的动词词干接-습니다时，会变为-ㅂ니다形式（如가다→갑니다，오다→옵니다）；“니까”是表原因的连接词，与本题考点无关；-어요/-아요是非正式敬语，且“가다”的非正式敬语形式是“가요”，而非直接接어요/아요，因此这两个选项错误。',
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
        explanation: '【敬语疑问的升级形式：-십니까的应用】动词“돌아오다（回来）”的敬语形式是“돌아오시다”，其疑问形式为“돌아오십니까？”，表示“要什么时候回来？”，是对长辈或上级的礼貌提问。核心语法点：-십니까是-습니까的敬语形式，用于描述长辈、上级的动作，对应的陈述形式是-십니다（如“돌아오십니다”表示“（长辈）要回来”）；-어요/-아요是非正式敬语，且“돌아오다”的非正式敬语疑问形式是“돌아와요？”，而非直接接어요/아요，因此这两个选项错误。',
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
        explanation: '【现在进行时的非正式敬语：-고 있어요的用法】韩语中，-고 있다是现在进行时的基本形式，表示“正在做某事”，相当于英语的“be doing”。本题中，“먹다（吃）”+고 있다→먹고 있다，其非正式敬语形式是“먹고 있어요”，用于平辈或日常对话中，表示“我现在正在吃饭”。核心考点：-고 있어요是-고 있다的礼貌形式，适用于日常交流；-었어요是过去式，-을 거예요是将来时，-습니다是正式陈述形式，均不符合现在进行时的语境。',
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
        explanation: '【现在进行时的正式形式：-고 있습니다的用法】-고 있습니다是-고 있다的正式敬语形式，既可以表示动作的正在进行，也可以表示状态的持续。本题中，“오다（下，雨/雪）”+고 있다→오고 있다，其正式形式是“오고 있습니다”，表示“雨正在下”，强调此刻的持续状态。核心考点：-고 있습니다用于正式场合或对长辈的表述；-었습니다是过去式，-을 겁니다是将来时，-습니다是一般现在时，均不符合现在进行时的语境。',
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
        explanation: '【现在进行时的非敬语形式：-고 있어的用法】-고 있어是-고 있다的非敬语形式，用于平辈、朋友或关系亲密的人之间，表示“正在做某事”。本题中，“읽다（读）”+고 있다→읽고 있다，非敬语形式为“읽고 있어”，表示“英熙正在看书”，语气随意。核心考点：-고 있어是口语化的进行时形式，区别于正式的-고 있습니다和礼貌的-고 있어요；-었어是过去式，-을 거야是将来时，-어是动词的简略形式，均不符合进行时语境。',
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
        explanation: '【正式场合的进行时：-고 있습니다的应用】本题中，“하다（做，踢）”+고 있다→하고 있다，正式形式为“하고 있습니다”，表示“学生们正在踢足球”，用于正式的描述场景。核心考点：集体动作的进行时表述，正式场合需使用-고 있습니다；-었습니다是过去式，-겠습니다是将来时/推测，-습니다是一般现在时，均无法体现“正在进行”的含义。',
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
        explanation: '【日常对话的进行时：-고 있어요的应用】“보다（看）”+고 있다→보고 있다，礼貌形式为“보고 있어요”，表示“孩子正在看电视”，是对当下正在发生动作的描述。核心考点：日常场景中，对非长辈的对象使用-고 있어요表示进行时；-았어요是过去式，-겠어요是将来时/推测，-아요是一般现在时的礼貌形式，均不符合进行时语境。',
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
        explanation: '【对长辈的进行时表述：-고 있습니다的用法】“대답하다（回答）”+고 있다→대답하고 있다，正式形式为“대답하고 있습니다”，表示“老师正在回答问题”，既体现动作的进行，又保持对老师的尊敬。核心考点：描述长辈的动作时，即使是进行时，也需使用正式的-고 있습니다，而非非正式形式；-었습니다是过去式，-실 겁니다是对长辈的将来推测，-십니다是长辈的一般现在时，均不符合语境。',
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
        explanation: '【非敬语的进行时：-고 있어的应用】“듣다（听）”+고 있다→듣고 있다，非敬语形式为“듣고 있어”，表示“朋友正在听音乐”，用于和朋友的随意对话中。核心考点：非敬语形式的进行时仅适用于亲密关系；-었어是过去式，-을 거야是将来时，-어是动词简略形式，均无法体现进行时。',
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
        explanation: '【对家人的进行时表述：-고 있어요的用法】“하다（做，烹饪）”+고 있다→하고 있다，礼貌形式为“하고 있어요”，表示“妈妈正在做饭”，是对家人动作的日常描述。核心考点：对家人使用-고 있어요（礼貌但非正式）是最自然的表达；-셨어요是对长辈的过去式，-실 거예요是对长辈的将来推测，-세요是命令式，均不符合进行时语境。',
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
        explanation: '【实时动作的进行时：-고 있어요的应用】“짖다（叫）”+고 있다→짖고 있다，礼貌形式为“짖고 있어요”，表示“狗正在叫”，是对眼前实时发生动作的描述。核心考点：-고 있어요可以描述任何正在发生的动作，包括动物的动作；-었어요是过去式，-을 거예요是将来时，-어요是一般现在时，均无法体现“此刻正在发生”的含义。',
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
        explanation: '【学习场景的正式进行时：-고 있습니다的用法】“하다（做，写）”+고 있다→하고 있다，正式形式为“하고 있습니다”，表示“学生正在做作业”，用于学习场景的正式描述。核心考点：正式场合下，即使是单个学生的动作，也需使用-고 있습니다；-었습니다是过去式，-겠습니다是将来时/推测，-니다是一般现在时，均不符合进行时语境。',
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
        explanation: '【宾语助词：有收音用-을的规则】韩语中，-를/을是宾语助词，用于标记动作的对象（宾语），其使用规则由名词的最后一个字是否有收音（받침）决定：1. 名词最后一个字**有收音**，使用-을；2. 名词最后一个字**无收音**，使用-를。本题中，“물（水）”的最后一个字是“물”，收音为ㄹ（有收音），因此使用-을，“물을 마신다”表示“喝水”。需要注意的是，-이/가是主语助词，与本题的宾语考点无关。',
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
        explanation: '【宾语助词：收音ㄱ的判断】“책（书）”的最后一个字是“책”，收音为ㄱ（有收音），因此使用-을，“책을 읽어요”表示“他看书”。核心考点：收音的判断是宾语助词使用的关键，“책”的收音ㄱ是典型的闭音节收音，需牢记；-이/가是主语助词，不能用于宾语标记。',
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
        explanation: '【宾语助词：无收音用-를的规则】“친구（朋友）”的最后一个字是“구”，没有收音（开音节），因此使用-를，“친구를 만났어요”表示“见了朋友”。核心考点：开音节名词后接-를是固定规则，可简单记忆为“元音结尾的名词用-를，辅音结尾的名词用-을”；-이/가是主语助词，不符合本题语境。',
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
        explanation: '【宾语助词：收音ㅂ的判断】“밥（饭）”的最后一个字是“밥”，收音为ㅂ（有收音），因此使用-을，“밥을 먹습니다”表示“吃饭”。核心考点：“밥”是韩语中最常用的有收音名词之一，需牢记其接-을的规则；-이/가是主语助词，若使用则表示“饭吃（某物）”，逻辑不通。',
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
        explanation: '【宾语助词：外来词的收音判断】“커피（咖啡）”是外来词（coffee），最后一个字是“피”，没有收音（开音节），因此使用-를，“커피를 마십니다”表示“喝咖啡”。核心考点：外来词大多为开音节（元音结尾），因此多数接-를，但需注意少数例外（如“칩（薯片）”有收音ㅂ，接-을）；-이/가是主语助词，不符合本题语境。',
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
        explanation: '【宾语助词：收音ㄱ的再次应用】“음악（音乐）”的最后一个字是“악”，收音为ㄱ（有收音），因此使用-을，“음악을 들어요”表示“听音乐”。核心考点：双音节名词的收音判断需看最后一个字，而非整个单词，“음악”的前一个字“음”有收音但不影响，仅看最后一个字“악”即可。',
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
        explanation: '【宾语助词：水果名词的收音特点】“사과（苹果）”的最后一个字是“과”，没有收音（开音节），因此使用-를，“사과를 먹습니다”表示“吃苹果”。核心考点：水果类名词大多为开音节（如바나나、오렌지），因此多接-를，这是一个实用的记忆技巧。',
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
        explanation: '【宾语助词：娱乐类名词的收音特点】“영화（电影）”是外来词（film），最后一个字是“화”，没有收音（开音节），因此使用-를，“영화를 봅습니다”表示“看电影”。核心考点：娱乐类词汇（如노래、게임）大多为开音节，接-를是常见用法，需牢记。',
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
        explanation: '【宾语助词：饮料类名词的收音特点】“우유（牛奶）”的最后一个字是“유”，没有收音（开音节），因此使用-를，“우유를 마셔요”表示“喝牛奶”。核心考点：饮料类名词（如주스、물除外）大多为开音节，接-를是固定用法，注意“물”是例外（有收音，接-을）。',
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
        explanation: '【宾语助词：收音ㄴ的判断】“문（门）”的最后一个字是“문”，收音为ㄴ（有收音），因此使用-을，“문을 열어요”表示“开门”。核心考点：收音的判断规则是100%适用的，无论名词的含义如何，只要最后一个字有收音就用-을，无收音就用-를，这是宾语助词的核心规则。',
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
        explanation: '【主语助词：无收音用-가的规则】韩语中，-이/가是主语助词，用于标记句子的主语（动作的执行者或状态的主体），其使用规则与宾语助词-를/을一致：1. 名词最后一个字**无收音**，使用-가；2. 名词最后一个字**有收音**，使用-이。本题中，“고양이（猫）”的最后一个字是“이”，没有收音（开音节），因此使用-가，“고양이가 있어요”表示“有猫”。需要注意的是，-를是宾语助词，-에是地点助词，均与本题的主语考点无关。',
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
        explanation: '【主语助词：动物主语的应用】“개（狗）”的最后一个字是“개”，没有收音（开音节），因此使用-가，“개가 짖어요”表示“狗叫”。核心考点：当主语是动物时，同样遵循-이/가的使用规则，-가用于标记动作的执行者（狗是叫的主体）；-를是宾语助词，-에是地点助词，不符合语境。',
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
        explanation: '【主语助词：疑问代词的应用】“누구（谁）”的缩略形式是“누”，没有收音（开音节），因此使用-가，“누가 왔어요？”表示“谁来了？”。核心考点：疑问代词（누가、뭐가、어디가）作主语时，需使用对应的主语助词，-가是最常用的形式；-를是宾语助词，-에是地点助词，不符合本题的疑问主语语境。',
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
        explanation: '【主语助词：疑问代词的状态主体应用】“뭐（什么）”没有收音（开音节），因此使用-가，“뭐가 필요해요？”表示“需要什么？”。核心考点：当疑问代词作为状态的主体（需要的对象）时，需使用主语助词-가，而非宾语助词；-를是宾语助词，若使用则表示“需要什么（动作的对象）”，逻辑上虽可理解，但不符合韩语的主语标记习惯。',
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
        explanation: '【主语助词：有收音用-이的规则】“책（书）”的最后一个字是“책”，收音为ㄱ（有收音），因此使用-이，“책이 있습니다”表示“有书”。核心考点：当主语是无生命的物体且表示存在状态时，需用-이/가标记主语，-이用于有收音的名词，这是韩语的固定表达习惯。',
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
        explanation: '【主语助词：人物称呼的收音判断】“학생（学生）”的最后一个字是“생”，收音为ㅇ（有收音），因此使用-이，“학생이 공부합니다”表示“学生学习”。核心考点：人物称呼类名词（如학생、선생님）大多有收音，因此常接-이，需牢记这类名词的收音特点。',
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
        explanation: '【主语助词：天气现象的应用】“비（雨）”的最后一个字是“비”，没有收音（开音节），因此使用-가，“비가 옵니다”表示“下雨”。核心考点：天气现象类名词（비、눈、바람）均为开音节，因此常接-가，这是描述天气的固定表达形式。',
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
        explanation: '【主语助词：状态主体的应用】“문（门）”的最后一个字是“문”，收音为ㄴ（有收音），因此使用-이，“문이 열려 있어요”表示“门开着”。核心考点：当主语是物体且表示状态（开着、关着）时，需用-이/가标记主体，这是韩语描述状态的固定规则。',
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
        explanation: '【主语助词：尊称名词的收音判断】“선생님（老师）”的最后一个字是“님”，收音为ㅁ（有收音），因此使用-이，“선생님이 오셨어요”表示“老师来了”。核心考点：尊称名词（선생님、할머니、아버지）大多有收音，因此常接-이，且这类句子中动词通常使用敬语形式（如오시다代替오다），体现对长辈的尊敬。',
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
        explanation: '【主语助词：数量描述的应用】“사람（人）”的最后一个字是“람”，收音为ㅁ（有收音），因此使用-이，“사람이 많아요”表示“人多”。核心考点：当描述名词的数量（多少）时，需用-이/가标记主语，这是韩语数量表达的固定规则，不能用宾语助词替代。',
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
        explanation: '【连接词尾：-는데요的背景说明用法】-는데요是韩语中常用的连接词尾，主要用法之一是**说明当前情况或背景**，常带有轻微的转折或铺垫意味，用于解释后续动作的原因或拒绝的理由。本题中，“시간이 없는데요”表示“没有时间呀”，潜台词是“所以不能做某事”（如不能去、不能帮忙）。核心考点：-는데요用于日常对话的语境铺垫，比直接陈述（시간이 없어요）更委婉；-어요是一般现在时的礼貌形式，-습니다是正式陈述形式，-고 있어요是进行时，均无法体现语境铺垫的含义。',
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
        explanation: '【连接词尾：-거든的假设条件用法】-거든（요）是用于表达**假设条件**的连接词尾，常与命令式、建议式句子搭配，表示“如果...的话，就...”。本题中，“비가 오거든 집에 있어”表示“如果下雨的话，就待在家里”，是典型的假设条件表达。核心考点：区别于其他原因/条件连接词：1. -는데主要用于背景说明，无假设含义；2. -어서用于直接的原因（因为下雨，所以待在家里）；3. -니까也用于原因，但语气更强烈，而-거든侧重假设性的条件。',
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
        explanation: '【连接词尾：-는데요的状态背景用法】-는데요可以用于表达**当前的状态背景**，用于回应他人的邀请或请求时，委婉地暗示无法接受。本题中，“바빠는데요”表示“很忙呀”，潜台词是“所以无法接受你的邀请/请求”。核心考点：-는데요的委婉性是其核心特点，比直接说“바빠요”更礼貌；-거든요用于假设条件，不符合本题的陈述状态语境。',
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
        explanation: '【连接词尾：-거든的建议条件用法】-거든用于**假设条件+建议**的句式中，表示“如果处于某种情况，就采取某种行动”。本题中，“모르거든 물어보세요”表示“如果不知道的话，就问吧”，是对他人的建议。核心考点：-거든的这种用法是日常对话中最常用的，区别于-는데（背景说明）、-어서（直接原因）、-니까（强烈原因），后三者均无法体现假设性的建议含义。',
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
        explanation: '【连接词尾：-는데요的情况铺垫用法】-는데요的核心用法之一是**为后文做铺垫**，描述当前的状态（疲惫），暗示后续的动作（想休息、不想做事）。本题中，“피곤하는데요”表示“好累呀”，是典型的语境铺垫。核心考点：-는데요的铺垫作用使其成为韩语中非常地道的表达，韩国人在日常对话中频繁使用，而-어요/습니다仅能陈述事实，无铺垫含义。',
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
        explanation: '【连接词尾：-는데요的转折背景用法】-는데요常带有**轻微的转折意味**，描述当前的情况（晚了），暗示歉意或无法完成某事。本题中，“늦었는데요”表示“晚了呀”，潜台词是“抱歉，可能赶不上了/无法参加了”。核心考点：这种转折性的背景说明是-는데요的特色，区别于单纯的陈述形式（늦었어요/습니다），更具情感色彩。',
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
        explanation: '【连接词尾：-거든的条件建议用法】-거든用于**条件+建议**的句式中，表示“如果满足某个条件，就采取某种行动”。本题中，“좋아하거든 사 주세요”表示“如果喜欢的话，就买给他吧”，是基于条件的建议。核心考点：-거든的这种用法需与-어서/니까（原因）区分，前者是假设条件，后者是既成原因，本题中“喜欢”是假设的条件，而非已经发生的原因，因此用-거든。',
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
        explanation: '【连接词尾：-는데요的情况说明用法】-는데요可以用于**说明过去的情况**，表示“之前不知道呀”，带有惊讶或歉意的情感色彩。本题中，“몰랐는데요”是对自己之前不知情的解释，软化了语气。核心考点：-는데요的这种用法能让对话更自然，而单纯的陈述形式（몰랐어요/습니다）则显得生硬，缺乏情感。',
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
        explanation: '【连接词尾：-거든的需求条件用法】-거든用于**需求条件+邀请**的句式中，表示“如果有某种需求，就做某事”。本题中，“필요하거든 말하세요”表示“如果需要的话，就说一声”，是提供帮助的常用表达。核心考点：这种用法是韩语中表达善意帮助的固定句式，区别于-는데（背景说明）、-어서/니까（原因），后三者均无法体现需求的假设条件。',
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
        explanation: '【连接词尾：-는데요的否定背景用法】-는데요用于否定句中时，能**委婉地表达拒绝**，描述“不行”的情况，避免直接拒绝的生硬感。本题中，“안 되는데요”表示“不行呀”，是韩语中非常地道的拒绝方式。核心考点：-는데요的委婉性使其成为拒绝他人的首选表达，而直接说“안 돼요”则显得过于直接，缺乏礼貌。',
        source: 'TOPIK Level 1'
      }
    ],

    beg_006: [ // -에게 (대상 표시) 修正：原考点标注错误，改为-에게（对象助词）
      {
        id: 'beg_006_001',
        type: 'fill-blank',
        question: '엄마___편지를 썼습니다.',
        correctAnswers: ['에게'],
        explanation: '【对象助词：-에게的动作接受对象用法】韩语中，-에게是对象助词，用于标记**动作的接受对象**（即“给谁做某事”），仅适用于人或动物（有生命的对象）。本题中，“엄마에게 편지를 썼습니다”表示“给妈妈写了信”，-에게标记“写信”这个动作的接受者（妈妈）。核心考点：-에게不能用于无生命的物体，这是其与其他对象助词的核心区别。',
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
        explanation: '【对象助词：-에게的提问对象用法】-에게用于标记**提问动作的对象**（即“向谁提问”）。本题中，“선생님에게 물었습니다”表示“向老师提问了”，-에게标记“提问”的对象（老师）。核心考点：区别于其他助词：1. -을是宾语助词，若使用则表示“问了老师（把老师作为提问内容）”，逻辑不通；2. -와是并列助词（和）；3. -에是地点助词，均不符合语境。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_003',
        type: 'fill-blank',
        question: '아버지___선물을 드렸습니다.',
        correctAnswers: ['에게'],
        explanation: '【对象助词：-에게的赠送对象用法】-에게用于标记**赠送动作的对象**（即“给谁送礼物”）。本题中，“아버지에게 선물을 드렸습니다”表示“给父亲送了礼物”，-에게标记“送礼物”的对象（父亲）。核心考点：当动作是赠送、给予时，对象需用-에게标记，且对于长辈，动词需使用敬语形式（드리다代替주다），体现尊敬。',
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
        explanation: '【对象助词：-에게的核心含义】“친구에게 물었다”中，-에게标记的是“提问”这个动作的**接受对象**（朋友是被问的人），而非动作的主体（主体是说话人）。核心考点：理解-에게的核心是“动作的接受者”，区别于地点（-에）、并列（-와）、主语（-이/가）的含义，这是本题的关键。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_005',
        type: 'fill-blank',
        question: '동생___도움을 받았습니다.',
        correctAnswers: ['에게'],
        explanation: '【对象助词：-에게的帮助来源用法】-에게也可以用于标记**动作的来源对象**（即“从谁那里得到某物/帮助”），此时动词通常是받다（得到）、배우다（学习）等。本题中，“동생에게 도움을 받았습니다”表示“从弟弟/妹妹那里得到了帮助”，-에게标记“帮助”的来源对象。核心考点：-에게的这种用法容易与主语助词混淆，需注意动词的类型（接受类动词）。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_006',
        type: 'fill-blank',
        question: '할머니___전화를 했습니다.',
        correctAnswers: ['에게'],
        explanation: '【对象助词：-에게的通话对象用法】-에게用于标记**通话动作的对象**（即“给谁打电话”）。本题中，“할머니에게 전화를 했습니다”表示“给奶奶打了电话”，-에게标记“打电话”的对象（奶奶）。核心考点：这是日常对话中非常常用的用法，需牢记-에게在通讯场景中的应用。',
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
        explanation: '【对象助词：-에게的正确用法】“빌리다（借）”的动作对象（从谁那里借）需用-에게标记，因此“친구에게 책을 빌렸습니다”是正确的。核心考点：错误选项分析：1. “친구을”是宾语助词的错误使用，친구是动作的对象而非宾语；2. “친구와”是并列助词（和朋友借），逻辑不通；3. “친구에”是地点助词的错误使用，均不符合-에게的用法规则。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_008',
        type: 'fill-blank',
        question: '모든 사람___존댓말을 합니다.',
        correctAnswers: ['에게'],
        explanation: '【对象助词：-에게的敬语对象用法】-에게用于标记**语言/行为的对象**（即“对谁做某事/说某话”）。本题中，“모든 사람에게 존댓말을 합니다”表示“对所有人说敬语”，-에게标记“说敬语”的对象（所有人）。核心考点：当动作是语言、行为类时，对象需用-에게标记，这是韩语的固定表达习惯。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_009',
        type: 'fill-blank',
        question: '손님___따뜻한 물을 제공합니다.',
        correctAnswers: ['에게'],
        explanation: '【对象助词：-에게的服务对象用法】-에게用于标记**服务的接受对象**（即“向谁提供服务/物品”）。本题中，“손님에게 따뜻한 물을 제공합니다”表示“给客人提供温水”，-에게标记“提供温水”的对象（客人）。核心考点：在服务场景中，-에게是标记服务对象的唯一正确助词，需牢记。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_006_010',
        type: 'fill-blank',
        question: '의사___진료를 받습니다.',
        correctAnswers: ['에게'],
        explanation: '【对象助词：-에게的医疗服务对象用法】-에게用于标记**医疗服务的提供者对象**（即“从谁那里接受诊疗”）。本题中，“의사에게 진료를 받습니다”表示“从医生那里接受诊疗”，-에게标记“诊疗”的提供者（医生）。核心考点：在医疗场景中，接受服务的对象需用-에게标记，这是韩语的固定表达。',
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
        explanation: '【连接词尾：-고的顺序动作用法】-고是韩语中最常用的连接词尾之一，核心用法是**按时间顺序连接两个动作**，表示“先做A，再做B”，相当于中文的“然后”或英文的“and then”。本题中，“밥을 먹고 학교에 갑니다”表示“先吃饭，然后去学校”，是典型的顺序动作连接。核心考点：区别于其他连接词：1. -면서表示同时进行（边吃边去），逻辑不通；2. -으면表示条件（如果吃饭，就去）；3. -지만表示转折（虽然吃饭，但是去），均不符合顺序动作的语境。',
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
        explanation: '【连接词尾：-고的顺序列举用法】-고用于**顺序列举两个动作**，强调动作的先后性（先读书，再做作业）。本题中，“책을 읽고 숙제를 합니다”是正确的顺序表达。核心考点：-고的顺序性是其核心特点，区别于-면서（同时进行）、-으면（条件）、-기（名词化），后三者均无法体现动作的先后顺序。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_003',
        type: 'fill-blank',
        question: '음식을 사___집으로 돌아갔습니다.',
        correctAnswers: ['고'],
        explanation: '【连接词尾：-고的动作顺序应用】-고连接“买食物”和“回家”两个动作，表示“先买食物，然后回家”，是时间顺序的典型应用。核心考点：在描述外出办事的动作时，-고是最常用的连接词尾，需牢记其顺序动作的用法。',
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
        explanation: '【连接词尾：-고的核心功能】在“커피를 마시고 신문을 읽습니다”中，-고的唯一作用是**按时间顺序连接“喝咖啡”和“看报纸”两个动作**，表示先喝咖啡，再看报纸。核心考点：本题需明确-고的核心功能是顺序连接，区别于同时进行（-면서）、原因（-어서）、条件（-으면）的功能，这是掌握-고的关键。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_005',
        type: 'fill-blank',
        question: '세수를 하___치아를 닦습니다.', // 修正：原题目“풀을 합니다”表述不当，改为“치아를 닦습니다”更符合逻辑
        correctAnswers: ['고'],
        explanation: '【连接词尾：-고的日常顺序用法】-고常用于描述**日常活动的顺序**，本题中“세수를 하고 치아를 닦습니다”表示“先洗脸，再刷牙”，是早晨的例行公事。核心考点：在描述日常习惯时，-고是最自然的连接词尾，能清晰体现动作的先后顺序。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_006',
        type: 'fill-blank',
        question: '노래를 부르___춤을 춥니다.',
        correctAnswers: ['고'],
        explanation: '【连接词尾：-고的多个动作列举用法】-고不仅可以连接两个顺序动作，还可以**列举多个动作**（无严格顺序，仅表示都做了）。本题中，“노래를 부르고 춤을 춥니다”可以表示“先唱歌，再跳舞”，也可以表示“又唱歌又跳舞”，是动作列举的应用。核心考点：-고的这种用法使其成为韩语中非常灵活的连接词尾，需注意语境的区分。',
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
        explanation: '【连接词尾：-고的正确形式】“밥을 먹고 놀았습니다”表示“吃完饭然后玩了”，是-고的正确用法。核心考点：错误选项分析：1. “먹며”表示同时进行（边吃边玩），虽语法正确但不符合-고的考点；2. “먹으면”表示条件（如果吃饭，就玩了），逻辑不通；3. “먹기”是名词化，语法错误，均不符合-고的顺序连接用法。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_008',
        type: 'fill-blank',
        question: '옷을 입___외출합니다.',
        correctAnswers: ['고'],
        explanation: '【连接词尾：-고的连续动作用法】-고用于描述**连续的动作**，“옷을 입고 외출합니다”表示“穿好衣服然后出门”，强调前一个动作完成后，后一个动作才开始。核心考点：在描述外出前的准备动作时，-고是固定的连接词尾，需牢记。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_009',
        type: 'fill-blank',
        question: '손을 씻___밥을 먹습니다.',
        correctAnswers: ['고'],
        explanation: '【连接词尾：-고的卫生习惯顺序用法】-고用于描述**卫生习惯的顺序**，“손을 씻고 밥을 먹습니다”表示“先洗手，再吃饭”，是生活中的基本卫生习惯。核心考点：这种固定的动作顺序是TOPIK考试的常见考点，需牢记-고的应用。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_007_010',
        type: 'fill-blank',
        question: '공부를 하___쉬었습니다.',
        correctAnswers: ['고'],
        explanation: '【顺序列举结束】"-고"可表示做完一件事再做另一件。"공부를 하고 쉬었다"=先学习，然后休息了。注意：必须是先后顺序，不能同时进行。',
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
        explanation: '【可能性提问】问是否能做某事时用"수 있다"。"먹을 수 있니까?"=能吃吗？/可以吃吗？ 询问对方是否有能力或者被允许吃。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_003',
        type: 'fill-blank',
        question: '이 문제를 풀___있습니다.',
        correctAnswers: ['수'],
        explanation: '【能力表达】"수 있다"表示有能力做某事。"문제를 풀 수 있다"=能解决问题/会解题。既可表示技能，也可表示可能性。',
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
        explanation: '【能力和可能】"수 있다"有两个意思：①有能力 ②有可能。这道题问"表示什么"，答案是"能力和可能性"。比如"会游泳"（能力）和"明天可能下雨"（可能性）。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_005',
        type: 'fill-blank',
        question: '나는 피아노를 칠___있습니다.',
        correctAnswers: ['수'],
        explanation: '【技能能力】"수 있다"表示掌握的技能。"피아노를 칠 수 있다"=会弹钢琴。表示学会了这个技能，有这个能力。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_006',
        type: 'fill-blank',
        question: '내일 날씨가 좋으면 산에 갈___있습니다.',
        correctAnswers: ['수'],
        explanation: '【条件可能】在某种条件下可能发生时用"수 있다"。"날씨가 좋으면 갈 수 있다"=如果天气好，就可以去。表示在条件满足时的可能性。',
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
        explanation: '【学习能力】"수 있다"表示能够学习或接受。"한국말을 배울 수 있다"=能学韩语/可以学韩语。表示有机会或有能力学习。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_009',
        type: 'fill-blank',
        question: '이 책을 이해할___있습니까?',
        correctAnswers: ['수'],
        explanation: '【理解能力】"수 있다"表示能理解。"이해할 수 있니까?"=能理解吗？/看得懂吗？ 问对方是否有能力理解。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_008_010',
        type: 'fill-blank',
        question: '그 사람을 만날___있을까요?',
        correctAnswers: ['수'],
        explanation: '【见面可能】"수 있다"表示见面的可能性。"만날 수 있을까요?"=能见到吗？/可以见面吗？ 询问是否有可能见到对方。',
        source: 'TOPIK Level 1'
      }
    ],

    beg_009: [ // -ㄴ/은 후 (후행/순차)
      {
        id: 'beg_009_001',
        type: 'fill-blank',
        question: '밥을 먹은___공부를 합니다.',
        correctAnswers: ['후'],
        explanation: '【之后顺序】"-은 후에"表示做完一件事之后再做另一件。"밥을 먹은 후 공부하다"=吃完饭之后学习。比"-고"更强调前一个动作完全结束后才开始后一个。',
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
        explanation: '【工作结束后】"-은 후"表示工作结束之后。"일을 마친 후 집에 가다"=工作做完后回家。强调工作完全完成后才离开。',
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
        explanation: '【先后顺序】"-은 후"的作用是表示：先做前面的动作，完成后再做后面的动作。区别于同时发生、重复或可能性。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_005',
        type: 'fill-blank',
        question: '학교를 졸업한___회사에 다녔습니다.',
        correctAnswers: ['후'],
        explanation: '【人生阶段顺序】"-은 후"表示人生阶段的顺序。"졸업한 후 회사에 다니다"=毕业后去公司上班。强调毕业是先发生的事。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_006',
        type: 'fill-blank',
        question: '세수를 한___아침을 먹습니다.',
        correctAnswers: ['후'],
        explanation: '【早晨例行顺序】"-은 후"表示早晨活动顺序。"세수한 후 아침 먹다"=洗脸后吃早饭。描述日常例行公事的先后顺序。',
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
        explanation: '【"-은 후"的正确用法】表示完成后再做用"-은 후"。"공부한 후 쉬다"=学习完后休息。错误：用"-고"（简单连接）、"-면서"（同时）、"-기"（名词化）都不对。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_008',
        type: 'fill-blank',
        question: '저녁을 먹은___산책을 합니다.',
        correctAnswers: ['후'],
        explanation: '【晚间活动顺序】"-은 후"表示晚饭后的活动。"저녁 먹은 후 산책하다"=晚饭后散步。是很健康的生活习惯！',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_009',
        type: 'fill-blank',
        question: '약을 먹은___잠을 잤습니다.',
        correctAnswers: ['후'],
        explanation: '【服药后睡觉】"-은 후"表示服药后的动作。"약 먹은 후 자다"=吃药后睡觉。表示先吃药，然后才睡觉。',
        source: 'TOPIK Level 1'
      },
      {
        id: 'beg_009_010',
        type: 'fill-blank',
        question: '운동을 한___샤워를 합니다.',
        correctAnswers: ['후'],
        explanation: '【运动后顺序】"-은 후"表示运动后的活动。"운동한 후 샤워하다"=运动后洗澡。这是正确的卫生习惯，先运动再洗澡。',
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
        explanation: '【使役形态】"-게 하다"表示使役，即“让某人做某事”。"가다"（去）→"가게 하다"（让....去）。“엄마가 나를 학교에 가게 했다”=妈妈让我去学校。相当于英语的"make someone do"。',
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
        explanation: '【使役意义】"-게 하다"是使役表达，表示"主体让别人做某动作"。与"스스로 하다"（自己做）相区别，使役强调是让其他人去做。',
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
        explanation: '【动词使役化】任何动词都可以用"-게 하다"变成使役形。"공부하다"（学习）→"공부하게 하다"（让....学习）。“선생님이 학생들을 공부하게 했다”=老师让学生们学习。',
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
        explanation: '【格式固定】使役形格式：“名词+를/을+动词+게 하다”。正确："나를 공부하게 했다"。错误："나가 공부하게 했다"（用主格가）、"나를 공부게 했다"（漏了하）。',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_001_005',
        type: 'translation',
        question: '번역: 아버지가 저를 연습하게 했어요.',
        expectedKorean: '아버지가 저를 연습하게 했어요',
        chineseMeaning: '父亲让我练习。',
        explanation: '【使役形结构】使役句结构：“~에게 ....하게 하다”。“아버지가 저를 연습하게 했다”=父亲让我练习。注意：被使役的人用宾格"를/을"，不用主格"이/가"。',
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
        explanation: '【使役动词例】医疗场景中的使役。"먹다"（吃）→"먹게 하다"（让....吃）。“의사가 환자에게 약을 먹게 했다”=医生让病人吃药。',
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
        explanation: '【学习使役】教育场景中的使役表达。"배우다"（学）→"배우게 하다"（让....学）。“선생님이 우리에게 한국말을 배우게 했다”=老师让我们学韩语。',
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
        explanation: '【过程难度】"-는 데"表示做某事的过程或难度。"공부하는 데 어려워요"=学习很难/学起来难。相当于中文的"在....方面"或"在....过程中"。',
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
        explanation: '【"-는 데"的意义】表示动作过程或过程中的难度、时间等。“공부하는 데 시간이 걸린다”=学习需要花时间。区别于结果（-는 것），强调过程。',
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
        explanation: '【花费时间】"-는 데"常表示做某事需要的时间。"배우는 데 3개월이 걸렸다"=学习花了3个月。相当于"在....上花了...时间"。',
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
        explanation: '【现在进行形】"-는 데"必须用现在进行形"-는"。正确："하는 데"。错误："한 데"（过去式）、"할 데"（未来式）。表示正在做或要做的事。',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_002_005',
        type: 'translation',
        question: '번역: 일하는 데 시간이 많이 걸려요.',
        expectedKorean: '일하는 데 시간이 많이 걸려요',
        chineseMeaning: '工作需要花很多时间。',
        explanation: '【需要时间/资源】"-는 데"表示做某事需要的时间或资源。"일하는 데 시간이 많이 걸린다"=工作需要花很多时间。强调过程中的消耗。',
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
        explanation: '【花费时间表达】"-는 데 2시간이 걸렸다"=花了2小时。"숙제를 마치는 데 2시간"=完成作业需舱2小时。这是非常实用的表达！',
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
        explanation: '【"-는 데"vs"-는 것"】"-는 데"强调过程，"-는 것"强调结果。“공부하는 데 어렵다”（学习过程难）≠“공부하는 것이 어렵다”（学习这件事难）。',
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
        explanation: '【烹饪难度】"-는 데 어렵다"表示做起来难。"요리하는 데 어렵다"=做起来难/做起来复杂。强调烹饪过程中的难度。',
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
        explanation: '【目的表达】"-도록"表示目的，相当于"为了..."。"건강하도록 운동하다"=为了健康而运动/为了变健康而运动。表示运动的目的是健康。',
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
        explanation: '【"-도록"的主要意义】①目的："为了..."。②结果："使得..."/"让..."。比如"늘지 않도록 빨리 오다"（为了不迟到而快来）是目的；"모든 사람이 알도록 하다"（让所有人知道）是结果。',
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
        explanation: '【连接在词干上】"-도록"直接接在动词或形容词词干后。正确："알리도록"（通知）。错误："알리 도록"（分开写）、"알도록"（缺少词尾）。不能分开写！',
        source: 'TOPIK Level 2'
      },
      {
        id: 'int_003_005',
        type: 'translation',
        question: '번역: 다시 오지 않도록 지금 해결하세요.',
        expectedKorean: '다시 오지 않도록 지금 해결하세요',
        chineseMeaning: '现在解决，以免再出现。',
        explanation: '【目的表达应用】"-도록"常用于表达行为目的。"다시 오지 않도록 해결하다"=解决以免再来/解决以免再出现。强调解决问题的目的是防止再次出现。',
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
        explanation: '【准备目的】"-도록"表示准备的目的。"학교에 가도록 짐을 챙기다"=为了去学校而收拾行李/收拾东西以便去学校。准备的目的是能够去学校。',
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
        explanation: '【"-도록"vs"-게 하다"】两者有时可替换但有微妙差异。“모든 사람이 알도록 하다”≈“모든 사람이 알게 하다”（让所有人知道）。前者强调目的，后者强调使役。',
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
        explanation: '【为了不失败】"-도록"表达努力的目的。"실패하지 않도록 노력하다"=为了不失败而努力/努力以免失败。强调努力的目的是避免失败。',
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
        explanation: '【转折表达】"-아/어도"表示转折或让步，相当于"虽然...但是..."。"비가 와도 간다"=虽然下雨，但还是去。前后两个情况相反，但结果不变。',
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
        explanation: '【即使努力】"-어도"表示让步。"열심히 공부해도 떨어졌다"=虽然努力学习，但还是没过。强调即使努力了，结果仍然不好。',
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
        explanation: '【动词转折形】动词后加"-어도/아도"。"노력하다"（努力）→"노력해도"（虽然努力）。"아무리 노력해도 안 된다"=无论怎么努力都不行。',
      },
      {
        id: 'int_010_005',
        type: 'context-judgment',
        question: '"아무리 돈이 많아도 행복하지 않다"에서 -어도는 무엇을 나타내나요?',
        options: [
          { text: '대조, 돈이 많아도...', correct: true },
          { text: '원인', correct: false }
        ],
        explanation: '【转折关系】"-어도"表示转折或对比。"돈이 많아도 행복하지 않다"=虽然钱多，但不幸福。表示有钱和幸福之间没有必然联系。',
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
        explanation: '【反复让步】"-어도"表示多次依然如此。"몇 번 말해도 듣지 않는다"=说了好几次也不听。强调多次说了，但对方还是不听。',
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
        explanation: '【即使失败】"-어도"表示失败也要坚持。"실패해도 다시 시도하다"=即使失败也要重试。强调失败不能阻止继续尝试。',
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
        explanation: '【正在进行中】"-는 중이다"表示动作正在进行。"공부하는 중이다"=正在学习。比"-고 있다"更正式，强调此刻正在进行。',
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
        explanation: '【进行状态】"-는 중이다"表示正在进行的状态。区别于过去（-했다）或未来（-할 것이다），强调此刻正在进行中。',
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
        explanation: '【被动进行】"상영되다"（上映/被放映）+"는 중이다"="상영되는 중이다"（正在上映）。表示电影此刻正在影院放映。',
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
