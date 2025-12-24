import { grammarDatabase as baseGrammarDatabase, categories as baseCategories } from './base.js'
import { grammarAdditions } from './additions.js'

const mergeLevelData = (level) => {
  const baseList = baseGrammarDatabase[level] || []
  const additionList = grammarAdditions[level] || []
  return [...baseList, ...additionList]
}

const unique = (items = []) => {
  const filtered = items.filter(Boolean)
  return Array.from(new Set(filtered))
}

export const grammarDatabase = {
  beginner: mergeLevelData('beginner'),
  intermediate: mergeLevelData('intermediate'),
  advanced: mergeLevelData('advanced')
}

const additionCategories = grammarAdditions.categories || {}

export const categories = {
  beginner: unique([...(baseCategories.beginner || []), ...(additionCategories.beginner || [])]),
  intermediate: unique([...(baseCategories.intermediate || []), ...(additionCategories.intermediate || [])]),
  advanced: unique([...(baseCategories.advanced || []), ...(additionCategories.advanced || [])])
}

export const getGrammarByLevel = (level) => {
  return grammarDatabase[level] || []
}

export const filterGrammarByCategory = (level, category) => {
  if (!category) return getGrammarByLevel(level)
  return getGrammarByLevel(level).filter(grammar => grammar.category === category)
}

export const searchGrammar = (query, level = null) => {
  if (!query) return []

  const normalizedQuery = query.trim()
  if (!normalizedQuery) return []

  const levels = level ? [level] : ['beginner', 'intermediate', 'advanced']
  const results = []

  levels.forEach(lv => {
    const levelGrammars = grammarDatabase[lv] || []
    levelGrammars.forEach(grammar => {
      const matches =
        grammar.form.includes(normalizedQuery) ||
        grammar.title.includes(normalizedQuery) ||
        grammar.meaning.includes(normalizedQuery) ||
        grammar.definition.includes(normalizedQuery) ||
        grammar.tags?.some(tag => tag.includes(normalizedQuery)) ||
        grammar.examples?.some(
          ex => ex.korean.includes(normalizedQuery) || ex.chinese.includes(normalizedQuery)
        )

      if (matches) {
        results.push({ ...grammar, level: lv })
      }
    })
  })

  return results
}
