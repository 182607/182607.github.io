document.addEventListener("DOMContentLoaded", function() {
  const carouselSlide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");

  let counter = 0;

  setInterval(() => {
    counter++;

    if (counter === images.length) {
      counter = 0;
    }

    carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
  }, 1000); // Cambiar cada segundo
});
