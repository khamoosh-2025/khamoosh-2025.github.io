const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function updatePreview() {
  preview.innerHTML = editor.value;
}
editor.addEventListener("input", updatePreview);

function setBold() {
  wrapText("<b>", "</b>");
}
function setItalic() {
  wrapText("<i>", "</i>");
}
function setUnderline() {
  wrapText("<u>", "</u>");
}
function setColor(color) {
  wrapText("<span style='color:" + color + "'>", "</span>");
}
function insertImage(input) {
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    editor.value += `<img src="${e.target.result}" style="max-width:100%;">`;
    updatePreview();
  };
  if (file) reader.readAsDataURL(file);
}

function wrapText(startTag, endTag) {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const selected = editor.value.substring(start, end);
  const newText = editor.value.substring(0, start) + startTag + selected + endTag + editor.value.substring(end);
  editor.value = newText;
  updatePreview();
}
