# Data 目录结构（2025-12-23）

## 1. 结构概览
```
data/
├── grammar/          # 语法数据库（模块化）
│   ├── base.js       # 原始语法点（含 extended 数据合并逻辑）
│   ├── additions.js  # 新增语法点与分类标签
│   ├── extended.js   # TOPIK 扩展数据（仍自动注入）
│   └── index.js      # 汇总、搜索、分类工具
├── practice/         # 练习题（按级别拆分，每个语法点独立文件）
│   ├── beginner/beg_xxx.js
│   ├── intermediate/int_xxx.js
│   ├── advanced/adv_xxx.js
│   └── index.js      # 使用 import.meta.glob 自动汇总
├── tests/
│   └── comprehensiveTestDatabase.js  # 综合测试题库
├── legacy/           # 旧数据与备份，避免删除但不再直接引用
├── docs/             # 清理记录、数据维护说明
└── grammarData.js / comprehensiveTestDatabase.js
    （向后兼容入口，统一 re-export 新目录）
```

## 2. 当前核心数据

| 模块 | 文件 | 说明 |
| --- | --- | --- |
| 语法库 | `grammar/index.js` | 汇总 `base + additions + extended`，输出 `grammarDatabase`、`categories`、`searchGrammar` 等。所有新语法点（含 tags）集中在 `additions.js`，便于维护。|
| 练习库 | `practice/index.js` | 借助 `import.meta.glob` 自动加载 `beg_*.js / int_*.js / adv_*.js`；每个文件可以导出纯数组或含 `title/tags/questions` 的对象，新版 PracticeModule 会自动显示标签与副标题。|
| 综合测试 | `tests/comprehensiveTestDatabase.js` | 结构不变，仅移动至 tests 目录；`src/data/comprehensiveTestDatabase.js` 保持旧路径。|

## 3. Legacy & Docs

- `legacy/grammar` 与 `legacy/practice`：存放旧的 supplement、合并脚本、完整备份。**不要删除**，以便回溯。
- `docs/CLEANUP_SUMMARY.txt`：历史清理记录。

## 4. 新增/维护流程（2025-12-23 起）

### 添加语法点
1. 在 `grammar/additions.js` 按级别追加条目：
   - 必填字段：`id`, `form`, `title`, `category`, `definition`, `meaning`, `partOfSpeech`, `examples`, `notes`, `expandVocab`, `tags`。
   - `tags` 用于后续分类筛选（BrowseView 搜索会检索 tags）。
2. 若需要新增分类，在 `grammarAdditions.categories` 中追加即可，`grammar/index.js` 会自动合并并去重。

### 添加练习题
1. 在 `practice/<level>/` 新建 `beg_026.js` 这类文件，导出：
   ```js
   export const practice_beg_026 = {
     grammarId: 'beg_026',
     title: '...'
     tags: ['分类1', '分类2'],
     questions: [ ... ] // 5-10 道多选题，explanation 必须为中文
   }
   ```
   - 也可以继续导出纯数组（旧格式），系统会自动兼容。
2. 题目要求：
   - `type: 'multiple-choice'`（当前版本仅渲染这一类型）
   - `options` 至少 4 个，只设置 **一个** `correct: true`
   - `explanation` 用中文说明正确/错误理由，贴合中文母语者需求
   - `source` 标注素材来源或“Codex 扩展题库”

### 注意事项
- PracticeModule 会显示 `title/subtitle/tags`，因此为新题组补充语义化标签可提升筛选体验。
- 旧文件若需参考，请从 `legacy/` 目录复制，勿直接在生产目录中混合历史版本。

## 5. 验证
- 语法或练习数据更新后执行 `npm run build`，确保 Vite 编译通过。
- 新增题目若涉及 UI display（tags/description），记得在浏览器中手动点开对应语法点查看。

---
*最后更新: 2025-12-23*
*整理版本: v2.0*
