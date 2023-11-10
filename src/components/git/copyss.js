import Copy from "./Copy.js";

const copyButton = document.querySelector(".hljs-copy-button");
copyButton.addEventListener("click", () => {
  const codeBlock = document.querySelector("pre.hljs");
  const code = codeBlock.textContent;
  Copy.copy(code);
});
