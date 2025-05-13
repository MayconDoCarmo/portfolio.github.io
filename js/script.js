// script.js
const slides = document.querySelectorAll('.projeto-card');
const leftBtn = document.querySelector('.slide-btn.left');
const rightBtn = document.querySelector('.slide-btn.right');
const indexDisplay = document.querySelector('.index-slide');

let currentIndex = 0;

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });

  indexDisplay.textContent = `${currentIndex + 1}/${slides.length}`;
}

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

updateSlide();
