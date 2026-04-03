# Local CRM Framework with DenchClaw

Setting up a CRM that actually works with OpenClaw is painful. You need to wire up databases, build UIs, configure browser automation, connect messaging platforms, and somehow get the agent to understand your data schema. Most people give up halfway through and end up with a half-working Notion integration.

DenchClaw is an open-source framework that turns OpenClaw into a fully local CRM, sales automation, and productivity platform — installed with a single command and running entirely on your machine.

## Pain Point

OpenClaw is incredibly powerful as a primitive, but using it for real business workflows (lead tracking, outbound, pipeline management) requires stitching together a dozen tools: a database, a UI, browser access, messaging integrations, file management. Every new integration means more manual setup, more credentials to manage, and more things that break. You want Cursor-level UX for your business operations, not a pile of shell scripts.

## What It Does

- **One-command setup**: `npx denchclaw` installs everything — DuckDB database, web UI, OpenClaw profile, browser automation, skills — and opens at `localhost:3100`
- **Natural language CRM**: Ask "show me companies with more than 5 employees" and it updates the view live. No manual filters needed
- **Full browser automation**: Copies your Chrome profile so the agent has your same auth state — say "import everything from my HubSpot" and it logs in, exports, and imports
- **Multiple views**: Table, Kanban, Calendar, Timeline (Gantt), Gallery, and List views — all configurable by the agent via YAML
- **App builder**: OpenClaw builds self-contained web apps (dashboards, tools, games) that run inside the workspace with access to your data
- **File-system-first**: Table filters, views, column toggles, calendar settings — everything is a file, so OpenClaw can directly read and modify it
- **Works as a coding agent**: DenchClaw built DenchClaw. It's also a full file tree browser and code editor for your Mac

## How to Set It Up

1. Install with one command:

```bash
npx denchclaw
```

2. Complete the onboarding wizard. DenchClaw creates a dedicated OpenClaw profile called `dench` and starts a gateway on port 19001.

3. Open `localhost:3100` in your browser. On Safari, add it to your Dock as a PWA.

4. Start talking to it:

```text
Hey, create a "Leads" object with fields: Name, Email, Company, Status (New/Contacted/Qualified/Won/Lost), and Notes. Import this CSV of leads I downloaded from Apollo.
```

```text
Show me all leads where Status is "Contacted" and sort by last updated. Switch to Kanban view grouped by Status.
```

```text
Go to my LinkedIn, find the last 20 people who viewed my profile, and add them as leads with their company info enriched.
```

```text
Draft a personalized outreach email to each lead in "New" status based on their company's recent news. Save the drafts in a new "Outreach Drafts" document.
```

5. You can also use it from Telegram or any connected messaging platform — manage your pipeline from your phone while on the go.

## Skills Needed

DenchClaw bundles all required skills automatically:

- **CRM Skill** — DuckDB-backed structured data management with objects, fields, entries, and multiple view types
- **App Builder Skill** — Build web apps (dashboards, tools) that run inside the workspace with access to your database
- **Browser Automation Skill** — Chromium browser with your existing Chrome auth state for web scraping, imports, and outreach

No additional skill installation or configuration required.

## Key Insights

- **File-system = agent-native UI**: Because every setting, filter, and view is stored as a YAML/markdown file, OpenClaw can modify the UI as naturally as it edits code. No API wrappers needed.
- **DuckDB is the sweet spot**: Smallest, most performant embedded database that still supports full SQL. No server process, no credentials, no network — just a file.
- **Chrome profile cloning is a superpower**: Instead of fighting OAuth flows and API rate limits, DenchClaw copies your browser's auth state. The agent sees what you see, does what you do.
- **One `npx` command beats a weekend of setup**: The entire stack (database, web UI, OpenClaw profile, gateway, browser, skills) installs and configures itself. No Docker, no env files, no dependency hell.

## Demo

[Watch the demo video](https://www.youtube.com/watch?v=pfACTbc3Bh4#t=43) — shows the full workflow from install to managing a live CRM pipeline with natural language.

## Related Links

- [DenchClaw GitHub](https://github.com/DenchHQ/DenchClaw) — MIT licensed, open source
- [DenchClaw Website](https://denchclaw.com)
- [Discord Community](https://discord.gg/PDFXNVQj9n)
- [Skills Store](https://skills.sh)

