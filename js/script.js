document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".actu-slide");
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, 5000); // Toutes les 5 secondes
});
