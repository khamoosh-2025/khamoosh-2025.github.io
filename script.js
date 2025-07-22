const fontSelect = document.getElementById("fontSelect");
const fontSizeRange = document.getElementById("fontSizeRange");
const fontSizeValue = document.getElementById("fontSizeValue");
const textInput = document.getElementById("textInput");
const previewArea = document.getElementById("previewArea");
const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;

function updatePreview() {
  const font = fontSelect.value;
  const size = fontSizeRange.value + "px";
  const text = textInput.value || "متن پیش‌نمایش...";

  previewArea.style.fontFamily = font;
  previewArea.style.fontSize = size;
  previewArea.textContent = text;
  fontSizeValue.textContent = size;
}

fontSelect.addEventListener("change", updatePreview);
fontSizeRange.addEventListener("input", updatePreview);
textInput.addEventListener("input", updatePreview);
toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
});

updatePreview();
