import { CASES, CATEGORIES, SITE_META } from "../data/cases.js";
import { getLanguage, getSecondaryLanguage, initI18n, pick } from "./i18n.js";
import { escapeHtml, renderInlineText, renderMarkdown } from "./markdown.js";

const app = document.querySelector("#case-app");
const params = new URLSearchParams(window.location.search);
const caseId = params.get("id");
const caseItem = CASES.find((item) => item.id === caseId);

if (!caseItem) {
  window.location.replace("./404.html");
  throw new Error("Unknown case id.");
}

const category = CATEGORIES.find((item) => item.key === caseItem.category) ?? CATEGORIES[0];
const state = {
  lang: "zh",
  activeTab: "overview",
  sourceHtml: "",
  sourceStatus: "loading",
  sourceOrigin: "github",
};

async function loadMarkdown() {
  const attempts = [
    { origin: "github", url: caseItem.source.rawUrl },
    { origin: "cache", url: caseItem.source.cachePath },
  ];

  for (const attempt of attempts) {
    try {
      const response = await fetch(attempt.url, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }

      const markdown = await response.text();
      state.sourceOrigin = attempt.origin;
      state.sourceStatus = "ready";
      state.sourceHtml = renderMarkdown(markdown);
      render();
      return;
    } catch (error) {
      continue;
    }
  }

  state.sourceStatus = "error";
  state.sourceHtml = "";
  render();
}

function sourceStatusCopy() {
  if (state.sourceStatus === "loading") {
    return state.lang === "zh" ? "正在读取 markdown…" : "Loading markdown…";
  }

  if (state.sourceStatus === "error") {
    return state.lang === "zh" ? "无法加载原始 markdown" : "Unable to load source markdown";
  }

  if (state.sourceOrigin === "github") {
    return state.lang === "zh" ? "实时 GitHub 原文" : "Live GitHub source";
  }

  return state.lang === "zh" ? "本地缓存副本" : "Local cached copy";
}

function renderDetailSignals() {
  const items = [
    {
      label: { zh: "类别", en: "Category" },
      value: pick(category.name, state.lang),
    },
    {
      label: { zh: "同步日期", en: "Synced" },
      value: SITE_META.syncedAt,
    },
    {
      label: { zh: "原文状态", en: "Source" },
      value: sourceStatusCopy(),
    },
  ];

  return `
    <div class="detail-hero__signals">
      ${items
        .map(
          (item) => `
            <article class="detail-signal">
              <span>${escapeHtml(item.label[state.lang])}</span>
              <strong>${escapeHtml(item.value)}</strong>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderOverviewPanel() {
  return `
    <div class="detail-cards detail-cards--overview">
      <article class="detail-card">
        <p class="detail-card__eyebrow">${state.lang === "zh" ? "功能说明" : "What It Does"}</p>
        <h2>${escapeHtml(pick(caseItem.name, state.lang))}</h2>
        <p>${renderInlineText(pick(caseItem.overview, state.lang))}</p>
      </article>
      <article class="detail-card">
        <p class="detail-card__eyebrow">${state.lang === "zh" ? "使用方法" : "How to Start"}</p>
        <h2>${state.lang === "zh" ? "快速上手" : "Quick Start"}</h2>
        <p>${renderInlineText(pick(caseItem.usage, state.lang))}</p>
      </article>
      <article class="detail-card">
        <p class="detail-card__eyebrow">${state.lang === "zh" ? "读取策略" : "Source Strategy"}</p>
        <h2>${state.lang === "zh" ? "GitHub 优先，本地回退" : "GitHub first, local fallback"}</h2>
        <p>
          ${
            state.lang === "zh"
              ? "详情页优先请求 GitHub 原始 markdown；如果网络不可用，会自动切换到站点内置的缓存副本。"
              : "The detail page prefers live GitHub markdown and automatically falls back to the cached local copy when the network is unavailable."
          }
        </p>
      </article>
    </div>
  `;
}

function renderSourcePanel() {
  const body =
    state.sourceStatus === "ready"
      ? `<div class="markdown-body">${state.sourceHtml}</div>`
      : state.sourceStatus === "loading"
        ? `<div class="detail-empty">${state.lang === "zh" ? "正在抓取 GitHub 原文，请稍候。" : "Fetching the source markdown. Please wait."}</div>`
        : `<div class="detail-empty">${state.lang === "zh" ? "未能读取 GitHub markdown，请直接打开 GitHub 链接查看。" : "The GitHub markdown could not be loaded. Please open the GitHub link directly."}</div>`;

  return `
    <article class="detail-card detail-card--source">
      <div class="detail-card__row">
        <div>
          <p class="detail-card__eyebrow">${state.lang === "zh" ? "原始内容" : "Source Markdown"}</p>
          <h2>${state.lang === "zh" ? "GitHub 原文" : "GitHub Source"}</h2>
        </div>
        <span class="status-pill status-pill--${state.sourceOrigin}">${escapeHtml(sourceStatusCopy())}</span>
      </div>
      <div class="source-actions">
        <a
          class="button button-secondary"
          href="${caseItem.source.githubUrl}"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
        <a
          class="button button-secondary"
          href="${caseItem.source.rawUrl}"
          target="_blank"
          rel="noreferrer noopener"
        >
          RAW
        </a>
      </div>
      ${body}
    </article>
  `;
}

function render() {
  state.lang = getLanguage();
  const secondaryLang = getSecondaryLanguage(state.lang);
  document.title = `${pick(caseItem.name, state.lang)} | ${pick(SITE_META.brand, state.lang)}`;

  app.innerHTML = `
    <section class="detail-hero">
      <div class="detail-hero__top">
        <a class="back-link" href="./index.html#${caseItem.category}">
          ${state.lang === "zh" ? "返回首页" : "Back Home"}
        </a>
        <span class="status-pill">${escapeHtml(pick(category.name, state.lang))}</span>
      </div>
      <p class="eyebrow">${escapeHtml(pick(SITE_META.brand, state.lang))}</p>
      <h1 class="detail-title">${escapeHtml(pick(caseItem.name, state.lang))}</h1>
      <p class="detail-title__alt">${escapeHtml(pick(caseItem.name, secondaryLang))}</p>
      <p class="detail-lead">${renderInlineText(pick(caseItem.description, state.lang))}</p>
      <div class="detail-hero__actions">
        <a class="button button-primary" href="${caseItem.source.githubUrl}" target="_blank" rel="noreferrer noopener">
          ${state.lang === "zh" ? "打开 GitHub" : "Open GitHub"}
        </a>
        <a class="button button-secondary" href="./index.html#${caseItem.category}">
          ${state.lang === "zh" ? "浏览同类案例" : "Explore Category"}
        </a>
      </div>
      ${renderDetailSignals()}
    </section>

    <section class="detail-layout">
      <aside class="detail-sidebar">
        <article class="detail-card">
          <p class="detail-card__eyebrow">${state.lang === "zh" ? "案例信息" : "Case Info"}</p>
          <h2>${state.lang === "zh" ? "案例快照" : "Snapshot"}</h2>
          <ul class="detail-meta-list">
            <li>
              <span>${state.lang === "zh" ? "类别" : "Category"}</span>
              <strong>${escapeHtml(pick(category.name, state.lang))}</strong>
            </li>
            <li>
              <span>${state.lang === "zh" ? "同步日期" : "Synced At"}</span>
              <strong>${escapeHtml(SITE_META.syncedAt)}</strong>
            </li>
            <li>
              <span>${state.lang === "zh" ? "原文状态" : "Source Mode"}</span>
              <strong>${escapeHtml(sourceStatusCopy())}</strong>
            </li>
          </ul>
        </article>

        <article class="detail-card">
          <p class="detail-card__eyebrow">${state.lang === "zh" ? "所需技能" : "Required Skills"}</p>
          <h2>${state.lang === "zh" ? "技术依赖" : "Dependencies"}</h2>
          <ul class="detail-skill-list">
            ${caseItem.skills.map((skill) => `<li>${renderInlineText(skill)}</li>`).join("")}
          </ul>
        </article>
      </aside>

      <div class="detail-main">
        <div class="detail-tabs">
          <button
            type="button"
            class="detail-tab ${state.activeTab === "overview" ? "is-active" : ""}"
            data-detail-tab="overview"
          >
            ${state.lang === "zh" ? "中文概览" : "Overview"}
          </button>
          <button
            type="button"
            class="detail-tab ${state.activeTab === "source" ? "is-active" : ""}"
            data-detail-tab="source"
          >
            ${state.lang === "zh" ? "GitHub 原文" : "GitHub Source"}
          </button>
        </div>
        <div class="${state.activeTab === "overview" ? "" : "is-hidden"}">
          ${renderOverviewPanel()}
        </div>
        <div class="${state.activeTab === "source" ? "" : "is-hidden"}">
          ${renderSourcePanel()}
        </div>
      </div>
    </section>
  `;
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-detail-tab]");
  if (!tab) {
    return;
  }

  state.activeTab = tab.dataset.detailTab;
  render();
});

document.addEventListener("langchange", () => {
  render();
});

initI18n();
render();
loadMarkdown();
