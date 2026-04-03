export function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderInlineText(value = "") {
  let html = escapeHtml(value);

  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, label, url) =>
      `<a href="${url}" target="_blank" rel="noreferrer noopener">${label}</a>`,
  );
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return html;
}

export function renderMarkdown(markdown = "") {
  const lines = String(markdown).replace(/\r/g, "").split("\n");
  const html = [];
  let paragraph = [];
  let listType = null;
  let listItems = [];
  let blockquote = [];
  let inCode = false;
  let codeLang = "";
  let codeLines = [];

  function flushParagraph() {
    if (paragraph.length === 0) {
      return;
    }
    html.push(`<p>${renderInlineText(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (listItems.length === 0 || !listType) {
      return;
    }
    html.push(`<${listType}>${listItems.join("")}</${listType}>`);
    listType = null;
    listItems = [];
  }

  function flushBlockquote() {
    if (blockquote.length === 0) {
      return;
    }
    html.push(`<blockquote><p>${renderInlineText(blockquote.join(" "))}</p></blockquote>`);
    blockquote = [];
  }

  function flushCode() {
    if (codeLines.length === 0 && !codeLang) {
      return;
    }

    const langClass = codeLang ? ` class="language-${escapeHtml(codeLang)}"` : "";
    html.push(`<pre><code${langClass}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
    codeLines = [];
    codeLang = "";
  }

  function flushAll() {
    flushParagraph();
    flushList();
    flushBlockquote();
  }

  for (const rawLine of lines) {
    const line = rawLine ?? "";
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      flushAll();

      if (!inCode) {
        inCode = true;
        codeLang = trimmed.slice(3).trim();
      } else {
        inCode = false;
        flushCode();
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (!trimmed) {
      flushAll();
      continue;
    }

    if (/^#{1,6}\s+/.test(trimmed)) {
      flushAll();
      const match = trimmed.match(/^(#{1,6})\s+(.+)$/);
      const level = Math.min(match[1].length, 6);
      html.push(`<h${level}>${renderInlineText(match[2])}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(trimmed) || /^\*\*\*+$/.test(trimmed)) {
      flushAll();
      html.push("<hr>");
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      flushList();
      blockquote.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-+*]\s+(.+)$/);
    if (unorderedMatch) {
      flushParagraph();
      flushBlockquote();
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      listItems.push(`<li>${renderInlineText(unorderedMatch[1])}</li>`);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      flushParagraph();
      flushBlockquote();
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      listItems.push(`<li>${renderInlineText(orderedMatch[1])}</li>`);
      continue;
    }

    flushList();
    flushBlockquote();
    paragraph.push(trimmed);
  }

  if (inCode) {
    flushCode();
  }

  flushAll();

  return html.join("");
}
