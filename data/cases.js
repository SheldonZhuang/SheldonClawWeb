export const SITE_META = {
  "brand": {
    "zh": "Sheldon-龙虾应用案例",
    "en": "Sheldon-OpenClaw Use Cases"
  },
  "subtitle": {
    "zh": "汇总 GitHub 社区里的真实 OpenClaw 工作流，按 6 大类别整理为中英文静态案例库。",
    "en": "A bilingual static showcase of real OpenClaw workflows, organized across six categories."
  },
  "sourceRepo": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  "syncedAt": "2026-04-03",
  "totalCases": 42,
  "totalCategories": 6
};

export const CATEGORIES = [
  {
    "key": "social",
    "anchor": "social",
    "name": {
      "zh": "社交媒体",
      "en": "Social Media"
    },
    "count": 5
  },
  {
    "key": "creative",
    "anchor": "creative",
    "name": {
      "zh": "创意与构建",
      "en": "Creative & Building"
    },
    "count": 6
  },
  {
    "key": "devops",
    "anchor": "devops",
    "name": {
      "zh": "基础设施与 DevOps",
      "en": "Infrastructure & DevOps"
    },
    "count": 2
  },
  {
    "key": "productivity",
    "anchor": "productivity",
    "name": {
      "zh": "生产力工具",
      "en": "Productivity"
    },
    "count": 20
  },
  {
    "key": "research",
    "anchor": "research",
    "name": {
      "zh": "研究与学习",
      "en": "Research & Learning"
    },
    "count": 8
  },
  {
    "key": "finance",
    "anchor": "finance",
    "name": {
      "zh": "金融与交易",
      "en": "Finance & Trading"
    },
    "count": 1
  }
];

export const CASES = [
  {
    "id": "daily-reddit-digest",
    "slug": "daily-reddit-digest",
    "order": 1,
    "category": "social",
    "name": {
      "zh": "Reddit 每日精选摘要",
      "en": "Daily Reddit Digest"
    },
    "description": {
      "zh": "围绕你常看的 subreddit 自动汇总高表现帖子，并根据反馈持续调优摘要内容。",
      "en": "Summarize a curated digest of your favourite subreddits, based on your preferences."
    },
    "overview": {
      "zh": "围绕你常看的 subreddit 自动汇总高表现帖子，并根据反馈持续调优摘要内容。",
      "en": "Run a daily digest everyday to give you the top performing posts from your favourite subreddits. What to use it for:"
    },
    "skills": [
      "reddit-readonly skill.",
      "It doesn't need auth."
    ],
    "usage": {
      "zh": "安装 `reddit-readonly` 后，提供关注的 subreddit 列表和偏好规则，再设定固定时间自动生成只读 digest。",
      "en": "After installing the skill, prompt your OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/daily-reddit-digest.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/daily-reddit-digest.md",
      "cachePath": "./data/source/usecases/daily-reddit-digest.md"
    }
  },
  {
    "id": "daily-youtube-digest",
    "slug": "daily-youtube-digest",
    "order": 2,
    "category": "social",
    "name": {
      "zh": "YouTube 每日视频摘要",
      "en": "Daily YouTube Digest"
    },
    "description": {
      "zh": "每天整理关注频道的新视频重点，避免漏看真正重要的内容。",
      "en": "Get daily summaries of new videos from your favorite channels — never miss content from creators you follow."
    },
    "overview": {
      "zh": "每天整理关注频道的新视频重点，避免漏看真正重要的内容。",
      "en": "Start your day with a personalized summary of new videos from your favorite YouTube channels — no more missing content from creators you actually want to follow."
    },
    "skills": [
      "Install the youtube-full skill.",
      "Just tell your OpenClaw: or That's it.",
      "The agent handles the rest — including account creation and API key setup.",
      "You get 100 free credits on signup, no credit card required.",
      "Note: After creating the account, the skill auto-stores the API key securely in correct locations based on the OS, so the API will work in all contexts."
    ],
    "usage": {
      "zh": "安装 `youtube-full`，列出目标频道和推送时间，让代理按日抓取新视频并输出重点摘要。",
      "en": "### Option 1: Channel-based digest Prompt OpenClaw: ### Option 2: Keyword-based digest Track new videos about a specific topic: This way you never waste credits re-fetching videos you've already seen."
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/daily-youtube-digest.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/daily-youtube-digest.md",
      "cachePath": "./data/source/usecases/daily-youtube-digest.md"
    }
  },
  {
    "id": "multi-source-tech-news-digest",
    "slug": "multi-source-tech-news-digest",
    "order": 3,
    "category": "social",
    "name": {
      "zh": "多源科技新闻摘要",
      "en": "Multi-Source Tech News Digest"
    },
    "description": {
      "zh": "从 RSS、X、GitHub 和网页检索等 109+ 来源聚合科技新闻，并按质量评分后统一分发。",
      "en": "Automatically aggregate and deliver quality-scored tech news from 109+ sources (RSS, Twitter/X, GitHub, web search) via natural language."
    },
    "overview": {
      "zh": "从 RSS、X、GitHub 和网页检索等 109+ 来源聚合科技新闻，并按质量评分后统一分发。",
      "en": "Automatically aggregate, score, and deliver tech news from 109+ sources across RSS, Twitter/X, GitHub releases, and web search — all managed through natural language."
    },
    "skills": [
      "tech-news-digest — Install via clawhub install tech-news-digest",
      "gog (optional) — For email delivery via Gmail"
    ],
    "usage": {
      "zh": "安装 `tech-news-digest`，设置信源、投递渠道与定时任务，让代理每天自动生成新闻简报。",
      "en": "Install and set up daily digest: Add custom sources: Generate on demand:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/multi-source-tech-news-digest.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/multi-source-tech-news-digest.md",
      "cachePath": "./data/source/usecases/multi-source-tech-news-digest.md"
    }
  },
  {
    "id": "x-account-analysis",
    "slug": "x-account-analysis",
    "order": 4,
    "category": "social",
    "name": {
      "zh": "X 账号分析",
      "en": "X Account Analysis"
    },
    "description": {
      "zh": "读取你的 X 账号表现并输出内容质量、增长方向和账号诊断建议。",
      "en": "Get a qualitative analysis of your X account."
    },
    "overview": {
      "zh": "读取你的 X 账号表现并输出内容质量、增长方向和账号诊断建议。",
      "en": "There are many websites designed to give you a qualitative analysis of your X account. While X already gives you an analytics section, it's more focused to show your numbers on your performance. But a qualitative analysis focuses on the quality of your posts, not the performance stats. Some insights you can get from this type of analysis: What are the patterns that make my posts go viral? What topics I talk about get me most engagement? Why do I get posts with 1000+ likes but sometimes posts with <5 likes? What am I doing wrong?"
    },
    "skills": [
      "Bird Skill.",
      "clawhub install bird (it comes pre-bundled)"
    ],
    "usage": {
      "zh": "配置 Bird 技能并完成账号授权后，让代理抓取近期表现，分析内容主题、受众和优化方向。",
      "en": "Make sure Bird skill is working. For security and isolation, you better create a new account for your ClawdBot. Auth with your X account. log into x.com in Chrome/Brave, and provide the right cookie information (auth-token, ct0) so OpenCla…"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/x-account-analysis.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/x-account-analysis.md",
      "cachePath": "./data/source/usecases/x-account-analysis.md"
    }
  },
  {
    "id": "x-twitter-automation",
    "slug": "x-twitter-automation",
    "order": 5,
    "category": "social",
    "name": {
      "zh": "X/Twitter 自动化运营",
      "en": "X/Twitter Automation from Chat"
    },
    "description": {
      "zh": "把发帖、回复、点赞、转推、私信、抽奖和监控账号等动作统一收敛到聊天界面。",
      "en": "Post tweets, reply, like, retweet, follow, DM, search, extract data, run giveaways, and monitor accounts — all from chat via the TweetClaw plugin."
    },
    "overview": {
      "zh": "把发帖、回复、点赞、转推、私信、抽奖和监控账号等动作统一收敛到聊天界面。",
      "en": "Full X/Twitter automation through natural language — post tweets, reply, like, retweet, follow, DM, search, extract data, run giveaways, and monitor accounts, all from your OpenClaw chat."
    },
    "skills": [
      "@xquik/tweetclaw — Install via openclaw plugins install @xquik/tweetclaw"
    ],
    "usage": {
      "zh": "安装 `@xquik/tweetclaw` 后，直接用聊天命令发布内容、搜索账号、抽奖或执行互动自动化。",
      "en": "Install the plugin: Post a tweet: Run a giveaway: Extract data: Monitor an account:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/x-twitter-automation.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/x-twitter-automation.md",
      "cachePath": "./data/source/usecases/x-twitter-automation.md"
    }
  },
  {
    "id": "ai-video-editing",
    "slug": "ai-video-editing",
    "order": 6,
    "category": "creative",
    "name": {
      "zh": "聊天式 AI 视频剪辑",
      "en": "AI Video Editing via Chat"
    },
    "description": {
      "zh": "通过聊天直接描述剪辑需求，完成裁剪、合并、字幕、配乐、调色和竖屏导出。",
      "en": "Edit videos by describing changes in natural language — trim, merge, add music, subtitles, color grade, crop to vertical. No timeline, no GUI."
    },
    "overview": {
      "zh": "通过聊天直接描述剪辑需求，完成裁剪、合并、字幕、配乐、调色和竖屏导出。",
      "en": "Editing videos usually means opening a timeline editor, dragging clips around, and clicking through menus. For repetitive edits — trimming intros, adding subtitles to a batch of clips, adjusting color on 10 videos — that manual loop eats hours. This use case turns video editing into a conversation. Describe what you want changed, drop the file, and get the result back. No timeline, no GUI."
    },
    "skills": [
      "video-editor-ai — chat-based video editing with BGM, subtitles, and export",
      "ai-subtitle-generator — auto captions, subtitle burning, SRT export"
    ],
    "usage": {
      "zh": "安装视频编辑相关技能后，上传素材并描述剪辑要求，代理会按你的指令导出处理后的视频。",
      "en": "Install the skills: Drop a video file into chat and describe your edit: For batch processing, describe the pattern:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/ai-video-editing.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/ai-video-editing.md",
      "cachePath": "./data/source/usecases/ai-video-editing.md"
    }
  },
  {
    "id": "autonomous-game-dev-pipeline",
    "slug": "autonomous-game-dev-pipeline",
    "order": 7,
    "category": "creative",
    "name": {
      "zh": "自治教育游戏开发流水线",
      "en": "Autonomous Educational Game Development Pipeline"
    },
    "description": {
      "zh": "围绕教育游戏项目执行从需求、实现到文档和提交的全生命周期开发，并强制 Bugs First。",
      "en": "Full lifecycle management of educational game development: from backlog selection to implementation, registration, documentation, and git commit. Enforces \"Bugs First\" policy."
    },
    "overview": {
      "zh": "围绕教育游戏项目执行从需求、实现到文档和提交的全生命周期开发，并强制 Bugs First。",
      "en": "Full lifecycle management of educational game development: from backlog selection to implementation, registration, documentation, and git commit. Enforces \"Bugs First\" policy."
    },
    "skills": [
      "Git: To manage branches, commits, and merges."
    ],
    "usage": {
      "zh": "把项目结构、系统提示和优先级规则交给代理，让它按固定流程推进 backlog、修 bug、开发与提交。",
      "en": "The core of this workflow is the System Instructions given to the agent. This prompt turns the LLM into a disciplined developer that respects the project's rigid structure. (Note: The actual prompts used in production are in Spanish (es-41…"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/autonomous-game-dev-pipeline.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/autonomous-game-dev-pipeline.md",
      "cachePath": "./data/source/usecases/autonomous-game-dev-pipeline.md"
    }
  },
  {
    "id": "overnight-mini-app-builder",
    "slug": "overnight-mini-app-builder",
    "order": 8,
    "category": "creative",
    "name": {
      "zh": "目标驱动自治任务",
      "en": "Goal-Driven Autonomous Tasks"
    },
    "description": {
      "zh": "把长期目标一次性交给代理后，它会每天自动拆解、排程并执行任务，甚至夜间构建 surprise mini-app。",
      "en": "Brain dump your goals and have your agent autonomously generate, schedule, and complete daily tasks — including building surprise mini-apps overnight."
    },
    "overview": {
      "zh": "把长期目标一次性交给代理后，它会每天自动拆解、排程并执行任务，甚至夜间构建 surprise mini-app。",
      "en": "Your AI agent is powerful but reactive — it only works when you tell it what to do. What if it knew your goals and proactively came up with tasks to move you closer to them every single day, without being asked? This workflow turns OpenClaw into a self-directed employee. You brain dump your goals once, and the agent autonomously generates, schedules, and completes tasks that advance those goals — including building you surprise mini-apps overnight."
    },
    "skills": [
      "Telegram or Discord integration",
      "sessionsspawn / sessionssend for autonomous task execution",
      "Next.js or similar (for the Kanban board — OpenClaw builds it for you)"
    ],
    "usage": {
      "zh": "先把个人、职业和业务目标完整输入 OpenClaw，再让它每天自动生成任务、自主执行并维护看板。",
      "en": "### Step 1: Brain Dump Your Goals This is the most important step. Text your OpenClaw everything you're trying to accomplish: ### Step 2: Set Up Autonomous Daily Tasks ### Step 3: Build the Kanban Board (Optional)"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/overnight-mini-app-builder.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/overnight-mini-app-builder.md",
      "cachePath": "./data/source/usecases/overnight-mini-app-builder.md"
    }
  },
  {
    "id": "content-factory",
    "slug": "content-factory",
    "order": 9,
    "category": "creative",
    "name": {
      "zh": "多代理内容工厂",
      "en": "Multi-Agent Content Factory"
    },
    "description": {
      "zh": "在 Discord 里搭建研究、写作和封面等多代理内容工厂，让不同代理分工完成整套内容生产。",
      "en": "Run a multi-agent content pipeline in Discord — research, writing, and thumbnail agents working in dedicated channels."
    },
    "overview": {
      "zh": "在 Discord 里搭建研究、写作和封面等多代理内容工厂，让不同代理分工完成整套内容生产。",
      "en": "You're a content creator juggling research, writing, and design across multiple platforms. Each step — finding trending topics, writing scripts, generating thumbnails — eats hours of your day. What if a team of specialized agents handled all of it overnight? This workflow sets up a multi-agent content factory inside Discord, where different agents handle research, writing, and visual assets in dedicated channels."
    },
    "skills": [
      "Discord integration with multiple channels",
      "sessionsspawn / sessionssend for multi-agent orchestration",
      "x-research-v2 or similar for social media research",
      "Local image generation (e.g., Nano Banana) or an image generation API",
      "knowledge-base skill (optional, for RAG-powered research)"
    ],
    "usage": {
      "zh": "先建好多频道工作区，再把研究、脚本和缩略图任务分配给不同代理并串联成夜间流水线。",
      "en": "Set up a Discord server (or ask OpenClaw to do it for you — just say \"Set up a Discord for us\"). Create channels for each agent: #research — trending topics and content opportunities"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/content-factory.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/content-factory.md",
      "cachePath": "./data/source/usecases/content-factory.md"
    }
  },
  {
    "id": "podcast-production-pipeline",
    "slug": "podcast-production-pipeline",
    "order": 10,
    "category": "creative",
    "name": {
      "zh": "播客制作流水线",
      "en": "Podcast Production Pipeline"
    },
    "description": {
      "zh": "把播客从选题或嘉宾研究到大纲、show notes 与社媒宣传一体化自动生产。",
      "en": "Automate the full podcast workflow — guest research, episode outlines, show notes, and social media promo — from topic to publish-ready assets."
    },
    "overview": {
      "zh": "把播客从选题或嘉宾研究到大纲、show notes 与社媒宣传一体化自动生产。",
      "en": "You have a podcast idea, maybe even a backlog of episode topics. But between researching guests, writing outlines, drafting intros, generating show notes, and writing social media posts for promotion — the production overhead kills your momentum. What if you handed off a topic and got back a full production package? This use case chains agents together to handle the entire podcast production workflow from topic to publish-ready assets."
    },
    "skills": [
      "Web search / research skill (for guest research and topic deep-dives)",
      "File system access (for reading transcripts and writing output files)",
      "Slack, Discord, or Telegram integration (for delivering assets)",
      "Optional: sessionsspawn for running research and writing agents in parallel",
      "Optional: RSS feed skill (for monitoring competitor podcasts)"
    ],
    "usage": {
      "zh": "输入节目主题、嘉宾信息或录音背景后，让代理输出可直接使用的研究包、提纲与推广素材。",
      "en": "Pre-recording — generate research and outline: Post-recording — generate show notes and promo: Optional — competitor monitoring:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/podcast-production-pipeline.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/podcast-production-pipeline.md",
      "cachePath": "./data/source/usecases/podcast-production-pipeline.md"
    }
  },
  {
    "id": "youtube-content-pipeline",
    "slug": "youtube-content-pipeline",
    "order": 11,
    "category": "creative",
    "name": {
      "zh": "YouTube 内容生产流水线",
      "en": "YouTube Content Pipeline"
    },
    "description": {
      "zh": "为 YouTube 频道持续发现选题、做研究并跟踪内容生产状态。",
      "en": "Automate video idea scouting, research, and tracking for a YouTube channel."
    },
    "overview": {
      "zh": "为 YouTube 频道持续发现选题、做研究并跟踪内容生产状态。",
      "en": "As a daily YouTube creator, finding fresh, timely video ideas across the web and X/Twitter is time-consuming. Tracking what you've already covered prevents duplicates and helps you stay ahead of trends. This workflow automates the entire content scouting and research pipeline:"
    },
    "skills": [
      "websearch (built-in)",
      "x-research-v2 or custom X/Twitter search skill",
      "knowledge-base skill for RAG",
      "Asana integration (or Todoist)",
      "gog CLI for YouTube Analytics"
    ],
    "usage": {
      "zh": "接入搜索、知识库和任务系统后，让代理持续挖掘选题、整理研究结果并更新内容数据库。",
      "en": "Set up a Telegram topic for video ideas and configure it in OpenClaw. Install the knowledge-base skill and x-research skill. Create a SQLite database for pitch tracking:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/youtube-content-pipeline.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/youtube-content-pipeline.md",
      "cachePath": "./data/source/usecases/youtube-content-pipeline.md"
    }
  },
  {
    "id": "n8n-workflow-orchestration",
    "slug": "n8n-workflow-orchestration",
    "order": 12,
    "category": "devops",
    "name": {
      "zh": "OpenClaw + n8n 工作流编排",
      "en": "OpenClaw + n8n Workflow Orchestration"
    },
    "description": {
      "zh": "用 n8n webhook 代理所有外部 API 调用，让凭证隔离、流程可视化且可锁定。",
      "en": "Delegate API calls to n8n workflows via webhooks — the agent never touches credentials, and every integration is visual and lockable."
    },
    "overview": {
      "zh": "用 n8n webhook 代理所有外部 API 调用，让凭证隔离、流程可视化且可锁定。",
      "en": "Letting your AI agent directly manage API keys and call external services is a recipe for security incidents. Every new integration means another credential in .env.local, another surface for the agent to accidentally leak or misuse. This use case describes a pattern where OpenClaw delegates all external API interactions to n8n workflows via webhooks — the agent never touches credentials, and every integration is visually inspectable and lockable."
    },
    "skills": [
      "n8n API access (for creating/triggering workflows)",
      "fetch or curl for webhook calls",
      "Docker (if using the pre-configured stack)",
      "n8n credential management (manual, one-time setup per integration)"
    ],
    "usage": {
      "zh": "让代理先搭建 n8n workflow，你手动填入凭证并锁定流程，之后所有外部调用都通过 webhook 触发。",
      "en": "OpenClaw on port 3456 n8n on port 5678 Shared Docker network so OpenClaw can call http://n8n:5678/webhook/... directly"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/n8n-workflow-orchestration.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/n8n-workflow-orchestration.md",
      "cachePath": "./data/source/usecases/n8n-workflow-orchestration.md"
    }
  },
  {
    "id": "self-healing-home-server",
    "slug": "self-healing-home-server",
    "order": 13,
    "category": "devops",
    "name": {
      "zh": "自愈式家庭服务器与基础设施管理",
      "en": "Self-Healing Home Server & Infrastructure Management"
    },
    "description": {
      "zh": "把家庭服务器和内网基础设施交给常驻代理巡检、修复、汇报与自愈。",
      "en": "Run an always-on infrastructure agent with SSH access, automated cron jobs, and self-healing capabilities across your home network."
    },
    "overview": {
      "zh": "把家庭服务器和内网基础设施交给常驻代理巡检、修复、汇报与自愈。",
      "en": "Running a home server means being on-call 24/7 for your own infrastructure. Services go down at 3 AM, certificates expire silently, disk fills up, and pods crash-loop — all while you're asleep or away. This use case turns OpenClaw into a persistent infrastructure agent with SSH access, automated cron jobs, and the ability to detect, diagnose, and fix issues before you know there's a problem."
    },
    "skills": [
      "ssh access to home network machines",
      "kubectl for Kubernetes cluster management",
      "terraform and ansible for infrastructure-as-code",
      "1password CLI for secrets management",
      "gog CLI for email access"
    ],
    "usage": {
      "zh": "赋予代理 SSH、监控和定时任务能力，让它持续检查服务状态、自动修复异常并输出日报。",
      "en": "### 1. Core Agent Configuration Name your agent and define its access scope in AGENTS.md: ### 2. Automated Cron Job System The power of this setup is the scheduled job system."
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/self-healing-home-server.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/self-healing-home-server.md",
      "cachePath": "./data/source/usecases/self-healing-home-server.md"
    }
  },
  {
    "id": "meeting-notes-action-items",
    "slug": "meeting-notes-action-items",
    "order": 14,
    "category": "productivity",
    "name": {
      "zh": "自动会议纪要与行动项",
      "en": "Automated Meeting Notes & Action Items"
    },
    "description": {
      "zh": "把会议转录自动整理成结构化纪要，并将行动项同步到 Jira、Linear 或 Todoist。",
      "en": "Turn meeting transcripts into structured summaries and automatically create tasks in Jira, Linear, or Todoist — assigned to the right person."
    },
    "overview": {
      "zh": "把会议转录自动整理成结构化纪要，并将行动项同步到 Jira、Linear 或 Todoist。",
      "en": "You just finished a 45-minute team call. Now you need to write up the summary, pull out action items, and distribute them to Jira, Linear, or Todoist — manually. By the time you're done, the next meeting is starting. What if your agent handled all of that the moment the transcript lands? This use case turns any meeting transcript into structured notes and automatically creates tasks in your project management tool."
    },
    "skills": [
      "Jira, Linear, Todoist, or Notion integration (for task creation)",
      "Slack or Discord integration (for posting summaries)",
      "File system access (for reading transcript files)",
      "Scheduling / cron (for follow-up reminders)",
      "Optional: Otter.ai, Fireflies.ai, or Google Meet API for automatic transcript retrieval"
    ],
    "usage": {
      "zh": "提供会议转录或接入转录来源后，让代理提炼摘要、拆解任务并自动分配到对应系统。",
      "en": "Choose your transcript source. The simplest approach is pasting the transcript directly into chat. For automation, set up a folder watch or API integration. Prompt OpenClaw: For fully automated pipeline (transcript folder watch):"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/meeting-notes-action-items.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/meeting-notes-action-items.md",
      "cachePath": "./data/source/usecases/meeting-notes-action-items.md"
    }
  },
  {
    "id": "autonomous-project-management",
    "slug": "autonomous-project-management",
    "order": 15,
    "category": "productivity",
    "name": {
      "zh": "子代理自治项目管理",
      "en": "Autonomous Project Management with Subagents"
    },
    "description": {
      "zh": "用 `STATE.yaml` 作为共享状态层，让子代理并行协作而无需中心编排器。",
      "en": "Coordinate multi-agent projects using STATE.yaml pattern — subagents work in parallel without orchestrator overhead."
    },
    "overview": {
      "zh": "用 `STATE.yaml` 作为共享状态层，让子代理并行协作而无需中心编排器。",
      "en": "Managing complex projects with multiple parallel workstreams is exhausting. You end up context-switching constantly, tracking status across tools, and manually coordinating handoffs. This use case implements a decentralized project management pattern where subagents work autonomously on tasks, coordinating through shared state files rather than a central orchestrator."
    },
    "skills": [
      "sessionsspawn / sessionssend for subagent management",
      "File system access for STATE.yaml",
      "Git for state versioning (optional but recommended)"
    ],
    "usage": {
      "zh": "建立共享状态文件和委派规则后，由主代理分发任务，子代理独立推进并回写状态。",
      "en": "Managing complex projects with multiple parallel workstreams is exhausting. You end up context-switching constantly, tracking status across tools, and manually coordinating handoffs. This use case implements a decentralized project managem…"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/autonomous-project-management.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/autonomous-project-management.md",
      "cachePath": "./data/source/usecases/autonomous-project-management.md"
    }
  },
  {
    "id": "custom-morning-brief",
    "slug": "custom-morning-brief",
    "order": 16,
    "category": "productivity",
    "name": {
      "zh": "定制晨报",
      "en": "Custom Morning Brief"
    },
    "description": {
      "zh": "每天早上自动汇总新闻、任务、草稿和 AI 建议，把真正重要的信息直接推送到你面前。",
      "en": "Get a fully customized daily briefing — news, tasks, content drafts, and AI-recommended actions — texted to you every morning."
    },
    "overview": {
      "zh": "每天早上自动汇总新闻、任务、草稿和 AI 建议，把真正重要的信息直接推送到你面前。",
      "en": "You wake up and spend the first 30 minutes of your day catching up — scrolling news, checking your calendar, reviewing your to-do list, trying to figure out what matters today. What if all of that was already done and waiting for you as a text message? This workflow has OpenClaw send you a fully customized morning briefing every day at a scheduled time, covering news, tasks, ideas, and proactive recommendations."
    },
    "skills": [
      "Telegram, Discord, or iMessage integration",
      "Todoist / Apple Reminders / Asana integration (whichever you use for tasks)",
      "x-research-v2 for social media trend research (optional)"
    ],
    "usage": {
      "zh": "接入消息平台和任务系统，定义晨报字段后，让代理每天定时发送个性化 briefing。",
      "en": "Connect OpenClaw to your messaging platform and task manager. Prompt OpenClaw: OpenClaw will schedule this automatically. Verify it's working by checking your messages the next morning."
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/custom-morning-brief.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/custom-morning-brief.md",
      "cachePath": "./data/source/usecases/custom-morning-brief.md"
    }
  },
  {
    "id": "dynamic-dashboard",
    "slug": "dynamic-dashboard",
    "order": 17,
    "category": "productivity",
    "name": {
      "zh": "动态仪表盘",
      "en": "Dynamic Dashboard with Sub-agent Spawning"
    },
    "description": {
      "zh": "利用子代理并发抓取 API、数据库和社交媒体数据，生成实时动态仪表盘。",
      "en": "Real-time dashboard with parallel data fetching from APIs, databases, and social media."
    },
    "overview": {
      "zh": "利用子代理并发抓取 API、数据库和社交媒体数据，生成实时动态仪表盘。",
      "en": "Static dashboards show stale data and require constant manual updates. You want real-time visibility across multiple data sources without building a custom frontend or hitting API rate limits. This workflow creates a live dashboard that spawns sub-agents to fetch and process data in parallel:"
    },
    "skills": [
      "Sub-agent spawning for parallel execution",
      "github (gh CLI) for GitHub metrics",
      "bird (Twitter) for social data",
      "websearch or webfetch for external APIs",
      "postgres for storing historical metrics"
    ],
    "usage": {
      "zh": "配置多源指标采集和刷新规则后，让代理并行抓取数据并持续渲染实时 dashboard。",
      "en": "Set up a metrics database: Create a Discord channel for dashboard updates (e.g., #dashboard). Prompt OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/dynamic-dashboard.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/dynamic-dashboard.md",
      "cachePath": "./data/source/usecases/dynamic-dashboard.md"
    }
  },
  {
    "id": "event-guest-confirmation",
    "slug": "event-guest-confirmation",
    "order": 18,
    "category": "productivity",
    "name": {
      "zh": "活动来宾确认",
      "en": "Event Guest Confirmation"
    },
    "description": {
      "zh": "让 AI 语音代理逐个拨打来宾电话确认出席、收集备注和偏好，并自动汇总活动名单。",
      "en": "Call a list of event guests one-by-one to confirm attendance, collect notes, and compile a summary — fully automated via AI voice calls."
    },
    "overview": {
      "zh": "让 AI 语音代理逐个拨打来宾电话确认出席、收集备注和偏好，并自动汇总活动名单。",
      "en": "You're hosting an event — a dinner party, a wedding, a company offsite — and you need to confirm attendance from a list of guests. Manually calling 20+ people is tedious: you play phone tag, forget who said what, and lose track of dietary restrictions or plus-ones. Texting works sometimes, but people ignore messages. A real phone call gets a much higher response rate. This use case has OpenClaw call each guest on your list using the SuperCall plugin, confirm whether they're attending, collect any notes, and compile everything into a summary for you."
    },
    "skills": [
      "SuperCall — install via openclaw plugins install @xonder/supercall",
      "A Twilio account with a phone number (for making outbound calls)",
      "An OpenAI API key (for the GPT-4o Realtime voice AI)",
      "ngrok (for webhook tunneling — free tier works)"
    ],
    "usage": {
      "zh": "配置 SuperCall、Twilio 和来宾名单后，让代理批量外呼并整理出席结果与备注。",
      "en": "Install and configure SuperCall following the setup guide. Make sure hooks are enabled in your OpenClaw config. Prepare your guest list. You can paste it directly in chat or keep it in a file: Prompt OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/event-guest-confirmation.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/event-guest-confirmation.md",
      "cachePath": "./data/source/usecases/event-guest-confirmation.md"
    }
  },
  {
    "id": "family-calendar-household-assistant",
    "slug": "family-calendar-household-assistant",
    "order": 19,
    "category": "productivity",
    "name": {
      "zh": "家庭日历与家务助理",
      "en": "Family Calendar Aggregation & Household Assistant"
    },
    "description": {
      "zh": "聚合全家日历、预约消息和家庭库存，输出晨报并协助管理预约、采购和家务协同。",
      "en": "Aggregate all family calendars into a morning briefing, monitor messages for appointments, and manage household inventory."
    },
    "overview": {
      "zh": "聚合全家日历、预约消息和家庭库存，输出晨报并协助管理预约、采购和家务协同。",
      "en": "Modern families juggle five or more calendars — work, personal, shared family, kids' school, extracurriculars — across different platforms and formats. Important events slip through the cracks because no single view exists. Meanwhile, household coordination (grocery lists, pantry inventory, appointment scheduling) happens through scattered text messages that get buried. This use case turns OpenClaw into an always-on household coordinator: aggregating calendars into a morning briefing, monitoring messages for actionable items, and managing household logistics through a shared chat interface."
    },
    "skills": [
      "Calendar API access (Google Calendar, Apple Calendar via ical)",
      "imessage skill for message monitoring (macOS only)",
      "Telegram or Slack for the shared family chat interface",
      "File system access for inventory tracking",
      "Camera/photo processing for OCR of physical calendars"
    ],
    "usage": {
      "zh": "连通家庭日历、消息来源与库存记录后，让代理每日汇总安排、跟踪预约并更新家务清单。",
      "en": "### 1. Calendar Aggregation Configure OpenClaw to pull from all family calendar sources: ### 2. Ambient Message Monitoring This is the key differentiator — the agent watches passively and acts when it recognizes something actionable: ### 3."
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/family-calendar-household-assistant.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/family-calendar-household-assistant.md",
      "cachePath": "./data/source/usecases/family-calendar-household-assistant.md"
    }
  },
  {
    "id": "habit-tracker-accountability-coach",
    "slug": "habit-tracker-accountability-coach",
    "order": 20,
    "category": "productivity",
    "name": {
      "zh": "习惯追踪与监督教练",
      "en": "Habit Tracker & Accountability Coach"
    },
    "description": {
      "zh": "通过 Telegram 或短信主动跟进习惯完成情况，维持连续天数并动态调整督促语气。",
      "en": "Proactive daily check-ins via Telegram or SMS that track habits, maintain streaks, and adapt their tone based on your progress."
    },
    "overview": {
      "zh": "通过 Telegram 或短信主动跟进习惯完成情况，维持连续天数并动态调整督促语气。",
      "en": "You've tried every habit tracker app out there. They all work for a week, then you stop opening them. The problem isn't the app — it's that tracking habits is passive. What if your agent actively reached out to you, asked how your day went, and adapted its approach based on whether you're on a streak or falling off? This use case turns OpenClaw into a proactive accountability partner that checks in with you daily via Telegram or SMS."
    },
    "skills": [
      "Telegram or SMS integration (Twilio for SMS, or Telegram Bot API)",
      "Scheduling / cron for timed check-ins",
      "File system or database access for storing habit data",
      "Optional: Google Sheets integration for a visual habit dashboard"
    ],
    "usage": {
      "zh": "设定习惯清单和检查时间后，让代理每天主动问询、记录进展并按情况调整提醒方式。",
      "en": "Define your habits and check-in schedule: Set up the tracking and tone: Add weekly reports:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/habit-tracker-accountability-coach.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/habit-tracker-accountability-coach.md",
      "cachePath": "./data/source/usecases/habit-tracker-accountability-coach.md"
    }
  },
  {
    "id": "health-symptom-tracker",
    "slug": "health-symptom-tracker",
    "order": 21,
    "category": "productivity",
    "name": {
      "zh": "健康与症状追踪器",
      "en": "Health & Symptom Tracker"
    },
    "description": {
      "zh": "持续记录饮食和症状，结合提醒机制帮助识别潜在触发因素。",
      "en": "Track food intake and symptoms to identify triggers, with scheduled check-in reminders."
    },
    "overview": {
      "zh": "持续记录饮食和症状，结合提醒机制帮助识别潜在触发因素。",
      "en": "Identifying food sensitivities requires consistent logging over time, which is tedious to maintain. You need reminders to log and analysis to spot patterns. This workflow tracks food and symptoms automatically:"
    },
    "skills": [
      "Cron jobs for reminders",
      "Telegram topic for logging",
      "File storage (markdown log file)"
    ],
    "usage": {
      "zh": "准备专门的记录频道和健康日志后，让代理按消息解析饮食和症状，并定时提醒你补充记录。",
      "en": "Create a Telegram topic called \"health-tracker\" (or similar). Create a log file: /clawd/memory/health-log.md Prompt OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/health-symptom-tracker.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/health-symptom-tracker.md",
      "cachePath": "./data/source/usecases/health-symptom-tracker.md"
    }
  },
  {
    "id": "inbox-declutter",
    "slug": "inbox-declutter",
    "order": 22,
    "category": "productivity",
    "name": {
      "zh": "邮箱减负摘要",
      "en": "Inbox De-clutter"
    },
    "description": {
      "zh": "把 newsletter 和订阅邮件自动汇总成可阅读的 digest，减少收件箱噪音。",
      "en": "Summarize Newsletters and send you a digest as an email."
    },
    "overview": {
      "zh": "把 newsletter 和订阅邮件自动汇总成可阅读的 digest，减少收件箱噪音。",
      "en": "Newsletters can take up the inbox like nothing else. Often times they pile-up without being opened at all."
    },
    "skills": [
      "Gmail OAuth Setup."
    ],
    "usage": {
      "zh": "为 OpenClaw 配置 Gmail 账号与技能后，让它定时汇总订阅邮件并通过邮件或聊天发送摘要。",
      "en": "[optional] Create a new gmail specifically for OpenClaw. [optional] Unsubscribe from all newsletters from your main email and subscribe to them using the OpenClaw email. Install the skill and make sure it works."
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/inbox-declutter.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/inbox-declutter.md",
      "cachePath": "./data/source/usecases/inbox-declutter.md"
    }
  },
  {
    "id": "local-crm-framework",
    "slug": "local-crm-framework",
    "order": 23,
    "category": "productivity",
    "name": {
      "zh": "DenchClaw 本地 CRM 框架",
      "en": "Local CRM Framework with DenchClaw"
    },
    "description": {
      "zh": "通过 `npx denchclaw` 把 OpenClaw 变成完全本地化的 CRM 与销售自动化平台。",
      "en": "Turn OpenClaw into a fully local CRM and sales automation platform with `npx denchclaw` — DuckDB, browser automation, multi-view UI, and natural language queries."
    },
    "overview": {
      "zh": "通过 `npx denchclaw` 把 OpenClaw 变成完全本地化的 CRM 与销售自动化平台。",
      "en": "Setting up a CRM that actually works with OpenClaw is painful. You need to wire up databases, build UIs, configure browser automation, connect messaging platforms, and somehow get the agent to understand your data schema. Most people give up halfway through and end up with a half-working Notion integration. DenchClaw is an open-source framework that turns OpenClaw into a fully local CRM, sales automation, and productivity platform — installed with a single command and running entirely on your machine."
    },
    "skills": [
      "CRM Skill — DuckDB-backed structured data management with objects, fields, entries, and multiple view types",
      "App Builder Skill — Build web apps (dashboards, tools) that run inside the workspace with access to your database",
      "Browser Automation Skill — Chromium browser with your existing Chrome auth state for web scraping, imports, and outreach"
    ],
    "usage": {
      "zh": "运行 `npx denchclaw` 完成初始化后，在本地 UI 中管理客户、销售流程和自动化动作。",
      "en": "Install with one command: Complete the onboarding wizard. DenchClaw creates a dedicated OpenClaw profile called dench and starts a gateway on port 19001. Open localhost:3100 in your browser. On Safari, add it to your Dock as a PWA."
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/local-crm-framework.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/local-crm-framework.md",
      "cachePath": "./data/source/usecases/local-crm-framework.md"
    }
  },
  {
    "id": "multi-agent-team",
    "slug": "multi-agent-team",
    "order": 24,
    "category": "productivity",
    "name": {
      "zh": "多代理专业团队",
      "en": "Multi-Agent Specialized Team (Solo Founder Setup)"
    },
    "description": {
      "zh": "为策略、开发、营销和业务等角色设定不同人格与职责，在同一聊天入口下运行一个 AI 团队。",
      "en": "Run multiple specialized agents (strategy, dev, marketing, business) as a coordinated team via a single Telegram chat."
    },
    "overview": {
      "zh": "为策略、开发、营销和业务等角色设定不同人格与职责，在同一聊天入口下运行一个 AI 团队。",
      "en": "Solo founders wear every hat — strategy, development, marketing, sales, operations. Context-switching between these roles destroys deep work. Hiring is expensive and slow. What if you could spin up a small, specialized team of AI agents, each with a distinct role and personality, all controllable from a single chat interface? This use case sets up multiple OpenClaw agents as a coordinated team, each specialized in a domain, communicating through shared memory and controlled via Telegram."
    },
    "skills": [
      "telegram skill for the shared control interface",
      "sessionsspawn / sessionssend for multi-agent coordination",
      "Shared file system or note-taking tool for team memory",
      "Individual API keys for different model providers (if using mixed models)",
      "A VPS or always-on machine to run the agents"
    ],
    "usage": {
      "zh": "定义每个代理的角色说明和共享记忆，再用 Telegram 等统一入口调度多代理协作。",
      "en": "### 1. Shared Memory Structure ### 2. Telegram Routing Configure a single Telegram group where all agents listen, but each responds only when tagged: ### 3."
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/multi-agent-team.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/multi-agent-team.md",
      "cachePath": "./data/source/usecases/multi-agent-team.md"
    }
  },
  {
    "id": "multi-channel-customer-service",
    "slug": "multi-channel-customer-service",
    "order": 25,
    "category": "productivity",
    "name": {
      "zh": "多渠道 AI 客服平台",
      "en": "Multi-Channel AI Customer Service Platform"
    },
    "description": {
      "zh": "把 WhatsApp、Instagram、邮件和 Google Reviews 合并到一个 AI 收件箱，支持 24/7 自动回复。",
      "en": "Unify WhatsApp, Instagram, Email, and Google Reviews in one AI-powered inbox with 24/7 auto-responses."
    },
    "overview": {
      "zh": "把 WhatsApp、Instagram、邮件和 Google Reviews 合并到一个 AI 收件箱，支持 24/7 自动回复。",
      "en": "Small businesses juggle WhatsApp, Instagram DMs, emails, and Google Reviews across multiple apps. Customers expect instant responses 24/7, but hiring staff for round-the-clock coverage is expensive. This use case consolidates all customer touchpoints into a single AI-powered inbox that responds intelligently on your behalf."
    },
    "skills": [
      "WhatsApp Business API integration",
      "Instagram Graph API (via Meta Business)",
      "gog CLI for Gmail",
      "Google Business Profile API for reviews",
      "Message routing logic in AGENTS.md"
    ],
    "usage": {
      "zh": "接通各渠道、沉淀业务知识库后，让代理统一接待消息、自动回复并升级复杂问题。",
      "en": "Connect channels via OpenClaw config: WhatsApp Business API (through 360dialog or official API) Instagram via Meta Business Suite"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/multi-channel-customer-service.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/multi-channel-customer-service.md",
      "cachePath": "./data/source/usecases/multi-channel-customer-service.md"
    }
  },
  {
    "id": "multi-channel-assistant",
    "slug": "multi-channel-assistant",
    "order": 26,
    "category": "productivity",
    "name": {
      "zh": "多渠道个人助理",
      "en": "Multi-Channel Personal Assistant"
    },
    "description": {
      "zh": "把 Telegram、Slack、邮件、日历和任务系统统一到一个个人助理入口。",
      "en": "Route tasks across Telegram, Slack, email, and calendar from a single AI assistant."
    },
    "overview": {
      "zh": "把 Telegram、Slack、邮件、日历和任务系统统一到一个个人助理入口。",
      "en": "Context-switching between apps to manage tasks, schedule events, send messages, and track work is exhausting. You want one interface that routes to all your tools. This workflow consolidates everything into a single AI assistant:"
    },
    "skills": [
      "gog CLI (Google Workspace)",
      "Slack integration (bot + user tokens)",
      "Todoist API or skill",
      "Asana API or skill",
      "Telegram channel with multiple topics configured"
    ],
    "usage": {
      "zh": "为不同场景配置频道与工具集成后，用一个代理统一收消息、派任务、查日程和同步状态。",
      "en": "Set up Telegram topics for different contexts: config — bot settings and debugging updates — status and notifications"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/multi-channel-assistant.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/multi-channel-assistant.md",
      "cachePath": "./data/source/usecases/multi-channel-assistant.md"
    }
  },
  {
    "id": "aionui-cowork-desktop",
    "slug": "aionui-cowork-desktop",
    "order": 27,
    "category": "productivity",
    "name": {
      "zh": "OpenClaw 桌面协作中枢",
      "en": "OpenClaw as Desktop Cowork (AionUi) — Remote Rescue & Multi-Agent Hub"
    },
    "description": {
      "zh": "借助 AionUi 把 OpenClaw 变成桌面协作中心，统一管理多代理，并在远程场景下执行故障自救。",
      "en": "Use OpenClaw as a desktop Cowork app — unified UI, multi-agent, MCP once, WebUI/Telegram/Lark/DingTalk. When OpenClaw is down, fix it remotely via Telegram or WebUI using the built-in OpenClaw deployment expert (install, detect, repair)."
    },
    "overview": {
      "zh": "借助 AionUi 把 OpenClaw 变成桌面协作中心，统一管理多代理，并在远程场景下执行故障自救。",
      "en": "Use OpenClaw from a desktop Cowork UI, access it from Telegram or WebUI when you’re away, and fix it remotely when it won’t connect. AionUi is a free, open-source app that runs OpenClaw as a first-class agent alongside 12+ others (Claude Code, Codex, Qwen Code, etc.), with a built-in OpenClaw deployment expert for install, diagnose, and repair — including remote rescue when OpenClaw is down and you’re not at the machine."
    },
    "skills": [
      "OpenClaw (e.g. npm install -g openclaw@latest). AionUi’s OpenClaw Setup assistant can guide install, gateway, and config.",
      "API keys or auth for your models (OpenClaw config + any built-in agent keys in AionUi)."
    ],
    "usage": {
      "zh": "安装 AionUi 与 OpenClaw 后，在桌面、WebUI、Telegram 统一接入，并使用内置部署专家排障。",
      "en": "Install AionUi: AionUi Releases (macOS / Windows / Linux). Install OpenClaw (if needed): Open AionUi: It auto-detects OpenClaw. If not, use the in-app OpenClaw Setup assistant."
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/aionui-cowork-desktop.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/aionui-cowork-desktop.md",
      "cachePath": "./data/source/usecases/aionui-cowork-desktop.md"
    }
  },
  {
    "id": "personal-crm",
    "slug": "personal-crm",
    "order": 28,
    "category": "productivity",
    "name": {
      "zh": "自动联系人发现型个人 CRM",
      "en": "Personal CRM with Automatic Contact Discovery"
    },
    "description": {
      "zh": "自动从邮箱和日历发现联系人、维护互动记录，并用自然语言查询 CRM。",
      "en": "Automatically discover and track contacts from your email and calendar, with natural language queries."
    },
    "overview": {
      "zh": "自动从邮箱和日历发现联系人、维护互动记录，并用自然语言查询 CRM。",
      "en": "Keeping track of who you've met, when, and what you discussed is impossible to do manually. Important follow-ups slip through the cracks, and you forget context before important meetings. This workflow builds and maintains a personal CRM automatically:"
    },
    "skills": [
      "gog CLI (for Gmail and Google Calendar)",
      "Custom CRM database (SQLite or similar) or use the crm-query skill if available",
      "Telegram topic for CRM queries"
    ],
    "usage": {
      "zh": "连接 Gmail、Calendar 与 CRM 数据表后，让代理自动更新联系人档案并回答 CRM 问题。",
      "en": "Create a CRM database: Set up a Telegram topic called \"personal-crm\" for queries. Prompt OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/personal-crm.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/personal-crm.md",
      "cachePath": "./data/source/usecases/personal-crm.md"
    }
  },
  {
    "id": "phone-call-notifications",
    "slug": "phone-call-notifications",
    "order": 29,
    "category": "productivity",
    "name": {
      "zh": "电话提醒通知",
      "en": "Phone Call Notifications"
    },
    "description": {
      "zh": "把重要提醒从推送升级为真实电话，让高优先级事件更难被忽略，还支持双向语音互动。",
      "en": "Turn your agent's alerts into real phone calls — morning briefings, price drops, urgent emails — with two-way conversation."
    },
    "overview": {
      "zh": "把重要提醒从推送升级为真实电话，让高优先级事件更难被忽略，还支持双向语音互动。",
      "en": "Your agent already monitors things for you — stocks, emails, smart home, calendars — but notifications are easy to ignore. Push notifications pile up. Chat messages get buried. For the stuff that actually matters, you need something you can't swipe away. This use case gives your agent a phone call as a notification channel. When something is urgent enough, the agent dials your real phone number, tells you what's going on, and you can talk back. Two-way conversation, not a robocall."
    },
    "skills": [
      "clawr.ing — install by pasting the setup prompt from the clawr.ing dashboard into your OpenClaw chat. No CLI install needed."
    ],
    "usage": {
      "zh": "安装 clawr.ing 后，把晨报、价格提醒或紧急邮件等高优先级告警改为电话通知即可。",
      "en": "Your agent already monitors things for you — stocks, emails, smart home, calendars — but notifications are easy to ignore. Push notifications pile up. Chat messages get buried."
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/phone-call-notifications.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/phone-call-notifications.md",
      "cachePath": "./data/source/usecases/phone-call-notifications.md"
    }
  },
  {
    "id": "phone-based-personal-assistant",
    "slug": "phone-based-personal-assistant",
    "order": 30,
    "category": "productivity",
    "name": {
      "zh": "电话式个人助理",
      "en": "Phone-Based Personal Assistant"
    },
    "description": {
      "zh": "通过电话或短信直接访问 OpenClaw，免手操作获取日历、Jira 和搜索结果等信息。",
      "en": "Access OpenClaw from any phone via voice call or SMS. Get calendar updates, Jira tickets, and web search results hands-free."
    },
    "overview": {
      "zh": "通过电话或短信直接访问 OpenClaw，免手操作获取日历、Jira 和搜索结果等信息。",
      "en": "Access OpenClaw from any phone via voice call or SMS. Get calendar updates, Jira tickets, and web search results hands-free."
    },
    "skills": [
      "ClawdTalk",
      "Calendar skill (Google Calendar or Outlook)",
      "Jira skill",
      "Web search skill"
    ],
    "usage": {
      "zh": "接入 ClawdTalk 与日历、Jira、搜索能力后，就能通过拨号或短信直接向代理发起请求。",
      "en": "You are available via phone. When I call, greet me and ask how I can help. For calendar queries: \"What's on my calendar today?\" For Jira updates: \"Show me my open tickets\""
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/phone-based-personal-assistant.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/phone-based-personal-assistant.md",
      "cachePath": "./data/source/usecases/phone-based-personal-assistant.md"
    }
  },
  {
    "id": "project-state-management",
    "slug": "project-state-management",
    "order": 31,
    "category": "productivity",
    "name": {
      "zh": "事件驱动项目状态管理",
      "en": "Project State Management System: Event-Driven Alternative to Kanban"
    },
    "description": {
      "zh": "用事件流代替静态看板，自动记录提交、阻塞和状态变更，让项目上下文始终保持最新。",
      "en": "Event-driven project tracking with automatic context capture, replacing static Kanban boards."
    },
    "overview": {
      "zh": "用事件流代替静态看板，自动记录提交、阻塞和状态变更，让项目上下文始终保持最新。",
      "en": "Traditional Kanban boards are static and require manual updates. You forget to move cards, lose context between sessions, and can't track the \"why\" behind state changes. Projects drift without clear visibility. This workflow replaces Kanban with an event-driven system that tracks project state automatically:"
    },
    "skills": [
      "postgres or SQLite for project state database",
      "github (gh CLI) for commit tracking",
      "Discord or Telegram for updates and queries",
      "Cron jobs for daily summaries",
      "Sub-agents for parallel project analysis"
    ],
    "usage": {
      "zh": "先建立项目状态数据库，再让代理把代码、讨论和进度事件自动写入并生成总结。",
      "en": "Set up a project state database: Create a Discord channel for project updates (e.g., #project-state). Prompt OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/project-state-management.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/project-state-management.md",
      "cachePath": "./data/source/usecases/project-state-management.md"
    }
  },
  {
    "id": "second-brain",
    "slug": "second-brain",
    "order": 32,
    "category": "productivity",
    "name": {
      "zh": "第二大脑",
      "en": "Second Brain"
    },
    "description": {
      "zh": "把想到的任何内容随手发给代理保存，再在自定义面板里检索和管理全部记忆。",
      "en": "Text anything to your bot to remember it, then search through all your memories in a custom Next.js dashboard."
    },
    "overview": {
      "zh": "把想到的任何内容随手发给代理保存，再在自定义面板里检索和管理全部记忆。",
      "en": "You come up with ideas, find interesting links, hear about books to read — but you never have a good system for capturing them. Notion gets complex, Apple Notes becomes a graveyard of 10,000 unread entries. You need something as simple as texting a friend. This workflow turns OpenClaw into a memory-capture system you interact with via text message, backed by a custom searchable UI you can browse anytime."
    },
    "skills": [
      "Telegram, iMessage, or Discord integration (for text-based capture)",
      "Next.js (OpenClaw builds this for you — no coding needed)"
    ],
    "usage": {
      "zh": "连接消息入口并让 OpenClaw 帮你生成前端面板后，随时发消息存记忆，再通过 dashboard 搜索。",
      "en": "Make sure your OpenClaw is connected to your preferred messaging platform (Telegram, Discord, etc.). Start using it immediately — just text your bot anything you want to remember: Build the searchable UI by prompting OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/second-brain.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/second-brain.md",
      "cachePath": "./data/source/usecases/second-brain.md"
    }
  },
  {
    "id": "todoist-task-manager",
    "slug": "todoist-task-manager",
    "order": 33,
    "category": "productivity",
    "name": {
      "zh": "Todoist 任务可视化管理",
      "en": "Todoist Task Manager: Agent Task Visibility"
    },
    "description": {
      "zh": "把代理的计划、推理过程和进度日志同步到 Todoist，提升长任务可见性。",
      "en": "Maximize agent transparency by syncing reasoning and progress logs to Todoist."
    },
    "overview": {
      "zh": "把代理的计划、推理过程和进度日志同步到 Todoist，提升长任务可见性。",
      "en": "Maximize transparency for long-running agentic workflows by syncing internal reasoning and progress logs directly to Todoist."
    },
    "skills": [
      "You don't need a pre-built skill.",
      "Simply prompt your OpenClaw agent to create the bash scripts described in the Setup Guide below.",
      "Since OpenClaw can manage its own filesystem and execute shell commands, it will effectively \"build\" the skill for you upon request."
    ],
    "usage": {
      "zh": "先在 Todoist 建项目和状态分区，再让代理生成脚本，把计划、日志评论和状态更新实时同步过去。",
      "en": "🟡 In Progress 🟠 Waiting 🟢 Done"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/todoist-task-manager.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/todoist-task-manager.md",
      "cachePath": "./data/source/usecases/todoist-task-manager.md"
    }
  },
  {
    "id": "earnings-tracker",
    "slug": "earnings-tracker",
    "order": 34,
    "category": "research",
    "name": {
      "zh": "AI 财报追踪器",
      "en": "AI-Powered Earnings Tracker"
    },
    "description": {
      "zh": "自动跟踪 AI 和科技公司的财报日程、预告、总结和提醒。",
      "en": "Track tech/AI earnings reports with automated previews, alerts, and detailed summaries."
    },
    "overview": {
      "zh": "自动跟踪 AI 和科技公司的财报日程、预告、总结和提醒。",
      "en": "Following earnings season across dozens of tech companies means checking multiple sources and remembering report dates. You want to stay on top of AI/tech earnings without manually tracking every company. This workflow automates earnings tracking and delivery:"
    },
    "skills": [
      "websearch (built-in)",
      "Cron job support in OpenClaw",
      "Telegram topic for earnings updates"
    ],
    "usage": {
      "zh": "设置关注公司名单和接收频道后，让代理按周预告财报、赛后总结并持续跟踪变化。",
      "en": "Create a Telegram topic called \"earnings\" for updates. Prompt OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/earnings-tracker.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/earnings-tracker.md",
      "cachePath": "./data/source/usecases/earnings-tracker.md"
    }
  },
  {
    "id": "arxiv-paper-reader",
    "slug": "arxiv-paper-reader",
    "order": 35,
    "category": "research",
    "name": {
      "zh": "arXiv 论文阅读器",
      "en": "arXiv Paper Reader"
    },
    "description": {
      "zh": "通过对话读取 arXiv 论文，可按论文 ID 获取摘要、章节和比较结果。",
      "en": "Read and analyze arXiv papers conversationally — fetch by ID, browse sections, compare abstracts, and get AI summaries."
    },
    "overview": {
      "zh": "通过对话读取 arXiv 论文，可按论文 ID 获取摘要、章节和比较结果。",
      "en": "Reading arXiv papers means downloading PDFs, losing context when switching between papers, and struggling to parse dense LaTeX notation. You want to read, analyze, and compare papers conversationally without leaving your workspace. This workflow turns your agent into a research reading assistant:"
    },
    "skills": [
      "arxiv-reader skill (3 tools: arxivfetch, arxivsections, arxivabstract)"
    ],
    "usage": {
      "zh": "安装 `arxiv-reader` 技能后，直接给代理论文 ID 或主题，让它抓取并解释论文内容。",
      "en": "Install the arxiv-reader skill from the Prismer repository — copy the skills/arxiv-reader/ directory into your OpenClaw skills folder. The skill is ready to use. Prompt OpenClaw: Try it: \"Read 2401.04088 — what's the main contribution?\""
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/arxiv-paper-reader.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/arxiv-paper-reader.md",
      "cachePath": "./data/source/usecases/arxiv-paper-reader.md"
    }
  },
  {
    "id": "hf-papers-research-discovery",
    "slug": "hf-papers-research-discovery",
    "order": 36,
    "category": "research",
    "name": {
      "zh": "HF 论文研究发现",
      "en": "HF Papers Research Discovery"
    },
    "description": {
      "zh": "每天发现 Hugging Face 上热门的机器学习论文，并结合 arXiv 做进一步深读。",
      "en": "Discover trending ML papers on Hugging Face, triage by upvotes, and deep-read via arXiv — all conversationally."
    },
    "overview": {
      "zh": "每天发现 Hugging Face 上热门的机器学习论文，并结合 arXiv 做进一步深读。",
      "en": "Keeping up with ML research means refreshing Hugging Face Papers daily, scanning dozens of titles, clicking into each one for the abstract, and manually cross-referencing GitHub repos. You want a conversational way to discover, triage, and deep-read trending papers without leaving your workspace. This workflow combines two skills to create a full research discovery pipeline:"
    },
    "skills": [
      "hf-papers skill (4 tools: hfdailypapers, hfsearchpapers, hfpaperdetail, hfpapercomments)",
      "arxiv-source skill (3 tools: arxivfetch, arxivsections, arxivabstract) — for full paper text"
    ],
    "usage": {
      "zh": "安装 `hf-papers` 和 `arxiv-source` 后，让代理每日筛选高热度论文并继续深入阅读。",
      "en": "Install both skills: Prompt OpenClaw with your research workflow: Try it: \"What's trending on Hugging Face Papers today?\""
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/hf-papers-research-discovery.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/hf-papers-research-discovery.md",
      "cachePath": "./data/source/usecases/hf-papers-research-discovery.md"
    }
  },
  {
    "id": "latex-paper-writing",
    "slug": "latex-paper-writing",
    "order": 37,
    "category": "research",
    "name": {
      "zh": "LaTeX 论文写作",
      "en": "LaTeX Paper Writing"
    },
    "description": {
      "zh": "无需本地安装 TeX 环境，也能通过对话方式撰写、编译并预览 LaTeX 论文。",
      "en": "Write and compile LaTeX papers conversationally with instant PDF preview — no local TeX installation needed."
    },
    "overview": {
      "zh": "无需本地安装 TeX 环境，也能通过对话方式撰写、编译并预览 LaTeX 论文。",
      "en": "Setting up a local LaTeX environment is painful — installing TeX Live takes gigabytes, debugging compilation errors is tedious, and switching between your editor and PDF viewer breaks flow. You want to write and compile LaTeX papers conversationally without any local setup. This workflow turns your agent into a LaTeX writing assistant with instant compilation:"
    },
    "skills": [
      "latex-compiler skill (4 tools: latexcompile, latexpreview, latextemplates, latexgettemplate)",
      "Prismer workspace container (runs the LaTeX server on port 8080 with full TeX Live)"
    ],
    "usage": {
      "zh": "部署 Prismer 和 `latex-compiler` 后，让代理按模板生成文稿、编译 PDF 并实时预览。",
      "en": "Clone and deploy Prismer with Docker (the LaTeX server with full TeX Live starts automatically): The latex-compiler skill is built-in — no installation needed. Prompt OpenClaw: Try it: \"Start a new IEEE paper titled 'A Survey of LLM Agents…"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/latex-paper-writing.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/latex-paper-writing.md",
      "cachePath": "./data/source/usecases/latex-paper-writing.md"
    }
  },
  {
    "id": "market-research-product-factory",
    "slug": "market-research-product-factory",
    "order": 38,
    "category": "research",
    "name": {
      "zh": "市场研究与产品工厂",
      "en": "Market Research & Product Factory"
    },
    "description": {
      "zh": "用 Last 30 Days 从 Reddit 和 X 挖真实痛点，再让 OpenClaw 把洞察转成 MVP 方向。",
      "en": "Mine Reddit and X for real pain points using the Last 30 Days skill, then have OpenClaw build MVPs that solve them."
    },
    "overview": {
      "zh": "用 Last 30 Days 从 Reddit 和 X 挖真实痛点，再让 OpenClaw 把洞察转成 MVP 方向。",
      "en": "You want to build a product but don't know what to build. Or you have a business and need to understand what your customers are struggling with. This workflow uses the Last 30 Days skill to mine Reddit and X for real pain points, then has OpenClaw build solutions to those problems."
    },
    "skills": [
      "Last 30 Days skill by Matt Van Horde",
      "Telegram or Discord integration for receiving research reports"
    ],
    "usage": {
      "zh": "安装 Last 30 Days 技能后，让代理围绕指定主题挖掘痛点、整理洞察并继续产出解决方案。",
      "en": "Install the Last 30 Days skill: Run research on any topic: Pick a pain point and have OpenClaw build a solution:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/market-research-product-factory.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/market-research-product-factory.md",
      "cachePath": "./data/source/usecases/market-research-product-factory.md"
    }
  },
  {
    "id": "knowledge-base-rag",
    "slug": "knowledge-base-rag",
    "order": 39,
    "category": "research",
    "name": {
      "zh": "个人知识库（RAG）",
      "en": "Personal Knowledge Base (RAG)"
    },
    "description": {
      "zh": "把网页、推文和文章丢进聊天即可入库，形成可检索的个人知识库。",
      "en": "Build a searchable knowledge base by dropping URLs, tweets, and articles into chat."
    },
    "overview": {
      "zh": "把网页、推文和文章丢进聊天即可入库，形成可检索的个人知识库。",
      "en": "You read articles, tweets, and watch videos all day but can never find that one thing you saw last week. Bookmarks pile up and become useless. This workflow builds a searchable knowledge base from everything you save:"
    },
    "skills": [
      "knowledge-base skill (or build custom RAG with embeddings)",
      "webfetch (built-in)",
      "Telegram topic or Slack channel for ingestion"
    ],
    "usage": {
      "zh": "安装知识库技能并配置收集频道后，让代理抓取内容、写入向量库并支持后续查询。",
      "en": "Install the knowledge-base skill from ClawdHub. Create a Telegram topic called \"knowledge-base\" (or use a Slack channel). Prompt OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/knowledge-base-rag.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/knowledge-base-rag.md",
      "cachePath": "./data/source/usecases/knowledge-base-rag.md"
    }
  },
  {
    "id": "pre-build-idea-validator",
    "slug": "pre-build-idea-validator",
    "order": 40,
    "category": "research",
    "name": {
      "zh": "构建前创意验证器",
      "en": "Pre-Build Idea Validator"
    },
    "description": {
      "zh": "在真正开工前先扫描 GitHub、HN、npm、PyPI 和 Product Hunt，避免在拥挤赛道重复造轮子。",
      "en": "Automatically scan GitHub, HN, npm, PyPI, and Product Hunt before building anything new — stop if the space is crowded, proceed if it's open."
    },
    "overview": {
      "zh": "在真正开工前先扫描 GitHub、HN、npm、PyPI 和 Product Hunt，避免在拥挤赛道重复造轮子。",
      "en": "Before OpenClaw starts building anything new, it automatically checks whether the idea already exists across GitHub, Hacker News, npm, PyPI, and Product Hunt — and adjusts its approach based on what it finds."
    },
    "skills": [
      "idea-reality-mcp — MCP server that scans real data sources and returns a competition score"
    ],
    "usage": {
      "zh": "接入 `idea-reality-mcp` 后，让代理在动手前做竞争扫描，再决定继续、转向或缩小范围。",
      "en": "Install idea-reality-mcp: Add the MCP server to your OpenClaw config: Add this to your OpenClaw agent instructions:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/pre-build-idea-validator.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/pre-build-idea-validator.md",
      "cachePath": "./data/source/usecases/pre-build-idea-validator.md"
    }
  },
  {
    "id": "semantic-memory-search",
    "slug": "semantic-memory-search",
    "order": 41,
    "category": "research",
    "name": {
      "zh": "语义记忆搜索",
      "en": "Semantic Memory Search"
    },
    "description": {
      "zh": "为 OpenClaw 的 markdown 记忆加上向量检索和自动同步能力。",
      "en": "Add vector-powered semantic search to your OpenClaw markdown memory files with hybrid retrieval and auto-sync."
    },
    "overview": {
      "zh": "为 OpenClaw 的 markdown 记忆加上向量检索和自动同步能力。",
      "en": "OpenClaw's built-in memory system stores everything as markdown files — but as memories grow over weeks and months, finding that one decision from last Tuesday becomes impossible. There is no search, just scrolling through files. This use case adds vector-powered semantic search on top of OpenClaw's existing markdown memory files using memsearch, so you can instantly find any past memory by meaning, not just keywords."
    },
    "skills": [
      "No OpenClaw skills required — memsearch is a standalone Python CLI/library",
      "Python 3.10+ with pip or uv"
    ],
    "usage": {
      "zh": "安装 `memsearch` 并为记忆目录建立索引后，就能按语义搜索历史决策、笔记和上下文。",
      "en": "Install memsearch: Run the interactive config wizard: Index your OpenClaw memory directory:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/semantic-memory-search.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/semantic-memory-search.md",
      "cachePath": "./data/source/usecases/semantic-memory-search.md"
    }
  },
  {
    "id": "polymarket-autopilot",
    "slug": "polymarket-autopilot",
    "order": 42,
    "category": "finance",
    "name": {
      "zh": "Polymarket 自动化模拟交易",
      "en": "Polymarket Autopilot: Automated Paper Trading"
    },
    "description": {
      "zh": "围绕预测市场做自动化 paper trading、回测和日报分析，在不动真钱的前提下测试策略。",
      "en": "Automated paper trading on prediction markets with backtesting, strategy analysis, and daily performance reports."
    },
    "overview": {
      "zh": "围绕预测市场做自动化 paper trading、回测和日报分析，在不动真钱的前提下测试策略。",
      "en": "Manually monitoring prediction markets for arbitrage opportunities and executing trades is time-consuming and requires constant attention. You want to test and refine trading strategies without risking real capital. This workflow automates paper trading on Polymarket with custom strategies:"
    },
    "skills": [
      "websearch or webfetch (for Polymarket API data)",
      "postgres or SQLite for trade logs and portfolio tracking",
      "Discord integration for daily reports",
      "Cron jobs for continuous monitoring",
      "Sub-agent spawning for parallel market analysis"
    ],
    "usage": {
      "zh": "连接 Polymarket 数据、交易日志数据库和日报渠道后，让代理按规则持续模拟交易并汇总表现。",
      "en": "Set up a database for paper trading: Create a Discord channel for updates (e.g., #polymarket-autopilot). Prompt OpenClaw:"
    },
    "source": {
      "repoUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases",
      "githubUrl": "https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/polymarket-autopilot.md",
      "rawUrl": "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases/polymarket-autopilot.md",
      "cachePath": "./data/source/usecases/polymarket-autopilot.md"
    }
  }
];
