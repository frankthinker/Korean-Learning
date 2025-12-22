import React, { useState } from 'react'
import './Header.css'

function Header({ currentLevel, onLevelChange, isDarkMode, onToggleDarkMode, searchQuery, onSearchChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const levels = [
    { key: 'beginner', label: '初级' },
    { key: 'intermediate', label: '中级' },
    { key: 'advanced', label: '高级' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">🇰🇷</span>
            <h1>韩语语法学习</h1>
          </div>
        </div>

        <div className="header-center">
          <div className="level-tabs">
            {levels.map(level => (
              <button
                key={level.key}
                className={`level-tab ${currentLevel === level.key ? 'active' : ''}`}
                onClick={() => onLevelChange(level.key)}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        <div className="header-right">
          <div className="search-box">
            <input
              type="text"
              placeholder="搜索语法点（韩文/中文）..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>

          <button
            className="dark-mode-btn"
            onClick={onToggleDarkMode}
            title={isDarkMode ? '切换浅色模式' : '切换深色模式'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-level-tabs">
            {levels.map(level => (
              <button
                key={level.key}
                className={`mobile-level-tab ${currentLevel === level.key ? 'active' : ''}`}
                onClick={() => {
                  onLevelChange(level.key)
                  setIsMenuOpen(false)
                }}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
