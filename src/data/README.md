# Data 文件夹说明

## 📁 当前使用的核心文件

### 1. `grammarData.js` (15KB)
- **用途**: 语法知识点元数据
- **包含**: 所有初、中、高级语法点的定义、例句、说明
- **被引用**: Sidebar, BrowseView, FavoritesView, WrongAnswersView
- **维护**: 添加新语法点时需要更新此文件

### 2. `practiceDatabase.js` (110KB)
- **用途**: 核心练习题库
- **包含**: 
  - beginner (初级): beg_001 - beg_009
  - intermediate (中级): int_001 - int_018
  - advanced (高级): adv_001 - adv_002, adv_010 - adv_012
- **被引用**: PracticeModule
- **维护**: 这是项目最重要的数据文件，所有题目修改在此进行

### 3. `comprehensiveTestDatabase.js` (2.8KB)
- **用途**: 综合测试题库
- **被引用**: PracticeModule
- **维护**: 更新综合测试题目时修改此文件

## 📦 扩展资源文件（保留待用）

### 4. `grammarDataExtended.js` (15KB)
- **用途**: 扩展语法知识点数据
- **状态**: 暂未使用，保留作为未来扩展参考

### 5. `practiceDatabase_topik.js` (35KB)
- **用途**: 真实TOPIK题目参考
- **状态**: 暂未使用，保留作为题库扩展来源

### 6. `topikExtendedGrammar.js` (13KB)
- **用途**: TOPIK扩展语法定义
- **状态**: 暂未使用，保留作为未来高级内容扩展

## 🗄️ 归档文件（archive 文件夹）

以下文件已完成历史使命，移至 `archive/` 文件夹：

- `advanced_supplement_1.js` - 已合并到 practiceDatabase.js
- `advanced_supplement_2.js` - 已合并到 practiceDatabase.js
- `intermediate_supplement_1.js` - 已合并到 practiceDatabase.js
- `intermediate_supplement_2.js` - 已合并到 practiceDatabase.js
- `intermediate_supplement_3.js` - 已合并到 practiceDatabase.js
- `intermediate_supplement_intro.js` - 已合并到 practiceDatabase.js
- `grammarDataComplete.js` - 空文件
- `grammarData_new.js` - 空文件
- `practiceDatabase_merged.js` - 临时合并文件

**建议**: 这些文件可以在确认项目运行正常后安全删除。

## 💾 备份文件（backup 文件夹）

- `practiceDatabase_backup.js` (53KB) - practiceDatabase.js 的旧版本备份

**建议**: 保留一段时间，确认无需回滚后可删除。

## 🔄 未来维护建议

### 添加新语法点
1. 在 `grammarData.js` 中添加语法点定义
2. 在 `practiceDatabase.js` 对应级别中添加练习题（建议每个语法点8-10题）
3. 运行 `npm run build` 验证无语法错误
4. 测试网页加载是否正常

### 扩展题库
1. 参考 `practiceDatabase_topik.js` 中的真实TOPIK题目
2. 参考 `topikExtendedGrammar.js` 添加高级语法点
3. 遵循现有题目格式（type: 'multiple-choice', 'fill-blank', 'context-judgment' 等）
4. 确保每道题都有 `source: 'TOPIK Level X'` 标注

### 数据文件管理原则
- ✅ 保持 `practiceDatabase.js` 为单一数据源
- ✅ 新增内容直接添加到主文件，避免创建supplement文件
- ✅ 每次修改后运行构建验证
- ✅ 定期备份 `practiceDatabase.js`

---
*最后更新: 2025-12-22*
*整理版本: v1.0*
