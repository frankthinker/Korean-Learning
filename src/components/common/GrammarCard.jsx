import React, { useState } from 'react'
import StorageManager from '../../utils/storageManager'
import './GrammarCard.css'

function GrammarCard({ grammar, level, onSelect }) {
  const [isFavorite, setIsFavorite] = useState(StorageManager.isFavorite(grammar.id, level))
  const isLearned = StorageManager.isGrammarLearned(grammar.id, level)

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    if (isFavorite) {
      StorageManager.removeFavorite(grammar.id, level)
    } else {
      StorageManager.addFavorite(grammar.id, level)
    }
    setIsFavorite(!isFavorite)
  }

  const handleMarkAsLearned = (e) => {
    e.stopPropagation()
    StorageManager.markGrammarAsLearned(grammar.id, level)
  }

  return (
    <div
      className={`grammar-card card ${isLearned ? 'learned' : ''}`}
      onClick={onSelect}
    >
      <div className="card-header">
        <div className="form-title">
          <h3 className="form">{grammar.form}</h3>
          <span className="title">{grammar.title}</span>
        </div>
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          title={isFavorite ? '取消收藏' : '收藏'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="card-body">
        <p className="category">
          <span className="badge">{grammar.category}</span>
        </p>
        <p className="meaning">{grammar.meaning}</p>
        
        {grammar.examples && grammar.examples.length > 0 && (
          <div className="examples-preview">
            <p className="example-label">示例：</p>
            <p className="example-korean">{grammar.examples[0].korean}</p>
            <p className="example-chinese">{grammar.examples[0].chinese}</p>
          </div>
        )}
      </div>

      <div className="card-footer">
        {isLearned && <span className="learned-badge">✓ 已掌握</span>}
        {!isLearned && (
          <button className="learn-btn" onClick={handleMarkAsLearned}>
            标记为已掌握
          </button>
        )}
        <span className="view-btn">查看详情 →</span>
      </div>
    </div>
  )
}

export default GrammarCard
