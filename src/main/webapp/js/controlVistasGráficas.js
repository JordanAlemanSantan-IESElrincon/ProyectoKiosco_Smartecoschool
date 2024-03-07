const vistaGeneral = document.querySelector("#vistaGeneral");
const vistaMensual = document.querySelector("#vistaMensual");

// const tituloPrincipalVista = document.querySelector("#textoTituloPrincipalVista");

// tituloPrincipalVista.innerHTML = `Vista general`;

function aplicarAnimationCambioVisibilidad(vistaActual, vistaNueva) {
    vistaNueva.classList.remove('desaparecer')

    vistaActual.classList.remove('aparecer');
    vistaActual.classList.add('desaparecer');

    // tituloPrincipalVista.classList.add('desaparecer');

    setTimeout(() => {
        vistaActual.style.display = 'none';
        vistaNueva.style.display = 'inherit';
        // tituloPrincipalVista.innerHTML = textoTituloVista;

        vistaNueva.classList.add('aparecer');
        // tituloPrincipalVista.classList.remove(('desaparecer'))
        // tituloPrincipalVista.classList.add('aparecer');
    }, 1900);  // Duración de la animación en milisegundos (1.9 segundo en este caso)

    // tituloPrincipalVista.classList.remove(('aparecer'))
}

function cambiarVisibilidad() {
    (vistaGeneral.style.display === 'none')
        ? aplicarAnimationCambioVisibilidad(vistaMensual, vistaGeneral)
        : aplicarAnimationCambioVisibilidad(vistaGeneral, vistaMensual);
}

// setInterval(cambiarVisibilidad, 8000);  // 8,000 milisegundos = 8 segundos


