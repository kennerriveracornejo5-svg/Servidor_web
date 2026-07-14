(() => {
  document.addEventListener("DOMContentLoaded", () => {
    /*==============================
        BOTÓN SUBIR
    ==============================*/

    const scrollTop = document.querySelector(".scroll-top");

    if (scrollTop) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          scrollTop.classList.add("show-scroll");
        } else {
          scrollTop.classList.remove("show-scroll");
        }
      });

      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();

        window.scrollTo({
          top: 0,

          behavior: "smooth",
        });
      });
    }

    /*==============================
        SUSCRIPCIÓN
    ==============================*/

    const form = document.querySelector(".footer-form");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = form.querySelector("input");

        const value = email.value.trim();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {
          alert("Ingrese un correo electrónico.");

          email.focus();

          return;
        }

        if (!regex.test(value)) {
          alert("Ingrese un correo válido.");

          email.focus();

          return;
        }

        alert("¡Gracias por suscribirte!");

        form.reset();
      });
    }
  });
})();
