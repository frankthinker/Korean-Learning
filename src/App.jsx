import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import StorageManager from './utils/storageManager'

function App() {
  const [currentLevel, setCurrentLevel] = useState('beginner')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentView, setCurrentView] = useState('browse') // browse, detail, practice, favorites, wrong-answers
  const [selectedGrammar, setSelectedGrammar] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)

  // 初始化深色模式
  useEffect(() => {
    const savedDarkMode = StorageManager.isDarkMode()
    setIsDarkMode(savedDarkMode)
    applyDarkMode(savedDarkMode)
    
    // 检查是否首次使用
    const hasVisited = StorageManager.getUserData().hasVisited
    if (!hasVisited) {
      setShowTutorial(true)
      const userData = StorageManager.getUserData()
      userData.hasVisited = true
      StorageManager.saveUserData(userData)
    }
  }, [])

  // 初始化当前级别
  useEffect(() => {
    const savedLevel = StorageManager.getCurrentLevel()
    setCurrentLevel(savedLevel)
  }, [])

  const applyDarkMode = (isDark) => {
    if (isDark) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    StorageManager.setDarkMode(newMode)
    applyDarkMode(newMode)
  }

  const handleLevelChange = (level) => {
    setCurrentLevel(level)
    StorageManager.setCurrentLevel(level)
    setSelectedCategory(null)
    setSearchQuery('')
    
    // 只有在特定视图下才切换到浏览视图，保持FAQ、学习技巧等其他视图不变
    if (['browse', 'favorites', 'wrong-answers'].includes(currentView)) {
      setCurrentView('browse')
      setSelectedGrammar(null)
    }
  }

  const handleViewChange = (view) => {
    setCurrentView(view)
    if (view === 'browse') {
      setSelectedGrammar(null)
    }
  }

  const handleGrammarSelect = (grammar, level) => {
    setSelectedGrammar({ ...grammar, level })
    setCurrentView('detail')
  }

  return (
    <div className="app">
      <Header 
        currentLevel={currentLevel}
        onLevelChange={handleLevelChange}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        currentView={currentView}
        onViewChange={handleViewChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div className="app-container">
        <Sidebar 
          currentLevel={currentLevel}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          currentView={currentView}
          onViewChange={handleViewChange}
        />
        
        <MainContent 
          currentLevel={currentLevel}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          currentView={currentView}
          selectedGrammar={selectedGrammar}
          onGrammarSelect={handleGrammarSelect}
          onViewChange={handleViewChange}
        />
      </div>

      {showTutorial && (
        <div className="tutorial-overlay" onClick={() => setShowTutorial(false)}>
          <div className="tutorial-card">
            <h2>欢迎使用韩语语法学习</h2>
            <div className="tutorial-content">
              <div className="tutorial-item">
                <span className="tutorial-icon">📚</span>
                <p><strong>点击左侧语法点</strong>查看详细学习内容和例句</p>
              </div>
              <div className="tutorial-item">
                <span className="tutorial-icon">🎯</span>
                <p><strong>点击练习按钮</strong>进行针对性练习和综合测试</p>
              </div>
              <div className="tutorial-item">
                <span className="tutorial-icon">❤️</span>
                <p><strong>收藏常用语法</strong>在"我的收藏"板块快速查看</p>
              </div>
              <div className="tutorial-item">
                <span className="tutorial-icon">✏️</span>
                <p><strong>错题会自动记录</strong>帮助你巩固薄弱知识点</p>
              </div>
            </div>
            <button className="tutorial-btn" onClick={() => setShowTutorial(false)}>
              开始学习
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
