// 所有级别语法练习题主索引文件
const buildPracticeDatabase = (modules) => {
  const database = {}

  Object.entries(modules).forEach(([path, moduleExports]) => {
    Object.entries(moduleExports).forEach(([exportName, value]) => {
      if (!exportName.startsWith('practice_') || !value) {
        return
      }
      const grammarId = exportName.replace('practice_', '')
      database[grammarId] = value
    })
  })

  return database
}

const beginnerModules = import.meta.glob('./beginner/beg_*.js', { eager: true })
const intermediateModules = import.meta.glob('./intermediate/int_*.js', { eager: true })
const advancedModules = import.meta.glob('./advanced/adv_*.js', { eager: true })

export const practiceDatabase = {
  beginner: buildPracticeDatabase(beginnerModules),
  intermediate: buildPracticeDatabase(intermediateModules),
  advanced: buildPracticeDatabase(advancedModules)
}
