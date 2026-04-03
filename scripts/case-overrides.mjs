export const ZH_OVERRIDES = {
  "daily-reddit-digest": {
    name: "Reddit 每日精选摘要",
    description: "围绕你常看的 subreddit 自动汇总高表现帖子，并根据反馈持续调优摘要内容。",
    usage: "安装 `reddit-readonly` 后，提供关注的 subreddit 列表和偏好规则，再设定固定时间自动生成只读 digest。",
  },
  "daily-youtube-digest": {
    name: "YouTube 每日视频摘要",
    description: "每天整理关注频道的新视频重点，避免漏看真正重要的内容。",
    usage: "安装 `youtube-full`，列出目标频道和推送时间，让代理按日抓取新视频并输出重点摘要。",
  },
  "x-account-analysis": {
    name: "X 账号分析",
    description: "读取你的 X 账号表现并输出内容质量、增长方向和账号诊断建议。",
    usage: "配置 Bird 技能并完成账号授权后，让代理抓取近期表现，分析内容主题、受众和优化方向。",
  },
  "multi-source-tech-news-digest": {
    name: "多源科技新闻摘要",
    description: "从 RSS、X、GitHub 和网页检索等 109+ 来源聚合科技新闻，并按质量评分后统一分发。",
    usage: "安装 `tech-news-digest`，设置信源、投递渠道与定时任务，让代理每天自动生成新闻简报。",
  },
  "x-twitter-automation": {
    name: "X/Twitter 自动化运营",
    description: "把发帖、回复、点赞、转推、私信、抽奖和监控账号等动作统一收敛到聊天界面。",
    usage: "安装 `@xquik/tweetclaw` 后，直接用聊天命令发布内容、搜索账号、抽奖或执行互动自动化。",
  },
  "overnight-mini-app-builder": {
    name: "目标驱动自治任务",
    description: "把长期目标一次性交给代理后，它会每天自动拆解、排程并执行任务，甚至夜间构建 surprise mini-app。",
    usage: "先把个人、职业和业务目标完整输入 OpenClaw，再让它每天自动生成任务、自主执行并维护看板。",
  },
  "youtube-content-pipeline": {
    name: "YouTube 内容生产流水线",
    description: "为 YouTube 频道持续发现选题、做研究并跟踪内容生产状态。",
    usage: "接入搜索、知识库和任务系统后，让代理持续挖掘选题、整理研究结果并更新内容数据库。",
  },
  "content-factory": {
    name: "多代理内容工厂",
    description: "在 Discord 里搭建研究、写作和封面等多代理内容工厂，让不同代理分工完成整套内容生产。",
    usage: "先建好多频道工作区，再把研究、脚本和缩略图任务分配给不同代理并串联成夜间流水线。",
  },
  "autonomous-game-dev-pipeline": {
    name: "自治教育游戏开发流水线",
    description: "围绕教育游戏项目执行从需求、实现到文档和提交的全生命周期开发，并强制 Bugs First。",
    usage: "把项目结构、系统提示和优先级规则交给代理，让它按固定流程推进 backlog、修 bug、开发与提交。",
  },
  "podcast-production-pipeline": {
    name: "播客制作流水线",
    description: "把播客从选题或嘉宾研究到大纲、show notes 与社媒宣传一体化自动生产。",
    usage: "输入节目主题、嘉宾信息或录音背景后，让代理输出可直接使用的研究包、提纲与推广素材。",
  },
  "ai-video-editing": {
    name: "聊天式 AI 视频剪辑",
    description: "通过聊天直接描述剪辑需求，完成裁剪、合并、字幕、配乐、调色和竖屏导出。",
    usage: "安装视频编辑相关技能后，上传素材并描述剪辑要求，代理会按你的指令导出处理后的视频。",
  },
  "n8n-workflow-orchestration": {
    name: "OpenClaw + n8n 工作流编排",
    description: "用 n8n webhook 代理所有外部 API 调用，让凭证隔离、流程可视化且可锁定。",
    usage: "让代理先搭建 n8n workflow，你手动填入凭证并锁定流程，之后所有外部调用都通过 webhook 触发。",
  },
  "self-healing-home-server": {
    name: "自愈式家庭服务器与基础设施管理",
    description: "把家庭服务器和内网基础设施交给常驻代理巡检、修复、汇报与自愈。",
    usage: "赋予代理 SSH、监控和定时任务能力，让它持续检查服务状态、自动修复异常并输出日报。",
  },
  "autonomous-project-management": {
    name: "子代理自治项目管理",
    description: "用 `STATE.yaml` 作为共享状态层，让子代理并行协作而无需中心编排器。",
    usage: "建立共享状态文件和委派规则后，由主代理分发任务，子代理独立推进并回写状态。",
  },
  "multi-channel-customer-service": {
    name: "多渠道 AI 客服平台",
    description: "把 WhatsApp、Instagram、邮件和 Google Reviews 合并到一个 AI 收件箱，支持 24/7 自动回复。",
    usage: "接通各渠道、沉淀业务知识库后，让代理统一接待消息、自动回复并升级复杂问题。",
  },
  "phone-based-personal-assistant": {
    name: "电话式个人助理",
    description: "通过电话或短信直接访问 OpenClaw，免手操作获取日历、Jira 和搜索结果等信息。",
    usage: "接入 ClawdTalk 与日历、Jira、搜索能力后，就能通过拨号或短信直接向代理发起请求。",
  },
  "inbox-declutter": {
    name: "邮箱减负摘要",
    description: "把 newsletter 和订阅邮件自动汇总成可阅读的 digest，减少收件箱噪音。",
    usage: "为 OpenClaw 配置 Gmail 账号与技能后，让它定时汇总订阅邮件并通过邮件或聊天发送摘要。",
  },
  "personal-crm": {
    name: "自动联系人发现型个人 CRM",
    description: "自动从邮箱和日历发现联系人、维护互动记录，并用自然语言查询 CRM。",
    usage: "连接 Gmail、Calendar 与 CRM 数据表后，让代理自动更新联系人档案并回答 CRM 问题。",
  },
  "health-symptom-tracker": {
    name: "健康与症状追踪器",
    description: "持续记录饮食和症状，结合提醒机制帮助识别潜在触发因素。",
    usage: "准备专门的记录频道和健康日志后，让代理按消息解析饮食和症状，并定时提醒你补充记录。",
  },
  "multi-channel-assistant": {
    name: "多渠道个人助理",
    description: "把 Telegram、Slack、邮件、日历和任务系统统一到一个个人助理入口。",
    usage: "为不同场景配置频道与工具集成后，用一个代理统一收消息、派任务、查日程和同步状态。",
  },
  "project-state-management": {
    name: "事件驱动项目状态管理",
    description: "用事件流代替静态看板，自动记录提交、阻塞和状态变更，让项目上下文始终保持最新。",
    usage: "先建立项目状态数据库，再让代理把代码、讨论和进度事件自动写入并生成总结。",
  },
  "dynamic-dashboard": {
    name: "动态仪表盘",
    description: "利用子代理并发抓取 API、数据库和社交媒体数据，生成实时动态仪表盘。",
    usage: "配置多源指标采集和刷新规则后，让代理并行抓取数据并持续渲染实时 dashboard。",
  },
  "todoist-task-manager": {
    name: "Todoist 任务可视化管理",
    description: "把代理的计划、推理过程和进度日志同步到 Todoist，提升长任务可见性。",
    usage: "先在 Todoist 建项目和状态分区，再让代理生成脚本，把计划、日志评论和状态更新实时同步过去。",
  },
  "family-calendar-household-assistant": {
    name: "家庭日历与家务助理",
    description: "聚合全家日历、预约消息和家庭库存，输出晨报并协助管理预约、采购和家务协同。",
    usage: "连通家庭日历、消息来源与库存记录后，让代理每日汇总安排、跟踪预约并更新家务清单。",
  },
  "multi-agent-team": {
    name: "多代理专业团队",
    description: "为策略、开发、营销和业务等角色设定不同人格与职责，在同一聊天入口下运行一个 AI 团队。",
    usage: "定义每个代理的角色说明和共享记忆，再用 Telegram 等统一入口调度多代理协作。",
  },
  "aionui-cowork-desktop": {
    name: "OpenClaw 桌面协作中枢",
    description: "借助 AionUi 把 OpenClaw 变成桌面协作中心，统一管理多代理，并在远程场景下执行故障自救。",
    usage: "安装 AionUi 与 OpenClaw 后，在桌面、WebUI、Telegram 统一接入，并使用内置部署专家排障。",
  },
  "custom-morning-brief": {
    name: "定制晨报",
    description: "每天早上自动汇总新闻、任务、草稿和 AI 建议，把真正重要的信息直接推送到你面前。",
    usage: "接入消息平台和任务系统，定义晨报字段后，让代理每天定时发送个性化 briefing。",
  },
  "meeting-notes-action-items": {
    name: "自动会议纪要与行动项",
    description: "把会议转录自动整理成结构化纪要，并将行动项同步到 Jira、Linear 或 Todoist。",
    usage: "提供会议转录或接入转录来源后，让代理提炼摘要、拆解任务并自动分配到对应系统。",
  },
  "habit-tracker-accountability-coach": {
    name: "习惯追踪与监督教练",
    description: "通过 Telegram 或短信主动跟进习惯完成情况，维持连续天数并动态调整督促语气。",
    usage: "设定习惯清单和检查时间后，让代理每天主动问询、记录进展并按情况调整提醒方式。",
  },
  "second-brain": {
    name: "第二大脑",
    description: "把想到的任何内容随手发给代理保存，再在自定义面板里检索和管理全部记忆。",
    usage: "连接消息入口并让 OpenClaw 帮你生成前端面板后，随时发消息存记忆，再通过 dashboard 搜索。",
  },
  "event-guest-confirmation": {
    name: "活动来宾确认",
    description: "让 AI 语音代理逐个拨打来宾电话确认出席、收集备注和偏好，并自动汇总活动名单。",
    usage: "配置 SuperCall、Twilio 和来宾名单后，让代理批量外呼并整理出席结果与备注。",
  },
  "phone-call-notifications": {
    name: "电话提醒通知",
    description: "把重要提醒从推送升级为真实电话，让高优先级事件更难被忽略，还支持双向语音互动。",
    usage: "安装 clawr.ing 后，把晨报、价格提醒或紧急邮件等高优先级告警改为电话通知即可。",
  },
  "local-crm-framework": {
    name: "DenchClaw 本地 CRM 框架",
    description: "通过 `npx denchclaw` 把 OpenClaw 变成完全本地化的 CRM 与销售自动化平台。",
    usage: "运行 `npx denchclaw` 完成初始化后，在本地 UI 中管理客户、销售流程和自动化动作。",
  },
  "earnings-tracker": {
    name: "AI 财报追踪器",
    description: "自动跟踪 AI 和科技公司的财报日程、预告、总结和提醒。",
    usage: "设置关注公司名单和接收频道后，让代理按周预告财报、赛后总结并持续跟踪变化。",
  },
  "knowledge-base-rag": {
    name: "个人知识库（RAG）",
    description: "把网页、推文和文章丢进聊天即可入库，形成可检索的个人知识库。",
    usage: "安装知识库技能并配置收集频道后，让代理抓取内容、写入向量库并支持后续查询。",
  },
  "market-research-product-factory": {
    name: "市场研究与产品工厂",
    description: "用 Last 30 Days 从 Reddit 和 X 挖真实痛点，再让 OpenClaw 把洞察转成 MVP 方向。",
    usage: "安装 Last 30 Days 技能后，让代理围绕指定主题挖掘痛点、整理洞察并继续产出解决方案。",
  },
  "pre-build-idea-validator": {
    name: "构建前创意验证器",
    description: "在真正开工前先扫描 GitHub、HN、npm、PyPI 和 Product Hunt，避免在拥挤赛道重复造轮子。",
    usage: "接入 `idea-reality-mcp` 后，让代理在动手前做竞争扫描，再决定继续、转向或缩小范围。",
  },
  "semantic-memory-search": {
    name: "语义记忆搜索",
    description: "为 OpenClaw 的 markdown 记忆加上向量检索和自动同步能力。",
    usage: "安装 `memsearch` 并为记忆目录建立索引后，就能按语义搜索历史决策、笔记和上下文。",
  },
  "arxiv-paper-reader": {
    name: "arXiv 论文阅读器",
    description: "通过对话读取 arXiv 论文，可按论文 ID 获取摘要、章节和比较结果。",
    usage: "安装 `arxiv-reader` 技能后，直接给代理论文 ID 或主题，让它抓取并解释论文内容。",
  },
  "latex-paper-writing": {
    name: "LaTeX 论文写作",
    description: "无需本地安装 TeX 环境，也能通过对话方式撰写、编译并预览 LaTeX 论文。",
    usage: "部署 Prismer 和 `latex-compiler` 后，让代理按模板生成文稿、编译 PDF 并实时预览。",
  },
  "hf-papers-research-discovery": {
    name: "HF 论文研究发现",
    description: "每天发现 Hugging Face 上热门的机器学习论文，并结合 arXiv 做进一步深读。",
    usage: "安装 `hf-papers` 和 `arxiv-source` 后，让代理每日筛选高热度论文并继续深入阅读。",
  },
  "polymarket-autopilot": {
    name: "Polymarket 自动化模拟交易",
    description: "围绕预测市场做自动化 paper trading、回测和日报分析，在不动真钱的前提下测试策略。",
    usage: "连接 Polymarket 数据、交易日志数据库和日报渠道后，让代理按规则持续模拟交易并汇总表现。",
  },
};
