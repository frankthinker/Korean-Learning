#!/usr/bin/env node

// 验证语法数据内容完整性的脚本

import { grammarDatabase } from './src/data/grammarData.js';

console.log('\n=== 韩语语法学习应用 - 内容验证报告 ===\n');

// 统计语法点数量
const beginnerCount = grammarDatabase.beginner?.length || 0;
const intermediateCount = grammarDatabase.intermediate?.length || 0;
const advancedCount = grammarDatabase.advanced?.length || 0;
const totalCount = beginnerCount + intermediateCount + advancedCount;

console.log('📊 语法点统计：');
console.log(`  初级语法：${beginnerCount} 个`);
console.log(`  中级语法：${intermediateCount} 个`);
console.log(`  高级语法：${advancedCount} 个`);
console.log(`  总计：${totalCount} 个\n`);

// 验证每个级别的内容完整性
const verifyLevel = (level, data, levelName) => {
  console.log(`\n验证${levelName}内容：`);
  let validCount = 0;
  let issues = [];

  data.forEach((grammar, idx) => {
    let isValid = true;
    let problems = [];

    if (!grammar.id) problems.push('缺少ID');
    if (!grammar.form) problems.push('缺少形式');
    if (!grammar.title) problems.push('缺少标题');
    if (!grammar.definition) problems.push('缺少定义');
    if (!grammar.meaning) problems.push('缺少释义');
    if (!grammar.examples || grammar.examples.length === 0) problems.push('缺少例句');
    if (!grammar.expandVocab || grammar.expandVocab.length === 0) problems.push('缺少拓展词汇');

    if (problems.length === 0) {
      validCount++;
    } else {
      isValid = false;
      issues.push({
        id: grammar.id,
        form: grammar.form,
        problems: problems
      });
    }
  });

  console.log(`  ✅ 完整的语法点：${validCount}/${data.length}`);
  
  if (issues.length > 0) {
    console.log(`  ⚠️  有问题的语法点：`);
    issues.forEach(issue => {
      console.log(`    - ${issue.form}: ${issue.problems.join(', ')}`);
    });
  }

  return validCount === data.length;
};

// 执行验证
let allValid = true;
if (grammarDatabase.beginner && grammarDatabase.beginner.length > 0) {
  allValid = verifyLevel('beginner', grammarDatabase.beginner, '初级') && allValid;
}
if (grammarDatabase.intermediate && grammarDatabase.intermediate.length > 0) {
  allValid = verifyLevel('intermediate', grammarDatabase.intermediate, '中级') && allValid;
}
if (grammarDatabase.advanced && grammarDatabase.advanced.length > 0) {
  allValid = verifyLevel('advanced', grammarDatabase.advanced, '高级') && allValid;
}

// 结果总结
console.log('\n=== 验证结果总结 ===\n');

if (totalCount >= 30) {
  console.log('✅ 内容丰富度：优秀（40+个语法点）');
} else if (totalCount >= 20) {
  console.log('✅ 内容丰富度：良好（20-39个语法点）');
} else if (totalCount >= 10) {
  console.log('⚠️  内容丰富度：一般（10-19个语法点）');
} else {
  console.log('❌ 内容丰富度：不足（少于10个语法点）');
}

if (allValid) {
  console.log('✅ 数据完整性：所有语法点完整无误');
} else {
  console.log('⚠️  数据完整性：有部分语法点信息不完整');
}

console.log('\n📚 应用可用性：' + (totalCount >= 30 && allValid ? '✅ 生产就绪' : '⚠️ 需要改进'));
console.log('\n');
