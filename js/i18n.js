const STORAGE_KEY = "sheldonclawweb:lang";
const DEFAULT_LANG = "zh";

export function getLanguage() {
  if (typeof window === "undefined") {
    return DEFAULT_LANG;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : "zh";
}

export function getSecondaryLanguage(lang = getLanguage()) {
  return lang === "zh" ? "en" : "zh";
}

export function pick(copy, lang = getLanguage()) {
  if (copy && typeof copy === "object") {
    return copy[lang] ?? copy.zh ?? copy.en ?? "";
  }

  return copy ?? "";
}

function applyStaticText(root = document, lang = getLanguage()) {
  root.querySelectorAll("[data-zh][data-en]").forEach((node) => {
    const value = lang === "zh" ? node.dataset.zh : node.dataset.en;
    const attr = node.dataset.i18nAttr;

    if (attr) {
      node.setAttribute(attr, value);
    } else {
      node.textContent = value;
    }
  });

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.lang = lang;
}

function syncLanguageSwitches(lang = getLanguage()) {
  document.querySelectorAll("[data-lang-switch]").forEach((container) => {
    if (!container.dataset.ready) {
      container.innerHTML = `
        <button type="button" class="lang-switch__option" data-lang-option="zh">中文</button>
        <button type="button" class="lang-switch__option" data-lang-option="en">EN</button>
      `;
      container.dataset.ready = "true";
    }

    container.querySelectorAll("[data-lang-option]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.langOption === lang);
      button.setAttribute("aria-pressed", String(button.dataset.langOption === lang));
    });

    container.setAttribute("aria-label", lang === "zh" ? "切换语言" : "Switch language");
  });
}

export function renderLanguageChrome() {
  const lang = getLanguage();
  applyStaticText(document, lang);
  syncLanguageSwitches(lang);
  return lang;
}

export function setLanguage(lang) {
  const next = lang === "en" ? "en" : "zh";
  const current = getLanguage();

  window.localStorage.setItem(STORAGE_KEY, next);
  renderLanguageChrome();

  if (next !== current) {
    document.dispatchEvent(
      new CustomEvent("langchange", {
        detail: { lang: next },
      }),
    );
  }
}

export function initI18n() {
  renderLanguageChrome();

  if (!window.__sheldonLangBound) {
    document.addEventListener("click", (event) => {
      const target = event.target.closest("[data-lang-option]");
      if (!target) {
        return;
      }
      setLanguage(target.dataset.langOption);
    });
    window.__sheldonLangBound = true;
  }

  return getLanguage();
}
