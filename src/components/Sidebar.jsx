import React, { useState } from 'react'
import { categories } from '../data/grammarData'
import './Sidebar.css'

function Sidebar({ currentLevel, selectedCategory, onCategoryChange, currentView, onViewChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const levelCategories = categories[currentLevel] || []

  const viewItems = [
    { key: 'browse', label: '浏览语法', icon: '📚' },
    { key: 'favorites', label: '我的收藏', icon: '❤️' },
    { key: 'wrong-answers', label: '错题集', icon: '✏️' },
    { key: 'tips', label: '学习技巧', icon: '💡' },
    { key: 'faq', label: '语法问答', icon: '❓' }
  ]

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3>导航菜单</h3>
        <button
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? '展开' : '折叠'}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <div className="sidebar-content">
        {/* 视图切换 */}
        <div className="view-section">
          <h4>功能模块</h4>
          <div className="view-list">
            {viewItems.map(item => (
              <button
                key={item.key}
                className={`view-item ${currentView === item.key ? 'active' : ''}`}
                onClick={() => onViewChange(item.key)}
                title={isCollapsed ? item.label : ''}
              >
                <span className="view-icon">{item.icon}</span>
                {!isCollapsed && <span className="view-label">{item.label}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* 分类筛选 - 仅在浏览视图显示 */}
        {currentView === 'browse' && (
          <div className="category-section">
            <h4>{!isCollapsed ? '分类筛选' : '分类'}</h4>
            <div className="category-list">
              <button
                className={`category-item ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => onCategoryChange(null)}
              >
                {!isCollapsed ? '全部' : '全'}
              </button>
              {levelCategories.map(category => (
                <button
                  key={category}
                  className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => onCategoryChange(category)}
                  title={isCollapsed ? category : ''}
                >
                  {!isCollapsed ? category : category.substring(0, 2)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 侧边栏底部提示 */}
      {!isCollapsed && (
        <div className="sidebar-footer">
          <p>💡 提示：在浏览视图中可按分类筛选语法，快速找到你需要的内容</p>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
