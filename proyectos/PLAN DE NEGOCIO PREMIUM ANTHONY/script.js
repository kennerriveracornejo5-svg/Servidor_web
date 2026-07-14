/*================================
  ANTHONY AMAYA
  SCRIPT PREMIUM
================================*/

// Animación al aparecer secciones al hacer scroll

const elementos = document.querySelectorAll(
  ".servicio, .ventaja, .plan, .testimonio, .pregunta, .galeria-grid img",
);

const observar = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("mostrar");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

elementos.forEach((elemento) => {
  observar.observe(elemento);
});

// Cambiar fondo del header al bajar

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(3,7,12,.95)";
  } else {
    header.style.background = "rgba(3,7,12,.85)";
  }
});

// Botón menú móvil

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");

if (menu) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("activo");
  });
}

// Cerrar menú al seleccionar una opción

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (nav) {
      nav.classList.remove("activo");
    }
  });
});

// Enviar formulario (mensaje de prueba)

const formulario = document.querySelector("form");

if (formulario) {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Gracias por contactarnos. Nos comunicaremos contigo pronto.");

    formulario.reset();
  });
}
