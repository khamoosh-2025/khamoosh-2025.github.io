document.getElementById('fontSelector').addEventListener('change', function () {
  const selectedFont = this.value;
  document.getElementById('text').style.fontFamily = selectedFont;
  document.getElementById('title').style.fontFamily = selectedFont;
});