import { grammarDatabase, categories } from './src/data/grammarData.js'
import { practiceDatabase } from './src/data/practiceDatabase.js'

console.log('=== 语法数据分析 ===\n')

// 分析每个级别的语法点
console.log('1. 语法点总数统计:')
console.log(`初级: ${grammarDatabase.beginner?.length || 0} 个`)
console.log(`中级: ${grammarDatabase.intermediate?.length || 0} 个`)
console.log(`高级: ${grammarDatabase.advanced?.length || 0} 个`)
console.log(`总计: ${(grammarDatabase.beginner?.length || 0) + (grammarDatabase.intermediate?.length || 0) + (grammarDatabase.advanced?.length || 0)} 个\n`)

// 检查分类
console.log('2. 分类标签:')
console.log('初级分类:', categories.beginner)
console.log('中级分类:', categories.intermediate)
console.log('高级分类:', categories.advanced)
console.log()

// 检查每个级别的实际分类
console.log('3. 初级语法点的实际分类:')
const begCategories = {}
grammarDatabase.beginner?.forEach(g => {
  const cat = g.category || '(未分类)'
  begCategories[cat] = (begCategories[cat] || 0) + 1
})
console.log(begCategories)

console.log('\n4. 中级语法点的实际分类:')
const intCategories = {}
grammarDatabase.intermediate?.forEach(g => {
  const cat = g.category || '(未分类)'
  intCategories[cat] = (intCategories[cat] || 0) + 1
})
console.log(intCategories)

console.log('\n5. 高级语法点的实际分类:')
const advCategories = {}
grammarDatabase.advanced?.forEach(g => {
  const cat = g.category || '(未分类)'
  advCategories[cat] = (advCategories[cat] || 0) + 1
})
console.log(advCategories)

// 检查练习题覆盖
console.log('\n6. 练习题覆盖情况:')
let totalPractice = 0
let coveredGrammar = 0
const uncoveredGrammar = []

const allGrammar = [
  ...grammarDatabase.beginner?.map(g => ({ ...g, level: 'beginner' })) || [],
  ...grammarDatabase.intermediate?.map(g => ({ ...g, level: 'intermediate' })) || [],
  ...grammarDatabase.advanced?.map(g => ({ ...g, level: 'advanced' })) || []
]

allGrammar.forEach(g => {
  const db = practiceDatabase[g.level]
  const questions = db?.[g.id]
  if (questions && questions.length > 0) {
    coveredGrammar++
    totalPractice += questions.length
  } else {
    uncoveredGrammar.push(`${g.id} (${g.form})`)
  }
})

console.log(`总练习题数: ${totalPractice}`)
console.log(`已覆盖的语法点: ${coveredGrammar}/${allGrammar.length}`)
console.log(`平均每个语法点的题数: ${(totalPractice / coveredGrammar).toFixed(1)}`)
console.log(`未覆盖的语法点: ${uncoveredGrammar.length}`)
if (uncoveredGrammar.length > 0) {
  console.log('未覆盖列表:')
  uncoveredGrammar.forEach(u => console.log(`  - ${u}`))
}
