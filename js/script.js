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


// Scroll menu
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".side-wrapper");
  if (!wrapper) return;

  let currentTop = -100;
  const targetTopInitial = 230;
  const offset = 230;
  const introSpeed = 0.025;
  const scrollSpeed = 0.050;
  const minTop = 30; // hauteur

  let phase = "intro";

  function animate() {
    const scrollY = window.scrollY;

    if (phase === "intro") {
      const delta = targetTopInitial - currentTop;
      currentTop += delta * introSpeed;

      if (Math.abs(delta) < 0.5) {
        currentTop = targetTopInitial;
        phase = "scroll";
      }

    } else if (phase === "scroll") {
      // La position cible descend avec le scroll, mais reste ≥ minTop
      const targetTop = Math.max(minTop, offset - scrollY);
      const delta = targetTop - currentTop;

      currentTop += delta * scrollSpeed;

      if (Math.abs(delta) < 0.5) {
        currentTop = targetTop;
      }
    }

    wrapper.style.top = `${currentTop}px`;
    requestAnimationFrame(animate);
  }

  animate();
});

