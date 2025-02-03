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
            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
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



// PROPIEDADES EN VENTA

const propiedades_venta = [
    {
    nombre: "Casa moderna con piscina",
    src: "assets/img/1.webp",
    descripcion: "Hermosa casa con diseño moderno, amplio jardín y piscina.",
    ubicacion: "Av. Los Robles 123, Santiago",
    habitaciones: 4,
    costo: 350000,
    smoke: true,
    pets: true
    },
    {
    nombre: "Departamento céntrico con balcón",
    src: "./assets/img/2.jpg",
    descripcion: "Moderno departamento en el corazón de la ciudad.",
    ubicacion: "Calle Alameda 567, Santiago",
    habitaciones: 2,
    costo: 150000,
    smoke: true,
    pets: false
    },
    {
    nombre: "Casa rústica en la montaña",
    src: "./assets/img/3.jpg",
    descripcion: "Acogedora cabaña con chimenea y vista panorámica.",
    ubicacion: "Camino Cordillera 789, Valparaíso",
    habitaciones: 3,
    costo: 200000,
    smoke: true,
    pets: true
    },
    {
    nombre: "Penthouse con terraza privada",
    src: "./assets/img/4.jpg",
    descripcion: "Lujo y comodidad con vista panorámica.",
    ubicacion: "Av. Kennedy 345, Las Condes",
    habitaciones: 5,
    costo: 500000,
    smoke: true,
    pets: false
    },
    {
    nombre: "Casa familiar con jardín",
    src: "./assets/img/5.jpg",
    descripcion: "Espaciosa casa ideal para familias, con patio grande.",
    ubicacion: "Los Álamos 678, La Florida",
    habitaciones: 4,
    costo: 280000,
    smoke: true,
    pets: true
    },
    {
    nombre: "Loft minimalista",
    src: "./assets/img/6.jpg",
    descripcion: "Diseño minimalista con grandes ventanales.",
    ubicacion: "Barrio Italia, Providencia",
    habitaciones: 1,
    costo: 120000,
    smoke: true,
    pets: true
    }
    ];
    
    
    // PROPIEDADES ALQUILER
    const propiedades_alquiler = [
    {
    nombre: "Departamento con vista al mar",
    src: "./assets/img/7.jpg",
    descripcion: "Moderno departamento con balcón y vista al océano.",
    ubicacion: "Anida Costanera 234, Viña del Mar",
    habitaciones: 2,    costo: 750,
    smoke: true,
    pets: false
    },
    {
    nombre: "Casa de campo",
    src: "./assets/img/8.jpg",
    descripcion: "Hermosa casa de campo con amplios espacios verdes.",
    ubicacion: "Camino Rural 456, Curicó",
    habitaciones: 3,
    costo: 950,
    smoke: true,
    pets: true
    },
    {
    nombre: "Estudio en barrio bohemio",
    src: "./assets/img/9.jpg",
    descripcion: "Pequeño y acogedor estudio en el centro cultural.",
    ubicacion: "Calle Lastarria 567, Santiago",
    habitaciones: 1,
    costo: 600,
    smoke: true,
    pets: false
    },
    {
    nombre: "Dúplex con jardín privado",
    src: "./assets/img/10.webp",
    descripcion: "Elegante dúplex con dos pisos y áreas verdes.",
    ubicacion: "Av. Manquehue 789, Las Condes",
    habitaciones: 3,
    costo: 1200,
    smoke: true,
    pets: false
    },
    {
    nombre: "Habitación en departamento compartido",
    src: "./assets/img/11.jpg",
    descripcion: "Habitación amoblada en departamento con estudiantes.",
    ubicacion: "Calle Irarrázaval 345, Ñuñoa",
    habitaciones: 1,
    costo: 400,
    smoke: false,
    pets: false
    },
    {
    nombre: "Casa colonial en el centro",
    src: "./assets/img/12.jpg",
    descripcion: "Antigua casa colonial restaurada, en pleno casco histórico.",
    ubicacion: "Calle Merced 678, Santiago Centro",
    habitaciones: 4,
    costo: 1300,
    smoke: true,
    pets: false
    }
    ];
