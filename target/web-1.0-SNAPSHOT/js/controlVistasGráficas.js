const vistaGeneral = document.querySelector("#vistaGeneral");
const vistaMensual = document.querySelector("#vistaMensual");

const tituloPrincipalVistaGeneral = document.querySelector("#tituloPrincipalVistaGeneral");
const tituloPrincipalVistaMensual = document.querySelector("#tituloPrincipalVistaMensual");

tituloPrincipalVistaGeneral.innerHTML = `Vista general`;
tituloPrincipalVistaMensual.innerHTML = `Vista mensual`;


// function cambiarVisibilidad() {
//     if (vistaGeneral.style.display === 'none') {
//         vistaGeneral.style.display = 'inherit';
//         vistaMensual.style.display = 'none';
//         aplicarAnimation(vistaGeneral, 'aparecer');
//         quitarAnimation(vistaMensual, 'desaparecer');
//
//
//     } else {
//         vistaGeneral.style.display = 'none';
//         vistaMensual.style.display = 'inherit';
//         aplicarAnimation(vistaMensual, 'aparecer');
//         quitarAnimation(vistaGeneral, 'desaparecer');
//     }
// }

function cambiarVisibilidad() {
    if (vistaGeneral.style.display === 'none') {
        vistaMensual.classList.remove('aparecer');
        vistaGeneral.classList.remove('desaparecer')

        vistaMensual.classList.add('desaparecer');

        setTimeout(() => {
            vistaMensual.style.display = 'none';
            vistaGeneral.style.display = 'inherit';
            vistaGeneral.classList.add('aparecer');
        }, 1900);  // Duración de la animación en milisegundos (1 segundo en este caso)

    } else {
        vistaGeneral.classList.remove('aparecer');
        vistaMensual.classList.remove('desaparecer')

        vistaGeneral.classList.add('desaparecer');

        setTimeout(() => {
            vistaGeneral.style.display = 'none';
            vistaMensual.style.display = 'inherit';
            vistaMensual.classList.add('aparecer');
        }, 1900);  // Duración de la animación en milisegundos (1 segundo en este caso)
    }
}

function aplicarAnimation(elemento, claseAnimation) {
    setTimeout(() => {
        elemento.classList.add(claseAnimation);
        setTimeout(() => {
            elemento.classList.remove(claseAnimation);
        }, 2000);  // Duración de la animación en milisegundos (1 segundo en este caso)
    }, 2000);  // Espera 1 segundo antes de aplicar la animación
}

function quitarAnimation(elemento, claseAnimation) {
    elemento.classList.add(claseAnimation);
    setTimeout(() => {
        elemento.classList.remove(claseAnimation);
    }, 2000);  // Duración de la animación en milisegundos (1 segundo en este caso)
}

// Llamada inicial
cambiarVisibilidad();

// Configurar el cambio cada 10 segundos
setInterval(cambiarVisibilidad, 8000);  // 10,000 milisegundos = 10 segundos

