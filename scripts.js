const slidesContainer = document.querySelector(".promo");
const dots = document.querySelectorAll(".slider-indicators .dot");
function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}
function trackCurrentSlide() {
  const scrollPosition = slidesContainer.scrollLeft;
  const slideWidth = slidesContainer.clientWidth;

  const index = Math.round(scrollPosition / slideWidth);

  updateDots(index);
}
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slidesContainer.scrollTo({
      left: index * slidesContainer.clientWidth,
      behavior: "smooth",
    });
  });
});
function initSlider() {
  updateDots(0);
}

initSlider();

slidesContainer.addEventListener("scroll", trackCurrentSlide);
