document.querySelectorAll('.hidden-text').forEach(span => {
  span.addEventListener('click', () => {
    span.classList.toggle('show');
  });
});
