
// Quick Contact Box JS
document.getElementById('toggle-contact').addEventListener('click', function() {
  const form = document.getElementById('contact-form');
  form.style.display = (form.style.display === 'flex') ? 'none' : 'flex';
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('پیام شما ارسال شد!');
  this.reset();
  this.style.display = 'none';
});
