// Apparition Image
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


// Effet menu
document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".menu-trigger");
  const wrapper = document.querySelector(".side-wrapper");
  if (!trigger || !wrapper) return;

  const bounceZoomShadow = [
    { transform: "translateY(0) scale(1)", filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.2))" },
    { transform: "translateY(-8px) scale(1.1)", filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))" },
    { transform: "translateY(0) scale(1)", filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.2))" },
    { transform: "translateY(-4px) scale(1.05)", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.22))" },
    { transform: "translateY(0) scale(1)", filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.2))" }
  ];

  const bounceOptions = { duration: 900, easing: "ease-in-out" };

  setInterval(() => {
    // Ne pas lancer l’animation si le menu est ouvert
    if (!wrapper.matches(":hover")) {
      trigger.animate(bounceZoomShadow, bounceOptions);
    }
  }, 3000);
});


// clic pour mobile
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".vignette-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});






