const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function cardsPerView() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 991) return 2;
  return 3;
}

function moveSlider() {
  const visible = cardsPerView();
  const gap = 22;
  const width = cards[0].offsetWidth + gap;

  track.style.transform = `translateX(-${index * width}px)`;
}

// ► Siguiente
next.addEventListener("click", () => {
  const visible = cardsPerView();

  index++;

  if (index > cards.length - visible) {
    index = 0;
  }

  moveSlider();
});

// ◄ Anterior
prev.addEventListener("click", () => {
  const visible = cardsPerView();

  index--;

  if (index < 0) {
    index = cards.length - visible;
  }

  moveSlider();
});

window.addEventListener("resize", moveSlider);

moveSlider();
/*=========================================
        FAQ ACORDEÓN
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Cerrar todas
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });

    // Si estaba cerrada, abrirla
    if (!isActive) {
      item.classList.add("active");
    }
  });
});
