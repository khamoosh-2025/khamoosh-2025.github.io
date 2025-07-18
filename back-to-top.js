
// Show/Hide Back to Top Button
window.addEventListener("scroll", function () {
  const button = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});
