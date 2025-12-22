import React, { useMemo, useState, useEffect } from 'react'
import { grammarDatabase } from '../../data/grammarData'
import StorageManager from '../../utils/storageManager'
import './WrongAnswersView.css'

function WrongAnswersView({ onGrammarSelect, onViewChange }) {
  const [wrongAnswers, setWrongAnswers] = useState(StorageManager.getWrongAnswers())
  const [selectedLevel, setSelectedLevel] = useState(null)

  // 订阅存储变化
  useEffect(() => {
    const handleStorageChange = () => {
      setWrongAnswers(StorageManager.getWrongAnswers())
    }

    window.addEventListener('storage', handleStorageChange)
    // 监听自定义事件
    window.addEventListener('wrongAnswersUpdated', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('wrongAnswersUpdated', handleStorageChange)
    }
  }, [])

  // 按级别分组
  const groupedByLevel = useMemo(() => {
    const groups = {}
    wrongAnswers.forEach(wrong => {
      if (!groups[wrong.level]) {
        groups[wrong.level] = []
      }
      groups[wrong.level].push(wrong)
    })
    return groups
  }, [wrongAnswers])

  // 过滤根据选定级别
  const filteredWrongAnswers = selectedLevel
    ? groupedByLevel[selectedLevel] || []
    : wrongAnswers

  const levelNames = {
    beginner: '初级',
    intermediate: '中级',
    advanced: '高级'
  }

  const handleRemoveWrongAnswer = (questionId, e) => {
    e.stopPropagation()
    StorageManager.removeWrongAnswer(questionId)
    // 更新本地状态
    setWrongAnswers(StorageManager.getWrongAnswers())
  }

  const handleRetry = (wrongAnswer, e) => {
    e.stopPropagation()
    const grammars = grammarDatabase[wrongAnswer.level] || []
    const grammar = grammars.find(g => g.id === wrongAnswer.grammarId)
    if (grammar) {
      onGrammarSelect(grammar, wrongAnswer.level)
    }
  }

  // 将问题ID转换为友好的显示格式
  const formatQuestionId = (questionId, grammarId, level) => {
    // 解析ID格式，如 beg_001_001
    if (!questionId || !grammarId) return '未知题目';
    
    // 获取语法点信息
    const grammars = grammarDatabase[level] || [];
    const grammar = grammars.find(g => g.id === grammarId);
    
    if (!grammar) return questionId;
    
    // 提取题目编号
    const parts = questionId.split('_');
    if (parts.length >= 3) {
      const grammarNumber = parseInt(parts[1]);
      const questionNumber = parseInt(parts[2]);
      
      // 级别名称映射
      const levelNamesChinese = {
        beginner: '初级',
        intermediate: '中级',
        advanced: '高级'
      };
      
      return `${levelNamesChinese[level] || level} ${grammar.title || grammar.form} 第${questionNumber}题`;
    }
    
    return questionId;
  }

  // 清空所有错题
  const handleClearAll = () => {
    if (window.confirm('确定要清空所有错题吗？此操作不可撤销！')) {
      StorageManager.clearWrongAnswers()
      setWrongAnswers([])
    }
  }

  // 清空当前级别错题
  const handleClearCurrentLevel = () => {
    const levelName = selectedLevel ? levelNames[selectedLevel] : '全部';
    if (window.confirm(`确定要清空${levelName}级别的错题吗？此操作不可撤销！`)) {
      if (selectedLevel) {
        StorageManager.clearWrongAnswersByLevel(selectedLevel)
        setWrongAnswers(StorageManager.getWrongAnswers())
      } else {
        // 如果是全部级别，清空所有错题
        StorageManager.clearWrongAnswers()
        setWrongAnswers([])
      }
    }
  }

  return (
    <div className="wrong-answers-view">
      <div className="wrong-answers-header">
        <h2>错题集</h2>
        <p className="wrong-count">共 {wrongAnswers.length} 道错题</p>
      </div>

      {wrongAnswers.length > 0 ? (
        <>
          <div className="level-filter">
            <button
              className={`filter-btn ${selectedLevel === null ? 'active' : ''}`}
              onClick={() => setSelectedLevel(null)}
            >
              全部级别
            </button>
            {Object.keys(groupedByLevel).map(level => (
              <button
                key={level}
                className={`filter-btn ${selectedLevel === level ? 'active' : ''}`}
                onClick={() => setSelectedLevel(level)}
              >
                {levelNames[level]} ({groupedByLevel[level].length})
              </button>
            ))}
            <div className="clear-buttons">
              <button className="clear-btn" onClick={handleClearCurrentLevel}>
                清空当前级别
              </button>
              <button className="clear-btn clear-all-btn" onClick={handleClearAll}>
                清空全部
              </button>
            </div>
          </div>

          <div className="wrong-answers-list">
            {filteredWrongAnswers.map((wrongAnswer, idx) => (
              <div key={idx} className="wrong-item card">
                <div className="wrong-header">
                  <div className="wrong-question">
                    <span className="attempt-badge">
                      {wrongAnswer.attempts} 次错误
                    </span>
                    <p className="question-text">{formatQuestionId(wrongAnswer.questionId, wrongAnswer.grammarId, wrongAnswer.level)}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={(e) => handleRemoveWrongAnswer(wrongAnswer.questionId, e)}
                    title="删除"
                  >
                    ×
                  </button>
                </div>

                <div className="wrong-content">
                  <div className="answer-section">
                    <label>你的答案：</label>
                    <p className="user-answer">{wrongAnswer.userAnswer}</p>
                  </div>

                  <div className="answer-section">
                    <label>正确答案：</label>
                    <p className="correct-answer">{wrongAnswer.correctAnswer}</p>
                  </div>

                  <div className="explanation-section">
                    <label>解析：</label>
                    <p className="explanation-text">{wrongAnswer.explanation}</p>
                  </div>
                </div>

                <div className="wrong-footer">
                  <small className="last-attempt">
                    最后尝试时间：{new Date(wrongAnswer.lastAttempt).toLocaleDateString('zh-CN')}
                  </small>
                  <button
                    className="retry-btn"
                    onClick={(e) => handleRetry(wrongAnswer, e)}
                  >
                    重新练习 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="empty-wrong">
          <span className="empty-icon">✨</span>
          <h3>没有错题</h3>
          <p>做题时出错的问题会自动记录在这里</p>
          <button className="btn-practice" onClick={() => onViewChange('browse')}>
            开始练习
          </button>
        </div>
      )}
    </div>
  )
}

export default WrongAnswersView
