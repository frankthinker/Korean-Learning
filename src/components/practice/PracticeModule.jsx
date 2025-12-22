import React, { useState } from 'react'
import StorageManager from '../../utils/storageManager'
import { practiceDatabase } from '../../data/practiceDatabase'
import { comprehensiveTestDatabase } from '../../data/comprehensiveTestDatabase'
import './PracticeModule.css'

function PracticeModule({ grammar, level }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [practiceType, setPracticeType] = useState('single') // single, comprehensive
  const [score, setScore] = useState(0)
  const [completedQuestions, setCompletedQuestions] = useState(0)

  // 从数据库加载练习题目
  const loadQuestionsFromDatabase = () => {
    // 尝试从数据库获取该语法点的练习题
    if (grammar && grammar.id && practiceDatabase[level] && practiceDatabase[level][grammar.id]) {
      return practiceDatabase[level][grammar.id]
    }
    // 如果没有找到，返回空数组（不再生成默认题目）
    return []
  }

  const questions = loadQuestionsFromDatabase()

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      alert('请输入答案')
      return
    }

    const question = questions[currentQuestion]
    let isCorrect = false

    if (question.type === 'multiple-choice' || question.type === 'context-judgment') {
      const selectedIndex = parseInt(userAnswer)
      if (question.options && question.options[selectedIndex]) {
        isCorrect = question.options[selectedIndex].correct
      }
    } else if (question.type === 'fill-blank') {
      // 支持多个正确答案
      const correctAnswers = Array.isArray(question.correctAnswers) ? question.correctAnswers : [question.correctAnswer]
      isCorrect = correctAnswers.some(correct => 
        userAnswer.toLowerCase().trim() === correct.toLowerCase().trim()
      )
    } else if (question.type === 'translation') {
      // 翻译题的宽松匹配
      const expectedAnswers = Array.isArray(question.expectedKorean) ? question.expectedKorean : [question.expectedKorean]
      isCorrect = expectedAnswers.some(expected => 
        userAnswer.toLowerCase().includes(expected.toLowerCase())
      )
    }

    if (isCorrect) {
      setScore(score + 1)
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
      // 获取正确答案，支持多种题型
      let correctAnswer = ''
      let displayUserAnswer = userAnswer
      
      if (question.type === 'multiple-choice' || question.type === 'context-judgment') {
        // 对于选择题，找到正确选项
        const correctOption = question.options?.find(option => option.correct)
        correctAnswer = correctOption ? correctOption.text : ''
        
        // 将用户答案从索引转换为选项文本
        const userOptionIndex = parseInt(userAnswer)
        if (!isNaN(userOptionIndex) && question.options && question.options[userOptionIndex]) {
          displayUserAnswer = question.options[userOptionIndex].text
        }
      } else if (question.type === 'fill-blank') {
        // 对于填空题，使用第一个正确答案
        correctAnswer = question.correctAnswers?.[0] || question.correctAnswer || ''
      } else if (question.type === 'translation') {
        // 对于翻译题，显示期望的答案
        correctAnswer = question.expectedKorean || ''
      }
      
      StorageManager.addWrongAnswer(
        question.id,
        grammar.id,
        level,
        displayUserAnswer,
        correctAnswer,
        question.explanation
      )
    }

    setCompletedQuestions(completedQuestions + 1)
    setSubmitted(true)
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setUserAnswer('')
      setSubmitted(false)
      setShowExplanation(false)
      setIsCorrect(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setUserAnswer('')
    setSubmitted(false)
    setShowExplanation(false)
    setIsCorrect(false)
    setScore(0)
    setCompletedQuestions(0)
  }

  if (practiceType === 'comprehensive') {
    const comprehensiveTests = comprehensiveTestDatabase[level] || []
    
    // 如果有综合测试，显示第一个测试
    if (comprehensiveTests.length > 0) {
      const currentTest = comprehensiveTests[0]
      return (
        <div className="practice-module">
          <div className="practice-header">
            <h3>综合测试 - {currentTest.title}</h3>
            <button className="back-to-single" onClick={() => setPracticeType('single')}>
              ← 回到单题练习
            </button>
          </div>
          <div className="comprehensive-test">
            {currentTest.passage && (
              <div className="passage">
                <h4>阅读材料</h4>
                <p>{currentTest.passage}</p>
              </div>
            )}
            
            {currentTest.dialogue && (
              <div className="dialogue">
                <h4>对话</h4>
                {currentTest.dialogue.map((line, idx) => (
                  <div key={idx} className="dialogue-line">
                    <strong>{line.speaker}:</strong> {line.text}
                  </div>
                ))}
              </div>
            )}
            
            <div className="test-questions">
              <h4>问题</h4>
              {currentTest.questions?.map((question, idx) => (
                <div key={idx} className="question-item">
                  <p>{idx + 1}. {question.question}</p>
                  <div className="options">
                    {question.options?.map((option, optIdx) => (
                      <div key={optIdx} className="option">
                        <label>
                          <input type="radio" name={`question-${idx}`} value={optIdx} />
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-submit" onClick={() => setPracticeType('single')}>
              完成测试
            </button>
          </div>
        </div>
      )
    } else {
      // 如果没有综合测试，显示提示信息
      return (
        <div className="practice-module">
          <div className="practice-header">
            <h3>综合测试</h3>
            <button className="back-to-single" onClick={() => setPracticeType('single')}>
              ← 回到单题练习
            </button>
          </div>
          <div className="comprehensive-info">
            <p>该级别的综合测试正在完善中，敬请期待！</p>
          </div>
        </div>
      )
    }
  }

  // 如果没有加载到练习题
  if (questions.length === 0) {
    return (
      <div className="practice-module">
        <div className="no-practice-info">
          <h3>⚠️ 练习题加载失败</h3>
          <p>该语法点的练习题正在完善中，请稍候。</p>
          <p>语法点ID: {grammar?.id}</p>
          <p>级别: {level}</p>
        </div>
      </div>
    )
  }

  if (completedQuestions === questions.length) {
    return (
      <div className="practice-module">
        <div className="completion-card">
          <h3>🎉 练习完成！</h3>
          <div className="score-display">
            <p className="score-value">{score}/{questions.length}</p>
            <p className="score-text">正确答案</p>
          </div>
          <p className="score-percentage">
            正确率：{Math.round((score / questions.length) * 100)}%
          </p>
          <div className="completion-buttons">
            <button className="btn-reset" onClick={handleReset}>
              重新练习
            </button>
            <button className="btn-continue" onClick={() => setPracticeType('comprehensive')}>
              进行综合测试
            </button>
          </div>
          {/* 调试信息 */}
          <div style={{marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px'}}>
            <p>调试信息：</p>
            <p>当前级别: {level}</p>
            <p>综合测试数量: {comprehensiveTestDatabase[level]?.length || 0}</p>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="practice-module">
      <div className="practice-header">
        <h3>针对性练习</h3>
        <span className="question-counter">
          {currentQuestion + 1}/{questions.length}
        </span>
      </div>

      <div className="progress-bar-small" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>

      <div className="question-card">
        <div className="question-content">
          <h4>{question.question}</h4>

          {(question.type === 'multiple-choice' || question.type === 'context-judgment') && (
            <div className="options">
              {question.options?.map((option, idx) => (
                <label key={idx} className={`option-label ${userAnswer === idx.toString() ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="answer"
                    value={idx}
                    checked={userAnswer === idx.toString()}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    disabled={submitted}
                    style={{ cursor: submitted ? 'not-allowed' : 'pointer' }}
                  />
                  <span className={`option-text ${submitted && option.correct ? 'correct' : ''} ${submitted && !option.correct && userAnswer === idx.toString() ? 'incorrect' : ''}`}>
                    {option.text}
                  </span>
                </label>
              ))}
            </div>
          )}

          {(question.type === 'fill-blank' || question.type === 'translation') && (
            <div className="input-group">
              <input
                type="text"
                className="answer-input"
                placeholder="输入你的答案..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={submitted}
              />
              {question.tips && <p className="question-tips">💡 提示：{question.tips}</p>}
            </div>
          )}

          {question.type === 'sentence-matching' && (
            <div className="matching-section">
              <div className="matching-pairs">
                {question.pairs?.map((pair, idx) => (
                  <div key={idx} className="pair">
                    <div className="korean-text">{pair.korean}</div>
                    <div className="chinese-text">{pair.chinese || pair.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {question.type === 'grammar-comparison' && (
            <div className="comparison-section">
              <div className="comparison-item">
                <h5>对比A:</h5>
                <p>{question.optionA}</p>
              </div>
              <div className="comparison-item">
                <h5>对比B:</h5>
                <p>{question.optionB}</p>
              </div>
            </div>
          )}

          {showExplanation && (
            <div className={`explanation ${isCorrect ? 'correct' : submitted ? 'incorrect' : 'info'}`}>
              <p className="explanation-title">
                {isCorrect ? '✓ 答案正确！' : submitted ? '✗ 答案错误' : 
                 question.type === 'sentence-matching' ? '✓ 配对说明' : 
                 question.type === 'grammar-comparison' ? '✓ 语法对比' : 
                 '✓ 解释'}
              </p>
              <p className="explanation-text">{question.explanation}</p>
            </div>
          )}
        </div>

        <div className="question-actions">
          {!submitted ? (
            <button className="btn-submit" onClick={handleSubmitAnswer}>
              提交答案
            </button>
          ) : (
            <button className="btn-next" onClick={handleNextQuestion}>
              {currentQuestion === questions.length - 1 ? '完成练习' : '下一题'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PracticeModule
