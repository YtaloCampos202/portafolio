document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      const offset = 100 * (i - index);
      slide.style.transform = `translateX(${offset}%)`;
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  document.querySelector(".next-btn").addEventListener("click", nextSlide);
  document.querySelector(".prev-btn").addEventListener("click", prevSlide);

  // Mostrar la primera diapositiva al cargar la página
  showSlide(currentIndex);
});
