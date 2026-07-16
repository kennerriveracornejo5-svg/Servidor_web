document.addEventListener("DOMContentLoaded", function () {
  /*=================================
 UBICACIÓN
=================================*/

  const ubicacionSlides = document.querySelectorAll(".ubicacion-slide");

  let ubicacionActual = 0;

  if (ubicacionSlides.length > 0) {
    function cambiarUbicacion() {
      ubicacionSlides[ubicacionActual].classList.remove("active");
      ubicacionSlides[ubicacionActual].classList.add("exit");

      ubicacionActual++;

      if (ubicacionActual >= ubicacionSlides.length) {
        ubicacionActual = 0;
      }

      ubicacionSlides.forEach((img) => {
        img.classList.remove("active");
      });

      ubicacionSlides[ubicacionActual].classList.add("active");
    }

    setInterval(cambiarUbicacion, 3000);
  }

  /*=================================
 PROMOCIONES
=================================*/

  const imagenesPromo = [
    "img/promocion1.webp",
    "img/promocion2.webp",
    "img/promocion3.jpg",
    "img/promocion4.jpg",
    "img/promocion5.webp",
    "img/promocion6.webp",
  ];

  const titulosPromo = [
    "TOUR HUANCAYO 2026",
    "CANON DE UCHCO",
    "LAGUNA HUALLHUA",
    "HUANCAYA",
    "MIRADOR CABRACANCHA",
    "CATARATAS HUALLHUA",
  ];

  let indicePromo = 0;

  const promoImg = document.getElementById("promoImg");

  const promoTitulo = document.getElementById("promoTitulo");

  const btnNext = document.getElementById("nextPromo");

  const btnPrev = document.getElementById("prevPromo");

  function actualizarPromo() {
    promoImg.src = imagenesPromo[indicePromo];

    promoTitulo.textContent = titulosPromo[indicePromo];
  }

  if (promoImg && btnNext && btnPrev) {
    btnNext.onclick = function () {
      indicePromo++;

      if (indicePromo >= imagenesPromo.length) {
        indicePromo = 0;
      }

      actualizarPromo();
    };

    btnPrev.onclick = function () {
      indicePromo--;

      if (indicePromo < 0) {
        indicePromo = imagenesPromo.length - 1;
      }

      actualizarPromo();
    };
  }

  /*=================================
 FORMULARIO
=================================*/

  const formulario = document.querySelector("form");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("Mensaje enviado correctamente.");

      formulario.reset();
    });
  }
});
