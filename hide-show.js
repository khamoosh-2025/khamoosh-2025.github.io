
// hide-show.js
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.toggle-button');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = btn.getAttribute('data-target');
      const content = document.getElementById(targetId);
      if (content) {
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
      }
    });
  });
});
