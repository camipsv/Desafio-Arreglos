
import { propiedades_venta, propiedades_alquiler } from "./propiedades.js";

function renderizarPropiedades(propiedades, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";

    propiedades.forEach((propiedad) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");

    card.innerHTML = `
        <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
        <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-toilet"></i> ${propiedad.baños} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
            <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
            ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
            <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> 
            ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
            </p>
        </div>
        </div>
    `;

    contenedor.appendChild(card);
    });
}

  // Renderizar propiedades en venta y alquiler
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado correctamente");

    if (document.getElementById("venta-propiedades")) {
        renderizarPropiedades(propiedades_venta, "venta-propiedades");
    }

    if (document.getElementById("alquiler-propiedades")) {
        renderizarPropiedades(propiedades_alquiler, "alquiler-propiedades");
    }
});
