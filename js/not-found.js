import { getLanguage, initI18n } from "./i18n.js";

function updateTitle() {
  document.title =
    getLanguage() === "zh"
      ? "404 | Sheldon-龙虾应用案例"
      : "404 | Sheldon-OpenClaw Use Cases";
}

initI18n();
updateTitle();

document.addEventListener("langchange", updateTitle);
