import React from 'react'
import './TipsView.css'

function TipsView({ currentLevel }) {
  const tipsData = {
    beginner: {
      title: '初级语法学习技巧',
      tips: [
        {
          icon: '📖',
          title: '多背诵例句',
          description: '初级语法最关键的是建立基本的语感。通过大量背诵例句，你可以快速建立韩语的"语言直觉"，自然而然地理解语法在实际应用中的使用方式。'
        },
        {
          icon: '🎯',
          title: '分类学习词尾',
          description: '初级阶段词尾众多，建议按功能分类学习（如时态词尾、敬语词尾等），而不是随意学习。这样有助于系统建立词尾体系。'
        },
        {
          icon: '🔄',
          title: '频繁复习巩固',
          description: '初级语法是后续学习的基础，需要反复复习。建议每学完一个语法点就进行练习，每周进行一次综合复习。'
        },
        {
          icon: '💬',
          title: '尝试造句练习',
          description: '不仅要理解语法含义，更要能够在实际句子中运用。每学完一个语法点，尝试自己造3-5个例句，加深印象。'
        },
        {
          icon: '🎧',
          title: '听说结合',
          description: '学习时配合发音示例，大声朗读例句。这样可以同时训练听力和口语，加快学习进度。'
        }
      ]
    },
    intermediate: {
      title: '中级语法学习技巧',
      tips: [
        {
          icon: '🔍',
          title: '对比学习易混淆语法',
          description: '中级阶段会遇到功能相似的语法点（如-는 데 vs -는 것）。要重点关注它们的区别，通过对比学习加深理解。'
        },
        {
          icon: '📚',
          title: '学习语法搭配',
          description: '同一个语法点常与特定词汇搭配使用。例如某些助词常与特定的动词搭配。学习时要注意积累常见搭配。'
        },
        {
          icon: '📰',
          title: '阅读原文材料',
          description: '开始接触韩语新闻、博客等真实材料，找出其中的中级语法，分析它们在实际文本中的用法。这能显著提升语法理解深度。'
        },
        {
          icon: '🎬',
          title: '学习剧集台词',
          description: '通过韩剧或综艺节目的台词学习语法。这样可以在日常对话语境中理解语法，更好地掌握口语表达。'
        },
        {
          icon: '✍️',
          title: '写作练习',
          description: '尝试用中级语法点写日记、短文等。在写作中遇到的问题往往是最需要解决的难点。'
        }
      ]
    },
    advanced: {
      title: '高级语法学习技巧',
      tips: [
        {
          icon: '🏛️',
          title: '理解文化背景',
          description: '高级语法往往带有特定的文化背景和社会含义。学习时不仅要掌握语法规则，更要理解韩国文化背景，这样才能准确运用。'
        },
        {
          icon: '📖',
          title: '阅读文学作品',
          description: '通过阅读韩国小说、散文、诗歌等文学作品来学习高级语法。文学作品中往往能找到最地道的高级表达。'
        },
        {
          icon: '🎤',
          title: '学习演讲表达',
          description: '高级语法在演讲、辩论、新闻评论中使用频繁。学习这些领域的材料能帮你掌握正式、复杂的表达方式。'
        },
        {
          icon: '📊',
          title: '分析长句结构',
          description: '高级语法往往用于构建复杂句式。练习分析长句的逻辑结构，有助于理解复杂的语法组合。'
        },
        {
          icon: '💭',
          title: '深度理解细微差异',
          description: '高级语法的学习重点是理解细微的表达差异。同样的意思用不同语法表达时的区别、色彩差异需要反复体会和琢磨。'
        }
      ]
    }
  }

  const currentTips = tipsData[currentLevel]

  return (
    <div className="tips-view">
      <div className="tips-header">
        <h2>{currentTips.title}</h2>
        <p className="tips-subtitle">针对{currentLevel === 'beginner' ? '初级' : currentLevel === 'intermediate' ? '中级' : '高级'}学习者的建议</p>
      </div>

      <div className="tips-grid">
        {currentTips.tips.map((tip, idx) => (
          <div key={idx} className="tip-card card">
            <div className="tip-icon">{tip.icon}</div>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>

      <div className="tips-footer">
        <h3>💡 总体建议</h3>
        <div className="footer-tips">
          <div className="footer-tip-item">
            <span className="item-icon">✓</span>
            <p>制定学习计划，按照自己的进度每天坚持学习一定数量的语法点</p>
          </div>
          <div className="footer-tip-item">
            <span className="item-icon">✓</span>
            <p>建立错题本，定期复习错过的题目，巩固薄弱知识点</p>
          </div>
          <div className="footer-tip-item">
            <span className="item-icon">✓</span>
            <p>寻找学习伙伴，与他人讨论语法点的理解，互相督促</p>
          </div>
          <div className="footer-tip-item">
            <span className="item-icon">✓</span>
            <p>坚持使用学到的语法进行实际对话或写作，不要只停留在理论阶段</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TipsView
