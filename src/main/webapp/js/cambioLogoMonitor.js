// Array de URLs de imágenes que quieres mostrar
const logosUrls = ["../img/logoSanCristobal.png", "../img/logoZazume.png", "../img/iconElRincon.png"];
let currentIndexLogos = 0;

// Función para cambiar la imagen y la última clase del contenedor
function changeLogos() {
    const image = document.getElementById("iconElRincon");
    const contenedorLogos = document.getElementById("contenedorLogos");

    // Cambiar la opacidad a 0 antes de cambiar la imagen
    image.style.opacity = "0";

    // Espera un breve momento para que la transición sea visible
    setTimeout(() => {
        // Cambiar la imagen
        image.src = logosUrls[currentIndexLogos];
        // Restaura la opacidad a 1 después de cambiar la imagen
        image.style.opacity = 1;

        // Cambiar la última clase del contenedor según el índice
        const clases = contenedorLogos.className.split(' ');
        let ultimaClase = "";

        switch (currentIndexLogos) {
            case 0:
                ultimaClase = "logo-img-header-SanCristobal";
                break;
            case 1:
                ultimaClase = "logo-img-header-zazume";
                break;
            case 2:
                ultimaClase = "logo-img-header-Rincon";
                break;
            // Agrega más casos según sea necesario para índices adicionales
        }

        // Si se encontró una clase correspondiente al índice, actualiza las clases del contenedor
        if (ultimaClase !== "") {
            // Reemplaza la última clase con la nueva clase determinada
            clases.pop();
            clases.push(ultimaClase);
            // Establece las nuevas clases en el contenedor
            contenedorLogos.className = clases.join(' ');
        }

        currentIndexLogos = (currentIndexLogos + 1) % logosUrls.length; // Incrementa el índice, volviendo al principio si se alcanza el final del array
    }, 500); // Espera 500 milisegundos (0.5 segundos)
}

// Array de URLs de imágenes que quieres mostrar
const iconosUrls = ["../img/qr1.png", "../img/iconSES.png"];
let currentIndexIconos = 0;

// Función para cambiar la imagen y la última clase del contenedor
function changeIconos() {
    const image = document.getElementById("iconSES");
    const contenedorIconos = document.getElementById("contenedorIcono");

    // Cambiar la opacidad a 0 antes de cambiar la imagen
    image.style.opacity = 0;

    // Espera un breve momento para que la transición sea visible
    setTimeout(() => {
        // Cambiar la imagen
        image.src = iconosUrls[currentIndexIconos];
        // Restaura la opacidad a 1 después de cambiar la imagen
        image.style.opacity = 1;

        // Cambiar la última clase del contenedor según el índice
        const clases = contenedorIconos.className.split(' ');
        let ultimaClase = "";

        switch (currentIndexIconos) {
            case 0:
                ultimaClase = "logo-img-header-SES";
                break;
            case 1:
                ultimaClase = "logo-img-header-SES";
                break;
            // Agrega más casos según sea necesario para índices adicionales
        }

        // Si se encontró una clase correspondiente al índice, actualiza las clases del contenedor
        if (ultimaClase !== "") {
            // Reemplaza la última clase con la nueva clase determinada
            clases.pop();
            clases.push(ultimaClase);
            // Establece las nuevas clases en el contenedor
            contenedorIconos.className = clases.join(' ');
        }

        currentIndexIconos = (currentIndexIconos + 1) % iconosUrls.length; // Incrementa el índice, volviendo al principio si se alcanza el final del array
    }, 500); // Espera 500 milisegundos (0.5 segundos)
}

// Intervalo de tiempo para cambiar la imagen (5 segundos)
setInterval(changeIconos, 15000);
setInterval(changeLogos, 5000);
