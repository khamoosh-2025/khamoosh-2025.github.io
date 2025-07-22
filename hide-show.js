document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach(p => {
    const regex = /\[\+(.*?)\+\]/g;
    let html = p.innerHTML;
    let match;
    let replacements = [];

    while ((match = regex.exec(html)) !== null) {
      const id = "hidden_" + Math.random().toString(36).substr(2, 9);
      const original = match[0];
      const content = match[1];
      const replacement = \`
        <button class="toggle-hidden" onclick="
          const el = document.getElementById('${id}');
          el.style.display = (el.style.display === 'none') ? 'block' : 'none';
          this.innerText = (el.style.display === 'none') ? 'نمایش ⬇️' : 'پنهان ⬆️';
        ">نمایش ⬇️</button>
        <div id="\${id}" class="hidden-content">\${content}</div>
      \`;
      replacements.push({ original, replacement });
    }

    replacements.forEach(({ original, replacement }) => {
      html = html.replace(original, replacement);
    });

    p.innerHTML = html;
  });
});