# Sheldon-龙虾应用案例 / Sheldon-OpenClaw Use Cases

Sheldon-龙虾应用案例 是一个纯静态的中英文双语网站，用于汇总和展示 OpenClaw 的真实应用案例。项目以苹果官网风格为设计参考，按社交媒体、创意与构建、基础设施与 DevOps、生产力工具、研究与学习、金融与交易六大类别组织内容，支持响应式布局、案例卡片展开/收起交互，以及每个案例的独立详情页。案例数据来源于 GitHub 社区仓库，并结合中文预翻译与原始 Markdown 展示，帮助用户更高效地了解 OpenClaw 在真实场景中的使用方式与实践价值。

Sheldon-OpenClaw Use Cases is a fully static bilingual website designed to collect and showcase real-world OpenClaw use cases. Inspired by the visual style of Apple's official website, it organizes content into six major categories: Social Media, Creative & Building, Infrastructure & DevOps, Productivity, Research & Learning, and Finance & Trading. The site features a responsive layout, expandable case cards, and dedicated detail pages for each use case. Case data is sourced from a GitHub community repository, with pre-translated Chinese summaries alongside the original Markdown content, making it easier for users to understand how OpenClaw is applied in practical scenarios.

## Stack

- HTML + CSS + JavaScript
- Bilingual UI: Chinese primary, English secondary
- GitHub source sync with local markdown fallback
- Static deployment target: Vercel

## Source Data

- Upstream repository: <https://github.com/hesamsheikh/awesome-openclaw-usecases>
- Cached markdown: `data/source/usecases/`
- Generated site data: `data/cases.js`
