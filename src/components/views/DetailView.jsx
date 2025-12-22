import React, { useState } from 'react'
import StorageManager from '../../utils/storageManager'
import PracticeModule from '../practice/PracticeModule'
import './DetailView.css'

function DetailView({ grammar, onBackClick }) {
  const [isFavorite, setIsFavorite] = useState(StorageManager.isFavorite(grammar.id, grammar.level))
  const [isLearned, setIsLearned] = useState(StorageManager.isGrammarLearned(grammar.id, grammar.level))
  const [showPractice, setShowPractice] = useState(false)
  const [activeTab, setActiveTab] = useState('info') // info, practice

  const handleFavoriteClick = () => {
    if (isFavorite) {
      StorageManager.removeFavorite(grammar.id, grammar.level)
    } else {
      StorageManager.addFavorite(grammar.id, grammar.level)
    }
    setIsFavorite(!isFavorite)
  }

  const handleMarkAsLearned = () => {
    StorageManager.markGrammarAsLearned(grammar.id, grammar.level)
    setIsLearned(true)
  }

  return (
    <div className="detail-view">
      {/* 返回按钮 */}
      <button className="back-btn" onClick={onBackClick}>
        ← 返回列表
      </button>

      {/* 标题栏 */}
      <div className="detail-header">
        <div className="title-section">
          <h1 className="form">{grammar.form}</h1>
          <h2 className="title">{grammar.title}</h2>
          <p className="subtitle">{grammar.definition}</p>
        </div>
        <div className="action-buttons">
          <button
            className={`action-btn favorite ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            title={isFavorite ? '取消收藏' : '收藏'}
          >
            {isFavorite ? '❤️ 已收藏' : '🤍 收藏'}
          </button>
          {!isLearned && (
            <button className="action-btn learn" onClick={handleMarkAsLearned}>
              ✓ 标记为已掌握
            </button>
          )}
          {isLearned && (
            <span className="action-btn learned">✓ 已掌握</span>
          )}
        </div>
      </div>

      {/* 选项卡 */}
      <div className="detail-tabs">
        <button
          className={`tab ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          📖 学习内容
        </button>
        <button
          className={`tab ${activeTab === 'practice' ? 'active' : ''} practice-tab`}
          onClick={() => setActiveTab('practice')}
        >
          🎯 开始练习
        </button>
      </div>

      {/* 学习内容部分 */}
      {activeTab === 'info' && (
        <div className="detail-content">
          {/* 基本信息 */}
          <div className="info-grid">
            <div className="info-item">
              <label>词性</label>
              <p>{grammar.partOfSpeech}</p>
            </div>
            <div className="info-item">
              <label>分类</label>
              <p>{grammar.category}</p>
            </div>
            <div className="info-item">
              <label>释义</label>
              <p>{grammar.meaning}</p>
            </div>
          </div>

          {/* 定义 */}
          <section className="detail-section">
            <h3>📖 核心定义</h3>
            <p className="definition-text">{grammar.definition}</p>
          </section>

          {/* 例句 */}
          {grammar.examples && grammar.examples.length > 0 && (
            <section className="detail-section">
              <h3>📝 典型例句</h3>
              <div className="examples-list">
                {grammar.examples.map((example, idx) => (
                  <div key={idx} className="example-item">
                    <div className="korean-example">{example.korean}</div>
                    <div className="chinese-example">{example.chinese}</div>
                    <div className="situation-tag">{example.situation}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 使用场景 */}
          {grammar.notes && (
            <section className="detail-section">
              <h3>⚠️ 使用场景 & 注意事项</h3>
              <div className="notes-box">
                <p>{grammar.notes}</p>
              </div>
            </section>
          )}

          {/* 拓展词汇 */}
          {grammar.expandVocab && grammar.expandVocab.length > 0 && (
            <section className="detail-section">
              <h3>📚 拓展词汇</h3>
              <div className="vocab-grid">
                {grammar.expandVocab.map((vocab, idx) => (
                  <div key={idx} className="vocab-item">
                    <p className="vocab-word">{vocab.word}</p>
                    <p className="vocab-meaning">{vocab.meaning}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 易混淆对比 */}
          {grammar.confusionComparison && (
            <section className="detail-section confusion">
              <h3>🤔 易混淆语法对比</h3>
              <div className="comparison-box">
                <div className="comparison-item">
                  <p className="comparison-form">{grammar.form}</p>
                  <p className="comparison-title">{grammar.title}</p>
                </div>
                <div className="vs-divider">vs</div>
                <div className="comparison-item">
                  <p className="comparison-form">{grammar.confusionComparison.compared}</p>
                </div>
              </div>
              <p className="comparison-explanation">
                {grammar.confusionComparison.explanation}
              </p>
            </section>
          )}

          {/* 文化背景 */}
          {grammar.culturalBackground && (
            <section className="detail-section">
              <h3>🇰🇷 文化背景</h3>
              <div className="cultural-box">
                <p>{grammar.culturalBackground}</p>
              </div>
            </section>
          )}
        </div>
      )}

      {/* 练习部分 */}
      {activeTab === 'practice' && (
        <PracticeModule grammar={grammar} level={grammar.level} />
      )}
    </div>
  )
}

export default DetailView
