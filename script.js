const textInput = document.getElementById('textInput');
const fontSelect = document.getElementById('fontSelect');
const colorPicker = document.getElementById('colorPicker');
const output = document.getElementById('output');

function updateOutput() {
  output.innerText = textInput.value;
  output.style.fontFamily = fontSelect.value;
  output.style.color = colorPicker.value;
}

textInput.addEventListener('input', updateOutput);
fontSelect.addEventListener('change', updateOutput);
colorPicker.addEventListener('input', updateOutput);

function downloadText() {
  const blob = new Blob([textInput.value], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'output.txt';
  link.click();
}
