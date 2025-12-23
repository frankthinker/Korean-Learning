# 项目架构文档

## 🏗️ 系统架构概览

```
韩语多级别语法学习网页
│
├── 前端应用层 (React + Vite)
│   ├── 页面层 (Views)
│   ├── 组件层 (Components)
│   ├── 状态管理 (React Hooks)
│   └── 数据层 (Local Storage)
│
├── 数据层
│   ├── 语法知识库 (grammarData.js)
│   ├── 用户数据存储 (StorageManager.js)
│   └── 本地缓存 (LocalStorage)
│
└── 样式层
    ├── 全局样式 (global.css)
    ├── 组件样式 (component.css)
    └── 响应式设计 (Media Queries)
```

## 📁 文件结构详解

### 核心目录

```
src/
├── components/                  # React 组件
│   ├── Header.jsx              # 顶部导航栏（包含搜索、级别选择、深色模式）
│   ├── Sidebar.jsx             # 侧边栏导航（包含功能模块和分类筛选）
│   ├── MainContent.jsx         # 主内容区域路由器
│   ├── common/                 # 通用组件
│   │   ├── GrammarCard.jsx    # 语法卡片组件（可复用）
│   │   └── GrammarCard.css
│   ├── views/                  # 页面级组件
│   │   ├── BrowseView.jsx     # 浏览语法页面
│   │   ├── DetailView.jsx     # 语法详情页面
│   │   ├── FavoritesView.jsx  # 我的收藏页面
│   │   ├── WrongAnswersView.jsx # 错题集页面
│   │   ├── TipsView.jsx       # 学习技巧页面
│   │   └── [views].css        # 各页面样式
│   └── practice/               # 练习相关组件
│       ├── PracticeModule.jsx # 练习模块（选择题、填空题等）
│       └── PracticeModule.css
│
├── data/
│   └── grammarData.js         # 韩语语法知识库
│                              # 包含初级、中级、高级3个级别
│                              # 每个语法点包含定义、例句、拓展词汇等
│
├── utils/
│   └── storageManager.js      # 本地存储管理工具类
│                              # 处理收藏、错题、学习进度等本地数据
│
├── styles/
│   └── global.css             # 全局样式
│                              # CSS 变量定义
│                              # 通用组件样式（卡片、按钮等）
│                              # 响应式设计（媒体查询）
│
├── App.jsx                    # 主应用组件
│                              # 全局状态管理（级别、搜索等）
│                              # 深色模式切换
│                              # 欢迎提示显示
│
└── main.jsx                   # 应用入口
```

## 🔄 数据流架构

### 1. 语法浏览流程
```
用户操作
    ↓
App (状态更新: currentLevel, searchQuery, selectedCategory)
    ↓
MainContent (路由到 BrowseView)
    ↓
BrowseView (获取语法数据)
    ↓
grammarDatabase (语法数据库)
    ↓
GrammarCard (展示语法卡片)
```

### 2. 语法详情流程
```
点击 GrammarCard
    ↓
App (更新 selectedGrammar, currentView='detail')
    ↓
DetailView (展示详情)
    ↓
用户点击练习
    ↓
PracticeModule (练习题目)
```

### 3. 收藏流程
```
点击收藏按钮
    ↓
StorageManager.addFavorite()
    ↓
LocalStorage 更新
    ↓
GrammarCard 状态更新
    ↓
UI 重新渲染
```

### 4. 错题流程
```
提交练习答案
    ↓
答案验证
    ↓
if (错误)
    ├─→ StorageManager.addWrongAnswer()
    ├─→ LocalStorage 保存错题
    └─→ 显示错误反馈
else
    └─→ 显示正确反馈
```

## 🔌 组件通信

### Props 传递
```
App 
├─→ Header (currentLevel, onLevelChange, isDarkMode, onToggleDarkMode)
├─→ Sidebar (currentLevel, selectedCategory, onCategoryChange, currentView)
└─→ MainContent (currentLevel, selectedCategory, searchQuery, currentView)
    └─→ BrowseView
        └─→ GrammarCard (grammar, level, onSelect)
```

### 状态提升
- 全局状态在 App 组件维护
- 级别、搜索词、当前视图等跨多个子组件的状态都提升到 App
- 减少组件间通信复杂度

### 本地存储订阅
- 在需要响应存储变化的组件使用 useEffect
- 监听 storage 事件或自定义事件
- 自动更新 UI

## 💾 数据存储架构

### 存储模式
```
LocalStorage
├── korean_grammar_favorites      # 收藏的语法点
│   └── [{ id, level, addedAt }, ...]
├── korean_grammar_wrong_answers  # 错题记录
│   └── [{ questionId, grammarId, level, attempts, ... }, ...]
├── korean_grammar_progress       # 学习进度
│   └── { beginner: [id1, id2, ...], intermediate: [...], ... }
├── korean_grammar_user          # 用户数据
│   └── { currentLevel, hasVisited, ... }
└── korean_grammar_dark_mode     # 深色模式设置
    └── "true" | "false"
```

### StorageManager 接口
```javascript
// 收藏管理
getFavorites()              // 获取所有收藏
addFavorite(id, level)      // 添加收藏
removeFavorite(id, level)   // 移除收藏
isFavorite(id, level)       // 检查是否收藏

// 错题管理
getWrongAnswers()           // 获取所有错题
addWrongAnswer(...)         // 添加错题
removeWrongAnswer(id)       // 移除错题
getWrongAnswersByLevel()    // 按级别获取错题

// 学习进度
getLearningProgress()       // 获取学习进度
markGrammarAsLearned()      // 标记为已掌握
getLearnedCount(level)      // 获取已掌握数量

// 用户数据
getCurrentLevel()           // 获取当前级别
setCurrentLevel(level)      // 设置当前级别

// 深色模式
isDarkMode()                // 获取深色模式状态
setDarkMode(bool)           // 设置深色模式

// 其他
clearAllData()              // 清除所有数据
```

## 🎨 样式架构

### CSS 变量系统
```css
:root {
  /* 色彩 */
  --primary-color: #4a90e2;
  --secondary-color: #f5f5f5;
  --accent-color: #ff6b6b;
  
  /* 深色模式下自动切换 */
}

body.dark-mode {
  /* 深色模式变量覆盖 */
}
```

### 样式继承链
```
global.css (全局变量、基础样式)
    ├→ App.css (应用层)
    ├→ Header.css (顶部导航)
    ├→ Sidebar.css (侧边栏)
    ├→ MainContent.css (主内容)
    └→ views/*.css (页面样式)
        └→ GrammarCard.css (组件样式)
```

### 响应式设计断点
```
桌面 (>1024px)  : 完整三栏布局
平板 (768-1024px): 自适应栅格
手机 (<768px)   : 单栏折叠布局
```

## 🔄 状态管理流程

### React Hooks 使用
```javascript
// App.jsx 核心状态
const [currentLevel, setCurrentLevel] = useState('beginner')
const [selectedCategory, setSelectedCategory] = useState(null)
const [searchQuery, setSearchQuery] = useState('')
const [currentView, setCurrentView] = useState('browse')
const [selectedGrammar, setSelectedGrammar] = useState(null)
const [isDarkMode, setIsDarkMode] = useState(false)

// 初始化时从 LocalStorage 恢复状态
useEffect(() => {
  const savedLevel = StorageManager.getCurrentLevel()
  const savedDarkMode = StorageManager.isDarkMode()
  setCurrentLevel(savedLevel)
  setIsDarkMode(savedDarkMode)
}, [])
```

## 🔐 数据持久化

### 自动保存机制
1. 用户操作 → 调用 StorageManager 方法
2. StorageManager → 更新 LocalStorage
3. 组件响应存储变化 → 更新 UI
4. 用户关闭/刷新页面 → 数据自动恢复

### 数据一致性保证
- 所有写操作通过 StorageManager 统一接口
- 避免直接操作 LocalStorage
- 单一数据源原则

## 🚀 性能优化

### 1. 组件懒加载
- 使用 useMemo 避免不必要的重新计算
- 只在数据变化时重新过滤/搜索

### 2. CSS 优化
- CSS Variables 复用 → 减少代码重复
- 媒体查询响应式设计 → 减少布局抖动

### 3. 事件处理
- 使用事件委托减少监听器数量
- 适当使用 stopPropagation 防止冒泡

### 4. 首屏加载
- 预加载语法数据（数据量小）
- 进度条和加载提示提升体验

## 🔧 扩展点

### 如何添加新级别语法？
1. 编辑 `src/data/grammarData.js`
2. 在 grammarDatabase 中添加新语法对象
3. 更新 categories 对象

### 如何添加新功能模块？
1. 在 `src/components/views/` 创建新组件
2. 在 MainContent.jsx 中添加路由
3. 在 Sidebar.jsx 中添加导航链接

### 如何自定义样式？
1. 编辑 `src/styles/global.css` 中的 CSS 变量
2. 或编辑各组件的 `.css` 文件

## 📊 数据库扩展

### 当前数据规模
- 初级：7 个语法点
- 中级：3 个语法点
- 高级：2 个语法点
- **总计**：12 个核心语法点

### 推荐扩展方案
1. **短期**：添加更多高质量语法点（目标 30+ 个）
2. **中期**：分类更细化（分支语法点）
3. **长期**：接入数据库后端（支持动态编辑）

## 🔗 与后端集成

### 预留接口
```javascript
// 未来可接入后端
// GET /api/grammar?level=beginner
// POST /api/user/favorites
// GET /api/user/progress
// POST /api/practice/submit
```

### 迁移路径
1. 保留当前 localStorage 作为本地缓存
2. 增加后端 API 调用
3. 同步本地和远端数据
4. 支持跨设备数据同步

---

这个架构设计优先考虑了：
- 🎯 清晰的职责划分
- 🔄 单向数据流
- 💾 简洁的数据管理
- 📱 响应式设计
- 🚀 易于扩展性
