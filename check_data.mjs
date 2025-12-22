import grammarData from './src/data/grammarData.js'
import extendedData from './src/data/grammarDataExtended.js'

console.log('=== 语法数据检查报告 ===\n')

const allData = {
  beginner: grammarData.grammarDatabase?.beginner || [],
  intermediate: (grammarData.grammarDatabase?.intermediate || []).concat(extendedData?.extendedGrammarData?.intermediate || []),
  advanced: (grammarData.grammarDatabase?.advanced || []).concat(extendedData?.extendedGrammarData?.advanced || [])
}

console.log('总语法点数:')
console.log(`初级: ${allData.beginner.length}`)
console.log(`中级: ${allData.intermediate.length}`)
console.log(`高级: ${allData.advanced.length}`)
console.log(`总计: ${allData.beginner.length + allData.intermediate.length + allData.advanced.length}\n`)

// 检查分类
console.log('分类分布:')
Object.entries(allData).forEach(([level, grammars]) => {
  const cats = {}
  grammars.forEach(g => {
    const cat = g.category || '未分类'
    cats[cat] = (cats[cat] || 0) + 1
  })
  console.log(`${level}:`, cats)
})
