document.addEventListener("DOMContentLoaded", function () {

    const destinos = document.querySelectorAll(".destino");

    destinos.forEach((destino) => {

        const boton = destino.querySelector(".boton");
        const icono = boton.querySelector("i");
        const contenido = destino.querySelector(".destino-body");

        // Ocultar al iniciar
        contenido.style.display = "none";

        boton.addEventListener("click", function () {

            const abierto = contenido.style.display === "block";

            // Cerrar todos los destinos
            destinos.forEach((item) => {

                item.querySelector(".destino-body").style.display = "none";

                const otroIcono = item.querySelector(".boton i");

                otroIcono.classList.remove("fa-chevron-up");
                otroIcono.classList.add("fa-chevron-down");

            });

            // Abrir solo el seleccionado
            if (!abierto) {

                contenido.style.display = "block";

                icono.classList.remove("fa-chevron-down");
                icono.classList.add("fa-chevron-up");

            }

        });

    });

});