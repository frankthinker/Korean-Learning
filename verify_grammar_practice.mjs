#!/usr/bin/env node

import extendedGrammarData from './src/data/grammarDataExtended.js';
import { grammarDatabase } from './src/data/grammarData.js';

// 导入所有练习题数据
import { intermediatePracticeDatabase } from './src/data/practice/intermediate/index.js';
import { advancedPracticeDatabase } from './src/data/practice/advanced/index.js';

console.log('=== 验证语法知识点和练习题 ===\n');

// 检查中级语法点
console.log('📚 中级语法知识点检查：');
const intermediateGrammars = grammarDatabase.intermediate || [];
console.log(`✓ 中级语法点总数: ${intermediateGrammars.length}`);

// 显示新增的语法点
const newIntermediateIds = ['int_013', 'int_014', 'int_015', 'int_016', 'int_017', 'int_018', 'int_019', 'int_020', 'int_021', 'int_022', 'int_023', 'int_024', 'int_025', 'int_026', 'int_027', 'int_028', 'int_029', 'int_030', 'int_031', 'int_032'];
let newIntermediateCount = 0;
newIntermediateIds.forEach(id => {
  const found = intermediateGrammars.find(g => g.id === id);
  if (found) {
    newIntermediateCount++;
    console.log(`  ✓ ${id}: ${found.form} - ${found.title}`);
  } else {
    console.log(`  ✗ ${id}: 未找到`);
  }
});
console.log(`✓ 新增中级语法点: ${newIntermediateCount}/20\n`);

// 检查中级练习题
console.log('📝 中级练习题检查：');
const intermediateQuestionsCount = Object.keys(intermediatePracticeDatabase).length;
console.log(`✓ 中级练习题库条目: ${intermediateQuestionsCount}`);

let totalIntermediateQuestions = 0;
newIntermediateIds.forEach(id => {
  const questions = intermediatePracticeDatabase[id];
  if (questions && questions.length > 0) {
    totalIntermediateQuestions += questions.length;
    console.log(`  ✓ ${id}: ${questions.length}道题目`);
  } else {
    console.log(`  ✗ ${id}: 无题目`);
  }
});
console.log(`✓ 新增中级练习题总数: ${totalIntermediateQuestions}道\n`);

// 检查高级语法点
console.log('📚 高级语法知识点检查：');
const advancedGrammars = grammarDatabase.advanced || [];
console.log(`✓ 高级语法点总数: ${advancedGrammars.length}`);

// 显示新增的高级语法点
const newAdvancedIds = ['adv_011', 'adv_012', 'adv_013', 'adv_014', 'adv_015', 'adv_016', 'adv_017', 'adv_018', 'adv_019', 'adv_020'];
let newAdvancedCount = 0;
newAdvancedIds.forEach(id => {
  const found = advancedGrammars.find(g => g.id === id);
  if (found) {
    newAdvancedCount++;
    console.log(`  ✓ ${id}: ${found.form} - ${found.title}`);
  } else {
    console.log(`  ✗ ${id}: 未找到`);
  }
});
console.log(`✓ 新增高级语法点: ${newAdvancedCount}/10\n`);

// 检查高级练习题
console.log('📝 高级练习题检查：');
const advancedQuestionsCount = Object.keys(advancedPracticeDatabase).length;
console.log(`✓ 高级练习题库条目: ${advancedQuestionsCount}`);

let totalAdvancedQuestions = 0;
newAdvancedIds.forEach(id => {
  const questions = advancedPracticeDatabase[id];
  if (questions && questions.length > 0) {
    totalAdvancedQuestions += questions.length;
    console.log(`  ✓ ${id}: ${questions.length}道题目`);
  } else {
    console.log(`  ✗ ${id}: 无题目`);
  }
});
console.log(`✓ 新增高级练习题总数: ${totalAdvancedQuestions}道\n`);

// 总结
console.log('=== 验证总结 ===');
console.log(`✓ 新增中级语法点: ${newIntermediateCount}/20`);
console.log(`✓ 新增中级练习题: ${totalIntermediateQuestions}道`);
console.log(`✓ 新增高级语法点: ${newAdvancedCount}/10`);
console.log(`✓ 新增高级练习题: ${totalAdvancedQuestions}道`);
console.log(`\n✅ 总计新增: ${newIntermediateCount + newAdvancedCount}/30个语法知识点，${totalIntermediateQuestions + totalAdvancedQuestions}道练习题`);

// 检查所有题目的完整性
console.log('\n=== 题目完整性检查 ===');
let completeQuestions = 0;
let incompleteQuestions = 0;

const checkQuestions = (questionsDb, type) => {
  Object.entries(questionsDb).forEach(([id, questions]) => {
    if (Array.isArray(questions)) {
      questions.forEach((q, idx) => {
        const hasRequiredFields = q.id && q.type && q.question && q.options && q.explanation;
        if (hasRequiredFields) {
          completeQuestions++;
        } else {
          incompleteQuestions++;
          console.log(`⚠️  ${type} ${id} 题目${idx + 1}缺少必要字段`);
        }
      });
    }
  });
};

checkQuestions(intermediatePracticeDatabase, '中级');
checkQuestions(advancedPracticeDatabase, '高级');

console.log(`✓ 完整的题目: ${completeQuestions}道`);
if (incompleteQuestions > 0) {
  console.log(`✗ 不完整的题目: ${incompleteQuestions}道`);
} else {
  console.log('✅ 所有题目都完整无缺！');
}
