# SheldonClawWeb 设计规格文档

**日期**：2026-03-24
**项目**：Sheldon-龙虾应用案例 / Sheldon-OpenClaw Use Cases
**类型**：纯静态网站（HTML + CSS + JS）
**部署**：Vercel

---

## 一、项目概述

汇总展示 OpenClaw 真实应用案例的中英双语静态网站，苹果官网设计风格。案例按 6 大类别组织，支持卡片展开/收起交互，每个案例有独立详情页。

**数据来源**：https://github.com/hesamsheikh/awesome-openclaw-usecases
**数据策略**：全部案例数据（含中文翻译）硬编码至 `data/cases.js`，无运行时网络请求。

---

## 二、目录结构

```
SheldonClawWeb/
├── index.html          # 首页（Hero + 类别 Tab + 卡片网格）
├── case.html           # 案例详情页（URL 参数渲染）
├── 404.html            # 自定义 404 页
├── vercel.json         # Vercel 部署配置
├── css/
│   ├── style.css       # 全局样式（苹果风深色主题）
│   └── case.css        # 详情页专用样式
├── js/
│   ├── main.js         # 首页逻辑（筛选 / 卡片展开 / 手风琴）
│   ├── case.js         # 详情页逻辑（URL 参数解析 / 数据渲染）
│   └── i18n.js         # 双语切换逻辑
└── data/
    └── cases.js        # 所有案例数据（中英文硬编码）
```

---

## 三、视觉设计规范（苹果风格）

### 色彩系统
| 用途 | 值 |
|------|----|
| 页面背景 | `#000000` |
| 卡片/导航背景 | `#1d1d1f` |
| 卡片 hover | `#2d2d2f` |
| 主文字 | `#f5f5f7` |
| 副文字 | `#86868b` |
| 强调色（链接/按钮） | `#2997ff` |
| 分隔线 | `rgba(255,255,255,0.1)` |

### 字体
```css
font-family: -apple-system, "SF Pro Display", "PingFang SC", "Helvetica Neue", sans-serif;
```
- Hero 标题：48px bold
- 类别标题：28px semibold
- 卡片标题：20px medium
- 正文：17px，line-height 1.6

### 布局
- **导航栏**：固定顶部，毛玻璃效果（`backdrop-filter: blur(20px)`，背景 `rgba(0,0,0,0.8)`）
- **Hero 区**：100vh 全屏，垂直居中大标题 + 副标题 + 语言切换
- **类别 Tab**：横向滚动，激活 Tab 下方滑动指示条
- **卡片网格**：`gap: 20px`，圆角 `18px`，响应式列数：
  - 桌面（≥1024px）：4 列
  - 平板（768px~1023px）：2 列
  - 手机（<768px）：1 列

---

## 四、数据结构

### 案例对象（`CASES` 数组）
```js
{
  id: "unique-case-id",           // URL 参数标识符
  category: "social",             // 类别 key
  name: { zh: "...", en: "..." },
  description: { zh: "...", en: "..." },
  skills: { zh: ["..."], en: ["..."] },
  usage: { zh: "...", en: "..." },
  githubUrl: "https://github.com/..."
}
```

### 类别定义（`CATEGORIES` 数组）
```js
{ key: "social",       zh: "社交媒体",          en: "Social Media" }
{ key: "creative",     zh: "创意与构建",         en: "Creative & Building" }
{ key: "devops",       zh: "基础设施与 DevOps",  en: "Infrastructure & DevOps" }
{ key: "productivity", zh: "生产力工具",          en: "Productivity" }
{ key: "research",     zh: "研究与学习",          en: "Research & Learning" }
{ key: "finance",      zh: "金融与交易",          en: "Finance & Trading" }
```

---

## 五、交互逻辑

### 5.1 卡片展开/收起（手风琴模式）
- 点击卡片 → 展开区域滑出（`max-height` 动画 300ms ease）
- 展开内容：中文描述 / 技能标签列表 / 使用方法 / "查看详情 →" 按钮
- 再次点击同一卡片 → 收起
- 点击其他卡片 → 当前卡片自动收起（一次只展开一张）

### 5.2 类别 Tab 筛选
- 点击 Tab → 若当前有展开的卡片，先等待收起动画完成（300ms）后，再执行 `scrollIntoView({ behavior: 'smooth' })`
- Tab 下方滑动指示条动画跟随激活项（动态计算 `offsetLeft` / `offsetWidth`）
  - 监听 `resize` 事件重新计算，防止窗口调整时错位
  - 监听自定义 `langchange` 事件重新计算，防止语言切换导致 Tab 文字宽度变化时错位
- 默认显示全部类别，按顺序堆叠排列

### 5.3 详情页跳转
- 点击"查看详情" → `window.location.href = 'case.html?id=xxx'`
- `case.js` 读取 `URLSearchParams` → 从 `CASES` 匹配对应数据
- 渲染内容：面包屑 / 完整标题 / 描述 / 技能标签 / 使用方法 / GitHub 外链按钮
- 找不到对应 id → `window.location.replace('404.html')`（不写入历史栈，避免后退循环）

### 5.4 双语切换（无刷新）
- 顶部导航右侧：`[中文 / EN]` 切换按钮
- **机制（单一，无冲突）**：
  - `i18n.js` 只负责静态 HTML 节点（导航、Hero、Footer 等固定文案），通过 `data-zh` / `data-en` 属性切换
  - 动态内容（卡片列表、详情页）由各自渲染函数负责：渲染时读取 `localStorage` 中当前语言，直接写入对应语言的 `textContent`，无需双属性
  - 语言切换时：① `i18n.js` 切换静态节点；② 触发自定义 `langchange` 事件；③ `main.js` 和 `case.js` 监听 `langchange` 重新渲染动态区域；④ Tab 组件监听 `langchange` 重计算指示条位置
- 语言偏好存入 `localStorage`，刷新页面保持，`cases.js` 数据加载后立即按当前语言渲染
- 切换动画：`opacity` fade 200ms

---

## 六、部署配置

### `vercel.json`
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=3600" }]
    }
  ]
}
```
> 详情页使用 `case.html?id=xxx`（query string）格式，浏览器直接定位到 `case.html`，无需 URL rewrite 规则。

---

## 七、成功标准

- [ ] 首页正确展示 6 大类别及所有案例卡片
- [ ] 卡片展开/收起动画流畅，手风琴模式正常
- [ ] 切换 Tab 时当前展开卡片自动收起
- [ ] 详情页通过 URL 参数正确渲染对应案例
- [ ] 无效 id 跳转 404.html，显示友好提示
- [ ] 中英双语切换无刷新（含动态渲染内容），状态持久化
- [ ] 响应式布局在桌面/平板/手机均正常
- [ ] 部署到 Vercel 后可正常访问
- [ ] 所有 GitHub 外链正确跳转
