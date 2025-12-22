import React, { useState, useMemo, useEffect } from 'react';
import './FAQView.css';

// 新增：引入图标库（可替换为Font Awesome或自定义图标）
const ICONS = {
  search: '🔍',
  success: '✓',
  info: '💡',
  filter: '📋',
  top: '⬆️'
};

function FAQView({ currentLevel }) {
  // 基础语法问答数据（扩充了内容，新增了示例标注、语法标签）
  const faqData = useMemo(() => ({
    beginner: [
      {
        id: 1,
        question: "韩语的基本语序是什么？",
        answer: "韩语的基本语序是SOV（主语-宾语-谓语）。例如：나는 사과를 먹는다（我吃苹果）。这与中文的SVO语序不同，需要特别注意。",
        tags: ["基础语序", "SOV"],
        examples: ["나는 사과를 먹는다（我吃苹果）", "저는 책을 읽는다（我看书）"]
      },
      {
        id: 2,
        question: "如何区分敬语和非敬语？",
        answer: "敬语用于对长辈、陌生人或正式场合，常用-습니다/-습니까结尾；非敬语用于同龄人或晚辈之间，常用-어요/-아요结尾。此外，还有更高阶的존댓말（正式敬语）和반말（平语）的词汇差异。",
        tags: ["敬语", "语尾"],
        examples: ["먹습니다（敬语，吃）", "먹어요（半语，吃）", "잡수시다（高阶敬语，吃）"]
      },
      {
        id: 3,
        question: "助词是什么？为什么重要？",
        answer: "助词是附加在名词后面的标记，用来表明该名词在句子中的作用。韩语是黏着语，助词决定了名词的句法功能，没有助词的话句子会产生歧义甚至无法理解。",
        tags: ["助词", "黏着语"],
        examples: ["를/을（宾语标记）", "이/가（主语标记）", "에（地点/时间标记）"]
      },
      {
        id: 4,
        question: "如何判断使用哪个助词？",
        answer: "助词选择主要看名词的最后一个音节是否有收音（받침）。有收音用을、이、으로等；无收音用를、가、로等。另外，部分助词有固定搭配，需要单独记忆。",
        tags: ["助词", "收音"],
        examples: ["책（有收音）+을", "사과（无收音）+를", "학교（无收音）+로", "집（有收音）+으로"]
      },
      {
        id: 5,
        question: "词尾变化有什么规律？",
        answer: "词尾变化遵循元音和谐律，主要看词根最后一个元音是阳性（ㅏ、ㅗ）还是阴性（ㅓ、ㅜ、ㅡ、ㅣ）。此外，还有一些不规则动词的词尾变化需要单独记忆（如가다→가요，오다→와요，하다→해요）。",
        tags: ["词尾", "元音和谐"],
        examples: ["가다（走）→ 가요", "오다（来）→ 와요", "먹다（吃）→ 먹어요", "하다（做）→ 해요"]
      },
      {
        id: 6,
        question: "如何表达现在进行时？",
        answer: "现在进行时用-고 있다表示。例如：먹고 있다（正在吃）、공부하고 있다（正在学习）。口语中常用-고 있어요，书面语用-고 있습니다。需要注意，状态动词（如있다、안다）一般不用于进行时。",
        tags: ["时态", "进行时"],
        examples: ["먹고 있다（正在吃）", "공부하고 있다（正在学习）", "잠을 자고 있다（正在睡觉）"]
      },
      {
        id: 7,
        question: "如何表达过去时？",
        answer: "过去时在动词词干后加-았或-었。元音为ㅏ、ㅗ时用-았，其他用-었。不规则动词的过去时变化需要单独记忆（如가다→갔다，오다→왔다，먹다→먹었다）。",
        tags: ["时态", "过去时"],
        examples: ["가다→갔다（去了）", "먹다→먹었다（吃了）", "공부하다→공부했다（学习了）"]
      },
      {
        id: 8,
        question: "如何表达将来时？",
        answer: "将来时可以用多种方式表达：1）-ㄹ/을 것이다（将要）2）-겠-（推测/意志）3）-ㄹ/을 예정이다（预定）。其中-겠-更强调主观意志，-ㄹ/을 것이다更侧重客观推测。",
        tags: ["时态", "将来时"],
        examples: ["갈 것이다（将要去）", "먹겠다（我要吃）", "내일 갈 예정이다（预定明天去）"]
      },
      {
        id: 9,
        question: "如何表达'有'和'没有'？",
        answer: "有：있다，没有：없다。根据主语类型选择助词：이/가（人/动物/具体事物），은/는（抽象概念）。需要注意，있다的主语是事物，而人“拥有”某物用~을/를 가지다。",
        tags: ["存在动词", "拥有"],
        examples: ["돈이 있다（有钱）", "시간이 없다（没时间）", "나는 책을 가지고 있다（我有书）"]
      },
      {
        id: 10,
        question: "如何表达疑问句？",
        answer: "疑问句分为两种：1）是非问（是/否）用-습니까？/ㅂ니까？或-어요？/아요？2）特殊疑问用疑问词开头，例如：무엇을 먹었습니까？（吃了什么？）。口语中常用升调表示疑问，无需改变词尾。",
        tags: ["疑问句", "句式"],
        examples: ["학생입니까？（是学生吗？）", "무엇을 먹었습니까？（吃了什么？）", "어디에 가요？（去哪里？）"]
      }
    ],
    intermediate: [
      {
        id: 11,
        question: "如何区分-는 데和-는 것？",
        answer: "-는 데强调过程或所需时间/资源，后面常接걸리다、들다等动词；-는 것强调结果或行为本身，后面常接중요하다、좋다等形容词。此外，-는 것可以作主语/宾语，-는 데不能。",
        tags: ["易混淆语法", "助词"],
        examples: ["공부하는 데 시간이 걸린다（学习需要时间）", "공부하는 것이 중요하다（学习很重要）", "먹는 데 돈이 든다（吃东西要花钱）"]
      },
      {
        id: 12,
        question: "-도록和-게 하다有什么区别？",
        answer: "两者都可表示目的或结果，但有细微差别：-도록更侧重目的（为了...），主语通常是同一个；-게 하다表示使役（让...），主语是动作的使动者，宾语是动作的执行者。",
        tags: ["目的语", "使役态"],
        examples: ["건강하도록 운동한다（为了健康而运动）", "학생들을 공부하게 한다（让学生学习）", "아이를 잠들게 한다（让孩子睡着）"]
      },
      {
        id: 13,
        question: "如何正确使用-아/어도？",
        answer: "-아/어도表示转折或让步，相当于'即使...'、'虽然...'。动词词干以ㅏ、ㅗ结尾用-아도，其他用-어도；하다变하여도（口语中常说해도）。此外，-아/어도可以和되다连用，表示'没关系'。",
        tags: ["让步", "转折"],
        examples: ["비가 와도 간다（即使下雨也去）", "맵어도 먹는다（即使辣也吃）", "괜찮아도 되다（没关系）"]
      },
      {
        id: 14,
        question: "-는 중이다和-고 있다有何不同？",
        answer: "两者都表示进行时，但-는 중이다更正式，强调动作正在进行的状态，多用于书面语或正式场合；-고 있다相对口语化，可用于日常对话。此外，-는 중이다只能用于动作动词，-고 있다可用于状态动词。",
        tags: ["进行时", "语体"],
        examples: ["회의가 진행되는 중이다（会议正在进行中）", "밥을 먹고 있다（正在吃饭）", "사랑하고 있다（正在恋爱）"]
      },
      {
        id: 15,
        question: "如何表达推测？",
        answer: "推测可用多种方式：1）-겠-（主观推测，第一人称表意志）2）-을/ㄹ 것이다（客观推测）3）-을/ㄹ 것 같다（比较不确定的推测）4）-나 보다（看起来）。不同的推测方式表达的确定程度不同。",
        tags: ["推测", "语气"],
        examples: ["비가 올 것 같다（好像要下雨）", "그는 갈 것이다（他应该会去）", "그가 행복하나 보다（他看起来很幸福）"]
      },
      {
        id: 16,
        question: "如何表达原因？",
        answer: "原因表达有三种：1）-아/어서（自然口语，不能用于命令/请求句）2）-으니까/-니까（稍正式，可用于命令/请求句）3）-기 때문에（最正式，书面语）。需要注意它们的句式限制。",
        tags: ["原因", "连接词"],
        examples: ["피곤해서 못 갔다（因为累所以没去）", "시간이 있으니까 가자（因为有时间，走吧）", "건강하기 때문에 운동한다（因为健康，所以运动）"]
      },
      {
        id: 17,
        question: "如何表达请求？",
        answer: "请求有多种层级：1）-아/어 주다（客气请求，最常用）2）-아/어 달라（直接请求，对下级）3）-아/어 주시겠어요？（非常礼貌的请求，对长辈）4）-시게 해주세요（请求对方允许自己做某事）。",
        tags: ["请求", "敬语"],
        examples: ["도와주세요（请帮帮我）", "도와달라（帮我一下）", "좀 기다려주시겠어요？（能稍等一下吗？）"]
      },
      {
        id: 18,
        question: "如何表达条件？",
        answer: "条件句主要有：1）-으면/-면（一般条件，假设）2）-으면서/-면서（同时条件，一边...一边）3）-자（提议性条件，一起...吧）4）-는 대로（一...就）。不同的条件词表达的逻辑关系不同。",
        tags: ["条件", "连接词"],
        examples: ["시간이 있으면 갈게요（如果有时间就去）", "노래를 들으면서 공부한다（一边听歌一边学习）", "가자（走吧）", "보는 대로 말해요（看到什么说什么）"]
      },
      {
        id: 19,
        question: "如何表达被动语态？",
        answer: "被动语态通过在动词词干后加-이-/히-/리-/기-来构成，具体加哪个取决于动词词干。不及物动词的被动语态通常表示遭受某种影响（如비가 오다→비가 내리다）。",
        tags: ["被动语态", "动词变形"],
        examples: ["열다（开）→ 열리다（被开）", "닫다（关）→ 닫히다（被关）", "먹다（吃）→ 먹히다（被吃）"]
      },
      {
        id: 20,
        question: "如何表达使役态？",
        answer: "使役态有两种形式：1）-게 하다（口语常用，适用于所有动词）2）-시키다（书面语，部分动词固定搭配）。使役态表示让某人做某事，主语是使动者，宾语是执行者。",
        tags: ["使役态", "动词变形"],
        examples: ["가다（去）→ 가게 하다（让...去）", "공부하다（学习）→ 공부하게 하다（让...学习）", "먹다（吃）→ 먹이게 하다（让...吃）"]
      }
    ],
    advanced: [
      {
        id: 21,
        question: "-기는커녕的用法是什么？",
        answer: "-기는커녕表示'别说...就连...'，用于强调连最低限度的情况都达不到，后面常接否定形式。该语法属于书面语，口语中也可使用，但语气较强。",
        tags: ["高级连接词", "强调"],
        examples: ["한 시간은 기다렸거늘 전화 한 번은 커녕（等了一个小时，连一个电话都没有）", "먹기는커녕 보기도 싫다（别说吃了，连看都不想看）"]
      },
      {
        id: 22,
        question: "如何使用-을 지경이다？",
        answer: "-을 지경이다表示达到某种程度或极限，常用于负面情况，相当于'到了...的地步'。前面可接形容词或动词，强调状态的严重性。",
        tags: ["程度表达", "负面语气"],
        examples: ["울음이 심할 지경이다（哭得很厉害）", "분노할 지경이다（愤怒至极）", "피곤할 지경이다（累得不行）"]
      },
      {
        id: 23,
        question: "-다시피的含义是什么？",
        answer: "-다시피有两种含义：1）表示'正如...所说'、'像...一样'（接在动词后）2）表示'几乎'、'差不多'（接在形容词后）。需要根据语境判断含义。",
        tags: ["比喻", "程度"],
        examples: ["말했듯이（正如所说）", "바람이 부는 대로（随风而动）", "죽을 다시피 아팠다（疼得差点死了）"]
      },
      {
        id: 24,
        question: "如何表达复杂句式？",
        answer: "高级韩语中常用嵌套句式，通过连接词尾将多个分句连接起来，例如：-는 동안에（在...期间）、-는 김에（趁...的时候）、-는 바람에（因为...）、-기 때문에（因为...）。嵌套句式需要注意逻辑关系和语序。",
        tags: ["复杂句式", "连接词"],
        examples: ["공부하는 동안에 잠을 잤다（学习的时候睡着了）", "밥을 먹는 김에 친구를 만났다（吃饭的时候遇到了朋友）", "비를 맞는 바람에 감기 걸렸다（因为淋雨感冒了）"]
      },
      {
        id: 25,
        question: "如何使用惯用表达？",
        answer: "惯用表达是固定的短语，不能逐字翻译，需要整体记忆。韩语的惯用表达多与身体部位、自然现象相关，是高级韩语的重要组成部分。",
        tags: ["惯用表达", "固定搭配"],
        examples: ["눈코 뜰 새 없이（忙得不可开交）", "죽을 맛이다（好吃得要死）", "귀에 쏙쏙 들어오다（言之有理）", "발이 묶이다（走不开）"]
      },
      {
        id: 26,
        question: "如何表达委婉语气？",
        answer: "委婉语气常用-기는 하지만、-기는 한데、-ㄹ 뿐만 아니라、-지 않을까等表达。委婉语气在商务、正式场合中非常重要，能体现说话人的礼貌和谦逊。",
        tags: ["委婉语气", "正式语体"],
        examples: ["가기는 하지만 시간이 없어요（虽然想去但是没时间）", "좋기는 한데 조금 비싸요（虽然好，但是有点贵）", "이것이 좋지 않을까요？（这个会不会更好呢？）"]
      },
      {
        id: 27,
        question: "如何使用文学性表达？",
        answer: "文学性表达常见于诗歌、小说中，例如：-노라、-소이다等古典语尾，以及拟声词、拟态词的大量使用。现代韩语中较少使用古典语尾，但在文学作品欣赏时需要了解。",
        tags: ["文学性表达", "古典语尾"],
        examples: ["산이 높노라（山高啊）", "물이 맑소이다（水真清啊）", "바람이 부드럽게 불어온다（风轻柔地吹来）"]
      },
      {
        id: 28,
        question: "如何表达抽象概念？",
        answer: "抽象概念常用-함、-음、-성等名词化词尾，将动词/形容词转化为名词，例如：사랑함（爱）、기쁨（喜悦）、참성（耐心）。这些表达在哲学、心理学等学术领域经常使用。",
        tags: ["抽象概念", "名词化"],
        examples: ["사랑함은 아름다운 것이다（爱是美好的）", "기쁨을 나누다（分享喜悦）", "참성이 필요하다（需要耐心）"]
      },
      {
        id: 29,
        question: "如何使用修辞手法？",
        answer: "韩语修辞包括拟声词、拟态词、比喻、拟人、夸张等。其中拟声词和拟态词是韩语的特色，能增强语言的形象性和生动性。",
        tags: ["修辞手法", "拟声拟态词"],
        examples: ["빙빙 돌다（团团转）", "뻘뻘 땀을 흘리다（汗流浃背）", "하늘을 꿰뚫는 눈（能刺穿天空的眼睛，夸张）", "꽃이 웃고 있다（花在笑，拟人）"]
      },
      {
        id: 30,
        question: "如何掌握语体差异？",
        answer: "韩语有不同的语体：口语体（해요체、반말）、书面体（합쇼체、하십시오체）、文学体、方言等。需要根据说话对象、场合、目的选择合适的语体，这是高级韩语的核心能力之一。",
        tags: ["语体", "敬语体系"],
        examples: ["합쇼체：안녕하십니까？（正式场合）", "해요체：안녕하세요？（日常场合）", "반말：안녕？（朋友之间）"]
      }
    ]
  }), []);

  // 新增状态：搜索关键词、选中的标签、是否显示回到顶部按钮
  const [openItems, setOpenItems] = useState(new Set());
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [showToTop, setShowToTop] = useState(false);

  // 当级别变化时，清除选中的标签
  useEffect(() => {
    setSelectedTags(new Set());
  }, [currentLevel]);

  // 切换FAQ展开/折叠
  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      // 新增：可选是否只展开当前项（注释掉则为允许多项展开）
      // newOpenItems.clear();
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  // 新增：切换标签筛选
  const toggleTag = (tag) => {
    const newSelectedTags = new Set(selectedTags);
    if (newSelectedTags.has(tag)) {
      newSelectedTags.delete(tag);
    } else {
      newSelectedTags.add(tag);
    }
    setSelectedTags(newSelectedTags);
  };

  // 新增：回到顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 新增：监听滚动事件，控制回到顶部按钮显示
  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 筛选当前级别的FAQ，结合搜索和标签筛选
  const currentFAQs = useMemo(() => {
    let filtered = faqData[currentLevel] || [];
    
    // 搜索关键词筛选
    if (searchKeyword) {
      const keyword = searchKeyword.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(keyword) || 
        faq.answer.toLowerCase().includes(keyword)
      );
    }

    // 标签筛选
    if (selectedTags.size > 0) {
      filtered = filtered.filter(faq => 
        faq.tags.some(tag => selectedTags.has(tag))
      );
    }

    return filtered;
  }, [faqData, currentLevel, searchKeyword, selectedTags]);

  // 提取当前级别的所有标签（去重）
  const allTags = useMemo(() => {
    const tags = new Set();
    (faqData[currentLevel] || []).forEach(faq => {
      faq.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [faqData, currentLevel]);

  // 级别名称映射
  const levelNameMap = {
    beginner: '初级',
    intermediate: '中级',
    advanced: '高级'
  };
  const currentLevelName = levelNameMap[currentLevel] || '初级';

  return (
    <div className="faq-view">
      {/* 头部：标题+副标题+搜索+标签筛选 */}
      <div className="faq-header">
        <h2>{currentLevelName}韩语语法问答</h2>
        <p className="faq-subtitle">针对{currentLevelName}学习者的常见问题解答</p>

        {/* 新增：搜索框 */}
        <div className="faq-search">
          <span className="search-icon">{ICONS.search}</span>
          <input
            type="text"
            placeholder="输入关键词搜索语法问题..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="search-input"
          />
        </div>

        {/* 新增：标签筛选 */}
        {allTags.length > 0 && (
          <div className="faq-tags">
            <span className="tags-label">{ICONS.filter} 语法标签筛选：</span>
            <div className="tags-list">
              {allTags.map((tag) => (
                <span
                  key={tag}
                  className={`tag-item ${selectedTags.has(tag) ? 'tag-active' : ''}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FAQ列表 */}
      <div className="faq-list">
        {currentFAQs.length > 0 ? (
          currentFAQs.map((faq) => (
            <div key={faq.id} className="faq-item card">
              {/* 问题部分：标题+展开/折叠按钮 */}
              <div
                className="faq-question"
                onClick={() => toggleItem(faq.id)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {openItems.has(faq.id) ? '−' : '+'}
                </span>
              </div>

              {/* 答案部分：展开时显示 */}
              {openItems.has(faq.id) && (
                <div className="faq-answer">
                  <p className="answer-content">{faq.answer}</p>

                  {/* 新增：语法标签显示 */}
                  {faq.tags && faq.tags.length > 0 && (
                    <div className="answer-tags">
                      {faq.tags.map((tag) => (
                        <span key={tag} className="answer-tag" onClick={(e) => {
                          e.stopPropagation(); // 阻止触发父元素的点击事件
                          toggleTag(tag);
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 新增：示例部分 */}
                  {faq.examples && faq.examples.length > 0 && (
                    <div className="answer-examples">
                      <h4>示例：</h4>
                      <ul>
                        {faq.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          // 新增：无结果提示
          <div className="faq-empty">
            <p>没有找到相关的语法问题，请更换关键词或标签试试~</p>
          </div>
        )}
      </div>

      {/* 底部：学习建议 */}
      <div className="faq-footer">
        <h3>{ICONS.info} 学习建议</h3>
        <div className="footer-tips">
          <div className="footer-tip-item">
            <span className="item-icon">{ICONS.success}</span>
            <p>遇到不懂的语法点时，可以通过搜索或标签快速查找相关解释</p>
          </div>
          <div className="footer-tip-item">
            <span className="item-icon">{ICONS.success}</span>
            <p>建议按级别循序渐进学习，结合示例理解语法的实际用法</p>
          </div>
          <div className="footer-tip-item">
            <span className="item-icon">{ICONS.success}</span>
            <p>定期复习已学过的语法点，通过造句和对话巩固记忆</p>
          </div>
          {/* 新增：额外学习建议 */}
          <div className="footer-tip-item">
            <span className="item-icon">{ICONS.success}</span>
            <p>尝试将多个语法点结合起来使用，提升句式的丰富度</p>
          </div>
          <div className="footer-tip-item">
            <span className="item-icon">{ICONS.success}</span>
            <p>多看韩语影视、新闻，积累真实语境中的语法使用案例</p>
          </div>
        </div>
      </div>

      {/* 新增：回到顶部按钮 */}
      {showToTop && (
        <button
          className="to-top-button"
          onClick={scrollToTop}
          title="回到顶部"
        >
          {ICONS.top}
        </button>
      )}
    </div>
  );
}

export default FAQView;