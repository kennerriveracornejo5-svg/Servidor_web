console.log("comunidad cargado");

const counters = document.querySelectorAll(".counter");

const communityObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;
        const increment = target / 80;

        const update = () => {
          current += increment;

          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(update);
          } else {
            counter.textContent = target.toLocaleString() + "+";
          }
        };

        update();

        communityObserver.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => communityObserver.observe(counter));
