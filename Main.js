let slideIndex = 1;
let slides = document.querySelector(".slides");
let totalSlides = slides.children.length;
let dots = document.querySelectorAll(".dot");
let autoSlide;

showSlides(slideIndex);

// Next/Previous controls
function nextSlide() {
  slideIndex++;
  if (slideIndex > totalSlides) slideIndex = 1;
  showSlides(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 1) slideIndex = totalSlides;
  showSlides(slideIndex);
}

// Current slide indicator
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

// Display the active slide
function showSlides(n) {
  let offset = -((n - 1) * 100) + "%";
  slides.style.transform = `translateX(${offset})`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[n - 1].classList.add("active");
}

// Auto Slide with Pause on Hover
function autoSlideShow() {
  autoSlide = setInterval(() => {
    nextSlide();
  }, 3000);
}

function pauseSlideShow() {
  clearInterval(autoSlide);
}

document
  .querySelector(".slider")
  .addEventListener("mouseenter", pauseSlideShow);
document.querySelector(".slider").addEventListener("mouseleave", autoSlideShow);

// Start auto slide show
autoSlideShow();
