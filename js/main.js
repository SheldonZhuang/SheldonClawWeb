import { CASES, CATEGORIES, SITE_META } from "../data/cases.js";
import { getLanguage, getSecondaryLanguage, initI18n, pick } from "./i18n.js";
import { escapeHtml, renderInlineText } from "./markdown.js";

const state = {
  expandedId: null,
  activeCategory: CATEGORIES[0]?.key ?? "",
  lang: "zh",
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
      value: String(SITE_META.totalCases),
      label: { zh: "真实案例", en: "Cases" },
    },
    {
      value: String(SITE_META.totalCategories),
      label: { zh: "类别", en: "Categories" },
    },
    {
      value: state.lang === "zh" ? "静态站点" : "Static",
      label: { zh: "形态", en: "Format" },
    },
    {
      value: SITE_META.syncedAt,
      label: { zh: "同步日期", en: "Synced" },
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
      eyebrow: { zh: "中英双语", en: "Bilingual" },
      title: {
        zh: "中文主视图，英文并行。",
        en: "Chinese first, English alongside.",
      },
      copy: {
        zh: "首页和详情页都支持无刷新切换。",
        en: "Homepage and detail pages switch languages instantly.",
      },
    },
    {
      eyebrow: { zh: "卡片交互", en: "Card Interaction" },
      title: {
        zh: "先扫览，再展开。",
        en: "Scan first, expand only when needed.",
      },
      copy: {
        zh: "卡片内直接查看概览、技能和使用方式。",
        en: "Each card reveals overview, skills, and setup guidance.",
      },
    },
    {
      eyebrow: { zh: "GitHub 源数据", en: "GitHub Source" },
      title: {
        zh: "详情优先直连 GitHub。",
        en: "Live GitHub markdown first.",
      },
      copy: {
        zh: "网络不可用时自动回退到本地缓存。",
        en: "Falls back to a cached local copy when the live fetch fails.",
      },
    },
    {
      eyebrow: { zh: "响应式布局", en: "Responsive Layout" },
      title: {
        zh: "桌面 4 列，移动端自适应。",
        en: "Four columns on desktop, adaptive on smaller screens.",
      },
      copy: {
        zh: "卡片与详情页会按屏幕尺寸自动重排。",
        en: "Cards and detail layouts automatically rearrange by screen size.",
      },
    },
  ];

  overviewGrid.innerHTML = items
    .map(
      (item, index) => `
        <article class="overview-card" style="animation-delay:${index * 70}ms">
          <p class="overview-card__eyebrow">${escapeHtml(localized(item.eyebrow))}</p>
          <h3>${escapeHtml(localized(item.title))}</h3>
          <p>${escapeHtml(localized(item.copy))}</p>
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

function renderCard(caseItem, category) {
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
          <span class="case-card__badge">${escapeHtml(pick(category.name, state.lang))}</span>
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
  caseSections.innerHTML = CATEGORIES.map((category) => {
    const items = CASES.filter((caseItem) => caseItem.category === category.key);

    return `
      <section class="case-section" id="${category.anchor}">
        <div class="case-section__header">
          <div>
            <p class="section-kicker">${String(category.count).padStart(2, "0")}</p>
            <h2>${escapeHtml(pick(category.name, state.lang))}</h2>
          </div>
          <p class="case-section__copy">
            ${
              state.lang === "zh"
                ? `当前分组包含 ${category.count} 个真实案例。`
                : `This section contains ${category.count} real use cases.`
            }
          </p>
        </div>
        <div class="case-grid">
          ${items.map((caseItem) => renderCard(caseItem, category)).join("")}
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
