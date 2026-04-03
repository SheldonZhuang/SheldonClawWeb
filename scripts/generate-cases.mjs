import fs from "node:fs";
import path from "node:path";
import { ZH_OVERRIDES } from "./case-overrides.mjs";

const ROOT = process.cwd();
const README_PATH = path.join(ROOT, "data", "source", "README.md");
const USECASES_DIR = path.join(ROOT, "data", "source", "usecases");
const OUTPUT_PATH = path.join(ROOT, "data", "cases.js");
const SOURCE_REPO = "https://github.com/hesamsheikh/awesome-openclaw-usecases";
const RAW_REPO = "https://raw.githubusercontent.com/hesamsheikh/awesome-openclaw-usecases/main/usecases";

const CATEGORY_CONFIG = [
  { readme: "Social Media", key: "social", zh: "社交媒体", en: "Social Media" },
  { readme: "Creative & Building", key: "creative", zh: "创意与构建", en: "Creative & Building" },
  { readme: "Infrastructure & DevOps", key: "devops", zh: "基础设施与 DevOps", en: "Infrastructure & DevOps" },
  { readme: "Productivity", key: "productivity", zh: "生产力工具", en: "Productivity" },
  { readme: "Research & Learning", key: "research", zh: "研究与学习", en: "Research & Learning" },
  { readme: "Finance & Trading", key: "finance", zh: "金融与交易", en: "Finance & Trading" },
];

const CATEGORY_MAP = Object.fromEntries(
  CATEGORY_CONFIG.map((item) => [item.readme, item]),
);

function stripBom(text) {
  return text.replace(/^\uFEFF/, "");
}

function readUtf8(filePath) {
  return stripBom(fs.readFileSync(filePath, "utf8"));
}

function normalizeWhitespace(text) {
  return text.replace(/\s+/g, " ").trim();
}

function stripMarkdown(text) {
  return normalizeWhitespace(
    text
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/^>\s?/gm, "")
      .replace(/<\/?[^>]+>/g, " ")
      .replace(/[_*~]/g, "")
      .replace(/\|/g, " ")
      .replace(/^\s*[-+*]\s+/gm, "")
      .replace(/^\s*\d+\.\s+/gm, "")
      .replace(/\r/g, " "),
  );
}

function truncate(text, maxLength = 220) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength - 1).trim()}…`;
}

function getTitle(markdown) {
  for (const line of markdown.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }
    if (trimmed.startsWith("# ")) {
      return trimmed.slice(2).trim();
    }
  }
  return "";
}

function getIntro(markdown) {
  const lines = markdown.split(/\r?\n/);
  const collected = [];
  let pastTitle = false;
  let inFence = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!pastTitle) {
      if (trimmed.startsWith("# ")) {
        pastTitle = true;
      }
      continue;
    }

    if (trimmed.startsWith("```")) {
      inFence = !inFence;
      continue;
    }

    if (!inFence && /^##\s+/.test(trimmed)) {
      break;
    }

    collected.push(line);
  }

  const paragraphs = collected
    .join("\n")
    .split(/\n\s*\n/)
    .map((part) => stripMarkdown(part))
    .filter(Boolean);

  return paragraphs.slice(0, 2).join(" ");
}

function parseSections(markdown) {
  const sections = [];
  let current = null;
  let inFence = false;

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine;
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      inFence = !inFence;
      if (current) {
        current.lines.push(line);
      }
      continue;
    }

    if (!inFence) {
      const match = trimmed.match(/^##\s+(.+)$/);
      if (match) {
        if (current) {
          sections.push({
            title: current.title,
            content: current.lines.join("\n").trim(),
          });
        }
        current = { title: match[1].trim(), lines: [] };
        continue;
      }
    }

    if (current) {
      current.lines.push(line);
    }
  }

  if (current) {
    sections.push({
      title: current.title,
      content: current.lines.join("\n").trim(),
    });
  }

  return sections;
}

function findSection(sections, keywords) {
  const loweredKeywords = keywords.map((keyword) => keyword.toLowerCase());
  return sections.find((section) =>
    loweredKeywords.some((keyword) => section.title.toLowerCase().includes(keyword)),
  );
}

function extractListItems(content, limit = 5) {
  const items = [];
  let inFence = false;

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (line.startsWith("```")) {
      inFence = !inFence;
      continue;
    }

    if (inFence || !line) {
      continue;
    }

    const bulletMatch = line.match(/^[-+*•]\s+(.+)$/) || line.match(/^\d+\.\s+(.+)$/);
    if (bulletMatch) {
      const value = stripMarkdown(bulletMatch[1]);
      if (value) {
        items.push(value);
      }
    }
  }

  if (items.length > 0) {
    return items.slice(0, limit);
  }

  const fallback = stripMarkdown(content);
  if (!fallback) {
    return [];
  }

  return fallback
    .split(/(?<=[.!?])\s+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, limit);
}

function extractCodeHints(content, limit = 3) {
  const hints = [];
  const matches = content.matchAll(/```[\w-]*\r?\n([\s\S]*?)```/g);

  for (const match of matches) {
    const lines = match[1]
      .split(/\r?\n/)
      .map((line) => stripMarkdown(line))
      .filter((line) => line && !line.startsWith("<") && !line.startsWith("#"));

    hints.push(...lines);

    if (hints.length >= limit) {
      break;
    }
  }

  return hints.slice(0, limit);
}

function summarizeUsage(content) {
  const items = extractListItems(content, 3);
  if (items.length > 0) {
    return truncate(items.join(" "), 240);
  }
  const codeHints = extractCodeHints(content, 3);
  if (codeHints.length > 0) {
    return truncate(codeHints.join(" "), 240);
  }
  return truncate(stripMarkdown(content), 240);
}

function parseReadmeEntries(readme) {
  const entriesBySlug = new Map();
  let currentCategory = null;

  for (const line of readme.split(/\r?\n/)) {
    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      const heading = headingMatch[1].trim();
      currentCategory = CATEGORY_MAP[heading] ? heading : currentCategory;
      continue;
    }

    if (!currentCategory) {
      continue;
    }

    const rowMatch = line.match(/^\|\s*\[(.+?)\]\((usecases\/([^)]+))\)\s*\|\s*(.+?)\s*\|$/);
    if (!rowMatch) {
      continue;
    }

    const slug = rowMatch[3].replace(/\.md$/, "");
    const candidate = {
      slug,
      file: rowMatch[3],
      name: rowMatch[1].trim(),
      description: rowMatch[4].trim(),
      category: CATEGORY_MAP[currentCategory].key,
    };

    const existing = entriesBySlug.get(slug);
    if (!existing || candidate.description.length > existing.description.length) {
      entriesBySlug.set(slug, candidate);
    }
  }

  const categoryOrder = new Map(CATEGORY_CONFIG.map((item, index) => [item.key, index]));

  return Array.from(entriesBySlug.values()).sort((left, right) => {
    const categoryDiff = categoryOrder.get(left.category) - categoryOrder.get(right.category);
    if (categoryDiff !== 0) {
      return categoryDiff;
    }
    return left.name.localeCompare(right.name);
  });
}

function buildCases() {
  const readme = readUtf8(README_PATH);
  const entries = parseReadmeEntries(readme);
  const files = new Set(fs.readdirSync(USECASES_DIR));

  if (entries.length !== files.size) {
    throw new Error(`README entries (${entries.length}) do not match usecase files (${files.size}).`);
  }

  return entries.map((entry, index) => {
    const override = ZH_OVERRIDES[entry.slug];
    if (!override) {
      throw new Error(`Missing Chinese override for ${entry.slug}.`);
    }

    const markdown = readUtf8(path.join(USECASES_DIR, entry.file));
    const sections = parseSections(markdown);
    const skillsSection = findSection(sections, ["skills"]);
    const setupSection = findSection(sections, ["how to set", "detailed setup", "prompts"]);
    const title = getTitle(markdown) || entry.name;
    const intro = getIntro(markdown) || entry.description;

    const skills = extractListItems(skillsSection?.content ?? "", 5);
    const usage = summarizeUsage(setupSection?.content ?? intro);

    return {
      id: entry.slug,
      slug: entry.slug,
      order: index + 1,
      category: entry.category,
      name: {
        zh: override.name,
        en: title,
      },
      description: {
        zh: override.description,
        en: entry.description,
      },
      overview: {
        zh: override.description,
        en: intro,
      },
      skills,
      usage: {
        zh: override.usage,
        en: usage,
      },
      source: {
        repoUrl: SOURCE_REPO,
        githubUrl: `${SOURCE_REPO}/blob/main/usecases/${entry.file}`,
        rawUrl: `${RAW_REPO}/${entry.file}`,
        cachePath: `./data/source/usecases/${entry.file}`,
      },
    };
  });
}

function buildCategories(cases) {
  const counts = cases.reduce((map, item) => {
    map.set(item.category, (map.get(item.category) ?? 0) + 1);
    return map;
  }, new Map());

  return CATEGORY_CONFIG.map((item) => ({
    key: item.key,
    anchor: item.key,
    name: {
      zh: item.zh,
      en: item.en,
    },
    count: counts.get(item.key) ?? 0,
  }));
}

const cases = buildCases();
const categories = buildCategories(cases);
const syncedAt = new Date().toISOString().slice(0, 10);

const siteMeta = {
  brand: {
    zh: "Sheldon-龙虾应用案例",
    en: "Sheldon-OpenClaw Use Cases",
  },
  subtitle: {
    zh: "汇总 GitHub 社区里的真实 OpenClaw 工作流，按 6 大类别整理为中英文静态案例库。",
    en: "A bilingual static showcase of real OpenClaw workflows, organized across six categories.",
  },
  sourceRepo: SOURCE_REPO,
  syncedAt,
  totalCases: cases.length,
  totalCategories: categories.length,
};

const fileContent = `export const SITE_META = ${JSON.stringify(siteMeta, null, 2)};\n\nexport const CATEGORIES = ${JSON.stringify(categories, null, 2)};\n\nexport const CASES = ${JSON.stringify(cases, null, 2)};\n`;

fs.writeFileSync(OUTPUT_PATH, fileContent, "utf8");
console.log(`Generated ${cases.length} cases into ${OUTPUT_PATH}`);
