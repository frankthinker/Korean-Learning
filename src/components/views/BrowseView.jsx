import React, { useMemo } from 'react'
import { getGrammarByLevel, filterGrammarByCategory, searchGrammar } from '../../data/grammarData'
import StorageManager from '../../utils/storageManager'
import GrammarCard from '../common/GrammarCard'
import './BrowseView.css'

function BrowseView({ currentLevel, selectedCategory, searchQuery, onGrammarSelect }) {
  const allGrammars = getGrammarByLevel(currentLevel)
  const learnedCount = StorageManager.getLearnedCount(currentLevel)

  // 处理语法列表过滤和搜索
  const filteredGrammars = useMemo(() => {
    let result = allGrammars

    // 按搜索查询筛选
    if (searchQuery) {
      result = searchGrammar(searchQuery, currentLevel)
    } else if (selectedCategory) {
      // 按分类筛选
      result = filterGrammarByCategory(currentLevel, selectedCategory)
    }

    return result
  }, [currentLevel, selectedCategory, searchQuery, allGrammars])

  const progressPercentage = allGrammars.length > 0 
    ? Math.round((learnedCount / allGrammars.length) * 100)
    : 0

  return (
    <div className="browse-view">
      {/* 学习进度卡片 */}
      <div className="progress-card card">
        <h3>学习进度</h3>
        <div className="progress-info">
          <div className="progress-stat">
            <span className="stat-label">已学习</span>
            <span className="stat-value">{learnedCount}/{allGrammars.length}</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <div className="progress-percentage">{progressPercentage}%</div>
        </div>
      </div>

      {/* 语法列表 */}
      <div className="grammar-list-section">
        <div className="list-header">
          <h2>语法列表</h2>
          <p className="result-count">找到 {filteredGrammars.length} 个语法点</p>
        </div>

        {filteredGrammars.length > 0 ? (
          <div className="grammar-grid">
            {filteredGrammars.map(grammar => (
              <GrammarCard
                key={`${grammar.id}-${currentLevel}`}
                grammar={grammar}
                level={currentLevel}
                onSelect={() => onGrammarSelect(grammar, currentLevel)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <h3>未找到相关语法</h3>
            <p>
              {searchQuery
                ? `没有找到包含 "${searchQuery}" 的语法点，请尝试其他搜索词`
                : '该分类下暂无语法点'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseView
