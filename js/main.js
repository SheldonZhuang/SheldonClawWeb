import { CASES, CATEGORIES, SITE_META } from "../data/cases.js";
import { getLanguage, getSecondaryLanguage, initI18n, pick } from "./i18n.js";
import { escapeHtml, renderInlineText } from "./markdown.js";

const state = {
  expandedId: null,
  activeCategory: CATEGORIES[0]?.key ?? "",
  lang: "zh",
};

const CATEGORY_INTROS = {
  social: {
    zh: "追踪内容更新、做信息摘要，也覆盖账号分析与自动化运营。",
    en: "Track content updates, create digests, and automate account operations.",
  },
  creative: {
    zh: "把创意制作、网站生成、视频编辑和设计构建收进同一类场景。",
    en: "A single group for creative production, website building, video editing, and design workflows.",
  },
  devops: {
    zh: "聚焦基础设施、工作流编排和让系统自动运转的运维场景。",
    en: "Focused on infrastructure, orchestration, and DevOps-style system workflows.",
  },
  productivity: {
    zh: "覆盖日常事务自动化、执行代理和团队协作这类高频任务。",
    en: "Covers everyday automation, execution agents, and high-frequency team productivity tasks.",
  },
  research: {
    zh: "适合做检索、学习、分析和把复杂资料整理成可用结论。",
    en: "Built for search, learning, analysis, and turning messy material into usable conclusions.",
  },
  finance: {
    zh: "用于市场监控、自动交易和对时效性要求更高的金融工作流。",
    en: "Used for market monitoring, automated trading, and time-sensitive finance workflows.",
  },
};

const heroMetrics = document.querySelector("#hero-metrics");
const overviewGrid = document.querySelector("#overview-grid");
const categoryNav = document.querySelector("#category-nav");
const caseSections = document.querySelector("#case-sections");
let sectionObserver = null;

function localized(keywords) {
  return state.lang === "zh" ? keywords.zh : keywords.en;
}

function renderDocumentTitle() {
  document.title = `${pick(SITE_META.brand, state.lang)} | ${pick(SITE_META.subtitle, state.lang)}`;
}

function renderHeroMetrics() {
  const items = [
    {
      value: String(SITE_META.totalCases).padStart(2, "0"),
      label: { zh: "真实案例", en: "Real Cases" },
    },
    {
      value: String(SITE_META.totalCategories).padStart(2, "0"),
      label: { zh: "场景分类", en: "Categories" },
    },
    {
      value: state.lang === "zh" ? "中英双语" : "ZH / EN",
      label: { zh: "语言模式", en: "Language Mode" },
    },
    {
      value: SITE_META.syncedAt,
      label: { zh: "最近同步", en: "Last Synced" },
    },
  ];

  heroMetrics.innerHTML = items
    .map(
      (item) => `
        <article class="metric-card">
          <p class="metric-value">${escapeHtml(item.value)}</p>
          <p class="metric-label">${escapeHtml(localized(item.label))}</p>
        </article>
      `,
    )
    .join("");
}

function renderOverviewGrid() {
  const items = [
    {
      size: "wide",
      eyebrow: { zh: "中英双语", en: "Bilingual" },
      title: {
        zh: "中文为主，英文并行，适合直接做案例检索。",
        en: "Chinese first, English alongside, ready for fast case lookup.",
      },
      copy: {
        zh: "首页和详情页都支持无刷新切换；每个案例保留中英名称、功能说明、所需技能和使用方法。",
        en: "Both homepage and detail pages switch instantly, while each case keeps bilingual names, overview, skills, and usage guidance.",
      },
      note: {
        zh: "不需要在两个版本之间来回跳转。",
        en: "No need to bounce between separate language versions.",
      },
    },
    {
      eyebrow: { zh: "卡片交互", en: "Card Interaction" },
      title: {
        zh: "卡片先看，再决定是否深入。",
        en: "Preview on the card, then decide whether to go deeper.",
      },
      copy: {
        zh: "展开卡片即可获得概览、技能和使用方式，不必在列表和详情页之间反复跳转。",
        en: "Open the card to get the overview, required skills, and quick start without bouncing between list and detail pages.",
      },
    },
    {
      eyebrow: { zh: "GitHub 源数据", en: "GitHub Source" },
      title: {
        zh: "详情页继续保留 GitHub 原文。",
        en: "The detail page keeps the original GitHub markdown attached.",
      },
      copy: {
        zh: "详情页优先直连 GitHub markdown，网络不可用时自动回退到本地缓存，兼顾溯源与可访问性。",
        en: "Detail pages prefer live GitHub markdown and fall back to the cached local copy, so source traceability and availability stay together.",
      },
    },
  ];

  overviewGrid.innerHTML = items
    .map(
      (item, index) => `
        <article class="overview-card ${item.size ? `overview-card--${item.size}` : ""}" style="animation-delay:${index * 70}ms">
          <p class="overview-card__eyebrow">${escapeHtml(localized(item.eyebrow))}</p>
          <h3>${escapeHtml(localized(item.title))}</h3>
          <p>${escapeHtml(localized(item.copy))}</p>
          ${
            item.note
              ? `<p class="overview-card__note">${escapeHtml(localized(item.note))}</p>`
              : ""
          }
        </article>
      `,
    )
    .join("");
}

function renderCategoryNav() {
  categoryNav.innerHTML = CATEGORIES.map((category) => {
    const active = state.activeCategory === category.key;
    return `
      <button
        type="button"
        class="category-pill ${active ? "is-active" : ""}"
        data-category-link="${category.key}"
      >
        <span>${escapeHtml(pick(category.name, state.lang))}</span>
        <small>${escapeHtml(String(category.count))}</small>
      </button>
    `;
  }).join("");
}

function renderCard(caseItem) {
  const expanded = state.expandedId === caseItem.id;
  const secondaryLang = getSecondaryLanguage(state.lang);

  return `
    <article class="case-card ${expanded ? "is-open" : ""}" data-case-id="${caseItem.id}">
      <button
        type="button"
        class="case-card__trigger"
        data-case-toggle="${caseItem.id}"
        aria-expanded="${expanded}"
      >
        <div class="case-card__meta">
          <span class="case-card__index">${String(caseItem.order).padStart(2, "0")}</span>
        </div>
        <h3>${escapeHtml(pick(caseItem.name, state.lang))}</h3>
        <p class="case-card__alt">${escapeHtml(pick(caseItem.name, secondaryLang))}</p>
        <p class="case-card__summary">${renderInlineText(pick(caseItem.description, state.lang))}</p>
      </button>
      <div class="case-card__content">
        <div class="case-card__content-inner">
          <div class="case-card__divider"></div>
          <div class="case-card__block">
            <p class="case-card__label">${state.lang === "zh" ? "功能说明" : "Overview"}</p>
            <p class="case-card__copy">${renderInlineText(pick(caseItem.overview, state.lang))}</p>
          </div>
          <div class="case-card__block">
            <p class="case-card__label">${state.lang === "zh" ? "所需技能" : "Required Skills"}</p>
            <div class="skill-chips">
              ${caseItem.skills
                .slice(0, 4)
                .map((skill) => `<span class="skill-chip">${renderInlineText(skill)}</span>`)
                .join("")}
            </div>
          </div>
          <div class="case-card__block">
            <p class="case-card__label">${state.lang === "zh" ? "使用方法" : "How to Start"}</p>
            <p class="case-card__copy">${renderInlineText(pick(caseItem.usage, state.lang))}</p>
          </div>
          <div class="case-card__actions">
            <a class="button button-primary" href="./case.html?id=${encodeURIComponent(caseItem.id)}">
              ${state.lang === "zh" ? "查看详情" : "Open Detail"}
            </a>
            <a
              class="button button-secondary"
              href="${caseItem.source.githubUrl}"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCaseSections() {
  caseSections.innerHTML = CATEGORIES.map((category, index) => {
    const items = CASES.filter((caseItem) => caseItem.category === category.key);
    const intro = CATEGORY_INTROS[category.key] ?? {
      zh: `当前分组包含 ${category.count} 个真实案例。`,
      en: `This section contains ${category.count} real use cases.`,
    };

    return `
      <section class="case-section" id="${category.anchor}">
        <div class="case-section__header">
          <div class="case-section__heading">
            <p class="section-kicker">${String(index + 1).padStart(2, "0")}</p>
            <h2>${escapeHtml(pick(category.name, state.lang))}</h2>
            <p class="case-section__copy">${escapeHtml(pick(intro, state.lang))}</p>
          </div>
          <p class="case-section__count">
            ${state.lang === "zh" ? `${category.count} 个案例` : `${category.count} Cases`}
          </p>
        </div>
        <div class="case-grid">
          ${items.map((caseItem) => renderCard(caseItem)).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function updateActiveCategory(categoryKey) {
  state.activeCategory = categoryKey;
  categoryNav.querySelectorAll("[data-category-link]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.categoryLink === categoryKey);
  });
}

function observeSections() {
  if (sectionObserver) {
    sectionObserver.disconnect();
  }

  const sections = Array.from(document.querySelectorAll(".case-section"));
  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (visible) {
        updateActiveCategory(visible.target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.1, 0.35, 0.6],
    },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function renderAll() {
  state.lang = getLanguage();
  renderDocumentTitle();
  renderHeroMetrics();
  renderOverviewGrid();
  renderCategoryNav();
  renderCaseSections();
  observeSections();
}

document.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-case-toggle]");
  if (toggle) {
    state.expandedId = state.expandedId === toggle.dataset.caseToggle ? null : toggle.dataset.caseToggle;
    renderCaseSections();
    observeSections();
    return;
  }

  const categoryLink = event.target.closest("[data-category-link]");
  if (categoryLink) {
    const target = document.getElementById(categoryLink.dataset.categoryLink);
    if (target) {
      updateActiveCategory(categoryLink.dataset.categoryLink);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});

document.addEventListener("langchange", () => {
  renderAll();
});

initI18n();
renderAll();
