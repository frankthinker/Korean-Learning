/**
 * 验证和统计练习题库内容
 * 统计初级、中级、高级的所有练习题数量
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 读取练习题库文件
const practiceDbPath = path.join(__dirname, 'src/data/practiceDatabase.js')
const practiceDbContent = fs.readFileSync(practiceDbPath, 'utf-8')

// 从文件中提取导出的对象
const practiceDbModule = await import(practiceDbPath)
const { practiceDatabase, comprehensiveTestDatabase } = practiceDbModule

console.log('\n========================================')
console.log('📊 韩语语法学习应用 - 练习题库统计')
console.log('========================================\n')

let totalQuestions = 0
let grammarPointsWithPractice = 0
const stats = {}

// 统计针对性练习
console.log('📝 针对性练习统计：')
console.log('----------------------------------------')

Object.keys(practiceDatabase).forEach(level => {
  const levelData = practiceDatabase[level]
  stats[level] = {
    grammarPoints: 0,
    totalQuestions: 0,
    details: {}
  }

  Object.keys(levelData).forEach(grammarId => {
    const questions = levelData[grammarId]
    const count = questions.length
    
    stats[level].grammarPoints++
    stats[level].totalQuestions += count
    stats[level].details[grammarId] = count
    totalQuestions += count
    grammarPointsWithPractice++

    console.log(`  ${grammarId}: ${count} 道题`)
  })

  console.log(`\n  【${level.toUpperCase()}级总计】`)
  console.log(`  ✓ 语法点数：${stats[level].grammarPoints}`)
  console.log(`  ✓ 题目总数：${stats[level].totalQuestions}\n`)
})

// 统计综合测试
console.log('📚 综合测试统计：')
console.log('----------------------------------------')

let comprehensiveTestCount = 0
Object.keys(comprehensiveTestDatabase).forEach(level => {
  const tests = comprehensiveTestDatabase[level]
  comprehensiveTestCount += tests.length
  
  console.log(`  ${level}: ${tests.length} 个综合测试`)
  tests.forEach(test => {
    console.log(`    - ${test.title} (${test.type})`)
  })
})

console.log('\n总体统计：')
console.log('----------------------------------------')
console.log(`✅ 包含练习题的语法点：${grammarPointsWithPractice}`)
console.log(`✅ 针对性练习题总数：${totalQuestions}`)
console.log(`✅ 综合测试数：${comprehensiveTestCount}`)
console.log(`✅ 题型多样性：多选、填空、翻译、语法对比、例句配对、语境判断等`)

// 按难度分布统计
console.log('\n难度分布：')
console.log('----------------------------------------')
Object.keys(stats).forEach(level => {
  const percentage = ((stats[level].totalQuestions / totalQuestions) * 100).toFixed(1)
  console.log(`  ${level}: ${stats[level].totalQuestions} 题 (${percentage}%)`)
})

// 验证数据完整性
console.log('\n数据完整性检查：')
console.log('----------------------------------------')

let validQuestions = 0
let issueCount = 0

Object.keys(practiceDatabase).forEach(level => {
  const levelData = practiceDatabase[level]
  
  Object.keys(levelData).forEach(grammarId => {
    const questions = levelData[grammarId]
    
    questions.forEach((q, idx) => {
      let hasIssues = false
      
      if (!q.id) {
        console.log(`⚠️  ${grammarId} - 第${idx + 1}题：缺少ID`)
        hasIssues = true
      }
      if (!q.type) {
        console.log(`⚠️  ${grammarId} - 第${idx + 1}题：缺少题型`)
        hasIssues = true
      }
      if (!q.question) {
        console.log(`⚠️  ${grammarId} - 第${idx + 1}题：缺少题目`)
        hasIssues = true
      }
      if (!q.explanation) {
        console.log(`⚠️  ${grammarId} - 第${idx + 1}题：缺少解释`)
        hasIssues = true
      }

      // 根据题型检查必要字段
      if (q.type === 'multiple-choice' || q.type === 'context-judgment') {
        if (!q.options || q.options.length === 0) {
          console.log(`⚠️  ${grammarId} - 第${idx + 1}题：缺少选项`)
          hasIssues = true
        }
      } else if (q.type === 'fill-blank') {
        if (!q.correctAnswers && !q.correctAnswer) {
          console.log(`⚠️  ${grammarId} - 第${idx + 1}题：缺少正确答案`)
          hasIssues = true
        }
      } else if (q.type === 'translation') {
        if (!q.expectedKorean && !q.correctAnswer) {
          console.log(`⚠️  ${grammarId} - 第${idx + 1}题：缺少期望的韩文答案`)
          hasIssues = true
        }
      }

      if (!hasIssues) {
        validQuestions++
      } else {
        issueCount++
      }
    })
  })
})

if (issueCount === 0) {
  console.log(`✅ 所有${validQuestions}道题目都通过了完整性检查！`)
} else {
  console.log(`❌ 发现${issueCount}个问题，请修复`)
}

console.log('\n========================================')
console.log('✨ 练习题库内容充实完成！')
console.log('========================================\n')
