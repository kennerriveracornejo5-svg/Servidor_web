/*=========================================
        BUSCADOR DE PROYECTOS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");

  const cards = document.querySelectorAll(".project-card");

  function buscarProyectos() {
    const texto = input.value.toLowerCase().trim();

    cards.forEach((card) => {
      const contenido = (
        (card.dataset.name || "") +
        " " +
        (card.dataset.project || "") +
        " " +
        (card.dataset.category || "") +
        " " +
        (card.dataset.tech || "") +
        " " +
        (card.dataset.description || "")
      ).toLowerCase();

      if (contenido.includes(texto)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  input.addEventListener("keyup", buscarProyectos);
});
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".project-card");

  console.log("Input:", input);
  console.log("Tarjetas encontradas:", cards.length);
});
document.getElementById("searchInput").disabled;
