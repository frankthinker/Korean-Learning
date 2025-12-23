import { practiceDatabase } from './src/data/practiceDatabase.js'

const stats = { beginner: {}, intermediate: {}, advanced: {} }

Object.entries(practiceDatabase).forEach(([level, grammars]) => {
  Object.entries(grammars).forEach(([grammarId, questions]) => {
    if (Array.isArray(questions)) {
      stats[level][grammarId] = questions.length
    }
  })
})

console.log('=== 练习题覆盖统计 ===\n')
console.log('初级语法点:',  Object.keys(stats.beginner).length, '个')
Object.entries(stats.beginner).forEach(([id, count]) => {
  console.log(`  ${id}: ${count}题`)
})

console.log('\n中级语法点:', Object.keys(stats.intermediate).length, '个')
Object.entries(stats.intermediate).forEach(([id, count]) => {
  console.log(`  ${id}: ${count}题`)
})

console.log('\n高级语法点:', Object.keys(stats.advanced).length, '个')
Object.entries(stats.advanced).forEach(([id, count]) => {
  console.log(`  ${id}: ${count}题`)
})

const totalQuestions = Object.values(stats).reduce((sum, level) => 
  sum + Object.values(level).reduce((a, b) => a + b, 0), 0)
console.log(`\n总题数: ${totalQuestions}`)
