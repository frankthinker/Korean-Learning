import React, { useMemo } from 'react'
import { grammarDatabase } from '../../data/grammarData'
import StorageManager from '../../utils/storageManager'
import GrammarCard from '../common/GrammarCard'
import './FavoritesView.css'

function FavoritesView({ onGrammarSelect, onViewChange }) {
  const favorites = StorageManager.getFavorites()

  // 获取收藏的语法详情
  const favoriteGrammars = useMemo(() => {
    return favorites.map(fav => {
      const grammars = grammarDatabase[fav.level] || []
      return {
        ...grammars.find(g => g.id === fav.id),
        level: fav.level
      }
    }).filter(Boolean)
  }, [favorites])

  // 按级别分组
  const groupedByLevel = useMemo(() => {
    const groups = {}
    favoriteGrammars.forEach(grammar => {
      if (!groups[grammar.level]) {
        groups[grammar.level] = []
      }
      groups[grammar.level].push(grammar)
    })
    return groups
  }, [favoriteGrammars])

  const levelNames = {
    beginner: '初级',
    intermediate: '中级',
    advanced: '高级'
  }

  return (
    <div className="favorites-view">
      <div className="favorites-header">
        <h2>我的收藏</h2>
        <p className="favorites-count">共 {favoriteGrammars.length} 个语法点</p>
      </div>

      {favoriteGrammars.length > 0 ? (
        <div className="favorites-content">
          {Object.entries(groupedByLevel).map(([level, grammars]) => (
            <div key={level} className="level-section">
              <h3 className="level-title">
                <span className="level-icon">📌</span>
                {levelNames[level]} ({grammars.length})
              </h3>
              <div className="grammar-grid">
                {grammars.map(grammar => (
                  <GrammarCard
                    key={`${grammar.id}-${level}`}
                    grammar={grammar}
                    level={level}
                    onSelect={() => onGrammarSelect(grammar, level)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <span className="empty-icon">📭</span>
          <h3>还没有收藏</h3>
          <p>在浏览语法时点击❤️收藏喜欢的语法点吧</p>
          <button className="btn-browse" onClick={() => onViewChange('browse')}>
            去浏览语法
          </button>
        </div>
      )}
    </div>
  )
}

export default FavoritesView
