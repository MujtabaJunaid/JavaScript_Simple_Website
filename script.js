document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("confirmation").textContent = "Thank you for contacting us!";
      form.reset();
    });
  }
});
