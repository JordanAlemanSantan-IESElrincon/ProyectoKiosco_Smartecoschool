const vistaGeneral = document.querySelector("#vistaGeneral");
const vistaMensual = document.querySelector("#vistaMensual");

const tituloPrincipalVistaGeneral = document.querySelector("#tituloPrincipalVistaGeneral");
const tituloPrincipalVistaMensual = document.querySelector("#tituloPrincipalVistaMensual");

tituloPrincipalVistaGeneral.innerHTML = `Vista general`;
tituloPrincipalVistaMensual.innerHTML = `Vista mensual`;

function aplicarAnimationCambioVisibilidad(vistaActual, vistaNueva) {
    vistaNueva.classList.remove('desaparecer')

    vistaActual.classList.remove('aparecer');
    vistaActual.classList.add('desaparecer');

    setTimeout(() => {
        vistaActual.style.display = 'none';
        vistaNueva.style.display = 'inherit';
        vistaNueva.classList.add('aparecer');
    }, 1900);  // Duración de la animación en milisegundos (1.9 segundo en este caso)
}

function cambiarVisibilidad() {
    (vistaGeneral.style.display === 'none')
        ? aplicarAnimationCambioVisibilidad(vistaMensual, vistaGeneral)
        : aplicarAnimationCambioVisibilidad(vistaGeneral, vistaMensual);
}

setInterval(cambiarVisibilidad, 8000);  // 8,000 milisegundos = 8 segundos


