#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const mapping = {
  'int_011': 'int_005',
  'int_012': 'int_006',
  'int_013': 'int_007',
  'int_014': 'int_008',
  'int_015': 'int_009',
  'int_016': 'int_010',
  'int_017': 'int_011',
  'int_018': 'int_012',
};

const dir = '/Users/shunhu/Documents/Codes/korean-grammar-learning/src/data/practice/intermediate';

console.log('🔄 重新编号中级文件...\n');

Object.entries(mapping).forEach(([oldId, newId]) => {
  const oldFile = path.join(dir, `${oldId}.js`);
  const newFile = path.join(dir, `${newId}.js`);

  if (fs.existsSync(oldFile)) {
    let content = fs.readFileSync(oldFile, 'utf-8');

    // 替换编号
    content = content.replace(`practice_${oldId}`, `practice_${newId}`);
    content = content.replace(new RegExp(`'${oldId}_`, 'g'), `'${newId}_`);

    fs.writeFileSync(newFile, content);
    console.log(`✅ ${oldId} → ${newId}`);
  }
});

// 删除旧文件
console.log('\n🗑️  删除旧文件...\n');

Object.keys(mapping).forEach(oldId => {
  const oldFile = path.join(dir, `${oldId}.js`);
  if (fs.existsSync(oldFile)) {
    fs.unlinkSync(oldFile);
    console.log(`✅ 删除 ${oldId}.js`);
  }
});

// 更新 index.js
console.log('\n📝 更新 index.js...\n');

let indexContent = fs.readFileSync(path.join(dir, 'index.js'), 'utf-8');

Object.entries(mapping).forEach(([oldId, newId]) => {
  indexContent = indexContent.replace(
    new RegExp(`import \\{ practice_${oldId} \\} from '\\.\/${oldId}\\.js'`, 'g'),
    `import { practice_${newId} } from './${newId}.js'`
  );
  indexContent = indexContent.replace(
    new RegExp(`  ${oldId}: practice_${oldId},`, 'g'),
    `  ${newId}: practice_${newId},`
  );
});

fs.writeFileSync(path.join(dir, 'index.js'), indexContent);
console.log('✅ 更新 index.js');

console.log('\n✨ 完成！');
console.log('中级语法点现在编号为: int_001 - int_012\n');
