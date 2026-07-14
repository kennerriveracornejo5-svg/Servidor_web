/*=========================================
            FAQ ACORDEÓN
==========================================*/
console.log("testimonios cargado");
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

/*=========================================
        SLIDER TESTIMONIOS
==========================================*/

const slider = document.querySelector(".testimonial-slider");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Total de tarjetas visibles */

function visibleCards() {
  if (window.innerWidth <= 992) {
    return 1;
  }

  return 3;
}

function updateSlider() {
  const card = document.querySelector(".testimonial-card");

  const gap = 22;

  const width = card.offsetWidth + gap;

  slider.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".testimonial-card");

  const max = cards.length - visibleCards();

  if (currentIndex < max) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateSlider();
});

prevBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".testimonial-card");

  const max = cards.length - visibleCards();

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = max;
  }

  updateSlider();
});

window.addEventListener("resize", updateSlider);

/*=========================================
        AUTOPLAY
==========================================*/

setInterval(() => {
  nextBtn.click();
}, 4500);

/*=========================================
      APARECER AL HACER SCROLL
==========================================*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document
  .querySelectorAll(".testimonial-card,.faq-item,.location-info,.map")
  .forEach((el) => {
    el.classList.add("hidden");

    observer.observe(el);
  });
