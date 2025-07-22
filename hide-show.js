// Comment Change: اسکریپت برای مدیریت نمایش و پنهان کردن عناصر
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".toggle-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      var target = document.getElementById(button.dataset.target);
      if (target.classList.contains("hidden")) {
        target.classList.remove("hidden");
      } else {
        target.classList.add("hidden");
      }
    });
  });
});