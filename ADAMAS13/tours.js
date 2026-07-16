document.addEventListener("DOMContentLoaded", () => {

    const tours = document.querySelectorAll(".tour-card");

    tours.forEach((tour) => {

        const header = tour.querySelector(".tour-header");
        const icon = tour.querySelector(".toggle-button i");

        header.addEventListener("click", () => {

            const abierto = tour.classList.contains("active");

            // Cerrar todos
            tours.forEach((item) => {

                item.classList.remove("active");

                const i = item.querySelector(".toggle-button i");

                i.classList.remove("fa-chevron-up");
                i.classList.add("fa-chevron-down");

            });

            // Abrir el seleccionado
            if (!abierto) {

                tour.classList.add("active");

                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-up");

            }

        });

    });

});